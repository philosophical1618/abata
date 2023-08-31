import Cypher from "../level0/Cypher.js";

export default class Enigma extends Cypher {
    constructor(name = "Turing", codename = "basura"){
        super(name)
        this.codename = codename
    }

    order(strategy){
        this.do(strategy)
        
    }
}