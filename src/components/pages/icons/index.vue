<template>
  <div class='content'>
  <box-container
    class='bg-grey'
    title='仪表盘1'
    @showOptionHandler='showOption("board1")'>
      <board-style-1
        sid='board1'
        :source='80'
        :options="{
        }"
        ref='board1' />
    </box-container>
    <box-container
    class='bg-grey'
    title='仪表盘2'
    @showOptionHandler='showOption("board2")'>
      <board-style-2
        sid='board2'
        source='80'
        ref='board2' />
    </box-container>
    <box-container
    class='bg-grey'
    title='仪表盘3'
    @showOptionHandler='showOption("board3")'>
      <board-style-3
        sid='board3'
        source='80'
        ref='board3' />
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import Board1 from '../../cell/board/board-style-1'
import Board2 from '../../cell/board/board-style-2'
import Board3 from '../../cell/board/board-style-3'
export default {
  name: 'Icons',
  components: {
    'box-container': boxContainer,
    'board-style-1': Board1,
    'board-style-2': Board2,
    'board-style-3': Board3,
  },
  data() {
    return {
      eventTypeFetchData: [],
      caringObjectFetchData: [],
      eventHandlingData: [],
      spinShow1: true,
      spinShow2: true,
      spinShow3: true,
      activeRef: '',
    }
  },
  created() {
  },
  mounted() {
    // const a = (15 - 0) * 1.5 * 30 * 0.7 * 1.2
    // const b = (a * 12) * 5
    // console.log(b)
  },
  methods: {
    showOption(ref) {
      this.$store.commit('UPDATE_DIALOG_SHOW', this.$refs[ref].$options._componentTag);
    },
  },
}
</script>
<style lang="scss" scoped>
@import './icons.scss'
</style>

