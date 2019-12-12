import React from "react";
import "./footer.css";

function Footer() {
  let date = new Date();
  return (
    <footer className="fixed-bottom w-100 pt-3 text-light bg-dark">
      <p> spacex fan-page.rs {date.getFullYear()}</p>
    </footer>
  );
}
export default Footer;
