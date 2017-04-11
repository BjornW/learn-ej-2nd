/**
 * Chapter 2: Program Structures 
 * 
 * Exercise 1: Looping a triangle
 * ------------------------------
 * Write a loop that makes seven calls to console.log to output the following:
 * #
 * ## 
 * ###
 * ####
 * #####
 * ######
 * #######
 */
var triangle_char = '#';
var triangles = '';
for (var i = 0; i < 8; i++) {
  triangles = triangles + triangle_char;
  console.log(triangles);
}

