<template>
  <div class='content'>
    <div class="iconbox">
      <icon-style-1  ref='icon1' />
    </div>
  </div>
</template>
<script>
import boxContainer from '../common/box-container-2'
import icon1 from '../../cell/icons/icon-style-1'
export default {
  name: 'Icons',
  components: {
    'box-container': boxContainer,
    'icon-style-1': icon1,
  },
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
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

