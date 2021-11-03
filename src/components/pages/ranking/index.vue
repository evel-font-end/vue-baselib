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
    <box-container
    class='bg-grey'
    title='排名4'
    @showOptionHandler='showOption("ranking4")'>
      <ranking-style-4
        sid='ranking4'
        ref='ranking4' />
    </box-container>
    <box-container
    class='bg-grey'
    title='排名5'
    @showOptionHandler='showOption("ranking5")'>
      <ranking-style-5
        sid='ranking5'
        ref='ranking5' />
    </box-container>
    <box-container
    class='bg-grey'
    title='排名6'
    @showOptionHandler='showOption("ranking6")'>
      <ranking-style-6
        sid='ranking6'
        ref='ranking6' />
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import Ranking1 from '../../cell/ranking/ranking-style-1'
import Ranking2 from '../../cell/ranking/ranking-style-2'
import Ranking3 from '../../cell/ranking/ranking-style-3'
import Ranking4 from '../../cell/ranking/ranking-style-4'
import Ranking5 from '../../cell/ranking/ranking-style-5'
import Ranking6 from '../../cell/ranking/ranking-style-6'
export default {
  name: 'Ranking',
  components: {
    'box-container': boxContainer,
    'ranking-style-1': Ranking1,
    'ranking-style-2': Ranking2,
    'ranking-style-3': Ranking3,
    'ranking-style-4': Ranking4,
    'ranking-style-5': Ranking5,
    'ranking-style-6': Ranking6,
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
      this.$store.commit('UPDATE_DIALOG_SHOW', this.$refs[ref].$options._componentTag);
    },
  },
}
</script>
<style lang="scss" scoped>
@import './ranking.scss'
</style>

