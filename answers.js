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

// function repeatTheString(wordToRepeat, numOfRepeats) {
//     for (var i = 0; i < numOfRepeats; i++) {
//         console.log(wordToRepeat);
//     }
// }
// repeatTheString("Jessica", 4);
// repeatTheString("hello", 3);

/* Exercise 8! "Write a function that takes a string, and returns the reverse of that string. For example, if you pass the function the string “hello”, it should return “olleh”. Test your function on a few inputs, including the empty string."
*/

function reverseSpelling (wordToReverse) {
    var reversed = [];
    for (var i = wordToReverse.length - 1; i >= 0; i--) {
        reversed.push(wordToReverse[i]);
    }
    return reversed;
}

// console.log(reverseSpelling("Jessica").join(""));
// console.log(reverseSpelling("Mitchell").join(""));
// console.log(reverseSpelling("hello").join(""));

// Exercise 9: Take number, return the factorial of that number

function factorial(num1) {
    var nums = [];
    var finalAnswer = 1;
    for(var i = 1; i <= num1; i++){
        nums.push(i);
    }
    for(var i = 0; i < nums.length; i++){
        finalAnswer = finalAnswer * nums[i];
    }
    return finalAnswer;
}
// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(-1));

/* Exercise 10: Write a function that takes a phrase as a string, and returns the longest word in that phrase. If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.
*/

function longWordInPhrase(phrase) {
    var phraseArray = phrase.split(" ");
    var longestLength = 0;
    var longestWord;
       for (var i = 0; i < phraseArray.length; i++) {
           if (longestLength < phraseArray[i].length) {
               longestLength = phraseArray[i].length;
               longestWord = phraseArray[i];
           }
       }
       return longestWord
}


// console.log(longWordInPhrase("Hi, how it is going?"));
// console.log(longWordInPhrase("Today is the second day of Decode. Woo!"));

/* 
Exercise 11: "Write a function that takes a phrase, and returns the same phrase with every word capitalized. For example, if you pass your function "hello world", it should return “Hello World” and if you pass it “HELLO WORLD” or even "HeLLo WoRLD", it will also return "Hello World". Test your function of a few inputs."
*/

function capitalFirstLetter(phrase) {
    var lowerCase = phrase.toLowerCase();
    var wordsInPhrase = lowerCase.split(" ");
    var capitalizedSentence = "";
    
    for (var i = 0; i < wordsInPhrase.length; i++) {
        var wordAdd = wordsInPhrase[i].charAt(0).toUpperCase() + wordsInPhrase[i].slice(1);
        capitalizedSentence = capitalizedSentence + wordAdd + " ";
    }
    return capitalizedSentence;
}

// console.log(capitalFirstLetter("Hi, how's it going?"));
// console.log(capitalFirstLetter("I am so bad at this exercise."));

//Exercise 12: return largest number in array


function largestNumInArray (numbers) {
    var largestSoFar = 0; 
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > largestSoFar) {
            largestSoFar = numbers[i];
    }
}
return largestSoFar;
}

// console.log(largestNumInArray([3, 4, 5, 6,]));
// console.log(largestNumInArray([1000, 900, 9999, 0]));

/* exercise 13: Write a function that takes an array, and returns a filtered array. The filtered array should only contain the truthy values from the initial array. Hint: there is an array method called filter that can help you with this :)
*/
function truthyOnlyArray(arrayInput) {
    var truthyNumsSoFar = [];
        for (var i = 0; i < arrayInput.length; i++) {
            
            if (arrayInput[i]) {
                truthyNumsSoFar.push(arrayInput[i]);
            }
        }
        return truthyNumsSoFar;
}


// console.log(truthyOnlyArray(["Jessica", 15, false, 14, 0, "16"]));

// exercise 14: Write a function that takes an array of numbers, and returns the sum of all the numbers in the array.

function addArrayNumbers(num) {
    var totalSoFar = 0;
    for (var i = 0; i < num.length; i++) {
        totalSoFar = totalSoFar + num[i];
    }
    return totalSoFar;
}

console.log(addArrayNumbers([2, 3, 4, 5]));
console.log(addArrayNumbers([10, 15, 5, 20])); 