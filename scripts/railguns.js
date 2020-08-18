//counter for number of times maths box is to be expanded
var counter1 = 0;

//function to expand box to full length
function expand1() {
	document.getElementById('boxtitle1').innerHTML = "Integral Form (click to hide)"
	document.getElementById('maths1').style.height = "auto"
}

//function to shrink box to title bar only
function hide1() {
	document.getElementById('boxtitle1').innerHTML = "Integral Form (click to expand)"
	document.getElementById('maths1').style.height = "2.5vw"
}

//function to call expand or hide, based on situation
function change1() {
	if (counter1 % 2 == 0) {
		expand1()
	}
	else {
		hide1()
	}
	counter1++;
}

//counter for number of times maths box is to be expanded
var counter2 = 0;

//function to expand box to full length
function expand2() {
	document.getElementById('boxtitle2').innerHTML = "Solution Derivation (click to hide)"
	document.getElementById('maths2').style.height = "auto"
}

//function to shrink box to title bar only
function hide2() {
	document.getElementById('boxtitle2').innerHTML = "Solution Derivation (click to expand)"
	document.getElementById('maths2').style.height = "2.5vw"
}

//function to call expand or hide, based on situation
function change2() {
	if (counter2 % 2 == 0) {
		expand2()
	}
	else {
		hide2()
	}
	counter2++;
}