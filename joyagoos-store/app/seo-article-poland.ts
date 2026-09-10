import type { SiteLanguage } from "./i18n";

type ArticleCopy = {
  title: string;
  description: string;
  updated: string;
  read: string;
  sections: readonly (readonly [string, string])[];
  sources: readonly { title: string; href: string }[];
};
const sources: ArticleCopy["sources"] = [];
export const polandDestinationArticleSlug =
  "joyagoo-poland-language-address-product-option-preparation" as const;

const en: ArticleCopy = {
  title: "Joyagoo Poland Guide: Prepare Language, Address and Product Options",
  description:
    "Build a Poland-ready Joyagoo order record that preserves source wording, exact product options, measurements and private address fields without guessing freight or delivery.",
  updated: "September 10, 2026",
  read: "14 min read",
  sources,
  sections: [
    [
      "Define a Poland-ready record",
      "A Poland-ready record is a private working file, not a promise that a product can use a particular international line. It connects the original seller listing, the exact selection requested through Joyagoo and the recipient fields that will later be entered for Poland. Joyagoo’s current public shopping guidance tells buyers to choose color, size and quantity before product payment and separates that stage from later parcel submission. Use those stages as boundaries. At the product stage, preserve identity, options, quantity and seller-to-warehouse details. At the parcel stage, validate the destination form and whatever restrictions the live account shows. Do not add guessed freight, taxes, route availability or delivery time to this guide. A language and field record is useful precisely because it leaves those changing decisions to the live transaction. Add an owner for every unresolved field so a missing answer cannot disappear between the shortlist, product-payment review and parcel submission.",
    ],
    [
      "Keep the source term beside the Polish working meaning",
      "Treat option text as an instruction. Save the seller’s original characters before translating them, then add a Polish working meaning and a short evidence note. Evidence may be an option-linked image, model code, material label, size chart or a documented seller clarification. If two meanings remain possible, label the field unresolved and ask a targeted question. Do not silently convert a model suffix into a color, a bundle count into a size or a material claim into a quality conclusion. Numbers, codes, percentages and capitalization should stay unchanged unless the source itself changes. The translation does not need to sound like advertising; it needs to let another reviewer trace the selected option back to the live listing. Keep a check date because an accurate translation of an old option cannot prove that the option is still available. Preserve the raw title too; it helps distinguish a seller wording change from an editor changing the Polish interpretation later.",
    ],
    [
      "Separate four product-option fields",
      "Create separate fields for color, size, version and quantity even when the seller combines them in one label. For color, store the exact text plus a cautious visual description; lighting and screen processing can shift the apparent shade. For size, record the system—seller-specific, CN, EU, UK or US—along with the measurements used to choose it. For version, retain model, edition, plug, fabric weight, package type or any other distinction. For quantity, distinguish checkout units from pieces inside one unit. A two-piece set can still use quantity one. Select the full combination before saving the displayed product price, but keep price outside the option conclusion. The completed line must be understandable without a thumbnail: original labels, Polish meanings, measurement basis, pieces per unit and any open question. Record mutually dependent choices together because changing a color can reset size, version or pack count on some listings.",
    ],
    [
      "Record measurements and units without inventing equivalence",
      "Polish buyers commonly use centimetres, but a familiar unit does not make an unfamiliar size system equivalent. Save the seller’s original measurements, unit and endpoints. For a garment, state whether width is measured flat and whether chest means half-width or circumference. For trousers, distinguish waist, rise and inseam. For shoes, keep printed size, recommended foot length, insole length and internal length separate. Convert millimetres and centimetres only with visible arithmetic and keep the source value beside the conversion. Compare with a personally owned item measured the same way, not with a generic international chart. If the decisive endpoint is missing, ask for that endpoint rather than guessing a Polish or EU label. The result is a comparison record, not a fit guarantee. Note the measuring tool and date when personal garment measurements drive the choice, since endpoints and garment tension can otherwise make two values look falsely equivalent.",
    ],
    [
      "Prepare Polish address fields as private structured data",
      "Never place a real recipient address in a public article, shared product sheet or support screenshot. In the buyer’s private file, separate recipient name, street, building number, apartment number when needed, postal code, locality, country and any contact field the live form requires. The Universal Postal Union’s Poland addressing sheet shows a five-digit postcode written with a hyphen between the second and third digits and placed before the locality, with the street and building details on the line above. Use that as a format check, not a delivery guarantee. Preserve Polish diacritics when the live form accepts them and compare the final address preview character by character. Do not force a locker, poste-restante or P.O.-box format into ordinary residential fields; special delivery formats depend on the selected service and must be supported by the live route. Before submission, read the normalized preview from top to bottom and confirm no field was truncated, transliterated or moved into an unsuitable address line.",
    ],
    [
      "Review product payment and parcel payment separately",
      "Before product payment, reopen the final source listing and compare the current destination, product identity, exact color, size, version, quantity, seller note and China domestic-freight field with the record. A saved directory row cannot freeze availability or price. If the page redirects, the option disappears or the summary differs, stop and update the record. Before parcel payment, compare the private recipient fields with the destination preview and confirm that the actual stored products appear in the parcel. Current route, price, chargeable weight, insurance, restrictions and delivery estimates belong to this second review and must be read from the active account. Keeping the two gates separate prevents a translated product note from being mistaken for a shipping promise and makes it easier to identify which decision needs correction. Save both approvals separately: one for the seller-order instruction and another for the finished parcel, destination and current transport conditions.",
    ],
    [
      "Use statuses as evidence checkpoints",
      "Joyagoo’s current order-status page distinguishes product and parcel stages. Save the exact visible label and timestamp rather than paraphrasing every event as ‘processing.’ Purchased supports that the buying action occurred; Seller Sent supports that the seller dispatched toward the warehouse; Stock Arrived supports receipt; QC Completed makes received-item evidence available; Stored in Warehouse indicates the item can enter parcel planning. None of those labels guarantees when the next event will occur. At QC, compare product identity first, then the recorded color, size tag, version cues, quantity and included parts. If a measurement or label is unclear, write one bilingual request containing the original term and the Polish working meaning. Preserve the dated answer so the record forms a chain from listing to order summary and warehouse evidence. A status label should never replace the underlying record: keep the selected option, source snapshot and requested QC point attached to the same item identifier.",
    ],
    [
      "Close with a privacy-safe decision packet",
      "Run a final checklist: current source destination; check date; original product title; exact option labels; Polish working meanings; named size system; measurement endpoints and units; version; order units and pieces; matching order summary; private Polish address fields; and every unresolved question. End with one decision—proceed, wait for clarification, change the selection or remove the item. Do not label the whole product verified when only its fields were checked. If support is needed, crop the evidence to the one product and one issue, redact unrelated orders, payment data, full address and account identifiers, and state the requested correction. A strong Poland guide does not promise the cheapest route or fastest delivery. It produces a language-safe, private and auditable order record that can be rechecked whenever the live listing or form changes.",
    ],
  ],
};

