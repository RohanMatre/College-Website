import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        © {currentYear} : Designed by Aditya Shah, Aayush Sinha, Rohan Matre.
      </p>
    </footer>
  );
}

export default Footer;
