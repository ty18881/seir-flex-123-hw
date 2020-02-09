console.log("Am I linked up properly?");
/**
 * Part 4 (optional):  click "done" on an item and have it move to the completed column
 * Part 5 (optional):  Delete item from completed list upon request
 * Link to the MD for further details: https://git.generalassemb.ly/ira/SEIR-FLEX-123/blob/master/unit_1/w06d3/student_labs/afternoon.md
 */
// capture the user input in an array.
let toDoList = [];

let doneList =[];

const printList = () => {
    // keeping this simple.  Just empty the list and rewrite the whole thing
    // when we add items.

    console.log(`Printing out ${toDoList} to the screen`);

    // this is wonky. check if array has more than one item 
    // as a proxy for "create new UL if creating list for the first time."

    if (toDoList.length === 1){
        $("#to-do-list").append("<ul>");
    } else {
        $("ul").empty();
    }

    // don't want to mess with the style sheet so using .css construct here to 
    // drop the bullet points.
    
    toDoList.forEach((item) => {
        let $addMe = $("<li>").append(item).addClass("to-do-item").css("list-style", "none").css("font-size", "30px");
        let $completeButton = $("<button>").attr("type","button").addClass("done-button").text("Completed").css("display", "block").css("margin", "auto").css("width", "150px");
         // add event listener here.  OR - put listener on the entire container then detect when parent is clicked.
        $completeButton.on("click", completeItem);
        
        $addMe.append($completeButton);
       
              
        $("ul").append($addMe);
    });
}

const addNewItem = (event) => {
    // capture the input into a variable.
  let inputValue = $("#input-box").val();
  console.log("User Typed " + inputValue);

  // push the value to our master list of stuff to do.

        toDoList.push(inputValue);

    // now call function to print the revised list to the screen

    printList();
  
}

const completeItem = () => {
    /**
     * When user clicks the "completed" button, 
     * 1.  item should move to "things that are done column"
     * 2.  item should no longer appear in the "things to do" column
     */
    console.log("Completed: Listener Triggered");

    // step 1:  change id value to completed on the item.

    if (doneList.length === 1){
        $("#completed").append("<ul>");
    } else {
        $("ul").empty();
    }
    $(this).attr("id","completed");

    



}


$(() => {


 // recognize when the "add" button has been clicked with an event listener.

 $("#submit").on("click", addNewItem);

 // recognize when "completed" button is pressed with an event listener.

 


});