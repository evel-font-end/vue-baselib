## 分页二

>Use
```javascript
  <pagination-style-3
    @current-change="onCurrentChange3"
    @size-change="onPageSizeChange3"
    :pageSize="page3.pageSize"
    :currentPage="page3.current"
    :pagerCount="page3.count"
    :total="page3.total"
  </pagination-style-3>
  <pagination-style-4
    @current-change="onCurrentChange4"
    @size-change="onPageSizeChange4"
    :pageSize="page4.pageSize"
    :currentPage="page4.current"
    :total="page4.total"
  </pagination-style-4>


const page3 = {
  pageSize: 10,
  current: 1,
  count: 5,
  total: 230,
},
const page4 = {
  pageSize: 20,
  current: 1,
  total: 100,
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

事件名称|说明|类型|可选值|回调参数
-|-|-|-|-
current-change|currentPage改变时会触发|Function|-| 当前页
size-change|pageSize(每页条数) 改变时会触发|Function|-| 每页条数
