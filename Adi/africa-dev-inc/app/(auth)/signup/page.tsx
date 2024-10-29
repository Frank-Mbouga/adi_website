import AuthForm from "@/components/AuthForm";
import Image from "next/image";
import React from "react";

const SignUp = () => {
  return (
    <div className="mt-[10%]">
      <div className="imageHolder ml-[40%] border-red ">
        <Image
          alt="image goes here"
          src={"/images/adiLogo.jpg"}
          className="" //responsive-w-[90vw]
          width={100}
          height={100}
        />
      </div>
      <AuthForm type="sign-up" />
    </div>
  );
};

export default SignUp;
