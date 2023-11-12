import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

export default function Main() {
  return (
    <div>
      <Header />
      <Login />
      <Outlet />
    </div>
  );
}
