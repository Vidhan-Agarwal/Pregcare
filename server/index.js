import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { DashboardRouter } from "./routes/dashboard.js";
import { UserModel } from "./models/user.js";
import { AppointModel } from "./models/appointment.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/diet", async (req, res) => {
  try {
    const result = await UserModel.findOne().sort({ _id: -1 });

    res.status(200).json(result);
    console.log(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.post("/diet", async (req, res) => {
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
    res.json(d);
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ message: e.message });
  }
});
app.post("/appointment", async (req, res) => {
  try {
    if (!req.body) {
      res.json({ error: "not ok" });
    }
    let ap = {
      name: req.body.name,
      lname: req.body.lname,

      checkup: req.body.checkup,
      phone: req.body.phone,
      email: req.body.email,
      time: req.body.time,
      date: req.body.date,
    };
    await AppointModel.create(ap);
    console.log(ap);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});
app.get("/appointment", async (req, res) => {
  try {
    const a = await AppointModel.find({}).sort({ _id: -1 });
    res.status(200).json(a);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});
app.listen(5001, (err) => {
  if (err) {
    console.log(err);
  } else {
    dataconnect();
    console.log("Server running");
  }
});

async function dataconnect() {
  try {
    console.log("Trying to connect to database");
    await mongoose.connect(
      "mongodb+srv://root:rootpass@cluster0.66thkjl.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected");
  } catch (e) {
    console.log(e);
  }
}
