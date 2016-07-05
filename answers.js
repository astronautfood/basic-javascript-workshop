/*
Write a function that takes a string and returns the first character of the 
string. Test your function on a few inputs, including the empty string.
*/

function firstLetter(word) {
    return word.charAt(0);
}

console.log(firstLetter("Jessica"));
console.log(firstLetter("hello!"));
console.log(firstLetter(""));

