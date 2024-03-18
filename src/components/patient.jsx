import Card from "./featurecard";
import DashboardNav from "./dashboardnav";
import Footer from "./Footer";
import "./mydiet.css";
import { useState } from "react";
import axios from "axios";

export default function Patientdiet() {
  const[b,setb]=useState("");
  const[l,setl]=useState("");
  const[d,setd]=useState("");
  const handlesubmit=async(e)=>{
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5001/diet",
        { name:"x",breakfast:b,lunch:l,dinner:d },
    
      );

      
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <div className="dashboard1">
        <div className="dashboard__nav">
          <div className="profile">
            <img
              src="./public/img/doctor.jpg"
              alt="doctor"
              style={{ height: "100px", marginLeft: "40px" }}
            />
            <h4>Dr Amrit Singh</h4>
          </div>
          <div className="menu">
            <h2>Menu</h2>
            <a>View patients</a>
            <a>Edit info</a>
            <a>Dashboard</a>
          </div>
        </div>
        <h1>Patient diet</h1>
        <div className="box-11">
          <h2>Breakfast</h2>
          <textarea value={b} onChange={(e)=>{setb(e.target.value)}}></textarea>
        </div>
        <div className="box-21">
          <h2>Lunch</h2>
          <textarea value={l} onChange={(e)=>{setl(e.target.value)}}></textarea>
        </div>
        <div className="box-31">
          <h2>Dinner</h2>
          <textarea value={d} onChange={(e)=>{setd(e.target.value)}}></textarea>
        </div>
        <div className="supplements">
          <h2>Supplements</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure doloremque eligendi ab sed, dignissimos quod alias, quos tenetur provident minus laudantium ullam animi odio suscipit quia libero voluptatum ipsum? Libero.</p>
        </div>
        <button className="btn1" onClick={handlesubmit}>Post diet</button>
        <Footer />
      </div>
    </>
  );
}