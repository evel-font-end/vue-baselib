<template>
    <div class="mapcharts1" id="mapcharts1">
        <div class="map" ref="chinaMap" id="chinaMap"></div>
    </div>
</template>

<script>
import echarts from "echarts"; //引入echarts
require("echarts/map/js/china");

export default {
    name: "MapchartsStyle1",
    props: {
        chinaDatas:{
            type: Array,
            default: [
                [{
                    name: '辽宁',
                    value: 16
                }],	[{
                    name: '河北',
                    value: 1
                }],	[{
                    name: '山东',
                    value: 1
                }],	[{
                    name: '山西',
                    value: 1
                }],	[{
                    name: '陕西',
                    value: 1
                }],	[{
                    name: '甘肃',
                    value: 1
                }],	[{
                    name: '四川',
                    value: 1
                }],	[{
                    name: '重庆',
                    value: 1
                }],	[{
                    name: '河南',
                    value: 1
                }],[{
                    name: '广东',
                    value: 1
                }],	[{
                    name: '上海',
                    value: 1
                }],
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
                    upperMapItemStyle: { //上层地图ItemStyle配置项
                        normal: {
                            areaColor:"rgba(8,164,230)", //上层地图省份背景颜色
                            borderColor: '#79e1ff', //省市边界线00fcff 516a89
                            borderWidth: 1, //上层地图省份边框宽度
                            globalCoord: true, // 缺省为 false
                        },
                        emphasis: {
                            areaColor:"#1ACFFF", //上层地图省份悬浮背景颜色
                        },
                    },
                    linesEffect: {  //线effect配置项
                        show: true,
                        period: 1.6, //箭头指向速度，值越小速度越快
                        trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'circle', //动画图标（可设置成图片）
                        symbolSize: 8, //图标大小
                        color:"#ffffff",
                    },
                    lineStyle: {
                        normal: {
                            width: 3, //尾迹线条宽度
                            opacity: 0.2, //尾迹线条透明度
                            curveness: -0.3, //尾迹线条曲直度
                            color: "#FFEE71",
                        }
                    },
                    dadianRippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 5 //波纹圆环最大限制，值越大波纹越大
                    },
                    dadianLabel: {
                        normal: {
                            show: true,
                            position: 'bottom', //显示位置
                            offset: [0, 10], //偏移设置
                            formatter: function(params){ //圆环显示文字
                                return '';
                            },
                            fontSize: 13,
                            color: "#ffffff", //省份文字颜色
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
                            color: '#FFEE71',
                        }
                    },
                    startdRippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 6 //波纹圆环最大限制，值越大波纹越大
                    },
                    startdLabel: {
                        normal: {
                            show: false,
                            position: 'bottom', //显示位置
                            offset: [0, 10], //偏移设置
                            formatter: function(params){ //圆环显示文字
                                return params.data.name;
                            },
                            fontSize: 13,
                            color: "#ffffff", //省份文字颜色
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    startdItemStyle: {
                        normal: {
                            show: false,
                            color: '#FFEE71',
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
                            shadowColor:'#0073B2', //地图阴影设置
                            shadowOffsetX: 0,
                            shadowOffsetY: 23,
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
            this.myChart = echarts.init(this.$refs.chinaMap);
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
            let optionData = this.options
            let convertData = function(data) {
                let res = [];
                for(let i = 0; i < data.length; i++) {
                    let dataItem = data[i];
                    let fromCoord = chinaGeoCoordMap[dataItem[0].name];
                    let toCoord = optionData.fromCity.toCoord;
                    if(fromCoord && toCoord) {
                        // toCoord为被攻击点，索引为0时，各城市为被攻击点。索引为1时，toCoord坐标为被攻击点。
                        res.push([{
                            coord: toCoord,
                            value: 11
                        },{
                            coord: fromCoord,
                            value: dataItem[0].value
                        }]);
                    }
                }
                return res;
            };
            let seriesData = [];
            [[optionData.fromCity.city, this.chinaDatas]].forEach(function(item, i) {
                seriesData.push(
                    {
                        type: 'map',
                        map: 'china', //使用
                        zoom: 1.2,
                        aspectScale: 1, //长宽比
                        zlevel:1,
                        label: {
                            normal: {
                                show: true,
                                color: '#fff',
                            },
                            emphasis: {
                                show: true,
                                color: '#fff',
                            }
                        },
                        roam: false, //是否允许缩放
                        itemStyle: optionData.upperMapItemStyle
                    },
                    {
                        type: 'lines',
                        zlevel: 2,
                        effect: optionData.linesEffect,
                        lineStyle: optionData.lineStyle,
                        data: convertData(item[1])
                    }, 
                    {
                        // 有数据省份打点
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: optionData.dadianRippleEffect,
                        label: optionData.dadianLabel,
                        symbol: optionData.dadianSymbol,
                        symbolSize: optionData.dadianSymbolSize,
                        itemStyle: optionData.dadianItemStyle,
                        data: item[1].map(function(dataItem) {
                            return {
                                name: dataItem[0].name,
                                value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                            };
                        }),
                    },
                    { // 初始出发点
                        type: 'effectScatter', 
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: optionData.startdRippleEffect,
                        label: optionData.startdLabel,
                        itemStyle: optionData.startdItemStyle,
                        data: [{
                            name: item[0],
                            value: chinaGeoCoordMap[item[0]].concat([10]),
                        }],
                    }
                );
            })
            let option = {
                backgroundColor: optionData.backgroundColor, //地图画布背景色
                geo: [
                    {
                        map: 'china',
                        zoom: 1.2,
                        aspectScale: 1, //长宽比
                        label: optionData.geoLabel,
                        roam: false, //是否允许缩放
                        itemStyle: optionData.geoItemStyle,
                        regions: optionData.geoRegions,
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
#mapcharts1.mapcharts1{
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

