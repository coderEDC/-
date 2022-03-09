<template>
  <div>
    <el-container>
      <el-aside width="220px">
        <nav-left class="left"></nav-left>
      </el-aside>
      <el-container>
        <el-header>
          <headers></headers>
        </el-header>
        <el-main>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
          <!-- <index></index> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Headers from "@/components/Header";
import NavLeft from "@/components/NavLeft";
export default {
  components: {
    Headers,
    NavLeft,
  },
};
</script>

<style lang="less" scoped>
.el-aside {
  height: 100vh;
  background-color: #001529;
}
.el-main {
  height: 78vh;
  background-color: #e9eef3;
}
</style>
