import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid bg-light">
        <Link className="navbar-brand" to="/">Salt’n Papper</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/publication">Publication</Link>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-success" type="button">Get a Franchise</button>
            <button className="btn btn-outline-success" type="button">Order Online</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;























// import React from 'react'
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div>
      

//       <nav className="navbar navbar-expand-lg bg-body-tertiary ">
//       <div className="container-fluid bg-light">
//         <a className="navbar-brand" href="#">Salt’n papper</a>
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#navbarSupportedContent" 
//           aria-controls="navbarSupportedContent" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//             <Link className="nav-link active" aria-current="page" to="">Home</Link>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">About us</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" aria-disabled="true">Publication</a>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <button className="btn btn-outline-success" type="submit">Get a Franchais</button>
//             <button className="btn btn-outline-success" type="submit">Order online</button>
//           </form>
//         </div>
//       </div>
//     </nav>


//     </div>
//   )
// }

// export default Navbar
