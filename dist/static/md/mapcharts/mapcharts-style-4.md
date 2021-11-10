## MapchartsStyle3

> Use
```javascript

<mapcharts-style-4 :BgData="BgData1" :splitListdata="splitListdata" :options="options4"  ref="mapcharts4"/>

const BgData1 = [
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
const splitListdata = [
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

const options4 =  {
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
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
BgData|上层地图城市数据|Array|-|-
splitListdata|上层地图打点数据|Array|-|-

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
geoLabel|geoLabel配置项（可查看Echarts配置项文档）|Object|-|-
geoItemStyle|geoItemStyle配置项（可查看Echarts配置项文档）|Object|-|-
geoRegions|geoRegions配置项（可查看Echarts配置项文档）|Array|-|-