import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      {/* <h1>Header</h1> */}
      <ul>
        <li><Link>Home</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link>About</Link></li>
      </ul>
    </div>
  );
}
