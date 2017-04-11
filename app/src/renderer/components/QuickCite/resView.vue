<template>
  <div>
    <ul class="list-group">
      <li v-for="(item, index) in resItems" class="list-group-item">
      <div class="titletext">{{ item.title}}</div>
      <button v-on:click="showRes(index)" class="btn btn-default show-btn" >Show</button>
      </li>
    </ul>
    <div v-if="hasRes" class="panel panel-default">
      <div class="panel-body">{{ resText }}</div>
    </div>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    data: () => {
      var data = {
        resText: ''
      }
      return data
    },
    computed: {
      resItems: () => {
        return store.state.quickcite.resItems
      },
      hasRes: () => {
        return store.state.quickcite.hasRes
      }
    },
    methods: {
      showRes: function (index) {
        var queryId = this.resItems[index].id
        var request = require('request')
        var searchUrl = 'http://mylib.chinacloudsites.cn/Paper/Bibliography/'
        request(searchUrl + queryId, (error, response, body) => {
          if (!error && response.statusCode === 200) {
            var resObj = JSON.parse(body)
            this.resText = resObj['result'][0]['content']
            store.dispatch('switchHasRes', true)
            const clipboard = require('electron').clipboard
            clipboard.writeText(this.resText)
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
ul
  padding 10px
  margin-bottom 0px
.list-group
  -webkit-user-select none
.list-group-item
  display table
  width 100%
  padding-right 5px
.titletext
  width 95%
  display table-cell
button
  display table-cell
  padding 2px 2px 2px 2px
.panel
  margin 10px
</style>
