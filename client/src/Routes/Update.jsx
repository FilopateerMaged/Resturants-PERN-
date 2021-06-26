import React from "react";
import { RestaurantsContext } from "../Context/RestaurantsContext";

const Update = () => {
  return (
    <div className="container">
      <div>
        <form action="">
          <h1 className="">Name</h1>
          <input className="form-control" placeholder="Name"></input>
        </form>
      </div>
      <div>
        <form action="">
          <h1 className="">Location</h1>
          <input className="form-control"></input>
        </form>
      </div>
      <div>
        <form action="">
          <h1 className="">Price Range</h1>
          <input className="form-control"></input>
          <div className="">
            <button className="btn btn-primary col ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
