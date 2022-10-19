import React from "react";
import Navbarleft from "./mainPage/Navbarleft";

function Mail() {
  return (
    <>
      <div class="products-breadcrumb">
        <div class="container">
          <ul>
            <li>
              <i class="fa fa-home" aria-hidden="true"></i>
              {/* <a href="index.html">Home</a> */}
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Mail Us</li>
          </ul>
        </div>
      </div>
      <div class="banner">
        <Navbarleft />
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
