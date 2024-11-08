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

    const statElement = document.getElementById("PokemonList");
    const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');

    statElement.innerHTML = `
      <li>Name: ${data.name}</li>
      <li>Type: ${types}</li>
      <li>Height: ${data.height}</li>
      <li>Weight: ${data.weight}</li>
    `;

  } 
    catch (error) {
    console.error(error);
    }
}
