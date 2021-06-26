import React , {useState,useContext} from "react";
import RestaurantAPI from "../Api/RestaurantAPI";
import { RestaurantsContext } from "../Context/RestaurantsContext";
const AddRestaurant = () => {
  const {addRestaurants} = useContext(RestaurantsContext)
  const [name, setname] = useState("");
  const [location, setlocation] = useState("");
  const [priceRange, setpriceRange] = useState("");
  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
const response = await RestaurantAPI.post("/",{
  name: name,
  location:location,
  price_range:priceRange
})
addRestaurants(response.data.data.restaurant)
console.log(response);
    }
    catch(err){

    }
  }
  return (
    <div className="container mb-4">
      <form action="">
        <div className="row center">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input 
             value={location}
             onChange={(e) => setlocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select className="form-select my-1 mr-sm-2"
            value={priceRange}
              onChange={(e) => setpriceRange(e.target.value)} >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col">
            <button  onClick={handleSubmit} className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
