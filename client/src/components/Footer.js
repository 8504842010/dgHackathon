import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Lets get Social!</h5>
            <p class="grey-text text-lighten-4">
              A art work by Team to present a social media for DataGrokr
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Team</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Rohan Vivek
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Yash Goyal
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Chandan Gorai
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2020 designed by WhiteHat_Snr.
          <a class="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
