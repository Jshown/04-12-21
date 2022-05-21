"use strict"

// 1. Numbers
const number = document.querySelectorAll(".number");
number.forEach(function(item){
	item.addEventListener("click",function(){
		document.querySelector("#screen").innerHTML += item.innerHTML;
	});
});

// 2. Operations
const other = document.querySelectorAll(".other");
other.forEach(function(item){
	item.addEventListener("click", function(){
		let last = document.querySelector("#screen").innerHTML.charAt(document.querySelector("#screen").innerHTML.length-1 );
		let screenHTML = document.querySelector("#screen").innerHTML;
//		let last = document.querySelector("#screen").innerHTML.substr(-1);
		
		if ( isNaN ( Number (last) ) ){
//			document.querySelector ("#screen").innerHTML = document.querySelector("#screen").innerHTML.replace(last, item.innerHTML)4
				document.querySelector("#screen").innerHTML = screenHTML.substr(0, screenHTML.length-1 ) + item.innerHTML;
						} else {
			document.querySelector("#screen").innerHTML += item.innerHTML;
		}
	});
});

// 3. Clear
document.querySelector("#end").addEventListener("click",function(){
	document.querySelector("#screen").innerHTML = "";
});

// 4. Solution
document.querySelector("#sol").addEventListener("click",function(){

	let screenHTML = document.querySelector("#screen").innerHTML;
	let frog = screenHTML.substr(screenHTML.length-1, 1);
	
	if (isNaN(Number (frog))){
		document.querySelector("#screen").innerHTML += screenHTML.substring(0, screenHTML.length-1);
		document.querySelector("#answer").innerHTML = eval(document.querySelector("#screen").innerHTML.replaceAll("×", "*").replaceAll("÷", "/"));
		document.querySelector("#screen").innerHTML += "=";
	}else {
		document.querySelector("#answer").innerHTML = eval(document.querySelector("#screen").innerHTML.replaceAll("×", "*").replaceAll("÷", "/"));
		document.querySelector("#screen").innerHTML += "=";
		document.querySelector("#screen").innerHTML += item.innerHTML;
	}
});





