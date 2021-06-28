import React from 'react'

const Navbar = () => {
    return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
      
       <div className="container-fluid">
       <a className="navbar-brand" href="#">Where To Eat?</a>
        <form className="d-flex">
            <button className="btn btn-primary">Login</button>
        </form>
        </div>
      
      </nav>
      </div>
    )
}

export default Navbar
