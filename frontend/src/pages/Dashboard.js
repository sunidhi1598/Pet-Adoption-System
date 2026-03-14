import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard(){

  const [pets,setPets] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:5000/api/pets")
    .then(res=>{
      setPets(res.data);
    });

  },[]);

  const applyAdoption = async(petId)=>{

    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/applications",
      {petId},
      {
        headers:{
          Authorization:token
        }
      }
    );

    alert("Application submitted");

  };

  return(

    <div>

      <h1>Adopt a Pet</h1>

      {pets.map(pet=>(
        <div key={pet._id}>

          <h3>{pet.name}</h3>

          <button
          onClick={()=>applyAdoption(pet._id)}>
            Adopt
          </button>

        </div>
      ))}

    </div>

  );
}

export default Dashboard;