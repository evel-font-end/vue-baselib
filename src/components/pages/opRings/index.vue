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
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import OpRings1 from '../../cell/opRings/opRings-style-1'
import OpRings2 from '../../cell/opRings/opRings-style-2'
import OpRings3 from '../../cell/opRings/opRings-style-3'
export default {
  name: 'OpRings',
  components: {
    'box-container': boxContainer,
    'opRings-style-1': OpRings1,
    'opRings-style-2': OpRings2,
    'opRings-style-3': OpRings3,
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

