import $ from'jquery';
import txt from './../init.txt'
export class Initialize{
    constructor(){
        this.author = "",
        this.contact = "",
        this.gitHub = "",
        this.about = "",
        this.title = ""
    }
    getInitFile(){
        let initInfo = txt.split("\n");
        let that = this;
        initInfo.forEach(function(item){
            let line = item.split(":");
            if(that.hasOwnProperty(line[0])){
                that[line[0]] = line[1]
            }
            else{
                console.warn("init.txt contains invalid property type '" + line[0]+ "'")
            }
        })
    }
}

