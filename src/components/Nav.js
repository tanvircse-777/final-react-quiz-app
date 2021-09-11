import { Link } from "react-router-dom";
import Logo from "../assets/images/image.jpg";
import classes from "../styles/brand.module.css";
import Account from "./Account";
export default function Nav() {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/" className={classes.brand}>
              <img src={Logo} alt="Learn with Sumit Logo" />
              <h3>Lets Play Quiz Mania</h3>
            </Link>
          </li>
        </ul>
        <Account />
      </nav>
    </>
  );
}
