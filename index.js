//fetch("https://theaxolotlapi.netlify.app/")
//    .then(response => {
//
//        if(response.ok){
//            throw new Error("Could not fetch resource.");
//        }
//        return response.json();
//    })
//    .then(data => console.log(data))
//    .catch(error => console.error(error)); 

FetchData();
async function FetchData() {

    try{
        const Pokemon = document.getElementById("Pokemons").value.toLowerCase;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`);
        

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const PokemonSprite = data.sprites.front_default;
        const ImgElement = document.getElementById("PokemonSprite");

        ImgElement.src = PokemonSprite;
        ImgElement.style.display = "block";
    }

    catch(error){
        console.error(error);
    }
    
}