## CrumbsStyle1

> Use

``` javascript

<table-style-3 
    :orderTableDataList="orderTableDataList3" 
    @operatorhandleEdit="operatorhandleEdit" 
    @tablehangClick="tablehangClick" 
    ref="table3" />

const orderTableDataList3 = {
    titleList: [
        {
            title: "地市",
            field: "text1",
            width:'100',
        },
        {
            title: "客户名称",
            field: "text2",
            width:'340',
        },
        {
            title: "宽带",
            field: "text3",
            width:'80',
        },
        {
            title: "业务号码",
            field: "text4",
            width:'',
        },
        {
            title: "数据来源",
            field: "text5",
            width:'',
        },
        {
            title: "操作类型",
            field: "text6",
            width:'',
        },
        {
            title: "电路状态",
            field: "text7",
            width:'',
        },
        {
            title: "文本路由",
            field: "text8",
            width:'200',
        },
    ],
    dataList: [
        {
            text1:'广东省',
            text2:'广东省广州市天河区白云黑土集团有限公司',
            text3:'2M',
            text4:'107357269',
            text5:'政企中台',
            text6:'新增',
            text7:'占用',
            text8:'这是一段文本路由…',
        },
        {
            text1:'北京市',
            text2:'北京市海淀区世铎股份有限公司',
            text3:'2M',
            text4:'GD46285',
            text5:'政企中台',
            text6:'新增',
            text7:'空闲',
            text8:'这是一段文本路由…',
        },
        {
            text1:'广东省',
            text2:'广东省广州市天河区白云黑土集团有限公司',
            text3:'2M',
            text4:'107357269',
            text5:'政企中台',
            text6:'变更',
            text7:'空闲',
            text8:'这是一段文本路由…',
        },
    ]
}
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-|
orderTableDataList|表格数据|Object|-|-
emptyText|空数据时显示的文本内容|String|-|暂无数据
loadingText|数据加载时显示的文本内容|String|-|数据加载中...
showOverflowTooltip|当内容过长被隐藏时显示|Boolean|-|true
colAlign|每列文字的对齐方式|String|-|left
operator|是否显示操作列|Boolean|-|true
tableSelect|表格是否显示可勾选|Boolean|-|true
operatorWidth|操作列的宽度|String|-|180

> orderTableDataList

参数|说明|类型|可选值|默认值
-|-|-|-|-
titleList|表头数据|Array|-|-
dataList|表格行数据|Array|-|-

> orderTableDataList.titleList

参数|说明|类型|可选值|默认值
-|-|-|-|-
title|列文案|String|-|-
field|列字段|String|-|-
width|列宽|String|-|-

> orderTableDataList.dataList

参数|说明|类型|可选值|默认值
-|-|-|-|-
XXX|对应列字段|String|-|-

>Table Methods

事件|说明|类型|可选值|默认值
-|-|-|-|-
operatorhandleEdit|操作列点击事件|Function|-|index、row、text
tablehangClick|勾选事件|Function|-|data