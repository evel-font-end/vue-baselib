<template>
    <div class="suspension3" id="suspension3">
        <div class="box">
            <div class="title">{{dataList.title}}</div>
            <div class="content">
                <div class="item" v-for="(item,index) in dataList.list" :key="index">
                    <div class="name">{{item.name}}</div>
                    <div class="num">{{item.num}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SuspensionStyle3",
    props: {
    },
    data(){
        return{
            dataList:{
                title: "上海市",
                list:[
                    {
                        name:"发送峰值(Gbit/s)",
                        num:"330.47",
                    },
                    {
                        name:"接受峰值(Gbit/s)",
                        num:"7485.47",
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
#suspension3.suspension3 {
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        width: 207px;
        height: 257px;
        background: url("../../../assets/image/suspension3_bg.png") no-repeat;
        padding: 12px;
        padding-bottom: 22px;
        .title{
            text-align: center;
            font-size: 20px;
            font-family: PingFangSC, PingFangSC-Semibold;
            font-weight: 600;
            text-align: center;
            color: #a0fbff;
            border: 1px solid #1b5b99;
            background: linear-gradient(270deg,rgba(1,38,62,0.00) 1%, rgba(2,78,113,0.86) 49%, rgba(2,78,113,0.00));
        }
        .content{
            padding: 0;
            margin-top: 20px;
            .item{
                margin-bottom: 20px;
                text-align: center;
                &:last-child{
                    margin-bottom: 0;
                }
                .name{
                    font-size: 18px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 25px;
                    margin-bottom: 3px;
                }
                .num{
                    font-size: 28px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    color: #ff836c;
                    line-height: 32px;
                }
            }
        }
    }
}
</style>

