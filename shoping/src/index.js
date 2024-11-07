console.log("it works");
// ///////////////////////////////
let  modalout = document.querySelector(".modaloutside");
let  modalinner1 = document.querySelector(".modalinner-1");
let  modalinner2 = document.querySelector(".modalinner-2");

function signinclick () {
    modalout.style.display="flex";
    modalinner1.style.display="initial";
    document.querySelector(".signin-color").style.background ="rgba(0, 110, 255, 0.897)";
    document.querySelector("body").style.overflow="hidden";
    document.querySelector(".anchor1").style.display="none";
    document.querySelector(".anchor2").style.display="initial";
    modalinner2.style.display="none";
}
function signupclick () {
    modalout.style.display="flex";
    modalinner2.style.display="initial";
    document.querySelector(".signin-color").style.background ="rgba(0, 110, 255, 0.897)";
    document.querySelector("body").style.overflow="hidden";
    document.querySelector(".anchor2").style.display="none";
    document.querySelector(".anchor1").style.display="initial";
    modalinner1.style.display="none";
}
function cancel () {
    modalout.style.display="none"
    document.querySelector("body").style.overflow="scroll";
    document.querySelector(".anchor1").style.display="initial";
    document.querySelector(".anchor2").style.display="initial";

}
window.onclick = function(event) {
    if (event.target == modalout) {
      modalout.style.display = "none";
      document.querySelector("body").style.overflow="scroll";
      document.querySelector(".anchor1").style.display="initial";
      document.querySelector(".anchor2").style.display="initial";
    //   document.querySelector(".modalanimation").style.animation="none";
    }else(cancel);
  }

// console.log(signupclick);
// ///////////////////// this is the js-cide for the caroseale//////////////////////////////////

let theindex = 1;
slideshows();

function slideshows() {
  
  let i;
  let bigsales = document.getElementsByClassName("bigsaleslide");
  for ( i = 0; i < bigsales.length; i++ ) {
    bigsales[i].style.display = "none"; 
 
  }
  theindex++;
  if (theindex > bigsales.length) {theindex = 1}
  bigsales[theindex-1].style.display = "initial";
 setTimeout(slideshows, 6000);
  
} 
console.log (slideshows);
console.log ("slide");


//////////////////////////////////////////////////////////
let day1a =document.querySelector(".day1a");
let day2a =document.querySelector(".day2a");
let day3a=document.querySelector(".day3a");
let day4a =document.querySelector(".day4a");
let a =document.querySelector(".hotdeal");

let july="May 15,";
let year="2024 ";
let hour="10: ";
let min="10: ";
let sec="10"; 


let countdownto = new Date(july + year + hour + min + sec).getTime();

let ticks = setInterval(() => {
     let now = new Date().getTime();
     let diff = countdownto - now;
     let days1 = Math.floor(diff /(1000 * 60 * 60 * 24) );
     let hours1 = Math.floor((diff % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60 ) );
     let mins1 = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
     let secs1 = Math.floor((diff % (1000 *60)) / 1000);
    // console.log(secs1);
    day4a.textContent=secs1;
    day3a.textContent=mins1;
    day2a.textContent=hours1;
    day1a.textContent=days1;

},1000 );

console.log(ticks);
// console.log(countdownto);
// console.log(days);
