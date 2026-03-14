import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PetDetails(){

const {id} = useParams();

const [pet,setPet] = useState(null);

useEffect(()=>{

axios.get("https://pet-adoption-system-8duc.onrender.com/api/pets/"+id)
.then(res=>{
setPet(res.data);
});

},[id]);

if(!pet) return <h3>Loading...</h3>;

return(

<div className="container mt-4">

<div className="card">

<img src={pet.imageUrl} alt={pet.name} className="card-img-top"/>

<div className="card-body">

<h3>{pet.name}</h3>

<p>Species: {pet.species}</p>

<p>Breed: {pet.breed}</p>

<p>Age: {pet.age}</p>

<p>{pet.description}</p>

</div>

</div>

</div>

);

}

export default PetDetails;