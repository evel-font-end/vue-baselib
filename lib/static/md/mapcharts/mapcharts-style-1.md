## MapchartsStyle1

> Use
```javascript

<mapcharts-style-1 :chinaDatas="chinaDatas1" :options="options1"  ref="mapcharts1"/>

const chinaDatas1 = [
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
]
const options1 = {
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
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
chinaDatas|地图打点数据|Array|-|-
options|地图配置项|Object|-|-

> Options

参数|说明|类型|可选值|默认值
-|-|-|-|-
fromCity|出发点城市配置|Object|-|city、toCoord
upperMapItemStyle|上层地图ItemStyle配置项(可查看Echarts配置项文档)|Object|-|-
linesEffect|线effect配置项(可查看Echarts配置项文档)|Object|-|-
lineStyle|线lineStyle配置项(可查看Echarts配置项文档)|Object|-|-
dadianRippleEffect|有数据省份打点涟漪特效(可查看Echarts配置项文档)|Object|-|-
dadianLabel|有数据省份打点label配置项(可查看Echarts配置项文档)|Object|-|-
dadianSymbol|有数据省份打点Symbol样式(可查看Echarts配置项文档)|String|-|'circle'
dadianSymbolSize|有数据省份打点Symbol大小(可查看Echarts配置项文档)|Function|-|-
dadianItemStyle|有数据省份打点ItemStyle配置(可查看Echarts配置项文档)|Object|-|-
startdRippleEffect|出发点涟漪特效rippleeffect配置项(可查看Echarts配置项文档)|Object|-|-
startdLabel|出发点label配置项(可查看Echarts配置项文档)|Object|-|-
startdItemStyle|出发点ItemStyle配置项(可查看Echarts配置项文档)|Object|-|-
backgroundColor|地图画布背景色|String|-|'#132845'
geoLabel|geoLabel配置项(可查看Echarts配置项文档)|Object|-|-
geoItemStyle|geoItemStyle配置项(可查看Echarts配置项文档)|Object|-|-
geoRegions|geoRegions配置项(可查看Echarts配置项文档)|Array|-|-
