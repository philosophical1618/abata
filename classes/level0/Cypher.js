import Abata from "./Abata.js";
import Dot from "./Dot.js";

export default class Cypher extends Abata {

    constructor(name = "Cypher", soldiers){
        super()
        this.soldiers = soldiers
    }

    atEase(){
        if(Array.isArray(this.soldiers)){

            this.soldiers.do("nothing")
        }

        (new Dot()).do();
    }
}