import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand text-white m-auto ml-5" to="">Funda4IR</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span >
        <i class="fas fa-bars" style={{color: '#fff'}}></i>
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li class="nav-item">
          <Link class="nav-Link active text-white ml-5" aria-current="page" to="/">Home&nbsp;<i class="fas fa-home"></i></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-Link text-white ml-5" to="/test-your-knowledge">Test your knowledge&nbsp;<i class="fas fa-brain"></i></Link>
        </li>

        <li class="nav-item">
          <Link class="nav-Link text-white ml-5" to="explore">Explore&nbsp;<i class="fab fa-wpexplorer"></i></Link>
        </li>

        <li class="nav-item">
          <Link class="nav-Link text-white ml-5" to="contact">Contact us&nbsp;<i class="fas fa-envelope"></i></Link>
        </li> 
      </ul>
      <hr/>
      <form class="d-flex">
        <input class="form-control me-2 ml-2" type="search" placeholder="Search" aria-label="Search"/>

        <button class="btn btn-outline-success ml-2" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}
