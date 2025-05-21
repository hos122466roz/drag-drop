"use client";
import React, { useState } from "react";
import Login from "./login/Login";
import Register from "./register/Register";


const AccountModal = () => {
  const [show, setShow] = useState("Login");
  return (
    <section
      className={`*:md:w-1/2 *:w-full container  *:bg-zinc-50    mt-24 flex justify-center items-start gap-x-18 `}
    >
      {show === "Login" && <Login clicked={setShow} />}
      {show === "Register" && <Register clicked={setShow} />}
    </section>
  );
};
export default AccountModal;
