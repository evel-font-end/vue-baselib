## CrumbsStyle1

> Use
```javascript

<table-style-1 :orderTableDataList="orderTableDataList1" ref="table1" />

const orderTableDataList1 = {
    titleList: [
        {
            title: "中心名称",
            field: "text1",
            width:'',
        },
        {
            title: "能理接入数",
            field: "text2",
            width:'',
        },
        {
            title: "平台调用量",
            field: "text3",
            width:'',
        },
        {
            title: "调用成功率",
            field: "text4",
            width:'',
        },
        {
            title: "平均延时",
            field: "text5",
            width:'',
        },
        {
            title: "订购总次数",
            field: "text6",
            width:'',
        },
        {
            title: "支撑应用总数",
            field: "text7",
            width:'',
        },
    ],
    dataList: [
        {
            text1:'资源中心',
            text2:'570',
            text3:'5300131',
            text4:'99.45%',
            text5:'684',
            text6:'211',
            text7:'688',
        },
        {
            text1:'数据中心',
            text2:'663',
            text3:'411971',
            text4:'99.69%',
            text5:'1155',
            text6:'226',
            text7:'56',
        },
        {
            text1:'网络AI中心',
            text2:'62',
            text3:'155',
            text4:'99.45%',
            text5:'5634',
            text6:'36',
            text7:'68',
        },
    ]
}
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
orderTableDataList|表格配置数据|Object|-|-
emptyText|空数据时显示的文本内容|String|-|暂无数据
loadingText|数据加载时显示的文本内容|String|-|数据加载中...
showOverflowTooltip|当内容过长被隐藏时显示|Boolean|-|true
colAlign|每列文字的对齐方式|String|-|left

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
XXX|对应列字段|Array|-|-