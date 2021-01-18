<template>
  <div class="mod-prod-info">
    <el-form :model="dataForm"
             ref="dataForm"
             label-width="100px">
       <el-form-item label="年份"
                    prop="year"
                    :rules="[{ required: true, message: '竞赛所属年份不能为空'}]">
        <el-col :span="8">
          <el-input v-model="dataForm.year"
                    placeholder="竞赛所属年份"
                    maxlength="50"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="竞赛名称"
                    prop="name"
                    :rules="[{ required: true, message: '竞赛名称不能为空'}]">
        <el-col :span="8">
          <el-input v-model="dataForm.name"
                    placeholder="竞赛名称"
                    maxlength="50"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="竞赛id"
                    prop="contestId"
                    :rules="[{ required: true, message: '竞赛id不能为空'}]">
        <el-col :span="8">
          <el-input v-model="dataForm.contestId"
                    placeholder="竞赛id"
                    maxlength="50"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="参与用户数"
                    prop="numPlayers"
                    :rules="[{ required: true, message: '竞赛参与用户数不能为空'}]">
        <el-col :span="8">
          <el-input v-model="dataForm.numPlayers"
                    placeholder="竞赛参与用户数"
                    maxlength="50"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="题目"
                    prop="problems"
                    >
        
        <el-form-item label="">
          <el-button type="primary"
                   @click="addNode()">添加</el-button>
        </el-form-item>

        <el-form-item label="">
          <el-form-item v-for="(i,j) in dataForm.problemList">
            <el-col :span="8">
              <el-input v-model="dataForm.problemList[j].id"
                    placeholder="题目id"
                    maxlength="50"></el-input>
            </el-col>

            <el-col :span="8">
              <el-input v-model="dataForm.problemList[j].name"
                    placeholder="题目名称"
                    maxlength="50"></el-input>
             </el-col>

            <el-button type="primary"
                   @click="deleteNode(j)">删除</el-button>
          </el-form-item>
          
        </el-form-item>

        

      </el-form-item>

      <el-form-item>
        <el-button type="primary"
                   @click="dataFormSubmit()">确定</el-button>
      </el-form-item>
     
    </el-form>
  </div>
</template>

<script>

export default {
    data () {
        return {
        // 规格列表
            dataForm: {
                year: '',
                name: '',
                contestId: '',
                numPlayers: '',
                problemList: []
            }
        }
    },
    methods: {
        // 表单提交
        dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
            if (!valid) {
                return
            }
            let param = Object.assign({}, this.dataForm)
            this.$http({
                url: this.$http.adornUrl(`/dataCraw/insert`),
                method: 'post',
                data: this.$http.adornData(param)
            }).then(({ data }) => {
                this.$message({
                    message: '操作成功',
                    type: 'success',
                    duration: 1500,
                    onClose: () => {
                    this.visible = false
                    this.$store.commit('common/removeMainActiveTab')
                    this.$router.push({ name: 'prod-prodList' })
                    this.$emit('refreshDataList')
                    }
                })
              })
            })
        },
        addNode:function() {
            this.dataForm.problemList.push({id:'', name:''});
            console.log(this.dataForm.problemList)
        },
        deleteNode:function(i) {
            console.log(i)
            console.log("dfdffffffffffffffffffffffff")
            this.dataForm.problemList.splice(i,1);  //删除index为i,位置的数组元素
        }
    }
    
} 

</script>
