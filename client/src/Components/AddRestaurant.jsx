import React from "react";

const AddRestaurant = () => {
  return (
    <div className="container mb-4">
      <form action="">
        <div className="row center"> 
          <div className="col">
            <input type="text" className="form-control" placeholder="name" />
          </div>
          <div className="col">
            <input className="form-control" type="text" placeholder="location" />
          </div>
          <div className="col">
            <select className="form-select my-1 mr-sm-2">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col"> 
          <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
