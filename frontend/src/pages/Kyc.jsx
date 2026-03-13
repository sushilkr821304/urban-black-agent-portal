import React from 'react';
import { Upload, FileCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
// Consolidated in style.css

const Kyc = () => {
  const documents = [
    { name: 'ID Proof', sub: 'Aadhar Card / PAN Card', status: 'Uploaded', icon: <FileCheck className="doc-icon-done" /> },
    { name: 'Driving License', sub: 'Front & Back side', status: 'Pending', icon: <Upload className="doc-icon-pending" /> },
    { name: 'Vehicle Documents', sub: 'Registration Certificate (RC)', status: 'Not Started', icon: <Upload className="doc-icon-empty" /> },
    { name: 'Service Certificate', sub: 'Training or Experience doc', status: 'Not Started', icon: <Upload className="doc-icon-empty" /> },
    { name: 'Profile Photo', sub: 'Clear professional headshot', status: 'Not Started', icon: <Upload className="doc-icon-empty" /> },
  ];

  return (
    <div className="kyc-v2-page">
      <header className="page-header">
        <div className="header-text">
          <h2>Documents / KYC</h2>
          <p>Verify your identity and documents to start earning.</p>
        </div>
        <div className="kyc-status-badge pending">
          <AlertCircle size={18} />
          <span>Verification Pending</span>
        </div>
      </header>

      <div className="kyc-grid">
        <div className="kyc-requirements">
          <h3>Required Documents</h3>
          <div className="doc-steps">
            {documents.map((doc, i) => (
              <div key={i} className={`doc-step-card ${doc.status.toLowerCase().replace(' ', '-')}`}>
                <div className="doc-main">
                  <div className="doc-icon-wrapper">
                    {doc.icon}
                  </div>
                  <div className="doc-info">
                    <strong>{doc.name}</strong>
                    <span>{doc.sub}</span>
                  </div>
                </div>
                <div className="doc-status-side">
                  <span className="status-lbl">{doc.status}</span>
                  {doc.status === 'Not Started' && <button className="upload-mini-btn">Upload</button>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="kyc-info-panel">
          <div className="info-card">
            <h4>Why KYC is important?</h4>
            <ul>
              <li>Unlock premium service bookings</li>
              <li>Enable direct wallet withdrawals</li>
              <li>Customer trust badge on profile</li>
              <li>Eligible for top agent bonuses</li>
            </ul>
          </div>
          <div className="help-card">
            <CheckCircle2 size={32} color="#10B981" />
            <p>Your ID Proof has been successfully verified by our team on Oct 20.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kyc;
