## BarStyle3

> Use
```javascript
<bar-style-3
  :chartId="'bar3'"
  ref="chartBar3"
  :chartData="source"
/>
const source = {
  lineTitle: ["指标一", "指标二"],
  xdata: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
  ydata: [
    [134, 235, 312, 412, 512, 136, 457, 128],
    [421, 214, 343, 422, 535, 236, 527, 118]
  ]
};
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
chartId|组件id|string|-|'bar3'
source|数据源|object|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
lineTitle|折线图标题|array|-|["指标一", "指标二"]
colors|折线图颜色|array|-|['#21B791', '#FFBA1E']
areaColors|折线图颜色|array|-|[["rgba(18,186,149,0.38)", "rgba(18,186,149,0)"], ["rgba(18,186,149,0.38)", "rgba(18,186,149,0)"]]
xdata|横轴数据集合|array| -| -
ydata|折线图数据集合|array|-| -
