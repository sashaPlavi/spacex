import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            spacex
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/capsules">
              Capsules
            </a>
            <a className="dropdown-item" href="/cores">
              Cores
            </a>
            <a className="dropdown-item" href="/dragons">
              Dragons
            </a>
            <a className="dropdown-item" href="/History">
              History
            </a>
            <a className="dropdown-item" href="/Info">
              Info
            </a>
            <a className="dropdown-item" href="/Landing Pads">
              Landing Pads
            </a>
            <a className="dropdown-item" href="/Launches">
              Launches
            </a>
            <a className="dropdown-item" href="/Launch Pads">
              Launch Pads
            </a>
            <p className="dropdown-item">
              <Link to="/mission"> Missions </Link>
            </p>
            <a className="dropdown-item" href="/Payloads">
              Payloads
            </a>
            <a className="dropdown-item" href="/Rockets">
              Rockets
            </a>
            <a className="dropdown-item" href="/Roadster">
              Roadster
            </a>
            <a className="dropdown-item" href="/Ships">
              Ships
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
