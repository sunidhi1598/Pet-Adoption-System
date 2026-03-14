const router = require("express").Router();
const Application = require("../models/Application");
const Pet = require("../models/Pet");
const auth = require("../middleware/authMiddleware");


// Apply for adoption
router.post("/", auth, async (req, res) => {

 const { petId } = req.body;

 const application = await Application.create({
  userId: req.user.id,
  petId
 });

 res.json(application);

});


// Get logged-in user's applications
router.get("/my", auth, async (req, res) => {

 const apps = await Application.find({
  userId: req.user.id
 }).populate("petId");

 res.json(apps);

});


// Admin: view all applications
router.get("/all", async (req, res) => {

 const apps = await Application.find()
  .populate("petId")
  .populate("userId");

 res.json(apps);

});


// Admin: approve or reject application
router.put("/:id", async (req, res) => {

 const { status } = req.body;

 const application = await Application.findById(req.params.id);

 if (!application) {
  return res.status(404).json({ msg: "Application not found" });
 }

 application.status = status;

 await application.save();


 // If approved → update pet status
 if (status === "approved") {

  await Pet.findByIdAndUpdate(
   application.petId,
   { status: "adopted" }
  );

 }

 res.json(application);

});

module.exports = router;