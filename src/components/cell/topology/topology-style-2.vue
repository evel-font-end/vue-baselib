<template>
    <div class="topology2" id="topology2">
        <ul>
            <li class="panel" v-for="(item, itemIndex) in dataList" :key="itemIndex">
                <img :src="item.image" :alt="item.title">
                <div class="lines">
                    <div class="left_line">
                        <div class="circle"></div>
                        <div class="line"></div>
                        <div class="circle"></div>
                    </div>
                    <div class="right_line"></div>
                </div>
                <div class="sub_panel">
                    <div v-for="(subItem, subIndex) in item.subData" :key="subIndex" class="wrap">
                        <div class="sub_panel-content" @click="subItemClickFn(subIndex)">
                            <div class="sub-content-left">
                                <img :src="subItem.image" /> 
                                <div class="sub-content">
                                    <div class="sub-count"> {{subItem.count}} </div>
                                    <div class="sub-label"> {{ subItem.title }} </div>
                                </div> 
                            </div>
                        </div>
                        <div class="sub_heng" v-if="activeIndex==subIndex">
                            <div class="circle"></div>
                            <div class="line"></div>
                            <div class="circle"></div>
                        </div>
                        <div class="sub_shu"></div>
                        
                    </div>
                    <div class="sub_right">
                        <div class="sub_rightitem" v-for="(subrightItem, subrightIndex) in item.listData[activeIndex].list" :key="subrightIndex">
                            <div>{{subrightItem.text}}</div>
                            <div class="sub_rightitem_heng"></div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "TopologyStyle2",
    props: {
        activeIndex:{
            type: Number,
            default: 0
        },
        dataList:{
            type: Array,
        }
    },
    data(){
        return{
            
        }
    },
    mounted(){
    },
    methods:{
        subItemClickFn(index){
            this.$emit('subItem2ClickFn', index)
        }
    }
};
</script>

