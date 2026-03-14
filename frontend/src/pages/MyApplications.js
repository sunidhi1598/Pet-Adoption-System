import { useEffect,useState } from "react";
import axios from "axios";

function MyApplications(){

const [apps,setApps] = useState([]);

useEffect(()=>{

const token = localStorage.getItem("token");

axios.get(
"http://localhost:5000/api/applications/my",
{
headers:{Authorization:token}
}
).then(res=>{
setApps(res.data);
});

},[]);

return(

<div className="container mt-4">

<h2>My Applications</h2>

{apps.map(app=>(
<div className="card p-3 mb-2" key={app._id}>

<h5>{app.petId.name}</h5>

<p>Status: {app.status}</p>

</div>
))}

</div>

);

}

export default MyApplications;