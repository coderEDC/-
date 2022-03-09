<template>
  <div>
    <el-dropdown class="fr" @command="handleCommand">
      <span class="el-dropdown-link">
        <span>欢迎您,{{ name }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="1">个人中心</el-dropdown-item>
        <el-dropdown-item command="2">修改密码</el-dropdown-item>
        <el-dropdown-item command="3">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="fr data">
      今天是您在阿里的第<span >{{ newDays }}</span
      >天
    </div>
  </div>
</template>

<script>
import { get } from "@/utils/http";
import { removeToken } from "@/utils/auth";
export default {
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    get("/in").then((res) => {
      //   console.log(res.data);
       this.data=res.data
      //   console.log(Date.parse(Date()));
    //  let nowTime = (Date.parse(Date()) - Date.parse(res.data));
    //  this.data = parseInt(nowTime / 100000000)
    });
  },
  methods: {
      handleCommand(command) {
        if (command === '3') {
            removeToken ()
            this.$router.push('/login')
        }   
      }
  },
  computed: {
    name() {
      return sessionStorage.getItem("nickname");
    },
    newDays() {
        let now = new Date();
        let target = new Date(this.data);
        let ms =  now -target
      return Math.floor(ms / 1000 /60 /60 /24)
    }
  },
};
</script>

<style lang="less" scoped>
.fr{
    line-height: 60px;
}

.data{
    margin-right: 20px;
    color: rgb(19, 17, 17);
    span{
    color: aqua;
    font-size: 17px;
    }
}
</style>