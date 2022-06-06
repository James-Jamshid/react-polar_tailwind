import React from "react";
import logo from "./assets/logo.png";
import circle from "./assets/circle.png";
import ice_cream from "./assets/ice-cream.png";
import milk from "./assets/milk.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col bg-[#F8EDF0] h-[862px]">
      {/* navbar---------------start */}
      <div className="flex items-center">
        <div className="flex flex-1 ">
          <div className="flex pl-[200px]">
            <Link to="/">
              <img id="icon" src={logo} alt="" className="flex " />
            </Link>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between">
          <Link to="/btn">
            <h5>Home</h5>
          </Link>
          <Link to="/btn">
            <h5>Product</h5>
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
        <div className="flex flex-1 items-center justify-center ">
          <Link to="/btn">
            <button className="flex w-[165px] h-[49px] bg-[#D23166] rounded-[5px] text-[white] hover:bg-[red] cursor-pointer items-center justify-center">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
      {/* navbar---------------end */}
      <div className="flex">
        <div className="flex items-center justify-center pt-[200px]">
          <div className="flex flex-1 flex-col justify-center pl-[200px] gap-y-4 ">
            <p>Sweet fun, full of milk.</p>
            <div className="flex  ">
              <h1 className="flex">
                Feel inside cold with our delicious ice-cream.
              </h1>
            </div>
            <p>
              Some food has looked so awful that it's looked like something that{" "}
              <br /> the dog's brought home, yet after one mouthful I've been
              left <br /> eating my thoughts, my words.
            </p>
            <Link to="/btn">
              <button className="flex w-[165px] h-[49px] bg-[#D23166] rounded-[5px] text-[white] hover:bg-[red] cursor-pointer items-center justify-center">
                Buy Now
              </button>
            </Link>
          </div>
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <img
              src={circle}
              alt=""
              className="flex absolute top-[450px] left-[900px]"
            />
            <img
              src={ice_cream}
              alt=""
              className="flex absolute pt-[10px] left-[800px]"
            />
            <img
              src={milk}
              alt=""
              className="flex absolute top-[300px] left-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
