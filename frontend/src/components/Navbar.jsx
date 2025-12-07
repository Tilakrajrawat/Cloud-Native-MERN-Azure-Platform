import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/auth.jsx";


export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <span className="nav-title">Cloud-Native MERN App</span>
        {user && (
          <>
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
            <Link to="/records" className="nav-link">
              Records
            </Link>
          </>
        )}
      </div>
      <div className="nav-right">
        {user && (
          <>
            <span className="nav-user">Hi, {user.name}</span>
            <button className="nav-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
