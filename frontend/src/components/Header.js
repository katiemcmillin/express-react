import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="nav">
      <Link to="/">
        <div>People App</div>
      </Link>
      <Link to="/signin">SignIn</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
};

export default Header;
