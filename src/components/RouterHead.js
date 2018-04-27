import React from 'react';
import NavLink from 'react-router-dom/NavLink';

export const RouterHead=()=>{

    return (

        <div>
              <nav>
    <div className="nav-wrapper w-50">
      {/* <a href="#" class="brand-logo center">Logo</a> */}
      <ul id="nav-mobile" className="mx-auto">
        <li className="pl-3 pr-3"><a>Introduction</a></li>
        <li className="pl-3 pr-3"><a>Personal Information</a></li>
        
      </ul>
    </div>
  </nav>
        </div>
    )

}