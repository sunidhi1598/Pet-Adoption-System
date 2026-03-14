import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard(){

 const [applications,setApplications] = useState([]);

 useEffect(()=>{

  axios.get("http://localhost:5000/api/applications/all")
  .then(res=>{
   setApplications(res.data);
  });

 },[]);

 const updateStatus = async(id,status)=>{

  await axios.put(
   "http://localhost:5000/api/applications/"+id,
   {status}
  );

  alert("Status updated");

  window.location.reload();

 }

 return(

  <div>

   <h1>Admin Dashboard</h1>

   {applications.map(app=>(
    <div key={app._id} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>

     <p><b>User:</b> {app.userId?.email}</p>

     <p><b>Pet:</b> {app.petId?.name}</p>

     <p><b>Status:</b> {app.status}</p>

     <button onClick={()=>updateStatus(app._id,"approved")}>
      Approve
     </button>

     <button onClick={()=>updateStatus(app._id,"rejected")}>
      Reject
     </button>

    </div>
   ))}

  </div>

 );

}

export default AdminDashboard;