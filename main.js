// Task 1 Research
/**
 *
 * 
- What are the Primitive data types?
    -- string, boolean, number, null, undefined, 

- What are the Reference(Complex) data types we discussed in class?
    -- object, array, function

- What is the Spread Operator?
    --  ( ...) expands an repeatable (like an array or objects) into more elements.

- Research the Math object in Javascript and tell me three of the methods you find and their use.
    -- Math.SQRT2(x) // returns the square root of 2
    -- Math.round(x) // Returns x rounded to its nearest integer
    -- Math.sign(x) // returns if x is negative, null or positive

- Research the Array Methods in Javascript and tell me three of the methods you find and their use.
    --  pop() method removes the last element from an array
    -- push() method adds a new element to an array (at the end)
    -- length property provides an easy way to append a new element to an array

- Research the String Methods in Javascript and tell me three of the methods you find and their use.
    -- slice() extracts a part of a string and returns the extracted part in a new string
    -- toUpperCase()  converts to upper case 
    -- concat() joins two or more strings

- Does a string have indexes?
    -- Yes, but they don't always   

- How do we access different items in an Array?
    -- the same way you access individual items in a string - by index #

- How do we access different properties in an Object?
    --  using dot notation and/or utility functions

- How do you check a strings length?
    -- string.length is a property in JavaScript which is used to find the length of a given string.

- How do you check an arrays length?
    -- array.length is a property in JavaScript which is used to find the length of a given array

 */



// TASK 2 //

let firstName = "Kimber";

let lastName = "Mendoza";

let lovesToCode = true;



// TASK 3 //

function fullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
}

let fullName(Kimber, Mendoza)



// TASK 4  //

let book = {
    title: "Ready Player One",
    director: "Stephen Spielberg",
    publishedYear: 2018
}

let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010
}


let student = {
    name: "Kimber",
    age: 37,
    grades: [85, 90, 92]
}




// TASK 5  //

function findBiggestNumber(num1, num2) {
    findBiggestNumber = Math.max(num1, num2);
    return findBiggestNumber;
}

function checkStringsLength(str, maxLength) {
    if (str.length > maxLength) {
        return "Too Long";
    } else if (str.length <=  maxLength) {
       return "Within Limit";
    }
}
console.log(checkStringsLength("Kimber", 4))
