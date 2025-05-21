import Input from "@/app/components/input/Input";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RegisterApi } from "@/app/apis/authentication/Authentication";
import Spinners from "@/app/components/Spinners";

interface RegisterProps {
  clicked: (val: string) => void;
}
enum STEPS {
  INFO = 0,
  PASSWORD = 1,
}
const Register: React.FC<RegisterProps> = ({ clicked }) => {
  const [step, setStep] = useState(STEPS.INFO);

    const [loading, setLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      configPassword: "",
    },
  });
  const onBack = () => {
    if (step <= 0) {
      return;
    }
    setStep((value) => value - 1);
  };
  const onNext =  () => {
    if (step === STEPS.PASSWORD) {
      return;
    }
    setStep((value) => value + 1);
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    for (const x in data) {
      if (data[x] == "") {
        toast.error(`Please complete all fields  : ${x}`);
        return;
      }
    }
    if (data.password !== data.configPassword) {
      toast.error("Passwords do not match");
      return;
    }
    RegisterApi(data, setLoading);

  };

  let bodyContent;
  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            register={register}
            errors={errors}
            id="firstName"
            required
          />
          <Input
            label="Last Name"
            register={register}
            errors={errors}
            id="lastName"
            required
          />
        </div>
        <div>
          <Input
            label="Email"
            register={register}
            errors={errors}
            id="email"
            type="email"
            required
          />
        </div>
      </div>
    );
  }

  if (step === STEPS.PASSWORD) {
    bodyContent = (
      <div className="space-y-2">
        <Input
          label="Password"
          register={register}
          errors={errors}
          id="password"
          type="password"
          required
          maxLength
        />
        <p className="text-[14px] mb-10 text-zinc-700 ">
          *Password selected must be at least 6 characters long.
        </p>
        <Input
          label="Confirm Password"
          register={register}
          errors={errors}
          id="configPassword"
          type="password"
          required
          maxLength
        />
      </div>
    );
  }
  return (
    <div className="w-1/2  my-24 py-12  rounded-[4px]  px-6 hover:shadow-2xl border-zinc-300 border-1  transition-all">
      <h2 className="mb-8 text-2xl font-bold text-zinc-800">Register now</h2>
      <hr className="my-4 text-zinc-300" />

      <form action="" className="  mt-12 ">
        {bodyContent}
      </form>
      <div className="grid my-10 grid-cols-2 gap-2 md:mx-14">
        <button
          onClick={onBack}
          className=" my-4 font-bold  border-1 py-3 text-black rounded-[4px]"
        >
          Back
        </button>
        {step === STEPS.PASSWORD ? (
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className=" px-4 my-4  bg-green-700 border-1 py-3 text-white rounded-[4px]"
          >
            {loading ? <Spinners /> : "Create"}
          </button>
        ) : (
          <button
            onClick={onNext}
            className=" px-4 my-4 bg-green-700 border-1 py-3 text-white rounded-[4px]"
          >
            Next
          </button>
        )}
      </div>
      <hr className="my-4 text-zinc-300" />

      <div className="text-left  ">
        <div className="text-zinc-600 text-[16px] block  ">
          Do you have an account? Login ?
          <span
            onClick={() => clicked("Login")}
            className=" transition-all cursor-pointer hover:text-green-700 font-bold"
          >
            {" "}
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
