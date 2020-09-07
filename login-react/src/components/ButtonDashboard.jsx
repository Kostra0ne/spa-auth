import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ButtonSignout() {
  return (
    <NavLink className="link" to="/dashboard">
      <FontAwesomeIcon
        size="1x"
        className="is-clickable icon dashboard"
        icon={faUser}
      />
    </NavLink>
  );
}
