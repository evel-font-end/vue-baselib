<template>
  <div class='content'>
    <box-container
    class='bg-grey'
    title='雷达图1'
    @showOptionHandler='showOption("radarMap1")'>
      <radarMap-style-1
        sid='radarMap1'
        ref='radarMap1' />
    </box-container>
    <box-container
      class='bg-grey'
      title='雷达图2'
      @showOptionHandler='showOption("radarMap2")'>
      <radarMap-style-2
        sid='radarMap2'
        ref='radarMap2' />
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import RadarMap1 from '../../cell/radarMap/radarMap-style-1'
import RadarMap2 from '../../cell/radarMap/radarMap-style-2'
export default {
  name: 'RadarMap',
  components: {
    'box-container': boxContainer,
    'radarMap-style-1': RadarMap1,
    'radarMap-style-2': RadarMap2,
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
@import './radarMap.scss'
</style>