const make = (
  title: string,
  description: string,
  updated: string,
  read: string,
  rows: [string, string][],
): ArticleCopy => ({
  title,
  description,
  updated,
  read,
  sections: rows,
  sources,
});
const local: Record<Exclude<SiteLanguage, "en">, ArticleCopy> = {
  zh: make(
    "Joyagoo 波兰指南：准备语言、地址与商品选项",
    "建立保留原文、准确选项、测量与私人地址字段的波兰订单记录，不猜测运费或时效。",
    "2026年9月10日",
    "阅读约14分钟",
    [
      [
        "定义面向波兰的记录",
        "这是一份私人工作文件，不是线路承诺。它连接卖家原始页面、Joyagoo订单选项和稍后填写的波兰收件字段。商品付款前记录身份、颜色、尺码、数量和卖家至仓库信息；包裹阶段再核对目的地表单与实时限制。不要加入猜测的运费、税费、线路或时效。",
      ],
      [
        "原文与波兰语含义并排保存",
        "先保存卖家原始字符，再写波兰语工作含义和证据，如选项图片、型号、材料标签、尺码表或卖家回复。有两种解释时标记未解决并提问。数字、代码、百分比和大小写保持原样，并写核查日期；正确翻译旧选项不等于当前仍可购买。",
      ],
      [
        "拆分四个商品选项",
        "颜色、尺码、版本和数量分别成字段。颜色文字与视觉描述分开；尺码同时保存体系与测量；版本保留型号、材质或包装差异；数量区分下单单位与每单位件数。完成全部选择后再保存显示价格，但不要把价格当作选项证明。",
      ],
      [
        "不编造测量换算",
        "保存原始数值、单位和测量端点。服装注明平铺宽度或围度，裤装区分腰围、裆高和内长，鞋类区分印刷尺码、脚长、鞋垫和内部长度。毫米与厘米可透明换算，并保留原值；缺关键端点就提问，不用通用表猜合身。",
      ],
      [
        "把波兰地址作为私人结构化数据",
        "私人文件中分别保存姓名、街道、楼号、必要的房号、邮编、城市、国家和实时表单要求的联系方式。UPU波兰格式表显示五位邮编在第二、三位间有连字符，并位于城市前。逐字核对预览并保留变音符号；普通住址不要强行套用柜机或邮局特殊格式。",
      ],
      [
        "两次付款分别复核",
        "商品付款前重新打开来源，比较链接、身份、选项、数量、卖家说明和中国境内运费字段；重定向或不一致就暂停。包裹付款前再核对私人地址预览和商品列表，实时读取线路、价格、计费重、保险与限制。两个关口分开，避免把翻译说明写成运输承诺。",
      ],
      [
        "把状态当作证据节点",
        "保存Purchased、Seller Sent、Stock Arrived、QC Completed、Stored等实时标签和时间。它们证明不同事件，不保证下一步时间。QC时先对照身份、颜色、尺码标签、版本、数量和配件；不清楚就用原词与波兰语说明发出一个精确请求并保存回复。",
      ],
      [
        "形成保护隐私的决策包",
        "最终核对来源、日期、原始标题、选项、波兰语含义、尺码体系、测量、版本、数量、订单摘要、私人地址和待解决问题，并明确继续、等待、换选项或删除。联系支持时裁剪单一问题并遮盖其他订单、付款、完整地址和账户信息。",
      ],
    ],
  ),
  de: make(
    "Joyagoo Polen: Sprache, Adresse und Produktoptionen vorbereiten",
    "Erstelle einen polentauglichen Datensatz mit Originaltext, Optionen, Maßen und privaten Adressfeldern ohne Frachtversprechen.",
    "10. September 2026",
    "14 Min. Lesezeit",
    [
      [
        "Polentauglich definieren",
        "Der private Datensatz verbindet Verkäuferquelle, Joyagoo-Auswahl und spätere polnische Empfängerfelder; er garantiert keine Linie. Produktdaten gehören vor die Produktzahlung, Ziel- und Live-Routenprüfung vor die Paketzahlung. Fracht, Steuer und Laufzeit werden nicht geraten.",
      ],
      [
        "Original und polnische Arbeitsbedeutung",
        "Sichere zuerst den Originaltext, dann polnische Bedeutung und Beleg wie Bild, Modell, Tabelle oder Antwort. Bei zwei Bedeutungen bleibt das Feld offen. Zahlen, Codes und Prozente bleiben unverändert; das Prüfdatum zeigt, dass Übersetzung keinen Bestand reserviert.",
      ],
      [
        "Vier Optionsfelder trennen",
        "Farbe, Größe, Version und Menge werden unabhängig gespeichert. Trenne Farbtext vom Bildeindruck, Größenlabel vom Maß, Version vom Grundmodell und Bestelleinheiten von Stücken je Einheit. Der Preis wird erst nach vollständiger Auswahl notiert, aber nicht als Optionsbeweis behandelt.",
      ],
      [
        "Maße ohne erfundene Gleichheit",
        "Speichere Wert, Einheit und Endpunkte. Bei Kleidung unterscheide flache Breite und Umfang, bei Hosen Taille, Leibhöhe und Innenbein, bei Schuhen Etikett, Fuß, Innensohle und Innenlänge. Rechne transparent und frage bei fehlendem Schlüsselmaß.",
      ],
      [
        "Polnische Adresse privat strukturieren",
        "Trenne Name, Straße, Haus, Wohnung, Postleitzahl, Ort, Land und geforderten Kontakt. Das UPU-Blatt zeigt fünf Stellen mit Bindestrich nach der zweiten Ziffer vor dem Ort. Prüfe Vorschau und diakritische Zeichen; Sonderzustellung braucht Live-Unterstützung.",
      ],
      [
        "Zwei Zahlungen prüfen",
        "Vor Produktzahlung Quelle, Identität, Optionen, Menge, Hinweis und China-Frachtfeld vergleichen. Vor Paketzahlung private Adresse und reale Artikel prüfen und Linie, Preis, Gewicht, Versicherung und Beschränkung live lesen. Bei Abweichung stoppen.",
      ],
      [
        "Status als Belegpunkte",
        "Speichere exakte Status und Zeiten. Purchased, Seller Sent, Stock Arrived, QC Completed und Stored belegen verschiedene Schritte ohne Zeitgarantie. Vergleiche beim QC Identität und Optionsfelder; stelle bei Unklarheit eine zweisprachige gezielte Frage.",
      ],
      [
        "Datenschutzsicher abschließen",
        "Prüfe Quelle, Datum, Original, Optionen, Bedeutung, Maßsystem, Version, Menge, Zusammenfassung, private Adresse und Fragen. Wähle fortfahren, warten, ändern oder entfernen. Für Support nur den nötigen Ausschnitt teilen und Adresse, Zahlung und Konto-IDs schwärzen.",
      ],
    ],
  ),
  pl: make(
    "Joyagoo dla Polski: przygotuj język, adres i opcje produktu",
    "Zbuduj polski zapis zamówienia z oryginałem, dokładnymi opcjami, pomiarami i prywatnym adresem bez zgadywania kosztów.",
    "10 września 2026",
    "14 min czytania",
    [
      [
        "Zdefiniuj zapis gotowy dla Polski",
        "Prywatny plik łączy ofertę sprzedawcy, dokładny wybór Joyagoo i pola odbiorcy; nie gwarantuje linii. Dane produktu sprawdza się przed pierwszą płatnością, a adres i ograniczenia przy paczce. Nie wpisuj zgadywanego frachtu, podatku ani terminu.",
      ],
      [
        "Zachowaj oryginał obok polskiego znaczenia",
        "Najpierw zapisz znaki sprzedawcy, potem polskie znaczenie robocze i dowód: obraz opcji, model, tabelę lub odpowiedź. Dwie możliwe interpretacje oznaczają pytanie. Numery, kody i procenty pozostają bez zmian, a data kontroli nie rezerwuje dostępności.",
      ],
      [
        "Rozdziel cztery pola opcji",
        "Kolor, rozmiar, wersja i ilość zapisuj osobno. Oddziel nazwę koloru od wyglądu zdjęcia, etykietę rozmiaru od pomiaru, wersję od modelu oraz jednostki zamówienia od sztuk. Cenę zapisuj po pełnym wyborze, lecz poza wnioskiem o opcji.",
      ],
      [
        "Mierz bez wymyślonego przelicznika",
        "Zapisz wartość, jednostkę i punkty pomiaru. Dla ubrań rozróżnij szerokość na płasko i obwód, dla spodni talię, stan i nogawkę, dla butów rozmiar, stopę, wkładkę i wnętrze. Przeliczaj jawnie; brak kluczowej miary wymaga pytania.",
      ],
      [
        "Przygotuj prywatne pola adresowe",
        "Oddziel imię i nazwisko, ulicę, numer domu, lokal, kod, miejscowość, kraj i wymagany kontakt. Arkusz UPU dla Polski pokazuje kod pięciocyfrowy z łącznikiem po drugiej cyfrze przed miejscowością. Porównaj podgląd i polskie znaki; format specjalny wymaga obsługi live.",
      ],
      [
        "Sprawdź dwie płatności osobno",
        "Przed płatnością za produkt porównaj źródło, tożsamość, opcje, ilość, notatkę i chińską dostawę. Przed frachtem porównaj prywatny adres i faktyczne towary, a linię, cenę, wagę, ubezpieczenie i ograniczenia odczytaj na żywo.",
      ],
      [
        "Traktuj statusy jako dowody",
        "Zapisuj dokładną nazwę i czas. Purchased, Seller Sent, Stock Arrived, QC Completed i Stored potwierdzają różne zdarzenia, nie następny termin. Przy QC porównaj produkt i cztery pola; niejasność wyjaśnij jednym pytaniem z oryginałem i polskim znaczeniem.",
      ],
      [
        "Zamknij pakiet bez danych prywatnych",
        "Sprawdź źródło, datę, oryginał, opcje, polskie znaczenia, system rozmiaru, pomiary, wersję, ilość, podsumowanie, prywatny adres i pytania. Wybierz kontynuuj, czekaj, zmień lub usuń. Dla wsparcia ukryj płatności, pełny adres i identyfikatory.",
      ],
    ],
  ),
  es: make(
    "Joyagoo para Polonia: prepara idioma, dirección y opciones",
    "Crea un registro para Polonia con texto original, opciones, medidas y dirección privada sin prometer costes.",
    "10 de septiembre de 2026",
    "14 min de lectura",
    [
      [
        "Definir un registro para Polonia",
        "El archivo privado une anuncio, selección Joyagoo y campos del destinatario; no garantiza ruta. Revisa producto antes del primer pago y dirección y restricciones en el paquete. No inventes flete, impuestos ni plazo.",
      ],
      [
        "Guardar original y significado polaco",
        "Conserva caracteres, significado de trabajo y prueba: imagen, modelo, tabla o respuesta. Dos sentidos quedan abiertos. Números, códigos y porcentajes no cambian; la fecha de revisión no reserva disponibilidad.",
      ],
      [
        "Separar cuatro opciones",
        "Color, talla, versión y cantidad son campos distintos. Separa texto de color de imagen, talla de medidas, versión de modelo y unidades de piezas. Anota precio tras elegir todo, pero fuera de la conclusión sobre la opción.",
      ],
      [
        "Medir sin equivalencias inventadas",
        "Guarda valor, unidad y extremos. En ropa distingue ancho y contorno; en pantalón cintura, tiro y entrepierna; en calzado talla, pie, plantilla e interior. Convierte de forma visible y pregunta si falta la medida decisiva.",
      ],
      [
        "Estructurar la dirección privada",
        "Separa nombre, calle, edificio, apartamento, código, localidad, país y contacto requerido. UPU muestra cinco cifras con guion tras la segunda y antes de la localidad. Revisa vista previa y diacríticos; formatos especiales requieren soporte activo.",
      ],
      [
        "Revisar dos pagos",
        "Antes del producto compara fuente, identidad, opciones, cantidad, nota y entrega china. Antes del paquete compara dirección privada y artículos reales y lee ruta, precio, peso, seguro y restricciones en la cuenta activa.",
      ],
      [
        "Usar estados como pruebas",
        "Guarda etiqueta y hora. Purchased, Seller Sent, Stock Arrived, QC Completed y Stored prueban fases diferentes sin garantizar la siguiente. En QC compara producto y opciones; pregunta con término original y significado polaco.",
      ],
      [
        "Cerrar con privacidad",
        "Confirma fuente, fecha, original, opciones, significado, sistema, medidas, versión, cantidad, resumen, dirección privada y dudas. Decide seguir, esperar, cambiar o eliminar. Para soporte oculta pagos, dirección completa e identificadores.",
      ],
    ],
  ),
  it: make(
    "Joyagoo per la Polonia: prepara lingua, indirizzo e opzioni",
    "Crea un record polacco con testo originale, opzioni, misure e indirizzo privato senza promesse di costo.",
    "10 settembre 2026",
    "14 min di lettura",
    [
      [
        "Definire un record per la Polonia",
        "Il file privato collega annuncio, selezione Joyagoo e campi del destinatario; non garantisce rotta. Controlla il prodotto prima del primo pagamento e indirizzo e restrizioni nel pacco. Non inventare trasporto, imposte o tempi.",
      ],
      [
        "Salvare originale e significato polacco",
        "Conserva caratteri, significato operativo e prova come immagine, modello, tabella o risposta. Due interpretazioni restano aperte. Numeri, codici e percentuali non cambiano; la data non riserva disponibilità.",
      ],
      [
        "Separare quattro opzioni",
        "Colore, taglia, versione e quantità sono distinti. Separa testo colore da immagine, taglia da misure, versione da modello e unità da pezzi. Salva il prezzo dopo la scelta completa, fuori dalla conclusione sull’opzione.",
      ],
      [
        "Misurare senza equivalenze inventate",
        "Salva valore, unità e punti. Per abiti distingui larghezza e circonferenza; per pantaloni vita, cavallo e interno gamba; per scarpe taglia, piede, soletta e interno. Converti apertamente e chiedi la misura mancante.",
      ],
      [
        "Strutturare l’indirizzo privato",
        "Separa nome, via, edificio, appartamento, codice, località, paese e contatto richiesto. UPU mostra cinque cifre con trattino dopo la seconda prima della località. Controlla anteprima e segni; formati speciali richiedono supporto live.",
      ],
      [
        "Controllare due pagamenti",
        "Prima del prodotto confronta fonte, identità, opzioni, quantità, nota e consegna cinese. Prima del pacco confronta indirizzo e articoli reali e leggi rotta, prezzo, peso, assicurazione e restrizioni live.",
      ],
      [
        "Stati come prove",
        "Salva etichetta e ora. Purchased, Seller Sent, Stock Arrived, QC Completed e Stored provano eventi diversi senza tempi garantiti. Al QC confronta prodotto e opzioni; fai una domanda con termine originale e significato polacco.",
      ],
      [
        "Chiudere con privacy",
        "Conferma fonte, data, originale, opzioni, significati, sistema, misure, versione, quantità, riepilogo, indirizzo privato e dubbi. Scegli procedere, attendere, cambiare o rimuovere. Oscura pagamenti, indirizzo e ID per il supporto.",
      ],
    ],
  ),
  fr: make(
    "Joyagoo pour la Pologne : préparer langue, adresse et options",
    "Créez un dossier Pologne avec texte source, options, mesures et adresse privée sans promesse de coût.",
    "10 septembre 2026",
    "14 min de lecture",
    [
      [
        "Définir le dossier Pologne",
        "Le fichier privé relie annonce, sélection Joyagoo et champs destinataire; il ne garantit aucune ligne. Contrôlez le produit avant le premier paiement, puis adresse et restrictions au colis. N’inventez ni fret, taxe ou délai.",
      ],
      [
        "Garder original et sens polonais",
        "Conservez caractères, sens de travail et preuve: image, modèle, tableau ou réponse. Deux sens restent ouverts. Nombres, codes et pourcentages restent; la date de contrôle ne réserve pas le stock.",
      ],
      [
        "Séparer quatre options",
        "Couleur, taille, version et quantité sont distinctes. Séparez texte couleur et image, taille et mesure, version et modèle, unités et pièces. Notez le prix après la sélection complète, hors de la conclusion sur l’option.",
      ],
      [
        "Mesurer sans équivalence inventée",
        "Gardez valeur, unité et extrémités. Pour vêtement distinguez largeur et tour; pour pantalon taille, fourche et entrejambe; pour chaussures étiquette, pied, semelle et intérieur. Convertissez clairement et questionnez la mesure absente.",
      ],
      [
        "Structurer l’adresse privée",
        "Séparez nom, rue, bâtiment, appartement, code, ville, pays et contact requis. UPU montre cinq chiffres avec tiret après le second avant la ville. Vérifiez aperçu et signes polonais; un format spécial exige un service compatible.",
      ],
      [
        "Contrôler les deux paiements",
        "Avant le produit comparez source, identité, options, quantité, note et livraison chinoise. Avant le colis comparez adresse et articles réels, puis lisez ligne, prix, poids, assurance et restrictions en direct.",
      ],
      [
        "Statuts comme preuves",
        "Sauvez libellé et heure. Purchased, Seller Sent, Stock Arrived, QC Completed et Stored prouvent des événements différents sans délai garanti. Au QC comparez produit et options; posez une question bilingue ciblée.",
      ],
      [
        "Clore en protégeant les données",
        "Confirmez source, date, original, options, sens, système, mesures, version, quantité, résumé, adresse privée et questions. Décidez avancer, attendre, modifier ou retirer. Masquez paiements, adresse complète et identifiants pour le support.",
      ],
    ],
  ),
  pt: make(
    "Joyagoo para a Polónia: preparar idioma, morada e opções",
    "Crie um registo polaco com original, opções, medidas e morada privada sem prometer custos.",
    "10 de setembro de 2026",
    "14 min de leitura",
    [
      [
        "Definir o registo para a Polónia",
        "O ficheiro privado liga anúncio, seleção Joyagoo e campos do destinatário; não garante rota. Reveja produto antes do primeiro pagamento e morada e restrições no pacote. Não invente frete, impostos ou tempo.",
      ],
      [
        "Guardar original e sentido polaco",
        "Conserve caracteres, significado de trabalho e prova: imagem, modelo, tabela ou resposta. Duas interpretações ficam abertas. Números, códigos e percentagens não mudam; a data não reserva disponibilidade.",
      ],
      [
        "Separar quatro opções",
        "Cor, tamanho, versão e quantidade são campos distintos. Separe texto da cor da imagem, tamanho das medidas, versão do modelo e unidades das peças. Registe preço após selecionar tudo, fora da conclusão da opção.",
      ],
      [
        "Medir sem equivalência inventada",
        "Guarde valor, unidade e pontos. Na roupa distinga largura e circunferência; nas calças cintura, gancho e perna; no calçado tamanho, pé, palmilha e interior. Converta claramente e pergunte pelo valor decisivo ausente.",
      ],
      [
        "Estruturar a morada privada",
        "Separe nome, rua, edifício, apartamento, código, localidade, país e contacto. UPU mostra cinco dígitos com hífen após o segundo antes da localidade. Compare a prévia e sinais polacos; formato especial exige suporte ativo.",
      ],
      [
        "Rever dois pagamentos",
        "Antes do produto compare fonte, identidade, opções, quantidade, nota e entrega chinesa. Antes do pacote compare morada e artigos e leia rota, preço, peso, seguro e restrições na conta atual.",
      ],
      [
        "Usar estados como prova",
        "Guarde etiqueta e hora. Purchased, Seller Sent, Stock Arrived, QC Completed e Stored provam eventos diferentes sem garantir o seguinte. No QC compare produto e opções; faça uma pergunta bilingue específica.",
      ],
      [
        "Fechar com privacidade",
        "Confirme fonte, data, original, opções, significados, sistema, medidas, versão, quantidade, resumo, morada privada e dúvidas. Escolha avançar, esperar, mudar ou remover. Oculte pagamentos, morada e IDs para apoio.",
      ],
    ],
  ),
  ro: make(
    "Joyagoo pentru Polonia: pregătește limba, adresa și opțiunile",
    "Creează o fișă poloneză cu originalul, opțiunile, măsurile și adresa privată fără promisiuni de cost.",
    "10 septembrie 2026",
    "14 min de citit",
    [
      [
        "Definește fișa pentru Polonia",
        "Fișierul privat leagă oferta, selecția Joyagoo și câmpurile destinatarului; nu garantează rută. Verifică produsul înaintea primei plăți, apoi adresa și restricțiile la colet. Nu inventa transport, taxe sau timp.",
      ],
      [
        "Păstrează originalul și sensul polonez",
        "Salvează caracterele, sensul de lucru și dovada: imagine, model, tabel sau răspuns. Două sensuri rămân nerezolvate. Numerele, codurile și procentele rămân; data verificării nu rezervă stoc.",
      ],
      [
        "Separă patru opțiuni",
        "Culoarea, mărimea, versiunea și cantitatea sunt distincte. Separă textul culorii de imagine, eticheta de măsuri, versiunea de model și unitățile de piese. Notează prețul după selecția completă, separat de concluzia opțiunii.",
      ],
      [
        "Măsoară fără echivalențe inventate",
        "Păstrează valoarea, unitatea și punctele. La haine separă lățimea și circumferința; la pantaloni talia, turul și interiorul; la pantofi eticheta, piciorul, branțul și interiorul. Convertește clar și întreabă despre măsura lipsă.",
      ],
      [
        "Structurează adresa privată",
        "Separă nume, stradă, clădire, apartament, cod, localitate, țară și contact. UPU arată cinci cifre cu cratimă după a doua înaintea localității. Verifică previzualizarea și semnele; formatele speciale cer suport live.",
      ],
      [
        "Verifică două plăți",
        "Înaintea produsului compară sursa, identitatea, opțiunile, cantitatea, nota și livrarea chineză. Înaintea coletului compară adresa și articolele, apoi citește ruta, prețul, greutatea, asigurarea și restricțiile live.",
      ],
      [
        "Folosește stările ca dovezi",
        "Salvează eticheta și ora. Purchased, Seller Sent, Stock Arrived, QC Completed și Stored confirmă evenimente diferite fără termen garantat. La QC compară produsul și opțiunile și trimite o întrebare bilingvă precisă.",
      ],
      [
        "Încheie cu confidențialitate",
        "Confirmă sursa, data, originalul, opțiunile, sensurile, sistemul, măsurile, versiunea, cantitatea, rezumatul, adresa privată și întrebările. Alege continuă, așteaptă, schimbă sau elimină. Ascunde plățile, adresa și ID-urile pentru suport.",
      ],
    ],
  ),
  sv: make(
    "Joyagoo för Polen: förbered språk, adress och produktval",
    "Bygg ett Polen-underlag med originaltext, val, mått och privat adress utan kostnadslöften.",
    "10 september 2026",
    "14 min läsning",
    [
      [
        "Definiera ett Polen-underlag",
        "Den privata filen kopplar annons, Joyagoo-val och mottagarfält; den garanterar ingen rutt. Kontrollera produkt före första betalningen och adress och begränsningar vid paketet. Gissa inte frakt, skatt eller tid.",
      ],
      [
        "Spara original och polsk betydelse",
        "Bevara tecken, arbetsbetydelse och bevis: bild, modell, tabell eller svar. Två tolkningar förblir öppna. Nummer, koder och procent ändras inte; kontrolltid reserverar inte lager.",
      ],
      [
        "Separera fyra val",
        "Färg, storlek, version och antal är olika fält. Skilj färgtext från bild, etikett från mått, version från modell och orderenheter från delar. Spara pris efter fullständigt val, separat från slutsatsen om alternativet.",
      ],
      [
        "Mät utan påhittad motsvarighet",
        "Spara värde, enhet och punkter. För kläder skiljs bredd och omkrets, för byxor midja, gren och innerben, för skor etikett, fot, innersula och insida. Omvandla tydligt och fråga efter saknat nyckelmått.",
      ],
      [
        "Strukturera privat adress",
        "Skilj namn, gata, byggnad, lägenhet, kod, ort, land och kontakt. UPU visar fem siffror med bindestreck efter den andra före orten. Jämför förhandsvisning och polska tecken; specialformat kräver aktivt stöd.",
      ],
      [
        "Kontrollera två betalningar",
        "Före produktbetalning jämförs källa, identitet, val, antal, not och kinesisk leverans. Före paketbetalning jämförs adress och varor, medan rutt, pris, vikt, försäkring och begränsning läses live.",
      ],
      [
        "Använd status som bevis",
        "Spara exakt etikett och tid. Purchased, Seller Sent, Stock Arrived, QC Completed och Stored bevisar olika händelser utan nästa tidslöfte. Vid QC jämförs produkt och val; ställ en riktad tvåspråkig fråga.",
      ],
      [
        "Avsluta med integritet",
        "Bekräfta källa, datum, original, val, betydelser, system, mått, version, antal, sammanfattning, privat adress och frågor. Välj fortsätt, vänta, ändra eller ta bort. Dölj betalning, full adress och konto-ID vid support.",
      ],
    ],
  ),
};

export const polandDestinationArticleByLanguage: Record<
  SiteLanguage,
  ArticleCopy
> = { en, ...local };
