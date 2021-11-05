## OpRingsStyle3

> Use
```javascript
<opRings-style-3
  sid='opRings3'
  :source="source"
  ref='opRings3'
/>
const source = [
  { name: '空闲', value: 333, color: ['#20FBAA', '#09EFF5']},
  { name: '部分占用', value: 444, color: ['#57B4FF', '#00B0FF']},
  { name: '置满', value: 222, color: ['#FB7320', '#FF726C']},
  { name: '占用', value: 555, color: ['#F0FF48', '#FFB151']},
  { name: '预留', value: 111, color: ['#EEFAFF', '#EEFAFF']},
  { name: '损坏', value: 666, color: ['#5385FE', '#AD99FF']},
]
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
sid|组件id|string|-|'opRings3'
source|数据源|array|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
name|名称|string|-|'空闲'
value|名称|number|-|0
color|颜色|array|-|['#20FBAA', '#09EFF5']

> options

参数|说明|类型|可选值|默认值
-|-|-|-|-|
text|数值|number|-|数据源value相加
textStyle|数值样式|object|-|{color: '#ABDBFF',fontSize: 28}
subtext|副标题文本|string|-|'机架总数'
subtextStyle|副标题样式|object|-|{color: '#fff',fontSize: 14}
splitColor|刻度颜色|string|-|'#09EFF5'
lineColor|线条颜色|array|-|['#20EFFB', '#099EF5']
pointColor|端点颜色|array|-|['#45C3FF', '#45C3FF']
labelLineColor|label线条颜色|string|-|'#DCDCDC'
label|label配置项|object|-|{}



