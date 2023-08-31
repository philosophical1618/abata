import Enigma from './Enigma.js'

export default class Turing extends Enigma {
    order(strategy){
        this.do(strategy);
    }
}