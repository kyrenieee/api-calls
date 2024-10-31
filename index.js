console.log("JavaScript loaded successfully!");

async function fetchData() {
  const pokemon = document.getElementById("Pokemons").value.toLowerCase();

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("PokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } 
    catch (error) {
    console.error(error);
    }
}


function PrevPage() {

}

function NextPage() {
  
}