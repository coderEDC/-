<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt">
      <el-row>
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="8" :offset="8" class="tr">
          <el-button type="primary" @click="visible = true">新建角色</el-button>
          <el-button :disabled="!val.length" @click="options(1)"
            >启动</el-button
          >
          <el-button @click="options(2)">冻结</el-button>
          <el-button @click="options(3)">删除</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="account" label="账户"> </el-table-column>
        <el-table-column prop="name" label="用户名"> </el-table-column>
        <el-table-column prop="character" label="角色"> </el-table-column>
        <el-table-column prop="remark" label="备注"> </el-table-column>
        <el-table-column prop="reason" label="创建原因"> </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            {{ scope.row.status == 1 ? "启用" : "未启用" }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="edit(scope.row)"
              >编辑</el-button
            >
            <el-button type="text" size="mini" disabled>删除</el-button>
            <el-button type="text" size="mini">
              {{ scope.row.status == 1 ? "进入" : "启用" }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <dialogs :visible="visible" @close="visible = false"></dialogs>
  </div>
</template>

<script>
import People from "../../min/People";
import { get } from "@/utils/http";
import Dialogs from "./Dialog.vue";

import { mapMutations, mapState } from "vuex";
export default {
  // 怎么才能拿到相对应的路由跟名字  遍历数据

  mixins: [People],
  components: {
    Dialogs,
  },
  data() {
    return {
      visible: false,
      tableData: [],
      val: [],
    };
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapState(["row"]), //这个作用何在？
  },
  methods: {
    ...mapMutations(["setRow"]),
    getData() {
      get("/all").then((res) => {
        this.tableData = res.data.list;
      });
    },
    handleSelectionChange(valc) {
      this.val = valc;
      // this.setRow(val)
    },
    options(n) {
      const c = this.val.map((item) => {
        return item.account;
      });
      console.log(c);
      if (n === 1) {
        this.$notify({
          title: "启动成功 ",
          message: "您的ID" + c,
        });
      }
    },
    edit(row) {
      this.visible = true;
      this.setRow(row);
    },
  },
};
</script>
