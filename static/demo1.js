
/* Intro to closures */

function makePrinter(textToPrint) {
	function thePrinter() {
		console.log(textToPrint);
	}
	return thePrinter
}

var foo = makePrinter("I am a teacup");
foo();


// More below...



/* Closures can be anonymous (no name) */

function makePrinter2(textToPrint) {
	return function() {
		console.log(textToPrint);
	}
}

var foo = makePrinter2("I am still a teacup");
foo();






