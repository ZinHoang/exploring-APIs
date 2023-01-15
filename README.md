# Exploring APIs !

Let's explore the world of APIs and choose your own adventure. 

Existing APIs and components serve as examples for you. Feel free to remove or replace them with your APIs of interest.

## Setup

### Cloning and installation
- Clone this repo, navigate to it, install packages, and start the server with `npm run dev`

  <details style="padding-left: 2em">
    <summary>Tip</summary>

    ```sh
    cd exploring-APIs
    npm i
    npm run dev
    ```
  </details>
### Choosing an API

- Choose an API to work with
  <details style="padding-left: 2em">
    <summary>Tips</summary>
    
    * If you choose an API that enforces CORS, you'll need to consume that API from your server-side, and consume your own API from the client-side (i.e. using your server as a proxy).
    * If you choose an API that requires a key or other authentication token, you will need to create a .env (to keep your key hidden from git).
  </details>

## API Suggestions

If you're not sure where to start, you can use one of the APIs listed below. 

<details>
  <summary>Simple APIs (no API key required or CORS restrictions)</summary>

  * https://www.boredapi.com: suggest a random activity
  * https://dog.ceo/api: dog pictures
  * https://randomfox.ca/floof: random fox pictures
  * https://pokeapi.co/docs/v2: Pokémon
  * https://swapi.dev: Star Wars
  * https://disneyapi.dev/docs: Disney characters
  * https://open-meteo.com/: weather
  * https://wheretheiss.at/w/developer: get the latitude and longitude of the International Space Station
  * https://eda-te-reo.herokuapp.com: whakataukī (Māori proverbs) and their translations
</details>
<br />

<details>
  <summary>APIs with CORS restrictions (serverside proxy required)</summary>

  * https://www.affirmations.dev: positive affirmations/quotes
  * https://openlibrary.org/developers/api: books
</details>
<br />

<details>
  <summary>API key required (.env file)</summary>

  * https://www.omdbapi.com: movies
  * https://thecatapi.com: cat pictures
  * https://developer.marvel.com: Marvel comics
  * https://the-one-api.dev: Lord of the Rings
  * https://www.tepapa.govt.nz/learn/research/datasets/collections-api Te Papa Collections
  * https://data.rijksmuseum.nl/object-metadata/api: Rijksmuseum (art)
  * https://opendata.metlink.org.nz: Metlink (Wellington public transport)
  * https://dev-portal.at.govt.nz: Auckland Transport
  * https://docs.opencollective.com/help/contributing/development/api: GraphQL
</details>
<br />

<details>
  <summary>API Collections</summary>

  * https://api.nasa.gov: a library of APIs from NASA (picture of the day, natural event tracker, etc.)
  * https://github.com/public-apis/public-apis: a LOT of APIs (inaccurate in places, use this to help start your search but you'll have to investigate the APIs themselves, and please note that a few of them may have triggering or NSFW content, so please proceed with care)
</details>

