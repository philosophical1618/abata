import Enigma from "./Enigma.js";
import Turing from "./Turing.js";

export default class Nil extends Enigma{
    constructor(name = "Nil", strategy = "nada", generals){
        super(name)
        this.strategy = strategy
        this.generals = generals
    }

    disperse(){
        if(Array.isArray(this.generals)){
            this.generals.forEach(g => {
                g.order(this.strategy);
            });
        }

        (new Turing()).order(this.strategy)
    }
}