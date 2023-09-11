import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    email: string;
  }
}