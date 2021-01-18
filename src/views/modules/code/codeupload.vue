<template>
  <div class="mod-prod-info">
    <el-form :model="dataForm"
             ref="dataForm"
             label-width="100px">
       <el-form-item label="语言类型"
                    prop="codeType"
                    :rules="[{ required: true, message: '语言类型不能为空'}]">
        <el-col :span="8">
          <el-input v-model="dataForm.codeType"
                    placeholder="语言类型"
                    maxlength="50"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="作者名称"
                    prop="author"
                    :rules="[{ required: true, message: '作者名称不能为空'}]">
        <el-col :span="8">
          <el-input v-model="dataForm.author"
                    placeholder="作者名称"
                    maxlength="50"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="所属题目名称"
                    prop="subject"
                    :rules="[{ required: true, message: '所属题目名称不能为空'}]">
        <el-col :span="8">
          <el-input v-model="dataForm.subject"
                    placeholder="所属题目名称"
                    maxlength="50"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="代码内容"
                    prop="content"
                    :rules="[{ required: true, message: '代码内容不能为空'}]">
        <el-col :span="8">
          <el-input v-model="dataForm.content"
                    type="textarea"
                    :autosize="{minRows: 2, maxRows: 1999}"
                    placeholder=""></el-input>
        </el-col>
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
                codeType: '',
                author: '',
                subject: '',
                content: '',
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
                url: this.$http.adornUrl(`/code/insert`),
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
        }
    }
    
} 

</script>
