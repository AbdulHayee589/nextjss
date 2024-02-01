"use client"
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import MyCompany from "../components/Pages/myCompany"
import dynamic from "next/dynamic";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import {logout} from "@/redux/features/authSlice"
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

export default function Dashboard(){
    const router = useRouter();
   const user=useAppSelector((state)=>state.persistedReducer.value.user)
    console.log(user)
    const [page,setPage]=useState("dashboard")

    return(
        <div className="flex bg-gray-200">
       <div className="bg-white p-3 pt-5 border border-light  shadow-md"><SideBar setPage={setPage} /></div>
       
       <div className="container  justify-center"
       > <div className="flex justify-center"> <Header setPage={setPage}/></div>
          <div className="p-5"> {page==="Mycompanies" && <MyCompany/>}</div>
       </div>
   
        
        </div>
    )
}