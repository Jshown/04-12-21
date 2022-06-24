"use strict"
let isLeftNumber   = false;
let isOperator        = false;
let isRightNumber = false;
let isSolution          = false;

// 1. Numbers
const number = document.querySelectorAll(".number");
number.forEach(function(item){
	item.addEventListener("click",function(){
		if (isSolution){
			document.querySelector("#screen").innerHTML = "";
		}
		isSolution = false;
		isLeftNumber = true; 
		
		if ( isOperator){
		  isRightNumber = true;
		}
		document.querySelector("#screen").innerHTML += item.innerHTML;
	  if (isLeftNumber && isOperator && isRightNumber){
			document.querySelector("#answer").innerHTML = eval(document.querySelector("#screen").innerHTML.replaceAll("×", "*").replaceAll("÷", "/"));
		}
	});
});

// 2. Operations
const other = document.querySelectorAll(".other");
other.forEach(function(item){
	item.addEventListener("click", function(){
		 isLeftNumber   = true;
		 isOperator        = true;
	   isRightNumber = false;
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
	isOperator       =false;
	isRightNumber= false;
	isLeftNumber  = false;
	document.querySelector("#screen").innerHTML = "";
	document.querySelector("#answer").innerHTML = "";
});
document.querySelector("#backspace").addEventListener("click",function(){
	document.querySelector("#screen").innerHTML = document.querySelector("#screen").innerHTML.substr(0, document.querySelector("#screen").innerHTML.length-1 );
  if(isLeftNumber && isOperator){
		isRightNumbr = false;
	}else if(LeftNumber){
		isOperator = false;
	}
	
});
// 4. Solution
document.querySelector("#sol").addEventListener("click",function(){
		solution ();
});

function solution( ) {

	if(isLeftNumber && isOperator && isRightNumber) {
		document.querySelector("#screen").innerHTML = eval(document.querySelector("#screen").innerHTML.replaceAll("×", "*").replaceAll("÷", "/"));
		document.querySelector("#answer").innerHTML = "";
		isSolution = true;
	}
}






