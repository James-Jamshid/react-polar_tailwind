import React from "react";
import logo from "./assets/logo.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import p from "./assets/p.png";
import master from "./assets/master.png";
import visa from "./assets/visa.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex bg-[#0A0808] h-[381px] border justify-evenly">
      <div className="flex flex-col gap-y-3 justify-center ">
        <div className="flex">
          <Link to="/">
            <img id="icon" src={logo} alt="" className="flex" />
          </Link>
        </div>
        <div className="flex">
          <p>
            Some food has looked so awful that <br /> it's looked like something
            that the <br /> dog's brought home.
          </p>
        </div>
        <div className="flex">
          <p>Follow US</p>
        </div>
        <div className="flex gap-x-3">
          <a href="https://www.facebook.com">
            <img id="icon" src={facebook} alt="" className="flex" />
          </a>
          <a href="https://twitter.com">
            <img id="icon" src={twitter} alt="" className="flex" />
          </a>
          <a href="https://www.instagram.com">
            <img id="icon" src={instagram} alt="" className="flex" />
          </a>
          <a href="https://www.linkedin.com">
            <img id="icon" src={linkedin} alt="" className="flex" />
          </a>
        </div>
      </div>
      {/* home------------------- */}
      <div className="flex flex-col gap-y-3 justify-center ">
        <Link to="/btn">
          <h5>Home</h5>
        </Link>
        <Link to="/btn">
          <h5>Product</h5>
        </Link>
        <Link to="/btn">
          <h5>Blog</h5>
        </Link>
        <Link to="/btn">
          <h5>Pricing</h5>
        </Link>
        <Link to="/btn">
          <h5>Testimonials</h5>
        </Link>
        <Link to="/btn">
          <h5>Contact Us</h5>
        </Link>
      </div>
      <div className="flex flex-col gap-y-3 justify-center ">
        <Link to="/btn">
          <h5>Delivery Information</h5>
        </Link>
        <Link to="/btn">
          <h5>Privacy Policy</h5>
        </Link>
        <Link to="/btn">
          <h5>Terms & Condition</h5>
        </Link>
        <Link to="/btn">
          <h5>Search Terms</h5>
        </Link>
        <Link to="/btn">
          <h5>Order & Return</h5>
        </Link>
      </div>
      <div className="flex flex-col gap-y-3 justify-center ">
        <div className="flex">
          <Link to="/btn">
            <h5>Newsletter</h5>
          </Link>
        </div>
        <div className="flex">
          <input
            type="email"
            placeholder="Your Email"
            className="flex w-[300px] h-[55px] pl-4 bg-[#FAFAFA] rounded-l-lg"
          />
          <button className="flex w-[88px] h-[55px]  bg-[#D23166] rounded-r-lg text-[white] hover:bg-[red] cursor-pointer items-center justify-center">
            Subscribe
          </button>
        </div>
        <div className="flex gap-x-3">
          <a href="https://www.prioritypass.com">
            <img id="icon" src={visa} alt="" className="flex" />
          </a>
          <a href="https://www.mastercard.co.kr/ko-kr.html">
            <img id="icon" src={master} alt="" className="flex" />
          </a>
          <a href="https://www.google.com/search?client=safari&rls=en&q=visa+card&ie=UTF-8&oe=UTF-8">
            <img id="icon" src={p} alt="" className="flex" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
