export class Session{
    constructor(){
        this.keyDirection = 0;
        this.count = 1
        this.curCom = "";
        this.prevCom = [];
    } 
    getCommand(){
        this.prevCom.push(this.curCom);
        this.count = 1;
        return this.curCom == "about" ? "Copyleft GPLv3 2019 | for more options type 'help'<br>"

        :this.curCom =="contact" ? "contact: <br><a href='mailto:brianpritt@gmail.com'>brianpritt@gmail.com </a><br><a href='https://github.com/brianpritt'>GitHub</a><br>"
        
        :this.curCom =="help" ? "Available this.commands: about, contact, help<br>"

        :this.curCom == "clear" ? document.getElementById("output").innerHTML = ""

        :this.curCom == "games" ? "<li>Chess</li><li>Poker</li><li>Fighter Combat</li><li>Guerrilla Engagement</li><li>Desert Warfare</li><li>Air-To-Ground Actions</li><li>Theaterwide Tactical Warefare</li><li></li> <li>Theaterwide Biotoxic and Chemical Warfare</li><li></li><li>Global Thermonuclear War</li><br>"

        :this.curCom == "global thermonuclear war" ? "Wouldn't you prefer a nice game of chess?<br>"
        : "invalid command<br>";
    }
    // how can this be more precise?
    keyCommands(){ 
        console.log(this.keyDirection)
        
        if(this.keyDirection === 38){
            let ret = this.prevCom[this.prevCom.length - this.count];
            this.count++;
            if (this.count >= this.prevCom.length){
                this.count = this.prevCom.length;
            }
            if(this.count <=1){
                return "";
            }
            return ret;
        }
        if(this.keyDirection === 40){
            this.count--;
                if (this.count < 1){
                this.count = 1;
                return "";
            }
            let ret = this.prevCom[this.prevCom.length- this.count];
        return ret;
        }
    }
    
}
