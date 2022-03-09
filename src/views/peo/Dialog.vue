<template>
  <div>
    <el-dialog :title="titles" width="40%" :visible="visible" @close="close">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="角色" prop="character">
          <el-select v-model="ruleForm.character">
            <el-option label="业务人员" value="业务人员"></el-option>
            <el-option label="审核人员" value="审核人员"></el-option>
            <el-option label="风控经理" value="风控经理"></el-option>
            <el-option label="管理员" value="管理员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="ruleForm.remark"></el-input>
        </el-form-item>
        <el-form-item label="创建原因" prop="reason">
          <el-input type="textarea" v-model="ruleForm.reason"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: ["visible"],
  data() {
    return {
      // handleClose:'',
      ruleForm: {
        character: "",
        remark: "",
        reason: "",
      },
      rules: {
        character: [{ required: true, message: "不能为空", trigger: "blur" }],
        reason: [{ required: true, message: "不能为空", trigger: "blur" }],
        remark: [{ required: true, message: "不能为空", trigger: "blur" }],
      },
    };
  },
  watch: {
    visible() {
      const { character, remark, reason } = this.row;
      this.ruleForm = { character, remark, reason };
      // console.log(1, this.row);
    },
  },
  computed: {
    ...mapState(["row"]),
    titles() {
      if (this.row.character) {
        return "编辑角色";
      } else {
        return "新建角色";
      }
    },
  },
  methods: {
    ...mapMutations(["setRow"]),
    close() {
      this.ruleForm = {
        character: "",
        reason: "",
        remark: "",
      };
      this.setRow = {};
      this.$emit("close");
    },
  },
};
</script>
