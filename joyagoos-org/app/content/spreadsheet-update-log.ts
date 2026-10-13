import { article, translationNotes as n } from "./article-builder";
const slug = "joyagoo-spreadsheet-update-log-product-id-price-availability";
export const updateLogTranslations = {
de: article(slug, "Joyagoo Spreadsheet aktualisieren: Produkt-ID, Preis und Verfügbarkeit", "Führe einen nachvollziehbaren Änderungsverlauf für Links, Varianten, Preise und Bestand, ohne Prüfdaten oder Produkthistorie zu überschreiben.", ["Prüfdatum statt dauerhafter Zusage", "ID getrennt vom Weiterleitungslink", "Preis immer mit Variante und Menge", "Ersatzangebote separat dokumentieren"], `
## Einen überprüfbaren Stand dokumentieren
Ein Update-Log beschreibt, was zu einem bestimmten Zeitpunkt geprüft wurde. Es bestätigt keine dauerhafte Verfügbarkeit. Erfasse Marktplatz, Produkt-ID, Shop, Option, Preisgrundlage, Bestandsbeobachtung, Datum und Prüfer. Unterscheide beobachtete Angaben von bestätigten Antworten und offenen Fragen.

Ein allgemeines „aktualisiert“ hilft wenig, wenn nur die Formatierung geändert wurde. Nenne den tatsächlichen Prüfumfang. Eine erreichbare Seite ist ein anderer Nachweis als die Bestätigung einer bestimmten Größe oder Menge.
## Identität und Link getrennt speichern
Halte Quellhost und Produkt-ID unabhängig von Weiterleitungs- und Agentenlinks fest. So bleibt die Identität erhalten, wenn sich lediglich der Linkaufbau ändert. Entferne unnötige Trackingparameter nur, wenn der funktionierende Produktbezug erhalten bleibt.

Fehlt eine stabile ID, dokumentiere die beste verfügbare Kombination aus Shop, Titel, Bild und Option samt Unsicherheit. Erfinde keine Kennung. Gleiches Bild bedeutet nicht gleiche Quelle; gleiche ID beweist nicht unveränderten Inhalt.
## Preise mit ihrem Kontext aktualisieren
Notiere Währung, Variante, Stückzahl, Staffel, Datum und tatsächlichen Auswahlpreis. Unterscheide Werbepreis, Einstiegspreis und Preis der gewünschten Option. Erfasse Inlandsfracht separat; internationale Versandkosten entstehen in einem anderen Paketkontext.

Bewahre alte Werte im Verlauf, statt sie rückwirkend zu ändern. Ein Preisvergleich ist nur sinnvoll, wenn Variante und Menge gleich bleiben. Aktionen gelten möglicherweise nur zeitweise oder unter Bedingungen; markiere diese Einschränkung ausdrücklich.
## Verfügbarkeit präzise benennen
Dokumentiere, ob die Seite lädt, die Option auswählbar ist, eine gewünschte Menge bestätigt wurde oder eine Verkäuferantwort aussteht. Diese Zustände sind nicht austauschbar. Eine Login-Sperre belegt weder Bestand noch Löschung.

Ein datierter Status bleibt eine Momentaufnahme. Vermeide Formulierungen, die permanente Kontrolle suggerieren. Für einen konkreten Kauf müssen Käufer die aktive Option und Menge erneut prüfen, auch wenn der Tabellenlink kürzlich geöffnet wurde.
## Ersatzangebote als neue Version führen
Ein Ersatz erhält einen eigenen Datensatz mit neuer Identität, Datum und Begründung. Prüfe Funktion, Maße, Gestaltung, Lieferumfang und Bedingungen neu. Übernimm weder alte QC-Bilder noch Verkäuferbewertungen so, als gehörten sie automatisch zum Ersatz.

Bewahre Original und Ersatz verknüpft, aber unterscheidbar. Kehrt das alte Angebot zurück, kann eine erneute Prüfung dokumentiert werden. Diese Historie macht Entscheidungen korrigierbar, ohne frühere Beobachtungen zu verfälschen.
## Pflege und Kaufprüfung auseinanderhalten
Der Herausgeber kann Linkziel und wichtige Felder prüfen; der Käufer muss seine genaue Variante, Menge, Fracht und Bedingungen bestätigen. „Link geprüft“ ist kein Echtheits-, Qualitäts- oder Liefergarantiesiegel. Nutze konkrete Beschreibungen des Prüfumfangs.

Eine Bestellung benötigt einen eigenen gespeicherten Angebotsstand. Eine spätere Tabellenänderung darf diesen Kaufbeleg nicht ersetzen. Beim QC wird mit der Bestellreferenz verglichen, nicht mit dem gerade neuesten allgemeinen Tabelleneintrag.
## Nach Risiko und Nutzung erneut prüfen
Priorisiere häufig genutzte, ältere, gemeldete und stark wechselnde Angebote. Ein Bericht sollte Zeile, Problem, Endadresse und Zeitpunkt nennen, aber keine privaten Bestell- oder Kontodaten enthalten. Versuche den Fehler nachzuvollziehen, bevor du ihn als allgemeine Störung markierst.

Dokumentiere auch Prüfungen ohne Änderung mit ihrem tatsächlichen Umfang. Reine Textpflege ist keine Produktprüfung. Trenne Änderungen an Inhalt, Preis und Variante von einem vollständigen Identitätswechsel und zeige inaktive Angebote nicht weiter als aktuelle Empfehlungen.
## Qualität am nachvollziehbaren Nutzen messen
Hilfreiche Kennzahlen sind nachvollziehbare IDs, Alter wichtiger Prüfungen, erhaltene Änderungshistorie und funktionierende relevante Ziele. Eine hohe Zeilenzahl allein sagt wenig. Lege Prüfintervalle nach beobachtetem Änderungsrisiko fest und behaupte keine tägliche Kontrolle, wenn sie nicht stattfindet.

Bewahre den Verlauf, aber halte die aktive Auswahl übersichtlich. Leser sollten sofort erkennen, was zuletzt überprüft wurde, was offen ist und welche Angaben sie vor einer Bestellung selbst bestätigen müssen.
`, n.de),
es: article(slug, "Actualizar un Joyagoo Spreadsheet: ID, precio y disponibilidad", "Mantén un historial verificable de enlaces, variantes, precios y existencias sin borrar fechas de comprobación ni cambios de producto.", ["Fecha de revisión, no promesa permanente", "ID separado de la redirección", "Precio con variante y cantidad", "Reemplazos documentados por separado"], `
## Registra un estado comprobable
Un historial describe lo revisado en una fecha, no una disponibilidad permanente. Guarda marketplace, ID, tienda, opción, base del precio, observación de stock, fecha y responsable. Distingue datos visibles, respuestas confirmadas y preguntas pendientes.

La palabra «actualizado» aporta poco si solo cambió el formato. Indica el alcance real de la revisión. Una página accesible no equivale a la confirmación de una talla o cantidad específica.
## Separa identidad y enlace
Conserva dominio original e ID independientemente del enlace del agente o de la redirección. La identidad seguirá siendo útil si cambia la estructura de la dirección. Elimina parámetros innecesarios únicamente cuando se mantenga la referencia funcional al producto.

Si no existe un ID estable, documenta tienda, título, imagen y opción con su incertidumbre. No inventes identificadores. Una foto compartida no demuestra una misma fuente y un ID igual no garantiza contenido sin cambios.
## Actualiza precios con contexto
Registra moneda, variante, unidades, tramo, fecha y precio seleccionado. Distingue promoción, precio inicial y coste de la opción deseada. Guarda portes nacionales por separado; el envío internacional pertenece después al contexto del paquete.

Conserva valores anteriores en el historial. Solo compara precios si opción y cantidad son equivalentes. Las promociones pueden tener duración o condiciones limitadas: señala esas restricciones expresamente.
## Describe disponibilidad con precisión
Especifica si carga la página, puede seleccionarse una variante, está confirmada la cantidad o falta respuesta del vendedor. Son estados distintos. Una barrera de acceso con cuenta no demuestra ni existencias ni eliminación.

Un estado fechado sigue siendo una instantánea. Evita palabras que sugieran vigilancia continua. El comprador debe revisar su combinación y cantidad antes de pagar, aunque el editor haya abierto el enlace recientemente.
## Crea una versión nueva para cada sustituto
Un reemplazo necesita registro propio, nueva identidad, fecha y explicación. Comprueba función, medidas, diseño, piezas y condiciones otra vez. No atribuyas fotos QC ni comentarios antiguos al nuevo producto como si compartieran automáticamente la misma evidencia.

Relaciona original y sustituto manteniéndolos distinguibles. Si reaparece la oferta anterior, documenta una nueva comprobación. Así podrás corregir decisiones sin alterar lo observado en el pasado.
## Separa mantenimiento y verificación de compra
El editor revisa destinos y campos importantes; el comprador confirma opción exacta, cantidad, transporte y condiciones. «Enlace revisado» no certifica autenticidad, calidad ni entrega. Describe concretamente qué se comprobó.

Cada pedido necesita una referencia guardada de su propia oferta. Un cambio posterior en la tabla no sustituye esa evidencia. El QC se compara con la compra realizada, no con la versión más reciente de una fila general.
## Prioriza revisiones según uso y cambios
Revisa primero ofertas populares, antiguas, denunciadas o variables. Un aviso útil incluye fila, problema, destino final y fecha, sin datos de cuenta o pedido privados. Intenta reproducir el fallo antes de describirlo como una caída general.

Registra también comprobaciones sin cambios con su alcance real. Editar texto no significa revisar un producto. Distingue cambios de contenido, precio y opción de una sustitución de identidad y retira de la selección activa las ofertas inactivas.
## Mide utilidad verificable
Importan cobertura de ID, antigüedad de revisiones relevantes, historial conservado y destinos útiles que funcionan. El número de filas no basta. Fija frecuencia según el riesgo observado de cambio y no anuncies revisiones diarias inexistentes.

Conserva la historia y mantén clara la selección activa. El lector debe reconocer qué se revisó, qué falta y qué datos tendrá que confirmar antes de comprar.
`, n.es),
fr: article(slug, "Mettre à jour un Joyagoo Spreadsheet : ID, prix et disponibilité", "Conservez un historique vérifiable des liens, variantes, prix et stocks sans effacer dates de contrôle ou changements de produit.", ["Une date, pas une promesse permanente", "Séparer ID et redirection", "Relier prix, variante et quantité", "Documenter les remplacements séparément"], `
## Enregistrer un état vérifiable
Un journal décrit ce qui a été contrôlé à une date précise, pas une disponibilité permanente. Notez plateforme, ID, boutique, option, base du prix, observation du stock, date et responsable. Distinguez données visibles, réponses confirmées et questions ouvertes.

« Mis à jour » renseigne peu si seule la mise en forme a changé. Indiquez le périmètre réel du contrôle. Une page accessible ne constitue pas la confirmation d’une taille ou d’une quantité donnée.
## Séparer identité et adresse
Conservez domaine source et ID indépendamment des redirections et liens d’agent. L’identité restera exploitable si l’adresse change de structure. Retirez les paramètres inutiles seulement lorsque la référence produit continue de fonctionner.

Sans ID stable, documentez boutique, titre, image et option avec leur incertitude. N’inventez pas d’identifiant. Une photo commune ne démontre pas une source identique ; un ID inchangé ne prouve pas un contenu inchangé.
## Actualiser les prix avec leur contexte
Notez devise, variante, quantité, palier, date et prix sélectionné. Distinguez promotion, prix d’appel et montant de l’option recherchée. Isolez le transport intérieur ; l’expédition internationale dépendra ensuite du colis.

Conservez les anciens montants dans l’historique. Comparez seulement des options et quantités équivalentes. Une promotion peut être limitée dans le temps ou soumise à des conditions : indiquez ces limites explicitement.
## Décrire précisément la disponibilité
Précisez si la page charge, si l’option est sélectionnable, si la quantité est confirmée ou si une réponse est attendue. Ces états diffèrent. Une connexion obligatoire ne démontre ni stock ni suppression.

Un statut daté reste une observation ponctuelle. Évitez les formulations suggérant une surveillance continue. L’acheteur doit revérifier sa combinaison et sa quantité avant paiement, même lorsque le lien a été récemment consulté.
## Créer une nouvelle version pour un remplacement
Une offre de remplacement exige fiche propre, nouvelle identité, date et justification. Revérifiez fonction, mesures, apparence, contenu et conditions. N’attribuez pas automatiquement les anciens QC ou commentaires au nouveau produit.

Reliez original et remplacement tout en les distinguant. Si l’ancienne offre revient, documentez un nouveau contrôle. Cet historique permet de corriger une décision sans réécrire les observations passées.
## Distinguer entretien et vérification d’achat
L’éditeur peut vérifier destination et champs principaux ; l’acheteur confirme sa variante, sa quantité, les transports et les conditions. « Lien vérifié » ne certifie ni authenticité, ni qualité, ni livraison. Décrivez concrètement le contrôle effectué.

Chaque commande doit conserver sa propre référence d’offre. Une mise à jour ultérieure du tableau ne remplace pas cette preuve. Le QC se compare à l’achat réalisé, pas à la version la plus récente d’une ligne générale.
## Prioriser selon usage et volatilité
Contrôlez en priorité les offres utilisées, anciennes, signalées ou changeantes. Un signalement utile précise ligne, problème, destination et date, sans informations privées de compte ou commande. Essayez de reproduire le problème avant d’annoncer une panne générale.

Enregistrez aussi les contrôles sans changement et leur portée exacte. Corriger du texte n’est pas vérifier un produit. Distinguez modifications de contenu, prix et option d’un changement d’identité et retirez les offres inactives de la sélection courante.
## Mesurer une utilité vérifiable
La présence d’ID, l’ancienneté des contrôles utiles, l’historique conservé et les destinations pertinentes accessibles comptent davantage que le nombre de lignes. Fixez une fréquence selon le risque observé et n’annoncez pas de contrôles quotidiens inexistants.

Préservez l’historique tout en gardant la sélection claire. Le lecteur doit comprendre ce qui a été vérifié, ce qui reste ouvert et les données à confirmer avant l’achat.
`, n.fr),
it: article(slug, "Aggiornare un Joyagoo Spreadsheet: ID, prezzo e disponibilità", "Mantieni uno storico verificabile di link, varianti, prezzi e scorte senza cancellare date di controllo o cambi di prodotto.", ["Una data, non una promessa permanente", "ID separato dal reindirizzamento", "Prezzo con variante e quantità", "Sostituzioni documentate separatamente"], `
## Registra uno stato verificabile
Uno storico descrive ciò che è stato controllato in una data, non una disponibilità permanente. Annota marketplace, ID, negozio, opzione, base del prezzo, osservazione delle scorte, data e responsabile. Distingui dati visibili, risposte confermate e domande aperte.

«Aggiornato» dice poco se è cambiata soltanto l’impaginazione. Indica l’effettiva portata della verifica. Una pagina raggiungibile non equivale alla conferma di una taglia o quantità specifica.
## Separa identità e indirizzo
Conserva dominio originale e ID indipendentemente da link dell’agente e reindirizzamenti. L’identità rimarrà utile se cambia la struttura dell’indirizzo. Elimina parametri inutili solo se il collegamento al prodotto continua a funzionare.

Senza un ID stabile, documenta negozio, titolo, immagine e opzione con la relativa incertezza. Non inventare identificatori. Una foto condivisa non dimostra la stessa fonte e un ID invariato non garantisce contenuto invariato.
## Aggiorna i prezzi con il contesto
Registra valuta, variante, quantità, scaglione, data e prezzo selezionato. Distingui promozione, prezzo iniziale e importo dell’opzione desiderata. Separa il trasporto interno; la spedizione internazionale dipenderà in seguito dal pacco.

Conserva i valori precedenti nello storico. Confronta prezzi solo per opzioni e quantità equivalenti. Le promozioni possono avere durata o condizioni limitate: rendi esplicite tali restrizioni.
## Descrivi precisamente la disponibilità
Indica se la pagina si apre, l’opzione è selezionabile, la quantità è confermata oppure manca una risposta. Sono stati diversi. Un login obbligatorio non dimostra disponibilità né eliminazione.

Uno stato datato resta un’osservazione momentanea. Evita formule che suggeriscano controllo continuo. Chi acquista deve verificare combinazione e quantità prima del pagamento anche quando il link è stato aperto di recente.
## Crea una nuova versione per i sostituti
Un’offerta sostitutiva richiede scheda propria, nuova identità, data e motivazione. Ricontrolla funzione, misure, aspetto, contenuto e condizioni. Non attribuire automaticamente vecchie foto QC o commenti al nuovo prodotto.

Collega originale e sostituto mantenendoli distinguibili. Se torna l’offerta precedente, documenta una nuova verifica. Lo storico permette di correggere decisioni senza riscrivere osservazioni passate.
## Distingui manutenzione e controllo d’acquisto
L’editor può verificare destinazione e campi principali; il compratore conferma variante esatta, quantità, trasporto e condizioni. «Link controllato» non certifica autenticità, qualità o consegna. Descrivi concretamente ciò che è stato verificato.

Ogni ordine deve conservare il proprio riferimento dell’offerta. Un aggiornamento successivo della tabella non sostituisce quella prova. Il QC si confronta con l’acquisto effettuato, non con la versione più recente di una riga generale.
## Dai priorità in base a uso e variabilità
Controlla prima offerte utilizzate, vecchie, segnalate o mutevoli. Una segnalazione utile include riga, problema, destinazione e data, senza dati privati di ordine o account. Cerca di riprodurre l’errore prima di descriverlo come guasto generale.

Registra anche verifiche senza cambiamenti con la loro portata reale. Modificare testo non significa controllare un prodotto. Distingui cambi di contenuto, prezzo e opzione da sostituzioni d’identità e rimuovi offerte inattive dalla selezione corrente.
## Misura un’utilità verificabile
Contano presenza degli ID, età delle verifiche importanti, storico conservato e destinazioni pertinenti funzionanti. Il numero di righe da solo serve poco. Definisci frequenze secondo il rischio osservato e non dichiarare controlli giornalieri inesistenti.

Mantieni lo storico e una selezione attiva chiara. Il lettore deve capire che cosa è stato verificato, quali dubbi restano e quali dati confermare prima di acquistare.
`, n.it)
};
