import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Canal_News_logo.svg/1200px-Canal_News_logo.svg.png"
          alt="error"
        />
      </div>
      <nav>
        <div className="container-field">
          <div>
            <Link className="text" to="/">
              Home
            </Link>
          </div>
          {/* <div className="daftar-masuk">
            <div className="text">Daftar</div>
            <div className="text">Masuk</div>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
