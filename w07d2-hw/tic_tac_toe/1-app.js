console.log("Are we connected?");

/**
 * REFERENCE:  https://git.generalassemb.ly/ira/SEIR-FLEX-123/tree/master/unit_1/w07d2/homework
 * MVP Requirements
 * 1.  3x3 grid with clickable squares
 * 2.  when a square is clicked, it displays X or O
 * 3.  if a square already contains a value, do not overwrite it on subsequent clicks.
 * 4.  Check for win conditions for a 3x3 grid
 */


/** Holds the position of each area on the playing board */
  let board;
  let turn = "X";


  // copying from my source - need to identify a jQuery equivalent.
  // totally understand this is bad form but just trying to understand
  // how the code is expected to behave.

  const squares = Array.from(document.querySelectorAll('#board div'));
//   let $squares = $("#board").children();
  console.log(`The Squares array: ${squares}`);

// use the heading to communicate who's turn it is to play.

let $turnIndicator;
  const messages = document.querySelector('h2');

// console.log($("#board").children()); // something's not working here.

 const buildGrid = () => {
     
// create the heading we'll use to indicate which symbol plays next.
// initialize to the default where X starts first then add to the body of the document.
    $turnIndicator = $("<h2>").text("Welcome to Tic Tac Toe:  X plays first");
    $("script").before($turnIndicator);

    let $boardContainer = $("<div>").addClass("flex-container flex-column");

   //  build the container for the playing board.
    let $gridContainer = $("<div>").addClass("flex-container flex-wrap").attr("id", "board");
     
    $boardContainer.append($gridContainer);

    // build the squares

for (let i =0; i<9; i++){
    let $newSquare = $("<div>").addClass(`square`);
    $gridContainer.append($newSquare);
}

// append the board container to the body of our DOM.
     $("script").before($boardContainer);

 }

 

 const handleTurn = (event) => {
    let index = squares.findIndex(function(square) {
       return square === event.target;
    });

    board[index] = turn;
    console.log(board);
    turn = turn === 'X' ? 'O' : 'X';

    render();
 }

 $(()=>{
  

  const init = () => {
   board = [
      "","","",
      "","","",
      "","",""
   ];
   render();
}
  const render = () => {
   board.forEach(function(mark,index){
     console.log(mark, index); 
     squares[index].textContext = mark; 
      
   });

   // indicate the change in turns.
   $turnIndicator.text(`It's ${turn}'s turn!`);
}
    buildGrid();
    init();

    /** listen for the spot where the player has clicked */

   //  $("#board").on("click", handleTurn);

   // again, need to convert this to jQuery equivalent.
   document.getElementById('board').addEventListener('click', handleTurn);
 });