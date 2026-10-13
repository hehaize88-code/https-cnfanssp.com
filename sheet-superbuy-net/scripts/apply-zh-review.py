import json,pathlib
root=pathlib.Path(__file__).resolve().parents[1]
a=json.loads((root/'content/locales/zh.json').read_text())
for p in (root/'content/zh-reviewed').glob('*.md'):
 en=(root/'content/new'/p.name).read_text().strip().split('\n\n')
 zh=p.read_text().strip().split('\n\n')
 assert len(en)==len(zh),(p.name,len(en),len(zh))
 for x,y in zip(en,zh):a[x.lstrip('# ')]=y.lstrip('# ')
(root/'content/locales/zh.json').write_text(json.dumps(a,ensure_ascii=False,indent=2)+'\n')
print('Applied complete reviewed Chinese article text.')
