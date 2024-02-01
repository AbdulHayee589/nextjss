import { findCompany } from "@/prisma/user";

export const dynamic = 'force-dynamic';


export async function POST(req) {
  try {
    const { email } = await req.json();

    console.log(email);
    const Companies = await findCompany(email)
    if (Companies) {
  
        return Response.json({ msg: "success",company: Companies })
  }else{
    return Response.json({ msg: "No Companies" });
  }
 } catch (err) {
    console.error(err);
    return Response.json({ msg: "Internal Server Error" });
  }
  
}
