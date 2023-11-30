import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">Logo img</div>
        <ul claasName="items">
          <li>Home</li>
          <li>Services</li>
          <li>About Us </li>
          <li>Contact Us</li>
        </ul>
        <button className="action_btn">Sign up</button>
      </nav>

      <div className="toggle_btn">
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className="hero">
        <h1>Hero Section</h1>
      </div>
    </header>
  );
}

export default Nav;
