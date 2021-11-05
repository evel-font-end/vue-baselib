## CrumbsStyle2

> Use
```javascript

<crumbs-style-2 :breadcrumbList="breadcrumbListData2" :crumbsIcon="'el-icon-arrow-right'" ref="crumbs2"></crumbs-style-2>

const breadcrumbListData2 = [
    { 
        path: '/line', 
        title: '折线图' 
    }, 
    { 
        path: '/crumbs', 
        title: '面包屑1' 
    }
]
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
breadcrumbList|面包屑数组|Array|-|-
crumbsIcon|分隔符(字体图标)|string|-|'el-icon-arrow-right'


