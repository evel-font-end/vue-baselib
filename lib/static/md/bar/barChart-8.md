## BarChart8

> Use
```javascript
  <barChart-8 
    chartId="barChart8"
    ref="barChart8"
    :chartData="source"
  />
  const source = {
    barTitle: ["指标一"],
    xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
    colors: [new echarts.graphic.LinearGradient(
      0,
      0,
      0,
      1,
      [
        {
          offset: 0,
          color: "rgba(78,219,223,1)" // 0% 处的颜色
        },
        {
          offset: 1,
          color: "rgba(133,239,241,0)" // 100% 处的颜色
        }
      ],
      false
    )],
    ydata: [
      [1, 2, 3, 4, 5, 6, 7, 8]
    ]
  }
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
sid|组件id|string|-|'barChart8'
source|数据源|object|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
barTitle|柱状图标题集合|array| -| -
colors|柱状图颜色样式集合|array| -| -
xdata|横轴数据集合|array| -| -
ydata|柱状图数据集合|array|-| -
