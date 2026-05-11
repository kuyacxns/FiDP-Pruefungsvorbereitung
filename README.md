# FIDP Prüfungs-Trainer · Static HTML Version

Ein einzelner Ordner – fertig. Genauso einfach hochzuladen wie BytePost.

## Auf Vercel deployen

1. Gehe zu **https://vercel.com/new**
2. Statt „Import Git Repository" wähle **„Other" → „Deploy a static site"**, oder einfach den **gesamten Inhalt dieses Ordners** (nicht den Ordner selbst, sondern alle Dateien darin) in das Drag-and-Drop-Feld ziehen
3. Projektname wählen (z. B. `fidp-trainer`) → **Deploy**

Nach ~30 Sekunden hast du deine URL: `https://fidp-trainer-xxxx.vercel.app`

## Auf das iPhone holen

1. Vercel-URL in **Safari** öffnen (wichtig: nicht Chrome)
2. Teilen-Symbol → **„Zum Home-Bildschirm"**
3. **„Hinzufügen"**

Das App-Icon erscheint am Home-Bildschirm. Tippen startet die App in Vollbild – keine Browser-UI.

## Lokal testen vor dem Upload

Doppelklick auf `index.html` reicht **nicht** (Service Worker und Manifest brauchen einen Server). Stattdessen im Terminal:

```bash
cd /Pfad/zum/fidp-html
python3 -m http.server 8000
```

Dann http://localhost:8000 öffnen. Funktioniert auf dem MacBook auch ohne Node.js.

## Was drin ist

| Datei | Zweck |
|---|---|
| `index.html` | Die komplette App – React + alle Inhalte inline |
| `manifest.webmanifest` | PWA-Manifest (App-Name, Icons, Theme) |
| `sw.js` | Service Worker für Offline-Funktion |
| `icon-*.png`, `apple-touch-icon-*.png` | App-Icons in allen Größen |
| `favicon.svg`, `favicon-*.png` | Browser-Tab-Icons |

## Wie funktioniert das technisch?

Die `index.html` lädt zur Laufzeit von Public-CDNs:
- **React 18** & **ReactDOM** (für die UI-Komponenten)
- **Tailwind CSS** (für das Styling)
- **Babel Standalone** (kompiliert das JSX direkt im Browser)
- **Google Fonts** (Fraunces, Inter, JetBrains Mono)

Der Service Worker (`sw.js`) cached alle Ressourcen beim ersten Aufruf – ab dem zweiten Start funktioniert die App auch ohne Internet.

Dein Fortschritt landet im `localStorage` deines Geräts (pro Browser/Gerät getrennt).

## Inhalte ändern

Alle Quiz-Fragen, Themen, Lernplan-Phasen und Quellen stehen in `index.html` in den Konstanten `AP1_TOPICS`, `AP2_PROZESS`, `AP2_DATEN`, `AP2_WISO`, `AP2_PROJEKT`, `phases` und `resourceGroups`. Suche nach `AP1_TOPICS = [` und du bist in der Inhaltszone.

Nach Änderungen einfach den Ordner wieder zu Vercel ziehen (auf der gleichen Projekt-Seite gibt es „Deploy a new version") – oder Vercel CLI nutzen:
```bash
npx vercel --prod
```

## Service Worker zurücksetzen

Falls Änderungen nicht sichtbar werden (alter Cache):
- iOS: Einstellungen → Safari → Verlauf und Websitedaten löschen
- macOS Safari: Entwickler-Menü → Cache leeren

Oder einfach in Vercel ein neues Deployment machen – `CACHE_VERSION` in `sw.js` hochzählen (z. B. `'fidp-v2'`) erzwingt einen Cache-Refresh.

Viel Erfolg!
