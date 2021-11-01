<template>
    <div class="mapcharts5" id="mapcharts5">
        <div class="map" ref="chinaMap4" id="chinaMap4"></div>
        <div class="legend">
            <div>
                <span class="heng color1"></span>
                <span>移动网</span>
            </div>
            <div>
                <span class="heng color2"></span>
                <span>家宽</span>
            </div>
            <div>
                <span class="heng color3"></span>
                <span>传输网</span>
            </div>
            <div>
                <span class="yuan color4"></span>
                <span>总部</span>
            </div>
            <div>
                <span class="heng color5"></span>
                <span>IP网</span>
            </div>
            <div>
                <span class="yuan color6"></span>
                <span>大区</span>
            </div>
            <div>
                <span class="heng color7"></span>
                <span>传输</span>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from "echarts"; //引入echarts
require("echarts/map/js/china");

export default {
    name: "mapcharts5",
    props: {
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
            this.myChart = echarts.init(this.$refs.chinaMap4);
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
            let chinaDatas = [
                {
                    type:"移动网",
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
                    type:"传输网",
                    dataList:[
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
                {
                    type: "IP网",
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
                    type: "传输",
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
                    type: "家宽",
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
                    type: "总部",
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
                    type: "大区",
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
                    type: "默认",
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
            ];
            
            let convertData = function(data) {
                let res = [];
                for(let i = 0; i < data.length; i++) {
                    let dataItem = data[i];
                    let fromCoord = chinaGeoCoordMap[dataItem.name];
                    let toCoord = [116.4551,40.2539];
                    if(fromCoord && toCoord) {
                        // toCoord为被攻击点，索引为0时，各城市为被攻击点。索引为1时，toCoord坐标为被攻击点。
                        res.push([{
                            coord: toCoord,
                            value: 11
                        },{
                            coord: fromCoord,
                            value: dataItem.value
                        }]);
                    }
                }
                return res;
            };
            let seriesData = [];
            
            let yidongwanglinesData=[], 
                chuanshuwanglinesData=[],
                IPwanglinesData=[],
                chuanshulinesData=[],
                jiakuanlinesData=[],
                zongbustockData=[],
                daqustockData=[],
                morenstockData=[];
            chinaDatas.map((item)=>{
                if(item.type=="移动网"){
                    yidongwanglinesData = convertData(item.dataList)
                }
                if(item.type=="传输网"){
                    chuanshuwanglinesData = convertData(item.dataList)
                }
                if(item.type=="IP网"){
                    IPwanglinesData = convertData(item.dataList)
                }
                if(item.type=="传输"){
                    chuanshulinesData = convertData(item.dataList)
                }
                if(item.type=="家宽"){
                    jiakuanlinesData = convertData(item.dataList)
                }
                if(item.type=="总部"){
                    zongbustockData = item.dataList.map((item)=>{
                        return {
                            name: item.name,
                            value: chinaGeoCoordMap[item.name].concat([item.value])
                        }
                    })
                }
                if(item.type=="大区"){
                    daqustockData = item.dataList.map((item)=>{
                        return {
                            name: item.name,
                            value: chinaGeoCoordMap[item.name].concat([item.value])
                        }
                    })
                }
                if(item.type=="默认"){
                    morenstockData = item.dataList.map((item)=>{
                        return {
                            name: item.name,
                            value: chinaGeoCoordMap[item.name].concat([item.value])
                        }
                    })
                }
            })
            // console.log('yidongwanglinesData', yidongwanglinesData)
            // console.log('chuanshuwanglinesData', chuanshuwanglinesData)
            // console.log('IPwanglinesData', IPwanglinesData)
            // console.log('chuanshulinesData', chuanshulinesData)
            // console.log('jiakuanlinesData', jiakuanlinesData)
            let dataAllList={
                "移动网": yidongwanglinesData,
                "传输网": chuanshuwanglinesData,
                "IP网": IPwanglinesData,
                "传输": chuanshulinesData,
                "家宽": jiakuanlinesData,
                "总部": zongbustockData,
                "大区": daqustockData,
                "默认": morenstockData,
            }
            let textList= 
            {
                linesList:[ 
                    {
                        name:'移动网',
                        color:"#FF9E08",
                    },
                    {   
                        name:'传输网',
                        color:"#00E88D",
                    },
                    {
                        name:'IP网',
                        color:"#EADF38",
                    },
                    {   
                        name:'传输',
                        color:"#6AFFEC",
                    },
                    {
                        name:'家宽',
                        color:"#FC6767",
                    },
                ],
                stockList:[ 
                    {
                        name:'总部',
                        color:"#27E477",
                    },
                    {
                        name:'大区',
                        color:"#FF9D47",
                    },
                    {
                        name:'默认',
                        color:"#FFEE71",
                    },
                ],
            };
            seriesData.push(
                {
                    type: 'map',
                    zoom: 1.2,
                    aspectScale: 1, //长宽比
                    map: 'china', //使用
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
                    itemStyle: {
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
                },
                // 初始出发点(北京)
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 6 //波纹圆环最大限制，值越大波纹越大
                    },
                    label: {
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
                    itemStyle: {
                        normal: {
                            show: false,
                            color: '#FFEE71',
                        }
                    },
                    data: [{
                        name: "北京",
                        value: [
                            "116.4551",
                            "40.2539",
                            "10",
                        ],
                    }],
                }
            )
            // 设置不同的线
            textList.linesList.map((item)=>{
                seriesData.push(
                    {
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 5, //箭头指向速度，值越小速度越快
                            trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
                            symbol: 'arrow', //箭头图标
                            symbolSize: 6, //图标大小
                            color: '#fff',
                        },
                        lineStyle: {
                            normal: {
                                width: 2, //尾迹线条宽度
                                opacity: 0.8, //尾迹线条透明度
                                curveness: 0.3, //尾迹线条曲直度
                                color: item.color,
                            }
                        },
                        data: dataAllList[item.name]
                    },
                )
            })
            // 设置不同的点
            textList.stockList.map((item)=>{
                seriesData.push(
                    {
                        // 有数据省份打点
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: { //涟漪特效
                            period: 4, //动画时间，值越小速度越快
                            brushType: 'stroke', //波纹绘制方式 stroke, fill
                            scale: 5 //波纹圆环最大限制，值越大波纹越大
                        },
                        label: {
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
                        symbol: 'circle',
                        symbolSize: function(val) {
                            return  8; //圆环大小
                        },
                        itemStyle: {
                            normal: {
                                color: item.color,
                            }
                        },
                        data: dataAllList[item.name],
                    },
                )
            })
            let option = {
                tooltip: {
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
                geo: [
                    {
                        map: 'china',
                        zoom: 1.2,
                        aspectScale: 1, //长宽比
                        label: {
                            normal: {
                                show: false,
                                color: '#fff',
                            },
                            emphasis: {
                                show: false,
                                color: '#fff',
                            }
                        },
                        roam: false, //是否允许缩放
                        itemStyle: {
                            normal: {
                                color: 'rgba(8,164,230)', //地图背景色
                                borderColor: '#79e1ff', //省市边界线00fcff 516a89
                                borderWidth: 1,
                                shadowColor:'rgb(58,115,192)', //地图阴影设置
                                shadowOffsetX: 10,
                                shadowOffsetY: 16
                            },
                            emphasis: {
                                color: '#1ACFFF', //悬浮背景
                            },
                        },
                        regions:[{
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
                        }],
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
#mapcharts5.mapcharts5{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1567px;
    height: 760px;
    .map{
        width: 100%;
        height: 100%;
    }
    .legend{
        position: absolute;
        left: 100px;
        bottom: 0;
        width: 172px;
        height: 122px;
        background: rgba(4,55,92,0.60);
        border: 1px solid #076995;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        div{
            width: 50%;
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #ffffff;
            .heng{
                display: inline-block;
                width: 16px;
                height: 4px;
                margin-bottom: 3px;
                margin-left: 8px;
            }
            .yuan{
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 4px;
                margin-left: 11px;
                margin-right: 2px;
            }
            .color1{
                background: #FF9E08;
            }
            .color2{
                background: #fc6767;
            }
            .color3{
                background: #00E88D;
            }
            .color4{
                background: #27e477;
            }
            .color5{
                background: #eadf38;
            }
            .color6{
                background: #FF9D47;
            }
            .color7{
                background: #6AFFEC;
            }
        }
    }
}

</style>
<style lang="scss">
// 提示框样式
.tipsbox5{
    width: 210px;
    height: 261px;
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
            margin-top: 12px;
            text-align: center;
            .title{
                font-size: 18px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: center;
                color: #ffffff;
                line-height: 25px;
            }
            .num{
                font-size: 28px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: center;
                color: #ff836c;
                line-height: 32px;
            }
        }
    }
}
</style>

