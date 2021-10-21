<template>
  <div class='opRings-container'>
    <BaseStationPie
    v-for='(infoItem, index) in value'
    :key='`info${index}`'
    :sub-text='infoItem.name'
    :info='infoItem.info' />
  </div>
</template>
<script>
import BaseStationPie from "./components/BaseStationPie";
export default {
  name: 'OpRingsStyle6',
  components: {
    BaseStationPie,
  },
  props: {
    sid: {
      type: String,
      default: 'opRings6',
    },
    subText: {
      type: String,
      default: '端口占有率',
    },
    value: {
      type: [Array, Object],
      default: () => [
        {
          name: 'SA基站',
          info: [
            {
              name: '自动核配数',
              value: 10,
              itemStyle: {
                color: '#F58F24',
              },
            },
            {
              name: '互联网专线总数',
              value: 20,
              itemStyle: {
                color: '#3FF5F8',
              },
            },
          ],
        },
      ],
    },
  },
  data() {
    return {
      chart: null,
      option: {},
    }
  },
  watch: {
    value(newVal) {
      if (this.chart === null) {
        this.initChart()
      }
    },
  },
  created() {
  },
  mounted() {
  },
  methods: {
  },
}
</script>
<style lang='scss' scoped>
.opRings-container{
  width: 100%;
  height: 100%;
}
</style>
