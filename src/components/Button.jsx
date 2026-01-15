import { useNavigate } from 'react-router-dom';

function Button({ text, onClick, className, padding, to }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    // 1. If there's an onClick (like closeMenu), run it first
    if (onClick) onClick(e);
    
    // 2. If there's a 'to' path, navigate to it
    if (to) navigate(to);
  };

  return (
    <button 
      className={`btn ${className || ''}`} 
      onClick={handleClick}
      style={{ padding: padding || '0.2rem 1.25rem' }}
    >
      {text}
    </button>
  );
}

export default Button;