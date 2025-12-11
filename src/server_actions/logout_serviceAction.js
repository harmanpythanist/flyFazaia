"use server"

import { cookies } from "next/headers";





export const logOut_fnx=async()=>{


try {
    console.log("logOut running");
    
const cookiesStore=await cookies();
let remove1=cookiesStore.delete("user-data");
let remove2=cookiesStore.delete("access");
let remove3=cookiesStore.delete("refresh");
return {msg:"LogOut successful"};
} catch (error) {
    console.log(error.message);
throw error;    
}



};