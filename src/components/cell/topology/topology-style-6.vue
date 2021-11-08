<template>
    <div class="topology6" id="topology6">
        <div class="chartBox">
            <div id="cirCleChart" ref="cirCleChart" class="cirCle_chart"></div>
            <div class="circleText">{{ choiceProvince }}</div>
          </div>
    </div>
</template>

<script>
import echarts from "echarts"; //引入echarts

export default {
    name: "TopologyStyle6",
    props: {
        choiceProvince:{
            type: String,
            default: "全国"
        },
        echartsDataList:{
            type: Array,
        }
    },
    data(){
        return{
            
        }
    },
    mounted(){
        this.initCircle()
    },
    methods:{
        initCircle() {
            let provinceData = this.echartsDataList
            this.$nextTick(() => {
                let chartDom = this.$refs.cirCleChart;
                if (!chartDom) return;
                let myChart = echarts.init(chartDom);
                let option = {
                    series: [
                        {
                            name: "title",
                            type: "pie",
                            hoverAnimation: false,
                            radius: ["20%", "20%"],
                            center: ["50%", "50%"],
                            color: "#f24156",
                            label: {
                                normal: {
                                formatter: function(params) {
                                    var str = "";
                                    if (
                                    params.data &&
                                    params.data.name &&
                                    params.data.numValue
                                    ) {
                                    str =
                                        "{c|" +
                                        params.data.value +
                                        "}" +
                                        "{a|" +
                                        params.data.name +
                                        "}" +
                                        "{b|" +
                                        params.data.numValue +
                                        "}";
                                    } else {
                                        str = "";
                                    }
                                    return str;
                                },
                                rich: {
                                    a: {
                                        fontSize: 12,
                                        fontFamily: "PingFangSC",
                                        fontWeight: 400,
                                        color: "#FFFFFF",
                                        padding: [0, 5, 0, 5]
                                    },
                                    b: {
                                        backgroundColor: "#094C65",
                                        color: "#FFFFFF",
                                        fontSize: 12,
                                        fontFamily: "PingFangSC",
                                        fontWeight: 400,
                                        padding: [1, 4, 1, 4],
                                        textAlign: "center"
                                    },
                                    c: {
                                        backgroundColor: "rgba(78,152,179,0.19)",
                                        width: 10,
                                        height: 10,
                                        borderWidth: 1,
                                        borderRadius: 50,
                                        borderColor: "#00D0DD",
                                        color: "transparent"
                                    }
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length: 90,
                                length2: 45,
                                smooth: true,
                                lineStyle: {
                                    type: "solid",
                                    width: 1,
                                    color: new echarts.graphic.LinearGradient(0,0,0,1,[
                                        {
                                            offset: 0,
                                            color: "rgba(0,218,255,0)" // 0% 处的颜色
                                        },
                                        {
                                            offset: 0.5,
                                            color: "rgba(0,218,255,1)" // 50% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0,218,255,0)" // 100% 处的颜色
                                        }
                                    ],false),
                                    shadowColor: "#fff",
                                    shadowBlur: 0,
                                    shadowOffsetX: 0.5,
                                    shadowOffsetY: 0.5
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: "#d4d5d6",
                                borderWidth: 1
                            }
                        },
                        data: provinceData
                        }
                    ]
                };
                option && myChart.setOption(option);
                window.onresize = myChart.resize;
            });
        },
    }
};
</script>

<style lang="scss" scoped>
#topology6.topology6 {
    position: relative;
    .chartBox {
        position: relative;
        .cirCle_chart {
            width: 100%;
            height: 330px;
        }
        .circleText {
            width: 100px;
            height: 100px;
            background: url("../../../assets/image/circle_bg.png") center center no-repeat;
            background-size: 100% 100%;
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 16px;
            font-family: PingFangSC;
            font-weight: 600;
            text-align: center;
            color: #ffffff;
            line-height: 100px;
            z-index: 99;
        }
    }
}
</style>

