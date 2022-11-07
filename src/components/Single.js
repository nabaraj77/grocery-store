import React from "react";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
function Single({ singleItemProduct, addToCart }) {
  // const { slugName } = useParams();
  //console.log(singleItemProduct);
  return (
    <div>
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Single Page</li>
          </ul>
        </div>
      </div>

      <div className="banner">
        <div className="w3l_banner_nav_right">
          <div className="agileinfo_single">
            <h5>{singleItemProduct.title}</h5>
            <div className="col-md-4 agileinfo_single_left">
              <img
                id="example"
                src={singleItemProduct.images[0].imageName}
                alt=" "
                className="img-responsive"
              />
            </div>
            <div className="col-md-8 agileinfo_single_right">
              <div className="rating1">
                <span className="starRating">
                  <input id="rating5" type="radio" name="rating" value="5" />
                  <label HtmlFor="rating5">5</label>
                  <input id="rating4" type="radio" name="rating" value="4" />
                  <label HtmlFor="rating4">4</label>
                  <input id="rating3" type="radio" name="rating" value="3" />
                  <label HtmlFor="rating3">3</label>
                  <input id="rating2" type="radio" name="rating" value="2" />
                  <label HtmlFor="rating2">2</label>
                  <input id="rating1" type="radio" name="rating" value="1" />
                  <label HtmlFor="rating1">1</label>
                </span>
              </div>
              <div className="w3agile_description">
                <h4>Description :</h4>

                {singleItemProduct.description ? (
                  <p>{parse(singleItemProduct.description)}</p>
                ) : (
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eaque non harum praesentium aliquid excepturi neque ipsam
                    culpa! Libero, hic dolore!
                  </p>
                )}
              </div>
              <div className="snipcart-item block">
                <div className="snipcart-thumb agileinfo_single_right_snipcart">
                  <h4>$ {singleItemProduct.unitPrice[0].sellingPrice}</h4>
                </div>
                <div className="snipcart-details agileinfo_single_right_details">
                  <div className="snipcart-details ">
                    <input
                      type="button"
                      value="Add to cart"
                      className="button addtoCartBtn text-center"
                      onClick={() => {
                        addToCart(singleItemProduct);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default Single;
