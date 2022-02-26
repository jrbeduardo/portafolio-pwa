import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { menuItems } from "../resources/menuItems";

export const Header = () => {
  const [showMenu, setShowMenu] = useState("md:hidden");

  return (
    <div className="text-white bg-tomato font-raleway  text-xl font-semibold sticky left-0 top-0 z-50">
      <div
        className={
          showMenu === "md:hidden"
            ? "flex mx-11 md:mx-2.5  justify-center items-center p-2 shadow-lg"
            : "flex mx-11 md:mx-0  md:flex-col justify-rounded items-baseline p-2 shadow-lg"
        }
      >
        <div className="flex justify-between items-baseline w-full">
          <h1 className="font-bold  text-2xl cursor-pointer ">
            <a
              className="flex justify-center items-center gap-2 hover:animate-pulse"
              href="https://drive.google.com/file/d/1s99GQpOPuuzaHB8D_85czUrPSnUTdgqn/view?usp=sharing"
              download="CV_eduardo.pdf"
            >
              <img className="h-7 w-7" src="./Tux.svg" alt="Tux" />
              <span>jrbeduardo</span>
            </a>
          </h1>
          <button
            onClick={() =>
              showMenu === "md:hidden"
                ? setShowMenu("md:flex")
                : setShowMenu("md:hidden")
            }
            className="hidden md:flex cursor-pointer"
          >
            {showMenu === "md:hidden" ? (
              <FaBars size={30} />
            ) : (
              <MdClose size={30} className="rounded-lg hover:bg-limon" />
            )}
          </button>
        </div>
        <ul className="flex text-white md:hidden">
          {menuItems.map((item) => (
            <li className="list-none mx-2" key={item.key}>
              <NavLink
                className="rounded-lg text-lg hover:bg-limon"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#68a042" : "",
                    borderRadius: "5px",
                    color: "white",
                    padding: ".2rem",
                  };
                }}
                to={item.key}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={`hidden flex-col text-white ${showMenu}`}>
          {menuItems.map((item) => (
            <li className="list-none my-2 " key={item.key}>
              <NavLink
                className="rounded-lg hover:bg-limon"
                onClick={() =>
                  showMenu === "md:hidden"
                    ? setShowMenu("md:flex")
                    : setShowMenu("md:hidden")
                }
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#68a042" : "",
                    borderRadius: isActive ? "5px" : "#68a042",
                    color: "white",
                    padding: ".2rem",
                  };
                }}
                to={item.key}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
