import React, { useEffect, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
   const [scroll, setScroll] = useState(false);
   const [isOpen, setOpen] = useState(false);

   const changeColorOnScroll = () => {
      window.scrollY > 64 ? setScroll(true) : setScroll(false);
   };

   useEffect(() => {
      window.addEventListener("scroll", changeColorOnScroll);

      return () => window.removeEventListener("scroll", changeColorOnScroll);
   }, []);
   return (
      <>
         <div
            className={`${
               scroll
                  ? "bg-white/30 backdrop-blur-md"
                  : "bg-gradient-to-r from-blue-600 to-cyan-500"
            } h-16 w-full fixed top-0 left-0 flex justify-between items-center px-3 `}
         >
            <Link
               to={"/"}
               className={`text-3xl font-bold ${
                  scroll
                     ? "bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                     : "text-white"
               }`}
            >
               Prodigy infoTech
            </Link>
            <div className="md:hidden">
               <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            <ul className="hidden md:flex justify-between items-center gap-6 text-xl">
               {[
                  { name: "Home", path: "/" },
                  { name: "About us", path: "/about-us" },
                  { name: "Contact us", path: "/contact-us" },
                  { name: "Shop", path: "/shop" },
               ].map((item) => (
                  <li key={item.name}>
                     <NavLink
                        to={item.path}
                        key={item.name}
                        className={({ isActive }) =>
                           `$cursor-pointer hover:text-orange-400 ${
                              isActive ? "text-orange-400 font-semibold" : ""
                           }`
                        }
                     >
                        {item.name}
                     </NavLink>
                  </li>
               ))}
            </ul>
         </div>
         <div
            className={`fixed md:hidden top-16 ${
               isOpen ? "left-0" : "-left-[800px]"
            } w-full h-screen flex justify-center bg-white/30 backdrop-blur-md transition-all ease-in duration-300 text-center z-20`}
         >
            <ul className="text-3xl mt-10">
               {[
                  { name: "Home", path: "/" },
                  { name: "About us", path: "/about-us" },
                  { name: "Contact us", path: "/contact-us" },
                  { name: "Shop", path: "/shop" },
               ].map((item) => (
                  <li key={item.name} className="mb-3">
                     <NavLink
                        to={item.path}
                        key={item.name}
                        className={({ isActive }) =>
                           `$cursor-pointer hover:text-orange-400 ${
                              isActive ? "text-orange-400 font-semibold" : ""
                           }`
                        }
                        onClick={() => setOpen(false)}
                     >
                        {item.name}
                     </NavLink>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
}

export default Navbar;
