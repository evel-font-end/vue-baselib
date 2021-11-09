<template>
    <div class='content'>
        <box-container :spinShow='spinShow1' :title="'地图一'" class='bg-grey' :width="'100%'" @showOptionHandler='showOption("mapcharts1")'>
            <mapcharts-style-1 :chinaDatas="chinaDatas1" :options="options1"  ref="mapcharts1"/>
        </box-container>
        <box-container :spinShow='spinShow1' :title="'地图二'" class='bg-grey' :width="'100%'" @showOptionHandler='showOption("mapcharts2")'>
            <mapcharts-style-2 :chinaDatas="chinaDatas2" :options="options2"  ref="mapcharts2"/>
        </box-container>
        <box-container :spinShow='spinShow1' :title="'地图三'" class='bg-grey' :width="'100%'" @showOptionHandler='showOption("mapcharts3")'>
            <mapcharts-style-3 :BgData="BgData" :bgcData="bgcData" :options="options3" ref="mapcharts3"/>
        </box-container>
        <box-container :spinShow='spinShow1' :title="'地图四'" class='bg-grey' :width="'100%'" @showOptionHandler='showOption("mapcharts4")'>
            <mapcharts-style-4 :BgData="BgData1" :splitListdata="splitListdata" :options="options4"  ref="mapcharts4"/>
        </box-container>
        <box-container :spinShow='spinShow1' :title="'地图五'" class='bg-grey' :width="'100%'" @showOptionHandler='showOption("mapcharts5")'>
            <mapcharts-style-5  ref="mapcharts5"/>
        </box-container>
    </div>
