console.log("JavaScript loaded successfully!");

async function fetchData() {
  const pokemon = document.getElementById("Pokemons").value.toLowerCase();
  console.log(pokemonSprite)
  try {
// website/type/pokemon/atrib/moreatrib
    const jkl = pokemon ? pokemon : "pikachu";
    //condition ? exprIfTrue : exprIfFalse0
    console.log("sdfdfdf", jkl);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${jkl} `);
    

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
  
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const pokemonData = data.stats;
    const imgElement = document.getElementById("PokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    document.body.getElementById("PokemonStat")=pokemonData;

  } 
    catch (error) {
    console.error(error);
    }
}

let link = document.getElementsByClassName("link");

let currentValue = 1;

function ActiveLink() {
  for(l of link) {
      l.classList.remove("active");
    }

    event.target.classList.add("active");
    currentValue = event.target.value;
}

function PrevPage() {

}

function NextPage() {
  
}