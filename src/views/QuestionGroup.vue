<template>
  <div class="questionGroup">
    <el-container>
        <el-header><h1>XXX管理系统</h1></el-header>
        <el-main>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    label="知识内容"
                    width="980"
                >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">知识内容：{{ scope.row.question }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="primary"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
    data () {
        return {
        tableData: [{
          question: '你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds？'
        }, {
          question: '1 + 1 > 2 ?  你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds'
        }, {
          question: '你是谁你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds？'
        }, {
          question: '你是谁？'
        }, {
          question: '1 + 1 > 2 ?'
        }, {
          question: '你是谁？'
        }, {
          question: '你是谁？'
        }, {
          question: '1 + 1 > 2 ?'
        }, {
          question: '你是谁？'
        }, {
          question: '你是谁？'
        }, {
          question: '1 + 1 > 2 ?'
        }, {
          question: '你是谁？'
        }, {
          question: '你是谁？'
        }]
        }
    },
    methods: {
        handleEdit(index, row) {
        console.log('handleEdit', index, row);
        this.$alert(`<input type="text" style="display: block; width: 100%; height: 25px; margin-bottom: 10px">
    <input type="text" style="display: block; width: 100%; height: 25px; margin-bottom: 10px">`, 'XXX知识点', {
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

<style>
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

.el-table tr.el-table__row {
    height: 300px;
} 

.el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #000;
}

.el-table td:nth-child(2),
.el-table th.is-leaf:nth-child(2) {
    border-left: 1px solid;
}

</style>
