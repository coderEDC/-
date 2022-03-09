<template>
  <div>
    <el-row
      type="flex"
      justify="center"
      align="middle"
      style="height: 500px"
      class="tc"
    >
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>好人有限公司财务系统</h2>
          </div>
          <div>
            <el-form
              class="form"
              ref="form"
              :model="form"
              label-width="80px"
              :rules="rules"
            >
              <el-form-item label="用户名" prop="name">
                <el-input v-model.trim="form.name"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input
                  type="password"
                  v-model.trim="form.password"
                  @keyup.enter.native="btn"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  class="btn"
                  @click="btn"
                  @keyup.enter="btn"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { post } from "@/utils/http";
import { setToken } from "@/utils/auth";
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "输入您的用户名", trigger: "blur" },
          { min: 3, max: 5, message: "用户名要求3-5位字符", trigger: "blur" },
          { pattern: /^\d+$/, message: "必须是纯数字" },
        ],
        password: [
          { required: true, message: "输入您的密码", trigger: "blur" },
          { pattern: /^\d{6}$/, message: "密碼要求是六位纯数字" },
        ],
      },
    };
  },
  methods: {
    btn() {
      //表单验证，相当于输入的账号密码对了就进入首页
      this.$refs["form"].validate((valid) => {
        if (valid) {
          //可以从这里开始加入请求
          post("/login", this.form)
            .then((res) => {
              // console.log(res);
              setToken(res.token),
                //顺便存一个用户名
                sessionStorage.setItem("nickname", res.nickname);
              this.$router.push("/");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.box-card {
  width: 500px;
  .btn {
    width: 100%;
  }
  .form {
    padding: 3px 0;
    margin-right: 20px;
  }
}
</style>
