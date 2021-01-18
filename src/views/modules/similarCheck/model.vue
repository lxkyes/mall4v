<template>
  <div>
    <h1>模型参数</h1>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="author_num"
        label="author_num"
        width="180">
      </el-table-column>
      <el-table-column
        prop="author_files"
        label="author_files"
        width="180">
      </el-table-column>
      <el-table-column
        prop="n_estimators"
        label="n_estimators"
        width="180">
      </el-table-column>
      <el-table-column
        prop="max_depth"
        label="max_depth"
        width="180">
      </el-table-column>
      <el-table-column
        prop="max_features"
        label="max_features">
      </el-table-column>
  </el-table>
    <h1>特征重要性评估</h1>
    <div ref="echarts" class="simpleDemo">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
  export default {
    data() {
      return {
        chart: null,
        option:  {
            title: {
                text: '特征重要性评估图'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                // data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子1", "fff"]
                // data: [1,2,"雪纺衫","裤子","高跟鞋","袜子1", "fff"]
                data: [5, 20, 36, 10, 10, 20, 11]
            },
            yAxis: {},
            series: {
                // name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 11],
                color: ['#CC9900'],
            },
           
        },
         tableData: [{
            author_num: '50',
            author_files: '15',
            n_estimators: '305',
            max_depth: '30',
            max_features: '13'
          }]
      }
    },
    mounted() {
      this.getDataList()
    },
    methods: {
      getPage() {
        this.chart = echarts.init(this.$refs.echarts);
        // 使用刚指定的配置项和数据显示图表。
        console.log(this.option)
        this.chart.setOption(this.option);
      },
      getDataList () {
      // this.dataListLoading = true
      this.$http({
        url: this.$http.adornUrl('/similarCheck/model'),
        method: 'get'
      }).then(({ data }) => {
        // console.log(data)
        this.option.series.data = data.featureImportance
        var index = new Array()

        for (var i=0;i<data.featureImportance.length;i++)
        { 
            index[i] = i
        }

        this.option.xAxis.data = index
        // for (const key in this.dataList) {
        //   if (this.dataList.hasOwnProperty(key)) {
        //     const element = this.dataList[key]
        //     element.imgs = element.imgs.split(',')[0]
        //   }
        // }
        // this.dataListLoading = false
        // console.log(this.option)
        this.getPage()
      })
    }
    }
  }
</script>

<style scoped>
.simpleDemo {
  width: 600px;
  height:400px;
  margin: 0 auto;
}
a {
  color: #CC9900;
}
.router-link-active {
  text-decoration: none;
}
</style>

