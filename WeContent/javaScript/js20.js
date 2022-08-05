"use strict"
let isLeftNumber   = false;
let isOperator        = false;
let isRightNumber = false;
let isSolution          = false;


//0.External
let his = document.querySelector("#history")

	document.querySelector("#history").addEventListener("click", function(){
		if (his !== null && his !==''){
			document.querySelector("#wrapper").classList.toggle("onClick");
		}
});

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
		let screenHTML = document.querySelector("#screen").innerHTML;
		let last = document.querySelector("#screen").innerHTML.charAt(document.querySelector("#screen").innerHTML.length-1 );
			
		isLeftNumber   = true;
		isOperator        = true;
		isRightNumber = false;
		
		if(screenHTML == ""){
			document.querySelector("#screen").innerHTML += "";
		}else 	if ( isNaN ( Number (last) ) ){
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
	
		isRightNumber = false;
		
	}else if(isLeftNumber){
		
		isOperator = false;
		
	}
	
});
// 4. Solution
document.querySelector("#sol").addEventListener("click",function(){
		solution ();
});

function solution( ) {
let equation = document.querySelector("#screen").innerHTML;
let answer = document.querySelector("#answer").innerHTML;

	if(isLeftNumber && isOperator && isRightNumber) { // 이거 operations때 처럼 안되는거 아닌가요? ㅜㅜ
		document.querySelector("#screen").innerHTML = eval(document.querySelector("#screen").innerHTML.replaceAll("×", "*").replaceAll("÷", "/"));
		document.querySelector("#answer").innerHTML = "";
		
		isSolution = true;
		document.querySelector("#history-tab").innerHTML += "<div class='history-item-wrapper'>"
																																																				+"<p class='h-equation'>" + equation + "</p>"
																																																				+"<p class='h-answer'> " + answer + "</p>"
																																																				+"</div>"
	}
}


