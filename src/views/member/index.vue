<template>
  <div class="mt-2">
<el-form :inline="true" :model="memberQueryParems" class="demo-form-inline">
  <el-form-item>
    <el-input v-model="memberQueryParems.cardNum" placeholder="会员卡号"></el-input>
  </el-form-item>
    <el-form-item>
    <el-input v-model="memberQueryParems.name" placeholder="会员名称"></el-input>
  </el-form-item>
  <el-form-item>
    <el-select v-model="memberQueryParems.payType" placeholder="支付类型">
      <el-option v-for="(item,index) in payType" :key="index" :label="item.name" :value="item.type"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
   <el-date-picker
   value-format="yyyy-MM-dd"
      v-model="memberQueryParems.birthday"
      type="date"
      placeholder="出生日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="handleQueryMember">查询</el-button>
    <el-button type="primary">新增</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form>

  <el-table :data="memberList" height="380" border style="width: 100%">
    <el-table-column prop="date" type="index" label="序号" width="60"></el-table-column>
    <el-table-column prop="cardNum" label="会员卡号"></el-table-column>
    <el-table-column prop="name" label="会员姓名"></el-table-column>
    <el-table-column prop="birthday" label="会员生日"></el-table-column>
    <el-table-column prop="phone" label="手机号码" width="110"></el-table-column>
    <el-table-column prop="integer" label="可用积分"></el-table-column>
    <el-table-column prop="money" label="开卡金额"></el-table-column>
    <el-table-column prop="payType" label="支付类型">
      <template v-slot="scope">
        {{scope.row.payType|filterPayType}}
      </template>
    </el-table-column>
    <el-table-column prop="address" label="会员地址"></el-table-column>
    <el-table-column label="操作" width="150">
    <template v-slot="scope">
        <el-button @click="handleClick(scope.row)" size="mini">编辑</el-button>
        <el-button type="danger" size="mini">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
import MemberApi from "../../api/member";
import MemberEnum from '../../enum/member'
export default {
  data() {
    return {
      memberList:[],
      page:1,
      size:10,
      total:0,
      memberQueryParems:{
        cardNum:"",
        name:"",
        payType:"",
        birthday:""
      },
      payType: MemberEnum.payType
    }
  },
  created() {
    this.getMemberList()
  },
  methods: {
    async getMemberList(){
      const {rows,total}=await MemberApi.getMemberList(this.page,this.size,this.memberQueryParems)
      this.total=total
      this.memberList=rows
    },
    handleSizeChange(size){
      this.size=size
      this.getMemberList()
    },
    handleCurrentChange(page){
      this.page=page
      this.getMemberList()
    },
    handleQueryMember(){
      console.log(this.memberQueryParems);
      this.page=1,
      this.getMemberList()
    }
  },
  filters:{
    filterPayType(value){
      const data=MemberEnum.payType.find((item,index)=>{
        return item.type===value
      })
      return data?data.name:""
    }
  }
}
</script>