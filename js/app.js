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
		displayQuote(quote);
	}
}


function displayQuote(quote) {
	document.getElementById('phrase').innerHTML = quote.phrase;
	document.getElementById('author').innerHTML = quote.author;	
}

function makeRequest() {
	xRequest.open("GET", URL);
    xRequest.send();
}

//The recommended way and equivalent to $(document).ready(funtion(){});
$(function() {
	//In order download the first quote
	makeRequest();

	//TRIGGERS
	//When press phrase or author text.
	$('.quote').on("click", makeRequest);

	//When press twitter icon.
	//Code here.
});