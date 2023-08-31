import Abata from './Abata.js';

export default class Dot implements Abata {
   do(text: string){
    console.log("Hola tu texto fue el siguiente: " + text + "para confirmar no presione nada \n\n");
   }
}