<template>
    <div class="suspension4" id="suspension4">
        <div class="box">
            <div class="title">{{dataList.title}}</div>
            <div class="content">
                <div v-for="(item, index) in dataList.list" :key="index" class="item">
                    <span>{{item.name}}</span>
                    <span>{{item.num}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SuspensionStyle4",
    props: {
    },
    data(){
        return{
            dataList:{
                title: "广播器",
                list:[
                    {
                        name:"设备总数",
                        num:"65",
                    },
                    {
                        name:"在线设备数",
                        num:"23",
                    },
                    {
                        name:"离线设备数",
                        num:"42",
                    },
                    {
                        name:"正在播放设备数",
                        num:"21",
                    },
                    {
                        name:"播放总次数",
                        num:"153",
                    },
                ]
            }
        }
    },
    mounted(){
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
#suspension4.suspension4 {
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        width: 223px;
        height: 226px;
        background: url("../../../assets/image/suspension4_bg.png") no-repeat;
        padding-bottom: 25px;
        padding-left: 33px;
        padding-right: 22px;
        padding-top: 20px;
        .title{
            font-size: 20px;
            font-family: PingFangSC, PingFangSC-Semibold;
            font-weight: 600;
            text-align: left;
            color: #4CDDFF;
            line-height: 28px;
            letter-spacing: 1px;
            text-shadow: 0px 2px 4px 0px #1c4696; 
        }
        .content{
            padding: 0;
            .item{
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                span{
                    font-size: 16px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    text-align: left;
                    color: #ffffff;
                    line-height: 22px;
                    letter-spacing: 1px;
                }
            }
        }
    }
}
</style>

