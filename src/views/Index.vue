<template>
  <div class="index">
    <el-container>
      <el-header>
        <h1>XXX管理系统</h1>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
            >
              <el-menu-item index="1">
                <span slot="title">第一章</span>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">第二章</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title">第三章</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">第四章</span>
              </el-menu-item>
              <el-menu-item index="5">
                <span slot="title">第五章</span>
              </el-menu-item>
              <el-menu-item index="6">
                <span slot="title">第六章</span>
              </el-menu-item>
              <el-menu-item index="7">
                <span slot="title">第七章</span>
              </el-menu-item>
              <el-menu-item index="8">
                <span slot="title">第八章</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
        </el-aside>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="24" class="title">
              第一章：XXXXXXX
            </el-col>
          </el-row>
          <el-row>
            <router-link to="/Knowledg"><el-button>知识点</el-button></router-link>
            <router-link to="/QuestionGroup"><el-button type="primary">题库</el-button></router-link>
            <router-link to="/Comment"><el-button type="success">评论区</el-button></router-link>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Index',
  components: {

  },
  methods: {
  }
}
</script>

<style scoped>
  .index{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
  
  .el-header h1 {
    font-size: 20px;
    font-weight: 500;
  }


  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 100px;
    height: 800px;
  }

  .el-aside .el-row .el-menu{
    width: 200px;
    background-color: #D3DCE6;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100px;
    height: 800px;
  }

  .el-main .title {
    border-bottom: 1px solid;
  }

  .el-button {
    margin: 20px;
  }
  
</style>
