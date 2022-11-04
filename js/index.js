function fetchAPI() {
    const fetchRes = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

    fetchRes.then(
        res => res.json()
    ).then(d => {
        console.log(d);
    })
}

const num = ()=>{
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}

num();