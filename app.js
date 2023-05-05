require("dotenv").config();
const express = require("express");
const ConnectDB = require("./utility/ConnectDB")
const cors = require("cors");
const route = require("./routes/submitForm");
const app = express();

/* middlewares */
app.use(cors());
app.use(express.json());


/* routes */
app.use(route)



/* Connect DB */
const PORT = process.env.PORT;
ConnectDB().then(() => {
    console.log("DB is Connected")
    app.listen(PORT, (err) => {
        if (err) console.log(err);
        console.log(`App is listening to the ${PORT}`);
    })
});