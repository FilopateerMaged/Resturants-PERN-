import React, {useState} from "react";

const LoginPage = () => {
const [Password,setPassword] = useState("")
  return (
    <div className="container mb-5 align-content-center">
      <h2>Username</h2>
      <input className="form-control-lg" type="text" placeholder="Username" />
      <h2>Password</h2>
      <input value={Password} className="form-control-lg" type="password" placeholder="Password" onChange={(e)=> {setPassword(e.target.value)}}/>
      <div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
