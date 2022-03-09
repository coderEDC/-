<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt">
      <el-row>
        <el-col :span="6" :offset="18">
          <el-button @click="back">返回</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import mins from "../../min/People";

export default {
  mixins: [mins],
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
