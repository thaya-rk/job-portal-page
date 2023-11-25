import React from 'react';
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/search.svg';
import dropdownIcon from '../../assets/dropdown.svg';

import '../../css/index.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary NavMN">
    <div class="container-fluid">
      <h2>Thaya-JP </h2>
      {/* <Link class="navbar-brand" to="#">
        <img src={railtellogo} alt="" width={50}/>
      </Link> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            --Find Talent
            </Link>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to="#">full-time</Link></li>
              <li><Link class="dropdown-item" to="#">part-time</Link></li>
             
            </ul>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            --Find Work
            </Link>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to="#">full-time</Link></li>
              <li><Link class="dropdown-item" to="#">part-time</Link></li>
              <li><hr class="dropdown-divider"/></li>
              <li><Link class="dropdown-item" to="#">Something else </Link></li>
            </ul>
          </li>
      
          
          
        </ul>
        
        <form class="d-flex" role="search">
          <button class="btn BtnLogin me-2" type="button">Login</button>
          <button class="btn BtnSignUp" type="button">Sign Up</button>
        </form>
      </div>
      

    </div>
     
  </nav>
  );
};

export default Header;
