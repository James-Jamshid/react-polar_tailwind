import React from "react";
import first from "./assets/first.png";
import sec from "./assets/sec.png";
import third from "./assets/third.png";
import fourth from "./assets/fourth.png";
import anna from "./assets/anna.png";
import left from "./assets/left.png";
import jack from "./assets/jack.png";
import anna2 from "./assets/anna.png";
import anna3 from "./assets/anna3.png";
import right from "./assets/right.png";
import { Link } from "react-router-dom";

const Family = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 pt-20">
      <div className="flex">
        <h1>Our Product</h1>
      </div>
      <div className="flex gap-x-10">
        <Link to="/btn">
          <h5>ICE CREAM</h5>
        </Link>
        <Link to="/btn">
          <h5>CAYENNE CHOCOLATE</h5>
        </Link>
        <Link to="/btn">
          <h5>CAKE BATTER</h5>
        </Link>
        <Link to="/btn">
          <h5>CANDY CANE</h5>
        </Link>
        <Link to="/btn">
          <h5>PLATTERS</h5>
        </Link>
        <Link to="/btn">
          <h5>DESSERT</h5>
        </Link>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="flex  items-center justify-center">
          <img src={first} alt="" className="flex" />
        </div>
        <div className="flex flex-col justify-center gap-y-3 pl-20">
          <Link to="/btn">
            <h4>Brown bread</h4>
          </Link>
          <p>
            Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au{" "}
            <br /> Pain is a pioneer in the healthy fast food scene.Bon Au Pain
            is a <br /> pioneer in the healthy fast food scene.
          </p>
          <Link to="/btn">
            <h4>$19.55</h4>
          </Link>
          <Link to="/btn">
            <button className="flex w-[165px] h-[49px] bg-[#D23166] rounded-[5px] text-[white] hover:bg-[red] cursor-pointer items-center justify-center">
              Buy Now
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-y-3 pl-20 items-end pr-20">
          <Link to="/btn">
            <h4>Brown bread</h4>
          </Link>
          <p>
            Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au{" "}
            <br /> Pain is a pioneer in the healthy fast food scene.Bon Au Pain
            is a <br /> pioneer in the healthy fast food scene.
          </p>
          <Link to="/btn">
            <h4>$19.55</h4>
          </Link>
          <Link to="/btn">
            <button className="flex w-[165px] h-[49px] bg-[#D23166] rounded-[5px] text-[white] hover:bg-[red] cursor-pointer items-center justify-center">
              Buy Now
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <img src={sec} alt="" className="flex" />
        </div>
        <div className="flex items-center justify-center">
          <img src={third} alt="" className="flex" />
        </div>
        <div className="flex flex-col justify-center gap-y-3 pl-20">
          <Link to="/btn">
            <h4>Brown bread</h4>
          </Link>
          <p>
            Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au{" "}
            <br /> Pain is a pioneer in the healthy fast food scene.Bon Au Pain
            is a <br /> pioneer in the healthy fast food scene.
          </p>
          <Link to="/btn">
            <h4>$19.55</h4>
          </Link>
          <Link to="/btn">
            <button className="flex w-[165px] h-[49px] bg-[#D23166] rounded-[5px] text-[white] hover:bg-[red] cursor-pointer items-center justify-center">
              Buy Now
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <div className="flex gap-x-3">
            <div className="flex">
              <Link to="/btn">
                <img id="icon" src={anna} alt="" className="flex" />
              </Link>
            </div>
            <div className="flex flex-col">
              <Link to="/btn">
                <h4>Adele A. McNeill</h4>
              </Link>
              <p>AMERICAN</p>
            </div>
          </div>
          <div className="flex">
            <p>
              "Thanks a lot for the prompt service. Really <br /> appreciate.
              Excellence taste in Every Bite. Add <br /> a joy of best Taste.
              Foodie Moments."
            </p>
          </div>
          <div className="flex gap-x-5 justify-center items-center">
            <img id="icon" src={left} alt="" className="flex" />
            <Link to="/btn">
              <img id="icon" src={jack} alt="" className="flex" />
            </Link>
            <Link to="/btn">
              <img id="icon" src={anna2} alt="" className="flex" />
            </Link>
            <Link to="/btn">
              <img id="icon" src={anna3} alt="" className="flex" />
            </Link>

            <img id="icon" src={right} alt="" className="flex" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={fourth} alt="" className="flex" />
        </div>
      </div>
    </div>
  );
};

export default Family;
