//question 1 
ages = [3,9,23,64,2,8,28,93]; //array

function calcAges () { //creating a function 
 return ages[ages.length -1]- ages[0] //calling back to the original array then subtracting the first age from the last. 
//-1 is how we reach the last element in array
} 
console.log (calcAges ()); //call back to function

ages.push(101) //adding number 

console.log (ages[0])
console.log (calcAges()) //logging new number 

//question 2 
// Array containing names
const names1 = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculating the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names1.length; i++) {
    totalLetters += names1[i].length;
}
const averageLetters = totalLetters / names.length;
console.log("Average number of letters per name:", averageLetters);

// Concatenate all the names together, separated by spaces
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i];
    if (i < names.length - 1) {
        concatenatedNames += ' ';
    }
}
console.log("Concatenated names:", concatenatedNames);



//question 3 & 4
//How do you access the last element of any array? by using array.length -1
//How do you access the first element of any array? by using array[0]

//question 5 
let names = ["Kelly", "Sam", "Kate"];
const nameLengths = [5, 3, 4];

for (let i = 0; i < nameLengths.length; i++) {
    nameLengths[i] = names[i].length;
}

console.log(nameLengths); 

//question 6 

let sum = 0; //initalising a loop 
for (let i=0; i<nameLengths.length; i++){ // let variable (i) equal 0 when i is less the namelenghts i++ = going up 
sum += nameLengths[i] 
}
console.log (sum)

//question 7 
function pere(word, n) {
    return word.repeat(n); //multipying word * n 
}
console.log(pere("yippee", 3));

//question 8 
function fullName (firstName, lastName){ //creating function
return (firstName + " " + lastName)  //return statement 
}
console.log (fullName ("Paige","Spencer")) //testing


//question 9  
function greaterThan100(numbers) {
    const sum = numbers.reduce((num1, num2) => num1 + num2); //  adding array using arrow function 
    return sum > 100;
}
 test1 = [ 1, 5 , 80, 7, 3]
console.log (greaterThan100 (test1)) // test for false
test2 = [ 90, 10, 3, 4]
console.log (greaterThan100 (test2)) // test for true 

//question 10
function averageOfArray(numbers) {
    if (numbers.length === 0) {
        return averageOfArray; 
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
test1 [ 1, 5, 80,7,3]
console.log (averageOfArray (test1))
//question 11
function compareAverage(arr1, arr2) {
    // Calculate the average of the elements in the first array ( 0 at end is equal to the accumulator starting at 0)
    const average1 = arr1.reduce((acc, num) => acc + num, 0) / arr1.length;

    // Calculate the average of the elements in the second array
    const average2 = arr2.reduce((acc, num) => acc + num, 0) / arr2.length;

    // Compare the averages and return true if the average of the first array is greater
    return average1 > average2;
}
// Example
const array1 = [5, 3, 8, 2, 7];
const array2 = [2, 4, 6, 8, 10];
console.log(compareAverage(array1, array2)); // Output will be true if the average of array1 is greater

// question 12
function willBuyDrink (isHotOutside, moneyInPocket){
    return isHotOutside && moneyInPocket >= 10.50 //return must be equal to both paramters 
}
console.log (willBuyDrink (true, 10.50))

// question 13 
function canVote(age) { //function made to see if person(s) are old enough to vote or not
    if (age >= 18) {
        console.log("You Can Vote!");
    } else {
        console.log("You must be 18 or older to vote!");
    }
}
canVote(14)
canVote(21)