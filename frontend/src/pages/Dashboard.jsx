import React from 'react';
import { 
  CalendarCheck, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Wallet, 
  Star,
  ChevronRight,
  MoreVertical,
  ArrowUpRight
} from 'lucide-react';
// Consolidated in style.css

const Dashboard = () => {
  const stats = [
    { title: 'Total Bookings', value: '1,280', icon: <CalendarCheck />, trend: '+12%', color: '#7B61FF' },
    { title: 'Completed Jobs', value: '850', icon: <CheckCircle2 />, trend: '+8%', color: '#10B981' },
    { title: 'Pending Requests', value: '12', icon: <Clock />, trend: '-2%', color: '#F59E0B' },
    { title: 'Monthly Earnings', value: '₹45,200', icon: <TrendingUp />, trend: '+15%', color: '#7B61FF' },
    { title: 'Wallet Balance', value: '₹12,400', icon: <Wallet />, trend: null, color: '#3B82F6' },
    { title: 'Customer Rating', value: '4.8', icon: <Star />, trend: 'Top 5%', color: '#F59E0B' },
  ];

  const recentBookings = [
    { id: 'BK-8821', customer: 'Rahul Sharma', service: 'Full Vehicle Service', date: 'Oct 24, 2023', status: 'In Progress' },
    { id: 'BK-8822', customer: 'Priya Patel', service: 'Oil Change', date: 'Oct 24, 2023', status: 'Pending' },
    { id: 'BK-8823', customer: 'Amit Singh', service: 'Brake Repair', date: 'Oct 23, 2023', status: 'Completed' },
    { id: 'BK-8824', customer: 'Sonia Verma', service: 'Car Wash', date: 'Oct 23, 2023', status: 'Cancelled' },
  ];

  const earningsSummary = [
    { label: "Today's Earnings", value: "₹1,200" },
    { label: "Weekly Earnings", value: "₹8,400" },
    { label: "Monthly Earnings", value: "₹45,200" },
    { label: "Total Earnings", value: "₹2,85,000" },
  ];

  return (
    <div className="dashboard-v2">
      {/* Hero Section */}
      <section className="dashboard-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome Back, Agent</h1>
            <p>Manage bookings and grow your earnings with Urban Black.</p>
            <button className="hero-cta">
              View New Bookings <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="hero-glass-card">
            <div className="glass-item">
              <span className="glass-label">Next Booking</span>
              <span className="glass-value">12:30 PM</span>
            </div>
            <div className="glass-divider"></div>
            <div className="glass-item">
              <span className="glass-label">Active Jobs</span>
              <span className="glass-value">04</span>
            </div>
          </div>
        </div>
      </section>

      {/* KYC Alert */}
      <div className="kyc-v2-alert">
        <div className="alert-content">
          <span className="alert-icon">⚠️</span>
          <p>Complete your KYC to unlock full earnings and premium features.</p>
        </div>
        <button className="alert-cta">Complete Now</button>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid-v2">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card-v2">
            <div className="stat-header">
              <div className="stat-icon-w" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                {stat.icon}
              </div>
              {stat.trend && (
                <span className={`stat-trend ${stat.trend.startsWith('+') ? 'up' : 'down'}`}>
                  {stat.trend}
                </span>
              )}
            </div>
            <div className="stat-body">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-title">{stat.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-main-row">
        {/* Recent Bookings Table */}
        <div className="table-container-v2">
          <div className="section-header">
            <h3>Recent Bookings</h3>
            <button className="text-btn">View All</button>
          </div>
          <table className="bookings-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Customer Name</th>
                <th>Service Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((bk) => (
                <tr key={bk.id}>
                  <td className="bk-id">{bk.id}</td>
                  <td>{bk.customer}</td>
                  <td>{bk.service}</td>
                  <td>
                    <span className={`status-pill ${bk.status.toLowerCase().replace(' ', '-')}`}>
                      {bk.status}
                    </span>
                  </td>
                  <td>
                    <button className="icon-btn-s"><MoreVertical size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Earnings Overview */}
        <div className="earnings-panel">
          <div className="section-header">
            <h3>Earnings Overview</h3>
            <ChevronRight size={20} />
          </div>
          <div className="earnings-cards">
            {earningsSummary.map((item, idx) => (
              <div key={idx} className="earning-item">
                <span className="earning-label">{item.label}</span>
                <span className="earning-value">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="earnings-chart-placeholder">
            {/* Visual placeholder for a line chart */}
            <div className="chart-bars">
              {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <div key={i} className="chart-bar" style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <div className="chart-labels">
              <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
