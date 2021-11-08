## RankingStyle1

> Use
```javascript
<ranking-style-1
  sid='ranking1'
  :source="source"
  ref='ranking1' />
const source = [
  { name: '库水位', value: 100, score: '20'},
  { name: '内部位移', value: 100, score: '20'},
  { name: '内部位移', value: 100, score: '20'},
  { name: '浸润线', value: 100, score: '20'},
  { name: '干滩监测', value: 100, score: '20'},
  { name: '干滩监测', value: 100, score: '20'},
  { name: '干滩监测', value: 100, score: '20'},
  { name: '干滩监测', value: 100, score: '20'},
  { name: '干滩监测', value: 100, score: '20'}
]
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
sid|组件id|string|-|'board2'
source|数据源|object|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
name|数据名称|string|-|'稽核准确率'
value|进度条数据|number|-|100
score|进度条百分比|number/string|-|20

> options

参数|说明|类型|可选值|默认值
-|-|-|-|-|
class|样式名称|string|-|-
childClass|进度条样式名称|string|-|-
scrollOptions|滚动配置项|object|-|[vue-seamless-scroll](https://www.npmjs.com/package/seamless-scroll)
isfill|进度条尖角|boolean|-|true
