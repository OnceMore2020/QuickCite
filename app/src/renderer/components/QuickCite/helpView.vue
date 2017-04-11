<template>
  <div class="alert alert-info" v-if="showHelp">
    <h4>使用帮助</h4>
    <ol>
      <li>在搜索框输入关键字，回车或点击按钮开始检索，软件会显示检索结果列表</li>
      <li>点击结果列表中论文条目后的按钮，软件会显示引用文本</li>
    </ol>
    <h4>说明</h4>
    <ol>
      <li>结果均采用 GB/T 7714 标准</li>
      <li>结果文字会自动拷贝到系统粘贴板，无需手动选择和拷贝</li>
      <li>点击帮助按钮可以显示或隐藏该信息</li>
    </ol>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    computed: {
      showHelp: () => {
        return store.state.quickcite.showHelp
      }
    }
  }
</script>

<style lang="stylus" scoped>
.alert
  margin 20px 10px 0px 10px
  padding 10px 10px 5px 10px
ol
  padding-left 20px
</style>
