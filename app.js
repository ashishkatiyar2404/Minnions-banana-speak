var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");
 


function clickHandler() {
   outputdiv.innerText="hahahahahaha" +txtInput.value;
};
btnTranslate.addEventListener("click", clickHandler)


// btnTranslate.addEventListener("click",function clickEventHandler() {
//     console.log("clicked!");
//     console.log("input", txtInput.value);
// })




// var btnTranslate = document.querySelector("#btn-translate");

// console.log(btnTranslate);


// var username = prompt("give me username")
// var welcomeMessage = "Welcome and good morning ! " + username;

// alert(welcomeMessage);
// // alert("this is script work!" + username);
