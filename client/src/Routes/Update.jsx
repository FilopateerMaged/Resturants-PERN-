import React, { useState,useEffect } from "react";
import UpdateRestaurant from "../Components/UpdateRestaurant";
import RestaurantAPI from "../Api/RestaurantAPI";
import { useParams } from "react-router";

const Update = () => {
    const {id} = useParams();
    const [Name,setName] = useState("")
    useEffect(() => {
        const fetchData = async () =>{
          const response = await RestaurantAPI.get(`/${id}`)
          setName(response.data.data.restaurant[0].name);
        }
        fetchData();},[])
    return(
        <div className="container align-content-center">
        <h1  className="font-weight-light display-1 text-center">{Name}</h1>
       <UpdateRestaurant/>
        </div>
    )};

export default Update;
