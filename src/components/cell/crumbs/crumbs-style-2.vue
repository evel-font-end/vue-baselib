<template>
    <div class='crumbs2-container'>
        <div class="breadcumb-item">
            <el-breadcrumb :separator-class="crumbsIcon">
                <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :to="item.path" :key="index" >
                    {{ item.title }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<script>
export default {
    name:"CrumbsStyle2",
    props: {
        // 测试数据
        breadcrumbList: {
            type: Array,
            default: () => {
                return [
                    { path: '/bar', title: '混合图表' },
                    { path: '/line', title: '折线图' },
                    { path: '/crumbs', title: '面包屑' },
                ]
            },
        },
        crumbsIcon:{
            type: String,
            default:"el-icon-arrow-right"
        }
    },
    data() {
        return {
        }
    },
    watch: {
    },
    mounted() {
    },
    methods: {
    },
}
</script>
<style lang="scss" scoped>
.crumbs2-container{
    width: 100%;
    height: 100%;
    .breadcumb-item{
        /deep/ .el-breadcrumb{
            width: auto;
            .el-breadcrumb__item{
                .el-breadcrumb__inner{
                    font-size: 14px;
                    font-weight: 400;
                    color: #9bcdff;
                    line-height: 20px;
                }
                &:last-child{
                    .el-breadcrumb__inner{
                        font-size: 14px;
                        font-weight: 400;
                        color: #36B7FD;
                        line-height: 20px;
                    }
                }
            }
        }
        
    }
    
}
</style>

