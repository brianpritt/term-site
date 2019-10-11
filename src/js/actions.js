export class Actions{
    static typing (i,tex,location) {
        let prpt = document.getElementById("the-form");
        let n ="";
        prpt.style.display = "none";
        
        // if(tex.charAt(i) == "`"){
        //     console.log(tex.length)
        //     let red = tex.slice(1, tex.length)
        //     red
        //     console.log(red)
        // }
        if(i < tex.length){
            if(tex.charAt(i) === "\\" && tex.charAt(i+1) === "n"){
                n = "<br>"
                i++
            }
            //POC // this is sloppy, clean it up
            
            // else if(tex.charAt(i)==="#"){
            //     n = tex.
            // }
            else if(tex.charAt(i) === "<"){
                for(let x=i; x< tex.length;x++){
                    if(tex.charAt(x+1) === "a"){
                        console.log(i)
                        n = tex.slice(x,tex.indexOf("</a>")+ 4)
                        console.log(x, tex.indexOf("</a>"), n)
                        i=tex.indexOf("</a>"+3);
                        
                        x=tex.length
                        console.log(i, x, tex.indexOf("</a>" +4),tex)
                    }
                    if(tex.charAt(x)=== ">"){
                        n = tex.slice(i,x+1);
                        console.log(n)
                        i=x;
                        x=tex.length;
                        console.log(i)
                    }
                }
            }
            else {
                n = tex.charAt(i)
            }

            document.getElementById(location).innerHTML += n;
            i++;
            setTimeout( ()=>
                 this.typing(i, tex,location), 20)
        }else {
        prpt.style.display = "inline"
        console.log("in")
        }
    }; 
}