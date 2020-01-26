/**
 * Homework:  Week 7, Day 2:  Working Tic Tac Toe Game.
 * Approach to rendering the game board courtesy of Anna Peterson
 * Link to her medium article: https://medium.com/javascript-in-plain-english/the-worlds-most-empowering-tic-tac-toe-javascript-tutorial-a889e4c20883
 * 
 */

let board;

let turn = "X";

// this function creates the playing board on the screen.
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

  // create the game reset button.  want it near the bottom of the screen but inside the 
  // flex container div
      let $resetButton = $("<button>").attr("id","reset-button").text("Start new game");

      $("script").before($resetButton);
  
   }
    

    $(()=>{

      const init = () => {
        // board represents the spaces on the playing surface.
        // when the game begins, they should be empty.
        board = [
        '', '', '',
        '', '', '',
        '', '', ''
        ];
    
        // basically, show a blank board because we are intializing the game
        render();
        };

// this function displays the marks in the boxes on the board.
      const render = () => {
        board.forEach(function(mark, index){
        squares[index].textContent = mark;
        });

        // display who goes next.
        $turnIndicator.text(`It's ${turn}'s turn!`);
      };

        const handleTurn = (event) => {

          console.log("Now handling an event!");
          let idx = squares.findIndex(function(square) {
          return square === event.target;
          });

          // new code below
          board[idx] = turn;
          // check your console logs to make sure it's working!
          console.log(board);

          // using this terniary so i get comfortable with it.
          // this specifies who is up next.  X or O.
          turn = turn === 'X' ? 'O' : 'X';

          // display the board with the appropriate spot marked.
          render();
        };

      
          // build the board dynamically.
      buildGrid();

      // I'm not sure how to do this using jQuery.
      const squares = Array.from(document.querySelectorAll('#board div'));

      // const squares = Array.from($("#board").children().contents());
      
      // initialize the array that holds the values that should be displayed
      // on each square.
      init();

      // event listener - if we click a spot on the board, let's behave accordingly.
      $(".square").on("click", handleTurn);
      
      // call init function to reset the board game.
      $("#reset-button").on("click", init);
    });   