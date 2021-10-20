<template>
  <div class='content'>
    <box-container
    class='bg-grey'
    title='排名1'
    @showOptionHandler='showOption("ranking1")'>
      <ranking-style-1
        sid='ranking1'
        ref='ranking1' />
    </box-container>
    <box-container
    class='bg-grey'
    title='排名2'
    @showOptionHandler='showOption("ranking2")'>
      <ranking-style-2
        sid='ranking2'
        ref='ranking2' />
    </box-container>
    <box-container
    class='bg-grey'
    title='排名3'
    @showOptionHandler='showOption("ranking3")'>
      <ranking-style-3
        sid='ranking3'
        ref='ranking3' />
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import Ranking1 from '../../cell/ranking/ranking-style-1'
import Ranking2 from '../../cell/ranking/ranking-style-2'
import Ranking3 from '../../cell/ranking/ranking-style-3'
export default {
  name: 'Ranking',
  components: {
    'box-container': boxContainer,
    'ranking-style-1': Ranking1,
    'ranking-style-2': Ranking2,
    'ranking-style-3': Ranking3,
  },
  data() {
    return {
      activeRef: '',
    }
  },
  created() {
  },
  methods: {
    showOption(ref) {
      console.log(JSON.parse(JSON.stringify(this.$refs[ref].option)))
    },
  },
}
</script>
<style lang="scss" scoped>
@import './ranking.scss'
</style>

