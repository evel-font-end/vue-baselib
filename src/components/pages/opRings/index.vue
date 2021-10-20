<template>
  <div class='content'>
    <box-container
    class='bg-grey'
    title='环形图1'
    @showOptionHandler='showOption("opRings1")'>
      <opRings-style-1
        sid='opRings1'
        ref='opRings1' />
    </box-container>
    <box-container
      class='bg-grey'
      title='环形图2'
      @showOptionHandler='showOption("opRings2")'>
      <opRings-style-2
        sid='opRings2'
        ref='opRings2' />
    </box-container>
    <box-container
      class='bg-grey'
      title='环形图3'
      @showOptionHandler='showOption("opRings3")'>
      <opRings-style-3
        sid='opRings3'
        ref='opRings3' />
    </box-container>
    <box-container
      class='bg-grey'
      title='环形图4'
      @showOptionHandler='showOption("opRings4")'>
      <opRings-style-4
        sid='opRings4'
        ref='opRings4' />
    </box-container>
    <box-container
      class='bg-grey'
      title='环形图5'
      @showOptionHandler='showOption("opRings5")'>
      <opRings-style-5
        sid='opRings5'
        ref='opRings5' />
    </box-container>
    <box-container
      class='bg-grey'
      title='环形图6'
      @showOptionHandler='showOption("opRings6")'>
      <opRings-style-6
        sid='opRings6'
        ref='opRings6' />
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import OpRings1 from '../../cell/opRings/opRings-style-1'
import OpRings2 from '../../cell/opRings/opRings-style-2'
import OpRings3 from '../../cell/opRings/opRings-style-3'
import OpRings4 from '../../cell/opRings/opRings-style-4'
import OpRings5 from '../../cell/opRings/opRings-style-5'
import OpRings6 from '../../cell/opRings/opRings-style-6'
export default {
  name: 'OpRings',
  components: {
    'box-container': boxContainer,
    'opRings-style-1': OpRings1,
    'opRings-style-2': OpRings2,
    'opRings-style-3': OpRings3,
    'opRings-style-4': OpRings4,
    'opRings-style-5': OpRings5,
    'opRings-style-6': OpRings6,
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
@import './opRings.scss'
</style>

