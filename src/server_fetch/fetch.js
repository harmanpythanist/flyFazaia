

export const fetch_fnx=async(type,opt)=>{
   let url=process.env.NODE_ENV==='production'?`${process.env.URL}/api`:"http://localhost:4600/api";
// let url="http://localhost:4600/api"
switch (type) {
    case "courses":
        {url=`${url}/courses?type=full`;
        break;
}
case "syllabus":{url=`${url}/syllabus?id=${opt}`;break;}
case "course-list":{url=`${url}/courses?type=list`;
        break;}
        case "services":{url=`${url}/services`;break;}
        case "user":{url=`${url}/user/${opt}`;break;}
        case "project-dets":{url=`${url}/project_dets/${opt}`;break;}
    default:{
        break;}
};
try {
    let get=await fetch(url,{cache:"no-store"});
    let conv=await get.json()
if(!get.ok){
;throw new Error(conv||"Server Fetch failed")};
return conv;
} catch (error) {
    console.log(error.message);
    throw error;
}

}