<template>
    <div class='content'>
        <box-container :spinShow='spinShow1' :title="'拓补图1'" class='bg-grey' :width="'48%'" @showOptionHandler='showOption("topology1")'>
            <topology-style-1 :buildingData="buildingData" :buildingList="buildingList" ref="topology1" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图2'" class='bg-grey' :width="'48%'" @showOptionHandler='showOption("topology2")'>
            <topology-style-2 ref="topology2" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图3'" class='bg-grey' :width="'48%'" @showOptionHandler='showOption("topology3")'>
            <topology-style-3 ref="topology3" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图4'" class='bg-grey' :width="'48%'" @showOptionHandler='showOption("topology4")'>
            <topology-style-4 ref="topology4" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图5'" class='bg-grey' :width="'48%'" @showOptionHandler='showOption("topology5")'>
            <topology-style-5 ref="topology5" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图6'" class='bg-grey' :width="'48%'" @showOptionHandler='showOption("topology6")'>
            <topology-style-6 ref="topology6" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图7'" class='bg-grey' :width="'100%'" @showOptionHandler='showOption("topology7")'>
            <topology-style-7 ref="topology7" />
        </box-container>
    </div>
</template>
<script>
import boxContainer from '../common/box-container-2'
import topology1 from '../../cell/topology/topology-style-1'
import topology2 from '../../cell/topology/topology-style-2'
import topology3 from '../../cell/topology/topology-style-3'
import topology4 from '../../cell/topology/topology-style-4'
import topology5 from '../../cell/topology/topology-style-5'
import topology6 from '../../cell/topology/topology-style-6'
import topology7 from '../../cell/topology/topology-style-7'
export default {
    name: 'TablePage',
    components: {
        'box-container': boxContainer,
        'topology-style-1': topology1,
        'topology-style-2': topology2,
        'topology-style-3': topology3,
        'topology-style-4': topology4,
        'topology-style-5': topology5,
        'topology-style-6': topology6,
        'topology-style-7': topology7,

    },
    data() {
        return {
            eventListFetchData: [],
            spinShow1: false,
            buildingData: {
                buildingTotal: 84990,
                buildingTitle: "全国楼宇总数(栋)"
            },
            buildingList: [
                {
                    title: 'A类楼宇',
                    number: 9600,
                    riTong: '1日通',
                    icon: 'icon-Alei'
                },
                {
                    title: 'B类楼宇',
                    number: 8493,
                    riTong: '3日通',
                    icon: 'icon-Blei'
                },
                {
                    title: 'C类楼宇',
                    number: 749,
                    riTong: '6日通',
                    icon: 'icon-Clei'
                },
                {
                    title: 'D类楼宇',
                    number: 490,
                    riTong: '10日通',
                    icon: 'icon-Dlei'
                },
                {
                    title: 'N类楼宇',
                    number: 30,
                    riTong: '15日通',
                    icon: 'icon-Nlei'
                },
            ],
        }
    },
    created() {
    },
    methods:{
        showOption(ref) {
            this.$store.commit('UPDATE_DIALOG_SHOW', this.$refs[ref].$options._componentTag);
        },
    }
}
</script>
<style lang="scss" scoped>
@import './topology.scss';
</style>

