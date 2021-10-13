<template>
  <div class='content'>
    <box-container
    class='bg-grey'
    title='仪表盘2'
    :spinShow='spinShow2'
    @showOptionHandler='showOption("board2")'>
      <board-style-2
        sid='board2'
        percentage='80'
        ref='board2' />
    </box-container>
    <box-container
    class='bg-grey'
    title='仪表盘3'
    :spinShow='spinShow3'
    @showOptionHandler='showOption("board3")'>
      <board-style-3
        sid='board3'
        percentage='80'
        ref='board3' />
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import Board2 from '../../cell/board/board-style-1'
import Board3 from '../../cell/board/board-style-3'
export default {
  name: 'Board',
  components: {
    'box-container': boxContainer,
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
    // const _this = this
    // pie-style-1 fetch data
    this.$http.get('/pie/eventTypeSource')
      .then(res => {
        if (res.state && res.data) {
          this.eventTypeFetchData = res.data
          this.spinShow1 = false
        }
      })
      .catch(err => {
        console.log(err)
        this.$fetchMock('/static/mock/pie/eventTypeSource.json')
          .then(res => {
            this.eventTypeFetchData = res
            this.spinShow1 = false
          })
      })
    // pie-style-2 fetch data
    this.$http.get('/pie/caringObjectSource')
      .then(res => {
        if (res.state && res.data) {
          this.caringObjectFetchData = res.data
          this.spinShow2 = false
        }
      })
      .catch(err => {
        console.log(err)
        this.$fetchMock('/static/mock/pie/caringObjectSource.json')
          .then(res => {
            this.caringObjectFetchData = res
            this.spinShow2 = false
          })
      })
    // pie-style-3 fetch data
    this.$http.get('/pie/eventHandlingSource')
      .then(res => {
        if (res.state && res.data) {
          this.eventHandlingData = res.data
          this.spinShow3 = false
        }
      })
      .catch(err => {
        console.log(err)
        this.$fetchMock('/static/mock/pie/eventHandlingSource.json')
          .then(res => {
            this.eventHandlingData = res
            this.spinShow3 = false
          })
      })
  },
  methods: {
    showOption(ref) {
      console.log(JSON.parse(JSON.stringify(this.$refs[ref].option)))
    },
  },
}
</script>
<style lang="scss" scoped>
@import './board.scss'
</style>

