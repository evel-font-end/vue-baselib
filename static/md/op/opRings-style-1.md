## OpRingsStyle1

> Use
```javascript
<opRings-style-1
  sid='opRings1'
  :source="source"
  ref='opRings1'
/>
const source = [
  { name: '自动核配数', value: 84 },
  { name: '互联网专线总数', value: 16 },
]
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
sid|组件id|string|-|'opRings1'
source|数据源|object|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
name|数据名称|string|-|'稽核准确率'
value|环形数据|number|-|84

> options

参数|说明|类型|可选值|默认值
-|-|-|-|-|
liquidFillBgStyle|水球背景样式|object|-|{borderWidth: 1,color: 'rgb(255,0,255,0.1)'}
liquidFillLabel|水球文本设置项|object|-|{show: false}


