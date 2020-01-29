/**
 * Homework:  Week 7, Day 2:  Working Tic Tac Toe Game.
 * Basic logic courtesy of Anna Peterson
 * Link to her medium article: https://medium.com/javascript-in-plain-english/the-worlds-most-empowering-tic-tac-toe-javascript-tutorial-a889e4c20883
 * 
 */

let board;

let turn = "X";

let $warnMsg;

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// the below code doesn't work.
const isAWinner = () => {
  let winner = null;
console.log("checking for a winner");
  //iterate through the collection of winning moves.
  // compare each set of winning moves to our current board layout.
  // if the winning move == current board layout, return TRUE

  winningCombinations.forEach(function(combo, index) { // for each array in the array winningCombinations
    console.log(`board ${board}`);

    console.log(`combo: ${combo}`);

    if (board[combo[0]] && // check if the board square IS NOT NULL.
      board[combo[0]] === board[combo[1]] &&  // check if the first board square == second board square of the winning combo
      board[combo[0]] === board[combo[2]]) { // check if the first board square == third 
        
        winner = board[combo[0]];
      }

  });

  // still trying to get comfortable with tertiaries.

        return winner ? winner: board.includes("") ? null : "T";
}


// this function creates the playing board on the screen.
 const buildGrid = () => {
     
  // create the heading we'll use to indicate which symbol plays next.
  // initialize to the default where X starts first then add to the body of the document.
      $turnIndicator = $("<h2>").text("Welcome to Tic Tac Toe:  X plays first");
      $("script").before($turnIndicator);
      $warnMsg = $("<h2>").text("That space is taken.  Try again").css("color","red").hide();
      $turnIndicator.before($warnMsg);
  
      let $boardContainer = $("<div>").addClass("flex-container flex-column");
  
     //  build the container for the playing board.
      let $gridContainer = $("<div>").attr("id", "board").addClass("flex-container flex-wrap");
       
      $boardContainer.append($gridContainer);
  
      // build the squares
  
  for (let i =0; i<9; i++){
      let $newSquare = $("<div>").addClass(`square`);
      $gridContainer.append($newSquare);
  }
  
  // append the board container to the body of our DOM.
       $("script").before($boardContainer);

  // create the game reset button.  want it near the bottom of the screen but inside the 
  // flex container div
      // let $resetButton = $("<button>").attr("id","reset-button").text("Start new game");
      // $resetButton.on("click", init);

      // $boardContainer.append($resetButton);
  
   }
    

   // check for a win.  
   // requires three of any one mark in a row.
   // horizontally, vertically and diagonally will work.
   // what's the best way to recognize a win?
   // we need a reference that we could true back to after every turn?
   // maybe another array that maps out the win conditions?

   
    $(()=>{

      const init = () => {
        // board represents the spaces on the playing surface.
        // when the game begins, they should be empty.
        // board = [
        // '', '', '',
        // '', '', '',
        // '', '', ''
        // ];

        board = [];
    
        // basically, show a blank board because we are intializing the game
        render();
        };

// this function displays the marks in the boxes on the board.
      const render = () => {
        board.forEach(function(mark, index){
        squares[index].textContent = mark;
        console.log(`Rendering ${squares[index]} on square number ${index}`);
        });

        // display who goes next.
        // $turnIndicator.text(`It's ${turn}'s turn!`);
      };

        const handleTurn = (event) => {

          $warnMsg.hide();
          // this figures out which square was clicked 
          // and returns the corresponding array index so we can update the
          // square's display value.

          console.log(`Let's inspect the actual event`);
          console.log(event);
          console.log(`Readout of the squares array: ${squares}`);
          let idx = squares.findIndex(function(square) {
            console.log(`The current Target i.e, the square that was clicked ${event.target}`);
            // return square === event.target;
            return square === event.currentTarget;
          });
          
          console.log(`Index of square clicked = ${idx}`);

          // does this space on the board already have a mark?
          // IF NO => continue with the players turn
          // IF YES => show warning message and prompt player to select another spot.
          // keeping it simple here.

          console.log(`Before the turn assignment: ${board[idx]}`);

          if (board[idx] == null) {
              board[idx] = turn;
              console.log(`After the Turn: ${board[idx]}`);

              // using this terniary so i get comfortable with it.
              // this specifies who is up next.  X or O.
              turn = turn === 'X' ? 'O' : 'X';
          } else {
            $warnMsg.show();
            
          }

          // check to see if we have a winning play on the board.

          // win = isAWinner();
          // update the message displayed if a player has won the game.

          // let msgContent = win === "T" ? `It's a TIE!`: win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
          // $warnMsg.text(msgContent);
          // $warnMsg.show();

          // refresh the board's display.
          
          render();
        };

      
          // build the board dynamically.
      buildGrid();

      // this returns 18 items and I'm not sure why.
      const squares = Array.from(document.querySelectorAll('#board div'));
      
      // 2020.01.26 - this returns nine items like I expected.  but it causes a problem
      // in the handleTurn.  the items in the array are somehow not related to the event handlers
      // so upstream there's no match between any items in the squares array and the event recognized by 
      // the click.
      // 2020.01.28 - Out of time but some thing to think about.
      // put the event handler on the whole board and see what happens in handleTurn.
      // be sure to switch back to the jQuery selector for #board so you only get nine items.
      // const squares = Array.from($('#board').children());
      // console.log(`The array we got from the DOM is ${squares}`);
      // console.log(`Number of elements ${squares.length}`);
      

      // initialize the array that holds the values that should be displayed
      // on each square.
      init();

      // event listener - if we click a spot on the board, let's behave accordingly.
      // $("#board .square").on("click", handleTurn);
      $(".square").on("click", handleTurn);
      
      
    });   