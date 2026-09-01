import type { ArticleSlug } from "@/lib/articles";
import type { Lang } from "@/lib/site-data";

type LocalizedLang = Exclude<Lang, "en">;
type Section = { title: string; body: string[] };

export const translatedArticleParity: Record<LocalizedLang, Record<ArticleSlug, Section>> = {
  de: {
    "hacoo-spreadsheet-live-source": {
      title: "Vollständiges Prüfprotokoll für veröffentlichte Produktwege",
      body: [
        "Ein belastbares Prüfprotokoll hält nicht nur fest, dass ein Link geöffnet wurde. Es dokumentiert die Kategorie, den sichtbaren Produktnamen, das erste aussagekräftige Bild, die gewählte Farbe und Größe, vorhandene Maße, die angezeigte Währung, den Referenzpreis und den Kontrollzeitpunkt. Anschließend wird notiert, ob das Ziel eine konkrete Produktseite, eine Kategorie oder eine allgemeine Weiterleitung ist. Nur wenn Bild, Titel und Ziel denselben Artikel beschreiben, bleibt der Eintrag aktiv. Eine technisch erreichbare Seite mit einem anderen Produkt ist kein gültiger Treffer. Unbekannte Eigenschaften werden ausdrücklich als unbekannt markiert, statt aus einem ähnlichen Foto abgeleitet zu werden.",
        "Zur Pflege gehört außerdem eine nachvollziehbare Priorität. Häufig geklickte und saisonale Einträge werden enger kontrolliert, stabile Kategorien in größeren Abständen. Wenn eine Creator-Veröffentlichung unter den Plattform- oder Schutzrechten entfernt wird, wird nicht nachträglich behauptet, das frühere Angebot sei weiterhin verfügbar. Die Liste führt stattdessen zur nächstpassenden Kategorie und nennt das letzte erfolgreiche Prüfdatum. Vor jeder Entscheidung wiederholt der Leser den Live-Check, weil Bestand, Optionen, Preise und Nutzerinhalte zwischen zwei Besuchen wechseln können. So erfüllt die Spreadsheet ihren Zweck als unabhängige Orientierung, ohne Bestellung, Verkäuferleistung, Echtheit oder aktuelle Plattformdaten vorzutäuschen.",
        "Auch Suchbegriffe und Kategorien werden mitgespeichert, damit ein entfernter Einzelweg später ohne erfundene Ersatzzuordnung erneut gefunden werden kann."
      ]
    },
    "hacoo-reviews-2026": {
      title: "Aus den Belegen eine reproduzierbare Entscheidung ableiten",
      body: [
        "Eine abschließende Bewertung beginnt mit einer Evidenztabelle, nicht mit einem pauschalen Urteil. Für jede Aussage werden Quelle, Datum, Thema und Belegart festgehalten: offizielle Richtlinie, Selbstauskunft des Unternehmens, öffentliche Bewertungsstatistik, persönlicher Erfahrungsbericht oder eigene Bildbeobachtung. Sternebewertungen werden zusammen mit Plattform und Anzahl der Bewertungen gezeigt. Einzelne Kundenaussagen werden als persönliche Erfahrungen formuliert und nicht als gesicherter Sachverhalt. Bei Produktfotos wird notiert, welche Variante sichtbar ist, welche Ansichten fehlen und ob Beleuchtung oder Kompression die Beurteilung erschweren. Erst wiederkehrende, aktuelle und thematisch vergleichbare Berichte bilden ein belastbareres Muster.",
        "Danach folgen konkrete nächste Prüfungen. Bei Größenfragen werden Maße angefordert oder mit einem vorhandenen Artikel verglichen; bei Farbzweifeln werden mehrere neutrale Aufnahmen gesucht; bei Tracking-, Support- oder Rückerstattungsthemen wird die aktuelle Bestellansicht mit der offiziellen Hilfe abgeglichen. Die Schlussfolgerung darf daher gleichzeitig positive Produkterfahrungen, kritische Supportberichte und eine begrenzte Bildaussage enthalten. Das ist kein Widerspruch, sondern eine genauere Darstellung unterschiedlicher Ebenen. Bei späteren Aktualisierungen werden Rating, Bewertungszahl und Beobachtungsdatum neu erfasst, nicht reproduzierbare Aussagen entfernt und Richtlinienänderungen kenntlich gemacht. Leser erhalten damit eine datierte Entscheidungshilfe statt eines zeitlosen Werbe- oder Warnurteils.",
        "Zusätzlich wird die Größe der jeweiligen Bewertungsbasis berücksichtigt. Wenige neue Rezensionen können eine kleinere Plattformnote stärker verändern als dieselbe Zahl neuer Stimmen bei zehntausenden App-Store-Bewertungen. Das Volumen ist kein Qualitätsbeweis, erklärt aber die Stabilität einer Momentaufnahme. Auch Veröffentlichungssprache, Land und App-Version können beeinflussen, welche Probleme sichtbar werden. Deshalb werden Zitate nicht aus ihrem Kontext gelöst und besonders alte oder thematisch unklare Berichte nicht als heutiger Plattformzustand formuliert."
      ]
    },
    "hacoo-shipping-time-cost": {
      title: "Eine vollständige Versandakte vom Checkout bis zur Nachsorge führen",
      body: [
        "Vor der Zahlung enthält die Versandakte Zielland, Lieferadresse, Produktvarianten, sichtbaren Warenwert, Versandbetrag, Währung, geschätztes Packgewicht, gewählte Route und das angezeigte Zeitfenster. Vorbestellte oder rückständige Artikel werden markiert, weil sie zu Teilversand führen können. Der veröffentlichte Länderbereich dient als Planungshilfe, während die auftragsbezogene Checkout-Angabe den aktuellen Einzelfall beschreibt. Nach der Zahlung werden Bearbeitungsbeginn, Versandbestätigung, jeder Trackingcode, erster Carrier-Scan und die letzten Ereignisse je Paket getrennt festgehalten. Dadurch lässt sich erkennen, ob Zeit in der Vorbereitung, im internationalen Transport oder bei der lokalen Zustellung vergangen ist.",
        "Bei der Zustellung werden Außenverpackung, Etikett und Inhalt geprüft, bevor Verpackungsmaterial entsorgt wird. Fehlen Artikel oder sind Produkte falsch, beschädigt oder in einer anderen Größe angekommen, werden nur die vom aktuellen Hilfebereich verlangten, lesbaren Originalnachweise gespeichert. Das 15-Tage-Fenster wird ab tatsächlicher Zustellung berechnet und die Anfrage über den In-App-Support gestartet; ein direkter Umtausch wird nicht versprochen. In einer öffentlichen Bewertung werden Namen, Adresse, Telefonnummer, Zahlung und vollständige Trackingnummer entfernt. Diese Dokumentation garantiert weder Laufzeit noch Erstattung, verbindet aber jede Aussage mit einem überprüfbaren Ereignis und verhindert, dass eine allgemeine Schätzung nachträglich als persönliche Lieferzusage erscheint.",
        "Jede spätere Statusänderung erhält ebenfalls ein Datum, damit der Ablauf vollständig nachvollziehbar bleibt."
      ]
    }
  },
  es: {
    "hacoo-spreadsheet-live-source": {
      title: "Mantén un registro completo de cada ruta publicada",
      body: [
        "Una comprobación fiable no se limita a anotar que un enlace abre. Registra categoría, nombre visible, primera imagen significativa, color y talla seleccionados, medidas disponibles, moneda, precio de referencia y momento de revisión. Después clasifica el destino como ficha concreta, categoría o redirección general. La entrada permanece activa únicamente cuando imagen, título y destino describen el mismo artículo. Una página técnicamente accesible que muestra otro producto no es una coincidencia válida. Lo que no aparece en el destino debe quedar como desconocido y no deducirse de una foto parecida o de una versión anterior de la tarjeta.",
        "La frecuencia de mantenimiento también debe quedar clara. Las rutas populares y estacionales se revisan antes que las categorías estables. Si una publicación de un creador desaparece por normas de comunidad o propiedad intelectual, no se afirma que la oferta anterior siga disponible: se retira la tarjeta o se vuelve a la categoría más cercana con la fecha del último control. El lector repite la verificación antes de actuar porque disponibilidad, opciones, precio y contenido pueden cambiar. Así la spreadsheet funciona como orientación independiente sin aparentar que procesa pedidos, controla vendedores, certifica autenticidad o conserva un catálogo oficial de Hacoo."
      ]
    },
    "hacoo-reviews-2026": {
      title: "Convierte la evidencia en una decisión que pueda repetirse",
      body: [
        "La conclusión debe partir de una tabla de evidencia, no de un veredicto general. Para cada afirmación se guarda fuente, fecha, tema y tipo: política oficial, dato comunicado por la empresa, estadística pública, experiencia personal o lectura de fotografías. Las estrellas se muestran junto con plataforma y número de valoraciones. Los comentarios individuales se presentan como relatos personales, no como hechos demostrados. En las imágenes se identifica la variante visible, las zonas ausentes y las limitaciones causadas por perspectiva, luz o compresión. Solo varios testimonios recientes, comparables y sobre el mismo asunto permiten hablar de un patrón más sólido.",
        "El resultado termina con próximos pasos verificables. Para talla, compara medidas reales; para color, busca varias fotos con luz neutra; para seguimiento, soporte o reembolso, consulta la orden actual y la ayuda oficial vigente. Es posible encontrar experiencias positivas de producto y críticas de soporte al mismo tiempo, porque describen partes distintas del recorrido. En cada actualización se vuelven a registrar puntuación, volumen y fecha, se eliminan afirmaciones que ya no se pueden reproducir y se señalan cambios de política. De este modo el artículo ofrece una fotografía fechada y equilibrada en lugar de publicidad o una advertencia absoluta."
      ]
    },
    "hacoo-shipping-time-cost": {
      title: "Crea un expediente de envío desde el checkout hasta la posventa",
      body: [
        "Antes de pagar, el expediente reúne país, dirección, variantes, valor visible, envío, moneda, peso embalado estimado, ruta y rango mostrado. Marca artículos en preventa o pendientes porque pueden originar paquetes parciales. El intervalo publicado para el país sirve para planificar y la estimación del checkout describe el caso actual. Tras el pago, registra inicio de procesamiento, confirmación de salida, cada código, primer escaneo y últimos eventos por paquete. Así se distingue el tiempo utilizado en preparación, transporte internacional y entrega local, sin convertir una estimación general en una fecha prometida.",
        "Al recibir, comprueba embalaje, etiqueta y contenido antes de desechar nada. Si falta un artículo o llega equivocado, dañado o con otra talla, conserva únicamente las pruebas originales y legibles que solicite la ayuda actual. El plazo de 15 días se cuenta desde la entrega real y la solicitud se inicia en el soporte de la app; no se promete cambio directo. En reseñas públicas se eliminan nombre, dirección, teléfono, pago y seguimiento completo. Esta documentación no garantiza entrega o reembolso, pero vincula cada afirmación con un hecho comprobable y facilita explicar con precisión qué ocurrió en cada etapa."
      ]
    }
  },
  fr: {
    "hacoo-spreadsheet-live-source": {
      title: "Tenir un registre complet pour chaque parcours publié",
      body: [
        "Un contrôle fiable ne consiste pas seulement à noter qu’un lien s’ouvre. Il enregistre catégorie, nom visible, première image significative, couleur et taille choisies, mesures disponibles, devise, prix indicatif et heure de vérification. La destination est ensuite classée comme fiche précise, catégorie ou redirection générale. L’entrée reste active uniquement si image, titre et destination décrivent le même article. Une page accessible qui présente un autre produit n’est pas une correspondance valable. Tout élément absent reste inconnu et ne doit pas être déduit d’une photo proche ou d’une ancienne version de la carte.",
        "La maintenance suit aussi une priorité transparente. Les routes populaires ou saisonnières sont contrôlées plus souvent que les catégories stables. Si une publication de créateur disparaît à cause des règles de communauté ou de propriété intellectuelle, l’ancienne offre n’est pas présentée comme encore disponible : la carte est retirée ou remplacée par la catégorie pertinente avec la date du dernier contrôle. Le lecteur refait la vérification avant d’agir, car disponibilité, options, prix et contenus peuvent changer. La spreadsheet reste ainsi un outil indépendant sans prétendre traiter la commande, contrôler le vendeur, certifier l’authenticité ou reproduire un catalogue officiel Hacoo."
      ]
    },
    "hacoo-reviews-2026": {
      title: "Transformer les preuves en décision reproductible",
      body: [
        "La conclusion commence par un tableau de preuves plutôt que par un verdict global. Chaque affirmation reçoit une source, une date, un sujet et un type : règle officielle, donnée déclarée par l’entreprise, statistique publique, expérience personnelle ou observation d’image. Les étoiles restent accompagnées de la plateforme et du nombre d’avis. Un témoignage individuel est présenté comme récit personnel, non comme fait démontré. Pour les photos, la variante visible, les vues absentes et les limites liées à l’angle, à la lumière ou à la compression sont indiquées. Seuls plusieurs récits récents, comparables et portant sur le même sujet forment une tendance plus solide.",
        "Le résultat propose ensuite des vérifications concrètes. Pour la taille, comparez des mesures réelles ; pour la couleur, cherchez plusieurs vues neutres ; pour suivi, support ou remboursement, consultez la commande et l’aide officielle actuelle. Des expériences produit positives et des critiques du support peuvent coexister, car elles décrivent des étapes différentes. À chaque mise à jour, note, volume et date sont relevés de nouveau, les affirmations non reproductibles disparaissent et les changements de politique sont signalés. L’article devient ainsi un instantané daté et équilibré plutôt qu’une publicité ou une alerte absolue.",
        "Le volume d’avis sert aussi à comprendre la stabilité du score : quelques nouvelles notes déplacent davantage une petite base qu’une page comptant des dizaines de milliers de votes. Ce contexte n’est pas une preuve de qualité, mais il empêche de comparer mécaniquement des moyennes construites par des publics différents."
      ]
    },
    "hacoo-shipping-time-cost": {
      title: "Conserver un dossier d’expédition du checkout à l’après-vente",
      body: [
        "Avant paiement, le dossier rassemble pays, adresse, variantes, valeur visible, livraison, devise, poids emballé estimé, route et fourchette affichée. Les précommandes ou articles en attente sont signalés car ils peuvent créer plusieurs colis. La plage publiée pour le pays aide à planifier, tandis que l’estimation du checkout décrit le cas actuel. Après paiement, enregistrez début du traitement, confirmation d’envoi, chaque suivi, premier scan et derniers événements par paquet. On distingue ainsi préparation, transport international et distribution locale sans transformer une estimation générale en promesse de date.",
        "À la réception, vérifiez emballage, étiquette et contenu avant de jeter quoi que ce soit. Si un article manque ou arrive faux, endommagé ou dans une autre taille, conservez les originaux lisibles demandés par l’aide actuelle. Le délai de 15 jours part de la livraison réelle et la demande commence via le support de l’application ; aucun échange direct n’est promis. Dans un avis public, retirez nom, adresse, téléphone, paiement et numéro de suivi complet. Ce dossier ne garantit ni délai ni remboursement, mais relie chaque affirmation à un événement vérifiable et permet d’expliquer précisément le déroulement."
      ]
    }
  },
  it: {
    "hacoo-spreadsheet-live-source": {
      title: "Mantenere un registro completo per ogni percorso pubblicato",
      body: [
        "Un controllo affidabile non si limita a segnare che un link si apre. Registra categoria, nome visibile, prima immagine significativa, colore e taglia selezionati, misure disponibili, valuta, prezzo indicativo e momento della verifica. Poi classifica la destinazione come scheda precisa, categoria o reindirizzamento generale. La voce resta attiva solo se immagine, titolo e pagina descrivono lo stesso articolo. Una pagina raggiungibile che mostra un prodotto diverso non è una corrispondenza valida. Ciò che non appare deve rimanere sconosciuto, senza deduzioni basate su una foto simile o su una vecchia versione della scheda.",
        "Anche la manutenzione segue priorità trasparenti. Le rotte popolari o stagionali vengono controllate più spesso delle categorie stabili. Se un contenuto di creator scompare per regole della community o proprietà intellettuale, l’offerta precedente non viene presentata come disponibile: la scheda viene rimossa o ricondotta alla categoria più vicina con la data dell’ultimo controllo. Prima di agire il lettore ripete la verifica, perché disponibilità, opzioni, prezzi e contenuti cambiano. La spreadsheet rimane così orientamento indipendente senza fingere di elaborare ordini, controllare venditori, certificare autenticità o riprodurre un catalogo ufficiale Hacoo.",
        "Vengono conservati anche termine di ricerca e categoria di origine, così una scheda rimossa può essere ritrovata senza inventare una corrispondenza sostitutiva. Le note descrivono soltanto elementi osservabili: immagine coincidente, variante controllata, misura visibile e data. Se il prezzo cambia, non si mantiene il vecchio valore per sembrare più conveniente; viene aggiornato o chiaramente indicato come riferimento storico. Lo stesso vale per colori, taglie e disponibilità. Questa disciplina permette al lettore di ricostruire il percorso e capire quale informazione proviene dalla pagina live e quale deriva dal lavoro editoriale dell’indice."
      ]
    },
    "hacoo-reviews-2026": {
      title: "Trasformare le prove in una decisione ripetibile",
      body: [
        "La conclusione parte da una tabella di evidenze, non da un verdetto generale. Ogni affermazione riceve fonte, data, tema e tipo: regola ufficiale, dato dichiarato dall’azienda, statistica pubblica, esperienza personale o osservazione delle immagini. Le stelle restano insieme a piattaforma e numero di valutazioni. Un commento individuale è presentato come racconto personale, non come fatto dimostrato. Nelle foto si indicano variante visibile, viste mancanti e limiti dovuti ad angolo, luce o compressione. Solo più testimonianze recenti, confrontabili e sullo stesso tema formano un modello più solido.",
        "Il risultato propone poi verifiche concrete. Per la taglia confronta misure reali; per il colore cerca più immagini neutre; per tracking, assistenza o rimborso consulta ordine e aiuto ufficiale corrente. Esperienze positive sul prodotto e critiche al supporto possono coesistere perché descrivono fasi diverse. A ogni aggiornamento si registrano di nuovo punteggio, volume e data, si rimuovono affermazioni non riproducibili e si segnalano cambi di politica. L’articolo diventa così un’istantanea datata ed equilibrata, non pubblicità né avvertimento assoluto.",
        "Il numero di recensioni aiuta inoltre a capire quanto sia stabile una media: poche nuove valutazioni spostano più facilmente una base piccola rispetto a una pagina con decine di migliaia di voti. Non è prova di qualità, ma contesto necessario. Lingua, Paese, versione dell’app e data possono cambiare i problemi descritti. Per questo i commenti non vengono estratti dal contesto e un’esperienza molto vecchia non viene presentata automaticamente come situazione attuale. La revisione finale conserva sia segnali positivi sia criticità ripetute e indica quale controllo il lettore deve effettuare prima di agire."
      ]
    },
    "hacoo-shipping-time-cost": {
      title: "Conservare un fascicolo di spedizione dal checkout al post-vendita",
      body: [
        "Prima del pagamento il fascicolo raccoglie Paese, indirizzo, varianti, valore visibile, spedizione, valuta, peso imballato stimato, rotta e intervallo mostrato. Preordini o articoli arretrati vengono segnati perché possono creare più pacchi. La finestra pubblicata per il Paese aiuta a pianificare, mentre la stima del checkout descrive il caso attuale. Dopo il pagamento registra inizio elaborazione, conferma di partenza, ogni tracking, prima scansione e ultimi eventi per collo. Si distinguono così preparazione, trasporto internazionale e consegna locale senza trasformare una stima generale in promessa.",
        "Alla ricezione controlla imballaggio, etichetta e contenuto prima di buttare nulla. Se manca un articolo o arriva errato, danneggiato o in altra taglia, conserva gli originali leggibili richiesti dall’assistenza corrente. I 15 giorni partono dalla consegna reale e la richiesta inizia nel supporto dell’app; non si promette cambio diretto. In una recensione pubblica elimina nome, indirizzo, telefono, pagamento e tracking completo. Il fascicolo non garantisce tempi o rimborso, ma collega ogni affermazione a un evento verificabile e permette di spiegare con precisione ogni fase.",
        "Anche ogni successivo cambiamento di stato riceve una data, così il percorso resta verificabile."
      ]
    }
  }
};
