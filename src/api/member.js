import request from "@/utils/request";

const getMemberList=(page,size,data)=>{
  return request({
    url:`/member/list/search/${page}/${size}`,
    method:"POST",
    data
  })
}


export default{
  getMemberList
}