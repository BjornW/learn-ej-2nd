/**
 * Chapter 2: Program Structures 
 * 
 * Exercise 2: FizzBuzz
 * ------------------------------
 * Write a program that uses console.log 
 * to print all the numbers from 1 to 100. 
 * With two exceptions. 
 * For numbers divisible by 3 print "Fizz" instead 
 * of the number.
 * For numbers divisible by 5 (and not 3) print "Buzz" instead.
 * When you have that working, modify your progran to print "FizzBuzz" 
 * for numbers that are divisible by both 3 and 5.
**/ 

var result; 
var counter = 0; 
while( counter < 100 ) {
  if( (counter % 3 === 0) && (counter % 5 === 0) ) {
    console.log("FizzBuzz");
  } else if( counter % 3 === 0 ) {
    console.log("Fizz" );
  } else if( counter % 5 === 0 ) {
    console.log( "Buzz");
  } else {
    console.log( counter ); 
  }
  counter++ ;
}
 
