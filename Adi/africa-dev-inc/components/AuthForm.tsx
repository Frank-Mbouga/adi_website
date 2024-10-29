"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { formSchema } from "@/lib/utils";
import CustomInput from "./CustomInput";
formSchema;
const AuthForm = ({ type }: { type: string }) => {
  const [authData, setAuthData] = useState<FormType | null | undefined>({
    password: "",
    email: "",
  });
  const validationSchema = formSchema(type);
  type FormType = z.infer<typeof validationSchema>; // creating a type from the formschema

  const form = useForm<FormType>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });
  function onSubmit(values: FormType) {
    if (type === "sign-in") {
      const vals = {
        email: values.email,
        password: values.password,
      };
      setAuthData(vals);
    }
    if (type === "sign-up") {
      const vals = {
        email: values.email,
        password: values.password,
        username: values.username,
      };

      setAuthData(vals);
    }

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }
  // const formstate = form.watch();
  console.log(authData, "authdata  ");
  // console.log(formstate);
  const formState = form.formState.isValid;
  console.log(formState);

  return (
    <section className="w-[40%] mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {type === "sign-up" && (
            <CustomInput
              control={form.control}
              label="username"
              name="username"
              placeholder="enter username"
              type="text"
            />
          )}
          <CustomInput
            control={form.control}
            label="email"
            name="email"
            placeholder="enter email"
            type="email"
          />
          <CustomInput
            control={form.control}
            label="password"
            name="password"
            placeholder="enter password"
            type="password"
          />
          {/* {
                type === "sign-in" ?<Button type="submit">{}</Button>:""
              } */}
          <Button disabled={formState===false} type="submit" className="w-full bg-red">
            {type === "sign-in" ? "Sign In" : "Sign up"}
          </Button>
        </form>
      </Form>
      {
        type==="sign-in"?<p className="text-center py-4">Don't have an account? <Link className="pl-2 text-red underline underline-offset-2" href={"/signup"}>Sign up</Link></p>:
        <p className="text-center py-4">Already have an account? <Link className="pl-2 text-red underline underline-offset-2" href={"/signin"}>Sign in</Link></p>
      }
    </section>
  );
};

export default AuthForm;
