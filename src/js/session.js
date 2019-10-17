import txt from './../commands.ini'
export class Session{

    constructor(){
        this.keyDirection = 0;
        this.count = 1
        this.curCom = "";
        this.prevCom = [];
        this.comms = this.makeCommandArray();
    } 
    makeCommandArray(){
        let com = txt.split("\n");
        let ret = [];
        com.forEach(function(item){
            ret.push(item.split("~"))
        })
        return ret;
    }
    getCommand(){
        console.log(this.comms)
        let ret = ""
        this.comms.forEach((item => {
            if(this.curCom.includes(item[0])){
                ret = item[1]
            } 
        }))
        this.prevCom.push(this.curCom)
        return ret;
    }
    // how can this be more precise?
    keyCommands(){
        let ret = ""
        
        console.log(this.keyDirection)
        if(this.keyDirection === 38){
            console.log(this.count, this.prevCom.length)
            }
            ret = this.prevCom[this.prevCom.length - this.count];
            this.count++;
            if (this.count >= this.prevCom.length){
                this.count = this.prevCom.length;
                
            if(this.count <=1){
                ret = "";
            }
            
        }
        if(this.keyDirection === 40){
            console.log(this.count, this.prevCom.length)
            console.log(this.count)
            this.count--;
                if (this.count <= 1){
                    this.count = 1;
                    ret =  "";
                }
            ret = this.prevCom[this.prevCom.length- this.count];
     
        }
    return ret;
    }
}
