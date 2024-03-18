import Card from "./featurecard"
import DashboardNav from "./dashboardnav"
import Footer from "./Footer"
import './dashboard.css'

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function ReaminderCard({color,description})
{
    return(
    <div className='ReminderCard' id={color}> 
    <h2 className='ReminderCard__description'>{description}</h2>
    </div>)
}
export  default function Dashboard(){
  return(
     <>
        <div className="dashboard">
          <div className="dashboard__top">
            <h2>Mon,18th march</h2>
          </div>
          <DashboardNav />
          
          <div className="Card-container-1">
            <Link to="/diet">
            
            <Card description="Diet" color="Card1" />
            </Link>
            <Card description="Your Next Checkup" color="Card2" />
            
            
          </div>
      
          <div className="Card-container-2">
            <Link to="/appointment">
            <Card description="My appointments" color="Card3" />
            </Link>
            <Card description="Books" color="Card4" />
          </div>
          <div className="reminders">
            <h2 style={{color:"black" , fontSize:40}}>Reminders</h2>
            <ReaminderCard
              description="Medicine due in 45 minutes"
              color="blue"
            />
            <ReaminderCard description="Stay hydrated" color="orange" />
            <ReaminderCard description="Take supplements" color="pink" />
          </div>
          <div className="box-1">
            <h1>Dr Amrit Singh</h1>
            <p>History</p>
          </div>
          <div className="box-2">
            <img className="doctor" src="./public/img/doctor.jpg" alt="doctor" />
            <p>
              Welcome to the practice of Dr. [Name], your dedicated partner in
              women's health and pregnancy journey. With a blend of expertise,
              compassion, and personalized care, Dr. [Name] specializes in
              obstetrics and gynecology, guiding you through every stage of
              womanhood with confidence and comfort. From routine check-ups to
              complex pregnancies, rest assured you're in capable hands. Your
              health and well-being are our top priorities. Schedule your
              appointment today and embark on a journey of care tailored just
              for you.
            </p>
          </div>
            <Footer />
        </div>
      </>
  )
}
