<template>
    <div class="topology3" id="topology3">
        <ul>
            <li class="panel" v-for="(item, itemIndex) in dataList" :key="itemIndex">
                <div class="leftconter">
                    <img :src="item.image" :alt="item.title" />
                    <p>{{ item.title }}</p>
                </div>
                <div class="lines">
                    <div class="line-top">
                        <svg
                            width="43px"
                            height="59px"
                            viewBox="0 0 43 59"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>路径 4</title>
                            <defs>
                                <linearGradient
                                    x1="84.2449465%"
                                    y1="5.14410373%"
                                    x2="21.9985337%"
                                    y2="96.9865219%"
                                    id="linearGradient-1">
                                    <stop stop-color="#29BAFF" offset="0%"></stop>
                                    <stop
                                        stop-color="#989EFF"
                                        stop-opacity="0"
                                        offset="100%">
                                    </stop>
                                </linearGradient>
                            </defs>
                            <g
                                id="line"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd">
                                <path
                                    d="M-5,59 C5.1274103,59 13.8440918,51.8451018 15.8180777,41.9119342 L20.2349215,19.686219 C22.3935235,8.82405663 31.9254285,1 43,1 L43,1 L43,1"
                                    id="路径-4"
                                    stroke="url(#linearGradient-1)"
                                    stroke-width="2">
                                </path>
                            </g>
                        </svg>
                        <div class="ball1"></div>
                    </div>
                    <div class="line-bottom">
                        <svg
                            width="43px"
                            height="59px"
                            viewBox="0 0 43 59"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>路径 4</title>
                            <defs>
                                <linearGradient
                                    x1="84.2449465%"
                                    y1="5.14410373%"
                                    x2="21.9985337%"
                                    y2="96.9865219%"
                                    id="linearGradient-1">
                                    <stop stop-color="#29BAFF" offset="0%"></stop>
                                    <stop stop-color="#989EFF" stop-opacity="0" offset="100%">
                                    </stop>
                                </linearGradient>
                            </defs>
                            <g
                                id="line"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd">
                                <path
                                    d="M-5,58 C5.1274103,58 13.8440918,50.8451018 15.8180777,40.9119342 L20.2349215,18.686219 C22.3935235,7.82405663 31.9254285,2.03436579e-15 43,0 L43,0 L43,0"
                                    id="路径-4"
                                    stroke="url(#linearGradient-1)"
                                    stroke-width="2"
                                    transform="translate(19.000000, 29.000000) scale(1, -1) translate(-19.000000, -29.000000) ">
                                </path>
                            </g>
                        </svg>
                        <div class="ball2"></div>
                    </div>
                </div>
                <div class="sub_panel">
                    <div v-for="(subItem, subItemKey, subIndex) in item.subData" :key="subIndex" class="wrap">
                        <div class="trapezoid">
                            <div class="inner"></div>
                        </div>
                        <span :title="subItem">{{ subItem.title }}</span>
                        <span>{{ subItem.num }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "topology3",
    props: {
    },
    data(){
        return{
            dataList: {
                dataProcessing: {
                    title: "数据加工",
                    image: require("../../../assets/image/machining.png"),
                    subData:[
                        {
                            title:"算力规模",
                            num:"10个",
                        },
                        {
                            title:"已执行任务",
                            num:"20个",
                        },
                        {
                            title:"等待平均时延",
                            num:"29个",
                        },
                        {
                            title:"平均执行时长",
                            num:"119.57PiB",
                        },
                    ]
                },
                // dataStorage: {
                //     title: "数据存储",
                //     image: require("../../../assets/image/storage.png"),
                //     subData: ['子集群数','管理节点数','在线节点数','总空间']
                // },
                // dataServer: {
                //     title: "数据服务",
                //     image: require("../../../assets/image/service.png"),
                //     subData: ['数据服务总量','API服务总量','文件服务总量']
                // },
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
#topology3.topology3 {
    margin: 0 auto;
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
            display: flex;
            color: white;
            align-items: center;
            margin: 0 auto;
            .leftconter{
                img {
                    width: 110px;
                    margin-bottom: 6px;
                }
                p{
                    font-size: 20px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    color: #ffffff;
                    text-align: center;
                }
            }
            .sub_panel {
                .wrap {
                    position: relative;
                    box-sizing: content-box;
                    font-size: 18px;
                    display: flex;
                    justify-content: space-between;
                    width: 178px;
                    height: 32px;
                    line-height: 32px;
                    background: #02335f;
                    box-shadow: 0px 0px 17px 0px rgba(68, 128, 217, 0.5) inset;
                    padding: 0 12px 0 14px;
                    margin-bottom: 10px;
                    span {
                        overflow: hidden; //超出的文本隐藏
                        text-overflow: ellipsis; //溢出用省略号显示
                        white-space: nowrap; //溢出不换行
                    }
                    span:nth-of-type(1) {
                        color: #b7e9ffff;
                        overflow:hidden; //超出的文本隐藏
                        text-overflow:ellipsis; //溢出用省略号显示
                        white-space:nowrap; //溢出不换行
                        font-weight: bold;
                    }
                    &:last-child {
                        margin-bottom: 0;
                    }
                    .trapezoid {
                        background: transparent;
                        border-top: 4px solid transparent;
                        border-bottom: 4px solid transparent;
                        border-left: 4px solid #2efbfaff;
                        border-right: 4px solid transparent;
                        height: 24px;
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                        .inner {
                            width: 20px;
                            height: 20px;
                        }
                    }
                }
            }

            .lines {
                .line-top {
                    position: relative;
                    .ball1 {
                        width: 8px;
                        height: 8px;
                        background: #6de1ff;
                        border-radius: 50%;
                        position: absolute;
                        /* right: -8px;
                            top: 80px; */
                        right: 35px;
                        top: 0px;
                        offset-path: path(
                            "M-5,59 C5.1274103,59 13.8440918,51.8451018 15.8180777,41.9119342 L20.2349215,19.686219 C22.3935235,8.82405663 31.9254285,1 43,1 L43,1 L43,1"
                        );
                        offset-distance: 0%;
                        animation: ball1 2s linear infinite;
                    }
                }
                .line-bottom {
                    position: relative;
                    .ball2 {
                        width: 8px;
                        height: 8px;
                        background: #6de1ff;
                        border-radius: 50%;
                        position: absolute;
                        /* right: -8px;
                            top: 80px; */
                        right: 40px;
                        top: 0px;
                        offset-path: path(
                            "M0,1 C8.83087866,1 16.4187988,7.26836478 18.0856385,15.9405077 L22.7624808,40.2729289 C24.8059773,50.9047213 33.9874064,58.6720066 44.8108395,58.9253512 L48,59 L48,59"
                        );
                        offset-distance: 0%;
                        animation: ball2 2s linear infinite;
                    }
                }
            }

            &:last-child {
                .sub_panel {
                    .wrap {
                    padding: 7px 12px 7px 14px;
                    }
                }
                .right_line {
                    height: 111px;
                }
            }
            &:first-child {
                .wrap {
                    width: 208px;
                }
            }
        }
    }
  
}
</style>

