"use client";

import { useEffect,ChangeEvent,useState,FormEvent  } from "react";
import axios from "axios";

import Modal from 'react-modal';
import { AppDispatch, useAppSelector } from "@/redux/store";

interface Address {
  postcode: string;
  state: string;
  city: string;
  addressName: string;
  addressType: string;
  houseNumber: string;
  floor: string;
  door: string;
}

interface Company {
  owner: Object;
  id: string; // Update with the actual type of your company ID
  companyName: string;
  vatNumber: string;
  registrationNumber: string;
  address: Address;
}



interface Companya {
  owner: Object;
  id: string; // Update with the actual type of your company ID
  companyName: string;
  vatNumber: string;
  registrationNumber: string;
  addresses: Address[];
}




export default function MyCompany(){
  const [create,setCreate]=useState<boolean>(false);
  const [userManageModal,setUserManageModal]=useState<boolean>(false);
  const closeUserManagementModal = () => setUserManageModal(false);
  const user = useAppSelector((state) => {
    const persistedUser = state.persistedReducer.value.user;


    // Check if persistedUser exists and has an email property
    if (persistedUser && 'email' in persistedUser) {
      return persistedUser;
    }
  
    // Return a default user object or handle the case where email is not available
    return { email: '' }; // Provide a default or handle this case accordingly
  });


  const [companies, setCompanies] = useState<Companya[]>([]);
  const [selectedCompany,setSelectedCompany]=useState<Companya>()
  const [newCompany, setNewCompany] = useState<Company>({
    owner: user,
    id: "",
    companyName: "",
    vatNumber: "",
    registrationNumber: "",
    address: {
      postcode: "",
      state: "",
      city: "",
      addressName: "",
      addressType: "",
      houseNumber: "",
      floor: "",
      door: "",
    },
  });


  useEffect(()=>{
    if(create===false){


    
    axios.post(`http://localhost:3000/api/get/all/companies`,{email:user.email}).then((res)=>{
      if(res.data.msg==="success"){

      
      setCompanies(res.data.company);}
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })

  }


  },[setCreate,create])




  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    const { value } = e.target;
    setNewCompany((prevCompany) => ({
      ...prevCompany,
      [field]: value,
    }));
  };

  const handleAddressChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    const { value } = e.target;
    setNewCompany((prevCompany) => ({
      ...prevCompany,
      address: {
        ...prevCompany.address,
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios.post("/api/create/company",{newCompany:newCompany}).then((res)=>{
      if(res.data.msg==="success"){
        setCreate(false)
      }
    }).catch((err) => {
      console.log(err)
    })
  
    

  };




    return (
        <div  className="p-6 rounded-2xl" style={{background:"#FFF"}}>
         <h2> My Company</h2>
         <div className="mt-5 flex justify-end"> <button className="btn border-t-neutral-500 bg-orange-300 p-3 rounded-2xl" onClick={()=>setCreate(!create)}>{create ? "View Company" : "Create new Company"}</button></div>
         {create ?  <div className="mt-5">
          <h4 className="text-lg font-semibold mb-3">Create Company</h4>
          {/* Form for creating a new company */}
          <form onSubmit={handleSubmit}>
        {/* Company Name */}
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={newCompany.companyName}
            onChange={(e) => handleInputChange(e, 'companyName')}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* VAT Number */}
        <div className="mb-4">
          <label htmlFor="vatNumber" className="block text-sm font-medium text-gray-700">
            VAT Number
          </label>
          <input
            type="text"
            id="vatNumber"
            name="vatNumber"
            value={newCompany.vatNumber}
            onChange={(e) => handleInputChange(e, 'vatNumber')}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Registration Number */}
        <div className="mb-4">
          <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">
            Registration Number
          </label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={newCompany.registrationNumber}
            onChange={(e) => handleInputChange(e, 'registrationNumber')}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Address Inputs */}
        <div className="mb-4">
        <h2 className="text-lg font-semibold mb-3">Adresss</h2>
          <label className="block text-sm font-medium text-gray-700">Post Code</label>
          <input
            type="text"
            placeholder="Postcode"
            value={newCompany.address.postcode}
            onChange={(e) => handleAddressChange(e, 'postcode')}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
         
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            placeholder="State"
            value={newCompany.address.state}
            onChange={(e) => handleAddressChange(e, 'state')}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
         
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            placeholder="City"
            value={newCompany.address.city}
            onChange={(e) => handleAddressChange(e, 'city')}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
         
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address Name </label>
          <input
            type="text"
            placeholder="Address Name"
            value={newCompany.address.addressName}
            onChange={(e) => handleAddressChange(e, 'addressName')}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
         
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address Type</label>
          <input
            type="text"
            placeholder="Address Type"
            value={newCompany.address.addressType}
            onChange={(e) => handleAddressChange(e, 'addressType')}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
         
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">House No.</label>
          <input
            type="text"
            placeholder="House Number"
            value={newCompany.address.houseNumber}
            onChange={(e) => handleAddressChange(e, 'houseNumber')}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
         
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Floor</label>
          <input
            type="text"
            placeholder="Floor"
            value={newCompany.address.floor}
            onChange={(e) => handleAddressChange(e, 'floor')}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
         
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Door</label>
          <input
            type="text"
            placeholder="Door Number"
            value={newCompany.address.door}
            onChange={(e) => handleAddressChange(e, 'door')}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
         
        </div>
        {/* Submit Button */}
        <div className="mt-4">
          <button type="submit" className="btn bg-blue-500 text-white px-4 py-2 rounded-md">
            Create Company
          </button>
        </div>
      </form>
          
        </div> :
         <div>
          <Modal isOpen={userManageModal} onRequestClose={closeUserManagementModal}>
       
        <button className="btn" onClick={closeUserManagementModal}>
          Close
        </button>
      </Modal>
         <table className="min-w-full border border-solid border-blueGray-800 mt-4">
           <thead>
             <tr>
               <th className="border border-solid border-blueGray-800">Company Name</th>
               <th className="border border-solid border-blueGray-800">VAT number</th>
               <th className="border border-solid border-blueGray-800">Registration number</th>
               <th className="border border-solid border-blueGray-800">Addresses</th>
               <th className="border border-solid border-blueGray-800">Actions</th>
             </tr>
           </thead>
           <tbody>
             {companies ? (
               companies.map((company) => (
                 <tr key={company.id}>
                   <td className="border border-solid border-blueGray-800">{company.companyName}</td>
                   <td className="border border-solid border-blueGray-800">{company.vatNumber}</td>
                   <td className="border border-solid border-blueGray-800">{company.registrationNumber}</td>
                   <td className="border border-solid border-blueGray-800">
                     {company.addresses.map((address,index) => (
                       <div key={index} className="mb-2">
                         <p>
                           {address.postcode} {address.state} {address.city} {address.addressName} {address.addressType} {address.houseNumber} {address.floor} {address.door}
                         </p>
                       </div>
                     ))}
                   </td>
                   <td className="border border-solid border-blueGray-800">
                   <button className="btn border-t-neutral-500 bg-orange-300 p-3 rounded-2xl"
                   onClick={()=>{
                    setUserManageModal(true);
                    setSelectedCompany(company);
                   }}
                   >
                       User Management
                     </button>
                     <button className="btn border-t-neutral-500 bg-orange-300 p-3 rounded-2xl">
                       Edit
                     </button>
                     <button className="btn border-t-neutral-500 bg-orange-300 p-3 rounded-2xl">
                       Delete
                     </button>
                   </td>
                 </tr>
               ))
             ) : (
               <tr>
                 <td  className="text-center p-4">
                   No Company
                 </td>
               </tr>
             )}
           </tbody>
         </table>
       </div>}
          </div>
      )
    }