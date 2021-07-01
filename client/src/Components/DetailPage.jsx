import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import RestaurantAPI from '../Api/RestaurantAPI'

const DetailPage = () => {
    const {id} = useParams();

const [Name, setName] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          const response = await RestaurantAPI.get(`/${id}`);
           setName(response.data.data.restaurant[0].name) ;
        };
    
        fetchData();
      }, []);
   
    return (
        <>
        <div className="container">
         <h1 className=""> {Name}'s Reviews </h1>
         </div>


<div class="card text-white bg-primary">
  <div class="card-header">
    {Name}
  </div>
  <div class="card-body">
    <h5 class="card-title">Review</h5>
    <p class="card-text">Ya3.</p>
  </div>
  </div>
</>
 
    )
}

export default DetailPage
