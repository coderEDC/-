<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt">
      <el-row :gutter="22">
        <el-col :span="6">
          <el-input v-model="titleData.name" placeholder="产品名称"></el-input>
        </el-col>
        <el-col :span="6">
          <el-select
            v-model="titleData.rare"
            placeholder="利率"
            style="width: 100%"
          >
            <el-option label="3.8" value="1">3.8</el-option>
            <el-option label="3.9" value="2">3.9</el-option>
            <el-option label="4.0" value="3">4.0</el-option>
            <el-option label="4.1" value="4">4.1</el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 100%"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-button @click="times">查询</el-button>
          <el-button>重置</el-button>
          <span class="el-dropdown-link" @click="adv = !adv" v-show="!adv">
            展开<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <span class="el-dropdown-link" @click="adv = !adv" v-show="adv">
            关闭<i class="el-icon-arrow-up el-icon--right"></i>
          </span>
        </el-col>

        <span></span>
      </el-row>
      <el-row class="mt" v-show="adv" :gutter="22">
        <el-col :span="6">
          <el-input v-model="titleData.cat" placeholder="产品类别"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="titleData.qiong" placeholder="分期数"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="titleData.status" placeholder="状态"></el-input>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="name" label="产品名称"></el-table-column>
        <el-table-column prop="type" label="产品类别"></el-table-column>
        <el-table-column prop="rate" label="利率"></el-table-column>
        <el-table-column prop="date" label="开发日期"> </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-button type="success" v-if="scope.row.status == 1" size="mini"
              >已启用</el-button
            >
            <el-button type="danger" size="mini" v-else>未启用</el-button>
          </template>
        </el-table-column>

        <el-table-column prop="number" label="申请客户数量"></el-table-column>
        <el-table-column prop="total" label="累计签约金额"></el-table-column>
        <el-table-column prop="average" label="件均"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" v-if="scope.row.status == 2"
              >启用</el-button
            >
            <el-button size="mini" type="danger" v-else>禁用</el-button>
            <el-button type="text" size="mini" @click="gogogo"
              >详情</el-button
            ></template
          >
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import mins from "../../min/People";
import moment from "moment";
import { get } from "@/utils/http";
export default {
  mixins: [mins],
  created() {
    this.list();
    console.log("产品的生命组件创建啦");
  },
  data() {
    return {
      adv: false,
      value1: "",
      titleData: {
        name: "",
        rare: "",
        cat: "",
        qiong: "",
        status: "",
      },
      tableData: [],
    };
  },
  methods: {
    times() {
      console.log(moment(this.value1[0]).format("YYYY-MM-DD"));
    },
    list() {
      get("/productList").then((res) => {
        this.tableData = res.data.list;
      });
    },
    gogogo() {
      this.$router.push("/product/detail");
    },
  },
};
</script>
