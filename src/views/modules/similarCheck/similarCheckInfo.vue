<template>
  <div>
    <h1>风格特征展示</h1>
    <h2>词汇特征</h2>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="numFunction"
        label="numFunction"
        width="180">
      </el-table-column>
      <el-table-column
        prop="functionLength"
        label="functionLength"
        width="180">
      </el-table-column>
      <el-table-column
        prop="arguments"
        label="arguments"
        width="180">
      </el-table-column>
      <el-table-column
        prop="numComment"
        label="numComment"
        width="180">
      </el-table-column>
      <el-table-column
        prop="avgLineLength"
        label="avgLineLength">
      </el-table-column>
  </el-table>

    <h2>布局特征</h2>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="indentation"
        label="indentation"
        width="180">
      </el-table-column>
      <el-table-column
        prop="connection"
        label="connection"
        width="180">
      </el-table-column>
      <el-table-column
        prop="space"
        label="space"
        width="180">
      </el-table-column>
      <el-table-column
        prop="blank"
        label="blank"
        width="180">
      </el-table-column>
  </el-table>

    <h2>句法特征</h2>
<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="height"
        label="height"
        width="180">
      </el-table-column>
      <el-table-column
        prop="nodes"
        label="nodes"
        width="180">
      </el-table-column>
      <el-table-column
        prop="paramAvgLength"
        label="paramAvgLength"
        width="180">
      </el-table-column>
      <el-table-column
        prop="paramRadio"
        label="paramRadio"
        width="180">
      </el-table-column>
  </el-table>

    <h2>时间动态特征</h2>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="FunctionCalls"
        label="FunctionCalls"
        width="180">
      </el-table-column>
      <el-table-column
        prop="avgFunctionTime"
        label="avgFunctionTime"
        width="180">
      </el-table-column>
      <el-table-column
        prop="runTime"
        label="runTime"
        width="180">
      </el-table-column>
  </el-table>

    <h2>空间动态特征</h2>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="memLeak"
        label="memLeak"
        width="180">
      </el-table-column>
      <el-table-column
        prop="avgMemAlloc"
        label="avgMemAlloc"
        width="180">
      </el-table-column>
      <el-table-column
        prop="RadioLeakMem"
        label="RadioLeakMem"
        width="180">
      </el-table-column>
      <el-table-column
        prop="RadioFree"
        label="RadioFree"
        width="180">
      </el-table-column>
      <el-table-column
        prop="allocTimes"
        label="allocTimes"
        width="180">
      </el-table-column>
      <el-table-column
        prop="freeTimes"
        label="freeTimes">
      </el-table-column>
      <el-table-column
        prop="allocMem"
        label="allocMem">
      </el-table-column>
  </el-table>
    <h1>预测结果： {{ result }}</h1>
    <div ref="echarts" class="simpleDemo">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
  export default {
    data() {
      return {
        result: null,
        chart: null,
        features: null,
        option:  {
            title: {
                text: '预测可能作者概率TOP10'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                // data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子1", "fff"]
                // data: [1,2,"雪纺衫","裤子","高跟鞋","袜子1", "fff"]
                data: [5, 20, 36, 10, 10, 20, 11],
                axisLabel: {  
                    interval:0,  
                    rotate:40  
                }  
            },
            yAxis: {},
            series: {
                // name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 11],
                color: ['#0000CD'],
            }
            
           
        },
         tableData: [{
            // numFunction: features[86],
            // functionLength: features[110],
            // arguments: features[94],
            // numComment: features[87],
            // avgLineLength: features[91],

            // indentation: features[98],
            // connection: features[98],
            // space: features[99],
            // blank: features[92],

            // height: features[140],
            // nodes: features[140]+","+features[141]+","+features[142]+","+features[143],
            // paramAvgLength: features[144]+","+features[145],
            // paramRadio: features[146]+","+features[147],

            // FunctionCalls: features[113] + ',' + features[114] + ',' + features[115] + ',' + features[116] + ',' + features[117],
            // avgFunctionTime: features[118],
            // runTime: features[126],

            // memLeak: features[127],
            // avgMemAlloc: features[133],
            // RadioLeakMem: features[134],
            // RadioFree: features[135],
            // allocTimes: features[136],
            // freeTimes: features[137],
            // allocMem: features[138]
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

        this.option.series.data = this.$route.query.radioResults
        this.option.xAxis.data = this.$route.query.authors
        
        this.result = this.$route.query.result

        this.features = this.$route.query.features

        console.log(this.result)
        console.log(this.features)

        this.tableData[0] = {
            numFunction: this.features[86],
            functionLength: this.features[110],
            arguments: this.features[94],
            numComment: this.features[87],
            avgLineLength: this.features[91],

            indentation: this.features[98],
            connection: this.features[98],
            space: this.features[99],
            blank: this.features[92],

            height: this.features[140],
            nodes: this.features[140]+","+this.features[141]+","+this.features[142]+","+this.features[143],
            paramAvgLength: this.features[144]+","+this.features[145],
            paramRadio: this.features[146]+","+this.features[147],

            FunctionCalls: this.features[113] + ',' + this.features[114] + ',' + this.features[115] + ',' + this.features[116] + ',' + this.features[117],
            avgFunctionTime: this.features[118],
            runTime: this.features[126],

            memLeak: this.features[127],
            avgMemAlloc: this.features[133],
            RadioLeakMem: this.features[134],
            RadioFree: this.features[135],
            allocTimes: this.features[136],
            freeTimes: this.features[137],
            allocMem: this.features[138]
        }
        

        // for (const key in this.dataList) {
        //   if (this.dataList.hasOwnProperty(key)) {
        //     const element = this.dataList[key]
        //     element.imgs = element.imgs.split(',')[0]
        //   }
        // }
        // this.dataListLoading = false
        // console.log(this.option)
        this.getPage()
      
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

