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

/*
Write a function that takes a string and a number, and returns the character at the position represented by the number. The indexing of number should start at 0. Test your function on a few inputs, including the empty string.
*/

function charAtNumber(word, number) {
    return word.charAt(number - 1);
}

// console.log(charAtNumber("jeSsica", 3));
// console.log(charAtNumber("charActer", 5));
// console.log(charAtNumber("", 4));

/* 
Write a function that takes two numbers and adds them together. Test your function on a few inputs. Write in the comments what happens when you pass something other than a number to your function.
*/

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// console.log(addTwoNumbers(3, 4));
// console.log(addTwoNumbers(18, 2));
// console.log(addTwoNumbers("Jess", 6));
// the function concatenates the two inputs if one/both inputs are a string. 
//I meant exercise 4 :()

// Exercise 5. Multiple two inputs, including not a number

function multiplyTwoNumbers(num1, num2) {
    return num1 * num2;
}

// console.log(multiplyTwoNumbers(3, 5));
// console.log(multiplyTwoNumbers(100, 30));
// console.log(multiplyTwoNumbers("Jess", 4));
// //returns "Nan" (not a number) when an input other than a number is multiplied.

// Exercise 6 :) Two numbers, one string. String describes the operation to be performed on the two numbers.

function twoNumOneString(num1, num2, str1) {
    if (str1 === "add") {
        return num1 + num2;
    }
    else if (str1 === "subtract") {
        return num1 - num2;
    }
    else if (str1 === "mult") {
        return num1 * num2;
    }
    else if (str1 === "div") {
        return num1 / num2;
    }
    else {
        return 0;
    }
}

// console.log(twoNumOneString(100, 20, "add"));
// console.log(twoNumOneString(100, 20, "subtract"));
// console.log(twoNumOneString(100, 20, "mult"));
// console.log(twoNumOneString(100, 20, "div"));
// console.log(twoNumOneString(100, 20, "blah"));

// Exercise 7. Woo! "Write a function that takes a string and a number, and returns the string repeated that many number of times. Test your function with various inputs."

function repeatTheString(wordToRepeat, numOfRepeats) {
    for (var i = 0; i < numOfRepeats; i++) {
        console.log(wordToRepeat);
    }
}
repeatTheString("Jessica", 4);
repeatTheString("hello", 3);

