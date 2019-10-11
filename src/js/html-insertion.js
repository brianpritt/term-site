export class Insertions{
    constructor(tag)
    {
        this.a = ["<a>","</a>"]
        this.br = ["<br>", "</br>"]
    }
    insert(md){
        if(this.hasOwnProperty(md)){
            return this[md]
        }
        else{
            console.log("I'm sorry Dave, I'm afraid I can't do that.");
            
        }
    }
}