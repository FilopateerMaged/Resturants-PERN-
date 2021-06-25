require("dotenv").config();
const express = require("express");
const db = require("./db");
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

//getting all
app.get("/api/v1/restaurants",async (req,res) => {

    try{
    const results = await db.query("select * from restaurants");
    console.log(results);
    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data:{
        restaurant: results.rows
    }})}
    catch(err)
    {console.log("error")}
});
//get a restaurant
app.get("/api/v1/restaurants/:restaurantid",async (req,res) => {
  //console.log(req.params);
  try{
      const results = await db.query(`select * from restaurants where id = $1`,[req.params.restaurantid]);
      res.status(200).json({
          status: "success",
          data:{
              restaurant: results.rows
          }
          
      })
      }
      catch(err){
          console.log(err);
      }
});
// add a restaurant
app.post("/api/v1/restaurants", async(req,res) => {
    try{
const results = await db.query("insert into restaurants (name, location, price_range) values ($1, $2, $3) returning *", [req.body.name,req.body.location,req.body.price_range])
res.status(201).json({
    status:"yay",
    data:{
    restaurant:results.rows[0]
    }
});
}
catch(err){console.log(err)}

});
//update restaurant
app.put("/api/v1/restaurants/:restaurantid", async(req,res) => {
    try{
const results = await db.query("UPDATE restaurants SET name = $1, location =$2,price_range=$3 where id = $4 returning *", [req.body.name, req.body.location, req.body.price_range, req.params.restaurantid])
res.status(200).json({
    status:"yay",
    data:{
        restaurant:results.rows[0]
    }
})
console.log(results.rows[0]);
}

    catch(err){
        console.log(err);
    }
});

app.delete("/api/v1/restaurants/:resataurantsid", async (req,res) => {
    try {
        const results = await db.query("DELETE FROM restaurants WHERE id = $1",[req.params.resataurantsid])
    res.status(204).json({
        status:"masa7na om el mat3am"
    });
    console.log(results);
    } catch (error) {
        console.log(err)
    }
    
});

const port = process.env.port || 4001;
app.listen(port, () => {
    console.log(`app is running on ${port}`);
});
