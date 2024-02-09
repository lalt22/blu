import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Link to="/home" className="home">
                <h2>blu.</h2>
            </Link>

            <div className="other-links">
                <Link to="/make-post">
                    Share
                </Link>
                <Link to="/see-posts">
                    Read
                </Link>
            </div>
            
        </nav>
    )
}

export default NavBar;