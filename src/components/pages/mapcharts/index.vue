<template>
    <div class='content'>
        <box-container :spinShow='spinShow1' :title="'地图一'" :toolsShow='false' class='bg-grey' :width="'100%'">
            <mapcharts-style-1 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'地图二'" :toolsShow='false' class='bg-grey' :width="'100%'">
            <mapcharts-style-2 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'地图三'" :toolsShow='false' class='bg-grey' :width="'100%'">
            <mapcharts-style-3 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'地图四'" :toolsShow='false' class='bg-grey' :width="'100%'">
            <mapcharts-style-4 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'地图五'" :toolsShow='false' class='bg-grey' :width="'100%'">
            <mapcharts-style-5 />
        </box-container>
    </div>
</template>
<script>
import boxContainer from '../common/box-container-2'
import mapCharts1 from '../../cell/mapcharts/mapcharts-style-1'
import mapCharts2 from '../../cell/mapcharts/mapcharts-style-2'
import mapCharts3 from '../../cell/mapcharts/mapcharts-style-3'
import mapCharts4 from '../../cell/mapcharts/mapcharts-style-4'
import mapCharts5 from '../../cell/mapcharts/mapcharts-style-5'
export default {
    name: 'mapCharts',
    components: {
        'box-container': boxContainer,
        'mapcharts-style-1': mapCharts1,
        'mapcharts-style-2': mapCharts2,
        'mapcharts-style-3': mapCharts3,
        'mapcharts-style-4': mapCharts4,
        'mapcharts-style-5': mapCharts5,
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

