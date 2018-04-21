import React from 'react';
import NavLink from 'react-router-dom/NavLink';

export const RouterHead=()=>{

    return (

        <div>
              <nav>
    <div className="nav-wrapper w-50">
      {/* <a href="#" class="brand-logo center">Logo</a> */}
      <ul id="nav-mobile" className="mx-auto">
        <li className="pl-3 pr-3">Introduction</li>
        <li className="pl-3 pr-3">Personal Information</li>
        
      </ul>
    </div>
  </nav>
        </div>
    )

}