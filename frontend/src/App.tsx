import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import Dashboard from './pages/Dashboard';
import SummaryPage from './pages/Summary';
import OTPLogin from './pages/Login/OTPLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/" element={<OTPLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 