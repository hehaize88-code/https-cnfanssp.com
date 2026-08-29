import type { Locale, Section } from "./site-data";

type GuideSection = Exclude<Section, "articles">;
type FourLines = [string, string, string, string];

export const pageDetails: Record<Locale, Record<GuideSection, FourLines>> = {
  zh: {
    spreadsheet:[
      "先从鞋类、服装、配饰或电子产品中选择一个方向，再比较同类商品，避免被无关结果干扰。",
      "打开与商品名称和图片一致的当前详情页，并再次确认商品仍然在售、规格仍然可选。",
      "提交前记录准确的颜色、尺码、版本和数量；好看的预览不能弥补选错规格。",
      "表格图片用于筛选，商品页说明当前报价，仓库 QC 照片才用于判断实际收到的商品。",
    ],
    finds:[
      "比较鞋型、材质、尺码选项，并考虑原包装是否会明显增加包裹体积。",
      "核对服装实测尺寸、颜色参考和卖家提供的细节图片，不要只依赖尺码标签。",
      "检查表盘、扣件、边缘、标签和随附配件；小商品同样需要清楚的细节证据。",
      "购买电子产品前确认插头、电压、电池、兼容性以及当前路线是否允许运输。",
    ],
    guide:[
      "比较几个接近的商品，排除失效链接、图片不清楚或缺少所需规格的页面。",
      "复制当前商品路径并选择准确规格，付款前复核名称、颜色、尺码和数量。",
      "卖家图片描述报价，仓库照片显示实际到货；两类图片不能混作同一份证据。",
      "商品入库并确认可接受后，再比较路线、计费重量、限制、包装服务和保险。",
    ],
    qc:[
      "先确认商品类型、颜色、尺码标签、版本和数量都与订单记录一致。",
      "查看正面、背面、侧面和特写，寻找不对称、污渍、破损、松线或缺少配件。",
      "用衣长、胸宽或鞋垫长度等实测数据，与自己已有且合身的商品进行比较。",
      "如果关键区域看不清，应在可处理期限内通过真实订单流程申请补充照片或售后。",
    ],
    shipping:[
      "实际重量包含商品、保留的卖家包装、防护材料和最终外箱。",
      "体积重量取决于包裹长宽高和路线除数，承运商通常会按较高的计费重量收费。",
      "去掉不必要的盒子可以减少体积，但鞋、包、电子产品和易碎品仍需要足够保护。",
      "比较路线时同时检查资格、追踪、保险、尺寸限制和赔付规则，而不只是首个报价。",
    ],
    faq:[
      "不是。本网站是独立的商品发现与购买准备指南，不运营 Joyagoo 的账户或订单系统。",
      "商品卡片会打开与名称和首图对应的商品详情页，分类入口会打开主站对应分类。",
      "不能保证。美元价格仅用于浏览参考，实际商品价格、国内运费和后续费用以当前页面为准。",
      "不能。QC 照片帮助判断实际到货，但不能保证耐用性、合身度、真实性或后续批次。",
    ],
  },
  de: {
    spreadsheet:[
      "Wähle zuerst Schuhe, Kleidung, Accessoires oder Elektronik und vergleiche anschließend nur ähnliche Angebote.",
      "Öffne die aktuelle Detailseite mit passendem Namen und Bild und prüfe erneut Verfügbarkeit und Varianten.",
      "Notiere vor dem Absenden Farbe, Größe, Version und Menge; eine gute Vorschau gleicht keine falsche Auswahl aus.",
      "Tabellenbilder dienen der Vorauswahl, die Produktseite erklärt das Angebot und Lagerfotos belegen den erhaltenen Artikel.",
    ],
    finds:[
      "Vergleiche Form, Material und Größen und bedenke, ob die Originalverpackung das Paketvolumen erhöht.",
      "Prüfe Kleidungsmaße, Farbreferenzen und Detailbilder des Verkäufers statt nur dem Größenetikett zu vertrauen.",
      "Kontrolliere Zifferblatt, Verschlüsse, Kanten, Etiketten und alle enthaltenen Teile anhand klarer Nahaufnahmen.",
      "Bestätige vor dem Kauf Stecker, Spannung, Akku, Kompatibilität und die aktuelle Versandfähigkeit.",
    ],
    guide:[
      "Vergleiche mehrere ähnliche Angebote und entferne tote Links, unklare Fotos und fehlende Varianten aus der Auswahl.",
      "Nutze die aktuelle Produktroute, wähle die exakte Variante und prüfe Name, Farbe, Größe und Menge vor der Zahlung.",
      "Verkäuferbilder beschreiben das Angebot; Lagerfotos zeigen den erhaltenen Artikel und müssen getrennt bewertet werden.",
      "Vergleiche nach der Lagerung Routen, Abrechnungsgewicht, Einschränkungen, Verpackungsleistungen und Versicherung.",
    ],
    qc:[
      "Bestätige zuerst Produkttyp, Farbe, Größenetikett, Version und Menge anhand der Bestellung.",
      "Prüfe Vorderseite, Rückseite, Seiten und Nahaufnahmen auf Asymmetrie, Flecken, Schäden, lose Nähte oder fehlende Teile.",
      "Vergleiche verfügbare Kleidungs- oder Einlegesohlenmaße mit einem eigenen Artikel, der bereits gut passt.",
      "Fordere bei unklaren entscheidenden Bereichen innerhalb des gültigen Zeitfensters zusätzliche Fotos oder Hilfe an.",
    ],
    shipping:[
      "Das tatsächliche Gewicht umfasst Artikel, verbleibende Verkäuferverpackung, Schutzmaterial und den endgültigen Karton.",
      "Das Volumengewicht hängt von Länge, Breite, Höhe und dem Routenteiler ab; häufig zählt der höhere Wert.",
      "Unnötige Kartons können entfallen, doch Schuhe, Taschen, Elektronik und zerbrechliche Ware brauchen ausreichenden Schutz.",
      "Vergleiche Eignung, Tracking, Versicherung, Größenlimits und Entschädigung statt nur den ersten angezeigten Preis.",
    ],
    faq:[
      "Nein. Diese unabhängige Seite hilft bei Produktsuche und Vorbereitung, betreibt aber keine Joyagoo-Konten oder Bestellungen.",
      "Produktkarten öffnen die zum Namen und Vorschaubild passende Detailseite; Kategorien öffnen die passende Hauptkategorie.",
      "Nein. USD-Beträge sind Referenzen; Produktpreis, Inlandsversand und spätere Kosten müssen live bestätigt werden.",
      "Nein. QC-Fotos helfen beim Prüfen der erhaltenen Ware, garantieren aber weder Haltbarkeit noch Passform oder spätere Chargen.",
    ],
  },
  pl: {
    spreadsheet:[
      "Najpierw wybierz obuwie, odzież, akcesoria lub elektronikę, a następnie porównuj tylko podobne produkty.",
      "Otwórz aktualną stronę z pasującą nazwą i zdjęciem oraz ponownie sprawdź dostępność i warianty.",
      "Przed złożeniem zamówienia zapisz kolor, rozmiar, wersję i ilość; dobry podgląd nie naprawi złego wyboru.",
      "Zdjęcia z arkusza służą do selekcji, oferta opisuje produkt, a zdjęcia magazynowe potwierdzają otrzymany egzemplarz.",
    ],
    finds:[
      "Porównaj fason, materiał i rozmiary oraz oceń, czy oryginalne pudełko znacząco zwiększy objętość paczki.",
      "Sprawdź rzeczywiste wymiary odzieży, kolory i zdjęcia detali zamiast polegać wyłącznie na metce.",
      "Skontroluj tarczę, zapięcia, krawędzie, etykiety i wszystkie dołączone elementy na wyraźnych zdjęciach.",
      "Przed zakupem elektroniki potwierdź wtyczkę, napięcie, baterię, zgodność i możliwość wysyłki wybraną trasą.",
    ],
    guide:[
      "Porównaj kilka podobnych ofert i odrzuć martwe linki, niejasne zdjęcia oraz produkty bez potrzebnego wariantu.",
      "Użyj aktualnego linku, wybierz dokładny wariant i przed płatnością sprawdź nazwę, kolor, rozmiar i ilość.",
      "Zdjęcia sprzedawcy opisują ofertę, a zdjęcia magazynowe pokazują otrzymany produkt; oceniaj je oddzielnie.",
      "Po przyjęciu produktów porównaj trasy, wagę rozliczeniową, ograniczenia, pakowanie i ubezpieczenie.",
    ],
    qc:[
      "Najpierw potwierdź typ produktu, kolor, metkę rozmiaru, wersję i ilość z danymi zamówienia.",
      "Obejrzyj przód, tył, boki i zbliżenia pod kątem asymetrii, plam, uszkodzeń, luźnych szwów i braków.",
      "Porównaj pomiary odzieży lub wkładki z własnym produktem, który już dobrze pasuje.",
      "Jeśli kluczowy obszar jest nieczytelny, poproś o dodatkowe zdjęcia lub pomoc przed końcem dostępnego terminu.",
    ],
    shipping:[
      "Waga rzeczywista obejmuje produkty, pozostawione opakowania sprzedawcy, zabezpieczenia i końcowy karton.",
      "Waga objętościowa zależy od długości, szerokości, wysokości i dzielnika trasy; często naliczana jest wyższa wartość.",
      "Usunięcie zbędnych pudeł zmniejsza objętość, ale buty, torby, elektronika i kruche rzeczy nadal wymagają ochrony.",
      "Porównuj kwalifikację, śledzenie, ubezpieczenie, limity wymiarów i zasady odszkodowań, nie tylko pierwszą cenę.",
    ],
    faq:[
      "Nie. To niezależny przewodnik po produktach i przygotowaniu zakupu, który nie obsługuje kont ani zamówień Joyagoo.",
      "Karty otwierają stronę produktu zgodną z nazwą i zdjęciem, a skróty kategorii prowadzą do właściwej kategorii głównej.",
      "Nie. Kwoty USD są orientacyjne; aktualną cenę, wysyłkę krajową i późniejsze opłaty trzeba sprawdzić na żywo.",
      "Nie. Zdjęcia QC pomagają ocenić otrzymany produkt, lecz nie gwarantują trwałości, dopasowania ani kolejnych partii.",
    ],
  },
  es: {
    spreadsheet:[
      "Elige primero calzado, ropa, accesorios o electrónica y después compara únicamente productos similares.",
      "Abre la ficha actual que coincida con el nombre y la imagen y vuelve a comprobar disponibilidad y variantes.",
      "Anota color, talla, versión y cantidad antes de enviar; una buena vista previa no corrige una opción equivocada.",
      "Las imágenes de la hoja sirven para seleccionar, la ficha explica la oferta y las fotos de almacén prueban lo recibido.",
    ],
    finds:[
      "Compara silueta, material y tallas, y valora si la caja original aumentará mucho el volumen del paquete.",
      "Comprueba medidas reales, referencias de color y fotos de detalle en lugar de confiar solo en la etiqueta.",
      "Revisa esfera, cierres, bordes, etiquetas y todas las piezas incluidas mediante primeros planos claros.",
      "Antes de comprar electrónica confirma enchufe, voltaje, batería, compatibilidad y elegibilidad de envío.",
    ],
    guide:[
      "Compara varias ofertas cercanas y descarta enlaces caídos, fotos poco claras y productos sin la opción necesaria.",
      "Usa la ruta actual, elige la variante exacta y revisa nombre, color, talla y cantidad antes del pago.",
      "Las imágenes del vendedor describen la oferta; las fotos del almacén muestran el artículo recibido y deben evaluarse aparte.",
      "Después del almacenamiento compara rutas, peso facturable, restricciones, servicios de embalaje y seguro.",
    ],
    qc:[
      "Confirma primero tipo de producto, color, etiqueta de talla, versión y cantidad frente al pedido.",
      "Revisa frente, parte trasera, laterales y detalles para detectar asimetrías, manchas, daños, costuras sueltas o piezas faltantes.",
      "Compara las medidas de la prenda o plantilla con un artículo propio que ya te quede bien.",
      "Si una zona decisiva no se ve bien, solicita fotos adicionales o ayuda antes de que termine el plazo disponible.",
    ],
    shipping:[
      "El peso real incluye productos, embalaje conservado del vendedor, protección y caja exterior final.",
      "El peso volumétrico depende de largo, ancho, alto y divisor de ruta; normalmente se factura el valor más alto.",
      "Retirar cajas innecesarias reduce volumen, pero calzado, bolsos, electrónica y artículos frágiles necesitan protección suficiente.",
      "Compara elegibilidad, seguimiento, seguro, límites de tamaño y compensación, no solo el primer precio mostrado.",
    ],
    faq:[
      "No. Es una guía independiente de descubrimiento y preparación; no gestiona cuentas ni pedidos de Joyagoo.",
      "Las tarjetas abren la ficha que coincide con nombre e imagen; los accesos de categoría abren la categoría principal correspondiente.",
      "No. Los importes en USD son referencias; confirma precio, envío nacional y costes posteriores en la página actual.",
      "No. Las fotos QC ayudan a evaluar lo recibido, pero no garantizan durabilidad, ajuste ni futuros lotes.",
    ],
  },
  it: {
    spreadsheet:[
      "Scegli prima scarpe, abbigliamento, accessori o elettronica e poi confronta soltanto prodotti simili.",
      "Apri la pagina attuale con nome e immagine corrispondenti e ricontrolla disponibilità e varianti.",
      "Annota colore, taglia, versione e quantità prima dell'invio; una buona anteprima non corregge una scelta sbagliata.",
      "Le immagini del foglio servono alla selezione, la scheda descrive l'offerta e le foto di magazzino provano ciò che è arrivato.",
    ],
    finds:[
      "Confronta forma, materiale e taglie e valuta se la confezione originale aumenterà molto il volume del pacco.",
      "Controlla misure reali, riferimenti colore e foto dettagliate invece di affidarti solo all'etichetta.",
      "Esamina quadrante, chiusure, bordi, etichette e tutti i componenti inclusi con primi piani nitidi.",
      "Prima di acquistare elettronica conferma spina, voltaggio, batteria, compatibilità e idoneità alla spedizione.",
    ],
    guide:[
      "Confronta più offerte simili ed elimina link inattivi, foto poco chiare e prodotti senza la variante richiesta.",
      "Usa il percorso attuale, scegli la variante esatta e controlla nome, colore, taglia e quantità prima del pagamento.",
      "Le immagini del venditore descrivono l'offerta; le foto del magazzino mostrano l'articolo ricevuto e vanno valutate separatamente.",
      "Dopo lo stoccaggio confronta rotte, peso fatturabile, restrizioni, servizi di imballaggio e assicurazione.",
    ],
    qc:[
      "Conferma prima tipo di prodotto, colore, etichetta taglia, versione e quantità rispetto all'ordine.",
      "Controlla fronte, retro, lati e dettagli per asimmetrie, macchie, danni, cuciture lente o parti mancanti.",
      "Confronta le misure del capo o della soletta con un articolo personale che veste già bene.",
      "Se una zona decisiva non è chiara, richiedi altre foto o assistenza entro la finestra disponibile.",
    ],
    shipping:[
      "Il peso reale comprende prodotti, imballaggio del venditore conservato, protezioni e scatola esterna finale.",
      "Il peso volumetrico dipende da lunghezza, larghezza, altezza e divisore della rotta; spesso vale il dato più alto.",
      "Rimuovere scatole inutili riduce il volume, ma scarpe, borse, elettronica e articoli fragili richiedono protezione.",
      "Confronta idoneità, tracciamento, assicurazione, limiti dimensionali e risarcimento, non solo il primo prezzo.",
    ],
    faq:[
      "No. È una guida indipendente alla scoperta e preparazione dell'acquisto; non gestisce account o ordini Joyagoo.",
      "Le schede aprono la pagina coerente con nome e immagine; le categorie aprono la sezione principale corrispondente.",
      "No. Gli importi USD sono indicativi; verifica prezzo, spedizione nazionale e costi successivi sulla pagina attuale.",
      "No. Le foto QC aiutano a valutare l'articolo ricevuto, ma non garantiscono durata, vestibilità o lotti futuri.",
    ],
  },
  fr: {
    spreadsheet:[
      "Choisissez d'abord chaussures, vêtements, accessoires ou électronique, puis comparez uniquement des produits similaires.",
      "Ouvrez la fiche actuelle correspondant au nom et à l'image, puis vérifiez disponibilité et variantes.",
      "Notez couleur, taille, version et quantité avant l'envoi ; une bonne photo ne corrige pas une mauvaise option.",
      "Les images du tableau servent à présélectionner, la fiche décrit l'offre et les photos d'entrepôt prouvent l'article reçu.",
    ],
    finds:[
      "Comparez forme, matière et tailles, puis estimez si l'emballage d'origine augmentera fortement le volume du colis.",
      "Vérifiez mesures réelles, références de couleur et photos de détail au lieu de vous fier uniquement à l'étiquette.",
      "Contrôlez cadran, fermoirs, bords, étiquettes et toutes les pièces fournies grâce à des gros plans nets.",
      "Avant l'achat électronique, confirmez prise, tension, batterie, compatibilité et admissibilité au transport.",
    ],
    guide:[
      "Comparez plusieurs offres proches et écartez liens morts, photos floues et produits sans la variante souhaitée.",
      "Utilisez le lien actuel, choisissez la variante exacte et vérifiez nom, couleur, taille et quantité avant paiement.",
      "Les images vendeur décrivent l'offre ; les photos d'entrepôt montrent l'article reçu et doivent être évaluées séparément.",
      "Après stockage, comparez itinéraires, poids facturable, restrictions, services d'emballage et assurance.",
    ],
    qc:[
      "Confirmez d'abord type de produit, couleur, étiquette de taille, version et quantité par rapport à la commande.",
      "Examinez face, dos, côtés et détails pour repérer asymétrie, taches, dommages, coutures lâches ou pièces manquantes.",
      "Comparez les mesures du vêtement ou de la semelle avec un article personnel qui vous va déjà bien.",
      "Si une zone décisive reste floue, demandez d'autres photos ou de l'aide avant la fin du délai disponible.",
    ],
    shipping:[
      "Le poids réel comprend produits, emballage vendeur conservé, protections et carton extérieur final.",
      "Le poids volumétrique dépend de la longueur, largeur, hauteur et du diviseur de route ; le plus élevé est souvent facturé.",
      "Retirer les boîtes inutiles réduit le volume, mais chaussures, sacs, électronique et objets fragiles doivent rester protégés.",
      "Comparez admissibilité, suivi, assurance, limites de taille et indemnisation, pas seulement le premier prix affiché.",
    ],
    faq:[
      "Non. Ce guide indépendant aide à découvrir et préparer un achat, mais ne gère ni comptes ni commandes Joyagoo.",
      "Les cartes ouvrent la fiche correspondant au nom et à l'image ; les raccourcis ouvrent la catégorie principale adaptée.",
      "Non. Les montants USD sont indicatifs ; confirmez prix, livraison nationale et frais ultérieurs sur la page actuelle.",
      "Non. Les photos QC aident à évaluer l'article reçu, sans garantir durabilité, taille ni lots futurs.",
    ],
  },
  pt: {
    spreadsheet:[
      "Escolha primeiro calçado, roupa, acessórios ou eletrónica e depois compare apenas produtos semelhantes.",
      "Abra a página atual que corresponda ao nome e à imagem e confirme novamente disponibilidade e variantes.",
      "Registe cor, tamanho, versão e quantidade antes de enviar; uma boa imagem não corrige uma opção errada.",
      "As imagens da planilha servem para selecionar, a página descreve a oferta e as fotos do armazém provam o recebido.",
    ],
    finds:[
      "Compare formato, material e tamanhos e avalie se a embalagem original aumentará muito o volume da encomenda.",
      "Verifique medidas reais, referências de cor e fotos detalhadas em vez de confiar apenas na etiqueta.",
      "Examine mostrador, fechos, bordas, etiquetas e todas as peças incluídas através de imagens nítidas.",
      "Antes de comprar eletrónica confirme ficha, voltagem, bateria, compatibilidade e elegibilidade de envio.",
    ],
    guide:[
      "Compare várias ofertas próximas e elimine links inativos, fotos pouco claras e produtos sem a variante necessária.",
      "Use o link atual, escolha a variante exata e reveja nome, cor, tamanho e quantidade antes do pagamento.",
      "As imagens do vendedor descrevem a oferta; as fotos do armazém mostram o artigo recebido e devem ser avaliadas à parte.",
      "Após o armazenamento compare rotas, peso faturável, restrições, serviços de embalagem e seguro.",
    ],
    qc:[
      "Confirme primeiro tipo de produto, cor, etiqueta de tamanho, versão e quantidade face ao pedido.",
      "Verifique frente, verso, lados e detalhes para encontrar assimetrias, manchas, danos, costuras soltas ou peças em falta.",
      "Compare medidas da roupa ou palmilha com um artigo próprio que já assente bem.",
      "Se uma zona decisiva não estiver clara, peça mais fotos ou ajuda antes do fim do prazo disponível.",
    ],
    shipping:[
      "O peso real inclui produtos, embalagem do vendedor mantida, materiais de proteção e caixa exterior final.",
      "O peso volumétrico depende de comprimento, largura, altura e divisor da rota; costuma ser cobrado o valor superior.",
      "Remover caixas desnecessárias reduz volume, mas calçado, malas, eletrónica e artigos frágeis precisam de proteção.",
      "Compare elegibilidade, rastreio, seguro, limites dimensionais e compensação, não apenas o primeiro preço.",
    ],
    faq:[
      "Não. Este guia independente ajuda a descobrir e preparar compras, mas não gere contas ou encomendas Joyagoo.",
      "Os cartões abrem a página correspondente ao nome e imagem; os atalhos abrem a categoria principal correta.",
      "Não. Os valores em USD são indicativos; confirme preço, envio nacional e custos posteriores na página atual.",
      "Não. As fotos QC ajudam a avaliar o artigo recebido, mas não garantem durabilidade, ajuste ou lotes futuros.",
    ],
  },
  ro: {
    spreadsheet:[
      "Alege mai întâi încălțăminte, îmbrăcăminte, accesorii sau electronice, apoi compară doar produse similare.",
      "Deschide pagina actuală care corespunde numelui și imaginii și verifică din nou disponibilitatea și variantele.",
      "Notează culoarea, mărimea, versiunea și cantitatea înainte de trimitere; o imagine bună nu repară o alegere greșită.",
      "Imaginile din tabel ajută la selecție, pagina descrie oferta, iar fotografiile din depozit dovedesc produsul primit.",
    ],
    finds:[
      "Compară forma, materialul și mărimile și estimează dacă ambalajul original va mări mult volumul coletului.",
      "Verifică măsurile reale, culorile și fotografiile detaliate în loc să te bazezi doar pe etichetă.",
      "Controlează cadranul, închizătorile, marginile, etichetele și toate piesele incluse prin imagini clare.",
      "Înainte de electronice confirmă mufa, tensiunea, bateria, compatibilitatea și eligibilitatea pentru expediere.",
    ],
    guide:[
      "Compară mai multe oferte apropiate și elimină linkurile moarte, pozele neclare și produsele fără varianta necesară.",
      "Folosește legătura actuală, alege varianta exactă și verifică numele, culoarea, mărimea și cantitatea înainte de plată.",
      "Imaginile vânzătorului descriu oferta; pozele din depozit arată articolul primit și trebuie evaluate separat.",
      "După depozitare compară rutele, greutatea taxabilă, restricțiile, serviciile de ambalare și asigurarea.",
    ],
    qc:[
      "Confirmă mai întâi tipul produsului, culoarea, eticheta mărimii, versiunea și cantitatea față de comandă.",
      "Verifică fața, spatele, lateralele și detaliile pentru asimetrie, pete, daune, cusături slabe sau piese lipsă.",
      "Compară măsurile hainelor sau branțului cu un articol personal care se potrivește deja bine.",
      "Dacă o zonă decisivă nu este clară, cere fotografii suplimentare sau ajutor înainte de expirarea termenului.",
    ],
    shipping:[
      "Greutatea reală include produsele, ambalajul păstrat al vânzătorului, protecția și cutia exterioară finală.",
      "Greutatea volumetrică depinde de lungime, lățime, înălțime și divizorul rutei; se taxează adesea valoarea mai mare.",
      "Eliminarea cutiilor inutile reduce volumul, dar încălțămintea, gențile, electronicele și obiectele fragile au nevoie de protecție.",
      "Compară eligibilitatea, urmărirea, asigurarea, limitele dimensionale și despăgubirea, nu doar primul preț.",
    ],
    faq:[
      "Nu. Acest ghid independent ajută la descoperire și pregătire, dar nu gestionează conturi sau comenzi Joyagoo.",
      "Cardurile deschid pagina potrivită numelui și imaginii, iar scurtăturile deschid categoria principală corectă.",
      "Nu. Valorile USD sunt orientative; confirmă prețul, transportul intern și costurile ulterioare pe pagina actuală.",
      "Nu. Fotografiile QC ajută la evaluarea produsului primit, dar nu garantează durabilitatea, potrivirea sau loturile viitoare.",
    ],
  },
  sv: {
    spreadsheet:[
      "Välj först skor, kläder, accessoarer eller elektronik och jämför sedan bara liknande produkter.",
      "Öppna den aktuella sidan som matchar namn och bild och kontrollera tillgänglighet och varianter igen.",
      "Spara färg, storlek, version och antal före beställning; en bra bild kan inte rätta ett felaktigt val.",
      "Kalkylbladsbilder hjälper urvalet, produktsidan beskriver erbjudandet och lagerbilder visar den mottagna varan.",
    ],
    finds:[
      "Jämför form, material och storlekar och bedöm om originalförpackningen ökar paketvolymen mycket.",
      "Kontrollera verkliga mått, färgreferenser och detaljbilder i stället för att bara lita på etiketten.",
      "Granska urtavla, spännen, kanter, etiketter och alla medföljande delar i tydliga närbilder.",
      "Bekräfta kontakt, spänning, batteri, kompatibilitet och aktuell fraktbehörighet före elektronikinköp.",
    ],
    guide:[
      "Jämför flera liknande erbjudanden och ta bort döda länkar, otydliga bilder och produkter utan rätt variant.",
      "Använd den aktuella länken, välj exakt variant och kontrollera namn, färg, storlek och antal före betalning.",
      "Säljarbilder beskriver erbjudandet; lagerbilder visar den mottagna varan och ska bedömas separat.",
      "Efter lagring jämför du rutter, debiterbar vikt, begränsningar, paketeringstjänster och försäkring.",
    ],
    qc:[
      "Bekräfta först produkttyp, färg, storleksetikett, version och antal mot beställningen.",
      "Granska fram-, bak- och sidor samt närbilder efter asymmetri, fläckar, skador, lösa sömmar eller saknade delar.",
      "Jämför kläd- eller innersulemätningar med en egen vara som redan passar bra.",
      "Om ett avgörande område är oklart, begär fler bilder eller hjälp innan den tillgängliga tidsfristen går ut.",
    ],
    shipping:[
      "Faktisk vikt omfattar produkter, kvarvarande säljarförpackning, skyddsmaterial och slutlig ytterkartong.",
      "Volymvikt beror på längd, bredd, höjd och ruttens divisor; det högre värdet debiteras ofta.",
      "Onödiga lådor kan tas bort, men skor, väskor, elektronik och ömtåliga varor behöver tillräckligt skydd.",
      "Jämför behörighet, spårning, försäkring, storleksgränser och ersättning, inte bara första priset.",
    ],
    faq:[
      "Nej. Detta är en oberoende guide för upptäckt och förberedelse och hanterar inte Joyagoo-konton eller beställningar.",
      "Produktkort öppnar sidan som matchar namn och bild; kategorigenvägar öppnar motsvarande huvudkategori.",
      "Nej. USD-belopp är referenser; bekräfta pris, inrikesfrakt och senare kostnader på den aktuella sidan.",
      "Nej. QC-bilder hjälper dig bedöma mottagen vara men garanterar inte hållbarhet, passform eller framtida partier.",
    ],
  },
};

