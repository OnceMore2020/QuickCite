<template>
  <div class="input-group">
    <input @keyup.enter="getInfo" v-model="inputText" class="form-control" type="text" placeholder="输入关键字进行查找" autofocus>
    <span class="input-group-btn">
      <button @click="switchHelp" class="btn btn-info">帮助</button>
      <button @click="getInfo" class="btn btn-default" >检索</button>
    </span>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    data: () => {
      var data = {
        inputText: '',
        resItems: []
      }
      return data
    },
    methods: {
      getInfo: function () {
        store.dispatch('switchHasRes', false)
        var request = require('request')
        var qs = require('querystring')
        var cheerio = require('cheerio')
        var queryField = qs.stringify({q: this.inputText})
        var searchUrl = 'https://cn.bing.com/academic/search?'
        request(searchUrl + queryField, function (error, response, body) {
          var resPool = []
          if (!error && response.statusCode === 200) {
            var $ = cheerio.load(body)
            $('#b_results .aca_algo').each((i, elem) => {
              if ($(elem).find('.caption_cite').length !== 0) {
                var tmpItem = {
                  id: $(elem).find('.caption_cite').attr('paperid'),
                  title: $(elem).find('h2').text()
                }
                resPool.push(tmpItem)
              }
            })
          }
          this.resItems = resPool
          store.dispatch('updateResItems', this.resItems)
        })
      },
      switchHelp: () => {
        store.dispatch('switchQuickciteHelp')
      }
    }
  }
</script>

<style lang="stylus" scoped>
.input-group
  padding 10px 10px 5px 10px
</style>
