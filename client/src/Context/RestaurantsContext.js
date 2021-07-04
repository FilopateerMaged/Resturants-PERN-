import React,{useState,createContext} from 'react'

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
const [restaurants,setRestaurants] = useState([]);
const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants,restaurant])
}
const [selectedRes,setSelectedRes] = useState([]);



return(
    <RestaurantsContext.Provider value={{restaurants,setRestaurants,addRestaurants,selectedRes,setSelectedRes}}>

{props.children}
    </RestaurantsContext.Provider>
    
    )
    
}