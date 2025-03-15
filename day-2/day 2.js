// Declare a variable named challenge and assign it to an initial value
let challenge = '30 Days Of JavaScript';

// Print the string on the browser console
console.log(challenge);

// Print the length of the string
console.log(challenge.length);

// Change all the string characters to capital letters
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring()
console.log(challenge.substr(3)); // Removes '30 '

console.log(challenge.substring(3)); // Removes '30 '

// Slice out the phrase "Days Of JavaScript"
console.log(challenge.slice(3));

// Check if the string contains a word "Script" using includes() method
console.log(challenge.includes('Script'));

// Split the string into an array using split() method
console.log(challenge.split(''));

// Split the string at the space using split() method
console.log(challenge.split(' '));

// Split 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' at the comma
let techCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(techCompanies.split(', '));

// Change '30 Days Of JavaScript' to '30 Days Of Python' using replace() method
console.log(challenge.replace('JavaScript', 'Python'));

// Find the character at index 15
console.log(challenge.charAt(15));

// Find the character code of 'J' using charCodeAt()
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// Use indexOf to determine the position of the first occurrence of 'a'
console.log(challenge.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of 'a'
console.log(challenge.lastIndexOf('a'));

// Find the first occurrence of 'because' in a sentence
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// Find the last occurrence of 'because'
console.log(sentence.lastIndexOf('because'));

// Use search() to find the first occurrence of 'because'
console.log(sentence.search('because'));

// Use trim() to remove trailing whitespace
let trimmedString = ' 30 Days Of JavaScript ';
console.log(trimmedString.trim());

// Use startsWith() to check if the string starts with '30 Days Of JavaScript'
console.log(challenge.startsWith('30 Days Of JavaScript'));

// Use endsWith() to check if the string ends with 'JavaScript'
console.log(challenge.endsWith('JavaScript'));

// Use match() to find all occurrences of 'a'
console.log(challenge.match(/a/g));

// Use concat() to merge strings
console.log('30 Days Of '.concat('JavaScript'));

// Use repeat() to print '30 Days Of JavaScript' 2 times
console.log(challenge.repeat(2));

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to 'help' one another.");

console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// Check the type of '10' and 10
console.log(typeof '10');
console.log(typeof 10);  

// Compare them
console.log(typeof '10' === typeof 10);

// Convert '10' to a number
let num = Number('10');

// Check again
console.log(typeof num === typeof 10);
console.log(num);

// Check if parseFloat('9.8') is equal to 10, if not make it exactly equal to 10
console.log(parseFloat('9.8') === 10); // Output: false

// Convert it to 10
let num = Math.ceil(parseFloat('9.8'));
console.log(num === 10); // Output: true

// Check if 'on' is found in both "python" and "jargon"
console.log('python'.includes('on') && 'jargon'.includes('on')); // Output: true

// Check if 'jargon' is in the sentence
let sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon')); // Output: true

// Generate a random number between 0 and 100 (inclusive)
let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1);

// Generate a random number between 50 and 100 (inclusive)
let randomNum2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum2);

// Generate a random number between 0 and 255 (inclusive)
let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3);

// Access a random character from the 'JavaScript' string
let jsString = 'JavaScript';
let randomIndex = Math.floor(Math.random() * jsString.length);
console.log(jsString[randomIndex]); // Outputs a random character

console.log("1  1  1   1    1\n2  1  2   4    8\n3  1  3   9   27\n4  1  4  16   64\n5  1  5  25  125");

let sentence = 'You cannot end a sentence with because because because is a conjunction';

// Find the starting index of "because because because"
let startIndex = sentence.indexOf('because because because');

// Slice it out using substr()
let newSentence = sentence.substr(0, startIndex) + sentence.substr(startIndex + 'because because because'.length);

console.log(newSentence);

let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

// Use match() with case-insensitive regex /love/gi
let matches = sentence.match(/love/gi);

// Count occurrences
let count = matches ? matches.length : 0;

console.log(count);

let sentence = 'You cannot end a sentence with because because because is a conjunction.';

// Use match() with case-sensitive regex /because/g
let matches = sentence.match(/because/g);

// Count occurrences
let count = matches ? matches.length : 0;

console.log(count);

const text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

// Extract numbers from the text
const numbers = text.match(/\d+/g).map(Number); // [5000, 10000, 15000]

// Calculate total annual income
const monthlySalary = numbers[0] * 12; // 5000 * 12
const annualBonus = numbers[1];        // 10000 (already annual)
const monthlyCourses = numbers[2] * 12; // 15000 * 12

const totalAnnualIncome = monthlySalary + annualBonus + monthlyCourses;

console.log("Total Annual Income:", totalAnnualIncome, "euro");
