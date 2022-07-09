console.log('***** Function Practice *****')
// Q1.
function hello(){
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// Q2.
function helloName( userFirstName ){
  return 'your name is: ' + userFirstName;
}
console.log('this is helloName function', helloName('Bananas')); 

// Q3.
function addNumbers(firstNumber, secondNumber){
console.log('addNumbers', firstNumber, secondNumber);
  return firstNumber + secondNumber;
  }
  console.log(addNumbers(8, 5));


// Q4.
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  console.log('multiplyThree', firstNumber, secondNumber, thirdNumber,)
return firstNumber * secondNumber * thirdNumber;
}
 console.log(multiplyThree(4,5,3));

// Q5.
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } 
  return false;
}
console.log(isPositive(-1));
console.log(isPositive(5));
console.log(isPositive(-4));


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// Q6.


function getLast( arrayOfItems ) {
  if (arrayOfItems.length > 0) {
    return arrayOfItems[ arrayOfItems.length - 1 ];
  }
  return undefined;
}
console.log( "this is getLast", getLast([1,2,3,4]), "should be", 4);
console.log( "this is getLast", getLast([]), 'should be', undefined);

// Hey Chris! Can you go into // Q6 a little more?

// while going over this assignment, it's making more sense on 
// how to write functions.
// however. I noticed when I console.log, I tend to log
// what I think it would look like instead of writing down 
// what the outcome will actually be.
// ^^^ does that make sense?

// What I am trying to say; I want to solidify my testing 
// methods, ideas, and planning.
// Any suggestions/tips?



// Q7. 
function find( value, colors ){
  let foundMatch = false;
  for(let color of colors) {
    if (value === color){
      foundMatch = true;
    }
  }
  return foundMatch;
}

// Hey chris! for question 7. I understand what to do, I still have a 
// hard time trying to figure out how to write this function. 
// May I get another example over a review session soon?

console.log(find('red', ['red', 'green', 'yellow']), 'this should be true');

// Q8.
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );











// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!









