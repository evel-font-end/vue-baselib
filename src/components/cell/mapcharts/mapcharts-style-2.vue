<template>
    <div class="mapcharts2" id="mapcharts2">
        <div class="map" ref="chinaMap1" id="chinaMap1"></div>
    </div>
</template>

<script>
import echarts from "echarts"; //引入echarts
require("echarts/map/js/china");

export default {
    name: "MapchartsStyle2",
    props: {
        chinaDatas:{
            type: Array,
            default: [
                {
                    name: '黑龙江',
                    value: 84995
                },
                {
                    name: '内蒙古',
                    value: 84995
                },
                {
                    name: '吉林',
                    value: 84995
                },
                {
                    name: '北京市',
                    value: 84995
                },
                {
                    name: '辽宁',
                    value: 84995
                },
                {
                    name: '河北',
                    value: 84995
                },
                {
                    name: '天津',
                    value: 84995
                },
                {
                    name: '山西',
                    value: 84995
                },
                {
                    name: '陕西',
                    value: 84995
                },
                {
                    name: '甘肃',
                    value: 84995
                },
                {
                    name: '宁夏',
                    value: 84995
                },
                {
                    name: '青海',
                    value: 84995
                },
                {
                    name: '新疆',
                    value: 84995
                },
                {
                    name: '西藏',
                    value: 84995
                },
                {
                    name: '四川',
                    value: 84995
                },
                {
                    name: '重庆',
                    value: 84995
                },
                {
                    name: '山东',
                    value: 84995
                },
                {
                    name: '河南',
                    value: 84995
                },
                {
                    name: '江苏',
                    value: 84995
                },
                {
                    name: '安徽',
                    value: 84995
                },
                {
                    name: '湖北',
                    value: 84995
                },
                {
                    name: '浙江',
                    value: 84995
                },
                {
                    name: '福建',
                    value: 84995
                },
                {
                    name: '江西',
                    value: 84995
                },
                {
                    name: '湖南',
                    value: 84995
                },
                {
                    name: '贵州',
                    value: 84995
                },
                {
                    name: '云南',
                    value: 84995
                },
                {
                    name: '广东',
                    value: 84995
                },
                {
                    name: '广西',
                    value: 84995
                },
                {
                    name: '海南',
                    value: 84995
                },
                {
                    name: '上海',
                    value: 84995
                },
            ]
        },
        options:{
            type: Object,
            default: function (){
                return {
                    fromCity:{
                        city:"北京市",
                        toCoord:[116.4551,40.2539],
                    },
                    upperlabel: { //上层地图label配置
                        normal: {
                            show: true,
                            color: '#fff',
                        },
                        emphasis: {
                            show: true,
                            color: '#fff',
                        }
                    },
                    upperItemStyle: {
                        normal: {
                            areaColor:"rgba(8,164,230)",
                            borderColor: '#79e1ff', //省市边界线00fcff 516a89
                            borderWidth: 1,
                            globalCoord: true, // 缺省为 false
                        },
                        emphasis: {
                            areaColor:"#1ACFFF",
                        },
                    },
                    dadianRippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 5 //波纹圆环最大限制，值越大波纹越大
                    },
                    dadianLabel: {
                        normal: {
                            show: true,
                            position: 'top', //显示位置
                            offset: [0, 0], //偏移设置
                            formatter: function(params){ //圆环显示文字
                                let res = ""
                                let value = params.value[2]
                                res = `{color1|`+ value +`}`;
                                return res;
                            },
                            color: "#ffffff", //省份文字颜色
                            rich: {
                                color1: {
                                    color: '#FFFFFF',
                                    padding:[0,10,6,8],
                                    backgroundColor: 'rgba(0,92,151,0.86)',
                                    borderColor:"#3d9bd1",
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    opacity: 0.3,
                                    fontSize:28,
                                },
                            }
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    dadianSymbol: 'circle',
                    dadianSymbolSize: function(val){
                        return 8
                    },
                    dadianItemStyle: {
                        normal: {
                            color: '#FFFFFF',
                        }
                    },
                    tooltip: {
                        show: true ,
                        confine: "true",
                        extraCssText: 'z-index:10;',
                        formatter: function(params, ticket, callback) {
                            return `<div class="tipsbox2">
                                <div class="tipstitle">${params.name}</div>
                                <div class="tipscontent">
                                    <div class="tipsitem">
                                        <span>设备数量</span>
                                        <span>1045</span>
                                    </div>
                                    <div class="tipsitem">
                                        <span>设备数量</span>
                                        <span>1045</span>
                                    </div>
                                    <div class="tipsitem">
                                        <span>设备数量</span>
                                        <span>1045</span>
                                    </div>
                                    <div class="tipsitem">
                                        <span>设备数量</span>
                                        <span>1045</span>
                                    </div>
                                    <div class="tipsitem">
                                        <span>设备数量</span>
                                        <span>1045</span>
                                    </div>
                                    <div class="tipsitem">
                                        <span>设备数量</span>
                                        <span>1045</span>
                                    </div>
                                </div>
                            </div>`;
                        }
                    },
                    backgroundColor:"#132845", //地图画布背景色
                    geoLabel: {
                        normal: {
                            show: true,
                            color: '#fff',
                        },
                        emphasis: {
                            show: true,
                            color: '#fff',
                        }
                    },
                    geoItemStyle: {
                        normal: {
                            color: 'rgba(8,164,230)', //地图背景色
                            borderColor: '#79e1ff', //省市边界线00fcff 516a89
                            borderWidth: 1,
                            shadowColor:'rgb(58,115,192)', //地图阴影设置
                            shadowOffsetX: 10,
                            shadowOffsetY: 24
                        },
                        emphasis: {
                            color: '#1ACFFF', //悬浮背景
                        },
                    },
                    geoRegions:[
                        {
                            name: '南海诸岛',
                            itemStyle: {
                                areaColor: 'rgba(0, 10, 52, 1)',
                                borderColor: 'rgba(0, 10, 52, 1)',
                                normal: {
                                    opacity: 0,
                                    label: {
                                        show: false,
                                        color: "#009cc9",
                                    }
                                }
                            },
                        }
                    ]
                }
            }
        }
    },
    data(){
        return{
            
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init() {
            this.myChart = echarts.init(this.$refs.chinaMap1);
            let chinaDatas = this.chinaDatas;
            let optionData = this.options
            let chinaGeoCoordMap = {
                '黑龙江': [127.9688, 45.368],
                '内蒙古': [110.3467, 41.4899],
                "吉林": [125.8154, 44.2584],
                '北京市': [116.4551, 40.2539],
                "辽宁": [123.1238, 42.1216],
                "河北": [114.4995, 38.1006],
                "天津": [117.4219, 39.4189],
                "山西": [112.3352, 37.9413],
                "陕西": [109.1162, 34.2004],
                "甘肃": [103.5901, 36.3043],
                "宁夏": [106.3586, 38.1775],
                "青海": [101.4038, 36.8207],
                "新疆": [87.9236, 43.5883],
                "西藏": [91.11, 29.97],
                "四川": [103.9526, 30.7617],
                "重庆": [108.384366, 30.439702],
                "山东": [117.1582, 36.8701],
                "河南": [113.4668, 34.6234],
                "江苏": [118.8062, 31.9208],
                "安徽": [117.29, 32.0581],
                "湖北": [114.3896, 30.6628],
                "浙江": [119.5313, 29.8773],
                "福建": [119.4543, 25.9222],
                "江西": [116.0046, 28.6633],
                "湖南": [113.0823, 28.2568],
                "贵州": [106.6992, 26.7682],
                "云南": [102.9199, 25.4663],
                "广东": [113.12244, 23.009505],
                "广西": [108.479, 23.1152],
                "海南": [110.3893, 19.8516],
                '上海': [121.4648, 31.2891]
            };
            let seriesData = [];
            [[optionData.fromCity.city, chinaDatas]].map((item, i) => {
                seriesData.push(
                    {
                        type: 'map',
                        zoom: 1.2,
                        aspectScale: 1, //长宽比
                        map: 'china', //使用
                        zlevel:2,
                        label: optionData.upperlabel,
                        roam: false, //是否允许缩放
                        itemStyle: optionData.upperItemStyle,
                    },
                    {
                        // 有数据省份打点
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 3,
                        rippleEffect: optionData.dadianRippleEffect,
                        label: optionData.dadianLabel,
                        symbol: optionData.dadianSymbol,
                        symbolSize: optionData.dadianSymbolSize,
                        itemStyle: optionData.dadianItemStyle,
                        data: chinaDatas.map((dataItem) => {
                            return {
                                name: dataItem.name,
                                value: chinaGeoCoordMap[dataItem.name].concat([dataItem.value])
                            };
                        }),
                    },
                );
            })
            let option = {
                tooltip: optionData.tooltip,
                backgroundColor:optionData.backgroundColor, //地图画布背景色
                geo: [
                    {
                        map: 'china',
                        zoom: 1.2,
                        aspectScale: 1, //长宽比
                        label: optionData.geoLabel,
                        roam: false, //是否允许缩放
                        itemStyle: optionData.geoItemStyle,
                        regions:optionData.geoRegions,
                    },
                ],
                series: seriesData
            };
            option && this.myChart.setOption(option, true);
            window.onresize = this.myChart.resize;
        }
    }
};
</script>

<style lang="scss" scoped>
#mapcharts2.mapcharts2{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1567px;
    height: 760px;
    .map{
        width: 100%;
        height: 100%;
    }
}
</style>
<style lang="scss">
// 提示框样式
.tipsbox2{
    width: 253px;
    height: 251px;
    // background: url("../../../assets/image/suspension2_bg.png") no-repeat;
    background: linear-gradient(180deg,rgba(0,85,139,0.93), rgba(2,82,134,0.93) 13%, rgba(19,66,101,0.91));
    padding: 12px;
    padding-bottom: 22px;
    .tipstitle{
        text-align: center;
        font-size: 20px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #a0fbff;
        border: 1px solid #1b5b99;
        padding: 5px 0;
        background: linear-gradient(270deg,rgba(1,38,62,0.00) 1%, rgba(2,78,113,0.86) 49%, rgba(2,78,113,0.00));
    }
    .tipscontent{
        padding: 0;
        .tipsitem{
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
</style>

