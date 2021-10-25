<template>
    <div class="suspension2" id="suspension2">
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
    name: "suspension2",
    props: {
    },
    data(){
        return{
            dataList:{
                title: "山西省",
                list:[
                    {
                        name:"设备数量",
                        num:"1045",
                    },
                    {
                        name:"设备总容量G",
                        num:"940",
                    },
                    {
                        name:"设备占用容量G",
                        num:"384",
                    },
                    {
                        name:"设备容量占用率(%)",
                        num:"74.5%",
                    },
                    {
                        name:"设备端口数量",
                        num:"8490",
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
#suspension2.suspension2 {
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        width: 253px;
        height: 251px;
        background: url("../../../assets/image/suspension2_bg.png") no-repeat;
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
            .item{
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                span{
                    font-size: 18px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    color: #ffffff;
                }
            }
        }
    }
}
</style>

