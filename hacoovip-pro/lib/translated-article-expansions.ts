import type { ArticleSlug } from "@/lib/articles";
import type { Lang } from "@/lib/site-data";

type LocalizedLang = Exclude<Lang, "en">;
type Expansion = { title: string; body: string[] };

export const translatedArticleExpansions: Record<LocalizedLang, Record<ArticleSlug, Expansion[]>> = {
  de: {
    "hacoo-spreadsheet-live-source": [
      {
        title: "Offizielle Plattformangaben von unabhängigen Listen trennen",
        body: [
          "Hacoo bezeichnet sich in seinen aktuellen Nutzungsbedingungen als Community-getriebenes Entdeckungsökosystem und Social-Media-Dienst, der Nutzer mit unabhängigen Creatorn verbindet. Die Inhalte stammen deshalb nicht aus einem unveränderlichen, zentral gepflegten Warenkatalog. Laut Hacoo können Beiträge Fehler oder veraltete Angaben enthalten; Inhalte dürfen außerdem abgewertet oder entfernt werden. Eine externe Hacoo Spreadsheet ist folglich eine Navigationshilfe und kein offizieller Produktfeed. Diese Einordnung sollte auf jeder Liste sichtbar bleiben, damit Leser eine gespeicherte Karte nicht mit einer aktuellen Zusage der Plattform verwechseln.",
          "Praktisch bedeutet das: Entscheidend ist immer die Seite, die beim letzten Klick tatsächlich geöffnet wird. Datum, Bild, Titel, ausgewählte Variante und sichtbarer Preis gehören zusammen dokumentiert. Wenn ein Link später auf einen anderen Artikel, eine allgemeine Seite oder gar nicht mehr führt, muss er ersetzt oder entfernt werden. Eine kleinere, regelmäßig geprüfte Auswahl liefert mehr Nutzen als tausende nicht gepflegte URLs. Genau diese transparente Wartung stärkt die Glaubwürdigkeit einer unabhängigen Liste."
        ]
      },
      {
        title: "Preis, Variante und Größenhinweise mit Datum speichern",
        body: [
          "Ein Kartenpreis ist nur eine datierte Referenz. Region, Währung, Aktionen und die gewählte Ausführung können den aktuell sichtbaren Betrag verändern; Versand gehört zudem nicht automatisch zum Produktpreis. Vor einer Entscheidung sollten Leser deshalb die Live-Seite öffnen, Währung und Variante kontrollieren und erst am Checkout über den voraussichtlichen Gesamtbetrag urteilen. Bei mehreren Farben oder Größen ist die genaue Option wichtiger als das erste Foto, denn die Zielseite kann mit einer anderen Auswahl starten als die Karte.",
          "Für Größenfragen sind nachvollziehbare Maße hilfreicher als ein vertrauter Buchstabe. Brustweite, Länge, Taille, Innenbein oder Innensohlenlänge sollten mit einem vorhandenen, passend gemessenen Artikel verglichen werden. Rezensionen zur Passform liefern Kontext, bleiben aber persönliche Erfahrungen. Gute Listennotizen beschreiben daher beobachtbare Punkte wie sichtbare Maße, übereinstimmendes Bild oder geprüfte Option und vermeiden unbelegte Aussagen zu Echtheit, Material oder Verkäuferzuverlässigkeit."
        ]
      },
      {
        title: "Entdeckung, Bestellung und Pflege klar voneinander abgrenzen",
        body: [
          "Der offizielle Hacoo-Hilfebereich beschreibt den Bestellablauf knapp: App öffnen, anmelden, Artikel auswählen, in den Warenkorb legen und dort bezahlen. Eine unabhängige Spreadsheet endet vorher. Sie hilft beim Finden und Vergleichen, verarbeitet aber weder Zahlung noch Bestellung und kontrolliert auch Versand oder Kundendienst nicht. Produkt- und Kategoriekarten dürfen deshalb zu einer aktuellen Referenz führen, sollten jedoch niemals den Eindruck erwecken, die externe Seite garantiere Bestand, Lieferzeit oder Rückerstattung.",
          "Vor Veröffentlichung sollte jede Route denselben Abschlusscheck bestehen: Bild und Produkttyp stimmen überein, die erwartete Zielseite ist noch vorhanden, Variante und Referenzpreis sind verständlich, und das Prüfdatum ist sichtbar. Häufig besuchte Einträge werden öfter kontrolliert; veränderte Links erhalten den Status geändert oder werden entfernt. Dieser Ablauf beantwortet die eigentliche Suchabsicht hinter „Hacoo Spreadsheet“: schnell relevante Produkte finden, ohne den Kontakt zur überprüfbaren Live-Quelle zu verlieren."
        ]
      }
    ],
    "hacoo-reviews-2026": [
      {
        title: "Bewertungsplattformen nicht zu einer erfundenen Note vermischen",
        body: [
          "Am 29. August 2026 zeigte der britische Apple App Store 4,7 Punkte bei ungefähr 77.000 Bewertungen. Die auf Englisch und die Region USA festgelegte Google-Play-Seite zeigte rund 3,6 bei 59.057 Bewertungen; andere Länderansichten können abweichen. Trustpilot zeigte 3,6 bei 3.279 Bewertungen. Auf Trustpilot war die Verteilung polarisiert: 50 Prozent entfielen auf fünf Sterne und 34 Prozent auf einen Stern. Diese Werte sind datierte Momentaufnahmen und dürfen nicht ohne Region und Datum als dauerhafte Eigenschaft von Hacoo dargestellt werden.",
          "Eine Mittelwertbildung über alle drei Quellen wäre methodisch falsch. App-Store-Nutzer können Bedienung, Suche oder Länderwahl bewerten, während Trustpilot-Berichte häufiger Bestellung, Lieferung, Rückzahlung und Support behandeln. Auch Moderation und Publikum unterscheiden sich. Eine belastbare Analyse stellt die Werte nebeneinander, nennt jeweils Bewertungszahl und Datum und erklärt, worauf sich wiederkehrende Kritik bezieht. So wird aus drei unterschiedlichen Signalen keine künstliche Gesamtnote."
        ]
      },
      {
        title: "Produktbelege von App-, Versand- und Supportproblemen trennen",
        body: [
          "Jede Rezension sollte zunächst einem Thema zugeordnet werden: App-Zugang, regionale Sichtbarkeit, Suche, Checkout, Versand, Tracking, Support, Rückerstattung oder physischer Artikel. Erst danach lassen sich ähnliche Aussagen vergleichen. Ein Problem mit der Ländereinstellung erklärt möglicherweise, warum jemand Produkte nicht sieht; es beweist aber nichts über Nähte oder Passform. Umgekehrt lässt eine gute Erfahrung mit einem Paar Schuhe keine Aussage über alle Angebote oder Verkäufer zu.",
          "Bei produktbezogenen Erfahrungen sind konkrete Details wertvoll: gekaufte Variante, Datum, Foto, Maße, beobachteter Fehler und Nutzungskontext. Mehrere aktuelle Berichte mit demselben Muster wiegen stärker als eine einzelne sehr positive oder sehr negative Aussage. Fotos werden auf Perspektive, Auflösung und abweichende Farb- oder Größenvarianten geprüft. Was die Aufnahme nicht zeigt, bleibt unbekannt. Formulierungen wie „bei dieser Auflösung ist kein loser Faden sichtbar“ sind genauer als pauschale Perfektionsurteile."
        ]
      },
      {
        title: "Unternehmensaussagen, Richtlinien und persönliche Erfahrungen kennzeichnen",
        body: [
          "Hacoos Trust Center betont Rezensionen, die auch Nachteile wie enge Passform oder leicht transparenten Stoff nennen. Dort veröffentlicht Hacoo außerdem eigene Zahlen für 2025: mehr als 1.000 entfernte irreführende Beiträge oder Links, über 500 gesperrte schädliche Konten und 98 Prozent bearbeitete Community-Meldungen innerhalb von 48 Stunden. Diese Werte sind Selbstauskünfte des Unternehmens und keine unabhängig geprüften Kennzahlen. Sie dürfen als Hacoos Aussage zitiert, aber nicht als externer Beweis dargestellt werden.",
          "Auch Rückgabeberichte brauchen den aktuellen Richtlinienkontext. Der offizielle Hilfebereich nennt für berechtigte Produkte ein Zeitfenster von 15 Tagen nach Zustellung und verweist auf den In-App-Support. Ein weiterer Eintrag sagt, dass kein direkter Umtausch angeboten wird; beschrieben wird Rückgabe beziehungsweise Erstattung und anschließend ein Neukauf. Ein guter Review-Artikel trennt daher Fotoerkenntnis, wiederkehrende Kundenthemen und aktuelle Regel klar voneinander und führt ein Änderungsprotokoll mit Datum, Quelle, Bewertungszahl und nachvollziehbaren Korrekturen."
        ]
      }
    ],
    "hacoo-shipping-time-cost": [
      {
        title: "Offizielle Zeitspannen korrekt lesen",
        body: [
          "Hacoos veröffentlichte Versandseite nennt als übliche Empfangszeit ungefähr 15 bis 28 Tage. Für Großbritannien, Frankreich, Deutschland und Italien werden 15 bis 25 Tage angegeben, für Spanien 15 bis 30 Tage und für andere Länder 25 bis 65 Tage. Die Seite erklärt außerdem, dass sich die Empfangszeit aus Bearbeitung und Transport zusammensetzt. Die normale Bearbeitung wird mit drei bis fünf Werktagen beschrieben; die schnellste Expressbeförderung mit fünf bis sieben Arbeitstagen. Diese Angaben sind Planungsbereiche und ausdrücklich keine Garantie für ein konkretes Zustelldatum.",
          "Eine brauchbare Schätzung nennt deshalb zuerst Zielland, Prüfdatum und die am Checkout sichtbare Versandoption. Zahlung, Versand, erster Carrier-Scan und Zustellung werden getrennt protokolliert. So lässt sich später erkennen, ob eine Verzögerung in der Bearbeitung oder beim Transport entstanden ist. Der live angezeigte, auftragsbezogene Wert hat Vorrang vor einer allgemeinen Tabelle oder der Laufzeit eines anderen Käufers."
        ]
      },
      {
        title: "Produktpreis, Versand und Gewicht nicht vermischen",
        body: [
          "Der sichtbare Produktpreis ist nicht automatisch der gelieferte Gesamtpreis. Artikel, Versand, mögliche Servicekosten, Zahlungsumrechnung und lokale Einfuhrpflichten sollten separat festgehalten werden. Eine ältere Hacoo-Hilfeseite beschreibt für Pakete unter drei Kilogramm eine Grundgebühr und oberhalb von drei Kilogramm die Grundgebühr plus fünf US-Dollar je 0,5 Kilogramm. Diese Formel ist nur ein datierter Hilfecenter-Snapshot; die aktuelle Checkout-Angabe bleibt entscheidend, weil Frachtregeln und Logistikbedingungen geändert werden können.",
          "Notiert werden sollte auch, ob das verwendete Gewicht ein Artikelgewicht, geschätztes Packgewicht oder eine reale Messung ist. Karton, Schutzmaterial, Abmessungen und Teilpakete können den Vergleich verändern. Wenn Angaben fehlen, ist eine niedrige und eine hohe Variante mit klaren Annahmen besser als eine scheinbar exakte Zahl. Sobald echte Paketdaten erscheinen, wird die Schätzung aktualisiert, statt eine frühe Zahl zu verteidigen."
        ]
      },
      {
        title: "Teilpakete, Adresse und Tracking systematisch prüfen",
        body: [
          "Laut offizieller Versandseite können verfügbare Artikel zuerst verschickt werden, wenn eine Bestellung Vorbestell- oder Rückstandsartikel enthält. Ein zugestelltes Teilpaket bedeutet daher nicht automatisch, dass die restliche Bestellung verloren ist. Für jedes Paket gehören Trackingnummer, Versanddatum, letzte Carrier-Meldung und erwarteter Inhalt in eine eigene Zeile. Bei dem Status zugestellt sollten zunächst Haushalt, Nachbarn und Ablageort geprüft werden; bei erfolglosem Zustellversuch ist die Nachricht des lokalen Transporteurs relevant.",
          "Die Adresse sollte unmittelbar vor und nach der Zahlung kontrolliert werden. Hacoo weist darauf hin, dass wegen beschleunigter Bearbeitung nur ein kleines Korrekturfenster bestehen kann. Empfänger, Straße, Postleitzahl, Land und Telefonnummer müssen stimmen. Öffentlich veröffentlichte Reviews dürfen keine vollständigen Adressen, Zahlungsdaten oder Trackingnummern enthalten. Bei einem sichtbaren Schaden bleiben Außenverpackung, Etikett und Originalbilder erhalten, damit der aktuelle In-App-Support den Fall beurteilen kann."
        ]
      },
      {
        title: "Rückgabefrist und Belege bereits bei der Zustellung beachten",
        body: [
          "Der offizielle Hacoo-Hilfebereich nennt für berechtigte Rückgaben 15 Tage ab Zustellung und verlangt die Kontaktaufnahme über den Kundendienst in der App. Ein anderer offizieller Eintrag sagt, dass ein direkter Umtausch derzeit nicht unterstützt wird; beschrieben wird eine Rückgabe- oder Erstattungsanfrage und bei Bedarf ein späterer Neukauf. Berechtigung und notwendige Nachweise können vom konkreten Problem abhängen, daher haben die aktuellen Anweisungen in der jeweiligen Bestellung Vorrang.",
          "Die detaillierte Hilfe nennt je nach Fall unter anderem Größenetikett und Barcode, ein klares Problemfoto, Außenverpackung und beschädigte Stelle, Bilder von Produkt und Beutel oder Versandetiketten und Packlisten. Fotos sollten lesbar und im Original aufbewahrt werden. Eine vollständige Dokumentation garantiert keine Entscheidung, verhindert aber, dass ein Problem nur wegen fehlender Zuordnung unklar bleibt. Der letzte Versandcheck umfasst Preis, Ziel, Währung, Adresse, Zeitfenster, eventuelle Vorbestellungen und die aktuelle Nachverkaufsregel."
        ]
      }
    ]
  },
  it: {
    "hacoo-spreadsheet-live-source": [
      {
        title: "Separare i dati ufficiali da un indice indipendente",
        body: [
          "I Termini di servizio attuali descrivono Hacoo come un ecosistema di scoperta guidato dalla community e una piattaforma social che collega utenti e creator indipendenti. Non è quindi un catalogo centrale immutabile. Hacoo avverte inoltre che i contenuti degli utenti possono contenere errori o informazioni superate e che una pubblicazione può essere declassata o rimossa. Una Hacoo spreadsheet esterna va presentata come indice di scoperta, non come feed ufficiale né come inventario permanente della piattaforma.",
          "In pratica, la pagina aperta oggi conta più del testo copiato settimane prima. Ogni voce dovrebbe conservare link, data di controllo, immagine, titolo, variante selezionata e prezzo visibile. Se la destinazione cambia prodotto, reindirizza a una pagina generica o scompare, la rotta deve essere segnalata o eliminata. Una raccolta più piccola e mantenuta offre più valore di migliaia di URL non verificati e rende chiaro al lettore cosa è stato davvero controllato."
        ]
      },
      {
        title: "Registrare prezzo, variante e taglia con il loro contesto",
        body: [
          "Il prezzo su una scheda è un riferimento datato. Regione, valuta, promozione e opzione scelta possono cambiare l’importo mostrato nella pagina live, mentre la spedizione non è necessariamente inclusa. Prima di decidere occorre aprire la destinazione, controllare valuta e variante e usare il checkout attuale per valutare il totale consegnato. Quando esistono più colori o taglie, il nome preciso dell’opzione è più affidabile della sola prima fotografia.",
          "Per la vestibilità, misure confrontabili sono più utili di una lettera familiare. Torace, lunghezza, vita, interno gamba o soletta vanno confrontati con un articolo proprio misurato nello stesso modo. Una recensione sulla taglia resta esperienza personale, non regola universale. Le note valide descrivono elementi osservabili — immagine corrispondente, misura visibile, opzione verificata — evitando affermazioni non provate su autenticità, materiale o affidabilità del venditore."
        ]
      },
      {
        title: "Distinguere scoperta, ordine e manutenzione",
        body: [
          "Il Centro assistenza ufficiale riassume l’ordine così: aprire l’app, accedere, selezionare i prodotti, aggiungerli al carrello e pagare nell’app. Una spreadsheet indipendente termina prima di questi passaggi. Aiuta a trovare e confrontare riferimenti, ma non elabora pagamenti, non controlla la spedizione e non gestisce il servizio clienti. Le sue schede possono portare a una pagina attuale senza promettere disponibilità, tempi di consegna o rimborso.",
          "Prima di pubblicare una rotta bisogna confermare che immagine, tipo di prodotto e destinazione coincidano; variante, prezzo indicativo e data devono risultare chiari. I link più visitati richiedono controlli più frequenti, mentre quelli cambiati vanno corretti o rimossi. Questo processo risponde alla vera intenzione dietro “Hacoo spreadsheet”: trovare rapidamente opzioni senza perdere il collegamento a una fonte live ancora verificabile."
        ]
      }
    ],
    "hacoo-reviews-2026": [
      {
        title: "Non trasformare tre piattaforme in un punteggio inventato",
        body: [
          "Il 29 agosto 2026 l’App Store britannico mostrava 4,7 con circa 77.000 valutazioni. La pagina Google Play fissata in inglese e nella regione USA mostrava circa 3,6 con 59.057 valutazioni; altre regioni possono mostrare dati diversi. Trustpilot mostrava 3,6 su 3.279 opinioni, con il 50% a cinque stelle e il 34% a una stella. Sono istantanee datate che devono essere pubblicate con regione, data e volume osservato.",
          "Calcolare una media comune produrrebbe un falso “punteggio Hacoo”. Pubblico, moderazione e argomenti non sono uguali. Gli app store possono riflettere navigazione, ricerca o selezione del Paese; Trustpilot include più spesso ordine, consegna, rimborso e assistenza. Un’analisi utile mantiene i dati separati, spiega cosa misura ogni fonte e usa il numero di recensioni come contesto, non come prova automatica di qualità."
        ]
      },
      {
        title: "Classificare il tema prima di confrontare le esperienze",
        body: [
          "Ogni recensione va prima assegnata a un tema: accesso all’app, visibilità regionale, ricerca, checkout, spedizione, tracking, supporto, rimborso o prodotto fisico. Un problema nel cambio Paese può impedire l’acquisto ma non dice nulla sulle cuciture. Allo stesso modo, una buona esperienza con un paio di scarpe non convalida tutte le inserzioni. Mescolare categorie diverse nasconde il modello che il lettore deve davvero verificare.",
          "Per un prodotto sono utili data, variante, misure, foto e descrizione concreta del difetto o dell’uso. Più recensioni recenti con lo stesso tema hanno maggiore peso di un singolo commento estremo. Nelle immagini vanno considerati angolo, luce, compressione e possibile differenza di taglia o lotto. Ciò che non si vede resta sconosciuto: dichiarare il limite è più accurato che trasformare una foto incompleta in certezza."
        ]
      },
      {
        title: "Etichettare dichiarazioni aziendali, regole ed esperienze",
        body: [
          "Il Trust Center di Hacoo valorizza recensioni che citano anche difetti come vestibilità stretta o tessuto leggermente trasparente. Pubblica inoltre dati interni 2025: oltre 1.000 post o link ingannevoli rimossi, più di 500 account dannosi bloccati e il 98% delle segnalazioni gestito entro 48 ore. Sono metriche dichiarate da Hacoo e non audit indipendenti; possono essere citate come posizione dell’azienda, non come prova esterna.",
          "Le esperienze sui resi devono essere confrontate con la politica corrente. L’assistenza ufficiale indica che i prodotti idonei vanno restituiti entro 15 giorni dalla consegna tramite supporto nell’app. Un’altra pagina afferma che non esiste cambio diretto: si richiede reso o rimborso e poi si effettua un nuovo acquisto. Una conclusione equilibrata separa prove fotografiche, temi ricorrenti e regole attuali, conservando un registro di data, fonte, conteggio e modifiche."
        ]
      }
    ],
    "hacoo-shipping-time-cost": [
      {
        title: "Leggere correttamente gli intervalli ufficiali",
        body: [
          "La pagina ufficiale pubblica un tempo di ricezione abituale di circa 15–28 giorni. Indica 15–25 giorni per Regno Unito, Francia, Germania e Italia, 15–30 per la Spagna e 25–65 per gli altri Paesi. Spiega anche che il totale combina preparazione e trasporto: l’elaborazione richiede normalmente 3–5 giorni lavorativi e la spedizione express più rapida è descritta come 5–7 giorni di lavoro. Sono intervalli orientativi, non date garantite.",
          "Una stima utile parte quindi da Paese, data e opzione visibile al checkout. Pagamento, spedizione, prima scansione del corriere e consegna vanno registrati separatamente per distinguere ritardo di elaborazione e ritardo di transito. Il valore specifico mostrato per l’ordine corrente ha priorità su una tabella generale o sull’esperienza di un altro acquirente con destinazione, peso o promozione differenti."
        ]
      },
      {
        title: "Separare prezzo, spedizione e ipotesi di peso",
        body: [
          "Il prezzo del prodotto non equivale al totale consegnato. Articolo, spedizione, eventuali servizi, conversione del pagamento e obblighi locali devono restare separati. Una vecchia pagina di assistenza cita una tariffa base sotto i 3 kg e, sopra tale soglia, la tariffa base più 5 USD ogni 0,5 kg. È un’istantanea datata del Centro assistenza, non una promessa mondiale permanente; il checkout live resta la fonte finale perché le regole logistiche possono cambiare.",
          "Occorre indicare anche se il peso usato è quello del prodotto, una stima imballata o una misurazione reale. Scatola, protezione, dimensioni e divisione in più colli possono modificare il confronto. Se mancano dati, è meglio un caso basso e uno alto con ipotesi esplicite rispetto a una cifra finta precisa. Quando arrivano i dati reali del pacco, la stima va aggiornata."
        ]
      },
      {
        title: "Controllare pacchi parziali, indirizzo e tracking",
        body: [
          "Hacoo afferma che gli articoli disponibili possono partire prima quando l’ordine contiene prodotti in preordine o arretrati. Ricevere un primo pacco non significa automaticamente che il resto sia perso. Mantieni una riga per ogni collo con tracking, data di partenza, ultimo evento e contenuto previsto. Se lo stato è consegnato, verifica famiglia, vicini e luogo sicuro; in caso di assenza controlla l’avviso del corriere locale prima di concludere che manchi.",
          "L’indirizzo va riletto subito perché la pagina ufficiale avverte che il tempo per correggerlo può essere limitato. Controlla destinatario, via, CAP, Paese e telefono prima del pagamento e nell’ordine. Una recensione pubblica non deve esporre indirizzo, dati di pagamento o tracking completo. Se il pacco arriva danneggiato, conserva imballaggio esterno, etichetta e foto originali per seguire le richieste del supporto in-app."
        ]
      },
      {
        title: "Preparare le prove per il reso fin dalla consegna",
        body: [
          "L’assistenza ufficiale indica 15 giorni dalla consegna per i resi idonei e rimanda al servizio clienti nell’app. Un’altra voce chiarisce che non è previsto un cambio diretto: il percorso descritto è reso o rimborso e, se necessario, un nuovo acquisto. Idoneità e prove cambiano in base al problema, quindi le istruzioni correnti dello specifico ordine prevalgono su una guida generale.",
          "L’aiuto dettagliato menziona, secondo il caso, etichetta della taglia e codice della busta, foto chiara del problema, imballaggio esterno e zona danneggiata, immagini dell’articolo errato oppure etichette e lista del pacco. Conserva originali leggibili. Una documentazione completa non garantisce l’esito, ma rende possibile la valutazione. Il controllo finale riunisce prezzo, destinazione, valuta, indirizzo, intervallo, eventuali preordini e regola post-vendita corrente."
        ]
      }
    ]
  },
  es: {
    "hacoo-spreadsheet-live-source": [
      {
        title: "Distingue los datos oficiales de una lista independiente",
        body: [
          "Los Términos de servicio actuales describen Hacoo como un ecosistema de descubrimiento impulsado por la comunidad y una plataforma social que conecta usuarios con creadores independientes. No se trata, por tanto, de un catálogo central e inmutable. Hacoo también advierte que el contenido creado por usuarios puede contener errores o información anticuada y que una publicación puede perder visibilidad o eliminarse. Una Hacoo spreadsheet externa debe presentarse como índice de descubrimiento, nunca como feed oficial ni como inventario permanente de la plataforma.",
          "La consecuencia práctica es sencilla: la página que se abre hoy importa más que el texto copiado hace semanas. Cada entrada debería conservar enlace, fecha de revisión, imagen, título, variante seleccionada y precio visible. Si el destino cambia de producto, redirige a una página genérica o desaparece, la ruta debe marcarse como cambiada o retirarse. Una colección más pequeña y mantenida ayuda mejor al usuario que miles de enlaces sin comprobar."
        ]
      },
      {
        title: "Registra precio, variante y talla con contexto",
        body: [
          "El precio de una tarjeta es una referencia fechada. La región, la moneda, una promoción y la opción seleccionada pueden modificar la cifra de la página actual, y el envío no forma necesariamente parte del precio del producto. Antes de decidir, conviene abrir el destino, comprobar moneda y variante y utilizar el checkout actual para valorar el posible total entregado. Cuando existen varios colores o tallas, el nombre de la opción es más fiable que confiar únicamente en la primera fotografía.",
          "Para la talla, las medidas comparables aportan más que una letra familiar. Ancho de pecho, largo, cintura, entrepierna o plantilla deben compararse con un artículo propio medido del mismo modo. Una reseña sobre el ajuste es contexto personal, no una regla universal. Las notas útiles describen hechos observables —imagen coincidente, medida visible u opción revisada— y evitan afirmar sin pruebas autenticidad, composición del material o fiabilidad de un vendedor."
        ]
      },
      {
        title: "Separa descubrimiento, compra y mantenimiento",
        body: [
          "El Centro de ayuda oficial resume el pedido así: abrir la app, iniciar sesión, elegir productos, añadirlos al carrito y completar allí el pago. Una spreadsheet independiente termina antes de esos pasos. Puede ayudar a localizar y comparar referencias, pero no procesa pedidos, no controla el envío y no gestiona el servicio al cliente. Por eso sus tarjetas pueden conducir a un producto o categoría actual, pero no deben prometer disponibilidad, fecha de entrega o reembolso.",
          "Antes de publicar una ruta, imagen, tipo de producto y destino deben coincidir; la variante y el precio de referencia deben estar claros y la fecha de revisión debe ser visible. Las entradas populares requieren comprobaciones más frecuentes. Este mantenimiento responde a la intención real de la búsqueda “Hacoo spreadsheet”: encontrar opciones con rapidez sin perder la conexión con una fuente que el lector todavía puede abrir y verificar."
        ]
      }
    ],
    "hacoo-reviews-2026": [
      {
        title: "No conviertas tres plataformas en una puntuación inventada",
        body: [
          "El 29 de agosto de 2026, App Store UK mostraba 4,7 puntos y cerca de 77.000 valoraciones. La página de Google Play fijada en inglés y región de Estados Unidos mostraba cerca de 3,6 con 59.057 valoraciones; otras regiones pueden mostrar cifras distintas. Trustpilot mostraba 3,6 con 3.279 opiniones, con un 50 % de cinco estrellas y un 34 % de una estrella. Son capturas que deben publicarse con región, fecha y volumen observado.",
          "Promediarlas produciría una falsa nota Hacoo. Cada sitio reúne públicos, reglas y temas distintos. En las tiendas de aplicaciones se puede valorar la interfaz, búsqueda o selección de país; Trustpilot concentra también comentarios sobre pedidos, entrega, devoluciones y soporte. Un análisis útil mantiene las cifras separadas y explica qué mide cada señal. El número de reseñas no demuestra que un servicio sea bueno, pero ayuda a interpretar cuánto puede moverse una media."
        ]
      },
      {
        title: "Clasifica primero el tema de cada experiencia",
        body: [
          "Antes de comparar reseñas, identifica si hablan de acceso a la app, visibilidad regional, búsqueda, checkout, envío, seguimiento, soporte, reembolso o producto físico. Un problema al cambiar de país puede impedir comprar, pero no informa sobre costuras o ajuste. Del mismo modo, una experiencia positiva con unas zapatillas no valida todos los anuncios. Mezclar categorías diferentes oculta el patrón que realmente necesita comprobar el lector.",
          "En una opinión de producto busca fecha, variante, medida, imágenes y descripción concreta del defecto o del uso. Los temas repetidos en varias reseñas recientes pesan más que un comentario extremo aislado. Al revisar fotos, considera perspectiva, iluminación, compresión y posible diferencia de talla o lote. Lo que no aparece debe quedar como desconocido: “no se ve un hilo suelto con esta resolución” es más preciso que afirmar que la confección es perfecta."
        ]
      },
      {
        title: "Etiqueta afirmaciones de empresa, políticas y testimonios",
        body: [
          "El Trust Center de Hacoo destaca opiniones que mencionan defectos reales, como ajuste estrecho o tejido algo transparente. También publica cifras internas de 2025: más de 1.000 publicaciones o enlaces engañosos retirados, más de 500 cuentas maliciosas bloqueadas y un 98 % de reportes atendidos en 48 horas. Son métricas comunicadas por Hacoo, no resultados auditados de forma independiente; pueden citarse como declaración de la empresa, pero no como prueba externa.",
          "Las experiencias sobre devoluciones deben contrastarse con la política vigente. La ayuda oficial indica que los productos elegibles deben iniciar la devolución dentro de los 15 días posteriores a la entrega y mediante soporte en la app. Otra página dice que no hay cambio directo: se solicita devolución o reembolso y después se vuelve a comprar. Una conclusión equilibrada separa lo que muestran las fotos, los patrones de clientes y la norma actual, y conserva un registro de fecha, fuente, recuento y cambios."
        ]
      }
    ],
    "hacoo-shipping-time-cost": [
      {
        title: "Interpreta correctamente los plazos oficiales",
        body: [
          "La página oficial de envíos publica una recepción habitual de unos 15–28 días. Para Reino Unido, Francia, Alemania e Italia indica 15–25 días; para España, 15–30; y para otros países, 25–65. También explica que el tiempo total combina preparación y transporte: el procesamiento suele requerir 3–5 días laborables y el envío exprés más rápido se describe como 5–7 días de trabajo. Son rangos orientativos, no fechas de entrega garantizadas.",
          "Una estimación útil comienza por país, fecha y opción que aparece en el checkout. Conviene anotar por separado pago, expedición, primer escaneo del transportista y entrega, así se distingue una demora de preparación de una demora de tránsito. El cálculo específico visible en el pedido actual tiene prioridad sobre una tabla general o la experiencia de otro comprador con distinto destino, peso o promoción."
        ]
      },
      {
        title: "Separa precio, envío y supuestos de peso",
        body: [
          "El precio del producto no equivale al total entregado. Artículo, envío, posibles servicios, conversión de pago y obligaciones locales deben registrarse por separado. Una página antigua de ayuda menciona una tarifa básica por debajo de 3 kg y, por encima, la tarifa básica más 5 USD por cada 0,5 kg. Debe tratarse como una captura histórica del Centro de ayuda, no como promesa mundial permanente; el checkout actual es la fuente final porque las reglas logísticas pueden cambiar.",
          "También hay que indicar si el peso es el del producto, una estimación embalada o una medición real. Caja, protección, dimensiones y división del pedido pueden alterar la comparación. Si faltan datos, utiliza un escenario bajo y otro alto y escribe la suposición que los separa. Cuando aparece información real del paquete, actualiza el cálculo en lugar de conservar una precisión que ya no corresponde."
        ]
      },
      {
        title: "Controla paquetes parciales, dirección y seguimiento",
        body: [
          "Hacoo señala que los artículos disponibles pueden enviarse primero cuando el pedido incluye productos en preventa o pendientes. Recibir una parte no significa automáticamente que el resto se haya perdido. Mantén una línea por paquete con número de seguimiento, fecha de salida, último evento y contenido esperado. Si figura como entregado, revisa hogar, vecinos y lugar seguro; si hubo ausencia, busca el aviso del transportista local antes de concluir que falta.",
          "La dirección requiere una revisión inmediata porque la página oficial advierte que puede existir poco tiempo para corregirla. Comprueba destinatario, calle, código postal, país y teléfono antes de pagar y en el registro del pedido. En una reseña pública nunca expongas dirección, datos de pago ni seguimiento completo. Si el paquete llega dañado, conserva embalaje exterior, etiqueta y fotografías originales para seguir las instrucciones actuales del soporte en la app."
        ]
      },
      {
        title: "Prepara desde la entrega las pruebas de devolución",
        body: [
          "La ayuda oficial establece un plazo de 15 días desde la entrega para devoluciones elegibles y remite al servicio al cliente de la app. Otra entrada aclara que Hacoo no ofrece actualmente intercambio directo: la vía descrita es devolución o reembolso y, si procede, una nueva compra. La elegibilidad y las pruebas varían según el problema, por lo que las instrucciones de la orden concreta prevalecen sobre una guía general.",
          "La ayuda detallada menciona, según el caso, etiqueta de talla y código de la bolsa, foto clara del defecto, embalaje exterior y zona dañada, imágenes del producto equivocado o etiquetas y listas del paquete. Guarda archivos legibles y originales. Documentar bien no garantiza el resultado, pero permite evaluar el caso. El control final debe confirmar precio, destino, moneda, dirección, rango, posibles preventas y política posventa vigente."
        ]
      }
    ]
  },
  fr: {
    "hacoo-spreadsheet-live-source": [
      {
        title: "Séparer les informations officielles d’un index indépendant",
        body: [
          "Les conditions actuelles présentent Hacoo comme un écosystème de découverte animé par la communauté et un service social reliant utilisateurs et créateurs indépendants. Il ne s’agit donc pas d’un catalogue central figé. Hacoo précise aussi que les contenus publiés par les utilisateurs peuvent comporter des erreurs ou des informations dépassées et qu’une publication peut être rétrogradée ou supprimée. Une Hacoo spreadsheet externe doit ainsi être décrite comme un index de découverte, jamais comme un flux produit officiel ou un inventaire permanent.",
          "Dans la pratique, la page ouverte aujourd’hui compte davantage qu’un texte copié plusieurs semaines auparavant. Chaque entrée doit associer lien, date de contrôle, image, titre, variante et prix visible. Si la destination change d’article, redirige vers une page générique ou disparaît, le lien doit être signalé ou retiré. Une sélection plus courte, datée et régulièrement entretenue apporte plus de valeur qu’une immense collection non vérifiée."
        ]
      },
      {
        title: "Conserver le contexte du prix, de la variante et de la taille",
        body: [
          "Le prix d’une carte reste une référence datée. Région, devise, promotion et option choisie peuvent modifier le montant affiché, tandis que la livraison n’est pas nécessairement comprise. Avant toute décision, il faut ouvrir la destination, contrôler devise et variante, puis utiliser le checkout actuel pour estimer le total livré. Lorsque plusieurs couleurs ou tailles existent, le nom précis de l’option est plus fiable que la première photo, qui peut représenter une autre sélection.",
          "Pour la taille, des mesures comparables sont plus utiles qu’une lettre familière. Largeur de poitrine, longueur, taille, entrejambe ou semelle intérieure se comparent avec un article personnel mesuré de la même façon. Un avis sur la coupe reste une expérience individuelle. Les notes fiables décrivent donc des faits visibles — image correspondante, mesure affichée, option vérifiée — sans conclure sans preuve sur l’authenticité, la composition ou la fiabilité d’un vendeur."
        ]
      },
      {
        title: "Distinguer découverte, commande et maintenance",
        body: [
          "Le Centre d’aide officiel résume la commande ainsi : ouvrir l’application, se connecter, choisir des articles, les ajouter au panier puis payer dans l’application. Une spreadsheet indépendante s’arrête avant ces étapes. Elle facilite la découverte et la comparaison, mais ne traite pas le paiement, ne contrôle pas l’expédition et ne gère pas le service client. Ses cartes peuvent mener à une référence actuelle sans pour autant garantir stock, livraison ou remboursement.",
          "Avant publication, image, type de produit et destination doivent correspondre ; variante, prix indicatif et date de contrôle doivent être compréhensibles. Les liens les plus consultés sont vérifiés plus souvent, et les routes modifiées sont corrigées ou retirées. Ce processus répond à l’intention réelle derrière « Hacoo spreadsheet » : trouver rapidement des références tout en restant relié à une source en direct que le lecteur peut encore vérifier lui-même."
        ]
      }
    ],
    "hacoo-reviews-2026": [
      {
        title: "Ne pas fabriquer une note unique à partir de trois plateformes",
        body: [
          "Le 29 août 2026, l’App Store britannique affichait 4,7 avec environ 77 000 évaluations. La page Google Play fixée en anglais et sur la région États-Unis affichait environ 3,6 pour 59 057 évaluations ; d’autres régions peuvent montrer un chiffre différent. Trustpilot affichait 3,6 sur 3 279 avis, dont 50 % de cinq étoiles et 34 % d’une étoile. Ces instantanés doivent toujours préciser région, date et volume observé.",
          "Calculer une moyenne commune créerait une fausse « note Hacoo ». Les publics, la modération et les sujets diffèrent. Les boutiques d’applications peuvent refléter navigation, recherche ou choix du pays, alors que Trustpilot inclut davantage commande, livraison, remboursement et support. Une analyse solide garde les résultats côte à côte, explique ce que mesure chaque source et utilise le nombre d’avis pour donner du contexte, non pour prétendre prouver la qualité."
        ]
      },
      {
        title: "Classer chaque expérience avant de la comparer",
        body: [
          "Il faut d’abord identifier le sujet : accès à l’application, visibilité régionale, recherche, checkout, expédition, suivi, support, remboursement ou produit physique. Un problème de pays peut empêcher un achat sans rien révéler sur les coutures. À l’inverse, une bonne expérience avec une paire de chaussures ne valide pas toutes les fiches. Mélanger ces catégories masque la tendance que le lecteur doit réellement examiner.",
          "Pour un produit, privilégiez date, variante, mesures, photos et description précise de l’usage ou du défaut. Plusieurs avis récents partageant le même thème comptent davantage qu’un témoignage extrême isolé. Sur une image, tenez compte de l’angle, de l’éclairage, de la compression et d’une éventuelle différence de taille ou de lot. Ce qui n’est pas visible reste inconnu ; il faut écrire cette limite au lieu de la transformer en certitude."
        ]
      },
      {
        title: "Identifier déclarations d’entreprise, règles et témoignages",
        body: [
          "Le Trust Center de Hacoo valorise les avis mentionnant aussi des défauts, comme une coupe serrée ou un tissu légèrement transparent. Il publie également ses propres chiffres 2025 : plus de 1 000 publications ou liens trompeurs retirés, plus de 500 comptes malveillants bannis et 98 % des signalements traités sous 48 heures. Il s’agit de chiffres déclarés par Hacoo, non de mesures auditées indépendamment ; ils peuvent être cités comme position de l’entreprise, pas comme preuve externe.",
          "Les récits de retour doivent être comparés aux règles actuelles. L’aide officielle indique que les produits éligibles doivent être retournés dans les 15 jours suivant la livraison via le support de l’application. Une autre page précise qu’il n’existe pas d’échange direct : retour ou remboursement, puis nouvel achat. Une conclusion équilibrée sépare donc preuve visuelle, thèmes clients répétés et politique actuelle, avec un journal de date, source, volume et corrections."
        ]
      }
    ],
    "hacoo-shipping-time-cost": [
      {
        title: "Lire correctement les délais officiels",
        body: [
          "La page officielle annonce une réception habituelle d’environ 15 à 28 jours. Elle publie 15 à 25 jours pour le Royaume-Uni, la France, l’Allemagne et l’Italie, 15 à 30 pour l’Espagne et 25 à 65 pour les autres pays. Elle précise que le total combine préparation et transport : la préparation prend normalement 3 à 5 jours ouvrés et l’option express la plus rapide est décrite comme 5 à 7 jours de travail. Ce sont des fourchettes indicatives, jamais des dates garanties.",
          "Une estimation utile commence donc par pays, date et option affichée au checkout. Paiement, expédition, premier scan du transporteur et livraison doivent être notés séparément afin de distinguer retard de traitement et retard de transit. L’estimation propre à la commande actuelle prévaut sur un tableau général ou sur l’expérience d’un acheteur dont le pays, le poids et la promotion diffèrent."
        ]
      },
      {
        title: "Séparer prix, livraison et hypothèses de poids",
        body: [
          "Le prix produit ne représente pas le total livré. Article, transport, services éventuels, conversion de paiement et obligations locales doivent rester séparés. Une ancienne page d’aide mentionne un tarif de base sous 3 kg et, au-dessus, ce tarif plus 5 USD par tranche de 0,5 kg. Cette formule est un instantané daté du Centre d’aide, pas une promesse mondiale permanente ; le checkout actuel reste la source finale car les règles logistiques peuvent évoluer.",
          "Précisez également s’il s’agit du poids produit, d’un poids emballé estimé ou d’une mesure réelle. Carton, protection, dimensions et colis séparés peuvent modifier le résultat. Si des données manquent, utilisez un scénario bas et un scénario haut en expliquant l’hypothèse responsable de l’écart. Dès que les informations réelles du colis sont disponibles, l’estimation doit être mise à jour."
        ]
      },
      {
        title: "Suivre colis partiels, adresse et événements transporteur",
        body: [
          "Hacoo indique que les articles disponibles peuvent partir avant ceux en précommande ou en attente. Recevoir un premier colis ne signifie donc pas que le reste est perdu. Conservez une ligne par paquet avec suivi, date d’expédition, dernier événement et contenu attendu. Si le statut indique livré, vérifiez foyer, voisins et lieu sûr ; en cas d’absence, cherchez l’avis du transporteur local avant de conclure à une perte.",
          "L’adresse doit être relue immédiatement, car la page officielle avertit que le délai de correction peut être court. Vérifiez nom, rue, code postal, pays et téléphone avant le paiement puis dans la commande. Une publication publique ne doit jamais révéler adresse, paiement ou suivi complet. Si le paquet arrive endommagé, conservez emballage extérieur, étiquette et photos originales pour suivre les demandes du support dans l’application."
        ]
      },
      {
        title: "Préparer les preuves de retour dès la livraison",
        body: [
          "L’aide officielle fixe à 15 jours après livraison le délai des retours éligibles et renvoie vers le service client intégré à l’application. Une autre entrée précise que l’échange direct n’est pas proposé : la procédure décrite est retour ou remboursement, puis nouvel achat. L’éligibilité et les justificatifs dépendent du problème ; les instructions actuelles de la commande passent donc avant une règle générale.",
          "L’aide détaillée demande selon les cas étiquette de taille et code du sachet, photo claire du problème, emballage extérieur et zone endommagée, images d’un mauvais article ou étiquettes et listes du colis. Conservez les originaux lisibles. Une documentation complète ne garantit pas la décision, mais permet l’évaluation. Le contrôle final réunit prix, destination, devise, adresse, fourchette, précommandes éventuelles et règle après-vente actuelle."
        ]
      }
    ]
  }
};

