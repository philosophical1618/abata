export default class Abata {
    constructor(name = 'Dot'){
        this.name = name;
    }
    do(text){
        console.log(this.name + " says: " + text)
    }
}