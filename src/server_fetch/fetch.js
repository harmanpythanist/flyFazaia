

export const fetch_fnx=async(type,opt)=>{
    let url=null;
switch (type) {
    case "courses":
        {url='http://localhost:4600/api/courses?type=full';
        break;
}
case "syllabus":{url=`http://localhost:4600/api/syllabus?id=${opt}`;break;}
case "course-list":{url='http://localhost:4600/api/courses?type=list';
        break;}
        case "services":{url='http://localhost:4600/api/services';break;}
        case "user":{url=`http://localhost:4600/api/user/${opt}`;break;}
        case "project-dets":{url=`http://localhost:4600/api/project_dets/${opt}`;break;}
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