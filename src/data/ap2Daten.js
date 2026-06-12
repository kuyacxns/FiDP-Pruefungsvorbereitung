export const AP2_DATEN = [
  {
    id: 'qualitaet',
    title: 'Datenqualitätsdimensionen',
    icon: 'database',
    summary: 'Vollständigkeit, Korrektheit, Konsistenz, Aktualität, Eindeutigkeit, Plausibilität.',
    keyPoints: [
      'Vollständigkeit: Sind alle erforderlichen Werte vorhanden? (z. B. NULL-Werte in Pflichtfeldern)',
      'Korrektheit: Stimmen die Werte mit der Realität überein?',
      'Konsistenz: Widerspruchsfreiheit innerhalb und zwischen Systemen (z. B. „PLZ 12345" in System A vs. „01234" in System B)',
      'Aktualität: Sind die Daten zeitlich gültig? (z. B. veraltete Adressen)',
      'Eindeutigkeit (Unique): Keine ungewollten Dubletten',
      'Plausibilität: Werte ergeben Sinn (z. B. Alter > 0 und < 130)',
      'Genauigkeit/Präzision: Detailtiefe (z. B. Datum mit/ohne Uhrzeit)',
      'Konformität: Datenformat entspricht definierten Vorgaben (E-Mail-Regex, ISO-Datum)',
      'Messung: Data Profiling (Statistiken, Patterns), Data Quality Rules, Scorecards',
    ],
    quiz: [
      {
        q: 'Ein Kunde existiert dreimal mit minimal unterschiedlichen Schreibweisen in der Datenbank. Welche Datenqualitätsdimension ist verletzt?',
        options: ['Vollständigkeit', 'Eindeutigkeit', 'Aktualität', 'Konformität'],
        correct: 1,
        explanation: 'Mehrfacheinträge derselben Entität (Dubletten) verletzen die Eindeutigkeit. Lösung: Deduplizierung mit Fuzzy-Matching.'
      },
      {
        q: 'In einer Mitarbeitertabelle steht in der Spalte „Geburtsjahr" der Wert 1899 für einen aktiven Mitarbeiter. Welches Problem liegt am ehesten vor?',
        options: ['Vollständigkeit', 'Plausibilität', 'Konsistenz', 'Konformität'],
        correct: 1,
        explanation: 'Der Wert ist vorhanden (also vollständig) und konform zum Format „Jahr". Aber er ist unplausibel: Ein aktiver Mitarbeiter wäre >125 Jahre alt.'
      },
      {
        q: 'Im CRM steht „Müller-Lüdenscheid", im ERP „Mueller-Luedenscheid". Welche Dimension ist verletzt?',
        options: ['Vollständigkeit', 'Aktualität', 'Konsistenz', 'Genauigkeit'],
        correct: 2,
        explanation: 'Inkonsistente Schreibweisen zwischen Systemen verletzen die Konsistenz. Lösung: Master Data Management, einheitliche Datenstandards.'
      },
      {
        q: 'Was beschreibt „Data Profiling"?',
        options: [
          'Anlegen eines Benutzerprofils im System',
          'Statistische Analyse der Datenstruktur und -werte zur Qualitätsbewertung',
          'Verschlüsselung sensibler Daten',
          'Erstellung eines Backups'
        ],
        correct: 1,
        explanation: 'Data Profiling analysiert Datensätze auf Verteilungen, Muster, NULLs, Dubletten und Anomalien – Grundlage jeder Qualitätsmaßnahme.'
      },
      {
        q: 'Welche Dimension beschreibt, ob Daten im richtigen Format gemäß Vorgaben (z. B. ISO-Datum YYYY-MM-DD) gespeichert sind?',
        options: ['Vollständigkeit', 'Plausibilität', 'Konformität', 'Eindeutigkeit'],
        correct: 2,
        explanation: 'Konformität prüft, ob Datenwerte einem definierten Format oder Standard entsprechen. Beispiele: E-Mail-Format (regex), Datum ISO-8601, PLZ 5 Ziffern. Ein Datum „32.13.2025" ist technisch konform gespeichert (String), aber verletzt Plausibilität und Korrektheit.'
      },
      {
        q: 'Vattenfall prüft, ob alle Kundendatensätze eine gültige IBAN habe. Welche Datenqualitätsdimension wird geprüft?',
        options: ['Aktualität', 'Eindeutigkeit', 'Vollständigkeit und Konformität', 'Plausibilität und Konsistenz'],
        correct: 2,
        explanation: 'Vollständigkeit: Ist das IBAN-Feld gefüllt? Konformität: Entspricht der Wert dem IBAN-Format (Ländercode + Prüfziffer + BBAN, korrekte Länge)? Beide Dimensionen werden kombiniert geprüft. Eine IBAN-Validierung prüft zusätzlich die Prüfziffer – das wäre dann auch Korrektheit.'
      },
      {
        q: 'Was ist der Unterschied zwischen Datenqualität und Datensicherheit?',
        options: ['Es gibt keinen Unterschied – beide Begriffe bedeuten dasselbe', 'Datenqualität bezieht sich auf Korrektheit und Vollständigkeit der Dateninhalte; Datensicherheit schützt Daten vor unberechtigtem Zugriff', 'Datensicherheit ist wichtiger als Datenqualität', 'Datenqualität gilt nur für relationale Datenbanken'],
        correct: 1,
        explanation: 'Datenqualität: Sind die Daten richtig, vollständig, konsistent, aktuell? (inhaltliche Güte). Datensicherheit: CIA-Triad – wer darf auf Daten zugreifen, sind sie vor Verlust geschützt, stimmen sie noch (Integrität)? Beide sind wichtig und ergänzen sich: schlechte Qualität kann durch korrupte oder manipulierte Daten entstehen.'
      },
    ],
    resources: [
      { title: 'DAMA International – Data Management', url: 'https://www.dama.org/' },
      { title: 'Talend Data Quality', url: 'https://www.talend.com/products/data-quality/' },
    ]
  },
  {
    id: 'modellierung',
    title: 'Datenmodellierung & ERM',
    icon: 'database',
    summary: 'ER-Modell, Entitäten, Beziehungen, Kardinalitäten, Normalformen (1NF, 2NF, 3NF).',
    keyPoints: [
      'ERM = Entity-Relationship-Modell',
      'Entität: real existierendes Objekt (Kunde, Bestellung). Attribute beschreiben sie. Primärschlüssel identifiziert eindeutig',
      'Beziehung: Verknüpfung zwischen Entitäten – mit Kardinalität (1:1, 1:n, n:m)',
      'n:m-Beziehung benötigt in der relationalen Umsetzung eine Zwischentabelle (Junction Table)',
      'Notationen: Chen-Notation (Rechtecke/Rauten), Krähenfuß-Notation (Crow\'s Foot)',
      'Normalformen: 1NF (atomare Attribute, keine Wiederholungsgruppen), 2NF (1NF + voll funktional abhängig vom Primärschlüssel), 3NF (2NF + keine transitiven Abhängigkeiten)',
      'Denormalisierung: bewusste Verletzung der Normalformen für Performance (z. B. im Data Warehouse / Star-Schema)',
      'Fremdschlüssel (Foreign Key): verweist auf den Primärschlüssel einer anderen Tabelle, sichert referentielle Integrität',
    ],
    quiz: [
      {
        q: 'Wie wird eine n:m-Beziehung zwischen „Student" und „Kurs" in einer relationalen Datenbank typischerweise umgesetzt?',
        options: [
          'Mit einem zusätzlichen Attribut in der Tabelle Student',
          'Mit einer Zwischentabelle, die beide Primärschlüssel als Fremdschlüssel enthält',
          'Mit zwei separaten 1:1-Beziehungen',
          'Gar nicht – n:m ist in SQL nicht möglich'
        ],
        correct: 1,
        explanation: 'n:m wird durch eine Verknüpfungstabelle (z. B. „Belegung") aufgelöst, die je einen Fremdschlüssel zu Student und Kurs enthält. Der zusammengesetzte Schlüssel oder eine ID dient als Primärschlüssel.'
      },
      {
        q: 'Eine Tabelle enthält die Spalte „Hobbys" mit Werten wie „Joggen, Lesen, Kochen". Gegen welche Normalform verstößt das?',
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        correct: 0,
        explanation: 'Die 1NF verlangt atomare Attribute – pro Zelle nur EIN Wert. Listen/Mehrfachwerte verletzen 1NF. Lösung: separate Hobby-Tabelle mit n:m-Beziehung.'
      },
      {
        q: 'Welche Normalform fordert: keine transitiven Abhängigkeiten?',
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        correct: 2,
        explanation: '3NF: Kein Nicht-Schlüssel-Attribut darf transitiv (über ein anderes Nicht-Schlüssel-Attribut) vom Primärschlüssel abhängen. Beispiel-Verstoß: KundenID → PLZ → Ort (Ort ist transitiv abhängig).'
      },
      {
        q: 'Welche Kardinalität beschreibt die Beziehung zwischen „Person" und „Reisepass" am treffendsten?',
        options: ['1:1', '1:n', 'n:1', 'n:m'],
        correct: 0,
        explanation: 'Eine Person hat genau einen aktiven Reisepass, ein Reisepass gehört zu genau einer Person → 1:1.'
      },
      {
        q: 'Was ist eine schwache Entität (Weak Entity) im ER-Modell?',
        options: ['Eine Entität mit nur einem Attribut', 'Eine Entität ohne eigenen Primärschlüssel, die von einer anderen Entität existenzabhängig ist', 'Eine Entität mit optionalen Beziehungen', 'Eine Entität, die keine Beziehungen hat'],
        correct: 1,
        explanation: 'Schwache Entitäten haben keinen eigenständigen Primärschlüssel – sie benötigen den Schlüssel der übergeordneten (starken) Entität. Beispiel: „Bestellposition" ist eine schwache Entität von „Bestellung". Die Bestellposition existiert nicht ohne Bestellung. Darstellung: doppelter Rahmen im Chen-ERM.'
      },
      {
        q: 'Was unterscheidet eine Identifying Relationship von einer Non-Identifying Relationship?',
        options: ['Identifying: Fremdschlüssel ist Teil des Primärschlüssels der Kindentität; Non-Identifying: Fremdschlüssel ist ein normales Attribut', 'Identifying: 1:1-Beziehung; Non-Identifying: n:m-Beziehung', 'Kein funktionaler Unterschied, nur Namenskonvention', 'Identifying Relationships gibt es nur in SQL nicht in ERM'],
        correct: 0,
        explanation: 'Identifying Relationship (identifizierend): Das Kind kann ohne das Elternteil nicht existieren; der Fremdschlüssel ist Teil des Primärschlüssels des Kindes. Non-Identifying: Kind existiert unabhängig; Fremdschlüssel ist nur ein normales Attribut. In Crow\'s Foot: durchgezogene Linie = identifying, gestrichelt = non-identifying.'
      },
      {
        q: 'Wann ist die BCNF (Boyce-Codd-Normalform) verletzt, obwohl 3NF erfüllt ist?',
        options: ['Wenn es transitive Abhängigkeiten gibt', 'Wenn ein Determinant kein Superschlüssel ist – auch wenn die 3NF durch Prime Attributes (Schlüsselattribute) erfüllt wird', 'BCNF und 3NF sind immer gleichwertig', 'Wenn die Tabelle mehr als 5 Spalten hat'],
        correct: 1,
        explanation: 'BCNF ist strenger als 3NF: In BCNF muss jeder Determinant einer funktionalen Abhängigkeit ein Superschlüssel sein. Gegenbeispiel: Tabelle Kurs(Student, Fach, Dozent) mit FD: Dozent → Fach. Dozent ist kein Superschlüssel, aber es gibt eine Abhängigkeit. 3NF könnte erfüllt sein (Fach ist Schlüsselattribut), BCNF nicht.'
      },
    ],
    resources: [
      { title: 'Datenbanken-Tutorial (datenbanken-verstehen.de)', url: 'https://www.datenbanken-verstehen.de/' },
      { title: 'dbdiagram.io – ER-Diagramme online', url: 'https://dbdiagram.io/' },
    ]
  },
  {
    id: 'sql',
    title: 'SQL & relationale Datenbanken',
    icon: 'database',
    summary: 'SELECT, JOINs, GROUP BY, Aggregatfunktionen, Subqueries – AP2-relevant!',
    keyPoints: [
      'DDL (Data Definition): CREATE, ALTER, DROP',
      'DML (Data Manipulation): INSERT, UPDATE, DELETE, SELECT (oft separat als DQL)',
      'DCL (Data Control): GRANT, REVOKE',
      'TCL (Transaction Control): COMMIT, ROLLBACK, SAVEPOINT',
      'SELECT-Reihenfolge LOGISCH: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT',
      'JOINs: INNER (Schnittmenge), LEFT/RIGHT (alle aus einer + passende), FULL OUTER (Vereinigung), CROSS (kartesisches Produkt)',
      'Aggregate: COUNT, SUM, AVG, MIN, MAX – immer mit GROUP BY, wenn andere Spalten vorhanden',
      'HAVING filtert NACH der Gruppierung (anders als WHERE)',
      'NULL-Behandlung: COALESCE, IS NULL/IS NOT NULL, NULL ≠ NULL',
      'Transaktionseigenschaften: ACID (Atomarität, Konsistenz, Isolation, Dauerhaftigkeit)',
    ],
    quiz: [
      {
        q: 'Welcher JOIN gibt nur Datensätze zurück, die in BEIDEN Tabellen übereinstimmen?',
        options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL OUTER JOIN'],
        correct: 2,
        explanation: 'INNER JOIN = Schnittmenge. LEFT/RIGHT zusätzlich alle Datensätze einer Seite, FULL OUTER alle aus beiden Seiten.'
      },
      {
        q: 'Welche SQL-Klausel filtert NACH einer Gruppierung?',
        options: ['WHERE', 'GROUP BY', 'HAVING', 'ORDER BY'],
        correct: 2,
        explanation: 'WHERE filtert vor der Gruppierung auf Zeilenebene. HAVING filtert NACH GROUP BY auf Gruppen-Aggregaten (z. B. HAVING COUNT(*) > 5).'
      },
      {
        q: 'Was ergibt SELECT COUNT(*) FROM kunden WHERE plz IS NULL; bei 1000 Kunden, davon 50 ohne PLZ?',
        options: ['1000', '950', '50', '0'],
        correct: 2,
        explanation: 'IS NULL prüft auf fehlende Werte. 50 Kunden ohne PLZ ergibt COUNT = 50. Wichtig: plz = NULL würde NICHT funktionieren!'
      },
      {
        q: 'Welches Prinzip wird durch die ACID-Eigenschaft „Isolation" beschrieben?',
        options: [
          'Eine Transaktion ist entweder ganz oder gar nicht ausgeführt',
          'Parallele Transaktionen beeinflussen sich nicht gegenseitig',
          'Daten bleiben nach COMMIT dauerhaft erhalten',
          'Datenbankregeln werden eingehalten'
        ],
        correct: 1,
        explanation: 'Isolation = parallele Transaktionen verhalten sich, als liefen sie nacheinander. (A=Atomarität, C=Konsistenz, D=Durability/Dauerhaftigkeit).'
      },
      {
        q: 'In welcher logischen Reihenfolge wird ein SELECT verarbeitet?',
        options: [
          'SELECT → FROM → WHERE → GROUP BY → ORDER BY',
          'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY',
          'WHERE → FROM → SELECT → ORDER BY',
          'GROUP BY → FROM → SELECT → WHERE'
        ],
        correct: 1,
        explanation: 'Geschrieben wird SELECT zuerst, ABGEARBEITET wird aber: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT. Wichtig für das Verständnis von Aliasen und HAVING.'
      },
    ],
    resources: [
      { title: 'SQLZoo – interaktiv', url: 'https://sqlzoo.net/' },
      { title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/' },
      { title: 'sql-und-xml.de – SQL-Tutorial', url: 'https://www.sql-und-xml.de/sql-tutorial/' },
    ]
  },
  {
    id: 'nosql',
    title: 'NoSQL-Datenbanken',
    icon: 'database',
    summary: 'Document, Key-Value, Wide-Column, Graph – wann was?',
    keyPoints: [
      'Document Stores: JSON/BSON-Dokumente (MongoDB, CouchDB). Flexibles Schema, gut für ContentMgmt',
      'Key-Value Stores: Redis, Memcached, DynamoDB. Sehr schnell, einfach. Caching, Session Storage',
      'Wide-Column Stores: Cassandra, HBase. Riesige Datenmengen, hohe Schreibleistung',
      'Graph-DBs: Neo4j, ArangoDB. Beziehungen erster Klasse (Social Networks, Empfehlungssysteme)',
      'CAP-Theorem: Consistency, Availability, Partition Tolerance – nur 2 gleichzeitig möglich',
      'BASE (statt ACID): Basically Available, Soft state, Eventual consistency',
      'Skalierung: SQL meist vertikal (mehr Power je Server), NoSQL oft horizontal (mehr Server)',
    ],
    quiz: [
      {
        q: 'Welches NoSQL-Datenmodell eignet sich am besten, um Beziehungen in einem sozialen Netzwerk zu modellieren?',
        options: ['Key-Value', 'Document', 'Wide-Column', 'Graph'],
        correct: 3,
        explanation: 'Graph-DBs (z. B. Neo4j) behandeln Knoten und Kanten als gleichwertige Bürger und sind extrem schnell für Pfade, Freundes-Empfehlungen und Beziehungsanalysen.'
      },
      {
        q: 'Was besagt das CAP-Theorem?',
        options: [
          'Eine verteilte Datenbank kann gleichzeitig Consistency, Availability und Partition Tolerance erreichen',
          'Eine verteilte Datenbank kann nur zwei der drei Eigenschaften gleichzeitig garantieren',
          'NoSQL ist immer schneller als SQL',
          'ACID und BASE sind identisch'
        ],
        correct: 1,
        explanation: 'CAP: In einem verteilten System mit Netzwerk-Partitionen müssen Sie zwischen Konsistenz und Verfügbarkeit wählen. Praktisch entscheidet man sich für AP oder CP (CA ohne P existiert in der Praxis kaum).'
      },
      {
        q: 'Welcher Anwendungsfall passt am besten zu einem Key-Value-Store wie Redis?',
        options: [
          'Komplexe Berichtsabfragen über viele Tabellen',
          'Session-Caching und schnelle Lookups',
          'Verwaltung von Beziehungsnetzwerken',
          'Speicherung von Versionsverlauf eines Dokuments'
        ],
        correct: 1,
        explanation: 'Key-Value-Stores glänzen bei einfachen, schnellen Lookups: Sessions, Caches, Counter, Leaderboards. Bei komplexen Joins oder Beziehungen sind sie ungeeignet.'
      },
      {
        q: 'Was bedeutet BASE im Kontext von NoSQL-Datenbanken?',
        options: ['Basic Access Storage Engine', 'Basically Available, Soft state, Eventual consistency', 'Binary Atomic Scalable Engine', 'BASE ist ein Fehler – NoSQL nutzt immer ACID'],
        correct: 1,
        explanation: 'BASE ist das Gegenmodell zu ACID: Basically Available (System ist verfügbar, auch bei Teilausfällen), Soft state (Zustand kann sich ändern, auch ohne Eingabe), Eventual consistency (irgendwann konsistent – aber nicht sofort). Typisch für verteilte NoSQL-Systeme, die Verfügbarkeit über sofortige Konsistenz stellen.'
      },
      {
        q: 'Was versteht man unter „Eventual Consistency"?',
        options: ['Das System ist immer sofort konsistent', 'Das System garantiert, dass alle Knoten nach einer gewissen Zeit (ohne neue Updates) denselben Datenzustand haben', 'Das System verliert Daten nach einem Neustart', 'Nur ein Knoten im Cluster speichert die aktuellen Daten'],
        correct: 1,
        explanation: 'Eventual Consistency: Nach einem Update wird der neue Wert mit Verzögerung auf alle Replikate propagiert. Kurzzeitig lesen verschiedene Clients unterschiedliche Versionen (Stale Reads). Beispiel: Instagram-Like erscheint für verschiedene Nutzer kurzzeitig unterschiedlich. Für viele Use Cases (Social Media, Caches) akzeptabel.'
      },
      {
        q: 'Welches NoSQL-Modell passt am besten für einen Produktkatalog mit sehr unterschiedlichen Produktattributen (z. B. Elektronik vs. Kleidung)?',
        options: ['Key-Value-Store', 'Document Store', 'Graph-Datenbank', 'Wide-Column-Store'],
        correct: 1,
        explanation: 'Document Stores (MongoDB, CouchDB) speichern Dokumente als JSON/BSON mit flexiblem Schema – jedes Produkt kann eigene Felder haben. Elektronik hat „Wattzahl", Kleidung hat „Größe". In relationalen DBs wären Null-Felder oder komplexe EAV-Tabellen nötig. Document Stores sind ideal für heterogene Objektstrukturen.'
      },
    ],
    resources: [
      { title: 'MongoDB University (kostenlos)', url: 'https://learn.mongodb.com/' },
      { title: 'Neo4j Graph Academy', url: 'https://graphacademy.neo4j.com/' },
    ]
  },
  {
    id: 'etl',
    title: 'ETL, Datenbereinigung & Data Warehouse',
    icon: 'database',
    summary: 'Extract, Transform, Load – wie aus Rohdaten saubere Information wird.',
    keyPoints: [
      'ETL: Extract (Daten aus Quellen ziehen), Transform (bereinigen, anreichern, umformen), Load (ins Zielsystem laden)',
      'ELT-Variante: erst laden, dann im Zielsystem transformieren (typisch für Cloud Data Warehouses)',
      'Data Warehouse (DWH): zentrale, analyseorientierte Datenhaltung – meist Star- oder Snowflake-Schema',
      'Star-Schema: 1 Faktentabelle + mehrere Dimensionstabellen, denormalisiert für schnelle Aggregate',
      'OLTP vs. OLAP: Online Transaction Processing (operative, viele kleine Schreibvorgänge) vs. Online Analytical Processing (Reporting, große Lesevorgänge)',
      'Datenbereinigung: Duplikate entfernen, Formate vereinheitlichen, Fehlwerte behandeln (löschen, imputieren), Ausreißer prüfen',
      'Data Lineage: Herkunft und Transformation eines Datenflusses dokumentieren',
      'Tools: Talend, Pentaho, Apache NiFi, dbt, Azure Data Factory, AWS Glue',
    ],
    quiz: [
      {
        q: 'Was steht im klassischen ETL für „T"?',
        options: ['Transport', 'Transform', 'Transmission', 'Test'],
        correct: 1,
        explanation: 'ETL = Extract, Transform, Load. Im Transform-Schritt werden Daten bereinigt, normalisiert, angereichert und in das Zielformat überführt.'
      },
      {
        q: 'Welches Schema ist typisch für ein Data Warehouse mit einer großen Faktentabelle und mehreren Dimensionstabellen?',
        options: ['Normalisiertes 3NF-Schema', 'Star-Schema', 'Key-Value-Schema', 'Document-Schema'],
        correct: 1,
        explanation: 'Im Star-Schema steht die Fakttabelle im Zentrum, umringt von denormalisierten Dimensionstabellen. Schnell für Aggregate und Reporting.'
      },
      {
        q: 'Welcher Anwendungsfall passt zu OLAP?',
        options: [
          'Buchung einer Onlinebestellung',
          'Quartalsumsatz-Auswertung nach Region und Produktkategorie',
          'Anmeldung eines Benutzers',
          'Senden einer E-Mail'
        ],
        correct: 1,
        explanation: 'OLAP = analytisch, große Aggregationen über viele Dimensionen. OLTP wäre die einzelne Bestellung, Anmeldung, E-Mail.'
      },
      {
        q: 'Welche Maßnahme gehört NICHT zur Datenbereinigung?',
        options: [
          'Dubletten entfernen',
          'Formate vereinheitlichen (z. B. ISO-Datum)',
          'Fehlende Werte sinnvoll behandeln',
          'Daten verschlüsseln, um sie zu schützen'
        ],
        correct: 3,
        explanation: 'Verschlüsselung ist eine Sicherheitsmaßnahme, keine Bereinigung. Bereinigung adressiert Qualität: Dubletten, Formate, NULLs, Ausreißer, Konsistenzfehler.'
      },
      {
        q: 'Wie unterscheidet sich das Snowflake-Schema vom Star-Schema?',
        options: ['Snowflake hat keine Faktentabelle', 'Snowflake normalisiert die Dimensionstabellen weiter in Subdimensionen; Star-Schema hat denormalisierte flache Dimensionstabellen', 'Im Snowflake-Schema gibt es mehrere Faktentabellen', 'Beide Schemas sind identisch'],
        correct: 1,
        explanation: 'Star-Schema: denormalisierte Dimensionstabellen (schnelle Abfragen, einfacher). Snowflake-Schema: Dimensionen weiter normalisiert (z. B. Dimension „Produkt" → Subdimension „Kategorie" → Subdimension „Abteilung"). Vorteil Snowflake: weniger Redundanz, konsistentere Daten. Nachteil: mehr JOINs, komplexere Abfragen.'
      },
      {
        q: 'Was sind „Slowly Changing Dimensions" (SCD) im Data Warehouse?',
        options: ['Dimensionen, die sich nie ändern', 'Dimensionstabellen, deren Werte sich mit der Zeit ändern und für die eine Historisierungsstrategie benötigt wird', 'Factentabellen mit wenigen Updates', 'SCD sind veraltete Schemas ohne praktische Relevanz'],
        correct: 1,
        explanation: 'SCDs beschreiben, wie historische Änderungen in Dimensionen behandelt werden. Typ 1: überschreiben (kein Verlauf), Typ 2: neue Zeile mit Gültigkeitszeitraum (historisch vollständig), Typ 3: separate Old/New-Spalten (begrenzte Historisierung). Beispiel: Kunden wechseln Adresse – wie wird die alte Adresse aufbewahrt?'
      },
      {
        q: 'Was unterscheidet einen Data Lake von einem Data Lakehouse?',
        options: ['Data Lake speichert nur strukturierte Daten; Data Lakehouse nur unstrukturierte', 'Data Lake: rohe Daten ohne Schema-Enforcement, schlechte Query-Performance; Data Lakehouse: fügt ACID-Transaktionen und Schema-Kontrolle auf dem Data Lake auf (Delta Lake, Iceberg)', 'Data Lakehouse ist ein anderer Name für Data Warehouse', 'Data Lake ist immer günstiger als Data Lakehouse'],
        correct: 1,
        explanation: 'Data Lake: günstiger Object Storage (S3, ADLS) mit beliebigen Datenformaten – keine Struktur erzwungen. Problem: schnell zum „Data Swamp". Data Lakehouse (Databricks Delta Lake, Apache Iceberg): ergänzt den Data Lake um ACID-Transaktionen, Schema-Enforcement, Versionierung – vereint Flexibilität des Lake mit Zuverlässigkeit des Warehouse.'
      },
    ],
    resources: [
      { title: 'dbt – Analytics Engineering', url: 'https://www.getdbt.com/' },
      { title: 'Kimball Group – DWH-Methodik', url: 'https://www.kimballgroup.com/' },
    ]
  },
  {
    id: 'raid',
    title: 'RAID, Backup & Verfügbarkeit',
    icon: 'shield',
    summary: 'RAID-Level, Backup-Strategien, RPO/RTO, Hochverfügbarkeit.',
    keyPoints: [
      'RAID 0 (Striping): Daten verteilt, hohe Performance, KEINE Ausfallsicherheit, Nettokapazität = 100 %',
      'RAID 1 (Mirroring): Spiegelung, hohe Sicherheit, Nettokapazität = 50 %, mind. 2 Platten',
      'RAID 5: Striping mit verteilter Parität, mind. 3 Platten, 1 Platte darf ausfallen. Netto = (n-1)/n',
      'RAID 6: wie 5, aber doppelte Parität (2 Platten dürfen ausfallen). Netto = (n-2)/n',
      'RAID 10 (1+0): Spiegelung + Striping, hohe Performance + Sicherheit, Netto = 50 %',
      'Backup-Strategien: Voll, inkrementell, differenziell. 3-2-1-Regel: 3 Kopien, 2 Medien, 1 offsite',
      'RTO (Recovery Time Objective): max. tolerierbare Wiederherstellungsdauer',
      'RPO (Recovery Point Objective): max. tolerierbarer Datenverlust (Zeitspanne seit letztem Backup)',
      'Hochverfügbarkeit: Cluster, Load Balancing, Failover. Verfügbarkeitsklassen (99,9 % = ca. 8,76 h Downtime/Jahr)',
    ],
    quiz: [
      {
        q: 'In einem RAID 5 mit 5 Festplatten à 1 TB – wie groß ist die nutzbare Kapazität?',
        options: ['1 TB', '4 TB', '5 TB', '3 TB'],
        correct: 1,
        explanation: 'RAID 5: Netto = (n-1) × Plattengröße = (5-1) × 1 TB = 4 TB. Eine Platte wird für Parität benötigt.'
      },
      {
        q: 'Was beschreibt der RPO?',
        options: [
          'Wie schnell ein System wieder läuft',
          'Wie viel Datenverlust tolerierbar ist (Zeitspanne)',
          'Wie viele Backups man braucht',
          'Wie hoch die Verfügbarkeit in Prozent ist'
        ],
        correct: 1,
        explanation: 'RPO = Recovery Point Objective: max. zulässiger Datenverlust, gemessen als Zeit (z. B. „max. 15 Minuten Verlust" → Backup mindestens alle 15 Min.). RTO = Wiederherstellungs-DAUER.'
      },
      {
        q: 'Welche Aussage zur 3-2-1-Backup-Regel ist korrekt?',
        options: [
          '3 Kopien, 2 verschiedene Medien, 1 davon offsite',
          '3 Backups pro Tag auf 2 verschiedenen Servern, 1 Backup pro Monat',
          '3 Personen müssen Zugriff haben, 2 vor Ort, 1 extern',
          '3 RAIDs auf 2 Standorten, 1 in der Cloud'
        ],
        correct: 0,
        explanation: 'Klassische 3-2-1-Regel: 3 Kopien Ihrer Daten, auf 2 verschiedenen Medientypen, davon 1 Kopie an einem anderen Standort (offsite, z. B. Cloud oder Bankschließfach).'
      },
      {
        q: 'Welches RAID-Level bietet hohe Performance UND Ausfallsicherheit, kostet aber 50 % Kapazität?',
        options: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 10'],
        correct: 3,
        explanation: 'RAID 10 (Mirror + Stripe): hohe Performance durch Striping, hohe Sicherheit durch Spiegelung, aber nur 50 % Nettokapazität. Häufig in Datenbanken eingesetzt.'
      },
      {
        q: 'In einem RAID 6 mit 8 Festplatten à 2 TB – wie groß ist die nutzbare Nettokapazität?',
        options: ['6 TB', '10 TB', '12 TB', '16 TB'],
        correct: 2,
        explanation: 'RAID 6: (n-2) Festplatten nutzbar. (8-2) × 2 TB = 6 × 2 TB = 12 TB. RAID 6 benötigt 2 Paritätsfestplatten, erlaubt also den Ausfall von 2 Platten gleichzeitig. Gegenüber RAID 5 (1 Parität) gibt es mehr Ausfallsicherheit, aber 2 Platten gehen verloren.'
      },
      {
        q: 'Welche Backup-Strategie sichert wöchentlich vollständig und täglich nur die Änderungen seit dem LETZTEN Vollbackup?',
        options: ['Vollbackup täglich', 'Inkrementelles Backup', 'Differenzielles Backup', 'Spiegel-Backup'],
        correct: 2,
        explanation: 'Differenzielles Backup: täglich die Änderungen SEIT dem letzten Vollbackup. Wiederherstellung: nur 2 Bänder (Vollbackup + letztes Differenzband). Inkrementelles Backup: täglich nur Änderungen seit dem LETZTEN Backup (Vollbackup oder Inkrement). Wiederherstellung: alle Bänder der Woche nötig – schneller Backup, aber langsamere Wiederherstellung.'
      },
      {
        q: 'Ein Vollbackup dauert 4 Stunden, ein inkrementelles Backup 30 Minuten. Bei täglichem Inkrement und wöchentlichem Vollbackup: Wie lange dauert die Wiederherstellung am Freitag (4. Inkrement nach Vollbackup)?',
        options: ['30 Minuten', '2 Stunden', '4 Stunden + 4 × 30 Minuten = 6 Stunden', '1 Stunde'],
        correct: 2,
        explanation: 'Inkrementelles Restore: Vollbackup (4 h) + Inkrement Mo (30 min) + Di (30 min) + Mi (30 min) + Do (30 min) = 4 h + 2 h = 6 h. Differenzielles Restore am selben Punkt: 4 h + 1 × Do-Band (enthält alles seit Vollbackup). Kompromiss: differenziell ist bei Restore effizienter, bei Backup langsamer.'
      },
    ],
    resources: [
      { title: 'BSI – Backup-Konzepte', url: 'https://www.bsi.bund.de/' },
      { title: 'Veeam Backup Best Practices', url: 'https://www.veeam.com/' },
    ]
  },
  {
    id: 'normalisierung',
    title: 'Normalisierung (1NF–BCNF)',
    icon: 'database',
    summary: 'Funktionale Abhängigkeiten, 1NF, 2NF, 3NF, BCNF – Schritt für Schritt mit Beispielen.',
    keyPoints: [
      'Ziel der Normalisierung: Redundanzen eliminieren, Update-/Lösch-Anomalien verhindern, Datenintegrität sichern',
      '1NF: Alle Attribute atomar (keine Listen/Wiederholungsgruppen), jede Zeile eindeutig identifizierbar',
      '2NF: 1NF + Kein Nicht-Schlüssel-Attribut ist nur von einem Teil des zusammengesetzten Primärschlüssels abhängig (keine partielle Abhängigkeit)',
      '3NF: 2NF + Kein Nicht-Schlüssel-Attribut ist transitiv über ein anderes Nicht-Schlüssel-Attribut abhängig',
      'BCNF (Boyce-Codd-NF): Strenger als 3NF – jeder Determinant einer FD muss ein Superschlüssel sein',
      'Funktionale Abhängigkeit (FD): A → B bedeutet: Wenn zwei Zeilen denselben Wert in A haben, haben sie auch denselben Wert in B',
      'Denormalisierung: bewusste Rücknahme in einem DWH für Performance (Star-Schema)',
    ],
    quiz: [
      {
        q: 'Tabelle: Bestellung(BestellID, ProduktID, ProduktName, Menge). ProduktName hängt nur von ProduktID ab. Gegen welche Normalform verstößt das?',
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        correct: 1,
        explanation: '2NF-Verstoß: Der zusammengesetzte PK ist (BestellID, ProduktID). ProduktName hängt nur von ProduktID ab (partielle Abhängigkeit), nicht vom vollen PK. Lösung: Produkt in eigene Tabelle auslagern: Produkt(ProduktID, ProduktName) und Bestellposition(BestellID, ProduktID, Menge).'
      },
      {
        q: 'Was ist eine transitive Abhängigkeit?',
        options: ['A hängt direkt vom Primärschlüssel ab', 'A → B → C, wobei C transitiv (über B) vom PK abhängt, obwohl B kein Schlüssel ist', 'Mehrere Attribute bilden einen zusammengesetzten Schlüssel', 'Eine zirkuläre Abhängigkeit zwischen zwei Tabellen'],
        correct: 1,
        explanation: 'Transitive Abhängigkeit: PK → X → Y. Beispiel: KundenID → PLZ → Ort. Ort hängt transitiv über PLZ vom KundenID ab. 3NF-Verletzung! Lösung: PLZ und Ort in eigene Tabelle (PLZ, Ort) auslagern.'
      },
      {
        q: 'Eine Tabelle ist in 3NF, aber ein Determinant ist kein Superschlüssel. Welche Normalform wird verletzt?',
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        correct: 3,
        explanation: 'BCNF: Für jede nicht-triviale FD X → Y muss X ein Superschlüssel sein. Die BCNF ist strenger als 3NF und schließt seltene Grenzfälle, die 3NF noch erlaubt, aus. In der Praxis ist 3NF oft ausreichend, da BCNF-Normalisierung manchmal zu Informationsverlust führen kann.'
      },
      {
        q: 'Warum normalisiert man Datenbanken nicht immer bis zur BCNF?',
        options: ['BCNF ist zu schwer zu implementieren', 'Höhere Normalisierung bedeutet mehr JOINs → Performance-Kosten; im DWH wird bewusst denormalisiert (Star-Schema)', 'BCNF ist in SQL nicht umsetzbar', 'Normalisierung gilt nur für NoSQL-Datenbanken'],
        correct: 1,
        explanation: 'Normalisierung reduziert Redundanz, erhöht aber die Anzahl von Tabellen und JOINs. Im OLTP (operative Datenbank) überwiegen die Vorteile. Im OLAP/DWH (Reporting) ist Performance wichtiger: Star-Schema ist denormalisiert – Dimensionstabellen enthalten redundante Daten für schnelle Aggregationen.'
      },
      {
        q: 'In welcher Normalform darf ein Attribut eine kommaseparierte Liste von Werten enthalten?',
        options: ['In keiner – das verletzt bereits die 1NF', 'In der 2NF, wenn der PK einfach ist', 'Nur in der BCNF', 'In der 3NF bei zusammengesetzten Schlüsseln'],
        correct: 0,
        explanation: '1NF verlangt atomare Attributwerte: Pro Zelle genau ein Wert. Kommaseparierte Listen, Arrays oder verschachtelte Strukturen verletzen die 1NF. Lösung: separate Zeilen oder eine Beziehungstabelle. Moderne JSON-Spalten in PostgreSQL/MySQL sind eine pragmatische Ausnahme, technisch aber 1NF-Verletzungen.'
      },
    ],
    resources: [
      { title: 'datenbanken-verstehen.de – Normalformen', url: 'https://www.datenbanken-verstehen.de/datenmodellierung/normalformen/' },
      { title: 'Elektronik-Kompendium – Datenbankdesign', url: 'https://www.elektronik-kompendium.de/' },
    ]
  },
  {
    id: 'sql_ddl',
    title: 'SQL DDL & Schema',
    icon: 'database',
    summary: 'CREATE, ALTER, DROP, Constraints (PK, FK, UNIQUE, NOT NULL, CHECK), Indices – Schema aufbauen und verändern.',
    keyPoints: [
      'DDL = Data Definition Language: Strukturdefinition der Datenbank',
      'CREATE TABLE: Tabelle mit Spalten und Constraints anlegen',
      'PRIMARY KEY: eindeutig + NOT NULL. FOREIGN KEY: Referenzielle Integrität zu anderer Tabelle',
      'UNIQUE: keine Duplikate, NULL erlaubt (außer per NOT NULL). NOT NULL: Wert zwingend',
      'CHECK-Constraint: benutzerdefinierte Bedingung (z. B. CHECK (alter >= 18))',
      'ALTER TABLE: Spalten hinzufügen, entfernen, umbenennen, Constraints ändern',
      'DROP TABLE: Tabelle löschen (Cascade bei Fremdschlüsselreferenzen beachten!)',
      'Index: beschleunigt Leseabfragen, verlangsamt Schreibvorgänge. Auf häufig gefilterte/sortierte Spalten setzen',
    ],
    quiz: [
      {
        q: 'Welches SQL-Statement legt eine Tabelle mit einem Primärschlüssel und einem Fremdschlüssel an?',
        options: [
          'INSERT INTO bestellung (id, kunden_id) VALUES (PK, FK);',
          'CREATE TABLE bestellung (id INT PRIMARY KEY, kunden_id INT, FOREIGN KEY (kunden_id) REFERENCES kunden(id));',
          'ALTER TABLE bestellung ADD PRIMARY KEY (id);',
          'DEFINE TABLE bestellung WITH PK(id) FK(kunden_id)→kunden;'
        ],
        correct: 1,
        explanation: 'CREATE TABLE mit Inline-Constraint (PRIMARY KEY) und Table-Constraint (FOREIGN KEY ... REFERENCES). Der FK stellt referenzielle Integrität sicher: Ein Wert in kunden_id muss als id in der kunden-Tabelle existieren. Bei Verletzung wirft die DB einen Constraint-Fehler.'
      },
      {
        q: 'Was passiert standardmäßig, wenn ein Datensatz in der referenzierten Tabelle gelöscht wird und FK-abhängige Einträge existieren?',
        options: ['Die abhängigen Einträge werden automatisch mitgelöscht (CASCADE)', 'Die Datenbank verweigert das Löschen (RESTRICT/NO ACTION)', 'Nichts – der FK wird ignoriert', 'Der FK-Wert wird auf 0 gesetzt'],
        correct: 1,
        explanation: 'Standardverhalten: RESTRICT – Löschen wird verweigert, solange abhängige Datensätze existieren. Alternativen: ON DELETE CASCADE (abhängige Zeilen mitlöschen), ON DELETE SET NULL (FK auf NULL setzen), ON DELETE SET DEFAULT. Muss beim FK-Definition angegeben werden.'
      },
      {
        q: 'Wann ist ein Index auf einer Spalte besonders sinnvoll?',
        options: ['Auf Spalten, die selten in WHERE oder JOIN verwendet werden', 'Auf Spalten, die häufig in WHERE-Klauseln, JOINs oder ORDER BY vorkommen und hohe Kardinalität haben', 'Auf Tabellen mit weniger als 100 Zeilen', 'Auf jede Spalte standardmäßig'],
        correct: 1,
        explanation: 'Indices beschleunigen Lesezugriffe dramatisch (von O(n) auf O(log n) bei B-Tree-Index). Sinnvoll: häufig gefilterte Spalten (WHERE), JOIN-Spalten, ORDER BY-Spalten, hohe Kardinalität (viele verschiedene Werte). Nachteil: jeder INSERT/UPDATE/DELETE muss auch den Index aktualisieren → schlechter für schreiblastige Tabellen.'
      },
      {
        q: 'Was bewirkt ALTER TABLE kunden ADD COLUMN geburtsdatum DATE;?',
        options: ['Eine neue Tabelle wird angelegt', 'Der bestehenden Tabelle kunden wird eine neue Spalte geburtsdatum vom Typ DATE hinzugefügt', 'Alle Datumswerte in kunden werden geändert', 'Die Tabelle kunden wird gelöscht und neu erstellt'],
        correct: 1,
        explanation: 'ALTER TABLE ... ADD COLUMN fügt eine neue Spalte zur bestehenden Tabelle hinzu, ohne vorhandene Daten zu verändern. Neue Spalten ohne DEFAULT oder NOT NULL haben zunächst den Wert NULL in allen existierenden Zeilen. Mit DEFAULT-Wert wird dieser automatisch gesetzt.'
      },
    ],
    resources: [
      { title: 'PostgreSQL DDL Dokumentation', url: 'https://www.postgresql.org/docs/current/ddl.html' },
      { title: 'datenbanken-verstehen.de – SQL', url: 'https://www.datenbanken-verstehen.de/' },
    ]
  },
  {
    id: 'sql_select',
    title: 'SQL SELECT & WHERE',
    icon: 'database',
    summary: 'Basisabfragen, Filterung, LIKE, IN, BETWEEN, NULL-Behandlung, ORDER BY, LIMIT.',
    keyPoints: [
      'SELECT spalte1, spalte2 FROM tabelle WHERE bedingung ORDER BY spalte LIMIT n;',
      'Vergleichsoperatoren: =, <>, !=, <, >, <=, >=',
      'LIKE für Muster: % (beliebig viele Zeichen), _ (genau ein Zeichen). LIKE \'Müll%\' sucht alles, das mit „Müll" beginnt',
      'IN (Wert1, Wert2, …): Kurzform für mehrere OR-Bedingungen',
      'BETWEEN a AND b: inklusive beider Grenzen',
      'NULL: IS NULL / IS NOT NULL (nie = NULL verwenden!). COALESCE(wert, fallback) für NULL-Ersatz',
      'ORDER BY spalte ASC|DESC: Sortierung. Ohne ORDER BY keine garantierte Reihenfolge!',
      'LIMIT n OFFSET m: nur n Zeilen ausgeben, ab Position m – für Paginierung',
      'DISTINCT: Dubletten in der Ausgabe entfernen',
      'Alias: SELECT vorname AS Vorname – lesbarere Spaltenbenennung',
    ],
    quiz: [
      {
        q: 'Welcher SQL-Ausdruck findet alle Kunden, deren Nachname mit „Mü" beginnt?',
        options: ['WHERE nachname = \'Mü*\'', 'WHERE nachname LIKE \'Mü%\'', 'WHERE nachname CONTAINS \'Mü\'', 'WHERE nachname START \'Mü\''],
        correct: 1,
        explanation: 'LIKE mit Platzhalter %: \'Mü%\' findet „Müller", „Mühlbauer", „Müller-Schmidt". % steht für 0 bis n beliebige Zeichen. _ steht für genau ein Zeichen (\'M_ller\' findet „Müller" aber nicht „Millauer"). LIKE ist case-sensitiv – je nach DBMS unterschiedlich.'
      },
      {
        q: 'Was liefert WHERE plz IS NULL im Gegensatz zu WHERE plz = NULL?',
        options: ['Beide liefern dasselbe Ergebnis', 'IS NULL findet Zeilen mit fehlendem Wert; plz = NULL gibt immer kein Ergebnis zurück', 'IS NULL ist veraltet und sollte nicht genutzt werden', 'plz = NULL ist die korrekte Syntax'],
        correct: 1,
        explanation: 'NULL in SQL ist kein Wert, sondern ein Zustand (unbekannt). Jeder Vergleich mit NULL ergibt NULL (unbekannt), nicht TRUE oder FALSE. Deshalb liefert WHERE plz = NULL keine Zeilen! Korrekt: IS NULL bzw. IS NOT NULL. Merkregel: NULL ≠ NULL ist auch NULL, nicht TRUE.'
      },
      {
        q: 'Welche Abfrage gibt die 5 teuersten Produkte aus der Tabelle produkte (Spalte preis) aus?',
        options: [
          'SELECT * FROM produkte LIMIT 5;',
          'SELECT * FROM produkte ORDER BY preis DESC LIMIT 5;',
          'SELECT TOP 5 FROM produkte;',
          'SELECT * FROM produkte WHERE preis = MAX(preis) LIMIT 5;'
        ],
        correct: 1,
        explanation: 'ORDER BY preis DESC sortiert absteigend (teuerste zuerst), LIMIT 5 nimmt die ersten 5. In SQL Server wäre es SELECT TOP 5, in Oracle FETCH FIRST 5 ROWS ONLY. PostgreSQL und MySQL nutzen LIMIT. Die WHERE MAX()-Variante ist syntaktisch falsch (Aggregatfunktionen nicht in WHERE).'
      },
      {
        q: 'Was macht COALESCE(lieferdatum, \'unbekannt\') in einer SELECT-Abfrage?',
        options: ['Wandelt das Datum in einen String um', 'Gibt den ersten nicht-NULL-Wert zurück – also lieferdatum wenn gesetzt, sonst den String \'unbekannt\'', 'Sortiert NULL-Werte ans Ende', 'Löscht Zeilen mit NULL-Lieferdatum'],
        correct: 1,
        explanation: 'COALESCE(a, b, c, …) gibt den ersten nicht-NULL-Wert in der Liste zurück. Nützlich für NULL-Ersatz in Ausgaben. Verwandt: NULLIF(a, b) gibt NULL zurück wenn a = b (z. B. Division durch Null vermeiden: NULLIF(divisor, 0)).'
      },
      {
        q: 'SELECT DISTINCT abteilung FROM mitarbeiter – was liefert diese Abfrage?',
        options: ['Alle Mitarbeiter sortiert nach Abteilung', 'Jeden Abteilungsnamen genau einmal, ohne Duplikate', 'Nur Abteilungen mit mehr als einem Mitarbeiter', 'Die Anzahl der Abteilungen als Zahl'],
        correct: 1,
        explanation: 'DISTINCT entfernt doppelte Ergebniszeilen aus der Ausgabe. Wenn 5 Mitarbeiter in der „IT"-Abteilung sind, erscheint „IT" nur einmal. Wichtig: DISTINCT wirkt auf die gesamte SELECT-Liste, nicht nur eine Spalte. Für die Anzahl eindeutiger Werte: SELECT COUNT(DISTINCT abteilung).'
      },
    ],
    resources: [
      { title: 'SQLZoo – SELECT Basics', url: 'https://sqlzoo.net/wiki/SELECT_basics' },
      { title: 'sql-und-xml.de – SQL Tutorial', url: 'https://www.sql-und-xml.de/sql-tutorial/' },
    ]
  },
  {
    id: 'sql_joins',
    title: 'SQL JOINs',
    icon: 'database',
    summary: 'INNER JOIN, LEFT/RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, Self-Join – mit Beispielen.',
    keyPoints: [
      'INNER JOIN: Nur Zeilen, die in BEIDEN Tabellen einen Match haben (Schnittmenge)',
      'LEFT JOIN: Alle Zeilen der linken Tabelle + Matches der rechten; rechte Seite NULL wenn kein Match',
      'RIGHT JOIN: Alle Zeilen der rechten Tabelle + Matches der linken; linke Seite NULL wenn kein Match',
      'FULL OUTER JOIN: Alle Zeilen beider Tabellen; NULL auf der jeweils fehlenden Seite',
      'CROSS JOIN: kartesisches Produkt – jede Zeile links × jede Zeile rechts. n × m Ergebniszeilen',
      'Self-Join: Tabelle mit sich selbst verbinden (z. B. Mitarbeiter-Hierarchie: Vorgesetzter ist auch Mitarbeiter)',
      'ON vs. USING vs. NATURAL JOIN: ON für beliebige Bedingung, USING(spalte) wenn Spaltennamen gleich, NATURAL JOIN automatisch auf gleiche Spalten',
    ],
    quiz: [
      {
        q: 'Ein LEFT JOIN zwischen Kunden (links) und Bestellungen (rechts) – was zeigt das Ergebnis?',
        options: ['Nur Kunden, die mindestens eine Bestellung haben', 'Alle Kunden – auch die ohne Bestellung. Spalten aus Bestellungen sind NULL für Kunden ohne Bestellung', 'Alle Bestellungen, auch die ohne Kunden', 'Nur Bestellungen mit vollständigen Kundendaten'],
        correct: 1,
        explanation: 'LEFT JOIN: alle Zeilen der linken Tabelle (Kunden) plus die passenden Zeilen der rechten (Bestellungen). Kunden ohne Bestellung erscheinen mit NULL in den Bestellungsspalten. Typischer Use Case: „Zeige alle Kunden, auch die noch nie bestellt haben" → SELECT k.*, b.bestell_nr FROM kunden k LEFT JOIN bestellungen b ON k.id = b.kunden_id.'
      },
      {
        q: 'Wie funktioniert ein Self-Join? Nennen Sie den klassischen Use Case.',
        options: ['Self-Join verbindet zwei identische Kopien einer Datenbank', 'Eine Tabelle wird mit sich selbst verbunden – klassisch für Hierarchien (z. B. Mitarbeiter mit Vorgesetzen aus derselben Tabelle)', 'Self-Join ist nur für CROSS JOINs erlaubt', 'Self-Join erzeugt immer das kartesische Produkt'],
        correct: 1,
        explanation: 'Beispiel: SELECT m.name AS Mitarbeiter, v.name AS Vorgesetzter FROM mitarbeiter m LEFT JOIN mitarbeiter v ON m.vorgesetzter_id = v.id. Die Tabelle mitarbeiter wird zweimal eingebunden (mit unterschiedlichen Aliasen m und v). Typisch für rekursive Strukturen wie Organigramme oder Produktkategorien.'
      },
      {
        q: 'Tabelle A hat 4 Zeilen, Tabelle B hat 3 Zeilen. Wie viele Zeilen liefert ein CROSS JOIN?',
        options: ['4', '3', '7', '12'],
        correct: 3,
        explanation: 'CROSS JOIN = kartesisches Produkt: 4 × 3 = 12 Zeilen. Jede Zeile von A wird mit jeder Zeile von B kombiniert. In der Praxis selten sinnvoll, nützlich z. B. für Testdaten-Generierung oder wenn alle Kombinationen wirklich gebraucht werden (z. B. Größe × Farbe für ein Produkt).'
      },
      {
        q: 'Was ist der Unterschied zwischen INNER JOIN und FULL OUTER JOIN?',
        options: ['INNER JOIN ist schneller, sonst identisch', 'INNER JOIN: nur Zeilen mit Match; FULL OUTER JOIN: alle Zeilen beider Tabellen, fehlende Seite wird mit NULL aufgefüllt', 'FULL OUTER JOIN gibt immer mehr Zeilen als CROSS JOIN', 'INNER JOIN funktioniert nur mit PRIMARY KEYS'],
        correct: 1,
        explanation: 'INNER JOIN = Schnittmenge (nur Matches). FULL OUTER JOIN = Vereinigung (alle Zeilen beider Tabellen). Nicht alle DBs unterstützen FULL OUTER JOIN direkt (z. B. MySQL: Workaround mit UNION aus LEFT und RIGHT JOIN). In PostgreSQL und SQL Server direkt verfügbar.'
      },
    ],
    resources: [
      { title: 'SQLZoo – JOIN Tutorial', url: 'https://sqlzoo.net/wiki/The_JOIN_operation' },
      { title: 'Visual JOIN – Visuelle Erklärung', url: 'https://joins.spathon.com/' },
    ]
  },
  {
    id: 'sql_aggregation',
    title: 'SQL Aggregation & GROUP BY',
    icon: 'database',
    summary: 'COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING, Subqueries – Daten zusammenfassen.',
    keyPoints: [
      'Aggregatfunktionen: COUNT(*) zählt Zeilen, COUNT(spalte) ignoriert NULLs, SUM, AVG, MIN, MAX',
      'GROUP BY: Zeilen zu Gruppen zusammenfassen. Jede Gruppe ergibt genau eine Ergebniszeile',
      'Regel: Im SELECT dürfen nur GROUP BY-Spalten und Aggregatfunktionen stehen',
      'HAVING: filtert NACH der Gruppierung auf Aggregat-Werten (wie WHERE, aber für Gruppen)',
      'WHERE filtert VOR GROUP BY, HAVING filtert NACH GROUP BY',
      'Subquery (Unterabfrage): SELECT innerhalb eines anderen SELECT. Skalar, Spalte, Tabelle oder korreliert',
      'WITH (CTE – Common Table Expression): benannte temporäre Ergebnismenge, erhöht Lesbarkeit',
    ],
    quiz: [
      {
        q: 'Was gibt SELECT COUNT(*) vs. SELECT COUNT(email) FROM kunden zurück, wenn 10 Kunden existieren, 2 davon ohne E-Mail?',
        options: ['Beide geben 10 zurück', 'COUNT(*) = 10, COUNT(email) = 8', 'COUNT(*) = 8, COUNT(email) = 10', 'Beide geben 8 zurück'],
        correct: 1,
        explanation: 'COUNT(*) zählt alle Zeilen unabhängig von NULL-Werten = 10. COUNT(spalte) ignoriert NULL-Werte und zählt nur Zeilen mit tatsächlichem Wert = 8. Für die Anzahl eindeutiger E-Mails: COUNT(DISTINCT email). Wichtig für die Prüfung!'
      },
      {
        q: 'Welche Abfrage zählt die Anzahl Bestellungen je Kunde und zeigt nur Kunden mit mehr als 3 Bestellungen?',
        options: [
          'SELECT kunden_id, COUNT(*) FROM bestellungen WHERE COUNT(*) > 3 GROUP BY kunden_id;',
          'SELECT kunden_id, COUNT(*) AS anzahl FROM bestellungen GROUP BY kunden_id HAVING COUNT(*) > 3;',
          'SELECT kunden_id FROM bestellungen GROUP BY kunden_id WHERE anzahl > 3;',
          'SELECT kunden_id, SUM(*) FROM bestellungen HAVING SUM(*) > 3;'
        ],
        correct: 1,
        explanation: 'HAVING filtert nach der Gruppierung auf Aggregatwerten. WHERE darf keine Aggregatfunktionen enthalten (zu früh im Verarbeitungsablauf). Merksatz: WHERE vor GROUP BY = Zeilen filtern; HAVING nach GROUP BY = Gruppen filtern.'
      },
      {
        q: 'Was ist eine Subquery (Unterabfrage)?',
        options: ['Eine zweite Datenbankverbindung', 'Ein SELECT-Statement, das innerhalb eines anderen SQL-Statements steht und dessen Ergebnis verwendet wird', 'Eine Ansicht (View) auf eine Tabelle', 'Ein gespeichertes Verfahren (Stored Procedure)'],
        correct: 1,
        explanation: 'Subqueries können im WHERE (skalare Subquery: liefert einen Wert), im FROM (Derived Table: liefert eine Tabelle) oder im SELECT stehen. Beispiel: SELECT name FROM kunden WHERE id IN (SELECT kunden_id FROM bestellungen WHERE betrag > 1000). CTEs (WITH-Klausel) sind oft lesbarer als verschachtelte Subqueries.'
      },
      {
        q: 'SELECT abteilung, AVG(gehalt) FROM mitarbeiter GROUP BY abteilung – was zeigt diese Abfrage?',
        options: ['Das Gesamtgehalt aller Mitarbeiter', 'Den Durchschnittslohn je Abteilung', 'Die Anzahl der Mitarbeiter je Abteilung', 'Den höchsten Lohn in der Firma'],
        correct: 1,
        explanation: 'GROUP BY abteilung fasst alle Zeilen mit gleichem Abteilungswert zusammen. AVG(gehalt) berechnet den Durchschnitt innerhalb jeder Gruppe. Ergebnis: eine Zeile pro Abteilung mit dem jeweiligen Durchschnittsgehalt. Für Vattenfall-Praxis: durchschnittlicher Verbrauch je Zählertyp, Umsatz je Region.'
      },
      {
        q: 'Was ist der Vorteil einer CTE (Common Table Expression) mit der WITH-Klausel?',
        options: ['CTEs sind schneller als alle anderen SQL-Konstrukte', 'CTEs benennen komplexe Subqueries, machen sie einmal lesbar und wiederverwendbar im selben Statement', 'CTEs erstellen permanente Tabellen in der Datenbank', 'CTEs ersetzen GROUP BY vollständig'],
        correct: 1,
        explanation: 'WITH cte_name AS (SELECT ...) SELECT * FROM cte_name WHERE ... – die CTE definiert eine benannte temporäre Ergebnismenge. Vorteile: bessere Lesbarkeit, Wiederverwendung im Statement, Rekursion möglich (Hierarchien). Keine Dauerspeicherung – nur im Kontext der Abfrage sichtbar.'
      },
    ],
    resources: [
      { title: 'SQLZoo – SUM und COUNT', url: 'https://sqlzoo.net/wiki/SUM_and_COUNT' },
      { title: 'Mode Analytics – SQL Aggregations', url: 'https://mode.com/sql-tutorial/sql-aggregate-functions/' },
    ]
  },
  {
    id: 'datenschutz_daten',
    title: 'Anonymisierung & Pseudonymisierung',
    icon: 'shield',
    summary: 'Techniken zum Datenschutz: k-Anonymität, Pseudonymisierung, Anonymisierung, Privacy-Enhancing Technologies.',
    keyPoints: [
      'Personenbezogene Daten (PBD): alle Infos, die eine natürliche Person direkt oder indirekt identifizieren',
      'Anonymisierung: Daten so verändern, dass Rückschluss auf Personen unmöglich ist → DSGVO gilt nicht mehr. Irreversibel',
      'Pseudonymisierung (Art. 4 Nr. 5 DSGVO): Zuordnung nur noch mit Zusatzinformation möglich. Reversibel → DSGVO gilt weiterhin, aber reduziertes Risiko',
      'k-Anonymität: jede Datenkombination kommt mindestens k-mal vor → Einzelne nicht identifizierbar. Beispiel k=3: mind. 3 Personen teilen dieselben Quasi-Identifier-Werte',
      'l-Diversität und t-Closeness: Erweiterungen der k-Anonymität für bessere Datenschutzgarantien',
      'Differential Privacy: statistisches Rauschen, das garantiert, dass Abfragen keine Einzelpersonen enthüllen (Google, Apple in der Praxis)',
      'Data Masking: Produktionsdaten für Test-/Entwicklungsumgebungen maskieren (z. B. Kunden-IBANs ersetzen)',
    ],
    quiz: [
      {
        q: 'Was ist der wesentliche Unterschied zwischen Anonymisierung und Pseudonymisierung?',
        options: ['Beide bedeuten dasselbe', 'Anonymisierung ist irreversibel und unterliegt nicht der DSGVO; Pseudonymisierung ist reversibel und unterliegt weiterhin der DSGVO', 'Pseudonymisierung ist sicherer als Anonymisierung', 'Anonymisierung gilt nur für medizinische Daten'],
        correct: 1,
        explanation: 'Anonymisierung: Es ist unmöglich (mit verhältnismäßigem Aufwand), die Person wiederzuerkennen → DSGVO greift nicht. Pseudonymisierung: Mit der getrennten Zuordnungstabelle (Schlüssel) ist Re-Identifikation möglich → DSGVO gilt. In der Praxis ist echte Anonymisierung schwer; oft werden Daten nur pseudonymisiert und fälschlich als anonym bezeichnet.'
      },
      {
        q: 'Was bedeutet k-Anonymität = 5 in einem Datensatz?',
        options: ['Jede Person hat mindestens 5 Attribute', 'Jede Kombination von Quasi-Identifikatoren tritt mindestens 5-mal im Datensatz auf, sodass eine Person unter mindestens 5 Kandidaten versteckt ist', 'Der Datensatz darf nur 5 Personen enthalten', 'Es sind 5 verschiedene Anonymisierungsmethoden angewendet worden'],
        correct: 1,
        explanation: 'k-Anonymität schützt vor Identifizierung durch Quasi-Identifier (z. B. PLZ + Alter + Geschlecht). Wenn k=5: jede Merkmalskombination erscheint mindestens 5-mal → Angreifer kann eine Person höchstens auf 1 aus 5 eingrenzen. Limitation: homogene Gruppen können trotzdem sensitiv sein (→ l-Diversität als Erweiterung).'
      },
      {
        q: 'Warum reicht bloßes Entfernen des Namens oft NICHT für echte Anonymisierung?',
        options: ['Weil der Name nicht personenbezogen ist', 'Weil andere Attribute (Quasi-Identifier wie PLZ, Alter, Beruf) kombiniert zur Re-Identifikation ausreichen können', 'Weil DSGVO das Entfernen von Namen verbietet', 'Weil Datenbanken gelöschte Felder intern behalten'],
        correct: 1,
        explanation: 'Das Latanya-Sweeney-Experiment zeigte: 87 % der US-Bürger lassen sich allein durch PLZ, Geburtsdatum und Geschlecht eindeutig identifizieren. Quasi-Identifier sind keine direkt identifizierenden Merkmale, aber in Kombination sehr mächtig. Echter Datenschutz erfordert k-Anonymität oder generalization/suppression.'
      },
      {
        q: 'Was ist Data Masking und wofür wird es eingesetzt?',
        options: ['Eine Verschlüsselungstechnik für Produktionsdatenbanken', 'Ersetzen sensitiver Produktionsdaten durch realistische, aber fiktive Werte für Test-/Entwicklungsumgebungen', 'Eine Form der Datenkomprimierung', 'Das Verstecken von Metadaten in Bilddateien'],
        correct: 1,
        explanation: 'Data Masking: Produktionsdaten (z. B. echte IBANs, Namen, Sozialversicherungsnummern) werden durch plausible, aber fiktive Werte ersetzt. Entwickler und Tester erhalten realistische Daten ohne Datenschutzrisiko. Statisches Masking: einmalig transformiert. Dynamisches Masking: bei Abfrage on-the-fly maskiert. Bei Vattenfall: Verbrauchsdaten mit echtem Muster, aber fiktiven Kundennummern.'
      },
    ],
    resources: [
      { title: 'BfDI – Pseudonymisierung und Anonymisierung', url: 'https://www.bfdi.bund.de/' },
      { title: 'BSI – Datenschutz durch Technikgestaltung', url: 'https://www.bsi.bund.de/' },
    ]
  },
  {
    id: 'statistik',
    title: 'Statistik-Grundlagen & Datenvisualisierung',
    icon: 'chart',
    summary: 'Mittelwert, Median, Modus, Standardabweichung, Korrelation, Verteilungen, Diagrammtypen.',
    keyPoints: [
      'Mittelwert (arithmetisches Mittel): Summe aller Werte ÷ Anzahl. Empfindlich gegenüber Ausreißern',
      'Median: mittlerer Wert bei sortierter Reihe. Robuster gegenüber Ausreißern (z. B. Median-Einkommen sinnvoller als Mittelwert)',
      'Modus: häufigster Wert in einer Datenmenge',
      'Standardabweichung (σ): durchschnittliche Abweichung der Werte vom Mittelwert – misst Streuung',
      'Korrelation ≠ Kausalität! Zwei Variablen können korrelieren, ohne sich gegenseitig zu verursachen',
      'Pearson-Korrelationskoeffizient r: -1 (perfekt negativ) bis +1 (perfekt positiv). 0 = keine lineare Korrelation',
      'Normalverteilung (Gaußverteilung): glockenförmig, symmetrisch um Mittelwert. Empirische Regel: 68-95-99,7 %',
      'Diagrammtypen: Säulen/Balken (Vergleiche), Linien (Zeitverläufe), Kreis/Torte (Anteile, max. 6 Segmente), Streudiagramm (Korrelationen), Heatmap (Matrix-Werte), Histogramm (Häufigkeitsverteilung)',
    ],
    quiz: [
      {
        q: 'Datensatz: 2, 4, 4, 4, 6, 8, 100. Welcher Lageparameter ist am wenigsten beeinflusst vom Ausreißer 100?',
        options: ['Mittelwert', 'Modus', 'Standardabweichung', 'Keine – alle sind gleich beeinflusst'],
        correct: 1,
        explanation: 'Modus = 4 (tritt 3× auf) – völlig unberührt vom Ausreißer 100. Median = 4 (mittlerer von 7 Werten) – kaum verändert. Mittelwert = (2+4+4+4+6+8+100)/7 ≈ 18,3 – stark verzerrt! Die Standardabweichung wird ebenfalls erheblich vergrößert. Mediane und Modi sind robuster gegen Ausreißer.'
      },
      {
        q: 'Was bedeutet es, wenn zwei Variablen korrelieren?',
        options: ['Eine Variable verursacht zwingend die andere', 'Es besteht ein statistischer Zusammenhang, aber keine notwendige Kausalbeziehung', 'Beide Variablen sind identisch', 'Eine Variable hat keinen Einfluss auf die andere'],
        correct: 1,
        explanation: 'Klassisches Beispiel: Eisverkauf und Ertrinkungen korrelieren positiv (beide steigen im Sommer). Ursache: Temperatur als Confounding Variable. Eiseis ist keine Ertrinkungs-Ursache. Kausalität erfordert: Korrelation + zeitliche Abfolge + kein plausibler Dritter Faktor + möglicher Mechanismus.'
      },
      {
        q: 'Welcher Diagrammtyp eignet sich am besten, um den Jahresumsatz über 12 Monate darzustellen?',
        options: ['Kreisdiagramm', 'Histogramm', 'Liniendiagramm', 'Streudiagramm'],
        correct: 2,
        explanation: 'Liniendiagramm: ideal für Zeitverläufe (kontinuierliche Veränderung über Zeit). Kreisdiagramm: Anteile am Ganzen (keine Zeit). Histogramm: Häufigkeitsverteilung einer einzelnen Variablen. Streudiagramm: Zusammenhang zweier quantitativer Variablen. Balkendiagramm: Vergleiche kategorischer Werte ohne Zeitbezug.'
      },
      {
        q: 'Was beschreibt die Standardabweichung?',
        options: ['Den häufigsten Wert in einer Verteilung', 'Die durchschnittliche Abweichung der einzelnen Werte vom Mittelwert – ein Maß für die Streuung der Daten', 'Den Unterschied zwischen Maximum und Minimum', 'Die Steigung einer Regressionsgeraden'],
        correct: 1,
        explanation: 'Standardabweichung σ: kleines σ = Werte liegen nah am Mittelwert (homogen). Großes σ = breite Streuung. Bei der Normalverteilung: 68 % aller Werte liegen im Bereich [μ-σ, μ+σ], 95 % in [μ-2σ, μ+2σ], 99,7 % in [μ-3σ, μ+3σ]. Relevant für Six Sigma: Prozess-Streuung als Qualitätskennzahl.'
      },
      {
        q: 'Wann sollte KEIN Kreisdiagramm (Tortendiagramm) verwendet werden?',
        options: ['Wenn Anteile dargestellt werden sollen', 'Wenn mehr als 5-6 Segmente vorhanden sind oder sehr ähnliche Anteile verglichen werden', 'Wenn nur 2 Kategorien vorhanden sind', 'Kreisdiagramme sind immer geeignet'],
        correct: 1,
        explanation: 'Kreisdiagramme scheitern bei: Zu vielen Segmenten (kognitive Überlastung), ähnlichen Prozentwerten (Menschen schätzen Winkel schlecht), negativen Werten (unmöglich), Zeitreihen. Besser dann: gestapeltes Balkendiagramm (Anteile über Zeit), einfaches Balkendiagramm (Größenvergleich). Faustregel: max. 5-6 Segmente, deutliche Größenunterschiede.'
      },
    ],
    resources: [
      { title: 'Statistik erklärt – Deskriptive Statistik', url: 'https://statistik-erklaert.de/' },
      { title: 'Datawrapper – Diagrammtypen Übersicht', url: 'https://www.datawrapper.de/' },
    ]
  },
];
