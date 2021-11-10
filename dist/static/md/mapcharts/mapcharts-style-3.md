## MapchartsStyle3

> Use
```javascript

<mapcharts-style-3 :BgData="BgData" :bgcData="bgcData" :options="options3" ref="mapcharts3"/>

const BgData = [
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
const bgcData = [
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
]
const options3= {
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
}
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
BgData|上层地图城市数据|Array|-|-
bgcData|上层地图打点数据|Array|-|-

> Options

参数|说明|类型|可选值|默认值
-|-|-|-|-
upperlabel|上层地图label配置项（可查看Echarts配置项文档）|Object|-|-
upperItemStyle|上层地图itemstyle配置项（可查看Echarts配置项文档）|Object|-|-
dadianRippleEffect|有数据省份打点涟漪特效（可查看Echarts配置项文档）|Object|-|-
dadianLabel|有数据省份打点label配置项（可查看Echarts配置项文档）|Object|-|-
dadianSymbol|有数据省份打点Symbol样式（可查看Echarts配置项文档）|String|-|'circle'
dadianSymbolSize|有数据省份打点Symbol大小（可查看Echarts配置项文档）|Function|-|-
dadianItemStyle|有数据省份打点ItemStyle配置（可查看Echarts配置项文档）|Object|-|-
tooltip|提示框配置（可查看Echarts配置项文档）|Object|-|-
backgroundColor|地图画布背景色|String|-|'#132845'
visualMap|省份颜色区分配置（可查看Echarts配置项文档）|Object|-|-
geoLabel|geoLabel配置项（可查看Echarts配置项文档）|Object|-|-
geoItemStyle|geoItemStyle配置项（可查看Echarts配置项文档）|Object|-|-
geoRegions|geoRegions配置项（可查看Echarts配置项文档）|Array|-|-