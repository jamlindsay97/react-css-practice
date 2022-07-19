import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarList = ["Home", "About"];
  return (
    <div>
      {navbarList.map((navbarItem) => {
        // /home doesnt exist 
        // /About
        let path = "/";
        if (navbarItem !== "Home") {
          path = "/" + navbarItem;
        }
        return (
          <Link to={path}>
            <p>{navbarItem}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
