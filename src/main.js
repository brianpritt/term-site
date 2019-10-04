import './styles.css';
import 'materialize-css';

import { Session } from "./js/session";
import { Initialize } from "./js/initialize";
import { Actions } from "./js/actions";
document.addEventListener("DOMContentLoaded", () => {
  //build init obj
  let initialize = new Initialize;
  initialize.getInitFile(); 
  

  //build ses obj
  let thisSession = new Session;
  Actions.typing(0,initialize.init,"output")
  //attach event listener to arrow keys
  document.onkeydown = function(key){  
    thisSession.keyDirection = key.keyCode
    if((thisSession.keyDirection === 38)|| thisSession.keyDirection === 40){
      document.getElementById("black").value = thisSession.keyCommands()
    }
  }
  

  document.getElementById("bla").addEventListener("click", function(event){
    event.preventDefault()
    thisSession.curCom = document.getElementById("black").value.toLowerCase();

    // process command
    var retu = "@localhost:: "+ thisSession.curCom+ " :  " + thisSession.getCommand();
    var node = document.createElement("BR");
    var out = document.getElementById("output");
    
    //add a promise here so input will not display again until typing is finished
    node.style.display = "hide"
    Actions.typing(0, retu, "output")
    // hideInput(0,retu,"output")
    out.appendChild(node);
    document.getElementById("black").value = "";
  });
});   