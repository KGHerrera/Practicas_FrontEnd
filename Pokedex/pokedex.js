const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        //console.log(res);
        return res.json();
    }).then((data) => {
        //console.log(data);
        let pokeImg = data.sprites.front_default;
        let nombre = data.species.name;
        let tipo = data.types[0].type.name;
        let estadisticas = data.stats[0].base_stat;
        let movimiento1 = data.abilities[0].ability.name;
        let movimiento2 = data.abilities[1].ability.name;
        pokeInfo(pokeImg, nombre, tipo, "base stat: " + estadisticas, "abilidad 1: " + movimiento1 + " abilidad 2: " + movimiento2)
    })

}



const pokeInfo = (url, nombre, tipo, estadisticas, movimientos) => {

    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;

    const pokeNombre = document.getElementById("nombre");
    pokeNombre.textContent = nombre;

    const pokeTipo = document.getElementById("tipo");
    pokeTipo.textContent = tipo;

    const pokeEst = document.getElementById("estadisticas");
    pokeEst.textContent = estadisticas;

    const pokeMovi = document.getElementById("movimientos");
    pokeMovi.textContent = movimientos;

}