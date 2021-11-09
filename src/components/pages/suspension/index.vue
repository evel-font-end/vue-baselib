<template>
    <div class='content'>
        <box-container :spinShow='spinShow1' :title="'悬浮框一'" class='bg-grey' :width="'23%'" @showOptionHandler='showOption("suspension1")'>
            <suspension-style-1 :dataList="dataList1" ref="suspension1" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'悬浮框二'" class='bg-grey' :width="'23%'" @showOptionHandler='showOption("suspension2")'>
            <suspension-style-2 :dataList="dataList2" ref="suspension2" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'悬浮框三'" class='bg-grey' :width="'23%'" @showOptionHandler='showOption("suspension3")'>
            <suspension-style-3 :dataList="dataList3" ref="suspension3" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'悬浮框四'" class='bg-grey' :width="'23%'" @showOptionHandler='showOption("suspension4")'>
            <suspension-style-4 :dataList="dataList4" ref="suspension4" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'悬浮框五'" class='bg-grey' :width="'23%'" @showOptionHandler='showOption("suspension5")'>
            <suspension-style-5 :dataList="dataList5" ref="suspension5" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'悬浮框六'" class='bg-grey' :width="'23%'" @showOptionHandler='showOption("suspension6")'>
            <suspension-style-6 :dataList="dataList6" ref="suspension6" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'悬浮框七'" class='bg-grey' :width="'25%'" @showOptionHandler='showOption("suspension7")'>
            <suspension-style-7 :dataList="dataList7" ref="suspension7" />
        </box-container>
    </div>
</template>
<script>
import boxContainer from '../common/box-container-2'
import Suspension1 from '../../cell/suspension/suspension-style-1'
import Suspension2 from '../../cell/suspension/suspension-style-2'
import Suspension3 from '../../cell/suspension/suspension-style-3'
import Suspension4 from '../../cell/suspension/suspension-style-4'
import Suspension5 from '../../cell/suspension/suspension-style-5'
import Suspension6 from '../../cell/suspension/suspension-style-6'
import Suspension7 from '../../cell/suspension/suspension-style-7'
export default {
    name: 'SuspensionPage',
    components: {
        'box-container': boxContainer,
        'suspension-style-1': Suspension1,
        'suspension-style-2': Suspension2,
        'suspension-style-3': Suspension3,
        'suspension-style-4': Suspension4,
        'suspension-style-5': Suspension5,
        'suspension-style-6': Suspension6,
        'suspension-style-7': Suspension7,
    },
    data() {
        return {
            eventListFetchData: [],
            spinShow1: false,
            dataList1: {
                header:{
                    icon:"icon-guangboqi iconfont",
                    title:"智慧音柱-DF45",
                    information:"海口市美兰区江东大道"
                },
                content:{
                    id:"编号：0972A873AAF211EA8A5A00163E02E0CA",
                    x:"经度：110.389148",
                    y:"纬度：20.071856",
                    statustext:"设备状态：",
                    status:"在线",
                    volume:"音量：0分贝",
                    time:"最后上报时间：2021-04-26 21:00:12"
                }
            },
            dataList2: {
                title: "山西省",
                list:[
                    {
                        name:"设备数量",
                        num:"1045",
                    },
                    {
                        name:"设备总容量G",
                        num:"940",
                    },
                    {
                        name:"设备占用容量G",
                        num:"384",
                    },
                    {
                        name:"设备容量占用率(%)",
                        num:"74.5%",
                    },
                    {
                        name:"设备端口数量",
                        num:"8490",
                    },
                ]
            },
            dataList3: {
                title: "上海市",
                list:[
                    {
                        name:"发送峰值(Gbit/s)",
                        num:"330.47",
                    },
                    {
                        name:"接受峰值(Gbit/s)",
                        num:"7485.47",
                    },
                ]
            },
            dataList4: {
                title: "广播器",
                list:[
                    {
                        name:"设备总数",
                        num:"65",
                    },
                    {
                        name:"在线设备数",
                        num:"23",
                    },
                    {
                        name:"离线设备数",
                        num:"42",
                    },
                    {
                        name:"正在播放设备数",
                        num:"21",
                    },
                    {
                        name:"播放总次数",
                        num:"153",
                    },
                ]
            },
            dataList5: [
                {
                    icon:"icon-jizhan1 iconfont",
                    title:"2G",
                    list:[
                        {
                            name:"基站",
                            num:"89",
                        },
                        {
                            name:"小区",
                            num:"78",
                        },
                        {
                            name:"BBU",
                            num:"89",
                        },
                        {
                            name:"RU",
                            num:"90",
                        },
                    ]
                },
                {
                    icon:"icon-jizhan1 iconfont",
                    title:"3G",
                    list:[
                        {
                            name:"基站",
                            num:"89",
                        },
                        {
                            name:"小区",
                            num:"78",
                        },
                        {
                            name:"BBU",
                            num:"89",
                        },
                        {
                            name:"RU",
                            num:"90",
                        },
                    ]
                },
                {
                    icon:"icon-jizhan1 iconfont",
                    title:"4G",
                    list:[
                        {
                            name:"基站",
                            num:"89",
                        },
                        {
                            name:"小区",
                            num:"78",
                        },
                        {
                            name:"BBU",
                            num:"89",
                        },
                        {
                            name:"RU",
                            num:"90",
                        },
                    ]
                },
            ],
            dataList6: [
                {
                    icon:"",
                    title:"阿里巴巴",
                    text:"IDC",
                    contentList:[
                        {
                            name:"宽带",
                            num:"48137.3",
                        },
                        {
                            name:"流出流量",
                            num:"4824.6",
                        },
                        {
                            name:"流出带宽利用率",
                            num:"10.02%",
                        },
                        {
                            name:"流入流量",
                            num:"18755.87",
                        },
                        {
                            name:"流入带宽利用率",
                            num:"38.96%",
                        },
                    ]
                },
                {
                    icon:"",
                    title:"深圳平安通信科技…",
                    text:"MV",
                    contentList:[
                        {
                            name:"宽带",
                            num:"48137.3",
                        },
                        {
                            name:"流出流量",
                            num:"4824.6",
                        },
                    ]
                },
            ],
            dataList7: [
                {
                    class: 1,
                    text: "A端机房：阆中七里大道七里香榭小区地下室车库",
                },
                {
                    class: 1,
                    text: "A端机房：阆中七里大道七里香榭小区地下室车库",
                },
                {
                    class: 0,
                    text: "Z端机房：阆中思依卫生院",
                },
                {
                    class: 0,
                    text: "Z端机房：阆中思依卫生院",
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
@import './suspension.scss';
</style>

