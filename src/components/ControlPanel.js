import React, { useState } from 'react';
import { ReactComponent as DisplayIcon } from '../assets/Display.svg';
import { ReactComponent as AddIcon } from '../assets/add.svg';

const ControlPanel = ({ grouping, setGrouping, sorting, setSorting, theme, toggleTheme }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className={`control-panel ${theme}`}>
      <div className="left-controls">
        <button className="control-button display-button">
          <DisplayIcon />
          <span>Display</span>
        </button>
        <div className="dropdown-container" onMouseEnter={() => handleMouseEnter('group')} onMouseLeave={handleMouseLeave}>
          <span className="dropdown-label">Group by:</span>
          <button className="dropdown-button">{grouping} ▼</button>
          {activeDropdown === 'group' && (
            <div className="dropdown-content">
              <button onClick={() => setGrouping('status')}>Status</button>
              <button onClick={() => setGrouping('user')}>User</button>
              <button onClick={() => setGrouping('priority')}>Priority</button>
            </div>
          )}
        </div>
        <div className="dropdown-container" onMouseEnter={() => handleMouseEnter('sort')} onMouseLeave={handleMouseLeave}>
          <span className="dropdown-label">Sort by:</span>
          <button className="dropdown-button">{sorting} ▼</button>
          {activeDropdown === 'sort' && (
            <div className="dropdown-content">
              <button onClick={() => setSorting('priority')}>Priority</button>
              <button onClick={() => setSorting('title')}>Title</button>
            </div>
          )}
        </div>
      </div>
      <div className="right-controls">
        <button className="control-button add-button">
          <AddIcon />
        </button>
        <button onClick={toggleTheme} className="control-button theme-toggle">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
      <style jsx>{`
        .control-panel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: var(--control-panel-bg);
          border-bottom: 1px solid var(--border-color);
        }
        .left-controls, .right-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .control-button, .dropdown-button {
          display: flex;
          align-items: center;
          gap: 5px;
          background: var(--button-bg);
          border: 1px solid var(--border-color);
          border-radius: 5px;
          padding: 5px 10px;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .control-button:hover, .dropdown-button:hover {
          background: var(--button-hover-bg);
        }
        .control-button svg {
          width: 16px;
          height: 16px;
        }
        .dropdown-container {
          position: relative;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .dropdown-label {
          font-size: 14px;
          color: var(--text-secondary);
        }
        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: var(--dropdown-bg);
          border: 1px solid var(--border-color);
          border-radius: 5px;
          padding: 5px 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          min-width: 120px;
        }
        .dropdown-content button {
          display: block;
          width: 100%;
          text-align: left;
          padding: 5px 10px;
          border: none;
          background: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        .dropdown-content button:hover {
          background-color: var(--button-hover-bg);
        }
        @media (max-width: 768px) {
          .control-panel {
            flex-direction: column;
            align-items: flex-start;
          }
          .right-controls {
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ControlPanel;