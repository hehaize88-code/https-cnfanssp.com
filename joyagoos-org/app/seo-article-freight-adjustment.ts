import type { SeoArticle } from "./seo-articles";
import type { Lang } from "./site-data";

export const freightAdjustmentArticle: SeoArticle = {
  slug: "joyagoo-estimated-final-freight-adjustment-rules",
  title: "Joyagoo Estimated vs Final Freight: Reconcile Every Adjustment",
  description:
    "Interpret Joyagoo estimated and final freight as a sequence of published evidence, then reconcile weight, dimensions, packing and later adjustments without treating a quote as a guarantee.",
  meta: "FREIGHT ADJUSTMENT POLICY · 15 MIN",
  sourceNote:
    "Official Shopping Guidance, fee guidance and parcel-status descriptions checked September 10, 2026. The live parcel record and current line rules control each case.",
  quickFacts: [
    "The first freight amount is an estimate",
    "Packing creates a new measurement event",
    "A carrier may confirm the final basis",
    "Differences need field-by-field evidence",
    "A refund or extra payment is not automatic proof of error",
  ],
  sections: [
    {
      heading: "Read freight as a sequence, not one permanent number",
      paragraphs: [
        "Joyagoo’s current Shopping Guidance describes an initial international-shipping deposit based on estimated weight, selected method and destination. It then describes a final charge based on the actual size and weight confirmed after packing and, where applicable, by the shipping company. Those statements establish a sequence: estimate, packed measurement, final basis and settlement. They do not promise that the first number will equal the last one. A policy record should preserve each stage rather than replacing the estimate with the final amount.",
        "This article interprets the published adjustment logic; it is not a shipping calculator or route-price comparison. The buyer’s task is to identify which input changed, who produced the new value and when it became visible. A higher final amount can follow a larger packed parcel, a different billing basis or a corrected estimate. A lower amount can lead to a balance adjustment under the published process. Neither direction proves misconduct by itself. Evidence is required before classifying a difference as expected, unexplained or disputed.",
      ],
    },
    {
      heading: "Build the estimate record before payment",
      paragraphs: [
        "Save the selected stored items, destination, line name, packing requests, displayed estimate, currency and timestamp. If the interface shows estimated weight or dimensions, save those fields too and label them as estimates. Do not add missing dimensions from memory or assume the stored product weights already include final outer packaging. An estimate is only auditable when its inputs are visible enough to compare with the later packed configuration.",
        "Record exclusions and uncertainty. A box-removal request, reinforcement, parcel split, restricted product or changed destination can alter the available line and the packed unit. If one of those choices remains unresolved, state it before payment. The aim is not to predict the final charge exactly. It is to freeze the decision context: which contents and instructions produced the first amount, and what conditions the buyer accepted when authorizing the parcel stage.",
      ],
    },
    {
      heading: "Treat packing as a separate evidence event",
      paragraphs: [
        "Once the warehouse packs the parcel, the object being measured is different from the collection of stored items used for planning. The outer container, retained retail packaging, protection and void fill all contribute to physical weight and dimensions. Save the packed weight, each displayed dimension, the visible implementation of packing instructions and the time the result appeared. If a field is absent, leave it absent rather than reconstructing it from an unrelated route formula.",
        "Compare contents before comparing money. Confirm that every intended order is included and that no returned, duplicated or unintended item appears. Then compare packing requests with the result. A larger figure after requested reinforcement is not comparable with a standard-packing estimate unless that change is explicitly noted. Likewise, removing boxes can change size and protection. The evidence should explain configuration differences before anyone attributes the entire monetary adjustment to measurement alone.",
      ],
    },
    {
      heading: "Identify the party behind the final measurement",
      paragraphs: [
        "The public guidance says the final fee is calculated from actual size and weight confirmed by the shipping company. That makes provenance important. Mark each value as system estimate, warehouse packed measurement, logistics-provider confirmation or later support adjustment. Do not call every post-packing value a carrier measurement when the record does not identify the carrier. The responsible statement is narrower: record the label shown in the parcel detail and the party named by the current explanation.",
        "If the final bill changes after dispatch, ask for the measurement, billing rule or event that changed. Preserve the earlier packed record rather than overwriting it. A carrier remeasurement may be legitimate, but a policy guide cannot infer it from a balance change alone. The audit trail should show the transition between values and expose any gap. Where the account gives no reason, classify the difference as unexplained and request clarification instead of inventing a divisor, rounding rule or correction.",
      ],
    },
    {
      heading: "Reconcile the difference field by field",
      paragraphs: [
        "Use a four-column table: field, estimate, final, explanation. Include contents, packing, physical weight, dimensions, chargeable basis, line, destination, currency and amount. Mark unchanged, changed with evidence, changed without evidence or not shown. Calculate the monetary difference only after the operational fields have been compared. This order prevents a buyer from starting with the total and searching backward for a convenient explanation.",
        "Consider a neutral example. An estimate of 100 planning units becomes 112 after the parcel is reinforced and its packed dimensions increase. The 12-unit difference is not a Joyagoo fee quote and does not prove reinforcement caused every unit. It prompts three checks: did the selected line stay the same, did the chargeable basis change, and does the parcel record connect the new figure to measured data? The example demonstrates the method without publishing a route price, universal divisor or guaranteed settlement.",
      ],
    },
    {
      heading: "Separate settlement from the measurement explanation",
      paragraphs: [
        "Joyagoo’s current Shopping Guidance says an overpaid difference may be refunded to the account balance through customer service after the final fee is known. The status guide also distinguishes Calculating Shipping Fee, Unpaid Shipping Fee, Parcel Processing and Shipped International. These labels show that calculation, payment and dispatch are separate events. Record the notification time, amount paid, final amount, balance movement and any support reference instead of assuming that one status completes every settlement step.",
        "A balance credit proves that an account entry occurred; it does not by itself explain which measurement changed. An extra-payment request likewise does not prove the underlying calculation is correct. Keep two questions separate: what is the final billing basis, and how was the difference settled? If the first is unexplained, a correct arithmetic refund can still leave a policy question. If the basis is clear, a missing settlement becomes an account follow-up rather than a freight-measurement dispute.",
      ],
    },
    {
      heading: "Use timing language carefully",
      paragraphs: [
        "The current order-status explanation says a buyer in Calculating Shipping Fee should pay within 72 hours after the calculation is received. That is an instruction attached to a named stage, not proof that every calculation will finish within 72 hours. Record when the calculation became visible and which action the interface requested. Do not rewrite a payment window as a guaranteed warehouse turnaround or international delivery promise.",
        "If a parcel remains at one stage, ask for the missing event: packed measurement, fee calculation, payment confirmation, logistics handoff or tracking update. This responsible-party approach avoids merging warehouse, payment and carrier delays. A dated sequence is more useful than the statement ‘shipping is delayed’ because it tells support what evidence to locate and prevents a later carrier gap from being blamed on the earlier estimate.",
      ],
    },
    {
      heading: "Close with a defensible adjustment decision",
      paragraphs: [
        "Classify the outcome as reconciled, provisionally reconciled, unexplained or disputed. Reconciled means the final amount connects to documented contents, packing, measurements and billing basis, and the settlement arithmetic matches. Provisionally reconciled means the direction is understandable but one non-decisive field is missing. Unexplained means the record lacks the changing input. Disputed means a displayed fact conflicts with the applicable rule or parcel evidence and has been raised with support.",
        "Save source-page dates, screenshots, parcel identifiers, line label, estimate, packed evidence, final amount, settlement and support messages. A sound conclusion never promises a refund, carrier acceptance or unchanged price. It states what the published process says, what the live account showed and where the two do or do not connect. That boundary turns a confusing freight difference into a testable policy record without borrowing the calculator or budgeting intent reserved for other guides.",
      ],
    },
  ],
};

