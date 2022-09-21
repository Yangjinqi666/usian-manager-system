import request from '../utils/request'

// 会员管理接口    http://vue.mengxuegu.com/pro-api/member/list/search/1/20
// 供应商管理接口  http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10
// 查询单个会员接口  http://vue.mengxuegu.com/pro-api/member/10

const getMemberList = (page = 1, size = 10, data = {}) => {
  return request({
    url: `/member/list/search/${page}/${size}`,
    method: 'POST',
    data
  })

}

const getSupplierList = (page = 1, size = 10, data = {}) => {
  return request({
    url: `/supplier/list/search/${page}/${size}`,
    method: 'POST',
    data
  })
}

const findMember = (id) => {
  return request({
    url: `/member/${id}`,
    method: 'GET',
    data: {
      age: 1000
    }
  })
}

export default {
  getMemberList,
  getSupplierList,
  findMember
}