translatedArticleExpansions.de["hacoo-spreadsheet-live-source"].push(
  { title: "Rezensionen als Hinweise statt als Beweis nutzen", body: ["Hacoo ermöglicht laut App-Store-Beschreibung Bewertungen von Produkten, Marken und Diensten. Für eine Liste sind konkrete Hinweise nützlich: gekaufte Option, Datum, Foto, Maß und ein nachvollziehbarer Vorteil oder Mangel. Wiederholt sich derselbe Punkt in mehreren aktuellen Berichten, kann er als Thema für die nächste Prüfung dienen. Eine einzelne Bewertung beweist jedoch weder gleichbleibende Qualität noch die Eigenschaften einer anderen Variante oder Produktionscharge.", "Plattformweite Beschwerden und produktbezogene Beobachtungen müssen getrennt bleiben. Schwierigkeiten mit Regionseinstellungen oder Support sagen nichts über die Form eines Schuhs; Lob für ein Kleidungsstück beweist nicht die Zuverlässigkeit aller Links. Die Spreadsheet kann Quellen ordnen und Leser auf sichtbare Risiken hinweisen. Sie darf persönliche Erfahrungen aber nicht in allgemeine Tatsachen verwandeln oder Echtheit, Material und Haltbarkeit garantieren." ] },
  { title: "Den Live-Quellen-Check unmittelbar vor dem Klick wiederholen", body: ["Kurz vor der Nutzung wird die Zielseite erneut geöffnet. Kontrolliert werden erstes aussagekräftiges Bild, Produktart, Titel, ausgewählte Farbe oder Größe, sichtbare Maße, Währung und aktueller Preis. Ein Link, der technisch funktioniert, aber einen anderen Artikel zeigt, gilt als falsch. Bei einer Weiterleitung oder Abweichung führt der Weg zurück zur passenden Kategorie, statt einen ähnlichen Ersatz stillschweigend zu akzeptieren.", "Zu jedem aktiven Eintrag gehören letzter Prüftag und ein kurzer objektiver Vermerk. Die Status aktiv, geändert und entfernt machen Wartung nachvollziehbar. Hoch frequentierte Produkte werden häufiger geprüft; veraltete Karten verschwinden. Damit erhält der Leser keine scheinbar vollständige, aber unzuverlässige Sammlung, sondern eine dokumentierte Entscheidungshilfe, deren Grenzen und aktuelle Quelle auf derselben Seite erkennbar sind." ] }
);
translatedArticleExpansions.de["hacoo-reviews-2026"].push(
  { title: "Eine mobile QC-Prüfung von der Form zum Detail durchführen", body: ["Öffne Referenz und Prüfungsbilder auf demselben Gerät, erhöhe die Helligkeit und vermeide starke Nachtfilter. Notiere zuerst erwartete Farbe, Größe und Variante. Prüfe danach Silhouette und Proportionen: bei Schuhen Zehenform, Sohlenhöhe, Ferse und Paneele; bei Kleidung Länge, Ärmel, Kragen und Fall; bei Taschen Kontur, Griffe, Taschen und Hardware. Eine große strukturelle Abweichung ist aussagekräftiger als ein winziger Dekorunterschied.", "Erst danach folgen Nähte, Kanten, Verschlüsse, Drucke und wiederholte Elemente auf beiden Seiten. Perspektive und Kompression können Details verfälschen. Nutze mehrere Ansichten und kennzeichne verdeckte Bereiche als unbekannt. Ein Foto kann sichtbare Unstimmigkeiten zeigen, aber keine versteckte Konstruktion, Faserzusammensetzung, Langzeithaltbarkeit oder Authentizität beweisen." ] },
  { title: "Größe, Farbe und Rückerstattung mit dem passenden Beleg bewerten", body: ["Passformberichte sind am nützlichsten, wenn Körpermaß, bevorzugte Passform und tatsächlich gekaufte Option genannt werden. Priorität haben reale Maße, die mit einem eigenen Artikel nach derselben Methode verglichen werden. Auch Farbe verlangt Vorsicht: Beleuchtung, Weißabgleich und Display verändern Schwarz, Creme, Marine und kräftige Töne. Mehrere neutrale Aufnahmen sind besser als ein Urteil aus einem gefilterten Bild.", "Bei Rückerstattung oder Support wird das Datum der Rezension mit der aktuellen offiziellen Regel verglichen. Alte Erfahrungen können ein Risiko signalisieren, ersetzen aber keine auftragsbezogene Anweisung. Der Artikel endet deshalb mit drei getrennten Ergebnissen: was die Fotos zeigen, welche Kundenthemen sich wiederholen und was die aktuelle Richtlinie sagt. Diese Trennung ist hilfreicher als ein pauschales Urteil, ob Hacoo insgesamt gut oder schlecht sei." ] }
);
translatedArticleExpansions.de["hacoo-shipping-time-cost"].push(
  { title: "Mit einem niedrigen und hohen Szenario planen", body: ["Wenn Gewicht, Verpackung oder Route noch unklar sind, wird kein einzelner exakter Gesamtbetrag behauptet. Das niedrige Szenario nutzt das kleinste vernünftige Packgewicht und die aktuell sichtbare Basisroute; das hohe berücksichtigt Schutzmaterial, eine zusätzliche Gewichtsstufe oder Teilpakete. Beide Varianten nennen dieselbe Destination, Währung und Prüfuhrzeit, damit die Ursache der Differenz erkennbar bleibt.", "Sobald Checkout oder Tracking echte Daten liefert, werden die Annahmen ersetzt. Eine Schätzung ist ein Arbeitsstand, keine Zusage. Sie soll zeigen, was bekannt, was geschätzt und wo die nächste Live-Prüfung nötig ist. Diese Methode verhindert, dass ein alter Screenshot oder die Kosten eines anderen Käufers als universelle Frachtrate behandelt werden." ] },
  { title: "Den Bestellverlauf sicher dokumentieren", body: ["Speichere Bestellnummer, Zahlungsdatum, Versanddatum, ersten Carrier-Scan und Zustellung gemeinsam, aber veröffentliche keine persönlichen Details. Für jedes Teilpaket bleibt eine eigene Zeile. Liegt die Sendung außerhalb des veröffentlichten Zielbereichs, wird zuerst der letzte Tracking-Status mit der auftragsbezogenen Schätzung verglichen und anschließend der aktuelle In-App-Support genutzt.", "Unmittelbar vor Zahlung werden Live-Produktpreis, Ziel, Versandbetrag, Währung, Adresse, Zeitfenster, Vorbestellstatus und geltende Nachverkaufsregel kontrolliert. Die veröffentlichten Bereiche helfen bei der Planung, sind laut Hacoo jedoch Richtwerte. Eine belastbare Versandseite nennt deshalb Quelle und Prüfdatum, dokumentiert Unsicherheit und verspricht niemals, dass jedes Paket denselben Verlauf nimmt." ] }
);

