import React from "react";
import car from "./assets/car.png";
import box from "./assets/box.png";
import money from "./assets/money.png";
import delivery from "./assets/delivery.png";
import ice_cream2 from "./assets/ice_cream2.png";
import { Link } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="flex flex-col items-center">
      {/* white line-------------start */}
      <div className="flex p-24 gap-x-10">
        <div className="flex flex-col w-[250px] h-[200px] shadow-lg shadow-black rounded-[7px] justify-center items-center gap-y-2">
          <Link to="/btn">
            <img
              id="icon"
              src={car}
              alt=""
              className="flex w-[50px] h-[40px]"
            />
          </Link>
          <Link to="/btn">
            <h5>Free Shipping</h5>
          </Link>
          <p>
            Last Chance! Free shipping on all <br /> orders ends today.
          </p>
        </div>
        <div className="flex flex-col w-[250px] h-[200px] shadow-lg shadow-black rounded-[7px] justify-center items-center gap-y-2">
          <Link to="/btn">
            <img
              id="icon"
              src={box}
              alt=""
              className="flex w-[50px] h-[40px]"
            />
          </Link>
          <Link to="/btn">
            <h5>Free Shipping</h5>
          </Link>
          <p>
            Last Chance! Free shipping on all <br /> orders ends today.
          </p>
        </div>
        <div className="flex flex-col w-[250px] h-[200px] shadow-lg shadow-black rounded-[7px] justify-center items-center gap-y-2">
          <Link to="/btn">
            <img
              id="icon"
              src={money}
              alt=""
              className="flex w-[50px] h-[40px]"
            />
          </Link>
          <Link to="/btn">
            <h5>Free Shipping</h5>
          </Link>
          <p>
            Last Chance! Free shipping on all <br /> orders ends today.
          </p>
        </div>
        <div className="flex flex-col w-[250px] h-[200px] shadow-lg shadow-black rounded-[7px] justify-center items-center gap-y-2">
          <Link to="/btn">
            <img
              id="icon"
              src={delivery}
              alt=""
              className="flex w-[50px] h-[40px]"
            />
          </Link>
          <Link to="/btn">
            <h5>Free Shipping</h5>
          </Link>
          <p>
            Last Chance! Free shipping on all <br /> orders ends today.
          </p>
        </div>
      </div>
      {/* white line-------------end */}
      {/* red line------------start */}
      <div className="flex justify-evenly w-[100%]  bg-[#F8EDF0]">
        <div className="flex  flex-col justify-center gap-y-3">
          <h1>
            Brown Sugar <br /> Oatmea
          </h1>
          <p>
            Together with McDonald’s, Burger King has grown to become <br />{" "}
            synonymous with burgers in the US.Together with McDonald’s, <br />{" "}
            Burger King has grown to become synonymous.
          </p>
          <Link to="/btn">
            <button className="flex w-[165px] h-[49px] bg-[#D23166] rounded-[5px] text-[white] hover:bg-[red] cursor-pointer items-center justify-center">
              See Details
            </button>
          </Link>
        </div>
        <div className="flex ">
          <img src={ice_cream2} alt="" className="flex" />
        </div>
      </div>
      {/* red line------------end */}
    </div>
  );
};

export default Wrapper;
