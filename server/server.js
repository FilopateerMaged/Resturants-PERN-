require("dotenv").config();
const express = require("express");

const app = express();

app.get("/getBatata",(req,res) => {
    res.json({
        status: "success",
        restaurant:"mcdonalds"
    })
});

const port = process.env.port || 4001;
app.listen(port, () => {
    console.log(`app is running on ${port}`);
});