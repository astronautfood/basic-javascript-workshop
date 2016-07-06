//Fortune Teller

var quote1 = "I am Beyonce1";
var quote2 = "I am Beyonce2";
var quote3 = "I am Beyonce3";
var quote4 = "I am Beyonce4";
var quote5 = "I am Beyonce5";
var quote6 = "I am Beyonce6";
var quote7 = "I am Beyonce7";
var quote8 = "I am Beyonce8";
var quote9 = "I am Beyonce9";
var quote10 = "I am Beyonce10";

function randomQuotes() {
    var randomQuoteOptions = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10]
    
        var quoteOutput = randomQuoteOptions[Math.floor(Math.random() * randomQuoteOptions.length)];
    return quoteOutput;
}

console.log(randomQuotes());