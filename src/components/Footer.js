import React from "react";

export default function Footer() {
  var current_year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>copyright @ {current_year}</p>
      </footer>
    </div>
  );
}
