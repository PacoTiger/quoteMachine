export default class {
	constructor (phrase, author){
		this.phrase = phrase;
		this.author = author;
	}

	shareTwitter() {
		openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=pacotiger&text=' + encodeURIComponent('"' + this.phrase + '" ' + this.author));
	}
}