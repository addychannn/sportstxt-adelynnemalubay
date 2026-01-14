import React from 'react';

// Note: Ensure <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;800&display=swap" rel="stylesheet"> 
// is in your index.html or import it in your CSS file.

function ProfileCard({ name, role, description, imageUrl }) {
  const cardStyle = {
    height: '600px',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    fontFamily: "'Lexend', sans-serif", // Applied Lexend here
  };

  const imageContainerStyle = {
    flex: '1', 
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top'
  };

  const contentStyle = {
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  };

  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <img src={imageUrl} alt={name} style={imageStyle} />
      </div>
      
      <div style={contentStyle}>
        <h2 style={{ 
          margin: 0, 
          fontSize: '22px', 
          fontWeight: '800', // Extra bold for Lexend
          color: '#0D1B2A',
          letterSpacing: '-0.5px'
        }}>
          {name}
        </h2>
        
        <div style={{ 
          fontSize: '13px', 
          fontWeight: '600', 
          color: '#F05454', 
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {role}
        </div>

        <p style={{ 
          margin: '4px 0 0 0',
          fontSize: '15px', 
          color: '#7B8D9E', 
          fontWeight: '500', // Medium weight for Lexend readability
          lineHeight: '1.4'
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;