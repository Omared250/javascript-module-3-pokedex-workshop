import { getAllPokemon , getOnePokemonSprite } from './api.js';


 async function init() {
    const root = document.getElementById('root');
    root.textContent = "Hello world again!";
    const newStuff = document.createElement('p');
    root.appendChild(newStuff);

    const pokemon = await getAllPokemon();
    console.log(pokemon);
    
    pokemon.forEach(async ({ name, url }) => {
        const newPokemon = document.createElement('div');
        const pokemonLink = document.createElement('a');
        pokemonLink.href = url;
        pokemonLink.textContent = name;
        newPokemon.appendChild(pokemonLink);
        root.appendChild(newPokemon);

        
        const spriteUrl = await getOnePokemonSprite(url);
        console.log(spriteUrl);
        const pokemonImage = document.createElement('img')
        pokemonImage.src = spriteUrl;
        newPokemon.appendChild(pokemonImage)
    });

    // const spriteUrl = await getOnePokemonSprite();
    // console.log(spriteUrl);

    // pokemon.forEach(async ({front_shiny}) => {
    //     const pokemonImage = document.createElement('img')
    //     pokemonImage.src = front_shiny;
    //     newPokemon.appendChild(pokemonImage);
    // });

    // spriteUrl.forEach(({front_shiny}) => {
    //     // const pokemonImage = document.createElement('img')
    //     // pokemonImage.src = front_shiny;
    //     // newPokemon.appendChild(pokemonImage);
    // });

    //here we will use the sprite url to create an image
}

init();