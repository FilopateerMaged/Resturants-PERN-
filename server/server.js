require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());

app.get("/api/v1/restaurants",(req,res) => {
    res.status(200).json({
        status: "success",
        data:{
        restaurant:["mcdonalds","zaza"]
    }})
});

app.get("/api/v1/restaurants/:restaurantid",(req,res) => {
  console.log(req.params);
});

app.post("/api/v1/restaurants", (req,res) => {
console.log(req.body);
});

app.put("/api/v1/restaurants/:restaurantid", (req,res) => {
    console.log(req.params.restaurantid);
});

app.delete("/api/v1/restaurants/:resataurantsid",(req,res) => {
    res.status(204).json({
        status:"sucess",
    });
});

const port = process.env.port || 4001;
app.listen(port, () => {
    console.log(`app is running on ${port}`);
});
