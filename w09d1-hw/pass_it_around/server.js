/** create express object that
 * can be referenced in our code.
 */

const express = require("express");


/**invoke the function express */
const app = express();

/**Root route: Display the starting
 * number of bottles
 */

app.get("/", (req, res) => {
    res.send(`
    <html>
        <body>
            <h1>99 cans of LaCroix on the wall</h1>
            <a href="localhost:3000/98">Take one down, pass it around</a>
        </body>
    </html
    `);
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});