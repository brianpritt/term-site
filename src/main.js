import './styles.css';
import 'materialize-css';

import { Session } from "./js/session";
import { Initialize } from "./js/initialize";
document.addEventListener("DOMContentLoaded", () => {
  let initialize = new Initialize;
  initialize.getInitFile(); 
  let thisSession = new Session;
  document.onkeydown = function(key){  
    thisSession.keyDirection = key.keyCode
    if((thisSession.keyDirection === 38)|| thisSession.keyDirection === 40){
      document.getElementById("black").value = thisSession.keyCommands()
    }
  }
  
  document.getElementById("bla").addEventListener("click", function(event){
    event.preventDefault()
    thisSession.curCom = document.getElementById("black").value.toLowerCase();
    var retu = "@localhost:: "+ thisSession.curCom+ " : <br> " + thisSession.getCommand()+ "<br>";
    var node = document.createElement("LI");
    var text = document.createTextNode(retu);
    var out = document.getElementById("output");
    node.innerHTML = retu;
    out.appendChild(node);
    document.getElementById("black").value = "";
  });
});   