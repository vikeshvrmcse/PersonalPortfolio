import React from 'react'

export default function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg border border-2 border-light shadow-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">HVISiTers</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">HVISiTers</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center align-items-center grid gap-5 flex-grow-1  pe-3">
          <li className="nav-item" style={{listStyle:'none'}}>
            <a className="active navlinkhover" style={{textDecoration:'none'}} aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item" style={{listStyle:'none'}}>
            <a className="navlinkhover" style={{textDecoration:'none'}} href="#">MY Learning</a>
          </li>
          <li className="nav-item" style={{listStyle:'none'}}>
            <a className="navlinkhover" style={{textDecoration:'none'}} href="#">MY Certification</a>
          </li>
          <li className="nav-item" style={{listStyle:'none'}}>
            <a className="navlinkhover" style={{textDecoration:'none'}} href="#">MY Extra Carriculam Activities</a>
          </li>
          <li className="nav-item dropdown" style={{listStyle:'none'}}>
            <a className="navlinkhover dropdown-toggle" style={{textDecoration:'none'}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              MY Skill
            </a>
            <ul className="dropdown-menu">
              <li style={{listStyle:'none'}}><a className="dropdown-item navlinkhover" style={{textDecoration:'none'}} href="#">Version Control</a></li>
              <li style={{listStyle:'none'}}><a className="dropdown-item navlinkhover" style={{textDecoration:'none'}} href="#">Web Development</a></li>
              <li style={{listStyle:'none'}}><a className="dropdown-item navlinkhover" style={{textDecoration:'none'}} href="#">Hardware System</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li style={{listStyle:'none'}}><a className="dropdown-item navlinkhover" style={{textDecoration:'none'}} href="#">Python with Machine Learning</a></li>
              <li style={{listStyle:'none'}}><a className="dropdown-item navlinkhover" style={{textDecoration:'none'}} href="#">Java with DSA</a></li>
              <li style={{listStyle:'none'}}><a className="dropdown-item navlinkhover" style={{textDecoration:'none'}} href="#">My SQL with SQL RDBMS</a></li>
              <li style={{listStyle:'none'}}><a className="dropdown-item navlinkhover" style={{textDecoration:'none'}} href="#">No SQL with Mongo DB</a></li>
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>
  )
}
