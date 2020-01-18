
  $(() => {
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
  });