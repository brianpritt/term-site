//this is silly, but this class is pretty much a made up markdown language so i could parse thing from my .ini files the way i wanted to.
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