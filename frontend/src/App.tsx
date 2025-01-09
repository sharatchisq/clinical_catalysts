import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  LoginPage  from './pages/Login/EmailLogin';
import Dashboard from './pages/Dashboard';
import SummaryPage from './pages/Summary';
import OTPLogin from './pages/Login/OTPLogin';
import CreatePassword from './pages/Login/CreatePassword';
import { Toaster } from 'react-hot-toast';
import ForgotPassword from './pages/Login/ForgotPassword';
import Questionnaire from './pages/Questionnaire';
import { UserProvider } from './context/UserContext';
import Summary from './pages/Summary';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/" element={<OTPLogin />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App; 