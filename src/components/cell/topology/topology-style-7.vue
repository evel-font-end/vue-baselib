<template>
    <div class="topology7" id="topology7">
        <div class="web_present">
            <el-row type="flex" justify="center" :gutter="50">
                <el-col v-for="(listItem, listIndex) in (webPreentList)" :key="listIndex" :span="listItem.span">
                    <div :class="listItem.classOption">
                        <div class="content-text">
                            <p class="p1">{{listItem.num}}</p>
                            <p class="p2">{{listItem.name}}</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

export default {
    name: "TopologyStyle7",
    components:{
    },
    props: {
        webPreentList:{
            type: Array,
            default: [
                {name: '任务平均执行时长', num: '9.75min', span: 3, classOption:"grid-net-content-side"},
                {name: '已用空间', num: '69.92PiB', span: 4, classOption:"grid-net-content"},
                {name: '总空间', num: '119.57PiB', span: 5, classOption:"grid-net-center"},
                {name: '正在执行任务', num: '374个', span: 4, classOption:"grid-net-content"},
                {name: '等待平均时延', num: '3.57s', span: 3, classOption:"grid-net-content-side"}
            ]
        }
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
#topology7.topology7{
    .web_present{
        color: #fff;
        width: 100%;
        height: 214px;
        background: url('../../../assets/image/net-bg.png') no-repeat center;
        .grid-net-center {
            position: relative;
            height: 210px;
            background: url('../../../assets/image/center-time.png') no-repeat center;
            background-size: contain;
            .content-text {
                display: inline-block;
                position: absolute;
                top: 20%;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                text-align: center;
                .p1 {
                    font-size: 44px;
                    font-weight: 700;
                }
                .p2 {
                    font-size: 26px;
                    font-weight: 600;
                }
                &::before{
                    content: '';
                    position: absolute;
                    bottom: 30px;
                    left: -40px;
                    width: 45px;
                    height: 45px;
                    background: url(../../../assets/image/center1-1.png) no-repeat center;
                    background-size: 100%;
                    animation-duration: 1s;
                    animation-fill-mode: both;
                    animation-iteration-count: infinite;
                    animation-name: leftAnimation;
                }
                &::after{
                    content: '';
                    position: absolute;
                    bottom: 30px;
                    right: -40px;
                    width: 45px;
                    height: 45px;
                    background: url(../../../assets/image/center1-2.png) no-repeat center;
                    background-size: 100%;
                    animation-duration: 1s;
                    animation-fill-mode: both;
                    animation-iteration-count: infinite;
                    animation-name: rightAnimation;
                }
            }
        }
        .grid-net-content {
            position: relative;
            height: 175px;
            background: url('../../../assets/image/other-time.png') no-repeat center;
            background-size: contain;
            .content-text {
                display: inline-block;
                position: absolute;
                top: 25%;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                text-align: center;
                .p1 {
                    font-size: 24px;
                    font-weight: 700;
                }

                .p2 {
                    width: 70px;
                    margin: 15px auto;
                    font-size: 16px;
                    font-weight: 600;
                }
            }
        }
        .grid-net-content-side {
            position: relative;
            height: 150px;
            background: url('../../../assets/image/other-time.png') no-repeat center;
            background-size: contain;
            .content-text {
                display: inline-block;
                position: absolute;
                top: 25%;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                text-align: center;
                .p1 {
                    font-size: 24px;
                    font-weight: 700;
                }
                .p2 {
                    margin-top: 15px;
                    font-size: 16px;
                    font-weight: 600;
                }
            }
        }
    }
    @keyframes leftAnimation {
        0%,20%,53%,80%,to {
            left: -40px;
        }

        40%,43% {
            left: -30px;
        }
        70% {
            left: -20px;
        }
        90% {
            left: -10px;
        }
    }
    @keyframes rightAnimation {
        0%,20%,53%,80%,to {
            right: -40px;
        }
        40%,43% {
            right: -30px;
        }
        70% {
            right: -20px;
        }
        90% {
            right: -10px;
        }
    }
}
</style>