translatedArticleExpansions.es["hacoo-spreadsheet-live-source"].push(
  { title: "Utiliza las reseñas como indicios, no como prueba definitiva", body: ["La descripción de App Store indica que Hacoo permite valorar productos, marcas y servicios. Para una lista son útiles los comentarios concretos: opción comprada, fecha, fotografía, medida y un defecto o ventaja observable. Si el mismo punto aparece en varias reseñas recientes, puede convertirse en una comprobación prioritaria. Una sola opinión, sin embargo, no demuestra calidad uniforme ni las características de otra variante o lote.", "Separa los problemas generales de la plataforma de la evidencia del producto. Una dificultad con la región o el soporte no mide la forma de unas zapatillas; una buena experiencia con una prenda tampoco valida todos los enlaces. La spreadsheet organiza fuentes y riesgos visibles, pero no debe convertir testimonios personales en hechos universales ni garantizar autenticidad, composición o durabilidad." ] },
  { title: "Repite la comprobación de la fuente justo antes de utilizarla", body: ["Vuelve a abrir el destino y compara primera imagen significativa, tipo de producto, título, color o talla seleccionados, medidas visibles, moneda y precio actual. Un enlace que responde pero muestra otro artículo es incorrecto. Si existe redirección o discrepancia, regresa a la categoría adecuada en vez de aceptar silenciosamente un sustituto parecido.", "Cada entrada activa conserva fecha de última revisión y una nota objetiva. Los estados activo, cambiado y retirado facilitan el mantenimiento; los productos más visitados se comprueban con mayor frecuencia. Así el lector recibe una herramienta documentada y no una colección aparentemente completa pero desactualizada. La utilidad real consiste en mostrar qué se revisó, cuándo y dónde puede verificarse todavía la fuente actual." ] }
);
translatedArticleExpansions.es["hacoo-reviews-2026"].push(
  { title: "Realiza la revisión móvil desde la forma hasta el detalle", body: ["Abre referencia y fotos de inspección en el mismo dispositivo, aumenta el brillo y evita filtros nocturnos intensos. Anota primero color, talla y variante esperados. Revisa silueta y proporciones: en calzado, puntera, altura de suela, talón y paneles; en ropa, largo, mangas, cuello y caída; en bolsos, contorno, asas, bolsillos y escala de herrajes. Una diferencia estructural importante pesa más que un detalle decorativo mínimo.", "Después examina costuras, bordes, cierres, gráficos y elementos repetidos en ambos lados. Perspectiva y compresión pueden ocultar o deformar detalles; utiliza varias vistas y marca las zonas no mostradas como desconocidas. Las fotografías reducen incertidumbre visible, pero no prueban construcción interna, fibra, durabilidad a largo plazo ni autenticidad." ] },
  { title: "Relaciona talla, color y reembolso con la evidencia correcta", body: ["Los comentarios de talla ayudan más cuando incluyen medida corporal, preferencia de ajuste y opción comprada. Prioriza medidas reales comparadas con una prenda propia usando el mismo método. El color también exige prudencia: iluminación, balance de blancos y pantalla alteran negro, crema, azul marino y tonos intensos. Varias fotografías neutras aportan más que una conclusión basada en una imagen filtrada.", "Para soporte o reembolso compara la fecha del testimonio con la política oficial actual. Una experiencia antigua puede señalar un riesgo, pero no sustituye las instrucciones del pedido. La conclusión debe separar tres resultados: lo que muestran las fotos, los temas repetidos entre clientes y lo que establece la regla vigente. Esa estructura ayuda más que un veredicto general sobre si Hacoo es bueno o malo." ] }
);
translatedArticleExpansions.es["hacoo-shipping-time-cost"].push(
  { title: "Planifica un escenario bajo y otro alto", body: ["Si todavía se desconocen peso, embalaje o ruta, no presentes un total exacto. El escenario bajo utiliza el menor peso embalado razonable y la ruta básica visible; el alto puede incluir protección, otro tramo de peso o paquetes separados. Ambos deben conservar destino, moneda y fecha para que el lector identifique qué suposición produce la diferencia.", "Cuando checkout o tracking proporcionan datos reales, sustituye las estimaciones. Una cifra inicial es un registro de trabajo, no una promesa. Debe mostrar qué se conoce, qué se ha calculado y qué pantalla live falta revisar. Así una captura antigua o el coste de otro comprador no se transforma en tarifa universal." ] },
  { title: "Documenta el recorrido sin exponer datos personales", body: ["Guarda juntos número de pedido, pago, expedición, primer escaneo y entrega, pero no publiques información privada. Mantén una línea por paquete parcial. Si la entrega supera el rango publicado, compara el último evento con la estimación concreta del pedido y utiliza después el soporte actual de la app.", "Justo antes de pagar confirma precio live, destino, envío, moneda, dirección, rango, posibles preventas y norma posventa. Los intervalos oficiales sirven para planificar, pero Hacoo los presenta como orientación. Una guía responsable identifica fuente y fecha, mantiene visibles las incertidumbres y nunca promete que cada paquete seguirá el mismo calendario." ] }
);

