const router = require("express").Router();
const Pet = require("../models/Pet");

router.get("/", async (req, res) => {

 const { search, species, page = 1, limit = 5 } = req.query;

 let query = {};

 if (search) {
  query.name = { $regex: search, $options: "i" };
 }

 if (species) {
  query.species = species;
 }

 const pets = await Pet.find(query)
   .skip((page - 1) * limit)
   .limit(parseInt(limit));

 res.json(pets);

});

router.post("/", async(req,res)=>{

 const pet = await Pet.create(req.body);

 res.json(pet);

});

router.put("/:id", async(req,res)=>{

 const pet = await Pet.findByIdAndUpdate(
  req.params.id,
  req.body,
  {new:true}
 );

 res.json(pet);

});

router.delete("/:id", async(req,res)=>{

 await Pet.findByIdAndDelete(req.params.id);

 res.json({msg:"Pet deleted"});

});

module.exports = router;