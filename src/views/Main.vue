<template>
  <el-container style="height: 100%">
    <el-aside width="auto"><commonAside></commonAside></el-aside>
    <el-container>
      <el-header><commonHeader></commonHeader></el-header>
      <commonTag></commonTag>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonTag from "../components/CommonTag.vue";
export default {
  components: {
    commonAside: CommonAside,
    commonHeader: CommonHeader,
    commonTag: CommonTag,
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding: 0 20px;
  // height: 100vh;
}
</style>
