<template>
    <div class='content'>
        <box-container class='bg-grey' :title="'面包屑1'" :spinShow='crumbShow1' :width="'33%'" @showOptionHandler='showOption("crumbs1")'>
            <crumbs-style-1 :breadcrumbList="breadcrumbListData1" :crumbsIcon="'/'" ref="crumbs1"></crumbs-style-1>
        </box-container>
        <box-container class='bg-grey' :title="'面包屑2'" :spinShow='crumbShow2' :width="'40%'" @showOptionHandler='showOption("crumbs2")'>
            <crumbs-style-2 :breadcrumbList="breadcrumbListData2" :crumbsIcon="'el-icon-arrow-right'" ref="crumbs2"></crumbs-style-2>
        </box-container>
    </div>
</template>
<script>
import boxContainer from '../common/box-container-2'
import crumbs1 from '../../cell/crumbs/crumbs-style-1'
import crumbs2 from '../../cell/crumbs/crumbs-style-2'
export default {
    name: 'Crumbs',
    components: {
        'box-container': boxContainer,
        'crumbs-style-1': crumbs1,
        'crumbs-style-2': crumbs2
    },
    data() {
        return {
            getCrumb1Data: [],
            getCrumb2Data: [],
            crumbShow1: false,
            crumbShow2: false,
            breadcrumbListData1: [
                { path: '/bar', title: '混合图表1' },
                { path: '/crumbs', title: '面包屑1' },
            ],
            breadcrumbListData2: [
                { path: '/line', title: '折线图' },
                { path: '/crumbs', title: '面包屑' },
            ],
        }
    },
    watch: {
    },
    mounted(){
    },
    methods: {
        showOption(ref) {
            this.$store.commit('UPDATE_DIALOG_SHOW', this.$refs[ref].$options._componentTag);
        },
    },
}
</script>
<style lang="scss" scoped>

@import './crumbs.scss';

</style>

