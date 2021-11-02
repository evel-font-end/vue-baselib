<template>
    <div class="work_order_table2" id="table2">
        <el-table 
            :data="orderTableDataList.dataList" 
            :empty-text="emptyText"
            row-key="id"
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
            >
            <template  v-for="(item,index) in orderTableDataList.titleList" >
                <el-table-column
                    :prop="item.field" 
                    :label="item.title"
                    :show-overflow-tooltip="showOverflowTooltip"
                    :key="'ordercolumn'+index"
                    >
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "TableStyle2",
    props: {
        orderTableDataList: { //表格数据
            type: Object,
            default: function(){
                let data = {
                    dataList:[],
                    titleList:[]
                }
                return data
            }
        },
        emptyText: { // 空数据时显示的文本内容
            type: String,
            default: "暂无数据"
        },
        showOverflowTooltip: { // 当内容过长被隐藏时显示 tooltip
            type: Boolean,
            default: true,
        },
        operator: { // 是否显示操作列
            type: Boolean,
            default: false,
        },
        colAlign: { // 每列文字的对齐方式
            type: String,
            default: "left",
        },
        operatorWidth: { // 操作列的宽度
            type: [String, Number],
            default: 80,
        },
    },
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
#table2.work_order_table2 {
    box-sizing: border-box;
    padding: 20px;
    
    
}
</style>
<style lang="scss">
#table2.work_order_table2 {
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
                            background: rgba(4,89,138,0.38);
                            border: none;
                            .cell{
                                padding-left: 28px;
                                font-size: 16px;
                                color: #9bcdff;
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
                            font-size: 14px;
                            font-family: PingFangSC, PingFangSC-Regular;
                            font-weight: 400;
                            color: #9bcdff;
                            padding-left: 28px;
                            .el-table__expand-icon{
                                .el-icon-arrow-right:before{
                                    color: #9BCDFF;
                                }
                            }
                        }
                    }
                    &:nth-child(2n) {
                        background: rgba(4,89,138,0.30);
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

