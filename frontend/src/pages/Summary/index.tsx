import React from "react";
import { motion } from 'framer-motion';
import { Header } from "../../components/ui/Header";
import { Navigation } from "../../components/ui/Navigation";
import { MedicalFlags, Flag } from "../../components/charts/MedicalFlags";
import { ScoreChart } from "../../components/charts/ScoreChart";
import { MedicalHistory } from "../../components/charts/MedicalHistory";
import { DashboardStats } from "../../components/ui/DashboardStats";
import { useLocation, Navigate } from 'react-router-dom';

// Sample data
const sampleFlags: Flag[] = [
  { condition: "Cancer", severity: "high" as const },
  { condition: "Stroke", severity: "medium" as const },
  { condition: "Cardiac Problems", severity: "high" as const },
];

const sampleScores = [
  { category: "Functional Assessment", value: 75, maxValue: 100 },
  { category: "Behavioral Assessment", value: 85, maxValue: 100 },
  { category: "Cognitive Assessment", value: 60, maxValue: 100 },
];

const sampleHistory = [
  {
    condition: "Cancer",
    date: "2022-05-15",
    details: "Diagnosed with stage 2 breast cancer, underwent chemotherapy",
  },
  {
    condition: "Stroke",
    date: "2023-01-10",
    details: "Minor stroke, recovered with physical therapy",
  },
  {
    condition: "Cardiac Problems",
    date: "2023-08-20",
    details: "Diagnosed with arrhythmia, on medication",
  },
];

const dashboardStats = {
  workload: 88,
  urgent: 0,
  pending: 4,
  inProgress: 38,
  completed: 265,
};

export default function Summary() {
  const location = useLocation();
  const completed = location.state?.completed;

  // Redirect if accessed directly without completing questionnaire
  if (!completed) {
    return <Navigate to="/questionnaire" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <motion.div 
        className="py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Patient Summary
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="md:col-span-8">
              <DashboardStats stats={dashboardStats} />
            </div>
            <div className="md:col-span-4">
              <MedicalFlags flags={sampleFlags} />
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ScoreChart scores={sampleScores} />
            <MedicalHistory history={sampleHistory} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
