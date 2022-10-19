import React from "react";

function Mail() {
  return (
    <>
      <div class="products-breadcrumb">
        <div class="container">
          <ul>
            <li>
              <i class="fa fa-home" aria-hidden="true"></i>
              <a href="index.html">Home</a>
              <span>|</span>
            </li>
            <li>Mail Us</li>
          </ul>
        </div>
      </div>
      <div class="banner">
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
                <li>
                  <a href="products.html">Branded Foods</a>
                </li>
                <li>
                  <a href="household.html">Households</a>
                </li>
                <li class="dropdown mega-dropdown active">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Veggies & Fruits<span class="caret"></span>
                  </a>
                  <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div class="w3ls_vegetables">
                      <ul>
                        <li>
                          <a href="vegetables.html">Vegetables</a>
                        </li>
                        <li>
                          <a href="vegetables.html">Fruits</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="kitchen.html">Kitchen</a>
                </li>
                <li>
                  <a href="short-codes.html">Short Codes</a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Beverages<span class="caret"></span>
                  </a>
                  <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div class="w3ls_vegetables">
                      <ul>
                        <li>
                          <a href="drinks.html">Soft Drinks</a>
                        </li>
                        <li>
                          <a href="drinks.html">Juices</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="pet.html">Pet Food</a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Frozen Foods<span class="caret"></span>
                  </a>
                  <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                    <div class="w3ls_vegetables">
                      <ul>
                        <li>
                          <a href="frozen.html">Frozen Snacks</a>
                        </li>
                        <li>
                          <a href="frozen.html">Frozen Nonveg</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="bread.html">Bread & Bakery</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="w3l_banner_nav_right">
          {/* <!-- mail --> */}
          <div class="mail">
            <h3>Mail Us</h3>
            <div class="agileinfo_mail_grids">
              <div class="col-md-4 agileinfo_mail_grid_left">
                <ul>
                  <li>
                    <i class="fa fa-home" aria-hidden="true"></i>
                  </li>
                  <li>
                    address<span>868 1st Avenue NYC.</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </li>
                  <li>
                    email
                    <span>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </li>
                  <li>
                    call to us<span>(+123) 233 2362 826</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-8 agileinfo_mail_grid_right">
                <form action="#" method="post">
                  <div class="col-md-6 wthree_contact_left_grid">
                    <input
                      type="text"
                      name="Name"
                      value="Name*"
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Name*';}"
                      required=""
                    />
                    <input
                      type="email"
                      name="Email"
                      value="Email*"
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Email*';}"
                      required=""
                    />
                  </div>
                  <div class="col-md-6 wthree_contact_left_grid">
                    <input
                      type="text"
                      name="Telephone"
                      value="Telephone*"
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Telephone*';}"
                      required=""
                    />
                    <input
                      type="text"
                      name="Subject"
                      value="Subject*"
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Subject*';}"
                      required=""
                    />
                  </div>
                  <div class="clearfix"> </div>
                  <textarea
                    name="Message"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Message...';}"
                    required=""
                  >
                    Message...
                  </textarea>
                  <input type="submit" value="Submit" />
                  <input type="reset" value="Clear" />
                </form>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
          {/* <!-- //mail --> */}
        </div>
        <div class="clearfix"></div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.036667732067!2d85.32395955!3d27.69383745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b163529399%3A0x522e7f4734ac0fb9!2sNorvic%20International%20Hospital!5e0!3m2!1sen!2snp!4v1666173307148!5m2!1sen!2snp"></iframe>
        </div>
      </div>
    </>
  );
}

export default Mail;
