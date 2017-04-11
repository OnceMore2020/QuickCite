<template>
  <div id="app">
    <div class="titlebar">
      <titlebar></titlebar>
    </div>
    <div class="fluid-container">
      <QuickCite></QuickCite>
    </div>
  </div>
</template>

<script>
  import titlebar from 'renderer/components/titlebar'
  import QuickCite from 'renderer/components/QuickCite'
  export default {
    components: {
      titlebar,
      QuickCite
    }
  }
</script>

<style lang="stylus">
html
body
#app
  height 100%
  overflow hidden
body
  -ms-overflow-style scrollbar
  -webkit-app-region drag
*
  margin 0
  padding 0
.titlebar
  width 100%
  color #f4f4f4
  background-color #2e3238
  -webkit-user-select none
button
a
li
input
  -webkit-app-region no-drag
.fluid-container
  height 100%
  overflow auto
  background-color #eee
::-webkit-scrollbar
  display none;
</style>
