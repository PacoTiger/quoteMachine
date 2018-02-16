class Quote {
	constructor (phrase, author){
		this.phrase = phrase;
		this.author = author;
	}
}

//Variables
const URL = "https://talaikis.com/api/quotes/random/";
let xRequest = new XMLHttpRequest();

//HTTP Request
xRequest.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		let phrase = JSON.parse(xRequest.responseText).quote;
		let author = JSON.parse(xRequest.responseText).author;
		let quote = new Quote(phrase, author);
		console.log(quote);
	}
}

//Trigger
function makeRequest() {
	xRequest.open("GET", URL);
    xRequest.send();
}