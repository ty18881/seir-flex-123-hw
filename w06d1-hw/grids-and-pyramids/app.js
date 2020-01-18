/**Week Six, Day 1 Morning Lab - Creating Checkerboard and other repeating patterns. */
  const generateSquares = (numberOfSquares) => {
    for (let i=1; i <= numberOfSquares; i++) {
      const $square = $('<div>').addClass('square');

      // add size and color class to each div
      $square.addClass("color");
      $square.addClass("size");
      // now we need to alternate colors.  Putting it here but maybe a candidate for a separate function later?
      if (i % 2 === 0 ){
          $square.css("background-color", "rgb(0,0,0)");
          $square.addClass("even");
      } else {
        $square.css("background-color", "rgb(255,0,0)");
        $square.addClass("odd");
      }

      $square.text(i); 
      $square.attr("id", `Square${i}`);
      $('body').append($square);
    }
  }

//   const randColorRGB = () => {
// 	const red = Math.floor( Math.random() * 256 ); // generate random value up to and including 256
// 	const green = Math.floor( Math.random() * 256 );
// 	const blue = Math.floor( Math.random() * 256 );
//     // return "rgb(" + red + "," + green + "," + blue + ")";
//     return `rgb(${red}, ${green}, ${blue})`;
// }


// now we want to organize the squares into 8 rows of 8 columns.
// can we put a <div> around every eight elements, then size that div?


  $(()=>{
    generateSquares(64);
    
    for (let xAxis=0; xAxis< 8; xAxis+=1){
        for (let yAxis=0; yAxis < 8; yAxis+=1){
            console.log(`[${xAxis}]${yAxis}`);
        }
        console.log(`Starting new Row\n`);
    }
});