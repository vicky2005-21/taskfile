import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .loading-spinner {
          display: flex;
          justify-content: space-between;
          width: 60px;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--text-primary);
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .dot:nth-child(1) {
          animation-delay: -0.32s;
        }
        .dot:nth-child(2) {
          animation-delay: -0.16s;
        }
        @keyframes bounce {
          0%, 80%, 100% { 
            transform: scale(0);
          } 
          40% { 
            transform: scale(1.0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;