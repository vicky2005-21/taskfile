import React from 'react';
import Task from './Task';
import { ReactComponent as BacklogIcon } from '../assets/Backlog.svg';
import { ReactComponent as TodoIcon } from '../assets/To-do.svg';
import { ReactComponent as InProgressIcon } from '../assets/in-progress.svg';
import { ReactComponent as DoneIcon } from '../assets/Done.svg';
import { ReactComponent as CancelledIcon } from '../assets/Cancelled.svg';

const Column = ({ title, tasks, index }) => {
  const getStatusIcon = (status) => {
    switch(status.toLowerCase()) {
      case 'backlog': return BacklogIcon;
      case 'todo': return TodoIcon;
      case 'in progress': return InProgressIcon;
      case 'done': return DoneIcon;
      case 'cancelled': return CancelledIcon;
      default: return null;
    }
  };

  const StatusIcon = getStatusIcon(title);

  return (
    <div className="column">
      <h2>
        {StatusIcon && <StatusIcon />}
        {title} ({tasks.length})
      </h2>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
      <style jsx>{`
        .column {
          background-color: var(--column-bg);
          border-radius: 8px;
          width: 300px;
          min-width: 300px;
          padding: 15px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
          animation-delay: ${index * 0.1}s;
        }
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        h2 {
          display: flex;
          align-items: center;
          margin-top: 0;
          margin-bottom: 15px;
          font-size: 18px;
          color: var(--text-color);
        }
        h2 svg {
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
        @media (max-width: 768px) {
          .column {
            width: 100%;
            min-width: unset;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Column;