## RankingStyle5

> Use
```javascript
<ranking-style-5
  sid='ranking5'
  :source="source"
  ref='ranking5' />
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
sid|组件id|string|-|'ranking5'
source|数据源|object|-|source
options|配置项|object|-|options

> source

参数|说明|类型|可选值|默认值
-|-|-|-|-|
name|数据名称|string|-|'库水位'
value|进度条数据|number|-|100
score|进度条百分比|number/string|-|20
indexText|排名内容|string|-|-

> options

参数|说明|类型|可选值|默认值
-|-|-|-|-|
class|样式名称|string|-|-
childClass|进度条样式名称|string|-|-
columnWidth|列宽度|array[number]|-|[100, 136, 65][125, 125, 125, 125]
header|表头数据|array[string]|-|["排名", "API服务", "API服务数量", "文件服务"]
...dv-scroll-board|config属性|object|-|[dv-scroll-board](http://datav.jiaminghi.com/guide/scrollBoard.html#config%E5%B1%9E%E6%80%A7)
