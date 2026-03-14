import { Link } from "react-router-dom";

function Navbar(){
 return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">

<Link className="navbar-brand d-flex align-items-center text-white" to="/">
<span style={{fontSize:"22px", marginRight:"8px"}}>🐾</span>
<span style={{fontWeight:"600"}}>Pet Adoption System</span>
</Link>

<div>

<Link className="btn btn-outline-light me-2" to="/">
Home
</Link>

<Link className="btn btn-outline-light me-2" to="/register">
Register
</Link>

<Link className="btn btn-outline-light me-2" to="/login">
Login
</Link>

<Link className="btn btn-outline-light me-2" to="/dashboard">
Dashboard
</Link>

<Link className="btn btn-warning" to="/admin">
Admin
</Link>

</div>

</div>
</nav>

 );
}

export default Navbar;