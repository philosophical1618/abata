import AbataCitizen from "../AbataCitizen.js";
import Abata from "./Abata.js";

export default class Cypher implements Abata {
    private soldiers : AbataCitizen[];
    private name : string;

    constructor(name: string, soldiers: AbataCitizen[]){
        this.name = name;
        this.soldiers = soldiers;
    }

    do(task : string): void {
        console.log("my name is: " + this.name + " and i am doing " + task)
    }

    atEase(){
        console.log(this.name + ": Llamando soldaditos: ")
        this.soldiers.forEach(element => {
            element.do(element.getName())
        });
    }
}