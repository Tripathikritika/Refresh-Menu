import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <hr />
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                <h3>COMPANY</h3>
                <ul>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                </ul>
                <ul className="terms_links">
                  <li>
                    <Link to="/terms-and-conditions">Terms</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                <h3>HELP &amp; CONTACT</h3>
                <ul>
                  <li>
                    <Link to="#">
                      <i className="far fa-life-ring" />
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-envelope" />
                      Email Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-phone-alt" />
                      080-6824-5911
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                <h3>MORE FROM US</h3>
                <ul>
                  <li>
                    <Link to="/bulk-order">Bulk/Party Order</Link>
                  </li>
                  <li>
                    <Link to="/cakes">Cake Order</Link>
                  </li>
                  <li>
                    <Link to="/fresh-club">FreshClub</Link>
                  </li>
                  <li>
                    <Link to="/offers">Offers</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ml-auto">
                <h3>SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</h3>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="EMAIL"
                    className="form-control"
                  />
                  <button type="submit" className="btn btn-custom">
                    Subscribe
                  </button>
                </div>
                <div className="row mt-4">
                  <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 border border-top-0 border-bottom-0 border-left-0">
                    <div className="row mt-2">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <Link to="#">
                          <img src="/google-play.jpg" alt="" height="40" />
                        </Link>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <Link to="#">
                          <img
                            src="/btn-app-store-normal-2.svg"
                            alt=""
                            height="40"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 social_media">
                    <ul className="mt-2 mb-2">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-square fa-2x" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter fa-2x" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram fa-2x" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer2">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                <h3>CATEGORIES</h3>
                <ul>
                  <li>
                    <Link to="/category/mains">Mains</Link>
                  </li>
                  <li>
                    <Link to="/category/pizza">Pizzas</Link>
                  </li>
                  <li>
                    <Link to="/category/salads">Salads</Link>
                  </li>
                  <li>
                    <Link to="/category/desserts">Desserts</Link>
                  </li>
                  <li>
                    <Link to="/category/quickbites">Quickbites</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 second_menu">
                <h3>CUISINES</h3>
                <ul>
                  <li>
                    <Link to="/cuisine/indian-food">Indian</Link>
                  </li>
                  <li>
                    <Link to="/cuisine/chinese-food">Chinese</Link>
                  </li>
                  <li>
                    <Link to="/cuisine/italian-food">Italian</Link>
                  </li>
                  <li>
                    <Link to="/cuisine/american-food">American</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/cuisine/mexican-food">Mexican</Link>
                  </li>
                  <li>
                    <Link to="/cuisine/thai-food">Thai</Link>
                  </li>
                  <li>
                    <Link to="/cuisine/mexican-food">Continental</Link>
                  </li>
                  <li>
                    <Link to="cuisine/continental-food">Mediterranean</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Footer;
