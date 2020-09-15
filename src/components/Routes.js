import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Routes() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/profile"
          className={
            location.pathname === "/profile" ? "nav-link active" : "nav-link"
          }
        >
          LΔΝΔ
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={
            location.pathname === "/profile" ? "nav-link active" : "nav-link"
          }
        >
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={
            location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
