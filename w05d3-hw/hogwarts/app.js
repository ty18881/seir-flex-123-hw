
  $(() => {
/** YEAR 1:  Creating an H1 element on the page */

let $container = $("#container");
console.log($container);

let $h1 = $("<h1>").text("Hogwarts");

console.log($h1);

// append the h1 to the original so it shows up.

    $container.append($h1);
  });