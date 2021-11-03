<template>
    <div class='crumbs-container'>
        <div class="breadcumb-item">
            <el-breadcrumb :separator="crumbsIcon">
                <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :to="item.path" :key="index" >
                    {{ item.title }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<script>
export default {
    name:"CrumbsStyle1",
    props: {
        // 测试数据
        breadcrumbList: {
            type: Array,
            default: () => {
                return [
                    { path: '/bar', title: '混合图表' },
                    { path: '/line', title: '折线图' },
                    { path: '/pie', title: '饼状图' },
                    { path: '/board', title: '仪表盘' },
                    { path: '/crumbs', title: '面包屑' },
                ]
            },
        },
        crumbsIcon:{
            type: String,
            default:"/"
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
.crumbs-container{
    width: 100%;
    height: 100%;
    /deep/ .breadcumb-item{
        .el-breadcrumb{
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

