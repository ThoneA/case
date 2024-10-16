# Bilforsikring

## Oppgave 2: Sikkerhet og Personvern

I dagens digitale verden er det viktig å ivareta sikkerhet når man jobber med persondata. For å ivareta sikkerhet og personvern i denne løsningen bør utviklere sørge for at:

- **Kommunikasjon:** All kommunikasjon mellom frontend og backend skjer over **HTTPS** og ikke **HTTP** for å beskytte data mot avlytting og manipulering.
  
- **Håndtering av sensitiv informasjon:** Sensitiv informasjon bør ikke hardkodes i frontend-koden, men hentes sikkert fra et API.

- **Autentisering og autorisasjon:** Disse må implementeres riktig slik at bare autoriserte brukere har tilgang til nødvendig data.

- **Beskyttelse mot XSS:** Selv om det ikke er tekstinput fra brukeren, bør utviklere beskytte mot Cross-Site Scripting (XSS) ved å validere og sikre all data som vises på siden, spesielt fra eksterne kilder.

## Oppgave 3: Universell Utforming

Staten stiller krav til at digitale løsninger skal være universelt utformet. Utviklere og designere bør ta hensyn til brukere med ulike behov for å sikre universell utforming. Her er noen viktige punkter på hva jeg mener utviklere og designere bør tenkte på:

1. **Kontrast:** 
   - Sørge for tilstrekkelig kontrast mellom tekst og bakgrunn for bedre lesbarhet. For eksempel kunne den grønne bakgrunnen vært mørkere for å skape større kontrast mot de hvite tekstboblene.

2. **Fargevalg:** 
   - Fargevalgene bør være nøye vurdert slik at informasjon også er tilgjengelig for brukere med fargeblindhet. Unngå å bruke farger som rødt og grønt i kombinasjon for å formidle viktig informasjon.

3. **Responsivt design:** 
   - Det er essensielt at designet er responsivt, slik at det fungerer godt på ulike enheter og muliggjør enkel skalering av innholdet for brukere med nedsatt syn. Dette kan oppnås ved å bruke fleksible CSS-verdier.

4. **Forbedret brukervennlighet:**
   - Gjør radioknappene enklere å bruke ved å la hele blokken være klikkbar, ikke bare den lille sirkelen. Dette vil gjøre det lettere for brukerne å velge alternativene.


