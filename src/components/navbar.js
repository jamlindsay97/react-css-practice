import { Link } from "react-router-dom";
import { TheNavbar, NavItem } from "../styles/navbar.styled.js"


const Navbar = () => {
  const navbarList = ["Home", "About", "Contact", "Profile"];
  return (
    //where the flexbox is
    <TheNavbar>
      {navbarList.map((navbarItem) => {
        // /home doesnt exist 
        // /About
        let path = "/";
        if (navbarItem !== "Home") {
          path = "/" + navbarItem;
        }
        return (
          <Link to={path}>
            <NavItem>{navbarItem}</NavItem>
          </Link>
        );
      })}
    </TheNavbar>
  );
};

export default Navbar;


// {optionButtons.map((optionButton) => {
//   return <button>{optionButton.Status}</button>;
// })}