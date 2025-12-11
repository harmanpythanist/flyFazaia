
import CryptoJS from "crypto-js";
import FlyFazaiaNavbar from "./navBar";


const { cookies } = require("next/headers")
export const NavServer=async()=>{


try {
    const cookie_store=await cookies();
const get=cookie_store.get("user-data")?.value;
// console.log("user data",get);

if(get){
    let decrypt_parse=null;
    try {
 let decrypt=CryptoJS.AES.decrypt(get,"125xyzabc").toString(CryptoJS.enc.Utf8);
if(decrypt){decrypt_parse=JSON.parse(decrypt)}
else{throw new Error("Decryption failed")}
} catch (error) {
    throw error};

let check=new Date(decrypt_parse.expiry)>new Date();
if(check){
  return  <FlyFazaiaNavbar data={{status:true,data:{...decrypt_parse}}}/> }
 
else { let err=new Error();err.message="User session expired";
    throw new Error(err);
    };
}
else {  let err=new Error();err.message="User session absent";
    throw new Error(err)};

} catch (error) {
    console.log("error in nav",error.message);
return  <FlyFazaiaNavbar data={ {status:false,msg:error.message}}/>     
}







};