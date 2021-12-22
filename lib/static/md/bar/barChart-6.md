## BarChart6

> Use
```javascript
  <barChart-6 
    chartId="barChart6"
    ref="barChart6"
    :chartData="source"
  />
  const source = {
    barTitle: ["指标一", "指标二"],
    xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
    colors: [new echarts.graphic.LinearGradient(
      0,
      0,
      0,
      1,
      [
        {
          offset: 0,
          color: "rgba(15,221,255,1)" // 0% 处的颜色
        },
        {
          offset: 1,
          color: "rgba(15,221,255,0)" // 100% 处的颜色
        }
      ],
      false
    ), new echarts.graphic.LinearGradient(
      0,
      0,
      0,
      1,
      [
        {
          offset: 0,
          color: "rgba(132,255,201,1)" // 0% 处的颜色
        },
        {
          offset: 1,
          color: "rgba(132,255,201,0)" // 100% 处的颜色
        }
      ],
      false
    )],
    ydata: [
      [124, 214, 253, 344, 125, 316, 417, 538],
      [141, 142, 453, 544, 575, 136, 247, 548]
    ]
  }
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
sid|组件id|string|-|'barChart6'
source|数据源|object|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
barTitle|柱状图标题集合|array| -| -
colors|柱状图颜色样式集合|array| -| -
xdata|横轴数据集合|array| -| -
ydata|柱状图数据集合|array|-| -