translatedArticleExpansions.fr["hacoo-spreadsheet-live-source"].push(
  { title: "Utiliser les avis comme indices plutôt que comme preuves", body: ["La description App Store indique que Hacoo permet d’évaluer produits, marques et services. Pour un index, les commentaires précis sont les plus utiles : option achetée, date, photo, mesure et défaut ou avantage observable. Lorsqu’un même point revient dans plusieurs avis récents, il devient une priorité de vérification. Un témoignage isolé ne prouve toutefois ni qualité constante ni caractéristiques d’une autre variante ou série.", "Séparez les problèmes généraux de plateforme des observations produit. Une difficulté de région ou de support ne mesure pas la forme d’une chaussure ; une bonne expérience avec un vêtement ne valide pas tous les liens. La spreadsheet organise sources et risques visibles, mais ne transforme pas les expériences personnelles en faits universels et ne garantit ni authenticité, ni composition, ni durée de vie." ] },
  { title: "Refaire le contrôle de la source juste avant utilisation", body: ["Rouvrez la destination et comparez première image significative, type de produit, titre, couleur ou taille choisie, mesures visibles, devise et prix actuel. Un lien qui répond mais présente un autre article est incorrect. En cas de redirection ou d’écart, revenez à la catégorie appropriée au lieu d’accepter silencieusement un produit seulement similaire.", "Chaque entrée active conserve date du dernier contrôle et note factuelle. Les statuts actif, modifié et retiré rendent l’entretien transparent ; les produits les plus consultés sont contrôlés plus souvent. Le lecteur obtient ainsi une aide documentée plutôt qu’une collection apparemment complète mais dépassée. L’index explique ce qui a été vérifié, à quelle date et où retrouver la source en direct." ] }
);
translatedArticleExpansions.fr["hacoo-reviews-2026"].push(
  { title: "Effectuer le contrôle mobile de la forme vers le détail", body: ["Ouvrez référence et photos d’inspection sur le même appareil, augmentez la luminosité et évitez un filtre nocturne fort. Notez d’abord couleur, taille et variante attendues. Contrôlez silhouette et proportions : pour les chaussures, bout, hauteur de semelle, talon et panneaux ; pour les vêtements, longueur, manches, col et tombé ; pour les sacs, contour, anses, poches et échelle des pièces métalliques. Une grande différence structurelle compte plus qu’un détail décoratif minime.", "Examinez ensuite coutures, bords, fermetures, graphismes et éléments répétés des deux côtés. Perspective et compression peuvent masquer ou déformer. Utilisez plusieurs vues et marquez comme inconnues les zones non montrées. Les photos réduisent l’incertitude visible, sans prouver construction interne, fibre, durabilité à long terme ou authenticité." ] },
  { title: "Associer taille, couleur et remboursement au bon élément de preuve", body: ["Un avis de taille aide davantage s’il mentionne mesure corporelle, coupe souhaitée et option achetée. Privilégiez les mesures réelles comparées à un vêtement personnel avec la même méthode. La couleur demande aussi de la prudence : éclairage, balance des blancs et écran modifient noir, crème, marine et tons vifs. Plusieurs vues neutres valent mieux qu’une conclusion tirée d’une photo filtrée.", "Pour le support ou le remboursement, comparez la date du récit avec la règle officielle actuelle. Une ancienne expérience peut signaler un risque, sans remplacer l’instruction propre à la commande. La conclusion distingue ce que montrent les photos, les thèmes clients répétés et ce qu’énonce la politique en vigueur. Cette structure est plus utile qu’un verdict général disant que Hacoo serait simplement bon ou mauvais." ] }
);
translatedArticleExpansions.fr["hacoo-shipping-time-cost"].push(
  { title: "Prévoir un scénario bas et un scénario haut", body: ["Si poids, emballage ou route restent incertains, n’affichez pas un total unique prétendument exact. Le scénario bas utilise le plus petit poids emballé raisonnable et la route de base visible ; le haut peut ajouter protection, tranche de poids ou colis séparé. Les deux conservent destination, devise et date afin que la cause de l’écart soit compréhensible.", "Lorsque checkout ou suivi fournit des données réelles, remplacez les hypothèses. Une estimation initiale est un état de travail, pas une promesse. Elle montre ce qui est connu, calculé et encore à vérifier. Cette méthode empêche une ancienne capture ou le coût d’un autre acheteur de devenir un tarif universel." ] },
  { title: "Documenter le parcours sans publier de données privées", body: ["Conservez ensemble numéro de commande, paiement, expédition, premier scan et livraison, sans exposer d’informations personnelles. Gardez une ligne par colis partiel. Si la livraison dépasse la fourchette publiée, comparez le dernier événement à l’estimation de la commande puis utilisez le support actuel dans l’application.", "Juste avant paiement, confirmez prix live, destination, transport, devise, adresse, délai, précommande éventuelle et règle après-vente. Les fourchettes officielles aident à planifier mais Hacoo les présente comme indicatives. Un guide responsable identifie source et date, laisse l’incertitude visible et ne promet jamais que chaque colis suivra le même calendrier." ] }
);

