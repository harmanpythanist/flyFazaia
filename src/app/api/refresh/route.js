import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

const access_generate=(x)=>{return jwt.sign(x,'125xyzabc',{expiresIn:"24h"})};
const generate_refresh=(x)=>{return jwt.sign(x,'125xyzabc',{expiresIn:"72h"})};


export const POST=async(req)=>{

    console.log("in refresh");

const refresh=req.headers.get('authorization');
console.log(refresh);
try {
  const verify=jwt.verify(refresh,'125xyzabc');
if(verify){
  let access=access_generate({name:verify.name,email:verify.email,id:verify.id});
  let refresh=generate_refresh({name:verify.name,email:verify.email,id:verify.id});
//   let resp= NextResponse.next();
// resp.headers.set("access",`${access}`)
// resp.headers.set("refresh",`${refresh}`)
return NextResponse.json({msg:"Successfuly refreshed",user:{name:verify.name,email:verify.email,id:verify.id},accessToken:access,refreshToken:refresh},{status:200});

}
} catch (error) {
  console.log(error.message);
  return NextResponse.json(error.message,{status:400})
  
  
}
}