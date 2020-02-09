/** create express object that
 * can be referenced in our code.
 */

const express = require("express");


/**invoke the function express */
const app = express();

/** GREETINGS */

app.get("/greeting", (req, res) => {
    res.send("Generic Greeting!");
});

app.get("/greeting/:name", (req, res) => {
    res.send("Greetings and Salutations " + req.params.name + "!");
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});