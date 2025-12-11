"use server"

import { cookies } from 'next/headers';
import CryptoJS from 'crypto-js';
import React from 'react';

export const SignServeAction = async(data) => {
   console.log(data);
   
try {
    console.log(data,"from sign_serverAction");
const cookieStore=await cookies();
cookieStore.set("access",data.accessToken,{httpOnly:true,sameSite:"strict",secure:true,maxAge: 60 * 60 * 24, // 1 day ✅
});
cookieStore.set("refresh",data.refreshToken,{httpOnly:true,secure:true,sameSite:"strict",maxAge:2*24*60*60});
const expiry=new Date();
expiry.setHours(expiry.getHours()+5);
let encrypt_cookie=CryptoJS.AES.encrypt(JSON.stringify({...data.user,expiry}),"125xyzabc").toString();
console.log("done");

cookieStore.set("user-data",encrypt_cookie,{httpOnly:true,sameSite:"strict",secure:true,maxAge: 60 * 60 , // 1 day ✅
});
return {msg:"Success"};
    
} catch (error) {
    throw  error;
}

};
