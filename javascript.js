

// (function times(){
//  let date = new Date();
//  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
 
//  let day = date.getDay();
//  let hour = date.getHours();
//  let min = date.getSeconds();



//  switch(new Date().getMonth()){
//     case 1:
//     document.querySelector(".times").innerHTML += ` ${day}${months[1]}${hour}:${min}`
//     break

//     case 2:
//     document.querySelector(".times").innerHTML += ` ${day}${months[2]}${hour}:${min}`
//     break

//     case 3:
//       document.querySelector(".times").innerHTML += ` ${day}${months[3]}${hour}:${min}`
//     break

//     case 4:
//       document.querySelector(".times").innerHTML += ` ${day}${months[4]}${hour}:${min}`
//     break

//     case 5:
//       document.querySelector(".times").innerHTML += ` ${day}${months[5]}${hour}:${min}`
//     break

//     case 6:
//       document.querySelector(".times").innerHTML += ` ${day}${months[6]}${hour}:${min}`
//     break

//     case 7:
//       document.querySelector(".times").innerHTML += ` ${day}${months[7]}${hour}:${min}`
//     break

//     case 8:
//       document.querySelector(".times").innerHTML += ` ${day}${months[8]}${hour}:${min}`
//     break

//     case 9:
//       document.querySelector(".times").innerHTML += ` ${day}${months[9]}${hour}:${min}`
//     break

//     case 10:
//       document.querySelector(".times").innerHTML += ` ${day}${months[10]}${hour}:${min}`
//     break


//     case 11:
//       document.querySelector(".times").innerHTML += ` ${day}${months[11]}${hour}:${min}`
//     break


//     case 12:
//       document.querySelector(".times").innerHTML += ` ${day}${months[12]}${hour}:${min}`
//     break



//  default:
//   console.log('zzzz')
// }
// })();







(function times(){
var romanMonths = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

// Get the current date and time
let currentDate = new Date();


let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let time = currentDate.toLocaleTimeString();

// Get the Romanized month name
let romanMonth = romanMonths[month];

// Format the date and time string
let formattedDate = `${romanMonth} ${day} ${time}`;
// Log the formatted date and time
// console.log(formattedDate);

document.querySelector(".times").innerHTML += formattedDate
//In this example, we first define an array `romanMonths` with Romanized mo>

//Please note that the `toLocaleTimeString()` method may vary its output ba>
})();


let dock = document.getElementById("dock");
let items = document.querySelectorAll("dock-item");


// dock.addEventListener("mouseover", function() {
//   dock.style.width = "50px";
// });

// dock.addEventListener("mouseleave", function() {
//   dock.style.width = "0px";
// });


document.body.addEventListener("mousemove", (e)=>{

if(e.clientX == 0){
  dock.style.width = "50px";

}else if(e.clientX >= 50){
  dock.style.width = "0px";
}

})

document.querySelector(".terminal").addEventListener("click", (e)=> {

  console.log("OK")
})

// document.body.addEventListener("mousemove", function(e){

 

//   // console.log(e.clientX)
// })



var container = document.getElementById('desktop');
var terminalCount = 0;

function createTerminal() {
  terminalCount++;

  var terminal = document.createElement('div');
  terminal.id = 'terminal-' + terminalCount;
  terminal.className = 'terminal';
  terminal.style.left = getRandomPosition() + 'px';
  terminal.style.top = getRandomPosition() + 'px';

  var terminalHeader = document.createElement('div');
  terminalHeader.className = 'terminal-header';

  var terminalTitle = document.createElement('h3');
  terminalTitle.className = 'terminal-title';
  terminalTitle.textContent = 'Terminal ' + terminalCount;

  var terminalActions = document.createElement('div');
  terminalActions.className = 'terminal-actions';

  var minimizeButton = document.createElement('div');
  minimizeButton.className = 'terminal-button';
  minimizeButton.textContent = '_';
  minimizeButton.addEventListener('click', minimizeTerminal);

  var maximizeButton = document.createElement('div');
  maximizeButton.className = 'terminal-button';
  maximizeButton.textContent = 'O';
  maximizeButton.addEventListener('click', maximizeTerminal);

  var closeButton = document.createElement('div');
  closeButton.className = 'terminal-button';
  closeButton.textContent = 'X';
  closeButton.addEventListener('click', closeTerminal);

  terminalHeader.appendChild(terminalTitle);
  terminalActions.appendChild(minimizeButton);
  terminalActions.appendChild(maximizeButton);
  terminalActions.appendChild(closeButton);
  terminalHeader.appendChild(terminalActions);

  terminal.appendChild(terminalHeader);

  container.appendChild(terminal);

  makeDraggable(terminal);
  makeResizable(terminal);
}

function minimizeTerminal(e) {
  var terminal = e.target.closest('.terminal');
  terminal.style.display = 'none';
}

function maximizeTerminal(e) {
  var terminal = e.target.closest('.terminal');
  terminal.style.width = '100%';
  terminal.style.height = '100%';
  terminal.style.left = '0';
  terminal.style.top = '0';
}

function closeTerminal(e) {
  var terminal = e.target.closest('.terminal');
  terminal.remove();
}

