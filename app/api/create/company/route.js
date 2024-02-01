import { createCompany } from "../../../../prisma/user";

export const dynamic = 'force-dynamic';


export async function POST(req) {
  try {

    const { newCompany } = await req.json();
   
     
    const createdCompany = await createCompany(newCompany);
    console.log(createdCompany);
    if(createdCompany){

   
      return Response.json({ msg: "success" ,createdCompany}); 
    }
     
  } catch (err) {
    console.error(err);
    return Response.json({ msg: "Internal Server Error" });
  }
  
}
