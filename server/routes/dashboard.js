import express from "express";
import mongoose from "mongoose";
import { UserModel } from "../models/user.js";
const router = express.Router();
router.get("/diet", async (req, res) => {
  try {
    const result = await UserModel.find({});
    res.status(200).json(result);
    console.log(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/diet", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.breakfast ||
      !req.body.lunch ||
      !req.body.dinner
    ) {
      return res.status(400).send({ message: "not ok" });
    }
    let d = {
      name: req.body.name,
      breakfast: req.body.breakfast,
      lunch: req.body.lunch,
      dinner: req.body.dinner,
    };
    await UserModel.create(d);
    console.log("right");
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ message: error.message });
  }
});
export { router as DashboardRouter };
