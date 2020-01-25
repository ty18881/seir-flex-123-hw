console.log("Am I linked up properly?");

// capture the user input in an array.
let toDoList = [];

const printList = () => {
    // keeping this simple.  Just empty the list and rewrite the whole thing
    // when we add items.

    console.log(`Printing out ${toDoList} to the screen`);

    //this is wonky. check if array has more than one item 
    // as a proxy for "create new UL if creating list for the first time."

    if (toDoList.length === 1){
        $("#to-do-list").append("<ul>");
    } else {
        $("ul").empty();
    }

    toDoList.forEach((item) => {
        let $addMe = $("<li>").append(item).addClass("to-do-item").css("list-style", "none");
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

$(() => {


 // recognize when the "add" button has been clicked with an event listener.

 $("button").on("click", addNewItem);

});