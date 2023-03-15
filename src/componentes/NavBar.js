import React from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar =() => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MiApp</a>
    <button className="navNamebar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/inicio'>inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/destacados'>destacados</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to='/contacto'>contacto</a></li>
            <li><a className="dropdown-item" to='/informacion' >informacion</a></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default NavBar