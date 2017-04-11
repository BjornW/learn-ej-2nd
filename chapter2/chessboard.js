/**
 * Chapter 2: Program Structures 
 * 
 * Exercise 2: Chess Board
 * ------------------------------
 * Write a program that creates a string that represents an 8x8 grid, using
 * newline characters to seperate lines. At each position of the grid there is 
 * either a space or a '#' character. The characters should form a chessboard.
 * It should look like something like this: 
 *
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * 
 **/
var board_width = 8;
var board_height = 10;
var total_nr_tiles = board_width * board_height;
var board_tile = '#';
var board_empty_space = ' ';
var the_chess_board = '';
var remainder = 0;
var line = 0;
for (var tiles = 0; tiles < total_nr_tiles; tiles++) {
  if (line === board_width) {
    line = 0;
    the_chess_board = the_chess_board + '\n';
    if (remainder === 0) {
      remainder = 1;
    } else {
      remainder = 0;
    }
  }
  if (tiles % 2 === remainder) {
    the_chess_board = the_chess_board + board_tile;
  } else {
    the_chess_board = the_chess_board + board_empty_space;
  }
  line++;
}
console.log(the_chess_board);
