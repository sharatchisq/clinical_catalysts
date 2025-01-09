import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { Sidebar } from "../../components/ui/dashboard/Sidebar";
import { AppointmentButtons } from "../../components/ui/dashboard/AppointmentButtons";
import { PatientFlowChart } from "../../components/ui/dashboard/PatientFlowChart";
import { UpcomingAppointmentsCard } from "../../components/ui/dashboard/UpcomingAppointmentsCard";
import { RecentAssessmentsCard } from "../../components/ui/dashboard/RecentAssessmentsCard";
import { HighRiskPatientsCard } from "../../components/ui/dashboard/HighRiskPatientsCard";
import { PatientDemographicsCard } from "../../components/ui/dashboard/PatientDemographicsCard";
import { TreatmentProgressCard } from "../../components/ui/dashboard/TreatmentProgressCard";
import { PatientDistributionCard } from "../../components/ui/dashboard/PatientDistributionCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const { user, logout } = useUser();
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnswers = async () => {
      const response = await axios.get(`http://localhost:8080/answers/condition/flags`);
      setAnswers(response.data);
    };
    fetchAnswers();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar onLogout={handleLogout} />

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">
          Hello, {user?.f_name} {user?.l_name}
        </h1>

        <AppointmentButtons />

        <div className="grid grid-cols-3 gap-4">
          {/* First row */}
          <UpcomingAppointmentsCard />
          <RecentAssessmentsCard />
          <HighRiskPatientsCard answers={answers} />

          {/* Second row - 2 columns, 3rd column is taken by pie chart */}
          <PatientDemographicsCard />
          <TreatmentProgressCard />

          {/* Pie chart spanning 2 rows in 3rd column */}
          <div className="row-span-2">
            <PatientDistributionCard />
          </div>

          {/* Third row - Line chart spans 2 columns */}
          <div className="col-span-2">
            <PatientFlowChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
