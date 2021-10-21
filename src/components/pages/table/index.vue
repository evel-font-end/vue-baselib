<template>
    <div class='content'>
        <box-container :spinShow='spinShow1' :title="'展示类表格'" :toolsShow='false' class='bg-grey' :width="'100%'">
            <div class="tabletitle">单层级表格</div>
            <table-style-1 :orderTableDataList="orderTableDataList1" />
            <div class="tabletitle">多层级表格</div>
            <table-style-2 :orderTableDataList="orderTableDataList2" />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'操作类表格'" :toolsShow='false' class='bg-grey' :width="'100%'">
            <table-style-3 :orderTableDataList="orderTableDataList3" />
        </box-container>
    </div>
</template>
<script>
import boxContainer from '../common/box-container-2'
import Table1 from '../../cell/table/table-style-1'
import Table2 from '../../cell/table/table-style-2'
import Table3 from '../../cell/table/table-style-3'
export default {
    name: 'TablePage',
    components: {
        'box-container': boxContainer,
        'table-style-1': Table1,
        'table-style-2': Table2,
        'table-style-3': Table3,
    },
    data() {
        return {
            eventListFetchData: [],
            spinShow1: false,
            // 表格1数据
            orderTableDataList1: {
                titleList: [
                    {
                        title: "中心名称",
                        field: "text1",
                        width:'',
                    },
                    {
                        title: "能理接入数",
                        field: "text2",
                        width:'',
                    },
                    {
                        title: "平台调用量",
                        field: "text3",
                        width:'',
                    },
                    {
                        title: "调用成功率",
                        field: "text4",
                        width:'',
                    },
                    {
                        title: "平均延时",
                        field: "text5",
                        width:'',
                    },
                    {
                        title: "订购总次数",
                        field: "text6",
                        width:'',
                    },
                    {
                        title: "支撑应用总数",
                        field: "text7",
                        width:'',
                    },
                ],
                dataList: [
                    {
                        text1:'资源中心',
                        text2:'570',
                        text3:'5300131',
                        text4:'99.45%',
                        text5:'684',
                        text6:'211',
                        text7:'688',
                    },
                    {
                        text1:'数据中心',
                        text2:'663',
                        text3:'411971',
                        text4:'99.69%',
                        text5:'1155',
                        text6:'226',
                        text7:'56',
                    },
                    {
                        text1:'网络AI中心',
                        text2:'62',
                        text3:'155',
                        text4:'99.45%',
                        text5:'5634',
                        text6:'36',
                        text7:'68',
                    },
                ]
            },
            // 表格2数据
            orderTableDataList2: {
                titleList: [
                    {
                        title: "等级",
                        field: "text1",
                        width:'',
                    },
                    {
                        title: "标准地址",
                        field: "text2",
                        width:'',
                    },
                    {
                        title: "无源覆盖",
                        field: "text3",
                        width:'',
                    },
                    {
                        title: "可开通业务",
                        field: "text4",
                        width:'',
                    },
                ],
                dataList: [
                    {
                        id: 1,
                        text1:'8级',
                        text2:'广东省广州市天河区珠江西路5号',
                        text3:'清江怡苑光交',
                        text4:'以太网专线、SDH数字电路、互联网专线',
                        children: [
                            {
                                id: 11,
                                text1:'8级',
                                text2:'广东省广州市天河区珠江西路5号',
                                text3:'清江怡苑光交',
                                text4:'以太网专线、SDH数字电路、互联网专线',
                            },
                            {
                                id: 12,
                                text1:'8级',
                                text2:'广东省广州市天河区珠江西路5号',
                                text3:'清江怡苑光交',
                                text4:'以太网专线、SDH数字电路、互联网专线',
                            }
                        ]
                    },
                    {
                        id: 2,
                        text1:'8级',
                        text2:'广东省广州市天河区珠江西路5号',
                        text3:'清江怡苑光交',
                        text4:'以太网专线、SDH数字电路、互联网专线',
                        children: [
                            {
                                id: 21,
                                text1:'8级',
                                text2:'广东省广州市天河区珠江西路5号',
                                text3:'清江怡苑光交',
                                text4:'以太网专线、SDH数字电路、互联网专线',
                            },
                            {
                                id: 22,
                                text1:'8级',
                                text2:'广东省广州市天河区珠江西路5号',
                                text3:'清江怡苑光交',
                                text4:'以太网专线、SDH数字电路、互联网专线',
                            }
                        ]
                    },
                    {
                        id: 3,
                        text1:'8级',
                        text2:'广东省广州市天河区珠江西路5号',
                        text3:'清江怡苑光交',
                        text4:'以太网专线、SDH数字电路、互联网专线',
                        children: [
                            {
                                id: 31,
                                text1:'8级',
                                text2:'广东省广州市天河区珠江西路5号',
                                text3:'清江怡苑光交',
                                text4:'以太网专线、SDH数字电路、互联网专线',
                            },
                            {
                                id: 32,
                                text1:'8级',
                                text2:'广东省广州市天河区珠江西路5号',
                                text3:'清江怡苑光交',
                                text4:'以太网专线、SDH数字电路、互联网专线',
                            }
                        ]
                    },
                ]
            },
            // 表格3数据
            orderTableDataList3: {
                titleList: [
                    {
                        title: "地市",
                        field: "text1",
                        width:'100',
                    },
                    {
                        title: "客户名称",
                        field: "text2",
                        width:'340',
                    },
                    {
                        title: "宽带",
                        field: "text3",
                        width:'80',
                    },
                    {
                        title: "业务号码",
                        field: "text4",
                        width:'',
                    },
                    {
                        title: "数据来源",
                        field: "text5",
                        width:'',
                    },
                    {
                        title: "操作类型",
                        field: "text6",
                        width:'',
                    },
                    {
                        title: "电路状态",
                        field: "text7",
                        width:'',
                    },
                    {
                        title: "文本路由",
                        field: "text8",
                        width:'200',
                    },
                ],
                dataList: [
                    {
                        text1:'广东省',
                        text2:'广东省广州市天河区白云黑土集团有限公司',
                        text3:'2M',
                        text4:'107357269',
                        text5:'政企中台',
                        text6:'新增',
                        text7:'占用',
                        text8:'这是一段文本路由…',
                    },
                    {
                        text1:'北京市',
                        text2:'北京市海淀区世铎股份有限公司',
                        text3:'2M',
                        text4:'GD46285',
                        text5:'政企中台',
                        text6:'新增',
                        text7:'空闲',
                        text8:'这是一段文本路由…',
                    },
                    {
                        text1:'广东省',
                        text2:'广东省广州市天河区白云黑土集团有限公司',
                        text3:'2M',
                        text4:'107357269',
                        text5:'政企中台',
                        text6:'变更',
                        text7:'空闲',
                        text8:'这是一段文本路由…',
                    },
                ]
            },
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
@import './table.scss';
</style>

