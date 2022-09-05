<template>
  <div>
    <el-form :model="userFrom" :rules="rules" ref="userFrom" label-width="50px">
      <el-form-item label="姓名" prop="name" placeholder="请输入姓名">
        <el-input v-model="userFrom.name" />
      </el-form-item>
      <el-form-item label="昵称" prop="nickName" placeholder="请输入昵称">
        <el-input v-model="userFrom.nickName" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="userFrom.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="手机号"
        prop="phone"
        label-width="70px"
        placeholder="请输入手机号"
      >
        <el-input v-model="userFrom.phone" />
      </el-form-item>
      <el-form-item label="标签" prop="tag">
        <el-select v-model="userFrom.tag" placeholder="请选择标签">
          <el-option label="管理员" value="manager"></el-option>
          <el-option label="饲养员" value="liver"></el-option>
          <el-option label="铲屎官" value="baba"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地址" prop="address" placeholder="请输入地址">
        <el-input type="textarea" v-model="userFrom.address" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'AddOrEditUser',
  data() {
    return {
      userFrom: {
        name: '',
        nickName: '',
        gender: '男',
        phone: '',
        address: '',
        tag: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入你的姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        nickName: [
          { required: true, message: '请输入你的昵称', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入你的手机号', trigger: 'blur' }
        ],
        tag: [{ required: true, message: '请选择你的标签', trigger: 'blur' }],
        address: [
          { required: true, message: '请输入你的地址', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style></style>
