<template>
  <div id="app">
    <div class="top">
      <Top></Top>
      <TabBar></TabBar>
    </div>
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>
<script>
import Top from '@/components/Top'
import TabBar from '@/components/TabBar'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    Top,
    TabBar
  }
}
</script>

<style lang="scss">
body,html{
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
  height: 100%;
  .top{
    flex-shrink: 0;
  }
  .main{
    position: relative;
    flex-grow: 1;
    overflow: auto;
    background-color: #222;
  }

}

</style>
