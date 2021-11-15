## MapchartsStyle2

> Use
```javascript

<mapcharts-style-2 :chinaDatas="chinaDatas2" :options="options2"  ref="mapcharts2"/>

const chinaDatas2 = [
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
const options2 = {
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
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
chinaDatas|地图打点数据|Array|-|-

> Options

参数|说明|类型|可选值|默认值
-|-|-|-|-
fromCity|出发点城市配置|Object|-|city、toCoord
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