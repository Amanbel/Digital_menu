import React, { useEffect, useState } from "react";
import { DATA } from "./data";
import BACK from "../assets/backs/back_boss.jpg";
import BACK2 from "../assets/backs/another_boss.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleDropDown = () => {
    setToggle((prev) => (prev ? false : true));
    setTimeout(() => {
      setToggle(false);
    }, 10000);
  };
  const [chosenPage, setChosenPage] = useState<string>("");
  const listOfPages: string[] = [
    "Drinks",
    "Dinner",
    "Breakfast",
    "Main Dishes",
  ];

  useEffect(() => {
    setChosenPage("Main Dishes");
  }, []);
  const changeMenupage = (page: string) => {
    if (page !== chosenPage) {
      setChosenPage(page);
      setTimeout(() => {
        setToggle(false);
      }, 1000);
    }
  };
  return (
    <div className="max-w-[780px] relative flex flex-col overflow-hidden border-white border-2 rounded-lg">
      <div className="absolute w-full h-full">
        <img src={BACK} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="w-full h-full bg-black/80 z-[100] py-3 px-7 md:py-5 md:px-14">
        {/* logo container */}
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
          <img src={BACK2} alt="" className="w-full h-full" />
        </div>
        <h1 className="font-sans text-[50px] md:text-[70px] text-white">
          {chosenPage}
        </h1>
        <div
          className="mb-7 mt-1 md:mb-10 md:mt-2 flex flex-col gap-2 relative"
          onClick={toggleDropDown}
        >
          <div className="py-2 px-5 md:py-3 md:px-12 z-[80] cursor-pointer text-[17px] flex justify-between items-center text-white border-white border-2 rounded-md">
            <span>{chosenPage}</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          {toggle ? (
            <div className="flex translate-y-0 transition-all duration-300 flex-col z-[50] bg-white rounded-sm py-3 px-4 gap-3 absolute w-full top-[100%]">
              {listOfPages
                .filter((page) => {
                  return page !== chosenPage;
                })
                .map((page, index) => (
                  <span
                    key={index}
                    onClick={() => changeMenupage(page)}
                    className="w-full h-full cursor-pointer font-sans font-semibold"
                  >
                    {page}
                  </span>
                ))}
              {/* <span onClick={() => changeMenupage("Breakfast")}>Breakfast</span>
              <span onClick={() => changeMenupage("Dinner")}>Dinner</span> */}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-5 text-white">
          {DATA.map((dish, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex flex-col gap-4 font-bold tracking-wide sm:text-[15px]">
                <div className="flex justify-between items-center gap-4 font-bold tracking-wide sm:text-[15px] md:text-[20px]">
                  <p>{dish.foodName}</p>
                  <hr className="flex-1" />
                  <p className="min-w-20">300 ETB</p>
                </div>
                <div>
                  <img
                    src={BACK}
                    alt=""
                    className="object-cover rounded-lg w-[100%] h-[150px]"
                  />
                </div>
              </div>
              <div className="w-full overflow-hidden mt-3">
                <p className="font-light font-wide w-full text-[15px]">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
