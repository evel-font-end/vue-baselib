<template>
    <div class="topology5" id="topology5">
        <ul>
            <li class="panel" v-for="(item, itemIndex) in dataList" :key="itemIndex">
              <div class="sub_panel">
                <div v-for="(subItem, subIndex) in item.subData" :key="subIndex" class="wrap">
                  <div class="sub_panel-content">
                    <div class="sub-content-left">
                      <img :src="subItem.image" /> 
                      <div>
                        <div class="sub-count"> {{subItem.count}} </div>
                        <div class="sub-label"> {{ subItem.title }} </div>
                      </div> 
                    </div>
                    <div class="lines-child">
                      <div class="left_line-child">
                        <div class="circle-child"></div>
                        <div class="line-child"></div>
                        <div class="circle-child"></div>
                      </div>
                      <div class="right_line-child">
                        <div class="line-child"></div>
                        <div class="line-child"></div>
                      </div>
                    </div>
                    <div class="sub_panel-child">
                      <div class="wrap-child">
                        <div class="sub-child">
                          <div class="sub-gaojin sub-list">
                            <span> 告警主机数 </span> 
                            <span> {{subItem.rightObj.gaojin}} </span>  
                          </div> 
                          <div class="sub-lianjie sub-list"> 
                            <span> 连接 </span> 
                            <span> {{subItem.rightObj.lianjie}} </span>  
                           </div> 
                        </div>
                      </div>
                      <div class="wrap-child">
                        <div class="sub-child">
                          <div class="sub-neicun sub-list">
                            <span> 内存 </span>
                            <span> {{subItem.rightObj.neicun}} </span>
                          </div> 
                          <div class="sub-cpu sub-list">
                            <span> cpu </span>
                            <span> {{subItem.rightObj.cpu}}</span>
                          </div> 
                          <div class="sub-cunchu sub-list">
                            <span> 存储 </span>
                            <span> {{subItem.rightObj.cunchu}}</span> 
                          </div> 
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </li>
          </ul>
    </div>
</template>

<script>
export default {
    name: "TopologyStyle5",
    props: {
    },
    data(){
        return{
            dataList: {
                "dataProcessing": {
                    title: "数据加工",
                    image: require('../../../assets/image/serve.png'),
                    subData: [
                        {
                            image: require('../../../assets/image/hexinqu.png'),
                            title: "核心区",
                            count: 135,
                            rightObj: {
                                gaojin: 0,
                                lianjie: 129,
                                neicun: '256G',
                                cpu: '8core*4',
                                cunchu : '100G',
                            }
                        },
                        {
                            image: require('../../../assets/image/yonghuqu.png'),
                            title: "用户区",
                            count: 502,
                            rightObj: {
                                gaojin: 0,
                                lianjie: 490,
                                neicun: '64G',
                                cpu: '16vCPU',
                                cunchu : '100G',
                            }
                        },
                        {
                            image: require('../../../assets/image/dmz.png'),
                            title: "DMZ",
                            count: 14,
                            rightObj: {
                                gaojin: 0,
                                lianjie: 9,
                                neicun: '16G',
                                cpu: '8vCPU',
                                cunchu : '100G',
                            }
                        }
                    ]
                },
            },
        }
    },
    mounted(){
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
#topology5.topology5 {
    margin: 0 auto;
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    li {
        margin: 0 auto;
        display: flex;
        color: white;
        align-items: center;
        img {
            width: 52px;
            height: 46px;
            margin-bottom: 6px;
        }
        .sub_panel {
            .wrap {
                position: relative;
                box-sizing: content-box;
                font-size: 18px;
                display: flex;
                justify-content: space-between;
                height: 68px;
                padding: 0 12px 0 14px;
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
                        text-align: center;
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
                            color: undefined;
                            line-height: 20px;
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
            }
        }
        .lines {
            position: relative;
            padding-left: 20px;
            .left_line {
                z-index: 1;
                position: absolute;
                width: 25px;
                height: 14px;
                opacity: 1;
                border-radius: 7px;
                left: -8px;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 7px;
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
                width: 24px;
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

