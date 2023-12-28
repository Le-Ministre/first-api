let button = document.getElementById('button');
let image = document.getElementById('image');
let pokeNumber = document.getElementById('number');
let pokeName = document.getElementById('name');

const changePokemonName = async () =>{
    let randomNumber = Math.ceil(Math.random() * 150 + 1)

    let requetString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`

    let data = await fetch(requetString)
    console.log(data);

    let reponce = await data.json()
    console.log(reponce);

    image.src = reponce.sprites.front_default;
    pokeNumber.textContent = `#${reponce.id}`;
    pokeName.textContent = reponce.name;
}
changePokemonName();

button.addEventListener('click', changePokemonName)
