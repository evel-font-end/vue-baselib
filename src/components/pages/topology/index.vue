<template>
    <div class='content'>
        <box-container :spinShow='spinShow1' :title="'拓补图1'" :toolsShow='false' class='bg-grey' :width="'48%'">
            <topology-style-1 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图2'" :toolsShow='false' class='bg-grey' :width="'48%'">
            <topology-style-2 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图3'" :toolsShow='false' class='bg-grey' :width="'48%'">
            <topology-style-3 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图4'" :toolsShow='false' class='bg-grey' :width="'48%'">
            <topology-style-4 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图5'" :toolsShow='false' class='bg-grey' :width="'48%'">
            <topology-style-5 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图6'" :toolsShow='false' class='bg-grey' :width="'48%'">
            <topology-style-6 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'拓补图7'" :toolsShow='false' class='bg-grey' :width="'100%'">
            <topology-style-7 />
        </box-container>
    </div>
</template>
<script>
import boxContainer from '../common/box-container-2'
import topology1 from '../../cell/topology/topology-style-1'
import topology2 from '../../cell/topology/topology-style-2'
import topology3 from '../../cell/topology/topology-style-3'
import topology4 from '../../cell/topology/topology-style-4'
import topology5 from '../../cell/topology/topology-style-5'
import topology6 from '../../cell/topology/topology-style-6'
import topology7 from '../../cell/topology/topology-style-7'
export default {
    name: 'TablePage',
    components: {
        'box-container': boxContainer,
        'topology-style-1': topology1,
        'topology-style-2': topology2,
        'topology-style-3': topology3,
        'topology-style-4': topology4,
        'topology-style-5': topology5,
        'topology-style-6': topology6,
        'topology-style-7': topology7,

    },
    data() {
        return {
            eventListFetchData: [],
            spinShow1: false,
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
@import './topology.scss';
</style>

