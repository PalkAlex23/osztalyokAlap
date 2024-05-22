import Pokemon from "./Pokemon.js";

const pokemon = new Pokemon(
  "Ditto",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  $(".pokemonok")
);

const pokemon2 = new Pokemon(
    "Lucario",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png",
    $(".pokemonok")
);

const pokemon3 = new Pokemon(
    "Eevee",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    $(".pokemonok")
);

pokemon.beszel();
console.log(pokemon.nev);
console.log(pokemon.mondat);
pokemon.harciero = 2;
delete pokemon.nev;
console.log(pokemon.harciero);
console.log(pokemon);

/* privát adattagok elérése getter-el */
pokemon.mondat = "Szép napunk van!";
pokemon.beszel();
