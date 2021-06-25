import React from 'react'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Home from './Routes/Home'
import RestauratnDetailPage from './Routes/RestauratnDetailPage'
import Update from './Routes/Update'

const App = () => {
    return <div>
      
        <Router>
        <Route exact path  ="/" component={Home}/>
        <Route exact path  ="/restaurants/:id/update" component={Update}/>
        <Route exact path  ="/restaurants/:id" component={RestauratnDetailPage}/>
        </Router>
     
        </div>
}
export default App;