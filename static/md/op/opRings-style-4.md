## OpRingsStyle3

> Use
```javascript
<opRings-style-4
  sid='opRings4'
  :source="source"
  ref='opRings4'
/>
const source = [
  { name: '高', value: 333, color: ['#FFF2C9', '#FF4038']},
  { name: '中', value: 333, color: ['#69B5FF', '#38DDFF']},
  { name: '低', value: 333, color: ['#69FFFE', '#10AA7F']},
]
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
sid|组件id|string|-|'opRings4'
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
layerStyle|中间图片配置项|object|-|{image: layer,width: 46,height: 105}
legendStyle|图例样式配置项|object|-|{}
insideColor|内边框线条颜色|array|-|['rgba(105,233,255,0.29)', 'rgba(56,207,255,0)']
outlineColor|外边框线条颜色|array|-|['rgba(105,233,255,0.29)', 'rgba(56,207,255,0)']



