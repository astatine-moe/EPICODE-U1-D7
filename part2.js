// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */
let isMale = false;

let gender = isMale ? "Male" : "Female";

console.log("Gender:", gender, "\n");

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */
let a = 5,
    b = 3;

if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
    console.log(
        "One of the numbers is 8 or their addition or subtraction is equal to 8",
        "\n"
    );
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* WRITE YOUR ANSWER HERE */
let string1 = "I lost my par",
    string2 = "t of my string";

let string3 = string1 + string2;

console.log(string3, "\n");

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */
let n1 = 5,
    n2 = 10,
    n3 = 13;

console.log(n1, n2, n3, "from highest to lowest:");

if (n1 > n2 && n1 > n3) {
    if (n2 > n3) {
        console.log(n1, n2, n3);
    } else {
        console.log(n1, n3, n2);
    }
} else if (n2 > n1 && n2 > n3) {
    if (n1 > n3) {
        console.log(n2, n1, n3);
    } else {
        console.log(n2, n3, n1);
    }
} else if (n3 > n1 && n3 > n2) {
    if (n1 > n2) {
        console.log(n3, n1, n2);
    } else {
        console.log(n3, n2, n1);
    }
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */
n1 = 13;
n2 = 5;

let average = (n1 + n2) / 2;

console.log("\nAverage:", average, "\n");

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */
string1 =
    "This is a super long string and it just keeps going and going and going and going and going and going";
string2 = "Short string";

if (string1.length > string2.length) {
    console.log("The longest string is:", string1, "\n");
} else {
    console.log("The longest string is:", string2, "\n");
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */
let value = "A number!";

if (Number.isInteger(value)) {
    console.log(value, "is an integer\n");
} else {
    console.log(value, "is not an integer\n");
}

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */
let total = 1500,
    percentage = 20;

let result = (total * percentage) / 100;

console.log(percentage + "% of " + total + " is " + result, "\n");

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */
let number = 13;
//use modulo operator to check if number is even or odd
if (number % 2 === 0) {
    console.log(number, "is even\n");
} else {
    console.log(number, "is odd\n");
}
