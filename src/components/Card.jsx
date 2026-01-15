function Card({ cardName, text, image, onClick, className }) {
  return (
    <div 
      className={`p-4 shadow-sm h-100 ${className}`} 
      onClick={onClick}
      style={{ 
        cursor: onClick ? 'pointer' : 'default', 
        width: '20rem',
        borderRadius: '10px', 
        overflow: 'hidden' ,
        border: 'none'
      }}
    >
      {/* Image Section */}
      {image && (
        <img 
          src={image} 
          className="mb-4" 
          alt={cardName} 
          style={{ 
                width: '100%',
                height: '200px', 
                objectFit: 'cover',
                borderRadius: '10px'
              }}
        />
      )}

      <div>
        {cardName && (
          <h5 className="fw-bold fs-5">
            {cardName}
          </h5>
        )}
        
        {text && (
          <p className="fw-semibold" style={{ color: "#728496" }}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;