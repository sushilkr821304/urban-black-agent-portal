import React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
// Consolidated in style.css

const MyServices = () => {
  const services = [
    { name: 'Full Vehicle Service', price: '₹2,500', status: 'Active', category: 'Maintenance' },
    { name: 'Oil & Filter Change', price: '₹800', status: 'Active', category: 'Maintenance' },
    { name: 'Brake Inspection', price: '₹500', status: 'Inactive', category: 'Safety' },
    { name: 'Interior Deep Clean', price: '₹1,200', status: 'Active', category: 'Cleaning' },
  ];

  return (
    <div className="services-page">
      <header className="page-header">
        <div className="header-text">
          <h2>My Services</h2>
          <p>Manage the services you offer to customers.</p>
        </div>
        <button className="primary-btn-s"><Plus size={18} /> Add New Service</button>
      </header>

      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <div className="service-card-header">
              <span className={`status-tag ${service.status.toLowerCase()}`}>{service.status}</span>
              <span className="category-tag">{service.category}</span>
            </div>
            <div className="service-card-body">
              <h3>{service.name}</h3>
              <div className="price-tag">{service.price}</div>
            </div>
            <div className="service-card-footer">
              <button className="icon-btn-s"><Edit2 size={16} /></button>
              <button className="icon-btn-s text-red"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
