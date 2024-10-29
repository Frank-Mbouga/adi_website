import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formSchema = (type?:string) => z.object({
  username: type==="sign-up"? z.string().min(2,{message:"Name should be atleast 2 letters long"}).max(50,{message:"Name too long"}) : z.string().optional(),
  password: z.string().min(8,{message:"password should be atleast 8 characters long"}).max(50),
  email: z.string().email({message:"Invalid email"}),
});