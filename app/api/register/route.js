import { createUser, findUser } from "../../../prisma/user";

export const dynamic = 'force-dynamic';


export async function POST(req) {
  try {
    const { firstName,lastName, email, password } = await req.json();
        const existingUser = await findUser(email)
        if (existingUser) {
            return Response.json({ msg: "Email Already Registered" })
          }
    const newUser = await createUser(firstName, lastName, email, password);
    console.log(newUser);
    if(newUser){

   
      return Response.json({ msg: "success" ,newUser}); }
     
  } catch (err) {
    console.error(err);
    return Response.json({ msg: "Internal Server Error" });
  }
  
}
