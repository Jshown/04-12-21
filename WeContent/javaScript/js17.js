/**
 * 
 */
"use strict"

//console.log(document.getElementById("no1"));
//console.log(document.querySelector("#no1"));
//document.querySelector("#no1").addEventListener("click",function(){
//	document.querySelector("#screen").innerHTML += 1;
//});
const numbers = [0,1,2,3,4,5,6,7,8,9];
numbers.forEach(function(param1, param2, param3){
	console.log(param1);
	console.log(param2);
	console.log(param3);
	console.log("--------");
});

const number = document.querySelectorAll(".number");

numbers.forEach(function(item){
	
});
document.querySelector(".number").addEventListener("click",function(){
	document.querySelector("#screen").innerHTML += this.innerHTML;
});
console.log(document.getElementById("no2"));
console.log(document.querySelector("#no2"));
document.querySelector("#no2").addEventListener("click",function(){
	document.querySelector("#screen").innerHTML += 2;
});
console.log(document.getElementById("no3"));
console.log(document.querySelector("#no3"));
document.querySelector("#no3").addEventListener("click",function(){
	document.querySelector("#screen").innerHTML += 3;
});
console.log(document.getElementById("no4"));
console.log(document.querySelector("#no4"));
document.querySelector("#no4").addEventListener("click",function(){
	document.querySelector("#screen").innerHTML += 4;
});
console.log(document.getElementById("no5"));
console.log(document.querySelector("#no5"));
document.querySelector("#no5").addEventListener("click",function(){
	document.querySelector("#screen").innerHTML += 5;
});
console.log(document.getElementById("no6"));
console.log(document.querySelector("#no6"));
document.querySelector("#no6").addEventListener("click",function(){
	document.querySelector("#screen").innerHTML += 6;
});

console.log(document.getElementById("end"));
console.log(document.querySelector("#end"));
document.querySelector("#end").addEventListener("click",function(){
	document.querySelector("#screen").innerHTML ="";
});








