const express = require('express');
const authMiddleware = require("../middlewares/authMiddleware");
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getInventoryHospitalController, getRecentInventoryController, getOrgnaisationForHospitalController, getOrgnaisationController } = require('../controllers/inventoryController');


const router = express.Router();

//ADD inventory ||POST
router.post("/create-inventory", authMiddleware,createInventoryController);

//GET all blood records
router.get("/get-inventory", authMiddleware,getInventoryController);


//GET  resect blood records
router.get("/get-recent-inventory", authMiddleware,getRecentInventoryController);

//GET all blood records
router.post("/get-inventory-hospital", authMiddleware,getInventoryHospitalController);

//GET Donar records
router.get("/get-donars", authMiddleware,getDonarsController);

//GET hospital records
router.get("/get-hospitals", authMiddleware,getHospitalController);

//GET organisation record
router.get("/get-organisation", authMiddleware,getOrgnaisationController);

//GET organisation record
router.get("/get-organisation-for-hospital", authMiddleware,getOrgnaisationForHospitalController);



module.exports = router;

