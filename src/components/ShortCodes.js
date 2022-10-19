import React from "react";
import Navbarleft from "./mainPage/Navbarleft";

const Shortcodes = () => {
  return (
    <div>
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              <a href="index.html">Home</a>
              <span>|</span>
            </li>
            <li>Short Codes</li>
          </ul>
        </div>
      </div>
      <div className="typo">
        <h3 className="title">Short Codes</h3>
        <div className="grid_3 grid_4">
          <h3 className="hdg">Headings</h3>
          <div className="bs-example">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <h1 id="h1.-bootstrap-heading">
                      h1. Bootstrap heading
                      <a
                        className="anchorjs-link"
                        href="#h1.-bootstrap-heading"
                      >
                        <span className="anchorjs-icon"></span>
                      </a>
                    </h1>
                  </td>
                  <td className="type-info">Semibold 36px</td>
                </tr>
                <tr>
                  <td>
                    <h2 id="h2.-bootstrap-heading">
                      h2. Bootstrap heading
                      <a
                        className="anchorjs-link"
                        href="#h2.-bootstrap-heading"
                      >
                        <span className="anchorjs-icon"></span>
                      </a>
                    </h2>
                  </td>
                  <td className="type-info">Semibold 30px</td>
                </tr>
                <tr>
                  <td>
                    <h3 id="h3.-bootstrap-heading">
                      h3. Bootstrap heading
                      <a
                        className="anchorjs-link"
                        href="#h3.-bootstrap-heading"
                      >
                        <span className="anchorjs-icon"></span>
                      </a>
                    </h3>
                  </td>
                  <td className="type-info">Semibold 24px</td>
                </tr>
                <tr>
                  <td>
                    <h4 id="h4.-bootstrap-heading">
                      h4. Bootstrap heading
                      <a
                        className="anchorjs-link"
                        href="#h4.-bootstrap-heading"
                      >
                        <span className="anchorjs-icon"></span>
                      </a>
                    </h4>
                  </td>
                  <td className="type-info">Semibold 18px</td>
                </tr>
                <tr>
                  <td>
                    <h5 id="h5.-bootstrap-heading">
                      h5. Bootstrap heading
                      <a
                        className="anchorjs-link"
                        href="#h5.-bootstrap-heading"
                      >
                        <span className="anchorjs-icon"></span>
                      </a>
                    </h5>
                  </td>
                  <td className="type-info">Semibold 14px</td>
                </tr>
                <tr>
                  <td>
                    <h6>h6. Bootstrap heading</h6>
                  </td>
                  <td className="type-info">Semibold 12px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shortcodes;
