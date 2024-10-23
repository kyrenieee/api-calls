fetch('https://api.harvardartmuseums.org')
    .then(res => {
        if(res.ok){
            console
        }
        res.json()
    })
    .then(data => console.log(data))

