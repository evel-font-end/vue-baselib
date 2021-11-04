<template>
    <div class="work_order_table" id="table1">
        <el-table 
            :data="orderTableDataList.dataList" 
            :element-loading-text="loadingText"
            :empty-text="emptyText"
            @row-click="rowClickFn"
            >
            <template  v-for="(item,index) in orderTableDataList.titleList" >
                <el-table-column
                    :prop="item.field" 
                    :label="item.title"
                    :width="item.width"
                    :show-overflow-tooltip="showOverflowTooltip"
                    :align="colAlign"
                    :key="'ordercolumn'+index"
                    >
                </el-table-column>
            </template>
            
        </el-table>
    </div>
</template>

<script>
export default {
    name: "TableStyle1",
    props: {
        orderTableDataList: { //表格数据
            type: Object,
            default: {}
        },
        emptyText: { // 空数据时显示的文本内容
            type: String,
            default: "暂无数据"
        },
        loadingText: { // 数据加载时显示的文本内容
            type: String,
            default: "数据加载中...",
        },
        showOverflowTooltip: { // 当内容过长被隐藏时显示 tooltip
            type: Boolean,
            default: true,
        },
        colAlign: { // 每列文字的对齐方式
            type: String,
            default: "left",
        },
        operatorWidth: { // 操作列的宽度
            type: [String, Number],
            default: 80,
        },
        cityTableRowClickFn:{ // 表格行点击事件
            type: Function
        },
        
    },
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{
        // 行点击事件
        rowClickFn(val){
            if(this.cityTableRowClickFn){
                this.cityTableRowClickFn(val)
            }
        },
    }
};
</script>

<style lang="scss" scoped>
#table1.work_order_table {
    box-sizing: border-box;
    padding: 20px;
}
</style>
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

