<template>
    <div class="suspension5" id="suspension5">
        <div class="box">
            <div class="item" v-for="(item, index) in dataList" :key="index">
                <div class="top">
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </div>
                <div class="content">
                    <div class="contentItem" v-for="(contentItem, contentIndex) in item.list" :key="contentIndex">
                        <div class="name">{{contentItem.name}}</div>
                        <div class="num">{{contentItem.num}}</div>
                    </div>
                </div>
                <div class="borderbox"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SuspensionStyle5",
    props: {
    },
    data(){
        return{
            dataList:[
                {
                    icon:"icon-jizhan1",
                    title:"2G",
                    list:[
                        {
                            name:"基站",
                            num:"89",
                        },
                        {
                            name:"小区",
                            num:"78",
                        },
                        {
                            name:"BBU",
                            num:"89",
                        },
                        {
                            name:"RU",
                            num:"90",
                        },
                    ]
                },
                {
                    icon:"icon-jizhan1",
                    title:"3G",
                    list:[
                        {
                            name:"基站",
                            num:"89",
                        },
                        {
                            name:"小区",
                            num:"78",
                        },
                        {
                            name:"BBU",
                            num:"89",
                        },
                        {
                            name:"RU",
                            num:"90",
                        },
                    ]
                },
                {
                    icon:"icon-jizhan1",
                    title:"4G",
                    list:[
                        {
                            name:"基站",
                            num:"89",
                        },
                        {
                            name:"小区",
                            num:"78",
                        },
                        {
                            name:"BBU",
                            num:"89",
                        },
                        {
                            name:"RU",
                            num:"90",
                        },
                    ]
                },
            ]
        }
    },
    mounted(){
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
#suspension5.suspension5 {
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        width: 232px;
        height: 250px;
        background: url("../../../assets/image/suspension5_bg.png") no-repeat;
        padding: 14px;
        padding-right: 38px;
        .item{
            margin-bottom: 10px;
            .top{
                span{
                    font-size: 16px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 22px;
                }
            }
            .content{
                padding: 0;
                display: flex;
                justify-content: space-between;
                .contentItem{
                    .name{
                        font-size: 14px;
                        font-family: PingFangSC, PingFangSC-Regular;
                        font-weight: 400;
                        color: #b7e9ff;
                        line-height: 20px;
                    }
                    .num{
                        font-size: 14px;
                        font-family: PingFangSC, PingFangSC-Regular;
                        font-weight: 400;
                        color: #ffffff;
                        line-height: 20px;
                    }
                }
            }
            .borderbox{
                margin-top: 5px;
                height: 1px;
                opacity: 0.5;
                border: 1px solid #1a88b8;
            }
            &:last-child{
                margin-bottom: 0;
                .borderbox{
                    display: none;
                }
            }
        }
    }
}
</style>

