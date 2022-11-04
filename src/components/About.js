import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <>
      <div class="products-breadcrumb">
        <div class="container">
          <ul>
            <li>
              <i class="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      {/* <div class="banner">
        <Navbarleft />
      </div> */}
      <div class="w3l_banner_nav_right">
        {/* <!-- about --> */}
        <div class="privacy about">
          <h3>About Us</h3>
          <p class="animi">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
          <div class="agile_about_grids">
            <div class="col-md-6 agile_about_grid_right">
              <img
                src="../Assets/images/31.jpg"
                alt=" "
                class="img-responsive"
              />
            </div>
            <div class="col-md-6 agile_about_grid_left">
              <ol>
                <li>laborum et dolorum fuga</li>
                <li>corrupti quos dolores et quas</li>
                <li>est et expedita distinctio</li>
                <li>deleniti atque corrupti quos</li>
                <li>excepturi sint occaecati cupiditate</li>
                <li>accusamus et iusto odio</li>
              </ol>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
        {/* <!-- //about --> */}
      </div>
      <div class="clearfix"></div>

      {/* <!-- //banner -->
<!-- team --> */}
      <div class="team">
        <div class="container">
          <h3>Meet Our Amazing Team</h3>
          <div class="agileits_team_grids">
            <div class="col-md-3 agileits_team_grid">
              <img
                src="../Assets/images/avatar.png"
                alt=" "
                class="img-responsive"
              />
              <h4>Nabaraj Dahal</h4>
              <p>Manager</p>
              <ul class="agileits_social_icons agileits_social_icons_team">
                <li>
                  <a href="#" class="facebook">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="twitter">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="google">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 agileits_team_grid">
              <img
                src="../Assets/images/avatar.png"
                alt=" "
                class="img-responsive"
              />
              <h4>Nabaraj Dahal</h4>
              <p>Supervisor</p>
              <ul class="agileits_social_icons agileits_social_icons_team">
                <li>
                  <a href="#" class="facebook">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="twitter">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="google">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 agileits_team_grid">
              <img
                src="../Assets/images/avatar.png"
                alt=" "
                class="img-responsive"
              />
              <h4>Nabaraj Dahal</h4>
              <p>Supervisor</p>
              <ul class="agileits_social_icons agileits_social_icons_team">
                <li>
                  <a href="#" class="facebook">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="twitter">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="google">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 agileits_team_grid">
              <img
                src="../Assets/images/avatar.png"
                alt=" "
                class="img-responsive"
              />
              <h4>Nabaraj Dahal</h4>
              <p>CEO</p>
              <ul class="agileits_social_icons agileits_social_icons_team">
                <li>
                  <a href="#" class="facebook">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="twitter">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="google">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
