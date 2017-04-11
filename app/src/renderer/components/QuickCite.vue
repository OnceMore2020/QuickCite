<template>
  <div>
    <helpView></helpView>
    <inputView></inputView>
    <resView></resView>
  </div>
</template>

<script>
  import helpView from './QuickCite/helpView'
  import inputView from './QuickCite/inputView'
  import resView from './QuickCite/resView'
  export default {
    components: {
      helpView,
      inputView,
      resView
    }
  }
</script>
