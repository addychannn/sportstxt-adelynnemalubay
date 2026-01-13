function Button({ text, onClick, className, padding }) {
  return (
    <button 
      className={`btn ${className || ''}`} 
      onClick={onClick}
      style={{ padding: padding || '0.2rem 1.25rem' }}
    >
      {text}
    </button>
  )
}

export default Button;
