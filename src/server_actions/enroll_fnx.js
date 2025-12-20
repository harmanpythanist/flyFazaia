"use server"

import {db} from '../setups/mysql'
import {sign_validate} from '../setups/joi_validator'
import {v4 as uuid } from 'uuid'


export const enroll_fnx=async(course,id,contact)=>{
  
  try {
    
  let valid=sign_validate.validate({id:id,contact:contact,course:course});
  if(valid.error?.details[0]){
    let err=new Error();
    err.message="Invalid input format."
   throw err;
  }
  
   let [check]=await db.execute(`select * from flyfazaia.users where id=?`,[id]);
 if(!check||check.length==0){throw new Error("User not authenticated")};

let uid=uuid()
 await  db.execute(`insert into enrollment (id,course_title,user_id,enrollment_date,user_contact) values(?,?,?,now(),?)`,
    [uid,course,id,contact])
   
    return {msg:"Enrolled Successfully "};
} catch (error) {
    console.log(error.message);
    throw error
  
}
};

