import "./stylesheets/main.css";
import $ from "jquery";
import "./js/jquery-resizable.js";
// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";
import "./js/compiler.js";
import './js/loadingoverlay.js';

import { remote } from "electron";
import jetpack from "fs-jetpack";

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());


document.querySelector("#app").style.display = "block";
//document.querySelector("#greet").innerHTML = greet();
//document.querySelector("#os").innerHTML = osMap[process.platform];
//document.querySelector("#author").innerHTML = manifest.author;
//document.querySelector("#env").innerHTML = env.name;
//document.querySelector("#electron-version").innerHTML = process.versions.electron;
     $(".panel-left").resizable({
       handleSelector: ".splitter",
       resizeHeight: false
     });

     $(".panel-top").resizable({
       handleSelector: ".splitter-horizontal",
       resizeWidth: false
     });

 

var cutTextareaBtn = document.getElementById('copy');

cutTextareaBtn.addEventListener('click', function(event) {  
  var cutTextarea = document.getElementById('outputText');  
  cutTextarea.select();

  try {  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('copy text command was ' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }  
});
