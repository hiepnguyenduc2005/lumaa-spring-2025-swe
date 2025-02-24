const express = require("express");
const taskController = require("../controllers/taskController");
const verifyToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", verifyToken, taskController.getTasks);           
router.post("/", verifyToken, taskController.createTask);     
router.put("/:id", verifyToken, taskController.updateTask);     
router.delete("/:id", verifyToken, taskController.deleteTask); 

module.exports = router;
