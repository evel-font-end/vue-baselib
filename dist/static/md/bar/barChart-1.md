## BarChart1 

> Use
```javascript
  <barChart-1 
    chartId="barChart1"
    ref="barChart1"
    :chartData="source"
  />
  const source = {
    xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
    ydata: [1, 2, 3, 4, 5, 6, 7, 8]
  }
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
sid|组件id|string|-|'barChart1'
source|数据源|object|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
xdata|横轴数据集合|array| -| -
ydata|柱状图数据集合|array|-| -
