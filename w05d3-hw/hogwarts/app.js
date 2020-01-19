
const myStuff = ["butter beer", "invisibility cloak", "magic map", "time turner", "leash","Bertie Bott's Every Flavor [Jelly] Beans"];





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
            default:  // how to i specify nothing?  can i just leave it blank?
        }
    
        // append the $li to the existing $ul
        
        $ul.append($li);
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


  });