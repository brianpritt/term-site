import './styles.css';
import 'materialize-css';

import { Session } from "./js/session";
import { Initialize } from "./js/initialize";
import { Actions } from "./js/actions";

document.addEventListener("DOMContentLoaded", () => {
  let initialize = new Initialize;
  initialize.getInitFile(); 
  
  let thisSession = new Session;
  Actions.typing(0,initialize.init,"output")
  
  document.onkeydown = function(key){  
    thisSession.keyDirection = key.keyCode
    if((thisSession.keyDirection === 38)|| thisSession.keyDirection === 40){
      document.getElementById("black").value = thisSession.keyCommands()
    }
  }
  
  document.getElementById("bla").addEventListener("click", function(event){
    event.preventDefault()
    thisSession.curCom = document.getElementById("black").value.toLowerCase();

    if(thisSession.getCommand()[1] == "`"){
      let com = thisSession.getCommand()
      let jsCom = com.slice(2, com.length-1)
      Actions.JsCommand(jsCom);
    }
    else{
      var retu = " " +thisSession.curCom+ " :  " + thisSession.getCommand();
      var node = document.createElement("BR");
      var out = document.getElementById("output");
      
      node.style.display = "hide"
      let x = Actions.typing(0, retu, "output")
      
      out.appendChild(node, node);
    }
    document.getElementById("black").value = "";
  });
});   