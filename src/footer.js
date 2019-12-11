import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#action">
            Action
          </a>
          <a class="dropdown-item" href="#anoter">
            Another action
          </a>
          <a class="dropdown-item" href="#else">
            Something else here
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
