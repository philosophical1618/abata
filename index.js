import Cypher from "./classes/level0/Cypher.js";
import Nil from "./classes/level1/Nil.js";
import Enigma from "./classes/level1/Enigma.js";
import Turing from "./classes/level1/Turing.js";

let chip = new Nil([new Turing()]);

chip.disperse();
