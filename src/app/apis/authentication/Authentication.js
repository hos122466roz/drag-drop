"use client";
import axios from "@/app/axios/axios";
import toast from "react-hot-toast";

export const RegisterApi = async (data, setLoading) => {
  setLoading(true)
  await axios
    .post("auth/register", data)
    .then((res) => {
      toast.success("success Register ");
      setLoading(false) 
       window.localStorage.setItem("accessToken", res.data.data.accessToken);
      window.localStorage.setItem("refreshToken", res.data.data.refreshToken);
    })
    .catch((err) => {
      setLoading(false); 
      if (err.status === 422) {
        toast.error('There is an account with this "email" address.');
      }
    });
};

export const LoginApi = async (data, setLoading) => {
  setLoading(true);
  await axios
    .post("auth/login", data)
    .then((res) => {
      console.log(res);
      setLoading(false);
      toast.success("Successfully login ");
      window.localStorage.setItem("accessToken", res.data.data.accessToken);
      window.localStorage.setItem("refreshToken", res.data.data.refreshToken);
    })
    .catch((err) => {
      setLoading(false);
      if (err.status === 422) {
        toast.error("invalid email or password");
      }
    });
};
