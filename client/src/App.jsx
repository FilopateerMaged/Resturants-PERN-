import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"
import Home from './Routes/Home'
import RestauratnDetailPage from './Routes/RestauratnDetailPage'
import Update from './Routes/Update'
import { RestaurantsContextProvider } from './Context/RestaurantsContext'
import Login from './Routes/Login'

const App = () => {
    return <RestaurantsContextProvider> <div>
      
        <Router>
        <Route exact path  ="/" component={Home}/>
        <Route exact path  ="/restaurants/:id/update" component={Update}/>
        <Route exact path  ="/restaurants/:id" component={RestauratnDetailPage}/>
        <Route exact path ="/login" component={Login} />
        </Router>
     
        </div>
        </RestaurantsContextProvider>
}
export default App;