function makeDraggable(terminal) {
  var terminalHeader = terminal.querySelector('.terminal-header');

  var isDragging = false;
  var startPosX, startPosY, startLeft, startTop;

  terminalHeader.addEventListener('mousedown', startDragging);
  terminalHeader.addEventListener('mouseup', stopDragging);

  function startDragging(event) {
    isDragging = true;
    startPosX = event.clientX;
    startPosY = event.clientY;
    startLeft = parseInt(document.defaultView.getComputedStyle(terminal).left, 10);
    startTop = parseInt(document.defaultView.getComputedStyle(terminal).top, 10);

    document.addEventListener('mousemove', dragTerminal);
  }

  function dragTerminal(event) {
    if (isDragging) {
      var moveX = event.clientX - startPosX;
      var moveY = event.clientY - startPosY;

      var newLeft = startLeft + moveX;
      var newTop = startTop + moveY;

      terminal.style.left = newLeft + 'px';
      terminal.style.top = newTop + 'px';
    }
  }

  function stopDragging() {
    isDragging = false;
    document.removeEventListener('mousemove', dragTerminal);
  }
}

function makeResizable(terminal) {
  var terminalTop = terminal.offsetTop;
  var terminalLeft = terminal.offsetLeft;

  var borderSize = 5;
  var resizer = document.createElement('div');
  resizer.style.width = borderSize + 'px';
  resizer.style.height = borderSize + 'px';
  resizer.style.background = 'white';
  resizer.style.position = 'absolute';
  resizer.style.bottom = 0;
  resizer.style.right = 0;
  resizer.style.cursor = 'nwse-resize';

  resizer.addEventListener('mousedown', startResize);

  terminal.appendChild(resizer);

  function startResize(event) {
    event.preventDefault();

    document.addEventListener('mousemove', resizeTerminal);
    document.addEventListener('mouseup', stopResize);
  }

  function resizeTerminal(event) {
    var width = event.clientX - terminalLeft;
    var height = event.clientY - terminalTop;

    terminal.style.width = width + 'px';
    terminal.style.height = height + 'px';
  }

  function stopResize() {
    document.removeEventListener('mousemove', resizeTerminal);
    document.removeEventListener('mouseup', stopResize);
  }
}

function getRandomPosition() {
  var min = 20;
  var max = window.innerHeight - 320;
  return Math.random() * (max - min) + min;
}

let term = document.querySelector(".terminal")

// Listen for clicks and create a new terminal on each click
term.addEventListener('click', createTerminal);

// setInterval(() => {
//   console.log(Math.floor(Math.random() * 1000) + 1)
// },100);




// FIREFOX



let close = document.querySelector('.close');
var firefox = document.querySelector('.firefox');

close.addEventListener("click", function(){
 
  firefox.style.zIndex = "1"
  firefox.style.display = "none";

});


let firefoxEsr = document.querySelector('.firefox-esr');

firefoxEsr.addEventListener('click', function(){
  setTimeout(() => {
    firefox.style.zIndex = "1"
    firefox.style.display = 'block';
  }, 1000);

})



// CHROMIUM
let close2 = document.querySelector('.close2');
var browser = document.querySelector('.browser');

close2.addEventListener("click", function(){
 
  browser.style.zIndex = "1"
  browser.style.display = "none";

});


let chromium = document.querySelector('.chromium');

chromium.addEventListener('click', function(){
  setTimeout(() => {
    browser.style.zIndex = "1"
    browser.style.display = 'block';
  }, 1000);

})



// VSCODE


let close3 = document.querySelector('.close3');
var vscode = document.querySelector('.vscode');

close3.addEventListener("click", function(){
 
  vscode.style.zIndex = "1"
  vscode.style.display = "none";

});


let coded = document.querySelector('.coded');

coded.addEventListener('click', function(){
  setTimeout(() => {
    vscode.style.zIndex = "1"
    vscode.style.display = 'block';
  }, 1000);

})


// MENU

let main = document.querySelector(".main");

let menu = document.querySelector("#menu")


let apps = document.querySelector("#menu .menu")

main.addEventListener("click", function(){

  menu.style.display = "flex";
})

menu.addEventListener("click",function(){
  menu.style.display = "none"
})


// function leave(){
//   menu.style.display = "none"
// }


let mini = document.querySelector(".mini")

function clear(){
  
  // FIREFOX-ESR
  firefox.style.display = "none ";
  firefox.style.zIndex = "1"
  // document.querySelector(".source").style.display = "none"
  // CHROMIUM
  browser.style.zIndex = "1"
  browser.style.display = "none ";
  // VSCODE
  vscode.style.zIndex = "0"
  vscode.style.display = 'none';
}


let logout = Array.from(document.querySelectorAll(".setting .settings"))[2]

logout.addEventListener('click', function(){

  document.querySelector('.mini').style.display = "block"
  this.classList.add("active")

  setInterval(() => {

    document.querySelector('.mini').style.display = "none"

    
  }, 5000);

})

// document.querySelector("#desktop").addEventListener("click", function(){

//   document.querySelector('.mini').style.display = "none"


// })


let LXterm = document.querySelector("#menu .menu .line1 .terminal")

// Listen for clicks and create a new terminal on each click
LXterm.addEventListener('click', createTerminal);



let droid = document.querySelector(".droid")
let droidmenu = document.querySelector(".droidmenu")


droid.addEventListener("click", function(){

  droidmenu.style.display = "flex"
  // this.style.display = "none"
  console.log(this)
})