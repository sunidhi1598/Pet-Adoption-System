import { useState } from "react";
import axios from "axios";

function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async(e)=>{

    e.preventDefault();

    const res = await axios.post(
      "https://pet-adoption-system-8duc.onrender.com/api/auth/login",
      {email,password}
    );

    localStorage.setItem("token",res.data.token);

    alert("Login successful");
  };

  return(

    <div>

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)} />

        <input type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)} />

        <button type="submit">Login</button>

      </form>

    </div>

  );
}

export default Login;