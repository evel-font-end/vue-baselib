## RadarMapStyle2

> Use
```javascript
<radarMap-style-2
  sid='radarMap2'
  :source="source"
  ref='radarMap2'
/>
const source = [{
  name: '安全系数',
  value: [
    { name: '库水位', value: 100, max: 300 },
    { name: '内部位移', value: 100, max: 300 },
    { name: '内部位移', value: 100, max: 300 },
    { name: '浸润线', value: 100, max: 300 },
    { name: '干滩监测', value: 100, max: 300 },
  ]
}]
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
sid|组件id|string|-|'radarMap2'
source|数据源|array|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
name|系列名字|string|-|'安全系数'
value|雷达图的数据|array|-|value
areaStyle|单项区域填充样式|object|-|-
itemStyle|单个拐点标志的样式|object|-|-
lineStyle|单项线条样式|object|-|-

> value

参数|说明|类型|可选值|默认值
-|-|-|-|-|
text|指示器名字|string|-|-
value|指示器名字|number|-|-
max|指示器的最大值|number|-|-
min|指示器的最小值|number|-|-
color|标签颜色|string|-|-

> options

参数|说明|类型|可选值|默认值
-|-|-|-|-|
name|指示器名称配置项|object|-|-
