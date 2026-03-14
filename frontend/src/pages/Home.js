import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home(){

 const [pets,setPets] = useState([]);
 const [search,setSearch] = useState("");
 const [species,setSpecies] = useState("");
 const [page,setPage] = useState(1);
 const [loading,setLoading] = useState(true);

 useEffect(()=>{

  setLoading(true);

  axios.get(`http://localhost:5000/api/pets?search=${search}&species=${species}&page=${page}`)
   .then(res=>{
     setPets(res.data);
     setLoading(false);
   });

 },[search,species,page]);


 const adoptPet = async (petId) => {

  const token = localStorage.getItem("token");

  if(!token){
   alert("Please login first");
   return;
  }

  await axios.post(
   "http://localhost:5000/api/applications",
   { petId },
   {
    headers:{
     Authorization: token
    }
   }
  );

  alert("Adoption request sent");

 };

 if(loading){
  return <h3 className="text-center mt-5">Loading pets...</h3>
 }

 return(

<div className="container mt-4">

<div className="row">

{pets.map(pet=>(

<div className="col-md-4 mb-4" key={pet._id}>

<div className="card shadow-sm border-0 h-100">

<img
 src={pet.imageUrl}
 className="card-img-top"
 alt={pet.name}
 style={{
  height:"220px",
  objectFit:"cover"
 }}
/>

<div className="card-body d-flex flex-column">

<h5 className="card-title">
<Link to={`/pet/${pet._id}`}>
{pet.name}
</Link>
</h5>

<p className="card-text">
Breed: {pet.breed}
</p>

<p>
Age: {pet.age} years
</p>

<div className="mt-auto d-flex justify-content-between align-items-center">

<span
 className={`badge ${
  pet.status === "adopted"
   ? "bg-danger"
   : "bg-success"
 }`}
 style={{padding:"10px 16px", fontSize:"14px"}}
>
{pet.status.toUpperCase()}
</span>

<button
 className="btn btn-success px-4"
 disabled={pet.status === "adopted"}
 onClick={()=>adoptPet(pet._id)}
>
Adopt
</button>

</div>

</div>

</div>

</div>

))}

</div>

</div>

 );

}

export default Home;