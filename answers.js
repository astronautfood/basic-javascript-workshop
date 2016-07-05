/*
Write a function that takes a string and returns the first character of the 
string. Test your function on a few inputs, including the empty string.
*/

function firstLetter(word) {
    return word.charAt(0);
}

// console.log(firstLetter("Jessica"));
// console.log(firstLetter("hello!"));
// console.log(firstLetter(""));

/*
Write a function that takes a string and returns the last character of a string. Test your function on a few inputs, including the empty string.
*/

function lastLetter(word) {
    return word[word.length - 1];
}

// console.log(lastLetter("Jessica"));
// console.log(lastLetter("hello!"));
// console.log(lastLetter(""));