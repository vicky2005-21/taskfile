import React from 'react';

const UserAvatar = ({ userId }) => {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const getColorFromUserId = (userId) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#FBAF08', '#1EA896'];
    const index = userId.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="user-avatar" style={{ backgroundColor: getColorFromUserId(userId) }}>
      {getInitials(userId)}
      <style jsx>{`
        .user-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: bold;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default UserAvatar;