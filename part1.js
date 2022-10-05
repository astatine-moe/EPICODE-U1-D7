/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */
console.log("- Datatypes in JavaSCript:");
console.log(
    "String:  A string is a sequence of letters used to create text. It is the most common datatype used in JavaScript. (e.g 'A string!')"
);
console.log(
    "Integer: An integer is a whole number. It is a number that does not have a decimal point. (e.g. 1)"
);
console.log(
    "Float:   A float is a number that has a decimal point. (e.g. 1.5)"
);
console.log(
    "Boolean: A boolean is a data type that can only be true or false. (e.g. true)\n"
);

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */
console.log(
    "A variable is a value that can be set, changed, and used in a computer program. Sort of like a physical box that can hold an item.\n"
);

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */
console.log("Sum of 12 and 20:", 12 + 20);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */
let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */
let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */
console.log("Subtraction of 12 and x: ", 12 - x, "\n");

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */
let name1 = "john",
    name2 = "John";

if (name1 !== name2) {
    console.log("name1 is different from name2");
}
if (name1.toLowerCase() === name2.toLowerCase()) {
    console.log("name1 and name2 are the same if both are lowercase\n");
}

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */
x = 5;
let xString;
if (x === 1) {
    xString = "one";
} else if (x === 2) {
    xString = "two";
} else if (x === 3) {
    xString = "three";
} else if (x === 4) {
    xString = "four";
} else if (x === 5) {
    xString = "five";
} else if (x === 6) {
    xString = "six";
} else if (x === 7) {
    xString = "seven";
} else if (x === 8) {
    xString = "eight";
} else if (x === 9) {
    xString = "nine";
} else {
    xString = "x is not less than 10";
}

console.log("x as literal:", xString, "\n");

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
let message = name === "John Doe" ? "Welcome back, John" : "Who are you?";

console.log(message);
