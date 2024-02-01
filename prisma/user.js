import { PrismaClient } from '@prisma/client'     

const prisma = new PrismaClient();

export const createUser=async(firstName,lastName,email,password)=>{
const user = await prisma.user.create({
    data:{
        firstName,
        lastName,
        email,
        password
    }
});
return user;

}

export const findUser=async(email)=>{
    const user = await prisma.user.findUnique({
        where:{
            email:email,
        }
    });
    
    return user;
    
}

export const createCompany = async (newCompany) => {
    const company = await prisma.company.create({
      data: {
        owner: newCompany.owner.email,
        companyName: newCompany.companyName,
        vatNumber: newCompany.vatNumber,
        registrationNumber: newCompany.registrationNumber,
        addresses: {
            create: [
                {
                  postcode: newCompany.address.postcode,
                  state: newCompany.address.state,
                  city: newCompany.address.city,
                  addressName: newCompany.address.addressName,
                  addressType: newCompany.address.addressType,
                  houseNumber: newCompany.address.houseNumber,
                  floor: newCompany.address.floor,
                  door: newCompany.address.door,
                },
              ],
        }
      }
    });
    return company;
  }
  

  export const findCompany = async (email) => {
    const company = await prisma.company.findMany({
      where: {
        owner: email,
      },
      include: {
        addresses: true,
      },
    });
  
    return company;
  };