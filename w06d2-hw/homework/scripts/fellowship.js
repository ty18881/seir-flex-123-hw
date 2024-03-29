console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];


// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ====================================
//           Chapters
// ====================================


// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  // console.log('making Middle Earth');
  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth

  let $mSection = $("<section>").attr("id", "middle-earth");
  console.log($mSection);

  // 2. append the section to the body of the DOM.

  $("body").append($mSection);

  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section

    for (let i = 0; i<lands.length; i++){
      // combining steps 3a and 3b into a single line.
      let $articleTag = $("<article>").attr("id", lands[i]);

      // 3c. adding the h1

      let $nameTag = $("<h1>").text(lands[i]);

      $articleTag.append($nameTag);

      // 3d. appending all of this to the middle earth section.

      $mSection.append($articleTag);

    }

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log("Time to make the Hobbits!");
  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'

  let $ul = $("<ul>");
  // 2. make each hobbit an li element and append it to the 'ul' you just created
    // hint: use the given 'hobbits' array and use a for loop

    for (let i=0; i< hobbits.length; i++){
      
      let $li = $("<li>").text(hobbits[i]);
    
  // 3. also, give each hobbit (`li`) a class of "hobbit"

      $li.addClass("hobbit");

      $ul.append($li);
  // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id

    $("#The-Shire").append($ul);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  console.log("chapter 3 - keep it secret, keep it safe");
  // 1. create an empty div with an id of 'the-ring'

    let $theRing = $("<div>").attr("id", "the-ring");
  // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .


    // found this reference: https://www.sitepoint.com/jquery-each-function-examples/

    $(".hobbit").each(function() {
      if ($(this).text() === "Frodo Baggins")
      {
        $(this).append($theRing);
      }
    });
    
    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  console.log("Chapter 4 - Making Baddies");
  // 1. display an unordered list of baddies in Mordor

  let $newList = $("<ul>");

  // 2. give each of the baddies a class of "baddy"
  // attempting anon callback function

  baddies.forEach(function(element) {

    let $newItem = $("<li>").text(element).addClass("baddy");
    $newList.append($newItem);
  });

  // 3. remember to append the ul to Mordor
  $("#Mordor").append($newList);
  
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  console.log("Making the Buddies");
  // 1. create an aside tag and append it to middle-earth below mordor

    let $newBuddies = $("<aside>");

    $("#Mordor").after($newBuddies);

    let $newList = $("<ul>");

  // 2. display an unordered list of buddies in the aside

  buddies.forEach(function(element) {

    let $newItem = $("<li>").text(element).addClass("buddy");
    
  // 3. give each of the buddies a class of "buddy"
    $newList.append($newItem);

  });

  // 4. don't forget to append them to the aside

    $newBuddies.append($newList);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
      // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

  //Stretch: add an event handler/listener so that when you click on the `h1` The Shire, this function will be called (be sure to do it in the window.onload/document.ready function)

  console.log("Leaving the Shire");

  // pick up just the UL, not the H1 child of the Shire.
  // either one of the below options works. First one is a bit brain bendy with the NOT in there.
  // let $theHobbits = $("#The-Shire").children().not("h1");

  let $theHobbits = $("#The-Shire").children("ul");

  $("#Rivendell").append($theHobbits);

 // want to only remove the hobbits, not the h1.

  $("#The-Shire").remove("ul");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"
     // hint: You can get a list of elements by tag name, such as 'aside'

     // pull child of the aside tag. Below works because it only has one child.

     // iterate through to find Strider so he can be replaced.

     $(".buddy").each( function() {
       if ( $(this).text() == "Strider") {
         $(this).text("Aragorn");
       }
     
    });
     
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'

  let $theFellowship = $("<div>").attr("id","the-fellowship");

  // 2. add an h1 with the text 'The Fellowship' to this new div

  let $h1 = $("<h1>").text("The Fellowship");

  $theFellowship.append($h1);

  // 3. append the fellowship to middle-earth
 
    $("#middle-earth").append($theFellowship);

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  // assuming we relocate them under The Fellowship heading.  The directions didn't specify if they should also remain in their original spots
  // assuming we keep them in their separate lists as well.

  $("#the-fellowship").append($("#Rivendell").children("ul"));

  $("#the-fellowship").append($("aside").children("ul"));

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' text to 'Gandalf the White'

  // Retrieve the class to which Gandalf belongs.

    // let $theFellows = $("#the-fellowship").children("ul");
  // 2. add a class "the-white" to this element
  // iterate through the list, find Gandalf and replace the text.

  // the below works because i can pinpoint the list i'm looking for with just the class name.
  // if there were no classes, i'd need to iterate through the children.  Still need to figure that out for future reference.
      $(".buddy").each( function() {
        if ( $(this).text() == "Gandalf the Grey") {
          $(this).text("Gandalf the White");
          $(this).addClass("the-white");
        }
      
    });

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
  // assuming the alert should come when the button is pressed and this function is called??

    alert("Attention, Attention:  Horn of Gondor has been blown!");

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  // find Boromir's name in the list, call css to strikethrough the name.
    $(".buddy").each( function() {
      if ( $(this).text() == "Boromir") {
        $(this).css("text-decoration", "line-through");
        
      }
    
    });

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  // so i'm going to pull the elements with baddy class name.
  // will deleting the node during the iteration cause a problem?

  $(".baddy").each( function() {
    if ( $(this).text() == "The Uruk-hai") {
      $(this).remove();
      
    }
  
  });
    
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  $("#the-fellowship").children("ul").children().each( function() {
    console.log($(this));
    if ( $(this).text() === "Frodo Baggins" || $(this).text() === "Samwise \'Sam\' Gamgee") {
      console.log("found Sam or Frodo");
      $("#Mordor").append($(this));
    }
  
 });


  // 2. add a div with an id of 'mount-doom' to Mordor

    let $mtDoom = $("<div>").attr("id", "mount-doom");

    $("#Mordor").append($mtDoom);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor

  let $newGollum = $("<div>").attr("id", "gollum");

  $("#Mordor").append($newGollum);

  // 2. Move the ring from Frodo and give it to Gollum

  $("#gollum").append($("#the-ring"));

  // 3. Move Gollum into Mount Doom
  $("#mount-doom").append($newGollum);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM

    $("#gollum").remove();
    $("#mount-doom").empty();

  // 2. remove all the baddies from the DOM
  // both of the below options remove the list items and leave the empty UL tags behind.

  // Is there a way to remove the obsolete UL tags from under Mordor????
  
   // $(".baddy").remove();
   $("li").remove(".baddy");

   
  // 3. Move all the hobbits back to the shire

  // create new UL under The Shire

  let $newList = $("<ul>");
  $("#The-Shire").append($newList);

  // parachute all items with class hobbit into the new UL under The Shire.
  $newList.append($(".hobbit"));

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================



$(()=>{

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
});
