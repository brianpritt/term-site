
import txt from './../init.ini'
export class Initialize{
    constructor(){
        this.author = "",
        this.contact = "",
        this.github = "",
        this.githubLink = "",
        this.about = "",
        this.title = "",
        this.init = ""
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
                console.warn("blsh: init.txt contains invalid property type '" + line[0]+ "'")
            }
        })
    }
}

