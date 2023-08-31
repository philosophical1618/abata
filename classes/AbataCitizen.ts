import Abata from "./level0/Abata";

export default class AbataCitizen implements Abata{
    private name : string;
    constructor(name : string){
        this.name = name;
    }

    do(task: string){
        console.log(task)
    }

    public getName(){
        return this.name;
    }

    public plays(game : string){
        console.log('im playing ' + game)
    }
}