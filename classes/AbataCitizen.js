export default class AbataCitizen {
    constructor(name){
        this.name = name;
    }

    get name(){
        return this.name;
    }

    plays(game){
        console.log('im playing ' + game)
    }
}