import React, {useEffect} from 'react'
import RestaurantAPI from '../Api/RestaurantAPI'
import { useContext } from 'react'
import { RestaurantsContext } from '../Context/RestaurantsContext'
const RestaurantList = (props) => {
    const {restaurants,setRestaurants} = useContext(RestaurantsContext)
    const handleDelete = async (id) => {
        try {
            const response = await RestaurantAPI.delete(`/${id}`)
            console.log(response)
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !==id
            }))
        } catch (error) {
            console.log(error)
        }
    
    }
useEffect( () => {
    const fetchData = async () => {
try {
    const respone = await RestaurantAPI.get("/")
    setRestaurants(respone.data.data.restaurant)
} catch (error) {}}
fetchData();
},[])
 
    return (
        <div className="">
         <table className="table table-hover  table-dark">
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
      {restaurants && restaurants.map(elem => {
          return (
          <tr key={elem.id}>
              <td>{elem.name}</td>
              <td>{elem.location}</td>
              <td>{"$".repeat(elem.price_range)}</td>
              <td>Reviews</td>
              <td><button className="btn btn-warning">Edit</button></td>
              <td><button onClick={()=>handleDelete(elem.id)} className="btn btn-danger">Delete</button></td>
          </tr>);
      })} 
    </tbody>
    </table>
        </div>
    )
}

export default RestaurantList
