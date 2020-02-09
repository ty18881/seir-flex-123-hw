/** create express object that
 * can be referenced in our code.
 */

const express = require("express");


/**invoke the function express */
const app = express();

let startingCount = 99;

let url = "http://localhost:3000";

let newURL;

let linkText = "Take one down and pass it around";

let remainingCans = 0;

// Helper function to count remaining cans and return appropriate URL string
// and link text


const returnURL = (req) => {

    // first call, numCans will be null.
    // so remainingCans = startingCount - 1;

    req.params.numCans != null ? remainingCans = parseInt(req.params.numCans) -1 : remainingCans = startingCount - 1;
    
    let regularURL;

    regularURL = `${url}/${remainingCans}`;


    remainingCans === -1 ? linkText="Restart Game" : linkText = "Take one down and pass it around";

    return remainingCans === -1 ? url : regularURL;

}

/**Root route: Display the starting
 * number of bottles
 */

app.get("/", (req, res) => {
    
    newURL = returnURL(req);

    res.send(`
    <html>
        <body>
            <h1>${startingCount} cans of LaCroix on the wall</h1>
            <a href="${newURL}">${linkText}</a>
        </body>
    </html
    `);
});

// alternate route, when another can is removed from the wall
app.get("/:numCans", (req, res) => {
    
    newURL = returnURL(req);

    res.send(`
    <html>
        <body>
            <h1>${req.params.numCans} cans of LaCroix on the wall</h1>
            <a href="${newURL}">${linkText}</a>
        </body>
    </html
    `);
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});