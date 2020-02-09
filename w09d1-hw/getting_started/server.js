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

/** Magic 8 Ball */
let answers = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"];


    // helper function to generate a random integer between 0 and 19.
    const getRandom =() => {
        return Math.floor(Math.random() * (19 - 0 + 1) + 0);
    };

    app.get("/magic/:question", (req, res) => {
        // return the randomly selected answer to the screen between h1 tags.
        res.send(`
    <html>
        <body>
            <h2>${req.params.question}</h2>
            <h1>${answers[getRandom()]}</h1>
        </body>
    </html
    `);
    });

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});