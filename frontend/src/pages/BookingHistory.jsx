import React from 'react';
// Consolidated in style.css

const BookingHistory = () => {
  const filterOptions = ["PNR/CNR", "Agent No.", "Customer No.", "Date Range"];
  const activeFilter = "PNR/CNR";

  return (
    <div className="booking-history-page">
      <header className="history-header">
        <h2>Booking History</h2>
      </header>

      <div className="history-content">
        <div className="search-section">
          <div className="search-bar-container">
            <div className="search-input-wrapper">
              <input type="text" placeholder="Enter PNR/CNR" className="search-input" />
              <button className="search-btn">Search Booking</button>
            </div>
            <div className="filter-options">
              <span className="filter-label">Filter Options:</span>
              <div className="filter-pills">
                {filterOptions.map((option) => (
                  <button 
                    key={option} 
                    className={`filter-pill ${activeFilter === option ? 'active' : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="no-results-placeholder">
          <div className="placeholder-content">
            <div className="placeholder-image">
               <img src="/no_results_bee.png" alt="No Bookings" />
            </div>
            <p>No Records Found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
