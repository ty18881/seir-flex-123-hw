/** create express object that
 * can be referenced in our code.
 */

const express = require("express");


/**invoke the function express */
const app = express();

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});