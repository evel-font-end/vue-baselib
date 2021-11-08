<template>
    <div class='content'>
        <box-container :spinShow='spinShow1' :title="'拓补图1'" class='bg-grey' :width="'48%'" @showOptionHandler='showOption("topology1")'>
            <topology-style-1 :buildingData="buildingData" :buildingList="buildingList" ref="topology1" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图2'" class='bg-grey' :width="'48%'" @showOptionHandler='showOption("topology2")'>
            <topology-style-2 :dataList="data2List" :activeIndex="activeIndex" @subItem2ClickFn="subItem2ClickFn" ref="topology2" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图3'" class='bg-grey' :width="'48%'" @showOptionHandler='showOption("topology3")'>
            <topology-style-3 :dataList="data3List" ref="topology3" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图4'" class='bg-grey' :width="'48%'" @showOptionHandler='showOption("topology4")'>
            <topology-style-4 :data="data4List" ref="topology4" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图5'" class='bg-grey' :width="'48%'" @showOptionHandler='showOption("topology5")'>
            <topology-style-5 :dataList="data5List" ref="topology5" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图6'" class='bg-grey' :width="'48%'" @showOptionHandler='showOption("topology6")'>
            <topology-style-6 :choiceProvince="choiceProvince" :echartsDataList="echartsDataList" ref="topology6" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图7'" class='bg-grey' :width="'100%'" @showOptionHandler='showOption("topology7")'>
            <topology-style-7 :webPreentList="webPreentList" ref="topology7" />
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
            activeIndex: 0,
            data2List: [
                {
                    title: "数据加工",
                    image: require('../../../assets/image/serve.png'),
                    subData: [
                        {
                            image: require('../../../assets/image/hexinqu.png'),
                            title: "核心区",
                            count: 135,
                            rightObj: {
                                gaojin: 0,
                                lianjie: 129,
                                neicun: '256G',
                                cpu: '8core*4',
                                cunchu : '100G',
                            },
                        },
                        {
                            image: require('../../../assets/image/yonghuqu.png'),
                            title: "用户区",
                            count: 502,
                            rightObj: {
                                gaojin: 0,
                                lianjie: 490,
                                neicun: '64G',
                                cpu: '16vCPU',
                                cunchu : '100G',
                            },
                            
                        },
                        {
                            image: require('../../../assets/image/dmz.png'),
                            title: "DMZ",
                            count: 14,
                            rightObj: {
                                gaojin: 0,
                                lianjie: 9,
                                neicun: '16G',
                                cpu: '8vCPU',
                                cunchu : '100G',
                            },
                            
                        }
                    ],
                    listData:[
                        {
                            list:[
                                {
                                    text:"01",
                                },
                                {
                                    text:"02",
                                },
                                {
                                    text:"03",
                                },
                                {
                                    text:"04",
                                },
                                {
                                    text:"其他",
                                },
                            ]
                        },
                        {
                            list:[
                                {
                                    text:"ss",
                                },
                                {
                                    text:"0badb2",
                                },
                                {
                                    text:"cca03",
                                },
                                {
                                    text:"0dddadd4",
                                },
                                {
                                    text:"其他dd1",
                                },
                            ]
                        },
                        {
                            list:[
                                {
                                    text:"0aa",
                                },
                                {
                                    text:"0bb2",
                                },
                                {
                                    text:"cc03",
                                },
                                {
                                    text:"0dd4",
                                },
                                {
                                    text:"其他1",
                                },
                            ]
                        }
                    ]
                },
            ],
            data3List: {
                dataProcessing: {
                    title: "数据加工",
                    image: require("../../../assets/image/machining.png"),
                    subData:[
                        {
                            title:"算力规模",
                            num:"10个",
                        },
                        {
                            title:"已执行任务",
                            num:"20个",
                        },
                        {
                            title:"等待平均时延",
                            num:"29个",
                        },
                        {
                            title:"平均执行时长",
                            num:"119.57PiB",
                        },
                    ]
                },
            },
            data4List:{
                bureauStation: {
                    speciality:'局站',
                    num:13459,
                    totalNum: 0,
                },
                opticalFiberPath: {
                    speciality:'楼宇',
                    num:139,
                    totalNum: 1000,
                },
                standardAddress: {
                    speciality:'光纤光路',
                    num:352,
                    totalNum: 20000,
                },
                computerRoom: {
                    speciality:'机房',
                    num:3452,
                    totalNum: 500,
                },
                buildingObj: {
                    speciality:'政企电路',
                    num:7865,
                    totalNum: 1500,
                },
                circuitObj: {
                    speciality:'标准地址',
                    num:139,
                    totalNum: 2600,
                }
            },
            data5List: [
                {
                    title: "数据加工",
                    image: require('../../../assets/image/serve.png'),
                    subData: [
                        {
                            image: require('../../../assets/image/hexinqu.png'),
                            title: "核心区",
                            count: 135,
                            rightObj: {
                                gaojin: 0,
                                lianjie: 129,
                                neicun: '256G',
                                cpu: '8core*4',
                                cunchu : '100G',
                            }
                        },
                        {
                            image: require('../../../assets/image/yonghuqu.png'),
                            title: "用户区",
                            count: 502,
                            rightObj: {
                                gaojin: 0,
                                lianjie: 490,
                                neicun: '64G',
                                cpu: '16vCPU',
                                cunchu : '100G',
                            }
                        },
                        {
                            image: require('../../../assets/image/dmz.png'),
                            title: "DMZ",
                            count: 14,
                            rightObj: {
                                gaojin: 0,
                                lianjie: 9,
                                neicun: '16G',
                                cpu: '8vCPU',
                                cunchu : '100G',
                            }
                        }
                    ]
                },
            ],
            choiceProvince: "全国",
            echartsDataList:[
                {
                    name: "北京",
                    numValue: "46161",
                    value: 1,
                },
                {
                    name: "北京",
                    numValue: "46161",
                    value: 1,
                },
                {
                    name: "北京",
                    numValue: "46161",
                    value: 1,
                },
                {
                    name: "北京",
                    numValue: "46161",
                    value: 1,
                },
                {
                    name: "北京",
                    numValue: "46161",
                    value: 1,
                },
                {
                    name: "北京",
                    numValue: "46161",
                    value: 1,
                },
                {
                    name: "北京",
                    numValue: "46161",
                    value: 1,
                },
                {
                    name: "北京",
                    numValue: "46161",
                    value: 1,
                },
            ], 
            webPreentList: [
                {name: '任务平均执行时长', num: '9.75min', span: 3, classOption:"grid-net-content-side"},
                {name: '已用空间', num: '69.92PiB', span: 4, classOption:"grid-net-content"},
                {name: '总空间', num: '119.57PiB', span: 5, classOption:"grid-net-center"},
                {name: '正在执行任务', num: '374个', span: 4, classOption:"grid-net-content"},
                {name: '等待平均时延', num: '3.57s', span: 3, classOption:"grid-net-content-side"}
            ],
        }
    },
    created() {
    },
    methods:{
        showOption(ref) {
            this.$store.commit('UPDATE_DIALOG_SHOW', this.$refs[ref].$options._componentTag);
        },
        subItem2ClickFn(index){
            this.activeIndex = index
        }
    }
}
</script>
<style lang="scss" scoped>
@import './topology.scss';
</style>

