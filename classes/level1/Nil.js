import Enigma from "./Enigma.js";

export default class Nil extends Enigma{
    constructor(generals){
        super()
        this.generals = generals
    }

    disperse(){
        this.generals.forEach(g => {
            g.order();
        });
        console.log("Message rallied to Dot")
    }
}