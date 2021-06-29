import React from "react";
import { useHistory } from "react-router";

const Navbar = () => {
  const history = useHistory();
  const handlePress = () => {
    history.push("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Where To Eat?
          </a>
          <form className="d-flex">
            <button onClick={handlePress} className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
