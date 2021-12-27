## BarChart5

> Use
```javascript
  <barChart-5 
    chartId="barChart5"
    ref="barChart5"
    :chartData="source"
  />
  const source = {
    barTitle: ["指标一", "指标二"],
    xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
    colors: [{
      symbolOffset: ["-70%", "-50%"],
      itemStyle: {
        borderColor: "#07F096",
        color: "#07F096"
      },
      barGap: "-50%",
      color: {
        type: "linear",
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
          { offset: 0, color: "rgba(7,240,150, .7)" },
          { offset: 0.5, color: "rgba(7,240,150, .7)" },
          { offset: 0.5, color: "rgba(7,240,150, .3)" },
          { offset: 1, color: "rgba(7,240,150, .3)" }
        ]
      }
    }, {
      symbolOffset: ["65%", "-50%"],
      itemStyle: {
        borderColor: "#5D9EFF",
        color: "#5D9EFF"
      },
      barGap: "40%",
      color: {
        type: "linear",
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
          { offset: 0, color: "rgba(93,158,255, .7)" },
          { offset: 0.5, color: "rgba(93,158,255, .7)" },
          { offset: 0.5, color: "rgba(93,158,255, .3)" },
          { offset: 1, color: "rgba(93,158,255, .3)" }
        ]
      }
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
sid|组件id|string|-|'barChart5'
source|数据源|object|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
barTitle|柱状图标题集合|array| -| -
colors|柱状图颜色样式集合|array| -| -
xdata|横轴数据集合|array| -| -
ydata|柱状图数据集合|array|-| -
