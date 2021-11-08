## OpRingsStyle5

> Use
```javascript
<opRings-style-5
  sid='opRings5'
  :source="source"
  ref='opRings5'
/>
const source = [
  { value: 100, name: '空间资源', color: '#5647C9' },
  { value: 100, name: '管线资源', color: '#5D51FF' },
  { value: 100, name: '数据资源', color: '#5B8DF9' },
  { value: 100, name: '接入资源', color: '#46BDFF' },
  { value: 100, name: '核心资源', color: '#1EDFFF' },
]
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
sid|组件id|string|-|'opRings5'
source|数据源|array|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
name|名称|string|-|'空闲'
value|名称|number|-|0
color|颜色|string|-|'5647C9'

> options

参数|说明|类型|可选值|默认值
-|-|-|-|-|
layerStyle|中间图片配置项|object|-|{image: layer,width: 46,height: 105}
legendStyle|图例样式配置项|object|-|{}
insideColor|内边框线条颜色|array|-|['rgba(105,233,255,0.29)', 'rgba(56,207,255,0)']
outlineColor|外边框线条颜色|array|-|['rgba(105,233,255,0.29)', 'rgba(56,207,255,0)']



