//first maths box

//counter for number of times maths box is to be expanded
var counter1 = 0;

//function to expand box to full length
function expand1() {
	document.getElementById('boxtitle1').innerHTML = "SUVAT 1 Derivation (click to hide)"
	document.getElementById('maths1').style.height = "auto"
}

//function to shrink box to title bar only
function hide1() {
	document.getElementById('boxtitle1').innerHTML = "SUVAT 1 Derivation (click to expand)"
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

//second maths box

//counter for number of times maths box is to be expanded
var counter2 = 0;

//function to expand box to full length
function expand2() {
	document.getElementById('boxtitle2').innerHTML = "SUVAT 2 Derivation (click to hide)"
	document.getElementById('maths2').style.height = "auto"
}

//function to shrink box to title bar only
function hide2() {
	document.getElementById('boxtitle2').innerHTML = "SUVAT 2 Derivation (click to expand)"
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

//third maths box

//counter for number of times maths box is to be expanded
var counter3 = 0;

//function to expand box to full length
function expand3() {
	document.getElementById('boxtitle3').innerHTML = "SUVAT 3 Derivation (click to hide)"
	document.getElementById('maths3').style.height = "auto"
}

//function to shrink box to title bar only
function hide3() {
	document.getElementById('boxtitle3').innerHTML = "SUVAT 3 Derivation (click to expand)"
	document.getElementById('maths3').style.height = "2.5vw"
}

//function to call expand or hide, based on situation
function change3() {
	if (counter3 % 2 == 0) {
		expand3()
	}
	else {
		hide3()
	}
	counter3++;
}

//fourth maths box

//counter for number of times maths box is to be expanded
var counter4 = 0;

//function to expand box to full length
function expand4() {
	document.getElementById('boxtitle4').innerHTML = "SUVAT 4 Derivation (click to hide)"
	document.getElementById('maths4').style.height = "auto"
}

//function to shrink box to title bar only
function hide4() {
	document.getElementById('boxtitle4').innerHTML = "SUVAT 4 Derivation (click to expand)"
	document.getElementById('maths4').style.height = "2.5vw"
}

//function to call expand or hide, based on situation
function change4() {
	if (counter4 % 2 == 0) {
		expand4()
	}
	else {
		hide4()
	}
	counter4++;
}