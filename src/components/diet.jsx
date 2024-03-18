import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./featurecard";
import DashboardNav from "./dashboardnav";
import Footer from "./Footer";
import "./mydiet.css"

export default function Diet() {
    const [diet, setDiet] = useState(""); // Initialize with an empty string

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5001/diet");
        setDiet(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
  }, []);
  return (
    <>
    <div className="dashboard1">
        <DashboardNav />
        <h1>My Diet</h1>
        <div className="box-11">
            <h2>Breakfast</h2>
            <p>{diet.breakfast}</p>
        </div>
        <div className="box-21">
            <h2>Lunch</h2>
            <p>{diet.lunch}</p>
        </div>
        <div className="box-31">
            <h2>Dinner</h2>
            <p>{diet.dinner}</p>
        </div>
        <div className="supplements">
            <h2>Supplements</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde! Iure dicta et optio corporis unde temporibus dolor ducimus debitis ad ipsam adipisci, odit officia suscipit recusandae dolorum qui saepe!</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
