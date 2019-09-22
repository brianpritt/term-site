import txt from './../commands.txt'
export class Session{

    constructor(){
        this.keyDirection = 0;
        this.count = 1
        this.curCom = "";
        this.prevCom = [];
        this.comms = this.makeCommandArray();
    } 
    makeCommandArray(){
        console.log(txt);
        let com = txt.split("\n");
        let ret = [];
        com.forEach(function(item){
            ret.push(item.split(":"))
        })
        console.log(ret);
        return ret;
    }
    getCommand(){
        let that = this;
        let ret = ""
        that.comms.forEach(function(item){
            if(that.curCom.includes(item[0])){
                console.log(item[1])
                ret = item[1]
            } 
        })
        return ret;
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
