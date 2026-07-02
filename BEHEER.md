# Website beheren — handleiding voor beheerders

Deze website beheer je zonder technische kennis via **Pages CMS**: een webomgeving
met invulformulieren. Alles wat je daar opslaat, staat binnen ± 2 minuten live op
[ow.curaict.nl](https://ow.curaict.nl) — publiceren gaat vanzelf.

## Eenmalig: toegang krijgen

1. Maak een gratis account op [github.com](https://github.com) (als je dat nog niet hebt).
2. Vraag de websitebeheerder je uit te nodigen voor de repository
   `TCI-ARUC/OndernemendWeststellingwerf` en accepteer de uitnodiging (komt per e-mail).
3. Ga naar [app.pagescms.org](https://app.pagescms.org), log in met je GitHub-account
   en kies de website. Je ziet dan links een menu met alle bewerkbare onderdelen.

## Wat kun je bewerken?

| Onderdeel | Wat het is |
|---|---|
| **Agenda** | Bijeenkomsten en evenementen. Nieuw item = knop "Add entry". Verlopen items verdwijnen automatisch van de site; je hoeft ze niet te verwijderen. |
| **Nieuws** | Nieuwsartikelen en verslagen. Vink "Uitgelicht" aan om een artikel bovenaan de nieuwspagina te zetten. |
| **Instellingen** | Het ledenaantal, e-mailadres en de links (ledenportaal, aanmelden). Het ledenaantal pas je hier op **één plek** aan — de hele site rekent ermee. |
| **Lidmaatschappen** | De drie pakketten (Basis / Connect / Groei) met prijzen en inhoud. Wijzigingen verschijnen op de homepage én de lidmaatschapspagina tegelijk. |
| **Smoelenboek** | De getoonde leden (tijdelijk, tot de koppeling met de ledenadministratie). |
| **Homepage / Over ons / Bedrijventerreinen** | Alle teksten van die pagina's. |

Na het bewerken klik je op **Save** — meer is het niet. Even later staat het live.

## Spelregels

- **Prijzen en pakketten**: alleen aanpassen na een ALV- of bestuursbesluit.
  De prijzen zijn exclusief btw; vermeld dat er altijd bij.
- **Afbeeldingen**: verklein foto's vóór het uploaden tot maximaal ± 200 KB en
  ± 1600 pixels breed (bijvoorbeeld via [squoosh.app](https://squoosh.app)).
  Te grote bestanden maken de site traag.
- **Geen vertrouwelijke informatie**: niets uit bestuursvergaderingen, notulen,
  financiën of ledenmutaties op de site zetten. Bij twijfel: eerst overleggen.
- **Volgorde van "krachten" en "diensten"** niet herschikken — de volgorde bepaalt
  de kleuren en iconen. Teksten wijzigen mag natuurlijk wel.
- De website is **B2B** (voor ondernemers); consumentencommunicatie hoort bij
  Stiekm Trots.

## Veelgestelde vragen

**Ik heb opgeslagen maar zie het nog niet op de site.**
Publiceren duurt 1 à 2 minuten. Vernieuw daarna de pagina met Ctrl+F5.
Nog steeds niets? Kijk op de GitHub-pagina van de repository onder "Actions"
of er een rode ✗ staat en meld het bij de websitebeheerder.

**Ik heb iets verkeerd opgeslagen.**
Geen paniek: elke wijziging wordt bewaard in de geschiedenis (git). De
websitebeheerder kan elke eerdere versie terugzetten.

**Iets kan niet via Pages CMS?**
De vormgeving, kleuren en pagina-indeling zijn bewust niet bewerkbaar — daarvoor
neem je contact op met de websitebeheerder.

## Voor de technisch beheerder

- Bewerkbare content staat in `src/content/` (agenda & nieuws, markdown) en
  `src/data/*.json` (overige teksten). De velden zijn beschreven in `.pages.yml`.
- Nieuwe beheerder toevoegen: uitnodigen als collaborator (rol "Write") op de
  GitHub-repository; daarna kan diegene inloggen op app.pagescms.org.
- Lokaal bouwen: `npm install && npm run build`. Deploy verloopt automatisch via
  GitHub Actions naar GitHub Pages (zie `.github/workflows/deploy.yml`).
