import React from 'react';
import { ReactComponent as UrgentPriority } from '../assets/SVG - Urgent Priority colour.svg';
import { ReactComponent as HighPriority } from '../assets/Img - High Priority.svg';
import { ReactComponent as MediumPriority } from '../assets/Img - Medium Priority.svg';
import { ReactComponent as LowPriority } from '../assets/Img - Low Priority.svg';
import { ReactComponent as NoPriority } from '../assets/No-priority.svg';
import UserAvatar from './UserAvatar';

const Task = ({ task }) => {
    const getPriorityIcon = (priority) => {
      switch(priority) {
        case 4: return UrgentPriority;
        case 3: return HighPriority;
        case 2: return MediumPriority;
        case 1: return LowPriority;
        default: return NoPriority;
      }
    };
  
    const getPriorityLabel = (priority) => {
      const labels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
      return labels[priority] || 'Unknown';
    };
  
    const getPriorityColor = (priority) => {
      const colors = ['#6B778C', '#5CB85C', '#F0AD4E', '#D9534F', '#B71C1C'];
      return colors[priority] || colors[0];
    };
  
    const PriorityIcon = getPriorityIcon(task.priority);
  
    return (
      <div className="task" style={{ borderLeft: `5px solid ${getPriorityColor(task.priority)}` }}>
        <div className="task-header">
          <span className="task-id">{task.id}</span>
          <span className="task-priority" style={{ color: getPriorityColor(task.priority) }}>
            <PriorityIcon />
            {getPriorityLabel(task.priority)}
          </span>
        </div>
        <h3>{task.title}</h3>
        <div className="task-footer">
          <UserAvatar userId={task.userId} />
          <span className="task-status">{task.status}</span>
        </div>
        <style jsx>{`
          .task {
            background-color: var(--task-bg);
            border-radius: 6px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12);
            margin-bottom: 12px;
            padding: 12px;
            transition: all 0.3s ease;
            animation: fadeIn 0.5s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .task:hover {
            box-shadow: 0 3px 6px rgba(0,0,0,0.16);
            transform: translateY(-2px);
          }
          .task-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
          }
          .task-id {
            font-size: 12px;
            color: var(--text-secondary);
          }
          .task-priority {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: bold;
          }
          .task-priority svg {
            width: 16px;
            height: 16px;
            margin-right: 4px;
          }
          h3 {
            margin: 0 0 10px 0;
            font-size: 16px;
            color: var(--text-primary);
          }
          .task-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            color: var(--text-secondary);
          }
        `}</style>
      </div>
    );
  };
  
  export default Task;