 import { object, string } from "zod/v4";
 
 export const loginSchema = object({
  email: string().email("invalid email address"),
  password: string().min(8, "password must be atleast 8 characters")

});