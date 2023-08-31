//Estructura

/* let Fer = new Cypher("Fer")

let juli = new Enigma("Juli", "GirlOfNox");
let eli = new Enigma("Eli", "StarYuuki");
let barbie = new Enigma("Barbie", "avaMax");

let chip = new Nil("Chip", "el 'que no ves'", [juli, eli, barbie]);

let dana = new Turing();

let nano = new AbataPrototype();

chip.disperse();
dana.do("manzanas"); */




//Generacion de objetos

import AbataCitizen from "./classes/AbataCitizen.js";
import EnigmaCitizen from "./classes/EnigmaCitizen.js";
import TheGrid from "./classes/TheGrid.js";

const teamsito = new TheGrid();

console.log(teamsito.createAbataCitizen("chipsito").name())

const chip = new TheGrid();

console.log(chip.createAbataCitizen("avamax").codename())

