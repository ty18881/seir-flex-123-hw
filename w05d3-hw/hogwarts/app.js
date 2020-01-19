
const myStuff = ["butter beer", "invisibility cloak", "magic map", "time turner", "leash","Bertie Bott's Every Flavor [Jelly] Beans"];

const myClasses = [ 
    {day: "Monday", classes: ["Transfiguration", "Charms"]},
    {day: "Tuesday", classes: ["Potions", "History of Magic"]},
    {day: "Wednesday", classes: ["Defense Against the Dark Arts", "Astronomy"]},
    {day: "Thursday", classes: ["Herbology", "Divination"]},
    {day: "Friday", classes: ["Arithmancy" , "Muggle Studies"]}];

const tableHeaders = [ "Day", "Classes"];

  $(() => {

    // when I had this function outside of this block, i got 
    // unknown reference when the $ul.append statment attempted to execute.
    // we learned why in class but I promptly forgot the reason. 

    const addToTrunk = (element) => {
        // create new list item from the array 

        let $li = $("<li>").text(element);
    
        // add class to the secret elements {cloak, map, time turner}
    
        switch (element) {
            case "invisibility cloak":
            case "magic map":
            case "time turner":
                $li.addClass("secret");
                break;
            case "leash":
                $li.addClass("cat");
                break;
            default:  // how to i specify nothing?  can i just leave it blank?  It didn't complain so I guess so!
        }
        // append the $li to the existing $ul
        
        $ul.append($li);
    }

    // build the table headers.
    // this is a callback function for use with the headerValues array.

    const buildTableHeader = (headerValue) => {

        // put <th> tags around each column heading
        let $ColumnHeader = $("<th>").text(headerValue);

        // append column heading to the header row between the <tr> tags.

        $headerRow.append($ColumnHeader);
        
        // append this header row to the table.
        $table.append($headerRow);

        // append it to the container so it shows up on the screen.

        $container.append($table);

    }


    // this builds the rows of content for the schedule.
    // it's the callback function used for the myClasses array.

    const buildSchedule = (element) => {

        // iterate through the myClasses array and build each row of the schedule table.

        let $tableRow = $("<tr>");
        let $firstColumn = $("<td>").text(element.day);
        let $secondColumn = $("<td>").text(element.classes);

       // append this to our table with the appropriate row tags around it.

        $tableRow.append($firstColumn, $secondColumn);
        $table.append($tableRow);


    }


    /** YEAR 1:  Creating an H1 element on the page */

    let $container = $("#container");
    console.log($container);

    let $h1 = $("<h1>").text("Hogwarts");

    console.log($h1);

    // append the h1 to the original so it shows up.

    $container.append($h1);

    /** YEAR 2:  Adding more h elements and special font */

    let $name = $("<h2>").text("Tara");

    let $house = $("<h3>").text("Ravenclaw");
    let $petName = $("<h4>").addClass("cat").text("Stripes");

    let $wand = $("<h4>").text("Birch Wand with Phoenix Feather Core");

    $container.append($name, $house, $petName, $wand);

    /** YEAR 3:  Add trunk with items */

    let $ul = $("<ul>").attr("storage", "trunk");

    // adding items to the list
    // attempting to use a callback function with Array.forEach()

    myStuff.forEach(addToTrunk);

    $container.append($ul);

    /** YEAR 4:  Make a table of the classes taken */

    // build table structure

    let $table = $("<table>");
    let $headerRow = $("<tr>");

    // this function iterates over the table column headings and builds the
    // <th> pieces.

    tableHeaders.forEach(buildTableHeader);

    // now iterate over the content and build out the remaining pieces of the table.

    myClasses.forEach(buildSchedule);


  });