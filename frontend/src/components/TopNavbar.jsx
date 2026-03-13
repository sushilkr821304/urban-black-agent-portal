import React from 'react';
import { Search, Wallet, ChevronDown, Menu, Bell } from 'lucide-react';
// Consolidated in style.css

const TopNavbar = ({ walletBalance = "0", onToggleSidebar, isSidebarClosed, agentName = "Urban Black" }) => {
  return (
    <div className="top-navbar">
      <div className="top-nav-left">
        {!isSidebarClosed && (
           <div className="welcome-msg">
             <span>Hello, </span>
             <strong>{agentName}</strong>
           </div>
        )}
        {isSidebarClosed && (
          <button className="hamburger-btn" onClick={onToggleSidebar}>
            <Menu size={24} />
          </button>
        )}
        
        <div className="search-bar-container">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search for bookings, services..." className="nav-search-input" />
        </div>
      </div>

      <div className="top-nav-right">
        <div className="wallet-pill-v2">
          <div className="wallet-icon-bg">
            <Wallet size={18} />
          </div>
          <div className="wallet-details">
            <span className="w-label">Balance</span>
            <span className="w-amount">₹{walletBalance}</span>
          </div>
          <ChevronDown size={14} className="w-dropdown" />
        </div>

        <div className="notification-bell">
          <Bell size={22} />
          <span className="bell-badge"></span>
        </div>

        <div className="profile-section-v2">
          <div className="profile-info">
            <span className="profile-name">{agentName}</span>
            <span className="profile-role">Agent</span>
          </div>
          <div className="profile-avatar-v2">
            <img src="https://ui-avatars.com/api/?name=Urban+Black&background=7B61FF&color=fff" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
