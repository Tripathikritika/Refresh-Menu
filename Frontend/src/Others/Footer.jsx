import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styling/Footer.module.css';
class Footer extends Component {
    
  render() {
    return (
        <div>
            <hr/>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                            <h3>COMPANY</h3>
                            <ul>
                                <li>
                                    <a href="/faq" alt="">FAQ</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="careers">Careers</a>
                                </li>
                                <li>
                                    <a href="/blog">Blog</a>
                                </li>
                            </ul>
                            <ul className="terms_links">
                                <li>
                                    <a href="/terms">
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a href="/privacy">
                                        Privacy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                            <h3>HELP &amp; CONTACT</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="far fa-life-ring" />
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="far fa-envelope" />
                                        Email Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-phone-alt" />
                                        080-6824-5911
                                    </a>
                                </li>                        
                            </ul>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                            <h3>MORE FROM US</h3>
                            <ul>
                                <li>
                                    <a href="#">Bulk/Party Order</a>
                                </li>
                                <li>
                                    <a href="#">Cake Order</a>
                                </li>
                                <li>
                                    <a href="#">FreshClub</a>
                                </li>
                                <li>
                                    <a href="#">Offers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ml-auto">
                            <h3>SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</h3>
                            <div className="input-group mt-4">
                                <input type="text" placeholder="Enter your email" name="EMAIL" className="form-control" />
                                <button type="submit" className="btn btn-custom">
                                    Subscribe
                                </button>
                            </div>
                            <div className="row mt-4">
                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 border border-top-0 border-bottom-0 border-left-0">
                                    <div className="row mt-2">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                            <a href="#">
                                                <img src="/google-play.jpg" alt="" height="40" />
                                            </a>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                            <a href="#">
                                                <img src="/btn-app-store-normal-2.svg" alt="" height="40" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 social_media">
                                    <ul className="mt-2 mb-2">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-square fa-2x" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter fa-2x" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram fa-2x" />
                                            </a>
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
                                    <a href="#">Mains</a>
                                </li>
                                <li>
                                    <a href="#">Pizzas</a>
                                </li>
                                <li>
                                    <a href="#">Salads</a>
                                </li>
                                <li>
                                    <a href="#">Desserts</a>
                                </li>
                                <li>
                                    <a href="#">Quickbites</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 second_menu">
                            <h3>CUISINES</h3>
                            <ul>
                                <li>
                                    <a href="#">Indian</a>
                                </li>
                                <li>
                                    <a href="#">Chinese</a>
                                </li>
                                <li>
                                    <a href="#">Italian</a>
                                </li>
                                <li>
                                    <a href="#">American</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#">Mexican</a>
                                </li>
                                <li>
                                    <a href="#">Thai</a>
                                </li>
                                <li>
                                    <a href="#">Continental</a>
                                </li>
                                <li>
                                    <a href="#">Mediterranean</a>
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