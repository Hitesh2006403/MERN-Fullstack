// function Navbar() {
//   return (
//     <nav className="Navbar">
//         <a className="brand-name" href="#home">
//             brand-name
//         </a>
//           <div className="nav-links">
//             <a href="#home">Home</a>
//             <a href="#about">About</a>
//             <a href="#contact">Contact</a>
//           </div>
//         </nav>
//   );
// }
// export default Navbar;

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
        <h2> Campus connect</h2>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </nav>
  );
}
export default Navbar;
