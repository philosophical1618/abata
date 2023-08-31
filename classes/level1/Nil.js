import { Enigma } from "./Enigma";

export class Nil extends Enigma{
    constructor(generals){
        generals = []
    }

    disperse(g){
        g.order();
        console.log("Message rallied to Dot")
    }
}