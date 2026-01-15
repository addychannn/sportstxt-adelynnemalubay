import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-1 fw-bold" style={{color: "#E63946"}}>404</h1>
      <h2 className="mb-4">Oops! Page Not Found</h2>
      <p className="lead mb-4">
        The page you are looking for is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary px-4 py-2">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;