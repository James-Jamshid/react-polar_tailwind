import React from "react";
import rasbery from "./assets/rasbery.png";
import select from "./assets/select.png";
import add from "./assets/add.png";
import delivery from "./assets/delivery.png";
import play from "./assets/play.png";
import apple from "./assets/apple.png";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="flex bg-[#F8EDF0]">
      <div className="flex flex-1 justify-center">
        <img src={rasbery} alt="" className="flex" />
      </div>
      <div className="flex flex-2 flex-col gap-y-5 justify-center ">
        <h1>Simple Way To Order Your Food</h1>
        <p>
          Some food has looked so awful that it's looked like something that the{" "}
          <br /> dog's brought home, yet after one mouthful I've been left
          eating my <br /> thoughts.
        </p>
        <div className="flex gap-x-3 items-center">
          <Link to="/btn">
            <div
              id="icon"
              className="flex w-[30px] h-[30px] items-center justify-center bg-[white] rounded-[3px] "
            >
              <img src={add} alt="" className="flex" />
            </div>
          </Link>
          <Link to="/btn">
            <h5>Select Your Food</h5>
          </Link>
        </div>
        <div className="flex gap-x-3 items-center">
          <Link to="/btn">
            <div
              id="icon"
              className="flex w-[30px] h-[30px] items-center justify-center bg-[white] rounded-[3px] "
            >
              <img src={delivery} alt="" className="flex" />
            </div>
          </Link>
          <Link to="/btn">
            <h5>Select Your Food</h5>
          </Link>
        </div>
        <div className="flex gap-x-3 items-center">
          <Link to="/btn">
            <div
              id="icon"
              className="flex w-[30px] h-[30px] items-center justify-center bg-[white] rounded-[3px] "
            >
              <img src={select} alt="" className="flex" />
            </div>
          </Link>
          <Link to="/btn">
            <h5>Select Your Food</h5>
          </Link>
        </div>
        <div className="flex gap-x-5">
          <Link to="/btn">
            <div className="flex bg-[black] w-[200px] h-[50px] text-[white] items-center justify-evenly cursor-pointer rounded-lg hover:bg-[#504f4f]">
              <img src={play} alt="" className="flex w-[30px] h-[30px]" />
              <h3>
                GET IT ON <br />
                GOOGLE PLAY
              </h3>
            </div>
          </Link>
          <Link to="/btn">
            <div className="flex bg-[black] w-[200px] h-[50px] text-[white] items-center justify-evenly cursor-pointer rounded-lg hover:bg-[#504f4f]">
              <img src={apple} alt="" className="flex w-[30px] h-[30px]" />
              <h3>
                GET IT ON <br />
                GOOGLE PLAY
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
