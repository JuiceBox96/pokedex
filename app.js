


const poke_container = document.getElementById ('poke-container');
const pokemon_count = 150
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

//AJAX Function to GET Poke API - https://rapidapi.com/lduran2@gmail.com/api/pokedex2/

const fetchPokemons = async () => {
    for (let i = 1; 1 <= pokemon_count; i++) {
        await getPokemon(i)
    }
}
const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
};

function createPokemonCard(pokemon){
	const pokemonEl = document.createElement('div')
	pokemonEl.classList.add('pokemon')
  
	let idSecondDigit = () => {
	   if (pokemon.id <= 9) {
		  return 0
	   } else if (pokemon.id >= 100) {
		  return ''
	   } else {
		  return ''
	   }
	}
  
	let idThirdDigit = () => {
	   if (pokemon.id >= 100) {
		  return ''
	   } else {
		  return 0
	   }
	}
  
	pokemonInnerHTML = `
	<div class="img-container">
	   <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idThirdDigit()}${idSecondDigit()}${pokemon.id}.png" alt="">
	</div>
	<div class="info">
	   <span class="number">#001</span>
	   <h3 class="name">Bulbasaur</h3>
	   <small class="type">Type: <span>Grass</span></small>
	</div>`
  
	pokemonEl.innerHTML = pokemonInnerHTML
  
	poke_container.appendChild(pokemonEl)
 }

fetchPokemons()