import { findUser } from "@/prisma/user";

export const dynamic = 'force-dynamic';


export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const existingUser = await findUser(email)
    if (existingUser) {
      if(password===existingUser.password) {
        return Response.json({ msg: "success",existingUser: existingUser })
      } else{
        return Response.json({ msg: "Incorrect Password" })
      }
   
  }else{
    return Response.json({ msg: "Email Not Registered" });
  }
 } catch (err) {
    console.error(err);
    return Response.json({ msg: "Internal Server Error" });
  }
  
}
