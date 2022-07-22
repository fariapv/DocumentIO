import React from "react";
import { BrowserRouter, Outlet, Router } from "react-router-dom";
import Header from "../Header";

export default function Layout() {
  return (
    <div className="bg-gray-900 flex flex-col justify-center w-full ">
      <Header></Header>
      <div className="flex items-center justify-center p-4 w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
