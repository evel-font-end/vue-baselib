<template>
    <div class="mapcharts4" id="mapcharts4">
        <div class="map" ref="chinaMap3" id="chinaMap3"></div>
    </div>
</template>

<script>
import echarts from "echarts"; //引入echarts

require("echarts/map/js/china");

export default {
    name: "MapchartsStyle4",
    props: {
        BgData: {
            type: Array,
            default:  [
                [{
                    name: '北京'
                }],
                [{
                    name: '广西'
                }],
                [{
                    name: '河南'
                }],
                [{
                    name: '天津'
                }],
                [{
                    name: '上海'
                }],
                [{
                    name: '河北'
                }],
                [{
                    name: '青海'
                }],
                [{
                    name: '新疆'
                }],
                [{
                    name: '西藏'
                }],
                [{
                    name: '山东'
                }],
                [{
                    name: '宁夏'
                }],
                [{
                    name: '山西'
                }],
                [{
                    name: '陕西'
                }],
                [{
                    name: '安徽'
                }],
                [{
                    name: '江西'
                }],
                [{
                    name: '广东'
                }],
                [{
                    name: '黑龙江'
                }],
                [{
                    name: '内蒙古'
                }],
                [{
                    name: '吉林'
                }],
                [{
                    name: '辽宁'
                }],
                [{
                    name: '湖北'
                }],
                [{
                    name: '浙江'
                }],
                [{
                    name: '福建'
                }],
                [{
                    name: '重庆'
                }],
                [{
                    name: '宁夏'
                }],
                [{
                    name: '贵州'
                }],
                [{
                    name: '湖南'
                }],
                [{
                    name: '甘肃'
                }],
                [{
                    name: '四川'
                }],
                [{
                    name: '云南'
                }],
                [{
                    name: '江苏'
                }],
                [{
                    name: '上海'
                }],
                [{
                    name: '浙江'
                }],
                [{
                    name: '江苏'
                }],
                [{
                    name: '江西'
                }],
                [{
                    name: '四川'
                }],
                [{
                    name: '广东'
                }],
                [{
                    name: '江苏'
                }],
                [{
                    name: '上海'
                }],
                [{
                    name: '四川'
                }],
                [{
                    name: '江苏'
                }],
                [{
                    name: '台湾'
                }],
                [{
                    name: '海南'
                }],
            ]
        },
        splitListdata: {
            type: Array,
            default:  [
                {
                    "name": "北京", 
                    "value": "1",
                    "label":"北京",
                    color:"#FF8989",
                },
                {
                    "name": "上海", 
                    "value": "2",
                    "label":"上海",
                    color:"#FBA344",
                },
                {
                    "name": "河北", 
                    "value": 10,
                    "label":"北部",
                    color:"#175FBB",
                },
                {
                    "name": "辽宁", 
                    "value": 10,
                    "label":"北部",
                    color:"#175FBB",
                },
                {
                    "name": "吉林", 
                    "value": 10,
                    "label":"北部",
                    color:"#175FBB",
                },
                {
                    "name": "黑龙江", 
                    "value": 10,
                    "label":"北部",
                    color:"#175FBB",
                },
                {
                    "name": "山东", 
                    "value": 10,
                    "label":"北部",
                    color:"#175FBB",
                },
                {
                    "name": "天津", 
                    "value": 10,
                    "label":"北部",
                    color:"#175FBB",
                },
                {
                    "name": "江苏", 
                    "value": 20,
                    "label":"东部",
                    color:"#088A8F",
                },
                {
                    "name": "浙江", 
                    "value": 20,
                    "label":"东部",
                    color:"#088A8F",
                },
                {
                    "name": "安徽", 
                    "value": 20,
                    "label":"东部",
                    color:"#088A8F",
                },
                {
                    "name": "内蒙古", 
                    "value": 30,
                    "label":"中部",
                    color:"#3982E0",
                },
                {
                    "name": "山西", 
                    "value": 30,
                    "label":"中部",
                    color:"#3982E0",
                },
                {
                    "name": "河南", 
                    "value": 30,
                    "label":"中部",
                    color:"#3982E0",
                },
                {
                    "name": "湖北", 
                    "value": 30,
                    "label":"中部",
                    color:"#3982E0",
                },
                {
                    "name": "福建", 
                    "value": 40,
                    "label":"南部",
                    color:"#1CABB8",
                },
                {
                    "name": "江西", 
                    "value": 40,
                    "label":"南部",
                    color:"#1CABB8",
                },
                {
                    "name": "湖南", 
                    "value": 40,
                    "label":"南部",
                    color:"#1CABB8",
                },
                {
                    "name": "广东", 
                    "value": 40,
                    "label":"南部",
                    color:"#1CABB8",
                },
                {
                    "name": "台湾",
                    "value": 40,
                    "label":"南部",
                    color:"#1CABB8",
                },
                {
                    "name": "广西", 
                    "value": 40,
                    "label":"南部",
                    color:"#1CABB8",
                },
                {
                    "name": "海南", 
                    "value": 40,
                    "label":"南部",
                    color:"#1CABB8",
                },
                {
                    "name": "四川", 
                    "value": 50,
                    "label":"西南",
                    color:"#46CEE3",
                },
                {
                    "name": "重庆", 
                    "value": 50,
                    "label":"西南",
                    color:"#46CEE3",
                },
                {
                    "name": "贵州", 
                    "value": 50,
                    "label":"西南",
                    color:"#46CEE3",
                },
                {
                    "name": "云南", 
                    "value": 50,
                    "label":"西南",
                    color:"#46CEE3",
                },
                {
                    "name": "西藏", 
                    "value": 50,
                    "label":"西南",
                    color:"#46CEE3",
                },
                {
                    "name": "陕西", 
                    "value": 60,
                    "label":"西北",
                    color:"#3F9BE9",
                },
                {
                    "name": "甘肃", 
                    "value": 60,
                    "label":"西北",
                    color:"#3F9BE9",
                },
                {
                    "name": "青海", 
                    "value": 60,
                    "label":"西北",
                    color:"#3F9BE9",
                },
                {
                    "name": "宁夏", 
                    "value": 60,
                    "label":"西北",
                    color:"#3F9BE9",
                },
                {
                    "name": "新疆", 
                    "value": 60,
                    "label":"西北",
                    color:"#3F9BE9",
                },
                {
                    "name": "南海诸岛", 
                    "value": 40,
                    "label":"南部",
                    color:"#1CABB8",
                } 
            ]
        },
        options:{
            type: Object,
            default: function (){
                return {
                    upperlabel: { //上层地图label配置
                        normal: {
                            color:"#fff",
                            show: false
                        },
                        emphasis: {
                            show: false
                        },
                    },
                    upperItemStyle: {
                        normal: {
                            borderColor: "#fff", //省市边界线
                            fontSize: 13,
                            globalCoord: true, // 缺省为 false
                        },
                        emphasis: {
                            areaColor: "#1ACFFF",
                            borderColor: "#FFF",
                        },
                    },
                    dadianRippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: "stroke", //波纹绘制方式 stroke, fill
                        scale: 4 //波纹圆环最大限制，值越大波纹越大
                    },
                    dadianLabel: {
                        normal: {
                            show: true,
                            position: "bottom", //显示位置
                            offset: [0, 4], //偏移设置
                            fontWeight: "lighter",
                            fontSize: 14,
                            color: "#fff",
                            formatter: "{b}" //圆环显示文字
                        },
                        emphasis: {
                            show: false
                        },
                    },
                    dadianSymbol: 'circle',
                    dadianSymbolSize: function(val){
                        return 8
                    },
                    dadianItemStyle: {
                        normal: {
                            color: "#FFEE71",
                            show: true,
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    tooltip: {
                        show: true ,
                        confine: "true",
                        extraCssText: 'z-index:10;',
                        formatter: function(params, ticket, callback) {
                            return `<div class="tipsbox4">
                                <div class="tipstitle">${params.name}省网络运营故障数</div>
                                <div class="tipscontent">
                                    <div class="tipsitem">
                                        <span>核心网</span>
                                        <span>36</span>
                                    </div>
                                    <div class="tipsitem">
                                        <span>承载网</span>
                                        <span>463</span>
                                    </div>
                                    <div class="tipsitem">
                                        <span>接入网</span>
                                        <span>1314</span>
                                    </div>
                                    <div class="tipsitem">
                                        <span>业务平台(%)</span>
                                        <span>36</span>
                                    </div>
                                    <div class="tipsitem tipscolor1">
                                        <span>5GC性能隐患梳理</span>
                                        <span>71</span>
                                    </div>
                                </div>
                            </div>`;
                        }
                    },
                    backgroundColor:"#132845", //地图画布背景色
                    
                    geoLabel: {
                        normal: {
                            show: false,
                            color: '#fff',
                        },
                        emphasis: {
                            show: false,
                            color: '#fff',
                        }
                    },
                    geoItemStyle: {
                        normal: {
                            show:true,
                            color: 'rgba(8,164,230)', //地图背景色
                            borderColor: '#79e1ff', //省市边界线00fcff 516a89
                            borderWidth: 1,
                            shadowColor:'#0073B2', //地图阴影设置
                            shadowOffsetX: 8,
                            shadowOffsetY: 16,
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
            this.myChart = echarts.init(this.$refs.chinaMap3);
            var geoCoordMap = {
                '上海': [121.4648, 31.2891],
                '东莞': [113.8953, 22.901],
                '东营': [118.7073, 37.5513],
                '中山': [113.4229, 22.478],
                '临汾': [111.4783, 36.1615],
                '临沂': [118.3118, 35.2936],
                '丹东': [124.541, 40.4242],
                '丽水': [119.5642, 28.1854],
                '新疆': [86.9236, 41.5883],
                '佛山': [112.8955, 23.1097],
                '保定': [115.0488, 39.0948],
                '甘肃': [103.9901, 36.3043],
                '北京': [116.4551, 40.4539],
                '北海': [109.314, 21.6211],
                '江苏': [120.2062, 32.9208],
                '广西': [108.479, 24.1152],
                '江西': [116.0046, 28.6633],
                '南通': [121.1023, 32.1625],
                '厦门': [118.1689, 24.6478],
                '台州': [121.1353, 28.6688],
                '安徽': [117.29, 32.0581],
                '内蒙古': [111.4124, 41.4901],
                '咸阳': [108.4131, 34.8706],
                '黑龙江': [127.9688, 46.868],
                '唐山': [118.4766, 39.6826],
                '嘉兴': [120.9155, 30.6354],
                '大同': [113.7854, 39.8035],
                '天津': [117.4219, 39.4189],
                '山西': [112.3352, 37.9413],
                '威海': [121.9482, 37.1393],
                '宁波': [121.5967, 29.6466],
                '宝鸡': [107.1826, 34.3433],
                '宿迁': [118.5535, 33.7775],
                '广东': [114.5107, 23.8196],
                '廊坊': [116.521, 39.0509],
                '延安': [109.1052, 36.4252],
                '张家口': [115.1477, 40.8527],
                '徐州': [117.5208, 34.3268],
                '德州': [116.6858, 37.2107],
                '惠州': [114.6204, 23.1647],
                '四川': [103.9526, 30.7617],
                '扬州': [119.4653, 32.8162],
                '承德': [117.5757, 41.4075],
                '西藏': [91.1865, 30.1465],
                '无锡': [120.3442, 31.5527],
                '日照': [119.2786, 35.5023],
                '云南': [101.9199, 25.0663],
                '浙江': [119.5313, 29.8773],
                '枣庄': [117.323, 34.8926],
                '柳州': [109.3799, 24.9774],
                '株洲': [113.5327, 27.0319],
                '湖北': [113.0896, 31.3628],
                '汕头': [117.1692, 23.3405],
                '江门': [112.6318, 22.1484],
                '辽宁': [123.1238, 42.1216],
                '沧州': [116.8286, 38.2104],
                '河源': [114.917, 23.9722],
                '泉州': [118.3228, 25.1147],
                '泰安': [117.0264, 36.0516],
                '泰州': [120.0586, 32.5525],
                '山东': [117.1582, 36.8701],
                '济宁': [116.8286, 35.3375],
                '海口': [110.3893, 19.8516],
                '淄博': [118.0371, 36.6064],
                '淮安': [118.927, 33.4039],
                '深圳': [114.5435, 22.5439],
                '清远': [112.9175, 24.3292],
                '温州': [120.498, 27.8119],
                '渭南': [109.7864, 35.0299],
                '湖州': [119.8608, 30.7782],
                '湘潭': [112.5439, 27.7075],
                '滨州': [117.8174, 37.4963],
                '潍坊': [119.0918, 36.524],
                '烟台': [120.7397, 37.5128],
                '玉溪': [101.9312, 23.8898],
                '珠海': [113.7305, 22.1155],
                '盐城': [120.2234, 33.5577],
                '盘锦': [121.9482, 41.0449],
                '河北': [115.4995, 38.6006],
                '福建': [118.0543, 26.5222],
                '秦皇岛': [119.2126, 40.0232],
                '绍兴': [120.564, 29.7565],
                '聊城': [115.9167, 36.4032],
                '肇庆': [112.1265, 23.5822],
                '舟山': [122.2559, 30.2234],
                '苏州': [120.6519, 31.3989],
                '莱芜': [117.6526, 36.2714],
                '菏泽': [115.6201, 35.2057],
                '营口': [122.4316, 40.4297],
                '葫芦岛': [120.1575, 40.578],
                '衡水': [115.8838, 37.7161],
                '衢州': [118.6853, 28.8666],
                '青海': [97.4038, 35.8207],
                '陕西': [109.1162, 34.2004],
                '贵州': [106.6992, 26.7682],
                '连云港': [119.1248, 34.552],
                '邢台': [114.8071, 37.2821],
                '邯郸': [114.4775, 36.535],
                '河南': [113.4668, 34.6234],
                '鄂尔多斯': [108.9734, 39.2487],
                '重庆': [107.7539, 30.1904],
                '金华': [120.0037, 29.1028],
                '铜川': [109.0393, 35.1947],
                '宁夏': [106.3586, 38.1775],
                '镇江': [119.4763, 31.9702],
                '吉林': [125.8154, 44.2584],
                '湖南': [111.8823, 28.2568],
                '长治': [112.8625, 36.4746],
                '阳泉': [113.4778, 38.0951],
                '青岛': [120.4651, 36.3373],
                '韶关': [113.7964, 24.7028],
                '海南': [109.8500, 19.7028],
                '台湾': [120.7964, 24.1528],
            };
            let optionData = this.options
            var BgData = this.BgData;
            let splitListdata = this.splitListdata;
            var series = [
                // 省份颜色
                {
                    name: '',
                    type: "map",
                    map: "china",
                    zoom: 1.2,
                    aspectScale: 1, //长宽比
                    zlevel: 1,
                    label: optionData.upperlabel,
                    itemStyle: optionData.upperItemStyle,
                    data: splitListdata
                }
            ];
            BgData.forEach(function(item, i) {
                series.push(
                    // 地图打点
                    {
                        type: "effectScatter",
                        coordinateSystem: "geo",
                        name: item[0].name,
                        aspectScale: 1, //长宽比
                        zoom: 1.2,
                        zlevel: 5,
                        rippleEffect: optionData.dadianRippleEffect,
                        label: optionData.dadianLabel,
                        symbol: optionData.dadianSymbol,
                        symbolSize: optionData.dadianSymbolSize,
                        itemStyle: optionData.dadianItemStyle,
                        data: [{
                            name: item[0].name,
                            value: geoCoordMap[item[0].name].concat([item[0].value])
                        }]
                    },
                );
            });
            let option = {
                tooltip: optionData.tooltip,
                backgroundColor: optionData.backgroundColor,
                dataRange: {
                    x: 'left', //图例横轴位置
                    y: 'bottom', //图例纵轴位置
                    splitList: splitListdata, //各省地图颜色，在data中插入对应的color即可 {"name": "南海诸岛", "value": 15000,color: '#cfc5de'} color：自定义颜色值
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                    },
                },
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
                series: series
            };
            option && this.myChart.setOption(option, true);
            window.onresize = this.myChart.resize;
        }
    }
};
</script>

<style lang="scss" scoped>
#mapcharts4.mapcharts4{
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
.tipsbox4{
    width: 249px;
    height: 196px;
    // background: url("../../../assets/image/suspension2_bg.png") no-repeat;
    background: linear-gradient(180deg,rgba(0,85,139,0.93), rgba(2,82,134,0.93) 13%, rgba(19,66,101,0.91));
    padding: 12px;
    padding-bottom: 22px;
    border: 1px solid;
    border-image: linear-gradient(180deg, rgba(240,249,255,0.00), #98d3ff 37%, #78c5ff 71%, rgba(221,241,255,0.00)) 1 1;
    box-shadow: 0px 8px 8px 0px rgba(2,23,42,0.27); 
    .tipstitle{
        text-align: center;
        font-size: 18px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #a0fbff;
        border: 1px solid #1b5b99;
        padding: 3px 0;
        background: linear-gradient(270deg,rgba(1,38,62,0.00) 1%, rgba(2,78,113,0.86) 49%, rgba(2,78,113,0.00));
    }
    .tipscontent{
        padding: 0;
        .tipsitem{
            color: #ffffff;
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
            span{
                font-size: 16px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
            }
        }
        .tipscolor1{
            color: #1EE0DE;
        }
    }
}
</style>

