//The recommended way and equivalent to $(document).ready(funtion(){});
$(function() {
//Global variables
	const URL = "https://talaikis.com/api/quotes/random/";
	let xRequest = new XMLHttpRequest();
	var quote;
	var themes = ['is-info', 'is-primary', 'is-success', 'is-dark', 'is-danger', 'is-warning', 'is-light'];


class Quote {
	constructor (phrase, author){
		this.phrase = phrase;
		this.author = author;
	}

	shareTwitter() {
		openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=pacotiger&text=' + encodeURIComponent('"' + this.phrase + '" ' + this.author));
	}
}

//FUNCTIONS
	function displayQuote(quote) {
		document.getElementById('phrase').innerHTML = "<i class='far fa-hand-pointer'></i> " + quote.phrase;
		document.getElementById('author').innerHTML = quote.author;
	}

	function animationText() {
 		$("#phrase").animate({fontSize: "4em"}, 100);
		$("#phrase").animate({fontSize: "1.2em"}, 400);
	}

	function makeRequest() {
		xRequest.open("GET", URL);
	    xRequest.send();
	}

	function openURL(url){
	  	window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
	}

	function changeTheme () {
		var randomNumber = Math.floor(Math.random() * themes.length);
		$("section").removeClass(themes.join(" "))
					.addClass(themes[randomNumber]);

	}

	//HTTP Request
	xRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let phrase = JSON.parse(xRequest.responseText).quote;
			let author = JSON.parse(xRequest.responseText).author;
			quote = new Quote(phrase, author);
			displayQuote(quote);
			animationText();
			changeTheme();
		}
	}

//TRIGGERS
	//When press phrase or author text.
	$('.quote').on("click", makeRequest);

	//When press twitter icon.
	$('#twitterIcon').on("click", function() {
		return quote.shareTwitter();
	});
	//In order to download the first quote
	makeRequest();
});