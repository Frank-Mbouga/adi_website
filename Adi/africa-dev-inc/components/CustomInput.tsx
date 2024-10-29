"use client";
import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { formSchema } from "@/lib/utils";
import { Input } from "./ui/input";
formSchema;
const schema = formSchema;
interface InputProps {
  name: string;
  label: string;
  type: string;
  control: object;
  placeholder: string;
}

const CustomInput = ({
  control,
  name,
  label,
  type,
  placeholder,
}: InputProps) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <div>
                <Input type={type} placeholder={placeholder} {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default CustomInput;