export const commonUi: Record<Locale, { catalog:string; faq:string; guideLabel:string; minutes:string; englishArticle:string }> = {
  zh:{catalog:"打开商品目录 ↗",faq:"常见问题",guideLabel:"指南",minutes:"分钟阅读",englishArticle:"完整文章"},
  de:{catalog:"Produktkatalog öffnen ↗",faq:"Fragen",guideLabel:"GUIDE",minutes:"Min. Lesezeit",englishArticle:"Englischer SEO-Artikel"},
  pl:{catalog:"Otwórz katalog ↗",faq:"Pytania",guideLabel:"PORADNIK",minutes:"min czytania",englishArticle:"Angielski artykuł SEO"},
  es:{catalog:"Abrir catálogo ↗",faq:"Preguntas",guideLabel:"GUÍA",minutes:"min de lectura",englishArticle:"Artículo SEO en inglés"},
  it:{catalog:"Apri il catalogo ↗",faq:"Domande",guideLabel:"GUIDA",minutes:"min di lettura",englishArticle:"Articolo SEO in inglese"},
  fr:{catalog:"Ouvrir le catalogue ↗",faq:"Questions",guideLabel:"GUIDE",minutes:"min de lecture",englishArticle:"Article SEO en anglais"},
  pt:{catalog:"Abrir catálogo ↗",faq:"Perguntas",guideLabel:"GUIA",minutes:"min de leitura",englishArticle:"Artigo SEO em inglês"},
  ro:{catalog:"Deschide catalogul ↗",faq:"Întrebări",guideLabel:"GHID",minutes:"min de citit",englishArticle:"Articol SEO în engleză"},
  sv:{catalog:"Öppna katalogen ↗",faq:"Frågor",guideLabel:"GUIDE",minutes:"min läsning",englishArticle:"Engelsk SEO-artikel"},
};
