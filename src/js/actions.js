export class Actions{
    static typing (i,tex,location) {
        let prpt = document.getElementById("the-form");
        let n ="";
        prpt.style.display = "none";
        if(i < tex.length){
            //have this look for any element
            if(i === tex.indexOf("<br>", i-1)){
                n = "<br>";
                i+=4;
            }
            else if(i === tex.indexOf("<a",i)){
                let end = tex.indexOf("</a>", i);
                n = tex.slice(i,end+4);
                i = end+4;
            }
            else {
                n = tex.charAt(i)
                i++;
            }
            document.getElementById(location).innerHTML += n;
            setTimeout( ()=>
                 this.typing(i, tex,location), 20)
        }else {
        prpt.style.display = "inline"
        }
    };
    static JsCommand(comm)
    {
        eval(comm)
    } 
}