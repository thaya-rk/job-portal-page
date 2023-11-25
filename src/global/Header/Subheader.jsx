import React from 'react'
import dropdownIcon from '../../assets/dropdown.svg';
import {Link} from 'react-router-dom'


const Subheader = () => {
  return (
   
    <nav class="navbar navbar-expand-lg bg-body-tertiary NAVSub">
    <div class="container-fluid">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <Link class="nav-link" to="#">Development & IT</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="#">Design & Creative</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="#">Sales & Marketing</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="#">Writing & Translation</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="#">Admin & Customer Support</Link>
    </li>
   
  </ul>
  </div>
  </nav>
  )
}

export default Subheader