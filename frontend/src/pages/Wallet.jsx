import React from 'react';
import { Wallet as WalletIcon, CreditCard } from 'lucide-react';
// Consolidated in style.css

const Wallet = () => {
  return (
    <div className="wallet-page">
      <header className="wallet-header">
        <h2>Wallet</h2>
      </header>

      <div className="wallet-content">
        <div className="wallet-main-card">
          <div className="wallet-info-section">
            <div className="wallet-icon-large">
              <WalletIcon size={64} />
            </div>
            <div className="balance-info">
              <span className="balance-amount">₹ 0</span>
              <span className="balance-label">Urban Black balance</span>
            </div>
          </div>
          <div className="wallet-action-section">
            <button className="add-money-btn">Add Money</button>
          </div>
        </div>

        <div className="transactions-section">
          <div className="transactions-header">
            <CreditCard size={24} className="transactions-icon" />
            <h3>Recent Transactions</h3>
          </div>
          {/* Placeholder for transaction list */}
          <div className="empty-transactions">
            <p>No recent transactions to display.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
