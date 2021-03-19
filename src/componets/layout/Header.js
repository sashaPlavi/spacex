import React from 'react';
import './Header.css';
import { Dropdown } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <nav className="bg-dark">
        <Dropdown className="pl-3 p-2">
          <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
            Spacex
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/cores">Cores</Dropdown.Item>
            <Dropdown.Item href="/dragons">Dragons</Dropdown.Item>
            <Dropdown.Item href="/History">History</Dropdown.Item>
            <Dropdown.Item href="/Info">Info</Dropdown.Item>
            <Dropdown.Item href="/LandingPad">Landing Pads</Dropdown.Item>
            <Dropdown.Item href="/Launches">Launches</Dropdown.Item>
            <Dropdown.Item href="/mission"> Missions</Dropdown.Item>
            <Dropdown.Item href="/Payloads">Payloads</Dropdown.Item>
            <Dropdown.Item href="/Rockets">Rockets</Dropdown.Item>
            <Dropdown.Item href="/Roadster">Roadster</Dropdown.Item>
            <Dropdown.Item href="/Ships">Ships</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
}

export default Header;
