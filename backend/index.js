const express = require("express");
const cors = require("cors");
const { connect } = require("./config/db");
const { api } = require("./routes/api");
const app = express();

app.use(cors("*"));

app.use(express.json())

app.get('/', (ask, give) => {
    give.send('This is the Task 1')
})

app.use('/api',api)

app.listen(3000, () => {
    try {
        connect
        console.log(`Connected to the DB and server is running at 3000`)
    } catch (error) {
        console.log(error);
        console.log("Error in connecting to the DB")
    }
})