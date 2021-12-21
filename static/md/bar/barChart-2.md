## BarChart2

> Use
```javascript
  <barChart-2 
    chartId="barChart2"
    ref="barChart2"
    :chartData="source"
  />
  const source = {
    barTitle: ["指标一"],
    xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
    colors: [{
      shadowColor: getLinearColor("rgba(255,255,255,0.28)", "rgba(255,255,255,0)"),
      itemColor: getLinearColor("rgba(0,239,255,1)", "rgba(0,161,255,0)"),
    }],
    ydata: [
      [1, 2, 3, 4, 5, 6, 7, 8]
    ]
  }
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
sid|组件id|string|-|'barChart2'
source|数据源|object|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
barTitle|柱状图标题集合|array| -| -
colors|柱状图颜色样式集合|array| -| -
xdata|横轴数据集合|array| -| -
ydata|柱状图数据集合|array|-| -
