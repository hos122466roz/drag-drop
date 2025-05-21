"use client";
import { useState } from "react";
import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";
import { FaEye } from "react-icons/fa6";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  maxLength?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  errors,
  maxLength,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full relative">
      {maxLength ? (
        <>
          <input
            id={id}
            disabled={disabled}
            {...register(id, { required, minLength: 6 })}
            placeholder=""
            type={show ? "text" : type}
            className={`
           peer
           rounded-[4px]
          w-full
          p-3
          pt-6
          font-light 
          bg-white 
          border-2
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-zinc-700"}
          `}
          />
          <div
            onClick={() => setShow(!show)}
            className={`h-full absolute top-0 right-0 border-l-1 flex
            justify-center items-center px-4  cursor-pointer transition-all
            border-l-zinc-200 hover:text-zinc-900
            ${show ? "text-white" : "text-zinc-600"}
            ${show ? "bg-zinc-500" : "bg-hidden"}`}
          >
            <FaEye size={18} />
          </div>
        </>
      ) : (
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder=""
          type={type}
          className={`
         peer
         rounded-[4px]
        w-full
        p-3
        pt-6
        font-light 
        bg-white 
        border-2
        border-t-hidden
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${errors[id] ? "border-rose-500" : "border-neutral-300"}
        ${errors[id] ? "focus:border-rose-500" : "focus:border-zinc-700"}
        `}
        />
      )}
      <label
        htmlFor={id}
        className={`
         absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 left-4
          z-10 
          origin-[0] 
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${label.length > 0 ? "scale-90" : "scale-100"}
          ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
    </div>
  );
};
export default Input;