const make = (
  title: string,
  description: string,
  sourceNote: string,
  facts: string[],
  rows: [string, string, string][],
): SeoArticle => ({
  slug: freightAdjustmentArticle.slug,
  title,
  description,
  meta: "FREIGHT ADJUSTMENT POLICY · 15 MIN",
  sourceNote,
  quickFacts: facts,
  sections: rows.map(([heading, a, b]) => ({ heading, paragraphs: [a, b] })),
});
const facts = {
  de: [
    "Erster Betrag ist Schätzung",
    "Packen erzeugt Messereignis",
    "Carrier kann Endbasis bestätigen",
    "Feldweise abgleichen",
    "Differenz beweist keinen Fehler",
  ],
  es: [
    "Primer importe estimado",
    "El embalaje crea una medición",
    "El transportista puede confirmar",
    "Conciliar campo a campo",
    "La diferencia no prueba error",
  ],
  fr: [
    "Premier montant estimé",
    "Emballage crée une mesure",
    "Transporteur peut confirmer",
    "Rapprocher champ par champ",
    "Écart ne prouve pas une erreur",
  ],
  it: [
    "Primo importo stimato",
    "Imballo crea una misura",
    "Vettore può confermare",
    "Riconciliare campo per campo",
    "Scarto non prova errore",
  ],
} as const;
export const freightAdjustmentTranslations: Partial<Record<Lang, SeoArticle>> =
  {
    de: make(
      "Joyagoo geschätzte und endgültige Fracht: Anpassungen abgleichen",
      "Interpretiere Schätzung und Endfracht als Beweiskette aus Messung, Verpackung und Abrechnung.",
      "Offizielle Einkaufs-, Gebühren- und Statusseiten am 10. September 2026 geprüft. Live-Paket und aktuelle Linie entscheiden.",
      [...facts.de],
      [
        [
          "Fracht als Folge lesen",
          "Joyagoo beschreibt Schätzung, gepackte Messung, endgültige Grundlage und Ausgleich. Der erste Betrag muss nicht dem letzten entsprechen.",
          "Diese Richtlinienanalyse ist kein Rechner. Frage welches Feld, welche Partei und welcher Zeitpunkt wechselten; höher oder niedriger beweist allein keinen Fehler.",
        ],
        [
          "Schätzung sichern",
          "Speichere Artikel, Ziel, Linie, Wünsche, Betrag, Währung, Zeit und sichtbare Schätzwerte. Ergänze keine fehlenden Maße.",
          "Notiere offene Box-, Verstärkungs-, Teilungs- oder Beschränkungsfragen. Das Ziel ist der Entscheidungskontext, nicht exakte Vorhersage.",
        ],
        [
          "Packen als Ereignis",
          "Außenkarton, Einzelverpackung und Schutz verändern das Messobjekt. Speichere Gewicht, Maße, sichtbare Ausführung und Zeitpunkt.",
          "Prüfe erst Inhalt und Anweisung. Vergleiche verstärktes Ergebnis nicht ungekennzeichnet mit Standardplanung; erkläre Konfigurationswechsel.",
        ],
        [
          "Quelle der Messung",
          "Markiere Systemschätzung, Lagermessung, Logistikbestätigung oder spätere Korrektur. Nenne keinen Carrier, den der Datensatz nicht nennt.",
          "Bei Änderung frage nach Messung, Regel oder Ereignis und behalte alte Werte. Fehlender Grund bleibt ungeklärt; Divisor und Rundung werden nicht erfunden.",
        ],
        [
          "Feldweise abgleichen",
          "Vergleiche Inhalt, Packung, Gewicht, Maße, Berechnungsbasis, Linie, Ziel, Währung und Betrag als unverändert, belegt geändert, unbelegt geändert oder nicht gezeigt.",
          "Ein neutrales Beispiel mit Planungswerten zeigt nur die Methode. Prüfe Linie, Basis und Verbindung zur Messung, ohne Preis oder universelle Formel zu behaupten.",
        ],
        [
          "Ausgleich trennen",
          "Offizielle Texte nennen mögliche Balance-Erstattung und getrennte Status für Berechnung, Zahlung, Bearbeitung und Versand. Speichere Benachrichtigung, Zahlung, Endbetrag und Kontobewegung.",
          "Gutschrift erklärt nicht automatisch die Messung; Nachzahlung beweist nicht automatisch Richtigkeit. Trenne Endbasis und Ausgleich.",
        ],
        [
          "Zeit vorsichtig lesen",
          "72 Stunden betreffen die Zahlung nach erhaltener Berechnung, nicht garantierte Berechnungsdauer oder Zustellung. Speichere Beginn und verlangte Aktion.",
          "Frage nach fehlender Messung, Berechnung, Zahlung, Übergabe oder Tracking. So werden Lager, Konto und Carrier nicht vermischt.",
        ],
        [
          "Entscheidung schließen",
          "Klassifiziere abgeglichen, vorläufig, ungeklärt oder bestritten anhand von Inhalt, Packung, Messung, Basis und Mathematik.",
          "Speichere Quellen, Screenshots, ID, Linie, Schätzung, Endwert, Ausgleich und Support. Schlussfolgerung verbindet Regel und Live-Beleg ohne Garantie.",
        ],
      ],
    ),
    es: make(
      "Flete estimado y final Joyagoo: concilia cada ajuste",
      "Interpreta estimación y total final como una cadena de medidas, embalaje y liquidación.",
      "Guías oficiales de compra, tarifas y estados comprobadas el 10 de septiembre de 2026. Mandan el paquete y la línea activos.",
      [...facts.es],
      [
        [
          "Leer el flete como secuencia",
          "Joyagoo describe estimación, medición embalada, base final y liquidación. El primer número no tiene que ser el último.",
          "No es calculadora. Identifica campo, responsable y momento; un importe mayor o menor no prueba error por sí solo.",
        ],
        [
          "Guardar la estimación",
          "Conserva artículos, destino, línea, instrucciones, importe, moneda, hora y campos estimados visibles. No inventes medidas.",
          "Anota dudas sobre cajas, refuerzo, división o restricciones. Se congela el contexto, no se promete exactitud.",
        ],
        [
          "Tratar el embalaje como evento",
          "Caja exterior, embalaje y protección cambian el objeto medido. Guarda peso, dimensiones, ejecución visible y hora.",
          "Compara primero contenido e instrucciones. Explica todo cambio de configuración antes de atribuir el ajuste a la medición.",
        ],
        [
          "Identificar la fuente",
          "Marca estimación del sistema, medida del almacén, confirmación logística o ajuste posterior. No atribuyas al transportista sin etiqueta.",
          "Pide medida, regla o evento, y conserva valores anteriores. Si no hay razón, queda sin explicar; no inventes divisor o redondeo.",
        ],
        [
          "Conciliar campo a campo",
          "Compara contenido, embalaje, peso, dimensiones, base, línea, destino, moneda e importe con estados de evidencia.",
          "Un ejemplo en unidades neutras solo enseña método. Revisa línea, base y vínculo con medida sin publicar precio ni fórmula universal.",
        ],
        [
          "Separar liquidación",
          "Las guías mencionan posible devolución al saldo y estados separados de cálculo, pago, proceso y envío. Guarda aviso, pago, total y movimiento.",
          "Un abono no explica la medida; un pago extra no prueba corrección. Separa base final y liquidación.",
        ],
        [
          "Usar bien el tiempo",
          "Las 72 horas son para pagar tras recibir el cálculo, no una garantía de cálculo o entrega. Registra inicio y acción solicitada.",
          "Pregunta por medición, cálculo, pago, entrega logística o seguimiento ausentes para no mezclar responsables.",
        ],
        [
          "Cerrar la decisión",
          "Clasifica conciliado, provisional, sin explicación o disputado según contenido, embalaje, medida, base y aritmética.",
          "Guarda fuentes, capturas, ID, línea, estimación, final, liquidación y soporte. Conecta regla y evidencia sin prometer resultados.",
        ],
      ],
    ),
    fr: make(
      "Fret Joyagoo estimé et final : rapprocher chaque ajustement",
      "Lisez estimation et fret final comme une chaîne de mesures, emballage et règlement.",
      "Guides officiels d’achat, frais et statuts vérifiés le 10 septembre 2026. Le colis et la ligne actifs font foi.",
      [...facts.fr],
      [
        [
          "Lire le fret comme séquence",
          "Joyagoo décrit estimation, mesure emballée, base finale et règlement. Le premier montant ne doit pas forcément égaler le dernier.",
          "Ce n’est pas un calculateur. Identifiez champ, partie et date; hausse ou baisse seule ne prouve aucune erreur.",
        ],
        [
          "Conserver l’estimation",
          "Sauvez articles, destination, ligne, consignes, montant, devise, heure et estimations visibles. N’inventez pas de dimensions.",
          "Notez les choix ouverts de boîte, renfort, division ou restriction. On fige le contexte, pas un prix garanti.",
        ],
        [
          "Emballage comme événement",
          "Carton, emballage vendeur et protection changent l’objet mesuré. Sauvez poids, dimensions, exécution visible et heure.",
          "Comparez d’abord contenu et consignes. Expliquez la configuration avant d’attribuer tout écart à la mesure.",
        ],
        [
          "Identifier la source",
          "Marquez estimation système, mesure entrepôt, confirmation logistique ou correction. N’attribuez pas au transporteur sans libellé.",
          "Demandez mesure, règle ou événement et gardez les valeurs antérieures. Sans raison, classez inexpliqué; n’inventez ni diviseur ni arrondi.",
        ],
        [
          "Rapprocher les champs",
          "Comparez contenu, emballage, poids, dimensions, base, ligne, destination, devise et montant avec un statut de preuve.",
          "Un exemple en unités neutres montre la méthode seulement. Vérifiez ligne, base et mesure sans publier tarif ni formule universelle.",
        ],
        [
          "Séparer le règlement",
          "Les guides mentionnent remboursement possible au solde et statuts séparés pour calcul, paiement, traitement et envoi. Sauvez avis, paiement, final et mouvement.",
          "Un crédit n’explique pas la mesure; un complément ne prouve pas sa justesse. Séparez base et règlement.",
        ],
        [
          "Employer le délai justement",
          "Les 72 heures concernent le paiement après calcul reçu, pas la durée garantie du calcul ou de la livraison. Notez départ et action.",
          "Demandez la mesure, le calcul, le paiement, la remise ou le suivi manquant pour séparer les responsables.",
        ],
        [
          "Clore la décision",
          "Classez rapproché, provisoire, inexpliqué ou contesté selon contenu, emballage, mesure, base et calcul.",
          "Gardez sources, captures, ID, ligne, estimation, final, règlement et support. Reliez règle et preuve sans garantie.",
        ],
      ],
    ),
    it: make(
      "Spedizione Joyagoo stimata e finale: riconcilia ogni modifica",
      "Leggi stima e importo finale come una catena di misure, imballaggio e regolazione.",
      "Guide ufficiali su acquisto, costi e stati verificate il 10 settembre 2026. Decidono pacco e linea live.",
      [...facts.it],
      [
        [
          "Leggere la spedizione come sequenza",
          "Joyagoo descrive stima, misura imballata, base finale e regolazione. Il primo importo non deve coincidere con l’ultimo.",
          "Non è un calcolatore. Identifica campo, parte e momento; aumento o diminuzione da soli non provano errore.",
        ],
        [
          "Salvare la stima",
          "Conserva articoli, destinazione, linea, istruzioni, importo, valuta, ora e stime visibili. Non inventare dimensioni.",
          "Annota scelte aperte su scatole, rinforzo, divisione o restrizioni. Si fissa il contesto, non il prezzo finale.",
        ],
        [
          "Imballaggio come evento",
          "Scatola, confezioni e protezioni cambiano ciò che viene misurato. Salva peso, misure, esecuzione visibile e ora.",
          "Confronta prima contenuto e istruzioni. Spiega la configurazione prima di attribuire tutto alla misurazione.",
        ],
        [
          "Identificare la fonte",
          "Marca stima sistema, misura magazzino, conferma logistica o correzione. Non nominare il vettore se non indicato.",
          "Chiedi misura, regola o evento e conserva il dato precedente. Senza ragione resta inspiegato; non inventare divisore o arrotondamento.",
        ],
        [
          "Riconciliare i campi",
          "Confronta contenuto, imballo, peso, dimensioni, base, linea, destinazione, valuta e importo con stato di evidenza.",
          "Un esempio in unità neutre mostra solo il metodo. Verifica linea, base e collegamento alla misura senza pubblicare prezzi o formule universali.",
        ],
        [
          "Separare la regolazione",
          "Le guide citano possibile rimborso al saldo e stati separati per calcolo, pagamento, processo e invio. Salva avviso, pagamento, finale e movimento.",
          "Un accredito non spiega la misura; un extra non prova correttezza. Separa base finale e regolazione.",
        ],
        [
          "Usare bene il tempo",
          "Le 72 ore riguardano il pagamento dopo il calcolo ricevuto, non durata garantita o consegna. Registra inizio e azione.",
          "Chiedi quale misura, calcolo, pagamento, consegna o tracking manca, mantenendo separati i responsabili.",
        ],
        [
          "Chiudere la decisione",
          "Classifica riconciliato, provvisorio, inspiegato o contestato secondo contenuto, imballo, misura, base e aritmetica.",
          "Salva fonti, schermate, ID, linea, stima, finale, regolazione e supporto. Collega regola ed evidenza senza garanzie.",
        ],
      ],
    ),
  };
