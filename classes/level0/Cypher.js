import Abata from "./Abata";

/**
 * Represents a Cypher: a major of the grid
 */
export default class Cypher extends Abata {
    /**
     * Create a Cypher
     * @param {Abata[]} factions - an Array of abatas
     */

    constructor(factions){
        factions = []
    }

    move(f){
        f.eat();
        console.log("Moving sir");
    }

    attack(f){
        f.sleep()
        console.log("Fire up and good to go!");
    }

    atEase(f){
        this.move(f)
        this.move(f)
    }
}