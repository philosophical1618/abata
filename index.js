import Cypher from "./classes/level0/Cypher.js";
import Nil from "./classes/level1/Nil.js";
import Dot from "./classes/level0/Dot.js";
import Enigma from "./classes/level1/Enigma.js";
import Turing from "./classes/level1/Turing.js";

let Fer = new Cypher("Fer")

let juli = new Enigma("Juli", "GirlOfNox");
let eli = new Enigma("Eli", "StarYuuki");
let barbie = new Enigma("Barbie", "avaMax");

let chip = new Nil("Chip", "el 'que no ves'", [juli, eli, barbie]);

let dana = new Turing();

chip.disperse();
dana.do("manzanas");
