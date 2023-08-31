import EnigmaCitizen from "./EnigmaCitizen.js";
import AbataCitizen from "./AbataCitizen.js";

export default class TheGrid {
    createEnigmaCitizen(codename){
        return new EnigmaCitizen(codename);
    }

    createAbataCitizen(name){
        return new AbataCitizen(name);
    }
}