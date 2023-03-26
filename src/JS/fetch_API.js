import  pokemonCardTpl  from '../templates/pokemon-card.hbs';
import  { refs }  from './refs.js';

fetch ("https://pokeapi.co/api/v2/pokemon/23")
.then(responce => {
    return responce.json();
})
.then(pokemon => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon);
    refs.cardContainer.innerHTML = markup;
})
.catch(error => {
    console.log(error);
});
