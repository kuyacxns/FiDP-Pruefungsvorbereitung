# FIDP Prüfungs-Trainer

Prüfungs-Trainer (PWA) für die Ausbildung **Fachinformatiker:in für Daten- und Prozessanalyse** – AP1 & AP2 nach Prüfungskatalog 2025. Vite + React + Tailwind, komplett clientseitig, kein Backend, kein Login.

## Features

- **43 Themen, 250+ Übungsfragen** über alle Prüfungsbereiche (AP1, AP2 Prozess/Daten/WiSo/Projekt) – Fragen und Antwortoptionen werden bei jedem Durchlauf gemischt
- **Wiederholen**: Spaced Repetition nach dem Leitner-System (5 Boxen, Intervalle 0/1/3/7/14 Tage) – falsch beantwortete Fragen kommen automatisch wieder
- **Simulation**: Prüfungsmodus mit Countdown (AP1: 30 Fragen/45 Min., AP2-Bereiche: 20 Fragen/30 Min.), Auswertung nach IHK-Notenschlüssel, Aufschlüsselung nach Themengebiet
- **Rechnen**: generierte Rechenaufgaben mit Rechenweg (Subnetting, Übertragungszeit, Amortisation/ROI/AfA, RAID, Netzplan, Durchlaufzeit/FPY)
- **SQL-Lab**: echte SQL-Abfragen gegen eine Energieversorger-Beispieldatenbank (SQLite via WebAssembly, läuft im Browser), 13 Übungsaufgaben + freier Modus
- **Lernplan & Quellen**: 6-Phasen-Plan bis zur AP2 mit kuratierten Ressourcen
- Tages-Streak, Fortschritts-Export/-Import als JSON, offline nutzbar (PWA)

## Entwicklung

```bash
npm install
npm run dev        # Dev-Server auf http://localhost:5173
npm test           # Unit-Tests (Vitest)
npm run build      # Produktions-Build nach dist/
npm run preview    # Build lokal testen
```

## Projektstruktur

```
index.html            Einstiegspunkt (schlank, lädt src/main.jsx)
src/
  data/               Lerninhalte: ap1.js, ap2Prozess.js, ap2Daten.js,
                      ap2Wiso.js, ap2Projekt.js (Topics mit keyPoints,
                      quiz, resources)
  components/         React-Komponenten (Quiz, Dashboard, ExamView,
                      ReviewView, CalcView, SqlLabView, …)
  lib/                Logik + Tests: storage (localStorage & Migration),
                      leitner (Spaced Repetition), exam (Simulation),
                      calcTasks (Aufgaben-Generatoren), sqlLab (Schema,
                      Übungen, Ergebnisvergleich), shuffle, streak,
                      exportImport
public/               Icons & Favicons
vite.config.js        Vite + vite-plugin-pwa (Service Worker, Manifest)
```

## Fortschritt & Datenhaltung

Der Lernfortschritt liegt im `localStorage` unter dem Key `fidp_progress_v1` (pro Browser/Gerät getrennt). Ältere Datenstände werden beim Laden automatisch auf das aktuelle Schema migriert – nichts geht verloren. Über das Dashboard lässt sich der Fortschritt als JSON-Datei exportieren und auf einem anderen Gerät importieren.

## Deployment (Vercel)

Das Repository ist über `vercel.json` vorkonfiguriert:

- **Build Command:** `npm run build`
- **Output Directory:** `dist`

Repo bei https://vercel.com/new importieren – Vercel erkennt Vite automatisch und deployed bei jedem Push neu.

## Auf das iPhone holen

1. Deployment-URL in **Safari** öffnen
2. Teilen-Symbol → **„Zum Home-Bildschirm“** → **„Hinzufügen“**

Die App startet in Vollbild und funktioniert dank Service Worker auch offline (inkl. SQL-Lab).

## Inhalte ändern

Alle Quiz-Fragen und Themen stehen in `src/data/`. Ein Topic hat die Form:

```js
{
  id: 'eindeutige-id',        // niemals ändern – daran hängt der Fortschritt
  title: '…', icon: '…', summary: '…',
  keyPoints: ['…'],
  quiz: [{ q: '…', options: ['A','B','C','D'], correct: 0, explanation: '…' }],
  resources: [{ title: '…', url: '…' }],
}
```

Viel Erfolg!
