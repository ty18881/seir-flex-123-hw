console.log("Am I linked up properly?");

// add the window onload code

$(() => {

/**
 * User enters text in the box, then clicks add.
 * The text should appear in the left hand column under "Things to Do"
 * 
 */

 let $addButton = $("#submit");
 let newItem = "";
 const addNewItem = () => {
      // capture the input into a variable.
    newItem = $("#input-box").val();
    console.log("User Typed " + newItem);
 }

 

 // recognize when the "add" button has been clicked with an event listener.

 $addButton.on("click", addNewItem);

});