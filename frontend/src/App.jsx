import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Kyc from './pages/Kyc';
import BookingHistory from './pages/BookingHistory';
import Wallet from './pages/Wallet';
import Passbook from './pages/Passbook';
import Schedule from './pages/Schedule';
import Reviews from './pages/Reviews';
// No individual CSS import needed, consolidated in style.css

// Placeholder components for brevity
const MyProfile = () => <div><h2>My Profile</h2><p>Coming Soon...</p></div>;
const MyServices = () => <div><h2>My Services</h2><p>Coming Soon...</p></div>;
const Earnings = () => <div><h2>Earnings Analytics</h2><p>Coming Soon...</p></div>;
const Notifications = () => <div><h2>Notifications</h2><p>Coming Soon...</p></div>;
const Support = () => <div><h2>Support & Help</h2><p>Coming Soon...</p></div>;
const Settings = () => <div><h2>Settings</h2><p>Coming Soon...</p></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } 
        />
        <Route 
          path="/kyc" 
          element={
            <DashboardLayout>
              <Kyc />
            </DashboardLayout>
          } 
        />
        <Route 
          path="/bookings/history" 
          element={
            <DashboardLayout>
              <BookingHistory />
            </DashboardLayout>
          } 
        />
        <Route 
          path="/wallet" 
          element={
            <DashboardLayout>
              <Wallet />
            </DashboardLayout>
          } 
        />
        <Route 
          path="/passbook" 
          element={
            <DashboardLayout>
              <Passbook />
            </DashboardLayout>
          } 
        />
        <Route path="/profile" element={<DashboardLayout><MyProfile /></DashboardLayout>} />
        <Route path="/services" element={<DashboardLayout><MyServices /></DashboardLayout>} />
        <Route path="/schedule" element={<DashboardLayout><Schedule /></DashboardLayout>} />
        <Route path="/earnings" element={<DashboardLayout><Earnings /></DashboardLayout>} />
        <Route path="/notifications" element={<DashboardLayout><Notifications /></DashboardLayout>} />
        <Route path="/reviews" element={<DashboardLayout><Reviews /></DashboardLayout>} />
        <Route path="/support" element={<DashboardLayout><Support /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
