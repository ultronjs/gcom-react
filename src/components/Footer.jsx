import "../index.css";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer">
      <ul class="footer-left">
        <li>Quick Links</li>
        <li>
          <ul class="inline_list">
            <li class="px-x-small">
              <Link class="link_wrapper" to="/">
                Home
              </Link>
            </li>
            <li class="px-x-small">
              <Link class="link_wrapper" to="/products">
                Products
              </Link>
            </li>
            <li class="px-x-small">
              <Link class="link_wrapper" to="/cart">
                My Cart
              </Link>
            </li>
            <li class="px-x-small">
              <Link class="link_wrapper" to="/wishlist">
                My Waitlist
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="footer_right inline_list">
        <li>Connect with the Dev</li>
        <li>
          <ul class="inline_list text_center flex flex-jc-space-around">
            <li>
              <a>
                <i class="fab fa-twitter fa-lg"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fab fa-github fa-lg"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fab fa-instagram fa-lg"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fab fa-linkedin fa-lg"></i>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
