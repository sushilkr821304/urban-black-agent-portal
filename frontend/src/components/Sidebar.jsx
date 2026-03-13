import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  Wrench, 
  CalendarCheck, 
  Calendar, 
  CircleDollarSign, 
  Wallet, 
  History, 
  Bell, 
  Star, 
  FileCheck, 
  LifeBuoy, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
// Consolidated in style.css

const Sidebar = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'My Profile', icon: <User size={20} />, path: '/profile' },
    { name: 'My Services', icon: <Wrench size={20} />, path: '/services' },
    { name: 'Bookings', icon: <CalendarCheck size={20} />, path: '/bookings/history' },
    { name: 'Schedule', icon: <Calendar size={20} />, path: '/schedule' },
    { name: 'Earnings', icon: <CircleDollarSign size={20} />, path: '/earnings' },
    { name: 'Wallet', icon: <Wallet size={20} />, path: '/wallet' },
    { name: 'Passbook', icon: <History size={20} />, path: '/passbook' },
    { name: 'Notifications', icon: <Bell size={20} />, path: '/notifications' },
    { name: 'Customer Reviews', icon: <Star size={20} />, path: '/reviews' },
    { name: 'Documents / KYC', icon: <FileCheck size={20} />, path: '/kyc' },
    { name: 'Support / Help', icon: <LifeBuoy size={20} />, path: '/support' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo-full">
          <div className="logo-dot"></div>
          {isOpen && <span className="logo-label">Urban Black</span>}
        </div>
        <button className="toggle-btn" onClick={onToggle}>
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-item ${currentPath === item.path ? 'active' : ''}`}
            title={!isOpen ? item.name : ''}
          >
            <span className="nav-icon">{item.icon}</span>
            {isOpen && <span className="nav-label">{item.name}</span>}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item logout" title={!isOpen ? 'Logout' : ''}>
          <span className="nav-icon"><LogOut size={20} /></span>
          {isOpen && <span className="nav-label">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
