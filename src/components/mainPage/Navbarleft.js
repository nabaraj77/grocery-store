import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function Navbarleft() {
  return (
    <div>
      <div class="w3l_banner_nav_left">
        <nav class="navbar nav_bottom">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div class="navbar-header nav_2">
            <button
              type="button"
              class="navbar-toggle collapsed navbar-toggle1"
              data-toggle="collapse"
              data-target="#bs-megadropdown-tabs"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
            <ul class="nav navbar-nav nav_1">
              {/* <li><a href="products.html">Branded Foods</a></li> */}
              <li>
                <Link to="products">Branded Foods</Link>
              </li>
              {/* <li>
                <a href="household.html">Households</a>
				
              </li> */}
              <li>
                <Link to="household">Households</Link>
              </li>
              <li class="dropdown mega-dropdown active">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  Veggies & Fruits<span class="caret"></span>
                </a>
                <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                  <div class="w3ls_vegetables">
                    <ul>
                      <li>
                        {/* <a href="vegetables.html">Vegetables</a>
						 
						 */}
                        <Link to="vegetables">Vegetables</Link>
                      </li>

                      <li>
                        {/* <a href="vegetables.html">Fruits</a> */}
                        <Link to="vegetables">Fruits</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                {/* <a href="kitchen.html">Kitchen</a> */}
                <Link to="kitchen">Kitchen</Link>
              </li>
              <li>
                {/* <a href="short-codes.html">Short Codes</a> */}
                <Link to="short-codes">Short Codes</Link>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  Beverages<span class="caret"></span>
                </a>
                <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                  <div class="w3ls_vegetables">
                    <ul>
                      <li>
                        {/* <a href="drinks.html">Soft Drinks</a> */}
                        <Link to="drinks">Soft Drinks</Link>
                      </li>
                      <li>
                        <a href="drinks.html">Juices</a>
                        <Link to="drinks">Juices</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                {/* <a href="pet.html">Pet Food</a> */}
                <Link to="pet">Pet Food</Link>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  Frozen Foods<span class="caret"></span>
                </a>
                <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                  <div class="w3ls_vegetables">
                    <ul>
                      <li>
                        {/* <a href="frozen.html">Frozen Snacks</a> */}
                        <Link to="frozen">Frozen Snacks</Link>
                      </li>
                      <li>
                        {/* <a href="frozen.html">Frozen Nonveg</a> */}
                        <Link to="frozen">Frozen Nonveg</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                {/* <a href="bread.html">Bread & Bakery</a> */}
                <Link to="bread">Bread $ Bakery</Link>
              </li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </nav>
      </div>
    </div>
  );
}

export default Navbarleft;
