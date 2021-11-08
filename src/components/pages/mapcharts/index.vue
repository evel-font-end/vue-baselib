<template>
    <div class='content'>
        <box-container :spinShow='spinShow1' :title="'地图一'" class='bg-grey' :width="'100%'" @showOptionHandler='showOption("mapcharts1")'>
            <mapcharts-style-1 :chinaDatas="chinaDatas1"  ref="mapcharts1"/>
        </box-container>
        <box-container :spinShow='spinShow1' :title="'地图二'" class='bg-grey' :width="'100%'" @showOptionHandler='showOption("mapcharts2")'>
            <mapcharts-style-2  ref="mapcharts2"/>
        </box-container>
        <box-container :spinShow='spinShow1' :title="'地图三'" class='bg-grey' :width="'100%'" @showOptionHandler='showOption("mapcharts3")'>
            <mapcharts-style-3  ref="mapcharts3"/>
        </box-container>
        <box-container :spinShow='spinShow1' :title="'地图四'" class='bg-grey' :width="'100%'" @showOptionHandler='showOption("mapcharts4")'>
            <mapcharts-style-4  ref="mapcharts4"/>
        </box-container>
        <box-container :spinShow='spinShow1' :title="'地图五'" class='bg-grey' :width="'100%'" @showOptionHandler='showOption("mapcharts5")'>
            <mapcharts-style-5  ref="mapcharts5"/>
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
            chinaDatas1: [
                [{
                    name: '辽宁',
                    value: 16
                }],	[{
                    name: '河北',
                    value: 1
                }],	[{
                    name: '山东',
                    value: 1
                }],	[{
                    name: '山西',
                    value: 1
                }],	[{
                    name: '陕西',
                    value: 1
                }],	[{
                    name: '甘肃',
                    value: 1
                }],	[{
                    name: '四川',
                    value: 1
                }],	[{
                    name: '重庆',
                    value: 1
                }],	[{
                    name: '河南',
                    value: 1
                }],[{
                    name: '广东',
                    value: 1
                }],	[{
                    name: '上海',
                    value: 1
                }],
                [{
                    name: '江西',
                    value: 1
                }],
            ],
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
        showOption(ref) {
            this.$store.commit('UPDATE_DIALOG_SHOW', this.$refs[ref].$options._componentTag);
        },
    }
}
</script>
<style lang="scss" scoped>
@import './mapcharts.scss';
</style>

