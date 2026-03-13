import React from 'react';
import { Calendar, Search } from 'lucide-react';
// Consolidated in style.css

const Passbook = () => {
  return (
    <div className="passbook-page">
      <header className="passbook-header">
        <h2>Passbook</h2>
      </header>

      <div className="passbook-content">
        <section className="passbook-title-section">
          <h3>Agent Passbook</h3>
        </section>

        <section className="search-filter-card">
          <div className="filter-grid">
            <div className="filter-group">
              <label>From Date</label>
              <div className="date-input-wrapper">
                <input type="text" placeholder="Select From Date" readOnly />
                <Calendar size={20} className="calendar-icon" />
              </div>
            </div>
            <div className="filter-group">
              <label>To Date</label>
              <div className="date-input-wrapper">
                <input type="text" placeholder="Select To Date" readOnly />
                <Calendar size={20} className="calendar-icon" />
              </div>
            </div>
            <div className="search-action-wrapper">
              <button className="passbook-search-btn">Search</button>
            </div>
          </div>
        </section>

        <section className="recent-transactions-section">
          <h3>Recent Transactions</h3>
          <div className="empty-transactions-container">
            <div className="empty-image-placeholder">
              <img src="/empty_box.png" alt="No Transactions" />
            </div>
            <div className="empty-text">
              <p className="main-msg">No Transactions Available</p>
              <p className="sub-msg">Please select a different date</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Passbook;
