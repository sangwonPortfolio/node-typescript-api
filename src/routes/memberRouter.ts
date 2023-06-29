import { Router } from "express";
const memberController = require("../controllers/memberController");

const router = Router();

router.get("/", memberController.getMemberController);

module.exports = router;
