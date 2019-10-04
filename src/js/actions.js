export class Actions{
    static typing(i,tex,location){
        let n =""
        if(tex.charAt(i) == "`"){
            console.log(tex.length)
            let red = tex.slice(1, tex.length)
            red
            console.log(red)
        }
        else if(i < tex.length){
            if(tex.charAt(i) === "\\" && tex.charAt(i+1) === "n"){
            n = "<br>"
            i++
            }
            else if(tex.charAt(i) === "<"){
            for(let x=i; x< tex.length;x++){
                if(tex.charAt(x+1) === "a"){
                n = tex.slice(x,tex.indexOf("</a>"))
                i=tex.indexOf("</a>" +4);
                x=tex.length
                }
                if(tex.charAt(x)=== ">"){
                n = tex.slice(i,x+1);
                console.log(n)
                i=x;
                x=tex.length;
                }
            }
            }
            else {
            n = tex.charAt(i)
            }
            document.getElementById(location).innerHTML += n;
            i++;
            setTimeout(()=> this.typing(i, tex,location), 20)
            }
        document.getElementById(location).style.display = "inline  "
        }; 
}