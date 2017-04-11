<template>
<div id="titlebar">
    <button @click="closeWindow" class="btn btn-danger"></button>
    <button @click="minimizeWindow" class="btn btn-warning"></button>
    <button @click="resizeWindow" class="btn btn-success"></button>
    <h4>Point Cloud Scaffold</h4>
</div>
</template>

<script>
const {remote} = require('electron')
export default {
  data: () => {
    var data = {isMax: false}
    return data
  },
  methods: {
    minimizeWindow: () => {
      var window = remote.getCurrentWindow()
      window.minimize()
    },
    resizeWindow: function () {
      var window = remote.getCurrentWindow()
      if (!this.isMax) {
        window.maximize()
        this.isMax = true
      } else {
        window.unmaximize()
        this.isMax = false
      }
    },
    closeWindow: () => {
      var window = remote.getCurrentWindow()
      window.close()
    }
  }
}
</script>

<style lang="stylus" scoped>
#titlebar
  padding-top 5px
  padding-left 10px
  padding-bottom 5px
  button
    padding 0px
    width 15px
    height 15px
    border-radius 14px
    margin-left 3px
    cursor pointer
    &:focus
      outline 0
h4
  display inline-block
  align center
  margin 0 10px
  font-size 16px
</style>
