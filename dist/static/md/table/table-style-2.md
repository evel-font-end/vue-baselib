## CrumbsStyle1

> Use
```javascript

<table-style-2 :orderTableDataList="orderTableDataList2" ref="table2" />

const orderTableDataList2 = {
    titleList: [
        {
            title: "等级",
            field: "text1",
            width:'',
        },
        {
            title: "标准地址",
            field: "text2",
            width:'',
        },
        {
            title: "无源覆盖",
            field: "text3",
            width:'',
        },
        {
            title: "可开通业务",
            field: "text4",
            width:'',
        },
    ],
    dataList: [
        {
            id: 1,
            text1:'8级',
            text2:'广东省广州市天河区珠江西路5号',
            text3:'清江怡苑光交',
            text4:'以太网专线、SDH数字电路、互联网专线',
            children: [
                {
                    id: 11,
                    text1:'8级',
                    text2:'广东省广州市天河区珠江西路5号',
                    text3:'清江怡苑光交',
                    text4:'以太网专线、SDH数字电路、互联网专线',
                    children: [
                        {
                            id: 121,
                            text1:'8级',
                            text2:'广东省广州市天河区珠江西路5号33',
                            text3:'清江怡苑光交3',
                            text4:'以太网专线、SDH数字电路、互联网专线333',
                        },
                    ]
                },
            ]
        },
        {
            id: 2,
            text1:'8级',
            text2:'广东省广州市天河区珠江西路5号',
            text3:'清江怡苑光交',
            text4:'以太网专线、SDH数字电路、互联网专线',
            children: [
                {
                    id: 21,
                    text1:'8级',
                    text2:'广东省广州市天河区珠江西路5号',
                    text3:'清江怡苑光交',
                    text4:'以太网专线、SDH数字电路、互联网专线',
                    children: [
                        {
                            id: 221,
                            text1:'8级',
                            text2:'广东省广州市天河区珠江西路5号33',
                            text3:'清江怡苑光交',
                            text4:'以太网专线、SDH数字电路、互联网专线33',
                        },
                    ]
                },
            ]
        },
        {
            id: 3,
            text1:'8级',
            text2:'广东省广州市天河区珠江西路5号',
            text3:'清江怡苑光交',
            text4:'以太网专线、SDH数字电路、互联网专线',
            children: [
                {
                    id: 31,
                    text1:'8级',
                    text2:'广东省广州市天河区珠江西路5号',
                    text3:'清江怡苑光交',
                    text4:'以太网专线、SDH数字电路、互联网专线',
                    children: [
                        {
                            id: 331,
                            text1:'8级',
                            text2:'广东省广州市天河区珠江西路5号333',
                            text3:'清江怡苑光交33',
                            text4:'以太网专线、SDH数字电路、互联网专线33',
                        },
                    ]
                },
            ]
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
id|行id|Number|-|-
children|子行数据（可嵌套）|Object|-|-
XXX|对应列字段|Array|-|-