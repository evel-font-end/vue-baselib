## BarChart3

> Use
```javascript
  <barChart-3 
    chartId="barChart3"
    ref="barChart3"
    :chartData="source"
  />
  const source = {
    barTitle: ["指标一", "指标二"],
    xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
    colors: [{
      leftColor: "rgba(7,252,143,0.9)",
      rightColor: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        { offset: 0, color: "#079a62" },
        { offset: 0.45, color: "#079a62" },
        { offset: 0.46, color: "rgba(7, 192, 112, 1)" },
        { offset: 0.55, color: "rgba(7, 192, 112, 1)" },
        { offset: 0.56, color: "#079a62" },
        { offset: 1, color: "#079a62" }
      ]),
      topColor: "rgba(7,252,143,0.9)",
      symbolOffset: [
        ["-30%", "-94%"],
        ["-40%", "80%"]
      ]
    }, {
      leftColor: "rgba(6,188,255,0.9)",
      rightColor: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        { offset: 0, color: "rgba(5,128,174,0.8)" },
        { offset: 0.45, color: "rgba(5,128,174,0.8)" },
        { offset: 0.46, color: "rgba(5, 138, 189,1)" },
        { offset: 0.55, color: "rgba(5, 138, 189,1)" },
        { offset: 0.56, color: "rgba(5,128,174,0.8)" },
        { offset: 1, color: "rgba(5,128,174,0.8)" }
      ]),
      topColor: "rgba(6,188,255,1)",
      symbolOffset: [
        ["48%", "-94%"],
        ["40%", "80%"],
      ]
    }],
    ydata: [
      [124, 214, 253, 344, 125, 316, 417, 538],
      [141, 142, 453, 544, 575, 136, 247, 548]
    ]
  }
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
sid|组件id|string|-|'barChart3'
source|数据源|object|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
colors|柱状图颜色样式集合|array| -| -
xdata|横轴数据集合|array| -| -
ydata|柱状图数据集合|array|-| -
