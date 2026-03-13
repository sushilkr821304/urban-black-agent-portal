import React from 'react';
import { Calendar as CalendarIcon, Clock, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
// Consolidated in style.css

const Schedule = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [
    { day: 'Sun', date: 22 }, { day: 'Mon', date: 23 }, { day: 'Tue', date: 24, active: true },
    { day: 'Wed', date: 25 }, { day: 'Thu', date: 26 }, { day: 'Fri', date: 27 }, { day: 'Sat', date: 28 }
  ];

  const slots = [
    { time: '09:00 AM', available: true, booking: null },
    { time: '10:00 AM', available: false, booking: 'Rahul Sharma - Service' },
    { time: '11:00 AM', available: true, booking: null },
    { time: '12:00 PM', available: false, booking: 'Priya Patel - Oil Change' },
    { time: '01:00 PM', available: true, booking: null },
    { time: '02:00 PM', available: true, booking: null },
    { time: '03:00 PM', available: false, booking: 'Busy' },
  ];

  return (
    <div className="schedule-page">
      <header className="page-header">
        <div className="header-text">
          <h2>Schedule / Calendar</h2>
          <p>Manage your availability and upcoming bookings.</p>
        </div>
        <button className="primary-btn-s"><Plus size={18} /> Add Block Out</button>
      </header>

      <div className="schedule-content">
        <div className="calendar-strip-card">
          <div className="strip-header">
            <div className="month-nav">
              <h3>October 2023</h3>
              <div className="nav-arrows">
                <button className="icon-btn-s"><ChevronLeft size={18} /></button>
                <button className="icon-btn-s"><ChevronRight size={18} /></button>
              </div>
            </div>
            <button className="text-btn">Today</button>
          </div>
          <div className="dates-strip">
            {dates.map((d, i) => (
              <div key={i} className={`date-cell ${d.active ? 'active' : ''}`}>
                <span className="d-day">{d.day}</span>
                <span className="d-date">{d.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="slots-container">
          <div className="section-title-row">
            <h4>Availability Slots</h4>
            <div className="legend">
              <span className="l-item av">Available</span>
              <span className="l-item bk">Booked</span>
            </div>
          </div>
          <div className="slots-list">
            {slots.map((slot, i) => (
              <div key={i} className={`slot-card ${slot.available ? 'available' : 'booked'}`}>
                <div className="slot-time">
                  <Clock size={16} />
                  <span>{slot.time}</span>
                </div>
                <div className="slot-info">
                  {slot.available ? (
                    <span className="status-label">Available</span>
                  ) : (
                    <span className="booking-name">{slot.booking}</span>
                  )}
                </div>
                <button className="slot-action">
                  {slot.available ? 'Block' : 'View Details'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
