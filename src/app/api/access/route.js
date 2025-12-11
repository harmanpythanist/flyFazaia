import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server';

export async function POST (req){
console.log("in route handler");

const access=req.headers.get("authorization");
console.log(access);

try {
  let verify=jwt.verify(access,'125xyzabc');
  console.log("here 2");
  console.log(verify);
  
  if(verify){return NextResponse.json({msg:"access verified",user:{name:verify.name,email:verify.email,id:verify.id}},{status:200})}
} catch (error) {
  console.log(error.message);
  let err=new Error;
  err.message=error.message;
  err.status=400;
  return NextResponse.json(error.message,{status:400})
}
    
}