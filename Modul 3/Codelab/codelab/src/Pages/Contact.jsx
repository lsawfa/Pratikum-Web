import FooterComponent from "../Components/Footer";
import NavbarComponent from "../Components/Navbar";

import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <>
      <NavbarComponent />
      <nav>
        <ul>
          <li style={{ marginBottom: 5 }}>
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li style={{ marginBottom: 5 }}>
            <button>
              <Link to="/about">About Us</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/contact">Contact Us</Link>
            </button>
          </li>
        </ul>
      </nav>
      <p>Halaman Contact</p>
      <FooterComponent />
    </>
  );
}
