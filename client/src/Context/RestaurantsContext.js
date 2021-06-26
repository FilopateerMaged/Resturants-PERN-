import React,{useState,createContext} from 'react'

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
const [Restaurants, setRestaurants] = useState([]);

return(
    <RestaurantsContext.Provider value={{Restaurants,setRestaurants}}>

{props.children}
    </RestaurantsContext.Provider>
    
    )
    
}