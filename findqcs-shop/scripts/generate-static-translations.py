#!/usr/bin/env python3
"""Generate the checked-in reader translations used by the site.

Run after extract-translatable.mjs. This maintenance script requires googletrans
4.0.0rc1, but the deployed site has no translation-service dependency.
"""

import json
import re
import sys
import time
from pathlib import Path

from googletrans import Translator
from httpx import Timeout

source_path = Path(sys.argv[1] if len(sys.argv) > 1 else "/tmp/findqc-english-strings.json")
output_path = Path(sys.argv[2] if len(sys.argv) > 2 else "app/translations.generated.json")
source = json.loads(source_path.read_text())

locales = {
    "nl": "translate.google.nl",
    "de": "translate.google.de",
    "it": "translate.google.it",
    "es": "translate.google.es",
}


def clean_translation(value):
    value = re.sub(r"(?<=[a-zà-öø-ÿ0-9%])([.!?])(?=[A-ZÀ-ÖØ-Þ])", r"\1 ", value)
    value = re.sub(r"(QC)([.!?])(?=[A-ZÀ-ÖØ-Þ])", r"\1\2 ", value)
    return re.sub(r"[ \t]+", " ", value).strip()


def chunks(values, limit=3200):
    group, size = [], 0
    for value in values:
        addition = len(value) + 24
        if group and size + addition > limit:
            yield group
            group, size = [], 0
        group.append(value)
        size += addition
    if group:
        yield group


def translate_group(group, locale, service):
    markers = [f"@@@FQSEP{i:04d}@@@" for i in range(1, len(group))]
    payload_parts = []
    for index, value in enumerate(group):
        if index:
            payload_parts.append(markers[index - 1])
        payload_parts.append(value)
    payload = "\n".join(payload_parts)

    last_error = None
    for attempt in range(5):
        try:
            translator = Translator(service_urls=[service], http2=False, timeout=Timeout(25.0))
            translated = translator.translate(payload, dest=locale).text
            pattern = r"\s*@@@FQSEP\d{4}@@@\s*"
            pieces = re.split(pattern, translated)
            if len(pieces) != len(group):
                raise RuntimeError(f"separator mismatch: expected {len(group)}, got {len(pieces)}")
            return [clean_translation(piece) for piece in pieces]
        except Exception as error:
            last_error = error
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(f"translation failed for {locale}: {last_error}")


if output_path.exists():
    result = json.loads(output_path.read_text())
    result = {
        locale: {key: clean_translation(value) for key, value in values.items()}
        for locale, values in result.items()
    }
else:
    result = {}
for locale, service in locales.items():
    translated_map = result.get(locale, {})
    pending = [value for value in source if value not in translated_map]
    groups = list(chunks(pending))
    if not groups:
        print(f"{locale}: already complete", flush=True)
        continue
    for index, group in enumerate(groups, 1):
        translated = translate_group(group, locale, service)
        translated_map.update(zip(group, translated))
        result[locale] = translated_map
        output_path.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
        print(f"{locale}: {index}/{len(groups)} chunks", flush=True)
        time.sleep(0.35)

output_path.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
print(f"Wrote {sum(len(values) for values in result.values())} translations to {output_path}")
