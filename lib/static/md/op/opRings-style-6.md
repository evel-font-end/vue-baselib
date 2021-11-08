## OpRingsStyle6

> Use
```javascript
<opRings-style-6
  sid='opRings6'
  :source="source"
  ref='opRings6'
  :formatter="(params) => `${params.name} <br/> ${params.value}%`"
/>
const source = [
  { name: '自动核配数', value: 10, color: '#F58F24'},
  { name: '互联网专线总数', value: 20, color: '#3FF5F8'}
]
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
sid|组件id|string|-|'opRings6'
source|数据源|array|-|source
options|配置项|object|-|options
formatter|tooltip提示|function|-|-

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
name|名称|string|-|'自动核配数'
value|名称|number|-|0
color|颜色|string|-|'5647C9'

> options

参数|说明|类型|可选值|默认值
-|-|-|-|-|
text|标题|string|-|'已开通'
subtext|副标题文本|string|-|'SA基站'
subtextStyle|副标题样式|object|-|{color: '#fff',fontSize: 18,fontFamily: 'PingFangSC, PingFangSC-Regular'}
liquidFillBgStyle|水球背景样式|object|-|{borderWidth: 1,color: 'rgb(255,0,255,0.1)'}
liquidFillLabel|水球文本设置项|object|-|{show: false}
legendTextStyle|图例文本样式|object|-|{fontSize: 14,color: '#FFF',fontFamily: 'PingFangSC',fontWeight: 400,lineHeight: 15}

