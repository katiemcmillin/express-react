import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="nav">
      <Link to="/">
        <div>People App</div>
      </Link>
      <Link to="/signin">LogIn</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/signout">LogOut</Link>
    </nav>
  );
};

export default Header;
