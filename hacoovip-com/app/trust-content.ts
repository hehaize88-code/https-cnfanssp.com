import type { Lang, TrustRouteKey } from "./site-data";

export type TrustPage = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: readonly { title: string; text: string }[];
};

export const trustNav: Record<Lang, Record<TrustRouteKey, string>> = {
  "en": {
    "about": "About",
    "contact": "Contact",
    "editorial-policy": "Editorial policy",
    "sources-policy": "Sources policy",
    "corrections-policy": "Corrections",
    "privacy": "Privacy",
    "terms": "Terms"
  },
  "de": {
    "about": "Über uns",
    "contact": "Kontakt",
    "editorial-policy": "Redaktionsrichtlinie",
    "sources-policy": "Quellenrichtlinie",
    "corrections-policy": "Korrekturen",
    "privacy": "Datenschutz",
    "terms": "Bedingungen"
  },
  "es": {
    "about": "Quiénes somos",
    "contact": "Contacto",
    "editorial-policy": "Política editorial",
    "sources-policy": "Política de fuentes",
    "corrections-policy": "Correcciones",
    "privacy": "Privacidad",
    "terms": "Condiciones"
  },
  "fr": {
    "about": "À propos",
    "contact": "Contact",
    "editorial-policy": "Politique éditoriale",
    "sources-policy": "Politique des sources",
    "corrections-policy": "Corrections",
    "privacy": "Confidentialité",
    "terms": "Conditions"
  },
  "it": {
    "about": "Chi siamo",
    "contact": "Contatti",
    "editorial-policy": "Politica editoriale",
    "sources-policy": "Politica delle fonti",
    "corrections-policy": "Correzioni",
    "privacy": "Privacy",
    "terms": "Termini"
  }
};

