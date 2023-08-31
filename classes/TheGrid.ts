import AbataCitizen from "./AbataCitizen.js";

export default class TheGrid {
    createAbataCitizen(name: string){
        return new AbataCitizen(name);
    }
}