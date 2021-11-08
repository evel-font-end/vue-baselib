<template>
    <div class="work_order_table3" id="table3">
        <el-table 
            :data="orderTableDataList.dataList" 
            :empty-text="emptyText" 
            :element-loading-text="loadingText"
            @selection-change="handleSelectionChange"
            >
            <el-table-column v-if="tableSelect" type="selection" width="55">
            </el-table-column>
            <template  v-for="(item) in orderTableDataList.titleList" >
                <el-table-column :prop="item.field"  :label="item.title" :show-overflow-tooltip="showOverflowTooltip" :width="item.width" :key="item.field" >
                    <!-- 这里通过插槽实现自定义列 -->
                    <template slot-scope="scope">
                        <slot v-if="scope.column.property=='text6'" :name="scope.column.property" :$index="scope.$index">
                            <span :class="[scope.row[scope.column.property]=='新增'?'xinzengclass':'biangengclass']">{{ scope.row[scope.column.property] }}</span>
                        </slot>
                        <slot v-else-if="scope.column.property=='text7'" :name="scope.column.property" :$index="scope.$index">
                            <span :class="[scope.row[scope.column.property]=='空闲'?'kongxianclass':'zhanyongclass']">{{ scope.row[scope.column.property] }}</span>
                        </slot>
                        <span v-else>{{ scope.row[scope.column.property] }}</span>
                    </template>
                </el-table-column>
            </template>
            <el-table-column v-if="operator" :width="operatorWidth" label="操作" :align="colAlign">
                <template slot-scope="scope">
                    <i class="iconfont icon-chakan" @click="handleEdit(scope.$index, scope.row, '查看')"></i>
                    <i class="iconfont icon-bianji" @click="handleEdit(scope.$index, scope.row, '编辑')"></i>
                    <i class="iconfont icon-shanchu" @click="handleEdit(scope.$index, scope.row, '删除')"></i>
                    <i class="iconfont icon-shangyi" @click="handleEdit(scope.$index, scope.row, '上移')"></i>
                    <i class="iconfont icon-xiayi" @click="handleEdit(scope.$index, scope.row, '下移')"></i>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "TableStyle3",
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
        loadingText: { // 数据加载时显示的文本内容
            type: String,
            default: "数据加载中...",
        },
        showOverflowTooltip: { // 当内容过长被隐藏时显示 tooltip
            type: Boolean,
            default: true,
        },
        operator: { // 是否显示操作列
            type: Boolean,
            default: true,
        },
        tableSelect: { // 表格是否显示可勾选
            type: Boolean,
            default: true,
        },
        colAlign: { // 每列文字的对齐方式
            type: String,
            default: "left",
        },
        operatorWidth: { // 操作列的宽度
            type: [String, Number],
            default: 180,
        },
        
    },
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{
        handleSelectionChange(data){
            this.$emit('tablehangClick', data)
        },
        handleEdit(index, row, text) {
            this.$emit('operatorhandleEdit', index, row, text)
        },
    }
};
</script>

<style lang="scss" scoped>
#table3.work_order_table3 {
    box-sizing: border-box;
    padding: 20px;
}
</style>
<style lang="scss">
#table3.work_order_table3 {
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
                                .el-checkbox{
                                    .el-checkbox__input{
                                        .el-checkbox__inner{
                                            background: transparent;
                                            border: 1px solid #1cb3e8;
                                        }
                                    }
                                    
                                }
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
                            .xinzengclass{
                                color: #4ddac6;
                                background: rgba(77,218,198,0.2);
                                padding: 0 5px;
                            }
                            .biangengclass{
                                color: #1ed2fb;
                                background: rgba(30,210,251,0.2);
                                padding: 0 5px;
                            }
                            .kongxianclass{
                                color: #4ddac6;
                                background: rgba(30,210,251,0.2);
                                padding: 0 5px;
                            }
                            .zhanyongclass{
                                color: #ff8161;;
                                background: rgba(255,129,97,0.2);
                                padding: 0 5px;
                            }
                            .iconfont{
                                margin-right: 4px;
                                cursor: pointer;
                            }
                            .el-checkbox{
                                .el-checkbox__input{
                                    .el-checkbox__inner{
                                        background: transparent;
                                        border: 1px solid #1cb3e8;
                                    }
                                }
                                .el-checkbox__input.is-checked{
                                    .el-checkbox__inner{
                                        background: rgba(33,139,193,0.44);
                                        border: 1px solid #1cb3e8;
                                    }
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