export const trustContent: Record<Lang, Record<TrustRouteKey, TrustPage>> = {
  "en": {
    "about": {
      "eyebrow": "INDEPENDENT RESEARCH",
      "title": "About Hacoo VIP",
      "intro": "Hacoo VIP is an independent comparison and decision guide. It is not Hacoo, does not represent Hacoo and does not sell the products shown on this site.",
      "sections": [
        {
          "title": "What we do",
          "text": "We organise live catalogue destinations into practical shortlists and compare the details that affect a decision: current image and title, option, source price, measurements, listing status, delivery range and return evidence. Product and category buttons continue to the corresponding page in the main catalogue."
        },
        {
          "title": "What we do not claim",
          "text": "A working link is not proof of stock, quality, authenticity or delivery. Prices and availability can change. We identify official platform statements, third-party review signals and our own checking advice separately, and we show the date of each material check."
        },
        {
          "title": "Our editorial lane",
          "text": "This site concentrates on product comparison, shortlist building and decision matrices. Spreadsheet, QC, shipping and returns pages remain supporting tools rather than claims that Hacoo VIP is an official catalogue or service."
        }
      ]
    },
    "contact": {
      "eyebrow": "CONTACT",
      "title": "Help with links and order questions",
      "intro": "Use these checks when a link changes or you need help with an order. This site has no editorial submission form or order-support portal.",
      "sections": [
        {
          "title": "Editorial and correction requests",
          "text": "Keep the page URL, destination URL, date and a screenshot showing the mismatched title, image or option. Recheck the live destination before using a saved product card. There is currently no on-site channel for submitting these records."
        },
        {
          "title": "Order support",
          "text": "Hacoo VIP cannot access Hacoo accounts, orders, payments, tracking or refunds. For an account or order problem, use the current support route inside the Hacoo app or the official Hacoo website. Never send passwords or full payment details to this site."
        }
      ]
    },
    "editorial-policy": {
      "eyebrow": "EDITORIAL STANDARD",
      "title": "Editorial policy",
      "intro": "Our pages are written for a reader making a real decision, not to display internal keyword instructions or manufacture certainty.",
      "sections": [
        {
          "title": "Separation of evidence",
          "text": "Official statements are identified by source and check date. Review-platform observations are historical third-party signals. Product-card checks and practical advice are independent editorial work."
        },
        {
          "title": "Review before publication",
          "text": "We check the corresponding official platform page again before advancing an article cycle. We remove internal keyword, target-length and drafting notes from the public article. Search terms may guide topic selection, but they do not replace a useful answer."
        },
        {
          "title": "Commercial links",
          "text": "Category and product links can lead to the main catalogue and may contain referral parameters. That relationship does not change our obligation to show uncertainty, identify the destination and avoid invented totals or official-sounding claims."
        }
      ]
    },
    "sources-policy": {
      "eyebrow": "SOURCE STANDARD",
      "title": "Sources policy",
      "intro": "Every material policy, timing or rating statement should be traceable to a named, clickable source and a check date.",
      "sections": [
        {
          "title": "Source order",
          "text": "We prefer Hacoo’s current official pages and Help Center for platform policy. For app ratings we use the relevant Google Play or Apple storefront. Review sites can show recurring customer themes, but they are not treated as official policy or proof about one product."
        },
        {
          "title": "Conflicts and changing pages",
          "text": "When official pages publish different delivery ranges, we retain the difference instead of selecting the most attractive number. If a page changes by country, device or date, we state that limitation and ask the reader to verify the live interface."
        },
        {
          "title": "Images",
          "text": "Product images are used to help the reader match a card to its destination. An image does not verify materials, condition or authenticity. We add a descriptive caption when an image materially supports the checking method."
        }
      ]
    },
    "corrections-policy": {
      "eyebrow": "CORRECTIONS",
      "title": "Corrections policy",
      "intro": "A correction should make the current page more accurate without hiding what was checked or silently changing an unrelated section.",
      "sections": [
        {
          "title": "What to report",
          "text": "Keep the page URL, destination URL, date and a screenshot showing the mismatched title, image or option. Recheck the live destination before using a saved product card. There is currently no on-site channel for submitting these records."
        },
        {
          "title": "How we respond",
          "text": "We reproduce the issue, check the most authoritative available source and correct the page when the evidence supports a change. Material updates receive an accurate last-modified date; unrelated sitemap dates are not refreshed."
        },
        {
          "title": "What may be removed",
          "text": "A product card may be removed only when the destination cannot be verified or the relationship between the card and destination is no longer reliable. Existing modules and language versions are not reduced simply to make a page look shorter."
        }
      ]
    },
    "privacy": {
      "eyebrow": "PRIVACY",
      "title": "Privacy notice",
      "intro": "Hacoo VIP is a public informational site. It does not provide Hacoo account login, checkout or order-management forms.",
      "sections": [
        {
          "title": "Technical data",
          "text": "The hosting and security provider may process normal request data such as IP address, browser information, requested URL and time to deliver and protect the site. We do not ask visitors to submit passwords or payment details."
        },
        {
          "title": "Analytics",
          "text": "This site uses Google Analytics 4 to measure page visits and engagement. Custom events record catalogue link clicks and search submissions, including page language, link location and destination path. These custom events do not include the typed search term or payment details. Google Analytics may use cookies and technical browser or device information."
        },
        {
          "title": "External destinations",
          "text": "Search, catalogue and product links open the main catalogue, a separate service with its own privacy policies. Review its terms before submitting information or paying."
        }
      ]
    },
    "terms": {
      "eyebrow": "SITE TERMS",
      "title": "Terms of use",
      "intro": "By using Hacoo VIP, you acknowledge that it is an independent research and comparison guide, not Hacoo and not the seller or payment provider for linked products.",
      "sections": [
        {
          "title": "Informational use",
          "text": "Prices, currency conversions, delivery ranges, ratings and listing status are time-stamped planning information rather than guarantees. The live destination, selected option, checkout and order-specific terms remain authoritative for a purchase."
        },
        {
          "title": "Outbound links",
          "text": "Catalogue links open the main catalogue and may include referral parameters. Its availability, content, checkout and policies are outside this site’s control. Hacoo policy descriptions do not automatically apply to purchases through another service."
        },
        {
          "title": "Responsible use",
          "text": "Use the comparison and evidence checklists to make your own decision. Do not rely on this site for legal, financial or account-specific advice, and do not infer product authenticity or quality from inclusion in a shortlist."
        }
      ]
    }
  },
  "de": {
    "about": {
      "eyebrow": "UNABHÄNGIGE RECHERCHE",
      "title": "Über Hacoo VIP",
      "intro": "Hacoo VIP ist ein unabhängiger Vergleichs- und Entscheidungsratgeber. Die Website ist weder Hacoo noch dessen Vertreter oder Verkäufer.",
      "sections": [
        {
          "title": "Unser Zweck",
          "text": "Wir ordnen aktuelle Katalogziele in Auswahllisten und vergleichen Bild, Titel, Option, Quellpreis, Maße, Angebotsstatus, Lieferzeitraum und Retourenbelege. Produkt- und Kategorietasten führen zur passenden Seite im Hauptkatalog."
        },
        {
          "title": "Keine Garantie",
          "text": "Ein funktionierender Link belegt weder Bestand, Qualität, Echtheit noch Lieferung. Wir trennen offizielle Angaben, Drittanbieter-Signale und eigene Prüfratschläge und nennen das Prüfdatum."
        },
        {
          "title": "Redaktioneller Schwerpunkt",
          "text": "Hacoo VIP konzentriert sich auf Produktvergleich, Auswahllisten und Entscheidungskriterien. Tabelle, QC, Versand und Retouren bleiben unterstützende Werkzeuge."
        }
      ]
    },
    "contact": {
      "eyebrow": "KONTAKT",
      "title": "Hilfe bei Links und Bestellfragen",
      "intro": "Nutze diese Hinweise bei veränderten Links oder Fragen zu einer Bestellung. Diese Seite hat kein redaktionelles Meldeformular und kein Bestellportal.",
      "sections": [
        {
          "title": "Korrekturen",
          "text": "Bewahre Seiten-URL, Ziel-URL, Datum und einen Screenshot des abweichenden Titels, Bildes oder der Option auf. Prüfe das aktuelle Ziel vor Nutzung einer gespeicherten Produktkarte. Derzeit gibt es hier keinen Kanal zum Einreichen dieser Unterlagen."
        },
        {
          "title": "Bestellhilfe",
          "text": "Hacoo VIP hat keinen Zugriff auf Hacoo-Konten, Bestellungen, Zahlungen oder Erstattungen. Nutze dafür den aktuellen offiziellen Supportweg und sende uns niemals Passwörter oder Zahlungsdaten."
        }
      ]
    },
    "editorial-policy": {
      "eyebrow": "REDAKTIONSSTANDARD",
      "title": "Redaktionsrichtlinie",
      "intro": "Unsere Texte helfen bei einer echten Entscheidung und zeigen keine internen Keyword- oder Längenvorgaben.",
      "sections": [
        {
          "title": "Belege trennen",
          "text": "Offizielle Angaben werden mit Quelle und Prüfdatum gekennzeichnet. Bewertungsdaten sind historische Drittanbieter-Signale. Produktprüfungen und praktische Hinweise sind unabhängige redaktionelle Arbeit."
        },
        {
          "title": "Prüfung vor Veröffentlichung",
          "text": "Vor jeder neuen Artikelphase prüfen wir die passende offizielle Plattformseite erneut. Suchbegriffe steuern die Themenwahl, ersetzen aber keine nützliche Antwort."
        },
        {
          "title": "Kommerzielle Links",
          "text": "Links zum Hauptkatalog können Referral-Parameter enthalten. Deshalb bleiben Unsicherheiten, Ziel und unabhängiger Status sichtbar."
        }
      ]
    },
    "sources-policy": {
      "eyebrow": "QUELLENSTANDARD",
      "title": "Quellenrichtlinie",
      "intro": "Wesentliche Richtlinien-, Zeit- und Bewertungsangaben müssen zu einer benannten, anklickbaren Quelle mit Prüfdatum führen.",
      "sections": [
        {
          "title": "Quellenfolge",
          "text": "Für Richtlinien bevorzugen wir aktuelle offizielle Hacoo-Seiten; für App-Bewertungen den jeweiligen Store. Bewertungsportale zeigen Themen, aber keine offizielle Regel oder Produktgarantie."
        },
        {
          "title": "Widersprüche",
          "text": "Unterschiedliche offizielle Lieferzeiträume bleiben sichtbar. Länder-, Geräte- und Datumsunterschiede werden gekennzeichnet."
        },
        {
          "title": "Bilder",
          "text": "Bilder helfen beim Abgleich von Karte und Zielseite, belegen aber weder Material, Zustand noch Echtheit."
        }
      ]
    },
    "corrections-policy": {
      "eyebrow": "KORREKTUREN",
      "title": "Korrekturrichtlinie",
      "intro": "Korrekturen verbessern die betroffene Seite, ohne Prüfverlauf oder andere Bereiche still zu verändern.",
      "sections": [
        {
          "title": "Meldung",
          "text": "Bewahre Seiten-URL, Ziel-URL, Datum und einen Screenshot des abweichenden Titels, Bildes oder der Option auf. Prüfe das aktuelle Ziel vor Nutzung einer gespeicherten Produktkarte. Derzeit gibt es hier keinen Kanal zum Einreichen dieser Unterlagen."
        },
        {
          "title": "Bearbeitung",
          "text": "Wir reproduzieren den Fehler, prüfen die beste Quelle und korrigieren bei ausreichendem Beleg. Nur wesentlich geänderte URLs erhalten ein neues lastmod-Datum."
        },
        {
          "title": "Entfernung",
          "text": "Eine Karte wird nur entfernt, wenn Ziel oder Zuordnung nicht mehr verifizierbar sind. Module und Sprachversionen werden nicht zum Kürzen entfernt."
        }
      ]
    },
    "privacy": {
      "eyebrow": "DATENSCHUTZ",
      "title": "Datenschutzhinweis",
      "intro": "Hacoo VIP ist eine öffentliche Informationsseite ohne Hacoo-Login, Checkout oder Bestellverwaltung.",
      "sections": [
        {
          "title": "Technische Daten",
          "text": "Hosting und Sicherheit können übliche Anfragedaten wie IP, Browser, URL und Zeit verarbeiten. Wir fragen nicht nach Passwörtern oder Zahlungsdaten."
        },
        {
          "title": "Nutzungsstatistik",
          "text": "Diese Seite verwendet Google Analytics 4 für Seitenaufrufe und Nutzung. Eigene Ereignisse erfassen Katalogklicks und Suchabsendungen mit Seitensprache, Linkposition und Zielpfad. Der eingegebene Suchbegriff und Zahlungsdaten werden diesen Ereignissen nicht beigefügt. Google Analytics kann Cookies und technische Browser- oder Gerätedaten nutzen."
        },
        {
          "title": "Externe Ziele",
          "text": "Suche, Katalog- und Produktlinks öffnen den Hauptkatalog als separaten Dienst mit eigenen Datenschutzregeln. Prüfe seine Bedingungen vor Datenübermittlung oder Zahlung."
        }
      ]
    },
    "terms": {
      "eyebrow": "NUTZUNGSBEDINGUNGEN",
      "title": "Bedingungen",
      "intro": "Hacoo VIP ist ein unabhängiger Ratgeber und weder Hacoo noch Verkäufer oder Zahlungsanbieter.",
      "sections": [
        {
          "title": "Information",
          "text": "Preise, Umrechnung, Lieferzeiten, Bewertungen und Angebotsstatus sind datierte Planungswerte ohne Garantie. Maßgeblich bleibt die Live-Zielseite."
        },
        {
          "title": "Externe Links",
          "text": "Kataloglinks öffnen den Hauptkatalog und können Verweisparameter enthalten. Verfügbarkeit, Inhalt, Checkout und Regeln dieses Dienstes liegen außerhalb unserer Kontrolle. Beschriebene Hacoo-Regeln gelten nicht automatisch für Käufe bei einem anderen Dienst."
        },
        {
          "title": "Eigenverantwortung",
          "text": "Nutze Vergleiche und Checklisten für deine Entscheidung; die Aufnahme in eine Liste beweist weder Echtheit noch Qualität."
        }
      ]
    }
  },
  "es": {
    "about": {
      "eyebrow": "INVESTIGACIÓN INDEPENDIENTE",
      "title": "Acerca de Hacoo VIP",
      "intro": "Hacoo VIP es una guía independiente de comparación y decisión. No es Hacoo, no lo representa y no vende los productos mostrados.",
      "sections": [
        {
          "title": "Qué hacemos",
          "text": "Organizamos destinos activos en listas útiles y comparamos imagen, título, opción, precio original, medidas, estado, entrega y pruebas de devolución. Los botones llevan a la página correspondiente del catálogo principal."
        },
        {
          "title": "Qué no garantizamos",
          "text": "Un enlace activo no demuestra stock, calidad, autenticidad ni entrega. Separamos hechos oficiales, señales de terceros y consejos editoriales e indicamos la fecha de revisión."
        },
        {
          "title": "Enfoque editorial",
          "text": "El sitio se centra en comparación, listas y criterios de decisión. Hoja, QC, envío y devoluciones son herramientas de apoyo."
        }
      ]
    },
    "contact": {
      "eyebrow": "CONTACTO",
      "title": "Ayuda con enlaces y consultas de pedidos",
      "intro": "Consulta estas indicaciones si cambia un enlace o necesitas ayuda con un pedido. El sitio no tiene formulario editorial ni portal de asistencia de pedidos.",
      "sections": [
        {
          "title": "Correcciones",
          "text": "Guarda URL de la página y del destino, fecha y una captura de la diferencia de título, imagen u opción. Revisa el destino actual antes de usar una ficha guardada. Actualmente no hay un canal en este sitio para enviar esos registros."
        },
        {
          "title": "Ayuda con pedidos",
          "text": "Hacoo VIP no accede a cuentas, pedidos, pagos o reembolsos. Usa el soporte oficial actual y no nos envíes contraseñas ni datos completos de pago."
        }
      ]
    },
    "editorial-policy": {
      "eyebrow": "NORMA EDITORIAL",
      "title": "Política editorial",
      "intro": "Los textos ayudan a tomar decisiones reales y no muestran instrucciones internas de palabras clave o extensión.",
      "sections": [
        {
          "title": "Separación de pruebas",
          "text": "Las declaraciones oficiales se identifican por fuente y fecha de consulta. Las reseñas son señales históricas de terceros. La revisión de fichas y los consejos son trabajo editorial independiente."
        },
        {
          "title": "Revisión antes de publicar",
          "text": "Antes de avanzar un ciclo volvemos a comprobar la página oficial correspondiente. Las búsquedas orientan el tema, pero no sustituyen una respuesta útil."
        },
        {
          "title": "Enlaces comerciales",
          "text": "Los enlaces al catálogo principal pueden llevar parámetros de referencia; mantenemos visibles el destino, los límites y la independencia."
        }
      ]
    },
    "sources-policy": {
      "eyebrow": "NORMA DE FUENTES",
      "title": "Política de fuentes",
      "intro": "Cada dato importante sobre políticas, plazos o valoraciones debe llevar a una fuente identificada, accesible y fechada.",
      "sections": [
        {
          "title": "Prioridad",
          "text": "Preferimos páginas oficiales de Hacoo para políticas y las tiendas correspondientes para valoraciones. Las webs de reseñas muestran temas, no normas oficiales ni pruebas de un producto."
        },
        {
          "title": "Diferencias",
          "text": "Conservamos rangos oficiales diferentes y señalamos cambios por país, dispositivo o fecha."
        },
        {
          "title": "Imágenes",
          "text": "Las imágenes ayudan a relacionar ficha y destino, pero no prueban material, estado o autenticidad."
        }
      ]
    },
    "corrections-policy": {
      "eyebrow": "CORRECCIONES",
      "title": "Política de correcciones",
      "intro": "Una corrección mejora la página afectada sin ocultar la revisión ni cambiar secciones no relacionadas.",
      "sections": [
        {
          "title": "Qué enviar",
          "text": "Guarda URL de la página y del destino, fecha y una captura de la diferencia de título, imagen u opción. Revisa el destino actual antes de usar una ficha guardada. Actualmente no hay un canal en este sitio para enviar esos registros."
        },
        {
          "title": "Proceso",
          "text": "Reproducimos el problema, comprobamos la mejor fuente y corregimos con pruebas. Solo las URL modificadas de forma relevante cambian lastmod."
        },
        {
          "title": "Eliminación",
          "text": "Solo retiramos una ficha cuando no puede verificarse. No reducimos módulos o idiomas para acortar la página."
        }
      ]
    },
    "privacy": {
      "eyebrow": "PRIVACIDAD",
      "title": "Aviso de privacidad",
      "intro": "Hacoo VIP es un sitio informativo público sin acceso a Hacoo, pago o gestión de pedidos.",
      "sections": [
        {
          "title": "Datos técnicos",
          "text": "El alojamiento y la seguridad pueden procesar IP, navegador, URL y hora. No solicitamos contraseñas ni datos de pago."
        },
        {
          "title": "Analítica",
          "text": "El sitio usa Google Analytics 4 para medir visitas e interacción. Los eventos propios registran clics al catálogo y envíos de búsquedas con idioma, posición del enlace y ruta del destino. No incluyen el término escrito ni datos de pago. Google Analytics puede usar cookies e información técnica del navegador o dispositivo."
        },
        {
          "title": "Servicios externos",
          "text": "La búsqueda y los enlaces de catálogo y productos abren el catálogo principal, un servicio separado con sus propias políticas. Revísalas antes de enviar información o pagar."
        }
      ]
    },
    "terms": {
      "eyebrow": "CONDICIONES",
      "title": "Condiciones de uso",
      "intro": "Hacoo VIP es una guía independiente y no es Hacoo, vendedor ni proveedor de pago.",
      "sections": [
        {
          "title": "Información",
          "text": "Precios, cambios, entregas, valoraciones y estado son referencias fechadas, no garantías. La página activa es la autoridad final."
        },
        {
          "title": "Enlaces",
          "text": "Los enlaces abren el catálogo principal y pueden incluir parámetros de referencia. Disponibilidad, contenido, pago y políticas son ajenos a nuestro control. Las políticas Hacoo descritas no se aplican automáticamente a compras mediante otro servicio."
        },
        {
          "title": "Uso responsable",
          "text": "Usa comparaciones y listas para tu decisión; aparecer en una selección no prueba autenticidad ni calidad."
        }
      ]
    }
  },
  "fr": {
    "about": {
      "eyebrow": "RECHERCHE INDÉPENDANTE",
      "title": "À propos de Hacoo VIP",
      "intro": "Hacoo VIP est un guide indépendant de comparaison et de décision. Il ne représente pas Hacoo et ne vend pas les produits affichés.",
      "sections": [
        {
          "title": "Notre travail",
          "text": "Nous organisons des destinations actives en listes utiles et comparons image, titre, option, prix source, mesures, statut, livraison et preuves de retour. Les boutons mènent à la page correspondante du catalogue principal."
        },
        {
          "title": "Nos limites",
          "text": "Un lien actif ne prouve ni stock, qualité, authenticité ou livraison. Nous séparons faits officiels, signaux tiers et conseils éditoriaux avec une date de vérification."
        },
        {
          "title": "Axe éditorial",
          "text": "Le site se concentre sur la comparaison, les listes et les critères de décision. Tableur, QC, livraison et retours restent des outils d’appui."
        }
      ]
    },
    "contact": {
      "eyebrow": "CONTACT",
      "title": "Aide concernant les liens et les commandes",
      "intro": "Consultez ces indications si un lien change ou pour une question de commande. Ce site ne propose ni formulaire éditorial ni portail de suivi des commandes.",
      "sections": [
        {
          "title": "Corrections",
          "text": "Conservez URL de la page et de la destination, date et capture montrant la différence de titre, image ou option. Revérifiez la destination avant d’utiliser une fiche enregistrée. Aucun canal de dépôt de ces éléments n’est actuellement proposé sur ce site."
        },
        {
          "title": "Aide aux commandes",
          "text": "Hacoo VIP n’accède pas aux comptes, commandes, paiements ou remboursements. Utilisez l’assistance officielle et ne nous envoyez jamais de mot de passe ou de données de paiement."
        }
      ]
    },
    "editorial-policy": {
      "eyebrow": "NORME ÉDITORIALE",
      "title": "Politique éditoriale",
      "intro": "Nos textes répondent à une décision réelle et n’affichent pas d’instructions internes de mot-clé ou de longueur.",
      "sections": [
        {
          "title": "Séparer les preuves",
          "text": "Les déclarations officielles sont identifiées par source et date de consultation. Les avis sont des signaux historiques de tiers. Les vérifications et conseils pratiques relèvent d’un travail éditorial indépendant."
        },
        {
          "title": "Vérification avant publication",
          "text": "Avant chaque nouveau cycle, nous revérifions la page officielle concernée. Les recherches orientent le sujet sans remplacer une réponse utile."
        },
        {
          "title": "Liens commerciaux",
          "text": "Les liens du catalogue principal peuvent contenir des paramètres de recommandation; destination, limites et indépendance restent visibles."
        }
      ]
    },
    "sources-policy": {
      "eyebrow": "NORME DES SOURCES",
      "title": "Politique des sources",
      "intro": "Tout fait important de politique, délai ou note doit mener à une source nommée, cliquable et datée.",
      "sections": [
        {
          "title": "Priorité",
          "text": "Nous privilégions Hacoo pour les politiques et les stores concernés pour les notes. Les plateformes d’avis montrent des thèmes, pas une règle officielle ou la preuve d’un produit."
        },
        {
          "title": "Écarts",
          "text": "Nous conservons les plages officielles différentes et signalons les variations par pays, appareil ou date."
        },
        {
          "title": "Images",
          "text": "Les images relient carte et destination sans prouver matière, état ou authenticité."
        }
      ]
    },
    "corrections-policy": {
      "eyebrow": "CORRECTIONS",
      "title": "Politique de correction",
      "intro": "Une correction améliore la page concernée sans masquer le contrôle ni modifier des sections sans rapport.",
      "sections": [
        {
          "title": "Signalement",
          "text": "Conservez URL de la page et de la destination, date et capture montrant la différence de titre, image ou option. Revérifiez la destination avant d’utiliser une fiche enregistrée. Aucun canal de dépôt de ces éléments n’est actuellement proposé sur ce site."
        },
        {
          "title": "Traitement",
          "text": "Nous reproduisons, vérifions la meilleure source et corrigeons avec preuve. Seules les URL réellement modifiées changent de lastmod."
        },
        {
          "title": "Retrait",
          "text": "Une fiche n’est retirée que si elle n’est plus vérifiable. Modules et langues ne sont pas supprimés pour raccourcir."
        }
      ]
    },
    "privacy": {
      "eyebrow": "CONFIDENTIALITÉ",
      "title": "Avis de confidentialité",
      "intro": "Hacoo VIP est un site public d’information sans connexion Hacoo, paiement ou gestion de commande.",
      "sections": [
        {
          "title": "Données techniques",
          "text": "Hébergement et sécurité peuvent traiter IP, navigateur, URL et heure. Nous ne demandons ni mot de passe ni paiement."
        },
        {
          "title": "Mesure d’audience",
          "text": "Ce site utilise Google Analytics 4 pour mesurer visites et interactions. Les événements personnalisés enregistrent clics vers le catalogue et envois de recherche avec langue, emplacement du lien et chemin de destination. Ils ne contiennent pas le terme saisi ni les données de paiement. Google Analytics peut utiliser des cookies et des informations techniques de navigateur ou d’appareil."
        },
        {
          "title": "Services externes",
          "text": "La recherche et les liens de catalogue ou de produit ouvrent le catalogue principal, un service distinct soumis à ses propres politiques. Consultez-les avant de transmettre des informations ou de payer."
        }
      ]
    },
    "terms": {
      "eyebrow": "CONDITIONS",
      "title": "Conditions d’utilisation",
      "intro": "Hacoo VIP est un guide indépendant et n’est ni Hacoo, ni vendeur, ni prestataire de paiement.",
      "sections": [
        {
          "title": "Information",
          "text": "Prix, conversion, livraison, notes et statut sont des repères datés sans garantie. La destination active reste déterminante."
        },
        {
          "title": "Liens externes",
          "text": "Les liens ouvrent le catalogue principal et peuvent inclure des paramètres de recommandation. Disponibilité, contenu, paiement et politiques échappent au contrôle de ce site. Les politiques Hacoo décrites ne s’appliquent pas automatiquement aux achats auprès d’un autre service."
        },
        {
          "title": "Usage responsable",
          "text": "Utilisez comparaisons et listes pour décider; une sélection ne prouve ni authenticité ni qualité."
        }
      ]
    }
  },
  "it": {
    "about": {
      "eyebrow": "RICERCA INDIPENDENTE",
      "title": "Informazioni su Hacoo VIP",
      "intro": "Hacoo VIP è una guida indipendente al confronto e alla decisione. Non è Hacoo, non lo rappresenta e non vende i prodotti mostrati.",
      "sections": [
        {
          "title": "Cosa facciamo",
          "text": "Organizziamo destinazioni attive in liste pratiche e confrontiamo immagine, titolo, opzione, prezzo fonte, misure, stato, consegna e prove di reso. I pulsanti aprono la pagina corrispondente nel catalogo principale."
        },
        {
          "title": "Cosa non garantiamo",
          "text": "Un link attivo non prova disponibilità, qualità, autenticità o consegna. Separiamo fatti ufficiali, segnali terzi e consigli editoriali con data di controllo."
        },
        {
          "title": "Focus editoriale",
          "text": "Il sito si concentra su confronto, liste e criteri decisionali. Foglio, QC, spedizione e resi restano strumenti di supporto."
        }
      ]
    },
    "contact": {
      "eyebrow": "CONTATTI",
      "title": "Aiuto con link e domande sugli ordini",
      "intro": "Consulta queste indicazioni se cambia un link o hai domande su un ordine. Il sito non offre un modulo editoriale né un portale di assistenza ordini.",
      "sections": [
        {
          "title": "Correzioni",
          "text": "Conserva URL della pagina e della destinazione, data e schermata della differenza di titolo, immagine o opzione. Ricontrolla la destinazione prima di usare una scheda salvata. Al momento non esiste su questo sito un canale per inviare questi documenti."
        },
        {
          "title": "Assistenza ordini",
          "text": "Hacoo VIP non accede ad account, ordini, pagamenti o rimborsi. Usa il supporto ufficiale e non inviarci password o dati di pagamento."
        }
      ]
    },
    "editorial-policy": {
      "eyebrow": "STANDARD EDITORIALE",
      "title": "Politica editoriale",
      "intro": "I testi aiutano una decisione reale e non mostrano istruzioni interne su parole chiave o lunghezza.",
      "sections": [
        {
          "title": "Separare le prove",
          "text": "Le dichiarazioni ufficiali sono identificate con fonte e data di consultazione. Le recensioni sono segnali storici di terzi. Controlli delle schede e consigli pratici sono lavoro editoriale indipendente."
        },
        {
          "title": "Verifica prima della pubblicazione",
          "text": "Prima di avanzare un ciclo ricontrolliamo la pagina ufficiale pertinente. Le ricerche guidano il tema ma non sostituiscono una risposta utile."
        },
        {
          "title": "Link commerciali",
          "text": "I link al catalogo principale possono includere parametri referral; destinazione, limiti e indipendenza restano visibili."
        }
      ]
    },
    "sources-policy": {
      "eyebrow": "STANDARD DELLE FONTI",
      "title": "Politica delle fonti",
      "intro": "Ogni dato importante su regole, tempi o valutazioni deve portare a una fonte nominata, cliccabile e datata.",
      "sections": [
        {
          "title": "Priorità",
          "text": "Preferiamo Hacoo per le politiche e gli store pertinenti per le valutazioni. I siti di recensioni mostrano temi, non regole ufficiali o prove su un prodotto."
        },
        {
          "title": "Differenze",
          "text": "Manteniamo intervalli ufficiali diversi e segnaliamo variazioni per paese, dispositivo o data."
        },
        {
          "title": "Immagini",
          "text": "Le immagini collegano scheda e destinazione ma non provano materiale, condizione o autenticità."
        }
      ]
    },
    "corrections-policy": {
      "eyebrow": "CORREZIONI",
      "title": "Politica delle correzioni",
      "intro": "Una correzione migliora la pagina interessata senza nascondere il controllo o cambiare sezioni non correlate.",
      "sections": [
        {
          "title": "Segnalazione",
          "text": "Conserva URL della pagina e della destinazione, data e schermata della differenza di titolo, immagine o opzione. Ricontrolla la destinazione prima di usare una scheda salvata. Al momento non esiste su questo sito un canale per inviare questi documenti."
        },
        {
          "title": "Procedura",
          "text": "Riproduciamo il problema, controlliamo la fonte migliore e correggiamo con prove. Solo gli URL modificati davvero cambiano lastmod."
        },
        {
          "title": "Rimozione",
          "text": "Una scheda viene rimossa solo se non è più verificabile. Moduli e lingue non vengono ridotti per accorciare."
        }
      ]
    },
    "privacy": {
      "eyebrow": "PRIVACY",
      "title": "Informativa sulla privacy",
      "intro": "Hacoo VIP è un sito informativo pubblico senza login Hacoo, pagamento o gestione ordini.",
      "sections": [
        {
          "title": "Dati tecnici",
          "text": "Hosting e sicurezza possono trattare IP, browser, URL e ora. Non chiediamo password o dati di pagamento."
        },
        {
          "title": "Analisi delle visite",
          "text": "Il sito usa Google Analytics 4 per misurare visite e interazioni. Gli eventi personalizzati registrano clic al catalogo e invii di ricerca con lingua, posizione del link e percorso di destinazione. Non includono il termine digitato né dati di pagamento. Google Analytics può usare cookie e informazioni tecniche di browser o dispositivo."
        },
        {
          "title": "Servizi esterni",
          "text": "Ricerca e link di catalogo o prodotto aprono il catalogo principale, un servizio separato con proprie politiche. Leggile prima di inviare informazioni o pagare."
        }
      ]
    },
    "terms": {
      "eyebrow": "TERMINI",
      "title": "Termini di utilizzo",
      "intro": "Hacoo VIP è una guida indipendente e non è Hacoo, venditore o fornitore di pagamenti.",
      "sections": [
        {
          "title": "Informazioni",
          "text": "Prezzi, conversioni, consegne, valutazioni e stato sono riferimenti datati, non garanzie. Fa fede la destinazione attiva."
        },
        {
          "title": "Link esterni",
          "text": "I link aprono il catalogo principale e possono includere parametri referral. Disponibilità, contenuti, pagamento e politiche sono fuori dal controllo di questo sito. Le politiche Hacoo descritte non si applicano automaticamente agli acquisti tramite altri servizi."
        },
        {
          "title": "Uso responsabile",
          "text": "Usa confronti e liste per decidere; l’inclusione non prova autenticità o qualità."
        }
      ]
    }
  }
};
