<template>
    <div class='content'>
        <box-container class='bg-grey' :title="'面包屑1'" :spinShow='crumbShow1' :width="'calc(32.3% - 13.3px)'" @showOptionHandler='showOption("board2")'>
            <crumbs-style-1></crumbs-style-1>
        </box-container>
        <box-container class='bg-grey' :title="'面包屑2'" :spinShow='crumbShow2' :width="'40%'" @showOptionHandler='showOption("board3")'>
            <crumbs-style-2></crumbs-style-2>
            
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
        }
    },
    created() {
        // const _this = this
        // pie-style-1 fetch data
        // this.$http.get('/pie/eventTypeSource')
        //   .then(res => {
        //     if (res.state && res.data) {
        //       this.eventTypeFetchData = res.data
        //       this.spinShow1 = false
        //     }
        //   })
        //   .catch(err => {
        //     console.log(err)
        //     this.$fetchMock('/static/mock/pie/eventTypeSource.json')
        //       .then(res => {
        //         this.eventTypeFetchData = res
        //         this.spinShow1 = false
        //       })
        //   })
    },
    methods: {
        showOption(ref) {
            console.log(JSON.parse(JSON.stringify(this.$refs[ref].option)))
        },
    },
}
</script>
<style lang="scss" scoped>

@import './crumbs.scss';

</style>

