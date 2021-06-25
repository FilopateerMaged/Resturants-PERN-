import React from 'react'

const RestaurantList = () => {
    return (
        <div className="">
         <table class="table table-hover  table-dark">
  <thead>
    <tr className="table-success">
      <th scope="col">Restaurant</th>
      <th scope="col">Location</th>
      <th scope="col">Price Range</th>
      <th scope="col">Ratings</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>   
    </thead>
    <tbody>
        <tr>
        <th  scope="row">Zaza</th>
        <td>Masr el gedida</td>
        <td>$</td>
        <td>star</td>
        <td><button className="btn btn-warning">Edit</button></td>
        <td><button className="btn btn-danger">Delete</button></td>
        </tr>
        <tr>
        <th  scope="row">Abo Sala7</th>
        <td>Masr el gedida</td>
        <td>$</td>
        <td>star</td>
        <td><button className="btn btn-warning">Edit</button></td>
        <td><button className="btn btn-danger">Delete</button></td>
        </tr>
    </tbody>
    </table>
        </div>
    )
}

export default RestaurantList
