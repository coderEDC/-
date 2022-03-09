<template>
  <div>
    <el-row :gutter="22" class="tc">
      <el-col :span="6"
        ><el-card class="box-card" shadow="hover">
          <h4>本月进件</h4>
          <p>857857</p>
        </el-card></el-col
      >
      <el-col :span="6"
        ><el-card class="box-card" shadow="hover">
          <h4>本月放款</h4>
          <p>857857</p>
        </el-card></el-col
      >
      <el-col :span="6"
        ><el-card class="box-card" shadow="hover">
          <h4>累计进件</h4>
          <p>857857</p>
        </el-card></el-col
      >
      <el-col :span="6"
        ><el-card class="box-card" shadow="hover">
          <h4>累计放款</h4>
          <p>857857</p>
        </el-card></el-col
      >
    </el-row>
    <el-row :gutter="22" class="mt">
      <el-col :span="18">
        <el-card class="box-card">
          <div slot="header" class="clearfix tc">
            <span>进件统计分析</span>
          </div>
          <div ref="line" style="height: 220px"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix tc">
            <span>放款分析</span>
          </div>
          <div ref="pie" style="height: 220px"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="22" class="mt">
      <el-col :span="12">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
      <el-col :span="12">
        <el-calendar v-model="value"> </el-calendar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    data() {
      return {
        value: new Date()
      }
    },
  mounted() {
    this.draLine(), this.drawPie();
  },
  methods: {
    draLine() {
      let myChart = echarts.init(this.$refs.line);
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
            areaStyle: {},
          },
        ],
      };
      myChart.setOption(option);
    },
    drawPie() {
      const myChart = echarts.init(this.$refs.pie);
      let option = {
        //xAxis横轴
        tooltip: {},
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "房闪贷" },
              { value: 310, name: "车贷" },
              { value: 234, name: "船贷" },
              { value: 135, name: "衣服贷" },
              { value: 150, name: "鞋子贷" },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>