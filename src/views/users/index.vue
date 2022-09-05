<template>
  <el-card class="card-wrap">
    <el-button type="primary" @click="addUser">添加用户</el-button>
    <el-table :data="tableData" style="width: 100%" border class="table-wrap">
      <el-table-column label="姓名" align="center" width="120">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="gender" align="center" label="性别" width="50">
      </el-table-column>
      <el-table-column prop="phone" align="center" label="手机号码" width="150">
      </el-table-column>
      <el-table-column
        prop="createTime"
        align="center"
        label="创建时间"
        width="180"
      >
      </el-table-column>
      <el-table-column prop="address" align="center" label="地址">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        align="center"
        :filters="[
          { text: '家', value: '家' },
          { text: '公司', value: '公司' }
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="添加用户"
      :visible.sync="dialogVisible"
      width="50%"
      lock-scroll
    >
      <AddOrEditUser />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
import AddOrEditUser from '@/views/users/comp/addOrEditUser.vue'
export default {
  components: {
    AddOrEditUser
  },
  data() {
    return {
      tableData: [
        {
          createTime: '2016-05-02',
          name: '王小虎',
          gender: '男',
          phone: '151xxxx0630',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        },
        {
          createTime: '2016-05-04',
          name: '王小虎',
          gender: '男',
          phone: '151xxxx0630',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        },
        {
          createTime: '2016-05-01',
          name: '王小虎',
          gender: '男',
          phone: '151xxxx0630',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        },
        {
          createTime: '2016-05-03',
          name: '王小虎',
          gender: '男',
          phone: '151xxxx0630',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }
      ],
      dialogVisible: false
    }
  },
  methods: {
    addUser() {
      console.log('添加用户')
      this.dialogVisible = true
    },
    // 编辑用户
    handleEdit(index, row) {
      console.log(index, row)
    },
    // 删除用户
    handleDelete(index, row) {
      console.log(index, row)
    },
    //
    formatter(row, column) {
      return row.address
    },
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>

<style lang="less" scoped></style>