translatedArticleExpansions.it["hacoo-spreadsheet-live-source"].push(
  { title: "Usare le recensioni come indizi, non come prova definitiva", body: ["La descrizione App Store indica che Hacoo consente valutazioni di prodotti, marchi e servizi. Per un indice sono utili commenti concreti: opzione acquistata, data, foto, misura e difetto o vantaggio osservabile. Se lo stesso punto ricorre in più recensioni recenti, diventa una priorità di controllo. Un singolo parere non dimostra però qualità uniforme né caratteristiche di un’altra variante o lotto.", "Separa problemi generali della piattaforma e osservazioni sul prodotto. Una difficoltà con regione o assistenza non misura la forma di una scarpa; una buona esperienza con un capo non convalida tutti i link. La spreadsheet organizza fonti e rischi visibili, ma non deve trasformare esperienze personali in fatti universali né garantire autenticità, composizione o durata." ] },
  { title: "Ripetere il controllo della fonte subito prima dell’uso", body: ["Riapri la destinazione e confronta prima immagine significativa, tipo di prodotto, titolo, colore o taglia selezionati, misure visibili, valuta e prezzo attuale. Un URL che risponde ma mostra un altro articolo è errato. In caso di reindirizzamento o discrepanza, torna alla categoria adatta invece di accettare in silenzio un sostituto soltanto simile.", "Ogni voce attiva conserva data dell’ultimo controllo e nota oggettiva. Gli stati attivo, cambiato e rimosso rendono trasparente la manutenzione; i prodotti più visitati vengono verificati più spesso. Il lettore riceve così uno strumento documentato e non una raccolta apparentemente completa ma superata. L’indice mostra cosa è stato verificato, quando e dove trovare ancora la fonte live." ] }
);
translatedArticleExpansions.it["hacoo-reviews-2026"].push(
  { title: "Eseguire il controllo mobile dalla forma al dettaglio", body: ["Apri riferimento e foto di ispezione sullo stesso dispositivo, aumenta la luminosità ed evita filtri notturni forti. Annota prima colore, taglia e variante previsti. Controlla silhouette e proporzioni: nelle scarpe punta, altezza suola, tallone e pannelli; nell’abbigliamento lunghezza, maniche, collo e caduta; nelle borse contorno, manici, tasche e scala dell’hardware. Una differenza strutturale importante pesa più di un minimo dettaglio decorativo.", "Passa poi a cuciture, bordi, chiusure, grafiche ed elementi ripetuti sui due lati. Prospettiva e compressione possono nascondere o deformare; usa più viste e segna le zone non mostrate come sconosciute. Le foto riducono l’incertezza visibile, ma non provano costruzione interna, fibra, durata a lungo termine o autenticità." ] },
  { title: "Collegare taglia, colore e rimborso alla prova corretta", body: ["Un commento sulla taglia è più utile quando cita misura corporea, vestibilità preferita e opzione acquistata. Dai priorità a misure reali confrontate con un capo proprio usando lo stesso metodo. Anche il colore richiede cautela: luce, bilanciamento del bianco e schermo alterano nero, crema, blu navy e toni accesi. Più immagini neutre valgono più di una conclusione basata su una foto filtrata.", "Per supporto o rimborso confronta la data dell’esperienza con la regola ufficiale corrente. Un vecchio racconto può indicare un rischio, ma non sostituisce le istruzioni dell’ordine. La conclusione separa ciò che mostrano le foto, i temi ricorrenti dei clienti e ciò che dice la politica attuale. È più utile di un verdetto generale secondo cui Hacoo sarebbe semplicemente buono o cattivo." ] }
);
translatedArticleExpansions.it["hacoo-shipping-time-cost"].push(
  { title: "Pianificare uno scenario basso e uno alto", body: ["Se peso, imballaggio o rotta sono ancora incerti, non presentare un unico totale esatto. Lo scenario basso usa il minore peso imballato ragionevole e la rotta base visibile; quello alto può includere protezione, uno scatto di peso o colli separati. Entrambi mantengono destinazione, valuta e data, così è chiaro quale ipotesi crea la differenza.", "Quando checkout o tracking forniscono dati reali, sostituisci le stime. Una cifra iniziale è uno stato di lavoro, non una promessa. Deve mostrare cosa è noto, cosa è calcolato e quale schermata live resta da controllare. Così uno screenshot vecchio o il costo di un altro acquirente non diventa una tariffa universale." ] },
  { title: "Documentare il percorso senza esporre dati personali", body: ["Conserva insieme numero d’ordine, pagamento, spedizione, prima scansione e consegna, ma non pubblicare informazioni private. Mantieni una riga per ogni pacco parziale. Se la consegna supera l’intervallo pubblicato, confronta l’ultimo evento con la stima specifica dell’ordine e poi usa il supporto corrente nell’app.", "Subito prima del pagamento conferma prezzo live, destinazione, spedizione, valuta, indirizzo, intervallo, eventuale preordine e regola post-vendita. Le finestre ufficiali aiutano a pianificare ma Hacoo le presenta come indicazioni. Una guida responsabile identifica fonte e data, mantiene visibile l’incertezza e non promette mai che ogni pacco seguirà lo stesso calendario." ] }
);
