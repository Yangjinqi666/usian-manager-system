import request from "@/utils/request";

const getMemberList=(page,size,data)=>{
  return request({
    url:`/member/list/search/${page}/${size}`,
    method:"POST",
    data
  })
}

const deleteMemberList=(id)=>{
  return request({
    url:`/member/${id}`,
    method:'DELETE'
  })
}

const addMember=()=>{

}

const editMember=()=>{

}

const findMember=()=>{

}


export default{
  getMemberList,
  deleteMemberList,
  addMember,
  editMember,
  findMember
}