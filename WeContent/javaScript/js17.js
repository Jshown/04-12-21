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

number.forEach(function(item){

	item.addEventListener("click",function(){
		document.querySelector("#screen").innerHTML += item.innerHTML;
	});
});

const other = document.querySelectorAll(".other");

other.forEach(function(item){
	item.addEventListener("click", function(){
		document.querySelector("#screen").innerHTML += item.innerHTML;
	});
});

document.querySelector("#end").addEventListener("click",function(){
	document.querySelector("#screen").innerHTML = "";
});

document.querySelector("#sol").addEventListener("click",function(){
	document.querySelector("#screen").innerHTML = ""
});








