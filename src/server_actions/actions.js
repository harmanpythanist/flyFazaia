"use server"

export const form_submit=async(type,data)=>{

let url=null;
let method=null;
switch (type) {
    case "enroll":{console.log("in enroll",data);
    url='http://localhost:4600/api/enroll';method="POST";break;}

  case "serviceForm":{console.log("in serviceForm");
  ;url='http://localhost:4600/api/service/form';method="POST";break;}
    default:{ break; }

};
try {


console.log(data,url);

    let get=await fetch_fnx(url,method,data,type);console.log(get);
    
return get;
} catch (error) {
    console.log(error.message);
    throw error;
}};





const fetch_fnx=async(url,method,data,type)=>{
    try {
        let get=await fetch(url,{method,headers:{"content-type":"application/json"},body:JSON.stringify(data)});
        let conv=await get.json();
        if(!get.ok){throw new Error(conv||`Error in fetch =>${type}`)};
return conv;

    } catch (error) {
        console.log("Error in server action => ",error.message);
        
        throw error;
    }
}