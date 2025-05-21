"use client";
import Input from "@/app/components/input/Input";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LoginApi } from "@/app/apis/authentication/Authentication";
import Spinners from "@/app/components/Spinners";
interface LoginProps {
  clicked: (vad: string) => void;
}
const Login: React.FC<LoginProps> = ({ clicked }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    LoginApi(data, setLoading);
  };
  return (
    <div className="  my-24 py-12 px-6  rounded-[4px] border-zinc-300 border-1 hover:shadow-2xl transition-all">
      <h2 className="mb-6 text-2xl font-bold  text-zinc-800">
        Login your Account
      </h2>
      <hr className="my-4 text-zinc-300" />

      <form action="" className="  mt-12 space-y-4">
        <Input
          label="Email"
          register={register}
          errors={errors}
          id="email"
          required
        />
        <Input
          label="Password"
          register={register}
          errors={errors}
          id="password"
          type="password"
          required
          maxLength
        />
        <div className="flex justify-center items-center md:mx-14">
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className=" px-16 my-4 bg-green-700 border-1 py-3 text-white rounded-[4px]"
          >
            {loading?<Spinners
            />:'Login'}
          </button>
        </div>
      </form>
      <hr className="my-4 text-zinc-300" />
      <div className="text-left  ">
        <div className="text-zinc-600 text-[16px] block  ">
          Does not have an account ?
          <span
            onClick={() => clicked("Register")}
            className=" transition-all cursor-pointer hover:text-green-700 font-bold"
          >
            {" "}
            Create account
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
