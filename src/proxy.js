import React from 'react';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import CryptoJS from 'crypto-js';
import { revalidatePath } from 'next/cache';


export const config={matcher:['/','/services/form','/courses/enroll','/user/:path*']};



const access_validate=async(request,signal,url)=>{

const user_check=request.cookies.get("user-data")?.value;
if(user_check){
    try {
          const decrypted = JSON.parse( CryptoJS.AES.decrypt(user_check, "125xyzabc").toString(CryptoJS.enc.Utf8));
if(new Date(decrypted.expiry)>new Date()){console.log("still valid");

console.log("User Signed by first line");
return NextResponse.next()}else {throw new Error("User expired")};

    } catch (error) {
        throw error
    }
  
};

const access_check=request.cookies.get("access")?.value;
// console.log(access_check);

if(access_check){
console.log("in access");
console.log(request.nextUrl);

    try {
        let get=await fetch(`${url}/api/access_check`,{method:"POST",headers:{'content-type':'application/json','authorization':`${access_check}`},signal});
const conv=await get.json();
if(!get.ok){console.log(conv);
;throw new Error(conv)};
// let get=await access_check_fnx(access_check)
let resp=NextResponse.next();

const expiry=new Date();
expiry.setHours(expiry.getHours()+5);


let encrypt_cookie=CryptoJS.AES.encrypt(JSON.stringify({...conv.user,expiry}),"125xyzabc").toString();
resp.cookies.set("user-data",encrypt_cookie,{httpOnly:true,sameSite:"strict",secure:true,maxAge: 60 * 60 , // 1 day ✅
});

return resp;
    } catch (error) {
        

if(error.message.toUpperCase()==="TokenExpiredError".toUpperCase()||error.message.toUpperCase()=="Access Not Found".toUpperCase()){
console.log("here to call refresh");
return await refresh_fnx(request,signal,url);
}
else{

    throw error; 
}}}
else{
    return await refresh_fnx(request,signal,url);
}

};




const refresh_fnx=async (request,signal,url)=>{


const refresh_check=request.cookies.get("refresh")?.value;
console.log("in refresh");
if(!refresh_check){throw new Error("Refresh not found")};
try {
    const get=await fetch(`${url}/api/refresh_check`,{method:"POST",headers:{'content-type':'application/json','authorization':`${refresh_check}`},signal});
    const conv=await get.json();
    if(!get.ok){throw new Error(conv)};
console.log(conv);

let resp=NextResponse.next();
resp.cookies.set("access",conv.accessToken,{httpOnly:true,sameSite:"strict",secure:true,maxAge:60*60*24});
resp.cookies.set("refresh",conv.refreshToken,{httpOnly:true,sameSite:"strict",secure:true,maxAge:3*24*60*60});


const expiry=new Date();
expiry.setHours(expiry.getHours()+5);

let encrypt_cookie=CryptoJS.AES.encrypt(JSON.stringify({...conv.user,expiry}),"125xyzabc").toString();
resp.cookies.set("user-data",encrypt_cookie,{httpOnly:true,sameSite:"strict",secure:true,maxAge: 60 * 60*24 , // 1 day ✅
});
return resp;
} catch (error) {
    throw error;
}

};








const Middleware =async (request) => {
    let url=process.env.NODE_ENV==='production'?NEXT_PUBLIC_URL:"http://localhost:4600";
    console.log("mw running");
    console.log(url);
    
    const aborter=new AbortController();
   const signal=aborter.signal;


const timer=setTimeout(() => {
    aborter.abort("Took too long");
}, 8000);

try {
    const get=await access_validate(request,signal,url);
    clearTimeout(timer);
    return get;
} catch (error) {
    console.log(error.message,"here");
     clearTimeout(timer);

const resp= NextResponse.next();
    resp.cookies.delete("access"); 
    resp.cookies.delete("refresh");
    resp.cookies.delete("user-data");
return resp;
}






};

export default Middleware;
