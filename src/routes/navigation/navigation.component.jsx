import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo" to={"/"}>
          LOGO
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
