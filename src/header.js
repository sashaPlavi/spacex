import React from "react";
import "./Header.css";

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
            <a className="dropdown-item" href="#action">
              Capsules
            </a>
            <a className="dropdown-item" href="#action">
              Cores
            </a>
            <a className="dropdown-item" href="#else">
              Dragons
            </a>
            <a className="dropdown-item" href="#History">
              History
            </a>
            <a className="dropdown-item" href="#Info">
              Info
            </a>
            <a className="dropdown-item" href="#Landing Pads">
              Landing Pads
            </a>
            <a className="dropdown-item" href="#Launches">
              Launches
            </a>
            <a className="dropdown-item" href="#Launch Pads">
              Launch Pads
            </a>
            <a className="dropdown-item" href="#Missions">
              Missions
            </a>
            <a className="dropdown-item" href="#Payloads">
              Payloads
            </a>
            <a className="dropdown-item" href="#Rockets">
              Rockets
            </a>
            <a className="dropdown-item" href="#Roadster">
              Roadster
            </a>
            <a className="dropdown-item" href="#Ships">
              Ships
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