</template>
<script>
import boxContainer from '../common/box-container-2'
import mapCharts1 from '../../cell/mapcharts/mapcharts-style-1'
import mapCharts2 from '../../cell/mapcharts/mapcharts-style-2'
import mapCharts3 from '../../cell/mapcharts/mapcharts-style-3'
import mapCharts4 from '../../cell/mapcharts/mapcharts-style-4'
import mapCharts5 from '../../cell/mapcharts/mapcharts-style-5'
export default {
    name: 'mapCharts',
    components: {
        'box-container': boxContainer,
        'mapcharts-style-1': mapCharts1,
        'mapcharts-style-2': mapCharts2,
        'mapcharts-style-3': mapCharts3,
        'mapcharts-style-4': mapCharts4,
        'mapcharts-style-5': mapCharts5,
    },
    data() {
        return {
            eventListFetchData: [],
            spinShow1: false,
            chinaDatas1: [
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
                [{
                    name: '江西',
                    value: 1
                }],
            ],
            options1: {
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
            },
            chinaDatas2: [
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
            ],
            options2: {
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
            },
            BgData: [
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
            ],
            bgcData: [
                {
                    name: "北京",
                    value: 400,
                },
                {
                    name: "上海",
                    value: 350
                }, 
                {
                    name: "天津",
                    value: 300
                }, 
                {
                    name: "重庆",
                    value: 200
                }, 
                {
                    name: "广东",
                    value: 300
                }, 
                {
                    name: "广西",
                    value: 10
                }, 
                {
                    name: "湖南",
                    value: 200
                }, 
                {
                    name: "湖北",
                    value: 300
                }, 
                {
                    name: "河南",
                    value: 129
                }, 
                {
                    name: "河北",
                    value: 390
                }, 
                {
                    name: "山东",
                    value: 200
                }, 
                {
                    name: "山西",
                    value: 60
                }, 
                {
                    name: "黑龙江",
                    value: 400
                }, 
                {
                    name: "吉林",
                    value: 201
                }, 
                {
                    name: "辽宁",
                    value: 30
                }, 
                {
                    name: "内蒙古",
                    value: 490
                }, 
                {
                    name: "新疆",
                    value: 200
                }, 
                {
                    name: "西藏",
                    value: 30
                }, 
                {
                    name: "宁夏",
                    value: 50
                }, 
                {
                    name: "甘肃",
                    value: 30
                }, 
                {
                    name: "云南",
                    value: 30
                }, 
                {
                    name: "陕西",
                    value: 30
                }, 
                {
                    name: "青海",
                    value: 30
                }, 
                {
                    name: "贵州",
                    value: 30
                }, 
                {
                    name: "福建",
                    value: 220
                }, 
                {
                    name: "江西",
                    value: 30
                }, 
                {
                    name: "四川",
                    value: 210
                }, 
                {
                    name: "江苏",
                    value: 140
                }, {
                    name: "安徽",
                    value: 30
                }, {
                    name: "浙江",
                    value: 333
                }, {
                    name: "海南",
                    value: 500
                }, {
                    name: "台湾",
                    value: 30
                }, {
                    name: "南海诸岛",
                    value: 0
                },
            ],
            options3: {
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
                    },
                    emphasis: {
                        areaColor: "#1ACFFF",
                        borderColor: "#FFF"
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
                        return `<div class="tipsbox3">
                            <div class="tipstitle">${params.name}</div>
                            <div class="tipscontent">
                                <div class="tipsitem">
                                    <span>设备数量</span>
                                    <span>1045</span>
                                </div>
                                <div class="tipsitem">
                                    <span>设备总容量G</span>
                                    <span>940</span>
                                </div>
                                <div class="tipsitem">
                                    <span>设备占用容量G</span>
                                    <span>384</span>
                                </div>
                                <div class="tipsitem">
                                    <span>设备容量占用率(%)</span>
                                    <span>74.5%</span>
                                </div>
                                <div class="tipsitem">
                                    <span>设备端口数量</span>
                                    <span>8490</span>
                                </div>
                                <div class="tipsitem">
                                    <span>设备端口占用数量</span>
                                    <span>749</span>
                                </div>
                                <div class="tipsitem">
                                    <span>设备端口占用率(%)</span>
                                    <span>38%</span>
                                </div>
                            </div>
                        </div>`;
                    }
                },
                backgroundColor:"#132845", //地图画布背景色
                visualMap: {
                    show: true, //图例值控制
                    type: 'piecewise',
                    seriesIndex: 0,
                    text: ['占用率'],
                    pieces: [ // 设置值区间  并且可配置区间颜色
                        {
                            min: 401,
                            label:"<100%",
                            color: '#1C69D4',
                        }, // 不指定 max，表示 max 为无限大（Infinity）。
                        {
                            min: 301,
                            max: 400,
                            label:"<75%",
                            color: '#3489E0',
                        },
                        {
                            min: 101,
                            max: 300,
                            label:"<50%",
                            color: '#5DAFFF',
                        },
                        {
                            max: 100,
                            label:"<25%",
                            color: '#16CAF2',
                        }
                    ],
                    textStyle: {
                        color: '#fff',
                    },
                    showLabel: true,
                    calculable: true,        
                },
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
                        borderColor: 'rgba(8,164,230)', //省市边界线00fcff 516a89
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
            },
            BgData1: [
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
            ],
            splitListdata: [
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
            ],
            options4: {
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
    },
    created() {
        // this.$http.get('/table/eventListSource')
        // .then(res => {
        //     if (res.state && res.data) {
        //     this.eventListFetchData = res.data
        //     this.spinShow1 = false
        //     }
        // })
        // .catch(err => {
        //     console.log(err)
        //     this.$fetchMock('/static/mock/table/eventListSource.json')
        //     .then(res => {
        //         this.eventListFetchData = res
        //         this.spinShow1 = false
        //     })
        // })
    },
    methods:{
        showOption(ref) {
            this.$store.commit('UPDATE_DIALOG_SHOW', this.$refs[ref].$options._componentTag);
        },
    }
}
</script>
<style lang="scss" scoped>
@import './mapcharts.scss';
</style>

