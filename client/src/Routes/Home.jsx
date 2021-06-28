import React from 'react'
import Header from '../Components/Header'
import AddRestaurant from '../Components/AddRestaurant'
import RestaurantList from '../Components/RestaurantList'
import Navbar from '../Components/Navbar'
const Home = () => {
    return (
        <div>
            <Navbar/>
           <Header/>
           <AddRestaurant/>
           <RestaurantList/>
        </div>
    )
}

export default Home
