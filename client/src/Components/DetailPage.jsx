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
        <div className="container">
         <h1 className=""> {Name}'s Reviews </h1>
        </div>
    )
}

export default DetailPage
