import React, { useContext } from "react";
import AuthContext from "./../components/auth/AuthContext";
import { NavLink } from "react-router-dom";
import ButtonSignout from "./ButtonSignout";
import ButtonDashboard from "./ButtonDashboard";

export default function Nav({ navType, navStatus }) {
  // READ THE DOC : https://fr.reactjs.org/docs/hooks-reference.html#usecontext
  const AuthContextValue = useContext(AuthContext);
  const cssNav =
    "nav " +
    (navType === "mobile" ? " mobile" : " main") +
    ((navStatus && " is-active") || "");
  const cssWrap = navType === "mobile" ? " row spaced full-width" : " inline";

  return (
    <nav id="nav-main" className={cssNav}>
      <NavLink exact to="/" className="link">
        Home |
      </NavLink>{'\u00A0'}
      <NavLink to="/about" className="link">
        About |
      </NavLink>{'\u00A0'}
      <NavLink to="/contact" className="link">
        Contact |
      </NavLink>
      {'\u00A0'}
      <div className={cssWrap}>
      {'\u00A0'}
        <ButtonDashboard />
        {AuthContextValue.isSignedIn && (
          <>
            {'\u00A0'} | <ButtonSignout />
          </>
        )}
      </div>
    </nav>
  );
}
