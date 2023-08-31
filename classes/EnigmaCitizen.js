export default class EnigmaCitizen {
    codename
    constructor(codename){
        this.codename = codename;
    }

    codename(){
        return this.codename;
    }

    attack(abataCitizen){
        console.log('attacking ' + abataCitizen.getName())
    }
}