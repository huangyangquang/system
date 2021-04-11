<template>
  <div class="knowledg">
    <el-container>
        <el-header><h1>XXX管理系统</h1></el-header>
        <el-main>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                label="题目"
                width="380">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.question }}</span>
                </template>
                </el-table-column>
                <el-table-column
                label="答案"
                width="380">
                <template slot-scope="scope">
                    <p>题目: {{ scope.row.answer }}</p>
                </template>
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          question: '你是谁？',
          answer: '王小虎',
        }, {
          question: '1 + 1 > 2 ?',
          answer: '王小虎',
        }, {
          question: '你是谁？',
          answer: '王小虎',
        }, {
          question: '你是谁？',
          answer: '王小虎',
        }, {
          question: '1 + 1 > 2 ?',
          answer: '王小虎',
        }, {
          question: '你是谁？',
          answer: '王小虎',
        }, {
          question: '你是谁？',
          answer: '王小虎',
        }, {
          question: '1 + 1 > 2 ?',
          answer: '王小虎',
        }, {
          question: '你是谁？',
          answer: '王小虎',
        }, {
          question: '你是谁？',
          answer: '王小虎',
        }, {
          question: '1 + 1 > 2 ?',
          answer: '王小虎',
        }, {
          question: '你是谁？',
          answer: '王小虎',
        }, {
          question: '你是谁？',
          answer: '王小虎',
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log('handleEdit', index, row);
        this.$alert(`<input type="text" style="display: block; width: 100%; height: 25px; margin-bottom: 10px">
    <input type="text" style="display: block; width: 100%; height: 25px; margin-bottom: 10px">`, 'XXX题目', {
          dangerouslyUseHTMLString: true
        });
      },
      handleDelete(index, row) {
        console.log('handleDelete', index, row);
        this.tableData.splice(index, 1)
      }
    }
  }
</script>

<style scoped>
.knowledg{
    width: 100%;
    height: 100%;
    overflow-x: scroll;
}

.el-header {
    background-color: #fff;
    color: #333;
    text-align: left;
    line-height: 60px;
    border-bottom: 1px solid;
}

.el-header h1 {
    font-size: 20px;
    font-weight: 500;
}

</style>
