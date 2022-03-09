<template>
  <div>
      <h3 class="tc">我的公司管理系统</h3>
    <el-menu :unique-opened='true' router background-color="#001529" text-color="#fff"
    active-text-color="#ffd04b" >
      <menuss v-for="i in menuData"  :menus='i' :key="i.name" class="left"></menuss>
    </el-menu>
  </div>
</template>

<script>
import Menuss from "./Menus.vue";
import { get } from "@/utils/http";
export default {
  data() {
    return {
      menuData: [],
    };
  },
  components: {
    Menuss,
  },
  mounted() {
    get("/menu").then((res) => {
        this.menuData=res.data;
      console.log(this.menuData);
    });
  },
};
</script>

<style lang="less" scoped>
.left{
  width: 221px;
  background-color:#001529 ;
}
.tc{
  color: rgb(204, 203, 203);
}
</style>