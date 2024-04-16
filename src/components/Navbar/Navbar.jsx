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
         <div
            className={`md:hidden ${
               scroll ? "text-black text-2xl" : "text-white"
            }`}
         >
            <Hamburger toggled={isOpen} toggle={setOpen} />
         </div>
         <div
            className={`fixed md:static top-16 ${
               isOpen ? "left-0 backdrop-blur-md" : "-left-[800px]"
            } w-full md:w-auto h-screen md:h-full flex justify-center md:items-center bg-white/30 md:bg-transparent transition-all ease-in duration-300 text-center`}
         >
            <ul className="md:flex justify-between items-center gap-4 text-xl mt-10 md:mt-0">
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
      </div>
   );
}

export default Navbar;
