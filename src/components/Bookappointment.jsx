import DashboardNav from "./dashboardnav";
import "./BookAppointment.css";
import AppointmentForm from "./Form";
export default function BookAppointment()
{
    return(
        <div className="Container">
            <DashboardNav />
            <AppointmentForm />
        </div>
    );
      
}