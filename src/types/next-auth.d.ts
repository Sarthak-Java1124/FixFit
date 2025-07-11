import "next-auth";

declare module "next-auth" {
  interface User {
    _id?: string;
    
  }
  interface Session {
    user: {
      _id?: string;

    } & DefaultSession["user"];
  }
  interface Jwt {
    _id?: string;
   
  }
}
