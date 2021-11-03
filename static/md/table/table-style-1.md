## CrumbsStyle1

> Use
```
<table-style-1 :orderTableDataList="orderTableDataList1" ref="table1" />
data() {
    return {
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

    }
}

```

> Style
```
<style lang="scss">
#table1.work_order_table {
    .el-table {
        color: #9BCDFF;
        text-align: left;
        background: transparent;
        .el-table__header-wrapper{
            background: rgba(3,131,175,0.26);
            .el-table__header{
                background: transparent;
                .has-gutter{
                    background: transparent;
                    tr{
                        background: transparent;
                        th{
                            background: rgba(3,131,175,0.26);
                            border: none;
                            border-bottom: 1px solid #3ca1c4;
                            border-top: 1px solid #3ca1c4;
                            .cell{
                                padding-left: 28px;
                                font-size: 16px;
                                color: #51feff;
                            }
                        }
                    }
                }
            }
        }
        .el-table__body-wrapper{
            background: transparent;
            .el-table__body{
                .el-table__row{
                    background: linear-gradient(270deg,rgba(0,141,224,0.00), rgba(0,128,224,0.20) 51%, rgba(0,141,224,0.00) 99%);
                    td{
                        border: none;
                        .cell{
                            font-size: 16px;
                            font-family: PingFangSC, PingFangSC-Regular;
                            font-weight: 400;
                            color: #ffffff;
                            padding-left: 28px;
                        }
                    }
                    &:nth-child(2n) {
                        background: rgba(81,195,255,0.19);
                        border-color: transparent;
                    }
                    &:hover>td{
                        background-color: rgba(7,172,247,0.46);
                    }
                }
            }
        }
        &::before{
            height: 0;
        }
    }
}
</style>
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
orderTableDataList|表格数据|Object|-|-


