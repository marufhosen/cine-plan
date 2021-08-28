import React from "react";
import "./Footer.css";
import logo from "../../images/logo1.png";
import { IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div>
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="footer-contact">
              <p>Contact Us:</p>
              <p>
                <strong>CinePlan LTD.</strong>
              </p>
              <p>Sector 10, Uttara</p>
              <p>13/3 Ka, Road 10, Uttara</p>
              <p>Dhaka 1215, Bangladesh</p>
            </div>
            <div style={{ marginTop: 15 }}>
              <p>Phone: +880 01900-000000</p>
              <p>
                {" "}
                Email:
                <strong> cineplan@gmail.com</strong>
              </p>
            </div>
          </div>
          <div className="footer-more">
            <h5 className="footer-title">More at CinePlan</h5>
            <p>
              <Link>Download APP</Link>
            </p>
            <p>
              <Link>Gift Voucher</Link>
            </p>
            <p>
              <Link>CinePlan Megazine</Link>
            </p>
            <p>
              <Link>Privacy Policy</Link>
            </p>
          </div>
          <div>
            <h5 className="footer-title">Social Media</h5>
            <IconButton>
              <FacebookIcon color="secondary" />
            </IconButton>
            <IconButton>
              <LinkedInIcon color="secondary" />
            </IconButton>
            <IconButton>
              <TwitterIcon color="secondary" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <small>CinePlan Limited 2021 © All Rights Reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
