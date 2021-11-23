## 分页一

>Use
```javascript
  <pagination-style-1
    ref="paginationStyle1"
    @current-change="onCurrentChange"
    :pageSize="page.pageSize"
    :currentPage="page.current"
    :total="page.total"
  </pagination-style-1>
  <pagination-style-2
    @current-change="onCurrentChange2"
    :pageSize="page2.pageSize"
    :currentPage="page2.current"
    :pagerCount="page2.count"
    :total="page2.total"
  </pagination-style-2>


const page = {
  pageSize: 10,
  current: 1,
  total: 70,
},
const page2 = {
  pageSize: 10,
  current: 1,
  count: 5,
  total: 230,
},

```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
pageSize|每页显示条目个数|Number|-| 10
currentPage|当前分页页码|Number|-|1
pagerCount|设置最大页码按钮数|Number|5~21之间的奇数|11
total|总条目数|Number|-|

> methods

事件名称|说明|类型|可选值|默认值
-|-|-|-|-
current-change|currentPage改变时会触发|Function|-| -
