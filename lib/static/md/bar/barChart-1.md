## BarChart1 

> Use
```javascript
  <barChart-1 
    chartId="barChart1"
    ref="barChart1"
    :chartData="source"
  />
  const source = {
    barTitle: ["指标一"],
    xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
    colors: [{
      leftColor: getLinearColor("#10DAFF", "#015BCC"),
      rightColor: getLinearColor("#2B89FC", "#023E8A"),
    }],
    ydata: [
      [1, 2, 3, 4, 5, 6, 7, 8]
    ]
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
barTitle|柱状图标题集合|array| -| -
colors|柱状图颜色样式集合|array| -| -
xdata|横轴数据集合|array| -| -
ydata|柱状图数据集合|array|-| -
