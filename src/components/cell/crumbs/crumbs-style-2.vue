<template>
    <div class='crumbs2-container'>
        <div class="breadcumb-item">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="(item,index) in breadcrumbList1" :to="item.path" :key="index" >
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
        breadcrumbList1: {
            type: Array,
            default: () => {
                return [
                    { path: '/bar', title: '混合图表' },
                    { path: '/line', title: '折线图' },
                    { path: '/crumbs', title: '面包屑' },
                ]
            },
        },
    },
    data() {
        return {
            breadcrumbList: [],
        }
    },
    watch: {
        $route: {
            handler(val, oldval) {
                this.breadcrumbList = this.getBreadcrumbList(val);
            },
            deep: true,
            immediate: true,
        },
    },
    mounted() {
    },
    methods: {
        // watchBreadcrumb(matchedRoutes) {
        //     console.log('matchedRoutes', matchedRoutes)
        //     let matched = [];
        //     if (matchedRoutes.length) {
        //         matched = matchedRoutes.filter((item) => {
        //             item.meta && item.meta.title && item.meta.breadcrumb !== false
        //         })
        //     }
        //     return matched;
        // },
        getBreadcrumbList(routerInformation){
            let crumbsList = []
            let matchedRoutes = routerInformation.matched
            if(matchedRoutes.length){
                matchedRoutes.map((item)=>{
                    console.log(item)
                    crumbsList.push(
                        {
                            path: item.path,
                            title: item.meta.title
                        }
                    )
                })
            }
            return crumbsList;
        }
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

