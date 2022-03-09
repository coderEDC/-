<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt">
      <el-row>
        <el-col
          ><el-radio-group v-model="radio1">
            <el-radio-button label="1">待审核</el-radio-button>
            <el-radio-button label="2">审核中</el-radio-button>
            <el-radio-button label="3">审核通过</el-radio-button>
            <el-radio-button label="4">审核拒绝</el-radio-button>
            <el-radio-button label="5">已放款</el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <keep-alive>
        <component :is="currenTab"></component>
      </keep-alive>
    </el-card>
  </div>
</template>

<script>
import mins from "../../min/People";

import Lab1 from "./Lab1.vue";
import Lab2 from "./Lab2.vue";
export default {
  mixins: [mins],
  created() {
    console.log("所有订单生命周期创建la");
  },
  data() {
    return {
      radio1: 1,
    };
  },
  components: {
    Lab1,
    Lab2,
  },
  computed: {
    currenTab() {
      return "Lab" + this.radio1;
    },
  },
};
</script>
