import "../index.css";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-left">
        <li>Quick Links</li>
        <li>
          <ul className="inline_list">
            <li className="px-x-small">
              <Link className="link_wrapper" to="/">
                Home
              </Link>
            </li>
            <li className="px-x-small">
              <Link className="link_wrapper" to="/products">
                Products
              </Link>
            </li>
            <li className="px-x-small">
              <Link className="link_wrapper" to="/cart">
                My Cart
              </Link>
            </li>
            <li className="px-x-small">
              <Link className="link_wrapper" to="/wishlist">
                My Wishlist
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="footer_right inline_list">
        <li>Connect with the Dev</li>
        <li>
          <ul className="inline_list text_center flex flex-jc-space-around">
            <li>
              <a
                className="link_wrapper"
                href="https://twitter.com/ultronSwapnil"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </li>
            <li>
              <a className="link_wrapper" href="https://github.com/ultronjs">
                <i className="fab fa-github fa-lg"></i>
              </a>
            </li>
            <li>
              <a
                className="link_wrapper"
                href="https://www.instagram.com/ul7ron/"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </li>
            <li>
              <a
                className="link_wrapper"
                href="https://www.linkedin.com/in/swapnil-bansal/"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
