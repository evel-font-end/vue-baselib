<template>
    <div class="suspension6" id="suspension6">
        <div class="box">
            <div class="item" v-for="(item, index) in dataList" :key="index">
                <div class="top">
                    <div class="left">
                        <i :class="item.icon"></i>
                        <span>{{item.title}}</span>
                    </div>
                    <div class="right">
                        <span :class="[item.text=='IDC'?'idc':'mv']">{{item.text}}</span>
                    </div>
                </div>
                <div class="content">
                    <div class="contentitem" v-for="(contentItem, contentIndex) in item.contentList" :key="contentIndex">
                        <span class="name">{{contentItem.name}}</span>
                        <span class="num">{{contentItem.num}}</span>
                    </div>
                    <div class="borderbottom"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "SuspensionStyle6",
    props: {
    },
    data(){
        return{
            dataList:[
                {
                    icon:"",
                    title:"阿里巴巴",
                    text:"IDC",
                    contentList:[
                        {
                            name:"宽带",
                            num:"48137.3",
                        },
                        {
                            name:"流出流量",
                            num:"4824.6",
                        },
                        {
                            name:"流出带宽利用率",
                            num:"10.02%",
                        },
                        {
                            name:"流入流量",
                            num:"18755.87",
                        },
                        {
                            name:"流入带宽利用率",
                            num:"38.96%",
                        },
                    ]
                },
                {
                    icon:"",
                    title:"深圳平安通信科技…",
                    text:"MV",
                    contentList:[
                        {
                            name:"宽带",
                            num:"48137.3",
                        },
                        {
                            name:"流出流量",
                            num:"4824.6",
                        },
                    ]
                },
            ],
        }
    },
    mounted(){
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
#suspension6.suspension6 {
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        width: 221px;
        height: 280px;
        background: rgba(4,55,92,0.80);
        border: 1px solid #0893d1;
        padding: 10px;
        .item{
            .top{
                display: flex;
                justify-content: space-between;
                .left{
                    span{
                        font-size: 14px;
                        font-family: PingFangSC, PingFangSC-Semibold;
                        font-weight: 600;
                        text-align: left;
                        color: #e0e8ed;
                        line-height: 20px;
                    }
                }
                .right{
                    .idc{
                        display: inline-block;
                        width: 40px;
                        height: 20px;
                        background: #055689;
                        text-align: center;
                        border-radius: 3px;
                        font-size: 14px;
                        font-family: PingFangSC, PingFangSC-Regular;
                        font-weight: 400;
                        color: #00e7fa;
                        line-height: 20px;
                    }
                    .mv{
                        display: inline-block;
                        width: 40px;
                        height: 20px;
                        background: #096780;
                        text-align: center;
                        border-radius: 3px;
                        font-size: 14px;
                        font-family: PingFangSC, PingFangSC-Regular;
                        font-weight: 400;
                        color: #00ffe9;
                        line-height: 20px;
                    }
                }
            }
            .content{
                padding: 0;
                .contentitem{
                    margin-top: 10px;
                    display: flex;
                    justify-content: space-between;
                    .name{
                        font-size: 14px;
                        font-family: PingFangSC, PingFangSC-Regular;
                        font-weight: 400;
                        text-align: left;
                        color: #b7e9ff;
                        line-height: 16px;
                    }
                    .num{
                        font-size: 14px;
                        font-family: PingFangSC, PingFangSC-Regular;
                        font-weight: 400;
                        text-align: right;
                        color: #ffffff;
                        line-height: 18px;
                    }
                }
                .borderbottom{
                    margin: 10px 0 ;
                    background: rgba(4,55,92,0.80);
                    border: 1px solid #0893d1;
                }
            }
            &:last-child{
                .borderbottom{
                    display: none;
                }
            }
        }
    }
}
</style>

