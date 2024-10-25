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

async function FetchData() {

    try{
        const response = await fetch();
    }

    catch(error){
        console.error(error);
    }
    
}