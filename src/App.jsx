import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
function App() {
   return (
      <div className="text-white pt-16 bg-slate-950 min-h-screen">
         <Navbar />
         <Outlet />
      </div>
   );
}

export default App;
