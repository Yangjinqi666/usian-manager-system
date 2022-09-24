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

const addMember=(data)=>{
  return request({
    url:`/member`,
    method:'POST',
  })
  data
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