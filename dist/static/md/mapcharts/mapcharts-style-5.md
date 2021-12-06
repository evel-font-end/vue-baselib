## mapchartsStyle5

> Use
``` javascript

<mapcharts-style-5 :mapDataList="mapDataList" :options="options5"  ref="mapcharts5"/>


const mapDataList = [
    {
        name:'移动网',
        color:"#FF9E08",
        type:"line",
        dataList:[
            {
                name: '黑龙江',
                value: 10
            },
            {
                name: '内蒙古',
                value: 10
            },
            {
                name: '辽宁',
                value: 10
            },
            {
                name: '新疆',
                value: 10
            },
        ],
    },
    {   
        name:'传输网',
        color:"#00E88D",
        type:"line",
        dataList:[
            {
                name: '山西',
                value: 10
            },
            {
                name: '甘肃',
                value: 10
            },
        ]
    },
    {
        name:'IP网',
        color:"#EADF38",
        type:"line",
        dataList:[
            {
                name: '青海',
                value: 10
            },
            {
                name: '重庆',
                value: 10
            },
            {
                name: '西藏',
                value: 10
            },
            {
                name: '山东',
                value: 10
            },
        ]
    },
    {   
        name:'传输',
        color:"#6AFFEC",
        type:"line",
        dataList:[
            {
                name: '河南',
                value: 10
            },
            {
                name: '浙江',
                value: 10
            },
        ],
    },
    {
        name:'家宽',
        color:"#FC6767",
        type:"line",
        dataList:[
            {
                name: '福建',
                value: 10
            },
            {
                name: '贵州',
                value: 10
            },
            {
                name: '广东',
                value: 10
            },
            {
                name: '上海',
                value: 10
            },
        ],
    },
    {
        name:'总部',
        color:"#27E477",
        type:"stroke",
        dataList:[
            {
                name: '福建',
                value: 10
            },
            {
                name: '贵州',
                value: 10
            },
            {
                name: '广东',
                value: 10
            },
            {
                name: '上海',
                value: 10
            },
            {
                name: '河南',
                value: 10
            },
            {
                name: '浙江',
                value: 10
            },
        ],
    },
    {
        name:'大区',
        color:"#FF9D47",
        type:"stroke",
        dataList:[
            {
                name: '青海',
                value: 10
            },
            {
                name: '重庆',
                value: 10
            },
            {
                name: '西藏',
                value: 10
            },
            {
                name: '山东',
                value: 10
            },
        ],
    },
    {
        name:'默认',
        color:"#FFEE71",
        type:"stroke",
        dataList:[
            {
                name: '黑龙江',
                value: 10
            },
            {
                name: '内蒙古',
                value: 10
            },
            {
                name: '辽宁',
                value: 10
            },
            {
                name: '新疆',
                value: 10
            },
            {
                name: '山西',
                value: 10
            },
            {
                name: '甘肃',
                value: 10
            },
        ],
    },
]
const options5 = {
    fromCity:{
        city:"北京市",
        toCoord:[116.4551,40.2539],
        value:"10"
    },
    upperMapItemStyle: { //上层地图ItemStyle配置项
        normal: {
            areaColor:"rgba(8,164,230)",
            borderColor: '#79e1ff', //省市边界线00fcff 516a89
            borderWidth: 1,
            globalCoord: true, // 缺省为 false
        },
        emphasis: {
            areaColor:"#1ACFFF", //悬浮背景
        },
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
    tooltip:{
        show: true ,
        confine: "true",
        extraCssText: 'z-index:10;',
        formatter: function(params, ticket, callback) {
            return `<div class="tipsbox5">
                <div class="tipstitle">${params.name}</div>
                <div class="tipscontent">
                    <div class="tipsitem">
                        <div class='title'>CPU(核)</div>
                        <div class='num'>177932</div>
                    </div>
                    <div class="tipsitem">
                        <div class='title'>内存(TB)</div>
                        <div class='num'>2103.1</div>
                    </div>
                    <div class="tipsitem">
                        <div class='title'>存储(PB)</div>
                        <div class='num'>0.45</div>
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
mapDataList|地图展示数据|Array|-|-

> Options

参数|说明|类型|可选值|默认值
-|-|-|-|-
upperlabel|上层地图label配置项（可查看Echarts配置项文档）|Object|-|-
upperItemStyle|上层地图itemstyle配置项（可查看Echarts配置项文档）|Object|-|-
tooltip|提示框配置（可查看Echarts配置项文档）|Object|-|-
backgroundColor|地图画布背景色|String|-|'#132845'
geoLabel|geoLabel配置项（可查看Echarts配置项文档）|Object|-|-
geoItemStyle|geoItemStyle配置项（可查看Echarts配置项文档）|Object|-|-
geoRegions|geoRegions配置项（可查看Echarts配置项文档）|Array|-|-