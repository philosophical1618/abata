import Abata from "./Abata.js";

/**
 * Represents a Cypher: a major of the grid
 */
export default class Cypher extends Abata {
    /**
     * Create a Cypher
     * @param {Abata[]} factions - an Array of abatas
     */

    constructor(soldiers){
        super()
        this.soldiers = soldiers
    }

    move(){
        console.log("Moving sir");
    }

    attack(){
        console.log("Fire up and good to go!");
    }

    atEase(){
        this.move()
        this.attack()
    }
}