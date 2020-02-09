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

/**TIP CALCULATOR */


app.get("/tip/:checkTotal/:tipPercentage", (req, res) => {
    let tipAmount = 0;
    console.log(req.params);
    tipAmount = parseFloat(req.params.checkTotal) * (parseFloat(req.params.tipPercentage)/100);
    res.send(`Tip Amount is ${tipAmount} dollars`);
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});