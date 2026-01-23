# Fördjupad frontendutveckling - Labb 1 (React och Typescript)
Detta projekt är en enkel React-applikation byggd med Typescript. webbplatsen representerar ett intresse, filmer, och visar en lista med några favoriter.

## Tekniker
- Vite
- React
- Typescript
- CSS (komponentspecifik styling)

## Komponenter
- Header - Titeln skickas som prop till parent (App).
- Hero - Bild som importeras till Header.
- Footer-  Rubrik och text skickas som prop till parent (App).
- MovieCardList - Innehåller en array med filmobjekt. Använder map() för att iterera över listan och skapa ett MovieCard för varje film.
- MovieCard - Tar emot filmens data via props (name, year, director, isBasedOnTrueStory) och skriver ut informationen i ett kort. 

## Publicerad version
Projektet har publicerats på Vercel och finns på denna url: https://first-lab-iota.vercel.app