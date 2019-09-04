// Your code goes here
let navBar = document.querySelector(".nav");
function randmColor() {
    let color = "#";
  for(let i = 0; i < 6; i++){
        color += Math.floor((Math.random() * 16)).toString(16);
  }
    return color;
  }
    
    navBar.addEventListener("mouseover", event => {   
          event.target.style.fontSize = "35px";
          event.target.style.color = randmColor();
    
        setTimeout(function() {
          event.target.style.fontSize = "18px";
          event.target.style.color = "black";
        }, 500);
      }, false);

// dblclick on h1 Header to change text and font size
 let h1Header = document.querySelector(".logo-heading");
     h1Header.addEventListener("dblclick" , event => {
          event.target.style.fontSize = "80px";
          event.target.style.color = "blue";
          event.target.textContent = "Here We Go!!"

        setTimeout(function() {
          event.target.style.fontSize = "4rem";
          event.target.style.color = "black";
          event.target.textContent = "Lets Go Again!!"         
          }, 500);
        }, false);

// click to change background color;
 let bodyColor = document.querySelector("div")
        function randmColor() {
            let color = "#";
          for(let i = 0; i < 6; i++){
                color += Math.floor((Math.random() * 16)).toString(16);
          }
            return color;
          }
        bodyColor.addEventListener('click', event => {
            event.target.style.backgroundColor = randmColor(); 
        });

// load to prompt user for name and give feedback    
 window.addEventListener("load" , event => {
 var welcomeLoad = prompt("Welcome!!!! What is your name")
 alert("Welcome To The Fun Bus Experience " + welcomeLoad.toUpperCase())
 })

 //mouseEnter & mouseLeave eventlisteners

Array.from(document.querySelectorAll(".btn")).map(item => item.addEventListener("mouseenter", mouseEnter))
Array.from(document.querySelectorAll(".btn")).map(item => item.addEventListener("mouseeleave", mouseLeave))

function randmColor() {
    let color = "#";
  for(let i = 0; i < 6; i++){
        color += Math.floor((Math.random() * 16)).toString(16);
  }
    return color;
  }

function mouseEnter() {
    document.querySelector(".btn").style.background = randmColor();
    document.querySelector(".btn").style.height = "100px";
    document.querySelector(".btn").style.borderRadius = "30rem";
    document.querySelector(".btn").style.fontSize = "3rem";

  }
  function mouseLeave() {
    document.querySelector(".btn").style.background = "#17A2B8"
    document.querySelector(".btn").style.height = "45px";
    document.querySelector(".btn").style.borderRadius = "15px";
    document.querySelector(".btn").style.fontSize = "1.8rem";
  }

  //copy event
  document.querySelector("body").addEventListener("copy", copyFunc);
  function copyFunc() {
   alert("What did you copy?");
  }

 //paste event
  document.querySelector("body").addEventListener("paste", pasteFunc); 
  function pasteFunc() {
   alert("What did you paste?");
  }

// a tag click prompt
var aTag = document.querySelector(".nav")
aTag.addEventListener("click" , event => {
alert("These are called A Tags")
})