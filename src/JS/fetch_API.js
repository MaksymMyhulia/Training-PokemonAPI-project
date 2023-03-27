import  pokemonCardTpl  from '../templates/pokemon-card.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener("submit", onSearch);

function onSearch(event){
    event.preventDefault();

    const form = event.currentTarget;
    const searchQuery = form.elements.query.value
if(searchQuery){
    API.fetchPokemon(searchQuery)
  .then(renderPokemonCard)
  .catch(onFetchError)
  .finally(() => form.reset())
} else { 
    refs.cardContainer.innerHTML = "";
    Notify.info("Please, enter ID or name of pokemon!")
}
}

function renderPokemonCard(pokemon) {
    const markup = pokemonCardTpl(pokemon);
    refs.cardContainer.innerHTML = markup;
}

function onFetchError() {
    Notify.failure("Oops, something went wrong, we didn't find that pokemon!");
}

