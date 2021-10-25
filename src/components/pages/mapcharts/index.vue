<template>
    <div class='content'>
        <box-container :spinShow='spinShow1' :title="'地图一'" :toolsShow='false' class='bg-grey' :width="'100%'">
            <mapcharts-style-1 />
        </box-container>
    </div>
</template>
<script>
import boxContainer from '../common/box-container-2'
import mapCharts from '../../cell/mapcharts/mapcharts-style-1'
export default {
    name: 'mapCharts',
    components: {
        'box-container': boxContainer,
        'mapcharts-style-1': mapCharts,
    },
    data() {
        return {
            eventListFetchData: [],
            spinShow1: false,
        }
    },
    created() {
        // this.$http.get('/table/eventListSource')
        // .then(res => {
        //     if (res.state && res.data) {
        //     this.eventListFetchData = res.data
        //     this.spinShow1 = false
        //     }
        // })
        // .catch(err => {
        //     console.log(err)
        //     this.$fetchMock('/static/mock/table/eventListSource.json')
        //     .then(res => {
        //         this.eventListFetchData = res
        //         this.spinShow1 = false
        //     })
        // })
    },
    methods:{
    }
}
</script>
<style lang="scss" scoped>
@import './mapcharts.scss';
</style>

