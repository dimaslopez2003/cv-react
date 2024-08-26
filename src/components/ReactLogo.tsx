import React from 'react';

const ReactLogo: React.FC = () => {
  return (
    <div style={{ width: '24px', height: '24px', animation: 'spin 3s linear infinite' }}>
      <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="React Logo" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default ReactLogo;

