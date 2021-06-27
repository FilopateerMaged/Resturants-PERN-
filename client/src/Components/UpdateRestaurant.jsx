import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantAPI from "../Api/RestaurantAPI";
import { useHistory } from "react-router";

const UpdateRestaurant = (props) => {
  let history = useHistory();
  const { id } = useParams();
  const [Name, setName] = useState("");
  const [Location, setLocation] = useState("");
  const [PriceRange, setPriceRange] = useState("");
 
const handleSubmit = async(e) => {
   e.preventDefault()
try {
  const updateRest = await RestaurantAPI.put(`/${id}`,{
    name:Name,
    location: Location,
    price_range: PriceRange
  })
   history.push('/')
} catch (error) {
  console.log(error)
}
 }
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantAPI.get(`/${id}`);
      console.log(response.data.data.restaurant[0].id);
      setName(response.data.data.restaurant[0].name);
      setLocation(response.data.data.restaurant[0].location);
      setPriceRange(response.data.data.restaurant[0].price_range);
    };
 
 
 
 
    fetchData();
  }, []);

  return (
    <div className="container">
      <div>
        <form action="">
          <h1 className="">Name</h1>
          <input
            value={Name}
            placeholder={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
          ></input>
        </form>
      </div>
      <div>
        <form action="">
          <h1 className="">Location</h1>
          <input
            value={Location}
            placeholder={Location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            className="form-control"
          ></input>
        </form>
      </div>
      <div>
        <form>
          <h1>Price Range</h1>
          <select
            value={PriceRange}
            className="form-select my-1 mr-sm-2"
            placeholder={PriceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
          <div className="">
            <button onClick={handleSubmit} className="btn btn-primary col ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRestaurant;
