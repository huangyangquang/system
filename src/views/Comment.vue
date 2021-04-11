<template>
  <div class="comment">
    <el-container>
        <el-header><h1>XXX管理系统</h1></el-header>
        <el-main>
            <el-table
                :data="tableData"
                show-header="false"
                style="width: 100%">
                <el-table-column
                    label="知识内容"
                    width="980"
                >
                    <template slot-scope="scope">
                        <p style="margin-left: 10px">评论：{{ scope.row.question }}</p>
                        <p style="margin-left: 10px; margin-top: 20px;">用户：{{ scope.row.user }} </p>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="primary"
                            @click="handleEdit(scope.$index, scope.row)">回复</el-button>
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
          user: 'joshua',
          question: '你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds？'
        }, {
          user: 'joshua',
          question: '1 + 1 > 2 ?  你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds'
        }, {
          user: 'joshua',
          question: '你是谁你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds你是谁dsaasds？'
        }, {
          user: 'joshua',
          question: '你是谁？'
        }, {
          user: 'joshua',
          question: '1 + 1 > 2 ?'
        }, {
          user: 'joshua',
          question: '你是谁？'
        }, {
          user: 'joshua',
          question: '你是谁？'
        }, {
          user: 'joshua',
          question: '1 + 1 > 2 ?'
        }, {
          user: 'joshua',
          question: '你是谁？'
        }, {
          user: 'joshua',
          question: '你是谁？'
        }, {
          user: 'joshua',
          question: '1 + 1 > 2 ?'
        }, {
          user: 'joshua',
          question: '你是谁？'
        }, {
          user: 'joshua',
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

/* .el-table tr.el-table__row {
    height: 300px;
} 

.el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #000;
}

.el-table td:nth-child(2),
.el-table th.is-leaf:nth-child(2) {
    border-left: 1px solid;
} */

</style>
