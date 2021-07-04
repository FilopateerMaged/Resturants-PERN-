import React, {useEffect,useContext} from 'react'
import { RestaurantsContext } from '../Context/RestaurantsContext'
import RestaurantAPI from '../Api/RestaurantAPI'
import Stars from './Stars'

const Card = () => {
const {selectedRes} = useContext(RestaurantsContext)
useEffect(() => {
 const fetchData = async() => {
    const response = await RestaurantAPI.get(`/reviews/${selectedRes.id}`)
    console.log(response.data.data.reviews[0])

}
fetchData();
},[]);

   
    return (
        <div>
            <div class="card text-white bg-primary" style={{maxWidth: "30%"}}>
  <div class="card-header">
      {selectedRes.name}
 <Stars rating={selectedRes.id}/>
  </div>
  <div class="card-body">
    <h5 class="card-title">Review</h5>
    <p class="card-text">Ya3.</p>
  </div>
  </div>
        </div>
    )
}

export default Card
