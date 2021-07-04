import React, { useEffect,useState,useContext } from 'react'
import { useParams } from 'react-router'
import RestaurantAPI from '../Api/RestaurantAPI'
import { RestaurantsContext } from '../Context/RestaurantsContext'
import Card from './Card'

const DetailPage = () => {
    const {id} = useParams();
    const {selectedRes,setSelectedRes} = useContext(RestaurantsContext);

const [Name, setName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          const response = await RestaurantAPI.get(`/${id}`);
           setName(response.data.data.restaurant[0].name) ;
           setSelectedRes(response.data.data.restaurant[0])
        };
    
        fetchData();
      }, []);
   
    return (
        <>
        <div className="container">
         <h1 className=""> {selectedRes.name}'s Reviews </h1>
        <Card/>
         </div>



</>
 
    )
}

export default DetailPage
