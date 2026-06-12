export const AP1_TOPICS = [
  {
    id: 'projekt',
    title: 'Projektplanung & Projektmanagement',
    icon: 'briefcase',
    summary: 'Projekte initiieren, planen und steuern – inkl. Wasserfall vs. Scrum, SMART, Netzplan, Gantt.',
    keyPoints: [
      'Projektmerkmale: Einmaligkeit, Zielvorgabe, zeitlich begrenzt, Ressourcenbeschränkung, Komplexität, Risiko',
      'SMART-Prinzip: Spezifisch, Messbar, Attraktiv/Akzeptiert, Realistisch, Terminiert',
      'Vorgehensmodelle: Wasserfallmodell (linear, dokumentenlastig), Scrum (iterativ, Sprints, Backlog, Daily, Review, Retrospektive)',
      'Rollen in Scrum: Product Owner, Scrum Master, Entwicklungsteam',
      'Planungstechniken: Projektstrukturplan (PSP), Netzplantechnik (FAZ, FEZ, SAZ, SEZ, GP, FP, kritischer Pfad), Gantt-Diagramm',
      'Teamphasen nach Tuckman: Forming, Storming, Norming, Performing, Adjourning',
      'Stakeholderanalyse: Macht-Interesse-Matrix',
    ],
    quiz: [
      {
        q: 'Bei einem Netzplan wurden für eine Aktivität FAZ=5, FEZ=10, SAZ=8 und SEZ=13 ermittelt. Wie hoch ist die Gesamtpufferzeit (GP)?',
        options: ['0 Tage', '3 Tage', '5 Tage', '8 Tage'],
        correct: 1,
        explanation: 'Gesamtpuffer GP = SAZ - FAZ = 8 - 5 = 3 Tage (oder identisch SEZ - FEZ = 13 - 10 = 3). Aktivitäten mit GP=0 liegen auf dem kritischen Pfad.'
      },
      {
        q: 'Welches Element ist im Scrum-Framework KEINE offizielle Rolle?',
        options: ['Product Owner', 'Scrum Master', 'Projektleiter', 'Entwicklungsteam'],
        correct: 2,
        explanation: 'Scrum kennt nur drei Rollen: Product Owner, Scrum Master und Entwicklungsteam. Den klassischen Projektleiter gibt es bewusst nicht – seine Aufgaben sind auf die drei Rollen verteilt.'
      },
      {
        q: 'Welches Ziel verstößt am deutlichsten gegen das SMART-Prinzip?',
        options: [
          'Bis 31.12. das Ticketaufkommen um 20 % reduzieren',
          'Die IT verbessern',
          'Bis Ende Q2 zwei neue Backupserver in Betrieb nehmen',
          'Bis 30.06. alle 50 Clients auf Windows 11 migrieren'
        ],
        correct: 1,
        explanation: '„Die IT verbessern" ist weder spezifisch, messbar noch terminiert. Es fehlen konkrete Kennzahlen und ein Endtermin.'
      },
      {
        q: 'Welche Phase folgt in Tuckmans Teamentwicklungsmodell direkt nach „Storming"?',
        options: ['Forming', 'Performing', 'Norming', 'Adjourning'],
        correct: 2,
        explanation: 'Reihenfolge: Forming → Storming → Norming → Performing → Adjourning. In der Norming-Phase entstehen Regeln und Vertrauen.'
      },
      {
        q: 'Worin liegt der zentrale Unterschied zwischen Wasserfallmodell und Scrum?',
        options: [
          'Wasserfall ist agil, Scrum ist klassisch',
          'Wasserfall arbeitet sequenziell mit fester Phasenfolge, Scrum iterativ in Sprints',
          'Wasserfall braucht keine Anforderungsanalyse',
          'In Scrum gibt es keine Tests'
        ],
        correct: 1,
        explanation: 'Wasserfall durchläuft Phasen (Analyse, Entwurf, Implementierung, Test, Betrieb) genau einmal in fester Reihenfolge. Scrum liefert in 1- bis 4-wöchigen Sprints inkrementell ein potenziell auslieferbares Produkt.'
      },
      {
        q: 'Das „Magische Dreieck" im Projektmanagement beschreibt den Zielkonflikt zwischen welchen drei Größen?',
        options: ['Zeit, Kosten, Qualität', 'Mensch, Maschine, Methode', 'Scope, Sprint, Stakeholder', 'ROI, TCO, Amortisation'],
        correct: 0,
        explanation: 'Das Magische Dreieck (auch „Teufelsquadrat" in erweiterter Form) zeigt: Änderst du eine Größe, wirkt das auf die anderen. Mehr Qualität in weniger Zeit kostet mehr. Diese Zielkonflikte müssen Projektleitende aktiv managen und mit dem Auftraggeber kommunizieren.'
      },
      {
        q: 'In einer Stakeholder-Analyse hat eine Person hohen Einfluss, aber geringes Interesse am Projekt. Welche Strategie empfiehlt die Macht-Interesse-Matrix?',
        options: ['Intensiv einbinden und täglich informieren', 'Zufriedenstellen – regelmäßig informieren, aber nicht überfordern', 'Beobachten – minimaler Aufwand', 'Sofort eskalieren'],
        correct: 1,
        explanation: 'Macht-Interesse-Matrix: Hohe Macht + geringes Interesse → „Zufriedenstellen" (Keep Satisfied). Hohe Macht + hohes Interesse → „Intensiv einbinden". Geringes Interesse + geringe Macht → „Beobachten". Die Matrix hilft, Kommunikationsaufwand gezielt einzusetzen.'
      },
      {
        q: 'Was ist ein Meilenstein in der Projektplanung?',
        options: ['Eine Ressource, die für das Projekt benötigt wird', 'Ein terminierbares Ereignis ohne Dauer, das einen wichtigen Projektfortschritt markiert', 'Ein Gantt-Balken mit einer Woche Dauer', 'Ein kritischer Pfad im Netzplan'],
        correct: 1,
        explanation: 'Meilensteine sind Ereignisse mit Dauer null – sie markieren das Erreichen eines wichtigen Zustands (z. B. „Konzept abgenommen", „Testphase gestartet"). Sie dienen als Kontrollpunkte im Projektverlauf und ermöglichen Go/No-Go-Entscheidungen.'
      },
    ],
    resources: [
      { title: 'IT-Berufe-Podcast – Projektmanagement-Episoden', url: 'https://it-berufe-podcast.de/' },
      { title: 'Stefan Macke: Mögliche Themen AP1', url: 'https://it-berufe-podcast.de/vorbereitung-auf-die-ihk-abschlusspruefung-der-it-berufe/' },
      { title: 'Scrum Guide (offiziell, deutsch)', url: 'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-German.pdf' },
    ]
  },
  {
    id: 'wirtschaft',
    title: 'Wirtschaftlichkeit & Kostenanalyse',
    icon: 'chart',
    summary: 'Nutzwertanalyse, Make-or-Buy, TCO, Miete/Leasing/Kauf, Amortisation, ROI.',
    keyPoints: [
      'Nutzwertanalyse: Kriterien gewichten (Summe 100 %), bewerten (z. B. 1–10), Nutzwerte = Gewicht × Bewertung, Alternative mit höchstem Gesamtnutzwert wählen',
      'Make-or-Buy: Selbst entwickeln vs. einkaufen – Kosten, Know-how, Zeit, Risiko',
      'TCO (Total Cost of Ownership): einmalige + laufende Kosten über die gesamte Nutzungsdauer (Anschaffung, Strom, Wartung, Lizenzen, Personal)',
      'Miete: variabel, kurzfristig, kein Eigentum. Leasing: feste Laufzeit, oft mit Übernahmeoption. Kauf: Eigentum, Abschreibung über Nutzungsdauer (AfA)',
      'Amortisationsdauer = Investition ÷ jährlicher Rückfluss',
      'ROI (%) = Gewinn ÷ Kapitaleinsatz × 100',
      'Wirtschaftlichkeitsbetrachtung: Kosten-Nutzen-Vergleich (quantitativ & qualitativ)',
    ],
    quiz: [
      {
        q: 'Ein Server kostet 8.000 € und spart pro Jahr 2.000 € Betriebskosten. Wie hoch ist die Amortisationsdauer?',
        options: ['2 Jahre', '4 Jahre', '6 Jahre', '8 Jahre'],
        correct: 1,
        explanation: 'Amortisationsdauer = Anschaffungskosten ÷ jährlicher Rückfluss = 8.000 € ÷ 2.000 €/Jahr = 4 Jahre.'
      },
      {
        q: 'Welche Aussage zur Nutzwertanalyse ist FALSCH?',
        options: [
          'Die Summe der Gewichtungen aller Kriterien sollte 100 % ergeben',
          'Es können auch nicht-monetäre Kriterien einbezogen werden',
          'Die Alternative mit dem höchsten Nutzwert wird empfohlen',
          'Die Bewertung pro Kriterium ist immer objektiv und nicht beeinflussbar'
        ],
        correct: 3,
        explanation: 'Die Bewertung erfolgt durch Menschen und ist zwangsläufig subjektiv. Genau deshalb sollten klare Bewertungsskalen und mehrere Bewerter genutzt werden.'
      },
      {
        q: 'Was zählt NICHT zu den TCO eines Notebooks?',
        options: ['Anschaffungspreis', 'Stromkosten', 'Lizenzkosten der Software', 'Marktwert eines Konkurrenzprodukts'],
        correct: 3,
        explanation: 'TCO umfasst alle Kosten, die während Anschaffung UND Nutzung des konkreten Geräts entstehen. Preise von Konkurrenzprodukten gehören nicht dazu.'
      },
      {
        q: 'Eine Mitarbeiterin benötigt für 3 Monate ein leistungsfähiges Notebook für ein Sonderprojekt. Welche Beschaffungsform ist meist am wirtschaftlichsten?',
        options: ['Kauf', 'Leasing mit 36 Monaten Laufzeit', 'Miete', 'Selbstbau'],
        correct: 2,
        explanation: 'Bei kurzer, klar begrenzter Nutzungsdauer ist Miete sinnvoll. Leasing hat feste Laufzeiten (oft 24–48 Monate), Kauf bindet Kapital langfristig.'
      },
      {
        q: 'Ein Server kostet 12.000 € und hat eine Nutzungsdauer von 4 Jahren. Wie hoch ist die jährliche lineare Abschreibung (AfA)?',
        options: ['1.500 €', '2.000 €', '3.000 €', '4.000 €'],
        correct: 2,
        explanation: 'Lineare AfA = Anschaffungskosten ÷ Nutzungsdauer = 12.000 € ÷ 4 Jahre = 3.000 €/Jahr. Der Buchwert sinkt jedes Jahr um den gleichen Betrag. Degressive AfA wäre im ersten Jahr höher, nimmt dann ab (in Deutschland für Neuanschaffungen temporär wieder eingeführt).'
      },
      {
        q: 'Ein Unternehmen investiert 50.000 € in ein System. Im ersten Jahr erzielt es dadurch 15.000 € Mehrgewinn. Wie hoch ist der ROI für dieses Jahr?',
        options: ['15 %', '30 %', '33 %', '50 %'],
        correct: 1,
        explanation: 'ROI = Gewinn ÷ Kapitaleinsatz × 100 = 15.000 € ÷ 50.000 € × 100 = 30 %. Der ROI zeigt, wie effizient eingesetztes Kapital Ertrag erwirtschaftet. Ein ROI > 0 bedeutet Gewinn; wann er „gut" ist, hängt von Alternativanlagen ab.'
      },
    ],
    resources: [
      { title: 'IHK – Wirtschaftslehre Lernunterlagen', url: 'https://www.ihk.de/' },
      { title: 'Prüfungstrainer.de – Wirtschaftlichkeit', url: 'https://www.pruefungstrainer.de/' },
    ]
  },
  {
    id: 'hardware',
    title: 'Hardware & IT-Systeme',
    icon: 'settings',
    summary: 'CPU, RAM, Speicher (HDD/SSD), BIOS/UEFI, Filesysteme, Peripherie, Berechnungen.',
    keyPoints: [
      'CPU: Taktrate (GHz), Kerne, Threads, Cache (L1/L2/L3), Architektur (x86, ARM)',
      'RAM: Arbeitsspeicher, flüchtig (volatil). DDR4 vs. DDR5',
      'Datenspeicher: HDD (mechanisch, günstig, langsam) vs. SSD (Flash, schnell, robust, lautlos). SSD-Schnittstellen: SATA, NVMe (PCIe)',
      'BIOS vs. UEFI: UEFI unterstützt >2 TB Festplatten (GPT), Secure Boot, schnelleren Boot, grafische Oberfläche',
      'Dateisysteme: FAT32 (max. 4 GB Datei), NTFS (Windows, Rechte, Journaling), APFS (macOS), ext4 (Linux)',
      'Übertragungsraten: 1 Byte = 8 Bit. 1 KiB = 1024 Byte (binär) vs. 1 kB = 1000 Byte (dezimal)',
      'Barrierefreier Zugriff: Screenreader, Tastatursteuerung, Kontrast, Schriftgröße, BFSG (seit Juni 2025)',
    ],
    quiz: [
      {
        q: 'Eine Datei ist 750 MB groß und soll über eine 100 Mbit/s-Leitung übertragen werden. Wie lange dauert die Übertragung (näherungsweise, ohne Overhead)?',
        options: ['ca. 7,5 Sekunden', 'ca. 60 Sekunden', 'ca. 8 Minuten', 'ca. 10 Minuten'],
        correct: 1,
        explanation: '750 MB = 750 × 8 Mbit = 6.000 Mbit. 6.000 Mbit ÷ 100 Mbit/s = 60 Sekunden. Wichtig: MB (Byte) in Mbit (Bit) umrechnen!'
      },
      {
        q: 'Welcher Vorteil spricht für UEFI gegenüber dem klassischen BIOS?',
        options: [
          'UEFI unterstützt Festplatten größer 2 TB durch GPT',
          'UEFI funktioniert nur mit 32-Bit-Systemen',
          'UEFI lässt keine grafische Benutzeroberfläche zu',
          'UEFI verzichtet auf Sicherheitsfunktionen wie Secure Boot'
        ],
        correct: 0,
        explanation: 'UEFI nutzt die GPT-Partitionstabelle und unterstützt damit Festplatten >2 TB sowie mehr als 4 primäre Partitionen. Außerdem: Secure Boot, schnellerer Start, Maus-/Grafik-Oberfläche.'
      },
      {
        q: 'Sie sollen eine 6 GB große Videodatei auf einen USB-Stick mit FAT32 kopieren. Was passiert?',
        options: [
          'Kein Problem, FAT32 hat keine Größenbegrenzung',
          'Der Kopiervorgang schlägt fehl, da FAT32 max. 4 GB pro Datei erlaubt',
          'Die Datei wird automatisch in 4-GB-Blöcke geteilt',
          'FAT32 komprimiert die Datei auf 4 GB'
        ],
        correct: 1,
        explanation: 'FAT32 hat eine maximale Einzeldateigröße von 4 GB (genauer: 4 GiB − 1 Byte). Für größere Dateien wird NTFS oder exFAT benötigt.'
      },
      {
        q: 'Welche Eigenschaft trifft auf eine SSD im Vergleich zu einer HDD NICHT zu?',
        options: ['Geräuschlos', 'Höhere mechanische Robustheit', 'Schnellere Zugriffszeiten', 'Längere Lebensdauer bei sehr vielen Schreibvorgängen'],
        correct: 3,
        explanation: 'SSDs haben eine begrenzte Anzahl an Schreibzyklen (P/E-Cycles). Bei massiv schreibintensiven Workloads (z. B. Datenbank-Logs) sind sie HDDs nicht zwingend überlegen – außer man wählt Enterprise-SSDs.'
      },
      {
        q: 'Was leistet ECC-RAM im Vergleich zu normalem RAM?',
        options: ['ECC-RAM ist doppelt so schnell', 'ECC-RAM erkennt und korrigiert automatisch einzelne Bitfehler', 'ECC-RAM benötigt keinen Kühler', 'ECC-RAM ist ausschließlich für Gaming-PCs geeignet'],
        correct: 1,
        explanation: 'ECC (Error-Correcting Code) RAM kann 1-Bit-Fehler automatisch korrigieren und 2-Bit-Fehler erkennen. Das ist kritisch in Servern und Workstations, wo Datenkonsistenz wichtiger ist als Kosten. Consumer-PCs nutzen meist kein ECC, da es teurer und minimal langsamer ist.'
      },
      {
        q: 'Welcher Hauptvorteil zeichnet eine NVMe-SSD gegenüber einer SATA-SSD aus?',
        options: ['NVMe hat höhere Stromaufnahme', 'NVMe nutzt den PCIe-Bus und erreicht dadurch deutlich höhere Transferraten', 'NVMe-SSDs sind günstiger als SATA-SSDs', 'SATA-SSDs sind schneller bei sequenziellen Lesevorgängen'],
        correct: 1,
        explanation: 'SATA ist auf ~600 MB/s begrenzt (durch das SATA-III-Protokoll). NVMe über PCIe 4.0 erreicht 5.000–7.000 MB/s. Der Grund: NVMe kommuniziert direkt über PCIe, ohne den AHCI-Protokolloverhead des SATA-Stacks. Für Arbeitsstationen und Server ist NVMe heute Standard.'
      },
      {
        q: 'Was versteht man unter Hyper-Threading (Intel) bzw. SMT (AMD)?',
        options: ['Eine Übertaktungstechnologie für die CPU', 'Jeder physische Kern erscheint dem Betriebssystem als zwei logische Kerne', 'Eine spezielle Kühltechnik für Prozessoren', 'Die Technik, mehrere CPUs in einer Buchse zu betreiben'],
        correct: 1,
        explanation: 'Hyper-Threading/SMT (Simultaneous Multi-Threading) lässt einen physischen Kern zwei Threads gleichzeitig abarbeiten, indem ungenutzte Ausführungseinheiten genutzt werden. Gewinne: 10–30 % mehr Durchsatz bei parallelen Workloads. Das OS sieht z. B. einen 8-Kern-CPU mit HT als 16 logische Kerne.'
      },
      {
        q: 'Welche Schnittstelle überträgt sowohl Bild/Ton als auch Daten und Strom über ein einziges Kabel (bis 40 Gbit/s)?',
        options: ['HDMI 2.1', 'DisplayPort 1.4', 'Thunderbolt 4 / USB4', 'USB 2.0'],
        correct: 2,
        explanation: 'Thunderbolt 4 (und USB4 Gen 3x2) kombinieren PCIe, DisplayPort, Netzwerk und Stromversorgung (bis 100 W) über einen USB-C-Stecker. HDMI und DisplayPort übertragen nur Audio/Video, kein Datennetzwerk. USB 2.0 ist mit 480 Mbit/s viel zu langsam.'
      },
    ],
    resources: [
      { title: 'Elektronik-Kompendium', url: 'https://www.elektronik-kompendium.de/' },
      { title: 'c\'t Magazin Hardware-Artikel', url: 'https://www.heise.de/ct/' },
    ]
  },
  {
    id: 'netzwerk',
    title: 'Netzwerktechnik',
    icon: 'network',
    summary: 'IPv4/IPv6, Subnetting, OSI/TCP-IP, Komponenten (Router, Switch, Gateway), WLAN- und Ethernet-Standards.',
    keyPoints: [
      'OSI-Modell (7 Schichten): Physical, Data Link, Network, Transport, Session, Presentation, Application',
      'TCP/IP-Modell (4 Schichten): Network Access, Internet, Transport, Application',
      'IPv4: 32 Bit, ca. 4,3 Mrd. Adressen, Punkt-Notation (z. B. 192.168.1.10). Private Bereiche: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16',
      'IPv6: 128 Bit, Hex-Notation in 8 Blöcken à 16 Bit (z. B. 2001:db8::1). Link-local: fe80::/10',
      'Subnetting: /24 = 255.255.255.0 = 256 Adressen (254 nutzbar). Pro zusätzlichem Bit halbiert sich die Anzahl Hosts',
      'Komponenten: Hub (Layer 1), Switch (Layer 2, MAC), Router/Gateway (Layer 3, IP), Firewall',
      'WLAN-Standards: Wi-Fi 5 (802.11ac), Wi-Fi 6 (ax), Wi-Fi 7 (be). Ethernet: 1G/10G/40G/100G über Cat6a, Cat7, LWL',
      'Wichtige Ports: 22 SSH, 25 SMTP, 53 DNS, 80 HTTP, 443 HTTPS, 3389 RDP',
      'Domäneneinbindung: Computer ins Active Directory aufnehmen → zentrale Authentifizierung & Gruppenrichtlinien',
    ],
    quiz: [
      {
        q: 'Wie viele nutzbare Host-Adressen enthält das Subnetz 192.168.10.0/26?',
        options: ['30', '62', '126', '254'],
        correct: 1,
        explanation: '/26 = 32 − 26 = 6 Hostbits → 2⁶ = 64 Adressen − 2 (Netz- und Broadcast-Adresse) = 62 nutzbare Hosts.'
      },
      {
        q: 'In welcher OSI-Schicht arbeitet ein Switch primär?',
        options: ['Schicht 1 (Physical)', 'Schicht 2 (Data Link)', 'Schicht 3 (Network)', 'Schicht 4 (Transport)'],
        correct: 1,
        explanation: 'Ein klassischer Switch arbeitet auf Layer 2 und leitet Frames anhand der MAC-Adresse weiter. Layer-3-Switches kombinieren zusätzlich Routing-Funktionen.'
      },
      {
        q: 'Welche IPv4-Adresse stammt aus einem privaten Bereich (RFC 1918)?',
        options: ['8.8.8.8', '192.168.50.5', '172.32.10.1', '195.0.0.1'],
        correct: 1,
        explanation: 'Private Bereiche: 10.0.0.0/8, 172.16.0.0–172.31.255.255, 192.168.0.0/16. 172.32.x.x liegt schon AUSSERHALB des privaten Bereichs!'
      },
      {
        q: 'Welcher Port wird standardmäßig für HTTPS verwendet?',
        options: ['80', '443', '8080', '22'],
        correct: 1,
        explanation: 'HTTPS = HTTP über TLS auf Port 443. HTTP = 80, SSH = 22, 8080 ist ein gängiger Alternativ-HTTP-Port (z. B. für Proxys).'
      },
      {
        q: 'Welche Aussage über IPv6 ist korrekt?',
        options: [
          'IPv6 verwendet 64-Bit-Adressen',
          'IPv6 nutzt Hexadezimaldarstellung in 8 Blöcken à 16 Bit',
          'IPv6 enthält weiterhin Broadcasts wie IPv4',
          'IPv6 ist nicht abwärtskompatibel zu IPv4 und kann parallel nicht betrieben werden'
        ],
        correct: 1,
        explanation: 'IPv6: 128 Bit, dargestellt als 8 Hexadezimal-Blöcke (z. B. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). IPv6 kennt keine Broadcasts mehr (stattdessen Multicast/Anycast). Dual-Stack-Betrieb mit IPv4 ist üblich.'
      },
      {
        q: 'Welcher zentrale Unterschied besteht zwischen TCP und UDP?',
        options: ['TCP arbeitet auf Layer 2, UDP auf Layer 3', 'TCP ist verbindungsorientiert und quittiert Pakete; UDP ist verbindungslos und verzichtet auf Quittung', 'UDP ist langsamer als TCP', 'TCP kann nur unicast, UDP nur broadcast'],
        correct: 1,
        explanation: 'TCP (Transmission Control Protocol): Verbindungsaufbau (3-Way-Handshake), Sequenznummern, Retransmission bei Verlust → zuverlässig aber Overhead. UDP (User Datagram Protocol): keine Verbindung, kein ACK → schnell, geeignet für Echtzeit (VoIP, Video-Streaming, DNS-Abfragen).'
      },
      {
        q: 'Was bewirkt NAT (Network Address Translation) in einem Router?',
        options: ['NAT verschlüsselt alle ausgehenden Pakete', 'NAT übersetzt private IP-Adressen des LANs auf eine (oder wenige) öffentliche IP-Adresse(n)', 'NAT erhöht die Bandbreite der Internetverbindung', 'NAT ersetzt DNS-Auflösung'],
        correct: 1,
        explanation: 'NAT ermöglicht es, dass viele Geräte im privaten Netz (z. B. 192.168.x.x) über eine einzige öffentliche IP ins Internet gelangen. Der Router merkt sich Port-Mappings (NAPT/PAT). NAT ist ein wichtiger Grund, warum IPv4 noch nicht erschöpft ist – und warum IPv6 mit seinem riesigen Adressraum NAT überflüssig macht.'
      },
      {
        q: 'Welche Reihenfolge durchläuft eine DNS-Auflösung, wenn ein Browser „www.vattenfall.de" aufruft?',
        options: ['Browser-Cache → lokale Hosts-Datei → konfig. Resolver → Root-NS → TLD-NS → Autoritativer NS', 'Autoritativer NS → Root-NS → Browser', 'ISP → Root-NS → Browser direkt', 'Nur der konfigurierte DNS-Server antwortet immer direkt'],
        correct: 0,
        explanation: 'DNS-Auflösung (rekursiv): 1. Browser-Cache, 2. OS-Cache/hosts, 3. konfigurierter Resolver (meist des ISP), 4. Root-Nameserver (kennt TLD-NS), 5. TLD-NS (.de → kennt autoritativen NS), 6. Autoritativer NS gibt finale IP zurück. Ergebnis wird gecacht (TTL).'
      },
      {
        q: 'In einem Netz 10.0.0.0/22: Wie viele nutzbare Hosts gibt es insgesamt?',
        options: ['254', '510', '1022', '2046'],
        correct: 2,
        explanation: '/22 = 32 − 22 = 10 Hostbits → 2¹⁰ = 1024 Adressen − 2 (Netz + Broadcast) = 1022 nutzbare Hosts. Das /22-Netz deckt 10.0.0.0 – 10.0.3.255 ab (4 × /24-Netze zusammengefasst).'
      },
      {
        q: 'Was ist der Hauptzweck eines VLANs (Virtual Local Area Network)?',
        options: ['VLANs erhöhen die physische Übertragungsgeschwindigkeit', 'VLANs trennen Netzsegmente logisch auf einem physischen Switch, ohne extra Hardware', 'VLANs ersetzen Router vollständig', 'VLANs sind ausschließlich für WLAN-Netze gedacht'],
        correct: 1,
        explanation: 'VLANs erlauben logische Netztrennung auf einem Switch: z. B. VLAN 10 für Büro, VLAN 20 für Server, VLAN 30 für Gäste – ohne separate physische Switches. Broadcast-Domains werden kleiner, Sicherheit steigt (Abteilungen können sich nicht direkt erreichen ohne Router/Firewall).'
      },
    ],
    resources: [
      { title: 'subnetting.org – interaktiver Subnetting-Trainer', url: 'https://www.subnetting.org/' },
      { title: 'Elektronik-Kompendium Netzwerktechnik', url: 'https://www.elektronik-kompendium.de/sites/net/' },
      { title: 'IPv6 Tutorial (heise)', url: 'https://www.heise.de/netze/artikel/IPv6-Tutorial-Grundlagen' },
    ]
  },
  {
    id: 'sicherheit',
    title: 'IT-Sicherheit & Datenschutz',
    icon: 'shield',
    summary: 'Schutzziele, Verschlüsselung, Hashverfahren, Authentifizierung, DSGVO-Grundlagen.',
    keyPoints: [
      'Schutzziele (CIA-Triad): Vertraulichkeit (Confidentiality), Integrität (Integrity), Verfügbarkeit (Availability). Erweitert: Authentizität, Nicht-Abstreitbarkeit',
      'Symmetrische Verschlüsselung: gleicher Schlüssel für Ver- und Entschlüsselung (z. B. AES). Schnell, aber Schlüsselverteilung problematisch',
      'Asymmetrische Verschlüsselung: Public Key (verschlüsseln) + Private Key (entschlüsseln) – z. B. RSA. Langsam, aber sichere Schlüsselverteilung',
      'Hybride Verschlüsselung: Sitzungsschlüssel asymmetrisch austauschen, dann symmetrisch verschlüsseln (Standard in TLS/HTTPS)',
      'Hashverfahren: Einwegfunktion (z. B. SHA-256). Verwendet für Integritätsprüfung, Passwortspeicherung (mit Salt!) – nicht zur Verschlüsselung!',
      'Authentifizierungsfaktoren: Wissen (Passwort), Besitz (Token, Smartphone), Inhärenz (Biometrie). 2FA = 2 unterschiedliche Faktoren',
      'DSGVO-Grundsätze: Rechtmäßigkeit, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität & Vertraulichkeit, Rechenschaftspflicht',
      'TOMs (Technische und Organisatorische Maßnahmen): Zutritts-, Zugangs-, Zugriffs-, Weitergabe-, Eingabe-, Auftrags-, Verfügbarkeits-, Trennungskontrolle',
    ],
    quiz: [
      {
        q: 'Ein Passwort wird mit SHA-256 in der Datenbank gespeichert. Welche Aussage trifft zu?',
        options: [
          'Das Original-Passwort kann jederzeit aus dem Hash zurückgerechnet werden',
          'Der Hash ist eine Einwegfunktion – das Original ist nur durch Probieren ermittelbar',
          'SHA-256 ist eine symmetrische Verschlüsselung',
          'Hashes brauchen keinen Salt, weil sie ohnehin sicher sind'
        ],
        correct: 1,
        explanation: 'Hashes sind Einwegfunktionen – aus dem Hashwert kann das Original nicht zurückgerechnet werden. Allerdings: Bei schwachen oder unsalted Hashes sind Rainbow-Table- und Brute-Force-Angriffe möglich. Daher IMMER mit Salt arbeiten.'
      },
      {
        q: 'Welche Schutzziele zählen klassischerweise zur CIA-Triade?',
        options: [
          'Confidentiality, Integrity, Authenticity',
          'Confidentiality, Integrity, Availability',
          'Control, Identity, Access',
          'Compliance, Integration, Audit'
        ],
        correct: 1,
        explanation: 'CIA = Confidentiality (Vertraulichkeit), Integrity (Integrität), Availability (Verfügbarkeit). Authentizität und Nicht-Abstreitbarkeit sind Erweiterungen.'
      },
      {
        q: 'Sie möchten eine E-Mail vertraulich an einen Geschäftspartner senden. Welcher Schlüssel des Empfängers wird zum Verschlüsseln genutzt?',
        options: ['Sein privater Schlüssel', 'Sein öffentlicher Schlüssel', 'Ihr privater Schlüssel', 'Ihr öffentlicher Schlüssel'],
        correct: 1,
        explanation: 'Bei asymmetrischer Verschlüsselung gilt: Mit dem ÖFFENTLICHEN Schlüssel des Empfängers wird verschlüsselt – nur er kann mit seinem privaten Schlüssel entschlüsseln. Für eine digitale Signatur dagegen würden Sie Ihren EIGENEN privaten Schlüssel nutzen.'
      },
      {
        q: 'Welcher der folgenden Punkte ist KEIN Grundsatz der Datenverarbeitung nach Art. 5 DSGVO?',
        options: [
          'Datenminimierung',
          'Zweckbindung',
          'Anonymitätspflicht für alle personenbezogenen Daten',
          'Speicherbegrenzung'
        ],
        correct: 2,
        explanation: 'Eine generelle „Anonymitätspflicht" gibt es nicht. Personenbezogene Daten dürfen verarbeitet werden, wenn eine Rechtsgrundlage vorliegt (z. B. Einwilligung, Vertrag, berechtigtes Interesse). Wichtig sind aber die genannten Grundsätze sowie Rechtmäßigkeit und Integrität/Vertraulichkeit.'
      },
      {
        q: 'Welche Kombination stellt eine echte Zwei-Faktor-Authentifizierung (2FA) dar?',
        options: [
          'Zwei verschiedene Passwörter',
          'Passwort + Sicherheitsfrage',
          'Passwort + Einmalcode aus einer Authenticator-App',
          'Fingerabdruck + Gesichtserkennung'
        ],
        correct: 2,
        explanation: '2FA verlangt zwei VERSCHIEDENE Faktor-Kategorien: Wissen + Besitz + Inhärenz. Passwort (Wissen) + Authenticator-Code auf dem Smartphone (Besitz) ist eine klassische 2FA. Zwei Passwörter oder zwei Biometrien sind hingegen nur EIN Faktor.'
      },
      {
        q: 'Wie funktioniert eine SQL-Injection?',
        options: ['Ein Angreifer injiziert Schadsoftware in SQL-Server-Binärdateien', 'Nicht validierte Benutzereingaben werden als SQL-Befehle interpretiert und manipulieren die Datenbank', 'SQL-Injection ist ein Denial-of-Service-Angriff auf Datenbankserver', 'Es wird ein Brute-Force-Angriff auf SQL-Passwörter durchgeführt'],
        correct: 1,
        explanation: 'SQL-Injection: Eingabe wie `\' OR 1=1 --` wird direkt in eine SQL-Abfrage eingebettet. Schutz: Prepared Statements/Parameterized Queries, ORMs, Input-Validierung, Least-Privilege-DB-Konten. SQL-Injection ist seit Jahren auf Platz 1 der OWASP Top 10.'
      },
      {
        q: 'Was ist eine Zero-Day-Schwachstelle?',
        options: ['Eine Schwachstelle, die exakt null Schaden anrichtet', 'Eine bekannte Lücke, für die ein Patch 0 Tage nach Entdeckung bereitsteht', 'Eine Sicherheitslücke, die dem Hersteller noch unbekannt ist – es gibt noch keinen Patch', 'Ein Angriff, der ausschließlich am selben Tag der Entdeckung ausgeführt wird'],
        correct: 2,
        explanation: 'Zero-Day = Hersteller hat null Tage Zeit gehabt, die Lücke zu schließen. Sie ist unbekannt oder der Patch fehlt noch. Bis zur Behebung können Angreifer sie ungehindert ausnutzen (Exploit). Schutz: Defense in Depth, Intrusion Detection, schnelles Patchen sobald verfügbar.'
      },
      {
        q: 'Was unterscheidet Spear-Phishing von gewöhnlichem Phishing?',
        options: ['Spear-Phishing nutzt verschlüsselte E-Mails', 'Spear-Phishing ist ein gezielter Angriff auf bestimmte Personen mit personalisierten Inhalten', 'Spear-Phishing greift nur WLAN-Netzwerke an', 'Spear-Phishing findet ausschließlich per SMS statt'],
        correct: 1,
        explanation: 'Normales Phishing: Massenmails ohne Personalisierung. Spear-Phishing: individuell zugeschnitten auf die Zielperson (Name, Firma, Rolle, aktuelle Ereignisse). Dadurch deutlich höhere Erfolgsquote. Whaling = Spear-Phishing gegen Führungskräfte. Schutz: Awareness-Training, DMARC/SPF/DKIM.'
      },
      {
        q: 'Was beschreibt das Prinzip „Defense in Depth"?',
        options: ['Alle Sicherheitsmaßnahmen werden in einer zentralen Firewall gebündelt', 'Mehrere überlagerte Sicherheitsschichten, sodass das Versagen einer Schicht nicht zum Totalausfall führt', 'Tief verschlüsselte Passwörter als einzige Schutzmaßnahme', 'Nur physischer Gebäudeschutz ohne IT-Maßnahmen'],
        correct: 1,
        explanation: 'Defense in Depth (Tiefenverteidigung): Firewall + IDS/IPS + Endpoint Protection + Netzwerksegmentierung + MFA + Monitoring + Schulungen + Backup. Kein einzelner Mechanismus ist perfekt; mehrere Schichten erhöhen die Angreifbarkeit deutlich. Wie eine Zwiebel mit vielen Schalen.'
      },
      {
        q: 'Welche Aussage zur digitalen Signatur ist korrekt?',
        options: ['Die digitale Signatur verschlüsselt die gesamte Nachricht symmetrisch', 'Der Absender signiert mit seinem PRIVATEN Schlüssel; der Empfänger verifiziert mit dem ÖFFENTLICHEN Schlüssel', 'Digitale Signaturen ersetzen SSL-Zertifikate vollständig', 'Die digitale Signatur garantiert Vertraulichkeit'],
        correct: 1,
        explanation: 'Digitale Signatur ≠ Verschlüsselung! Ziel ist Integrität + Authentizität. Ablauf: Absender berechnet Hash der Nachricht, verschlüsselt Hash mit EIGENEM Private Key (= Signatur). Empfänger entschlüsselt mit Public Key des Absenders, vergleicht Hash. Stimmt der Hash, ist die Nachricht unverändert und kommt wirklich vom Absender.'
      },
    ],
    resources: [
      { title: 'BSI – Grundschutz-Kompendium', url: 'https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/' },
      { title: 'Bundesdatenschutzbeauftragter – DSGVO', url: 'https://www.bfdi.bund.de/' },
      { title: 'Heise Security News', url: 'https://www.heise.de/security/' },
    ]
  },
  {
    id: 'software',
    title: 'Software, Lizenzen & KI',
    icon: 'book',
    summary: 'Softwarearten, Lizenzmodelle (OSS, proprietär, SaaS), ERP/CRM/SCM, KI-Grundlagen.',
    keyPoints: [
      'Softwarearten: Systemsoftware (OS, Treiber), Anwendungssoftware (Office, ERP), Middleware (Datenbanksysteme, Webserver)',
      'Lizenzmodelle: proprietär (Closed Source, EULA), Open Source (GPL, MIT, Apache), Freeware, Shareware, Public Domain',
      'Vertriebsmodelle: On-Premises (vor Ort) vs. SaaS (Cloud, mietweise), PaaS, IaaS',
      'ERP (Enterprise Resource Planning, z. B. SAP S/4HANA): unternehmensweite Ressourcenplanung',
      'CRM (Customer Relationship Management, z. B. Salesforce): Kundenbeziehungen',
      'SCM (Supply Chain Management): Lieferketten- und Logistiksteuerung',
      'KI-Grundlagen: Machine Learning (überwachtes/unüberwachtes/bestärkendes Lernen), Deep Learning, neuronale Netze, LLMs (GPT, Claude, …)',
      'Risiken & Chancen von KI im Unternehmen: Bias, Datenschutz, Effizienzgewinne, neue Geschäftsmodelle',
    ],
    quiz: [
      {
        q: 'Ein Unternehmen will eine Software online mieten – Updates, Wartung und Hosting übernimmt der Anbieter. Welches Modell ist das?',
        options: ['On-Premises', 'IaaS', 'PaaS', 'SaaS'],
        correct: 3,
        explanation: 'Software-as-a-Service (SaaS) liefert die Anwendung über das Internet inkl. Betrieb, Updates und Wartung. Beispiele: Microsoft 365, Salesforce, Google Workspace.'
      },
      {
        q: 'Welche Lizenz ist eine klassische Copyleft-Lizenz, die Weiterverteilungen erneut unter dieselbe Lizenz stellt?',
        options: ['MIT', 'Apache 2.0', 'GPL', 'Proprietäre EULA'],
        correct: 2,
        explanation: 'Die GNU General Public License (GPL) ist eine Copyleft-Lizenz: abgeleitete Werke müssen ebenfalls unter GPL veröffentlicht werden. MIT und Apache sind permissive Lizenzen.'
      },
      {
        q: 'Welche Software ist primär ein ERP-System?',
        options: ['Salesforce', 'SAP S/4HANA', 'Microsoft Outlook', 'Slack'],
        correct: 1,
        explanation: 'SAP S/4HANA ist ein typisches ERP-System. Salesforce ist CRM, Outlook ist E-Mail-Client, Slack ist Messaging.'
      },
      {
        q: 'Beim überwachten Lernen (Supervised Learning)…',
        options: [
          'sind die Trainingsdaten unbeschriftet',
          'sind die Trainingsdaten mit korrekten Labels versehen',
          'lernt das Modell durch Belohnung und Bestrafung',
          'wird keine Trainingsphase benötigt'
        ],
        correct: 1,
        explanation: 'Beim Supervised Learning lernt das Modell anhand gelabelter Trainingsdaten (Input → erwarteter Output). Unsupervised Learning arbeitet mit unbeschrifteten Daten, Reinforcement Learning mit Belohnung/Bestrafung.'
      },
      {
        q: 'Was versteht man unter „Bias" in KI-Systemen?',
        options: ['Eine technische Fehlfunktion der GPU beim Training', 'Systematische Verzerrung in Modellvorhersagen, oft durch unrepräsentative Trainingsdaten', 'Ein mathematischer Parameter in neuronalen Netzen (ausschließlich)', 'Bias bedeutet, dass das Modell zu langsam trainiert'],
        correct: 1,
        explanation: 'KI-Bias entsteht häufig durch unbalancierte oder nicht-repräsentative Trainingsdaten. Beispiel: Ein Einstellungs-KI, das mit historischen Daten trainiert wurde, die Frauen benachteiligte, reproduziert diese Diskriminierung. Arten: Daten-Bias, Algorithmus-Bias, Bestätigungs-Bias. Mitigierung: Diverse Daten, Fairness-Metriken, Audits.'
      },
      {
        q: 'Was sind „Halluzinationen" bei großen Sprachmodellen (LLMs)?',
        options: ['Der Prozess, bei dem das Modell Bilder generiert', 'Wenn ein LLM sachlich falsche oder erfundene Informationen mit scheinbarer Sicherheit ausgibt', 'Eine Trainingmethode für kreative Texte', 'Halluzinationen sind ein Sicherheitsmerkmal moderner LLMs'],
        correct: 1,
        explanation: 'LLMs wie GPT oder Claude generieren Text statistisch plausibel, nicht faktisch korrekt. Halluzinationen: erfundene Quellen, falsche Fakten, nicht-existierende Gesetze – alles mit Selbstsicherheit formuliert. Ursache: Das Modell optimiert auf sprachliche Wahrscheinlichkeit, nicht auf Wahrheit. Lösung: RAG (Retrieval-Augmented Generation), Fakten-Checking, Retrieval-Quellen verlinken.'
      },
      {
        q: 'In welche Risikoklasse ordnet der EU AI Act eine KI ein, die für Kreditvergabe oder Einstellungsentscheidungen genutzt wird?',
        options: ['Minimales Risiko', 'Begrenztes Risiko', 'Hohes Risiko (High Risk)', 'Inakzeptables Risiko (verboten)'],
        correct: 2,
        explanation: 'Der EU AI Act (gültig ab 2024/2026) klassifiziert KI-Systeme nach Risikostufen. Hochrisiko-KI (Anhang III): Kreditvergabe, Personalentscheidungen, biometrische Identifizierung, Bildung, kritische Infrastruktur – unterliegen strengen Anforderungen (Transparenz, menschliche Aufsicht, Dokumentation). Verbotene KI: Social Scoring, sublimale Manipulation.'
      },
    ],
    resources: [
      { title: 'Open Source Initiative – Lizenzübersicht', url: 'https://opensource.org/licenses' },
      { title: 'BMWK – KI Strategie', url: 'https://www.bmwk.de/' },
    ]
  },
  {
    id: 'uml',
    title: 'UML-Aktivitätsdiagramm & Modellierung',
    icon: 'chart',
    summary: 'Aktivitätsdiagramme lesen und erstellen – Notation, Elemente, typische Fehler.',
    keyPoints: [
      'Startknoten: gefüllter schwarzer Kreis. Endknoten: schwarzer Kreis mit Ring',
      'Aktion/Aktivität: abgerundetes Rechteck',
      'Kontrollfluss: Pfeil zwischen Aktionen',
      'Verzweigung (Decision): Raute mit ausgehenden Pfeilen + Bedingungen [in eckigen Klammern]',
      'Zusammenführung (Merge): Raute, die mehrere Pfeile zu einem zusammenführt',
      'Parallelisierung (Fork) & Synchronisation (Join): horizontaler Balken',
      'Schwimmbahnen (Swimlanes): Zuständigkeiten/Rollen darstellen',
      'Typische Fehler: fehlende Bedingungen an Decision, Decision/Merge verwechseln, parallel laufende Pfade nicht wieder zusammengeführt',
    ],
    quiz: [
      {
        q: 'Welches Symbol stellt im UML-Aktivitätsdiagramm den Startknoten dar?',
        options: ['Raute', 'Gefüllter schwarzer Kreis', 'Abgerundetes Rechteck', 'Horizontaler Balken'],
        correct: 1,
        explanation: 'Startknoten = gefüllter schwarzer Kreis. Endknoten = Kreis mit Ring. Raute = Decision/Merge. Balken = Fork/Join.'
      },
      {
        q: 'Welche Aussage zu Fork und Join ist korrekt?',
        options: [
          'Fork startet eine Verzweigung mit Bedingungen',
          'Fork teilt den Kontrollfluss in mehrere parallele Pfade auf',
          'Join verbindet alternative Pfade je nach Bedingung',
          'Fork und Join sind dasselbe Symbol mit gleicher Bedeutung'
        ],
        correct: 1,
        explanation: 'Fork (Balken) teilt den Fluss in parallele Pfade. Join (ebenfalls Balken) synchronisiert sie wieder. Decision (Raute) ist die bedingte Verzweigung.'
      },
      {
        q: 'Wofür werden Schwimmbahnen (Swimlanes) verwendet?',
        options: [
          'Zur Zeitmessung von Aktivitäten',
          'Zur Darstellung von Zuständigkeiten/Akteuren',
          'Zur Kennzeichnung optionaler Aktivitäten',
          'Zur Modellierung von Fehlerzuständen'
        ],
        correct: 1,
        explanation: 'Swimlanes (Partitionen) zeigen, welcher Akteur oder welche Rolle für welche Aktivität verantwortlich ist – z. B. „Kunde", „Vertrieb", „Lager".'
      },
      {
        q: 'Wie werden Bedingungen (Guards) an einem Decision-Knoten im Aktivitätsdiagramm dargestellt?',
        options: ['Als gefüllte Pfeile ohne Beschriftung', 'Als Text in eckigen Klammern [ ] an den ausgehenden Pfeilen der Raute', 'Als Kommentar-Sticky-Note neben der Raute', 'Als Kreis mit Beschriftung'],
        correct: 1,
        explanation: 'Guards (Wächter) stehen in eckigen Klammern direkt an den ausgehenden Kontrollflusspfeilen einer Decision-Raute, z. B. [Betrag > 1000 €] oder [sonst]. Wichtig: Alle Guards müssen zusammen alle Fälle abdecken (vollständig) und sich gegenseitig ausschließen (disjunkt), damit kein Fall offen bleibt.'
      },
      {
        q: 'Was ist ein Objektknoten (Object Node) im UML-Aktivitätsdiagramm?',
        options: ['Ein Synonym für eine Aktion (Action)', 'Ein Element, das Daten oder Objekte zwischen Aktionen transportiert und als Rechteck ohne abgerundete Ecken dargestellt wird', 'Eine andere Bezeichnung für einen Swimlane-Teiler', 'Ein Fehlerbehandlungs-Event'],
        correct: 1,
        explanation: 'Objektknoten repräsentieren Daten oder Objekte, die zwischen Aktionen fließen (Datenflusssicht). Darstellung: spitzes (normales) Rechteck (im Gegensatz zu abgerundeten Task-Rechtecken). Beispiel: Eine Aktion „Angebot erstellen" produziert ein Objekt [Angebotsdokument], das die nächste Aktion „Angebot prüfen" konsumiert.'
      },
    ],
    resources: [
      { title: 'UML-Diagramme – Übersicht (Heise)', url: 'https://www.heise.de/' },
      { title: 'draw.io / diagrams.net – kostenloses UML-Tool', url: 'https://app.diagrams.net/' },
    ]
  },
  {
    id: 'ergonomie',
    title: 'Ergonomie & Barrierefreiheit',
    icon: 'book',
    summary: 'Arbeitsplatzgestaltung, ArbStättV, BFSG (seit Juni 2025), inklusives Webdesign.',
    keyPoints: [
      'Bildschirmarbeitsplatz: Augen-Bildschirm-Abstand ca. 50–80 cm, Oberkante leicht unter Augenhöhe',
      'Stuhlhöhe: Ober- und Unterschenkel ca. 90°, Füße flach auf dem Boden',
      'Tageslicht von links/rechts, keine Reflexionen, Beleuchtungsstärke ca. 500 Lux',
      'Bewegungspausen: 5 Minuten pro Stunde, „40-15-5-Regel" (40 Min. sitzen, 15 stehen, 5 bewegen)',
      'BFSG (Barrierefreiheitsstärkungsgesetz): seit 28. Juni 2025 – Pflicht zur Barrierefreiheit u. a. für E-Commerce, Banking-Apps, Webseiten',
      'WCAG 2.1: vier Prinzipien – wahrnehmbar, bedienbar, verständlich, robust',
      'Praktische Maßnahmen: Alt-Texte für Bilder, semantisches HTML, Tastaturbedienbarkeit, ausreichender Farbkontrast (min. 4,5:1 für Text)',
    ],
    quiz: [
      {
        q: 'Welches Mindestkontrastverhältnis verlangt WCAG 2.1 (Level AA) für normalen Text?',
        options: ['2:1', '3:1', '4,5:1', '7:1'],
        correct: 2,
        explanation: 'Für normalen Text: 4,5:1 (AA). Für großen Text: 3:1. Für AAA: 7:1 bzw. 4,5:1.'
      },
      {
        q: 'Welches Gesetz verpflichtet seit Juni 2025 viele Unternehmen zur digitalen Barrierefreiheit?',
        options: ['DSGVO', 'BFSG', 'TMG', 'GG'],
        correct: 1,
        explanation: 'Das Barrierefreiheitsstärkungsgesetz (BFSG) setzt den European Accessibility Act um und ist seit 28.06.2025 in Kraft.'
      },
      {
        q: 'Was besagt die „40-15-5-Regel" für Bildschirmarbeit?',
        options: ['40 Stunden Woche, 15 Minuten Mittagspause, 5 Tage Urlaub', '40 Minuten sitzen, 15 Minuten stehen, 5 Minuten bewegen – dann Zyklus wiederholen', '40 cm Abstand, 15 Lux Licht, 5 kg Tastaturgewicht', 'Bildschirm 40° neigen, 15 cm erhöhen, 5 Min. abdecken'],
        correct: 1,
        explanation: 'Die 40-15-5-Regel ist eine Empfehlung für gesunde Büroarbeit: 40 Minuten sitzen, 15 Minuten stehen, 5 Minuten bewegen (Holen, Treppen, Dehnübungen). Dadurch wird Monotonie unterbrochen, die Durchblutung gefördert und Rückenbeschwerden vorgebeugt. Höhenverstellbare Schreibtische unterstützen diese Regel.'
      },
      {
        q: 'Eine Web-App soll für rot-grün-blinde Nutzer:innen zugänglich sein. Welche Maßnahme ist am wirkungsvollsten?',
        options: ['Alle Farben durch Graustufen ersetzen', 'Informationen zusätzlich durch Form, Muster oder Text kommunizieren, nicht nur über Farbe allein', 'Den Kontrast auf 2:1 reduzieren', 'Nur rote Elemente verwenden'],
        correct: 1,
        explanation: 'WCAG-Prinzip: „Use of Color" – Farbe allein darf nicht der einzige Informationskanal sein. Zusätzlich: Muster (z. B. Schraffur in Diagrammen), Symbole (✓/✗), Textelemente. Kombiniert mit ausreichendem Kontrast (≥4,5:1) wird die Oberfläche für die meisten Sehbehinderungen zugänglich.'
      },
    ],
    resources: [
      { title: 'WCAG 2.1 – W3C', url: 'https://www.w3.org/TR/WCAG21/' },
      { title: 'BFSG – Gesetzestext', url: 'https://www.gesetze-im-internet.de/bfsg/' },
    ]
  },
  {
    id: 'anforderungen',
    title: 'Anforderungsanalyse',
    icon: 'fileText',
    summary: 'Lasten-/Pflichtenheft, funktionale vs. nichtfunktionale Anforderungen, MoSCoW, User Stories.',
    keyPoints: [
      'Lastenheft (vom Auftraggeber): Was soll das System leisten? Grobe Beschreibung aus Kundensicht',
      'Pflichtenheft (vom Auftragnehmer): Wie wird das umgesetzt? Technische Detaillierung als Antwort auf das Lastenheft',
      'Funktionale Anforderungen: Was das System tun soll (z. B. „Nutzer kann Passwort zurücksetzen")',
      'Nicht-funktionale Anforderungen: Wie gut das System das tun soll (Leistung, Sicherheit, Usability, Wartbarkeit, Verfügbarkeit)',
      'MoSCoW-Methode: Must have, Should have, Could have, Won\'t have – priorisiert Anforderungen im Sprint oder Release',
      'User Story: „Als [Rolle] möchte ich [Ziel], damit [Nutzen]." Format für agile Anforderungen',
      'Acceptance Criteria (Akzeptanzkriterien): Bedingungen, die erfüllt sein müssen, damit eine User Story als „done" gilt',
      'Stakeholder-Interviews, Beobachtung, Prototyping und Workshops als Erhebungstechniken',
    ],
    quiz: [
      {
        q: 'Wer erstellt typischerweise das Lastenheft?',
        options: ['Der Softwareentwickler', 'Der Auftraggeber / Kunde', 'Die Qualitätssicherung', 'Der Scrum Master'],
        correct: 1,
        explanation: 'Das Lastenheft kommt vom Auftraggeber – er beschreibt in eigenen Worten, was er braucht (Was/Warum). Das Pflichtenheft ist die Antwort des Auftragnehmers: Wie er es umsetzt (technisches Konzept). Die Reihenfolge: Lastenheft → Pflichtenheft → Umsetzung.'
      },
      {
        q: 'Welche der folgenden Anforderungen ist eine NICHT-funktionale Anforderung?',
        options: ['Das System soll Bestellungen speichern.', 'Der Login soll in unter 200 ms erfolgen.', 'Nutzer:innen sollen Rechnungen herunterladen können.', 'Die App soll Passwörter zurücksetzen.'],
        correct: 1,
        explanation: 'Nicht-funktionale Anforderungen (NFR) beschreiben Qualitätseigenschaften: Performance (200 ms), Verfügbarkeit (99,9 %), Sicherheit, Usability. Funktionale Anforderungen beschreiben konkrete Aktionen/Features des Systems.'
      },
      {
        q: 'Was bedeutet „M" in der MoSCoW-Priorisierung?',
        options: ['Maybe', 'Must have', 'Medium priority', 'Managed requirement'],
        correct: 1,
        explanation: 'MoSCoW: M = Must have (zwingend für Release), S = Should have (wichtig, aber Workaround möglich), C = Could have (nice-to-have), W = Won\'t have this time (bewusst ausgeschlossen). Die Methode hilft, Scope in agilen Projekten zu managen.'
      },
      {
        q: 'Eine korrekte User Story hat folgendes Format:',
        options: ['„Das System soll X implementieren."', '„Als [Nutzerrolle] möchte ich [Aktion], damit [Nutzen]."', '„Ticket #123: Funktion Y einbauen."', '„Wenn X, dann Y, sonst Z."'],
        correct: 1,
        explanation: 'Das 3-teilige Format erzwingt Klarheit über Wer (Rolle), Was (Aktion) und Warum (Nutzen). Beispiel: „Als Kundenberater:in bei Vattenfall möchte ich Kundendaten auf einen Blick sehen, damit ich Anrufe schneller bearbeiten kann." Acceptance Criteria verfeinern dann die Done-Kriterien.'
      },
      {
        q: 'Was sind Akzeptanzkriterien (Acceptance Criteria) bei User Stories?',
        options: ['Die Mindestpunktzahl, ab der eine Story ins Backlog darf', 'Konkrete, testbare Bedingungen, die erfüllt sein müssen, damit eine Story als „Done" gilt', 'Die Priorisierung einer Story nach MoSCoW', 'Das Budget, das für eine Story genehmigt wurde'],
        correct: 1,
        explanation: 'Acceptance Criteria beschreiben präzise, wann eine User Story als fertig gilt. Beispiel: „Gegeben dass der Nutzer eingeloggt ist / Wenn er auf \'Passwort ändern\' klickt / Dann erhält er eine Bestätigungsmail innerhalb von 60 Sekunden." Oft im Given-When-Then-Format (BDD).'
      },
      {
        q: 'Welche Erhebungstechnik liefert am ehesten unbewusste Nutzungsgewohnheiten?',
        options: ['Fragebogen', 'Teilnehmende Beobachtung am Arbeitsplatz', 'Experteninterview', 'Dokumentenanalyse'],
        correct: 1,
        explanation: 'Bei Beobachtung sieht der Analyst, was tatsächlich passiert – nicht was Nutzer:innen glauben, was sie tun. Menschen beschreiben in Interviews oft den Idealfall, nicht die Realität. Besonders wertvoll: Kontextuelle Beobachtung (Contextual Inquiry) direkt am Arbeitsplatz.'
      },
    ],
    resources: [
      { title: 'IT-Berufe-Podcast – Anforderungsanalyse', url: 'https://it-berufe-podcast.de/' },
      { title: 'Heise – Lastenheft und Pflichtenheft erklärt', url: 'https://www.heise.de/' },
      { title: 'Agile Alliance – User Stories', url: 'https://www.agilealliance.org/glossary/user-stories/' },
    ]
  },
  {
    id: 'betriebssysteme',
    title: 'Betriebssysteme',
    icon: 'settings',
    summary: 'Aufgaben des OS, Prozesse & Threads, Scheduling, virtueller Speicher, Windows/Linux/macOS, chmod, Active Directory.',
    keyPoints: [
      'Aufgaben des Betriebssystems: Prozessverwaltung, Speicherverwaltung, Geräteverwaltung (Treiber), Dateisystemverwaltung, Benutzerverwaltung, Sicherheit',
      'Prozess: Programm in Ausführung mit eigenem Adressraum. Thread: leichtgewichtiger Ausführungsstrang innerhalb eines Prozesses, teilt Adressraum',
      'Scheduling: CPU-Zeit auf Prozesse verteilen. Strategien: FIFO, Round-Robin (Zeitscheiben), Prioritätsbasiert, Shortest Job First',
      'Virtueller Speicher: OS bildet logische Adressen auf physische RAM-Adressen ab. Ermöglicht mehr Prozesse als RAM vorhanden; Swap-Auslagerung auf Festplatte',
      'Linux-Dateirechte: rwx für Owner, Group, Others. chmod 755 = rwxr-xr-x. Oktale Notation: r=4, w=2, x=1',
      'Wichtige Linux-Befehle: ls, cd, cp, mv, rm, chmod, chown, grep, ps, kill, systemctl, df, top',
      'Active Directory (AD): Microsoft-Verzeichnisdienst für zentrales Identity Management. Gruppenrichtlinien (GPO) steuern alle eingebundenen Clients',
      'Windows vs. Linux vs. macOS: Windows (GUI-fokussiert, hohe Marktanteile Desktop), Linux (Server, Open Source, viele Distributionen), macOS (UNIX-Basis, Apple-Ökosystem)',
    ],
    quiz: [
      {
        q: 'Was ist der Unterschied zwischen einem Prozess und einem Thread?',
        options: ['Prozesse sind schneller als Threads', 'Threads teilen den Adressraum des Prozesses, Prozesse haben je einen eigenen Adressraum', 'Threads können nicht parallelisiert werden', 'Ein Prozess ist immer ein Thread'],
        correct: 1,
        explanation: 'Prozess: eigenständige Ausführungseinheit mit eigenem virtuellen Adressraum, eigenen Ressourcen. Thread: leichtgewichtig, teilt Adressraum und Ressourcen mit Geschwister-Threads im selben Prozess. Wechsel zwischen Threads (Context Switch) ist schneller als zwischen Prozessen.'
      },
      {
        q: 'Ein Verzeichnis hat die Rechte chmod 750. Was darf die Gruppe?',
        options: ['Lesen, Schreiben, Ausführen', 'Lesen und Ausführen, aber kein Schreiben', 'Nur Lesen', 'Gar nichts'],
        correct: 1,
        explanation: 'chmod 750 = 7 (Owner: rwx), 5 (Group: r-x), 0 (Others: ---). Gruppe darf lesen (r=4) und ausführen/betreten (x=1), aber nicht schreiben (w=2 fehlt). Merkhilfe: r=4, w=2, x=1. Addiert: rwx=7, rw-=6, r-x=5, r--=4.'
      },
      {
        q: 'Was verwaltet Active Directory zentral?',
        options: ['Nur die Festplattenpartitionen der Clients', 'Benutzerkonten, Computer-Objekte und Richtlinien (GPOs) in Windows-Domänen', 'Ausschließlich Druckerwarteschlangen', 'Linux-Systemdienste im Netzwerk'],
        correct: 1,
        explanation: 'Active Directory Domain Services (AD DS) ist Microsofts LDAP-basierter Verzeichnisdienst. Zentrales Single Sign-On: ein Login, alle Ressourcen. GPOs steuern Desktop-Hintergrund bis Passwort-Policy. LDAP ist der zugrunde liegende Protokollstandard (auch in OpenLDAP für Linux nutzbar).'
      },
      {
        q: 'Was ist „Round-Robin"-Scheduling?',
        options: ['Jeder Prozess läuft, bis er selbst freigibt', 'Jeder Prozess bekommt eine feste Zeitscheibe; nach Ablauf kommt der nächste an die Reihe', 'Prozesse mit höchster Priorität laufen immer zuerst', 'Der kürzeste Prozess wird zuerst ausgeführt'],
        correct: 1,
        explanation: 'Round-Robin ist ein präemptives Scheduling-Verfahren: Jeder Prozess erhält eine Zeitscheibe (z. B. 10 ms). Nach Ablauf wird er unterbrochen und ans Ende der Warteschlange gestellt. Fairness für alle Prozesse, gute Reaktionszeiten – Standard in Time-Sharing-Systemen.'
      },
      {
        q: 'Was ist virtueller Speicher?',
        options: ['RAM, der in der Cloud ausgelagert ist', 'Eine OS-Technik, die jedem Prozess einen eigenen logischen Adressraum gibt, der größer sein kann als der physische RAM', 'Ein spezieller Speicher-Chip auf dem Mainboard', 'Virtueller Speicher ist ein Synonym für Cache'],
        correct: 1,
        explanation: 'Virtueller Speicher entkoppelt logische Adressen (die Prozesse nutzen) von physischen RAM-Adressen. Das OS kann Seiten (Pages) zwischen RAM und Auslagerungsdatei (Swap) verschieben. Vorteile: Prozesse sehen mehr Speicher als vorhanden; Isolation zwischen Prozessen; Speicherschutz.'
      },
      {
        q: 'Welches Betriebssystem ist typischerweise die Basis für Webserver in der Cloud?',
        options: ['Windows 11 Home', 'macOS Ventura', 'Linux (z. B. Ubuntu Server, CentOS, Debian)', 'MS-DOS'],
        correct: 2,
        explanation: 'Linux dominiert im Serverbereich (> 80 % der Cloud-Instanzen bei AWS, Azure, GCP). Gründe: kostenlos/Open-Source, stabiler 24/7-Betrieb, mächtiges CLI, riesiges Paket-Ökosystem, geringer Ressourcenverbrauch ohne Desktop-GUI.'
      },
    ],
    resources: [
      { title: 'Elektronik-Kompendium – Betriebssysteme', url: 'https://www.elektronik-kompendium.de/' },
      { title: 'Linux-Kurs für Einsteiger (linuxmuster.net)', url: 'https://www.linuxmuster.net/' },
      { title: 'Microsoft Active Directory Doku', url: 'https://learn.microsoft.com/de-de/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview' },
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Computing & Virtualisierung',
    icon: 'network',
    summary: 'IaaS/PaaS/SaaS, Public/Private/Hybrid-Cloud, Container vs. VM, Kubernetes-Grundlagen, Hypervisor, Vendor-Lock-in.',
    keyPoints: [
      'IaaS (Infrastructure as a Service): Miete von Rechenleistung, Speicher, Netzwerk – z. B. AWS EC2, Azure VMs. Volle Kontrolle über OS und Apps',
      'PaaS (Platform as a Service): verwaltete Plattform für Entwicklung – z. B. Heroku, Azure App Service, Google App Engine. Kein OS-Management nötig',
      'SaaS (Software as a Service): fertige Anwendung aus der Cloud – z. B. Microsoft 365, Salesforce, SAP S/4HANA Cloud',
      'Public Cloud: geteilte Infrastruktur beim Anbieter (AWS, Azure, GCP). Private Cloud: eigene Infrastruktur, nur für eine Organisation. Hybrid Cloud: Mix aus beiden',
      'Hypervisor Typ 1 (Bare-Metal): läuft direkt auf Hardware – z. B. VMware ESXi, Hyper-V, KVM. Typ 2 (Hosted): läuft auf einem OS – z. B. VirtualBox, VMware Workstation',
      'Container (Docker): leichtgewichtig, teilen OS-Kernel, starten schnell. VM: vollständige Betriebssysteminstanz pro Einheit, stärker isoliert',
      'Kubernetes (K8s): Container-Orchestrierung – verteilt Container auf Nodes, skaliert automatisch, überwacht Gesundheit (Self-Healing)',
      'Vendor-Lock-in: Abhängigkeit von proprietären Diensten eines Anbieters erschwert Wechsel. Gegenmaßnahme: offene Standards, Multi-Cloud-Strategie',
    ],
    quiz: [
      {
        q: 'Ein Unternehmen möchte seine Webanwendung deployen, ohne sich um OS-Patches und Server-Konfiguration zu kümmern. Welches Cloud-Modell passt?',
        options: ['IaaS', 'PaaS', 'SaaS', 'On-Premises'],
        correct: 1,
        explanation: 'PaaS übernimmt Infrastruktur und OS – der Entwickler deployt nur noch den Anwendungscode. IaaS würde OS-Verwaltung erfordern. SaaS wäre eine fertige Anwendung. PaaS ist ideal für DevOps-Teams, die sich auf Code konzentrieren wollen.'
      },
      {
        q: 'Was ist der Hauptunterschied zwischen einem Hypervisor Typ 1 und Typ 2?',
        options: ['Typ 1 unterstützt mehr VMs als Typ 2', 'Typ 1 läuft direkt auf der Hardware (Bare-Metal), Typ 2 läuft als Software auf einem Host-OS', 'Typ 2 ist sicherer als Typ 1', 'Typ 1 ist für Desktop-Nutzung, Typ 2 für Server'],
        correct: 1,
        explanation: 'Typ-1-Hypervisor (Bare-Metal): direkt auf Hardware → geringer Overhead, hohe Leistung, Unternehmenseinsatz (VMware ESXi, Microsoft Hyper-V). Typ-2-Hypervisor: läuft als Programm auf einem OS (VirtualBox auf Windows) → einfacher für Entwicklung und Tests, aber höherer Overhead.'
      },
      {
        q: 'Welcher Vorteil von Containern gegenüber VMs ist am bedeutendsten?',
        options: ['Container sind sicherer, da sie vollständig isoliert sind', 'Container starten in Sekunden und benötigen nur Megabytes, da sie den OS-Kernel des Hosts teilen', 'Container können nicht auf Linux laufen', 'Container benötigen keinen Prozessor'],
        correct: 1,
        explanation: 'Container teilen den OS-Kernel des Hosts (kein eigenes OS je Container) → viel leichter (MB statt GB), Startzeit in Millisekunden bis Sekunden statt Minuten. Nachteil: schwächere Isolation als VMs (gleiches OS). Deshalb oft: Container innerhalb von VMs in der Cloud.'
      },
      {
        q: 'Was macht Kubernetes?',
        options: ['Kubernetes ist ein Betriebssystem für Container', 'Kubernetes orchestriert Container: verteilt sie auf Cluster-Nodes, skaliert automatisch und startet ausgefallene Pods neu', 'Kubernetes erstellt Docker-Images', 'Kubernetes ist ein IaaS-Anbieter'],
        correct: 1,
        explanation: 'Kubernetes (K8s) ist ein Open-Source-System zur Container-Orchestrierung. Kernfunktionen: Scheduling (welcher Container auf welchem Node), Auto-Scaling (mehr Pods bei Last), Self-Healing (ausgefallene Pods neustarten), Load Balancing, Rolling Updates ohne Downtime.'
      },
      {
        q: 'Welche Maßnahme reduziert das Vendor-Lock-in-Risiko am effektivsten?',
        options: ['Ausschließlich die Dienste eines einzelnen Cloud-Anbieters nutzen', 'Offene Standards und portable Technologien einsetzen (z. B. Kubernetes, Terraform, Open-Source-DBs)', 'Alle Daten proprietär verschlüsseln', 'Kein Backup außerhalb der Cloud anlegen'],
        correct: 1,
        explanation: 'Vendor-Lock-in entsteht durch proprietäre Dienste (AWS Lambda-spezifische Features, Azure-spezifische DBs). Gegenmaßnahmen: offene Standards (Kubernetes läuft überall), Infrastructure as Code mit Terraform (Clouds abstrahieren), Containerisierung, offene DB-Protokolle. Multi-Cloud-Ansatz erhöht Flexibilität, aber auch Komplexität.'
      },
      {
        q: 'Welches Modell beschreibt eine Cloud, die ausschließlich für eine Organisation betrieben wird (On-Site oder beim Provider)?',
        options: ['Public Cloud', 'Hybrid Cloud', 'Private Cloud', 'Community Cloud'],
        correct: 2,
        explanation: 'Private Cloud: dedizierte Infrastruktur für eine Organisation. Vorteile: Datenkontrolle, Compliance, keine geteilten Ressourcen. Nachteile: höhere Kosten als Public Cloud, eigenes Management. Beispiel: SAP-System auf eigenen Servern mit virtualisierten Umgebungen.'
      },
    ],
    resources: [
      { title: 'AWS – Cloud-Grundlagen (kostenlos)', url: 'https://aws.amazon.com/de/getting-started/' },
      { title: 'Elektronik-Kompendium – Virtualisierung', url: 'https://www.elektronik-kompendium.de/sites/net/1910301.htm' },
      { title: 'Kubernetes – offizielle Docs (deutsch)', url: 'https://kubernetes.io/de/docs/home/' },
    ]
  },
  {
    id: 'dsgvo',
    title: 'Datenschutz & DSGVO',
    icon: 'shield',
    summary: 'Grundsätze Art. 5, Rechtsgrundlagen Art. 6, Betroffenenrechte, TOMs, Meldepflicht, Bußgelder, Privacy by Design.',
    keyPoints: [
      'DSGVO gilt seit 25.05.2018 in der gesamten EU. Anwendbar bei personenbezogenen Daten (alle Infos, die eine natürliche Person direkt oder indirekt identifizierbar machen)',
      'Art. 5 – Grundsätze: Rechtmäßigkeit, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität & Vertraulichkeit, Rechenschaftspflicht',
      'Art. 6 – Rechtsgrundlagen: Einwilligung, Vertragserfüllung, rechtliche Verpflichtung, lebenswichtige Interessen, öffentliche Aufgabe, berechtigte Interessen',
      'Betroffenenrechte (Art. 12–22): Auskunft, Berichtigung, Löschung (Recht auf Vergessenwerden), Einschränkung, Datenportabilität, Widerspruch',
      'Meldepflicht bei Datenpannen: innerhalb 72 Stunden an die zuständige Datenschutzbehörde (Art. 33). Bei hohem Risiko auch Betroffene informieren (Art. 34)',
      'TOMs (Art. 32): Technische und Organisatorische Maßnahmen zur Datensicherheit – Verschlüsselung, Pseudonymisierung, Zugriffskontrollen, Backups, Schulungen',
      'Privacy by Design / Privacy by Default (Art. 25): Datenschutz in die Technik einbauen, nicht nachträglich. Standardmäßig minimal Daten erheben',
      'Bußgelder: bis zu 20 Mio. € oder 4 % des globalen Jahresumsatzes (je nachdem, was höher ist)',
    ],
    quiz: [
      {
        q: 'Auf welchen Grundsatz aus Art. 5 DSGVO bezieht sich das Prinzip, nur die für den Zweck notwendigen Daten zu erheben?',
        options: ['Rechtmäßigkeit', 'Zweckbindung', 'Datenminimierung', 'Speicherbegrenzung'],
        correct: 2,
        explanation: 'Datenminimierung (Art. 5 Abs. 1 lit. c): Nur so viele Daten erheben wie für den Verarbeitungszweck unbedingt nötig. Praxisbeispiel bei Vattenfall: Für eine Zählerstandserfassung braucht man keine Geburtsdaten – das wäre überschießend und damit ein Verstoß.'
      },
      {
        q: 'Innerhalb welcher Frist muss eine Datenpanne der Datenschutzbehörde gemeldet werden?',
        options: ['24 Stunden', '48 Stunden', '72 Stunden', '7 Tage'],
        correct: 2,
        explanation: 'Art. 33 DSGVO: Meldung einer Verletzung personenbezogener Daten (Data Breach) beim zuständigen Datenschutzbeauftragten (Aufsichtsbehörde) innerhalb von 72 Stunden nach Bekanntwerden – es sei denn, es ist unwahrscheinlich, dass die Verletzung ein Risiko für Betroffene darstellt.'
      },
      {
        q: 'Welche Rechtsgrundlage erlaubt die Verarbeitung personenbezogener Daten im Rahmen eines Liefervertrags mit einem Kunden?',
        options: ['Einwilligung (Art. 6 Abs. 1 lit. a)', 'Vertragserfüllung (Art. 6 Abs. 1 lit. b)', 'Berechtigte Interessen (Art. 6 Abs. 1 lit. f)', 'Öffentliche Aufgabe (Art. 6 Abs. 1 lit. e)'],
        correct: 1,
        explanation: 'Art. 6 Abs. 1 lit. b: Verarbeitung ist rechtmäßig, wenn sie zur Erfüllung eines Vertrags (oder vorvertraglicher Maßnahmen) notwendig ist. Bei Vattenfall: Kundennamen, Adresse, Zählernummer für die Strom-/Gaslieferung → Vertragserfüllung. Keine zusätzliche Einwilligung nötig.'
      },
      {
        q: 'Was versteht man unter „Privacy by Default"?',
        options: ['Daten werden standardmäßig nie verarbeitet', 'Die datenschutzfreundlichsten Einstellungen sind ab Werk aktiv – Nutzer müssen Datenfreigaben aktiv zustimmen', 'Privacy by Default bedeutet vollständige Anonymität aller Nutzer', 'Es ist ein spezielles Verschlüsselungsverfahren'],
        correct: 1,
        explanation: 'Privacy by Default (Art. 25 Abs. 2): Standardmäßig werden nur die für den jeweiligen Zweck notwendigen Daten verarbeitet. Beispiel: Opt-in statt Opt-out für Newsletter; Profil ist standardmäßig privat. Der Nutzer muss aktiv mehr freigeben – nicht aktiv schützen.'
      },
      {
        q: 'Welches Betroffenenrecht nach DSGVO ermöglicht es einer Person, ihre Daten von einem Anbieter zu einem anderen zu übertragen?',
        options: ['Recht auf Auskunft (Art. 15)', 'Recht auf Löschung (Art. 17)', 'Recht auf Datenportabilität (Art. 20)', 'Recht auf Widerspruch (Art. 21)'],
        correct: 2,
        explanation: 'Art. 20 – Datenportabilität: Betroffene können ihre Daten in einem strukturierten, gängigen, maschinenlesbaren Format erhalten und zu einem anderen Anbieter übertragen (z. B. Spotify-Daten zu Apple Music migrieren). Gilt nur für automatisiert verarbeitete Daten auf Basis von Einwilligung oder Vertrag.'
      },
      {
        q: 'Wie hoch kann das Bußgeld bei schwerwiegenden DSGVO-Verstößen maximal sein?',
        options: ['10.000 €', '1 Mio. €', '10 Mio. € oder 2 % des Umsatzes', '20 Mio. € oder 4 % des globalen Jahresumsatzes'],
        correct: 3,
        explanation: 'Höchststufe (Art. 83 Abs. 5): 20.000.000 € oder 4 % des weltweiten Jahresumsatzes – je nachdem, was höher ist. Niedrigere Stufe (Art. 83 Abs. 4): 10 Mio. € oder 2 % für weniger schwere Verstöße. Bisheriger Rekord: Meta, 1,2 Mrd. € (Irland, 2023).'
      },
    ],
    resources: [
      { title: 'BfDI – Bundesdatenschutzbeauftragter', url: 'https://www.bfdi.bund.de/' },
      { title: 'DSGVO Volltext (EUR-Lex)', url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679' },
      { title: 'IT-Berufe-Podcast – DSGVO für IT-Berufe', url: 'https://it-berufe-podcast.de/' },
    ]
  },
];
