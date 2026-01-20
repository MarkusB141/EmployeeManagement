# Employee Management - Layered Architecture
Das Projekt entstand im Rahmen für Vorbereitungen auf eine Prüfung.
Ziel war es, praktische Erfahrung in Softwarearchitektur, Clean Code und der Verwendung von Local Storage zu sammeln.

## Lernziele
- Umsetzung einer sauberen Layered Architecture
- Separation of Concerns
- Einsatz Dependency Injection
- Arbeiten mit localStorage
- Fokus auf Clean Code (KISS-Prinzip)

## Projektbeschreibung
Die Anwendung ermöglicht es eine Mitarbeiter-Liste (Vorname, Nachname, Rolle, Gehalt). Mitarbeiter können erstellt, bearbeitet und gelöscht werden.

 Jeder Mitarbeiter erhält eine eindeutige ID, die auf einen Zähler im Local Storage verwaltet wird.
Der Fokus liegt auf klarer Struktur und wertbarem Code.

## Die Architektur
Die Architektur basiert auf einer einfachen Layered Architecture:

Presentation Layer (View) 
-> Service Layer (Model) 
-> Infrastructure Layer (DAO)

Die obere Schicht greift auf die darunterliegende Schicht zu, jedoch nicht umgekehrt. Durch Dependency Injection sind die Layer entkoppelt und können bei Bedarf einfach getauscht oder erweitert werden. 

## Technologien & Tools
Programmiersprache: JavaScript
Versionsverwaltung: Git
Plattform: GitHub
Entwicklungsumgebung: VS Code
Presistenz: localStorage