<style lang="scss" scoped>
#topology2.topology2 {
    margin: 0 auto;
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    li {
        margin-left: 20%;
        margin-top: 10%;
        display: flex;
        color: white;
        align-items: center;
        img {
            margin-bottom: 6px;
        }
        .sub_panel {
            position: relative;
            .wrap {
                position: relative;
                box-sizing: content-box;
                font-size: 18px;
                display: flex;
                justify-content: space-between;
                height: 68px;
                padding: 0 12px 0 0;
                .sub_panel-content {
                    display: flex;
                    &:hover {
                        content: attr(title);
                        .sub_panel-mack {
                            display: block;
                        }
                    }
                    .sub-content-left {
                        display: flex;
                        background: url("../../../assets/image/serve-bg.png") center center no-repeat;
                        background-size: 100%;
                        width: 142px;
                        img{
                            width: 50px;
                            height: 45px;
                            margin-left: 10px;
                            margin-bottom: -10px;
                        }
                        .sub-content{
                            margin-left: 15px;
                            .sub-count {
                                font-size: 18px;
                                font-family: YouSheBiaoTiHei;
                                text-align: center;
                                color: #fff;
                                line-height: 24px;
                                text-shadow: 0px 4px 7px 0px rgba(76,19,75,0.47); 
                            }
                            .sub-label {
                                font-size: 14px;
                                font-family: PingFangSC, PingFangSC-Semibold;
                                font-weight: 600;
                                line-height: 20px;
                            }
                        }
                    }
                    .sub_panel-mack {
                        display: none;
                        position: absolute;
                        top: 40px;
                        padding: 10px;
                        color: #fff;
                        font-size: 12px;
                        font-family: PingFangSC, PingFangSC-Regular;
                        font-weight: 400;
                        line-height: 17px;
                        z-index: 99;
                        background: linear-gradient(270deg,rgba(1,17,23,0.67) 99%, rgba(0,35,49,0.93) 48%, rgba(0,13,19,0.69));
                    }
                }
                .sub_heng {
                    z-index: 1;
                    position: absolute;
                    width: 45px;
                    height: 14px;
                    opacity: 1;
                    border-radius: 7px;
                    left: 140px;
                    top: 50%;
                    transform: translateY(-60%);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .circle {
                        width: 7px;
                        height: 7px;
                        background: #6de1ff;
                        border-radius: 50%;
                    }
                    .line {
                        flex: 1;
                        border-top: 2px dotted #6de1ff;
                    }
                }
                .sub_shu{
                    position: absolute;
                    height: 100%;
                    width: 35px;
                    left: 181px;
                    top: 0;
                    border-left: 2px dotted #6de1ff;
                }
            }
            .sub_right{
                position: absolute;
                right: -116px;
                top: 0;
                margin-left: 80px;
                width: 48px;
                display: flex;
                flex-wrap: wrap;
                transform: translateY(-23px);
                .sub_rightitem{
                    position: relative;
                    width: 100%;
                    text-align: center;
                    height: 46px;
                    margin-bottom: 5px;
                    background: url("../../../assets/image/subright_bg.png") center center no-repeat;
                    .sub_rightitem_heng{
                        position: absolute;
                        top: 50%;
                        left: -40px;
                        height: 1px;
                        width: 34px;
                        transform: translateY(-50%);
                        border-top: 2px dotted #6de1ff;
                    }
                }
            }
        }
        .lines {
            position: relative;
            padding-left: 40px;
            .left_line {
                z-index: 1;
                position: absolute;
                width: 45px;
                height: 14px;
                opacity: 1;
                border-radius: 7px;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                justify-content: space-between;
                .circle {
                    width: 7px;
                    height: 7px;
                    background: #6de1ff;
                    border-radius: 50%;
                }
                .line {
                    flex: 1;
                    border-top: 2px dotted #6de1ff;
                }
            }
            .right_line {
                position: relative;
                z-index: 2;
                border: 2px dotted #6DE1FFFF;
                border-right: none;
                width: 34px;
                height: 125px;
            }
        }
        
        .sub_panel-child {
            .wrap-child {
                position: relative;
                box-sizing: content-box;
                display: flex;
                justify-content: space-between;
                width: 300px;
                height: 30px;
                margin-bottom: 4px ;
                .sub-child {
                    font-size: 14px;
                    width: 100%;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    color: #fff;
                    text-align: center;
                    display: flex;
                    .sub-list{
                        margin: 0 4px 0 0;
                        height: 30px;
                        line-height: 30px;
                        background: #003759;
                        text-align: left;
                        padding: 0 5px;
                        span{
                            color: #A5D2FF;
                            &:last-child {
                            float: right;
                            color: #fff;
                            }
                        }
                    }
                    .sub-gaojin {
                        width: 196px;
                    }
                    .sub-lianjie {
                        width: 96px;
                    }
                    .sub-neicun {
                        width: 96px;
                    }
                    .sub-cpu {
                        width: 96px;
                    }
                    .sub-cunchu {
                        width: 96px;
                    }
                }
            }
        }
        .lines-child {
            position: relative;
            padding-left: 20px;
            .left_line-child {
                z-index: 1;
                position: absolute;
                width: 27px;
                height: 14px;
                opacity: 1;
                border-radius: 7px;
                left: -3.5px;
                display: flex;
                top: 50%;
                transform: translateY(-50%);
                .circle-child {
                    width: 7px;
                    height: 7px;
                    background: #6de1ff;
                    border-radius: 50%;
                }
                .line-child {
                    flex: 1;
                    border-top: 2px solid #6de1ff;
                    margin-top: 2px;
                }
            }
            .right_line-child {
                position: relative;
                z-index: 2;
                border-left: 2px solid #6DE1FFFF;
                width: 24px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column;
                margin-top: 11px;
                .line-child {
                    align-items: center;
                    justify-content: space-between;
                    width: 24px;
                    border-top: 2px solid #6de1ff;
                }
            }
        }
    }
}
</style>

