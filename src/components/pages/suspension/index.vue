<template>
    <div class='content'>
        <box-container :spinShow='spinShow1' :title="'悬浮框一'" :toolsShow='false' class='bg-grey' :width="'23%'">
            <suspension-style-1 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'悬浮框二'" :toolsShow='false' class='bg-grey' :width="'23%'">
            <suspension-style-2 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'悬浮框三'" :toolsShow='false' class='bg-grey' :width="'23%'">
            <suspension-style-3 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'悬浮框四'" :toolsShow='false' class='bg-grey' :width="'23%'">
            <suspension-style-4 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'悬浮框五'" :toolsShow='false' class='bg-grey' :width="'23%'">
            <suspension-style-5 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'悬浮框六'" :toolsShow='false' class='bg-grey' :width="'23%'">
            <suspension-style-6 />
        </box-container>
        <box-container :spinShow='spinShow1' :title="'悬浮框七'" :toolsShow='false' class='bg-grey' :width="'25%'">
            <suspension-style-7 />
        </box-container>
    </div>
</template>
<script>
import boxContainer from '../common/box-container-2'
import Suspension1 from '../../cell/suspension/suspension-style-1'
import Suspension2 from '../../cell/suspension/suspension-style-2'
import Suspension3 from '../../cell/suspension/suspension-style-3'
import Suspension4 from '../../cell/suspension/suspension-style-4'
import Suspension5 from '../../cell/suspension/suspension-style-5'
import Suspension6 from '../../cell/suspension/suspension-style-6'
import Suspension7 from '../../cell/suspension/suspension-style-7'
export default {
    name: 'SuspensionPage',
    components: {
        'box-container': boxContainer,
        'suspension-style-1': Suspension1,
        'suspension-style-2': Suspension2,
        'suspension-style-3': Suspension3,
        'suspension-style-4': Suspension4,
        'suspension-style-5': Suspension5,
        'suspension-style-6': Suspension6,
        'suspension-style-7': Suspension7,
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
@import './suspension.scss';
</style>

