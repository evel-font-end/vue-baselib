## CrumbsStyle1

> Use
```javascript

<crumbs-style-1 :breadcrumbList="breadcrumbListData1" :crumbsIcon="'/'" ref="crumbs1"></crumbs-style-1>

const breadcrumbListData1 = [
    { 
        path: '/bar', 
        title: '混合图表1' 
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
crumbsIcon|分隔符|string|-|'/'


