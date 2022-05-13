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
		let Last = document.querySelector("#screen").innerHTML.charAt( document.querySelector("#screen").innerHTML += item.innerHTML);
		let Last = document.querySelector("#screen").innerHTML.substr(-1);
		
		if ( isNaN (Last) ){
			document.querySelector ("#screen").innerHTML = document.querySelector("#screen").innerHTML.replace(Last   )
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
	document.querySelector("#answer").innerHTML = eval(document.querySelector("#screen").innerHTML.replaceAll("×", "*").replaceAll("÷", "/"));
	document.querySelector("#screen").innerHTML += "=";
});


