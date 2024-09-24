import React from 'react';
import Column from './Column';

const Board = ({ tasks, sortTasks }) => {
  return (
    <div className="board">
      {Object.entries(tasks).map(([groupName, groupTasks], index) => (
        <Column key={groupName} title={groupName} tasks={sortTasks(groupTasks)} index={index} />
      ))}
      <style jsx>{`
        .board {
          display: flex;
          overflow-x: auto;
          gap: 20px;
          padding: 20px 0;
        }
        @media (max-width: 768px) {
          .board {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Board;