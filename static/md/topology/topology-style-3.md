## CrumbsStyle2

> Use
```JavaScript
<topology-style-3 :dataList="data3List" ref="topology3" />

const data3List = {
    dataProcessing: {
        title: "数据加工",
        image: require("../../../assets/image/machining.png"),
        subData:[
            {
                title:"算力规模",
                num:"10个",
            },
            {
                title:"已执行任务",
                num:"20个",
            },
            {
                title:"等待平均时延",
                num:"29个",
            },
            {
                title:"平均执行时长",
                num:"119.57PiB",
            },
        ]
    },
},
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
data3List|展示数据|Object|-|-

>data3List

参数|说明|类型|可选值|默认值
-|-|-|-|-
title|左侧文案|String|-|-
image|左侧图片|String|-|-
subData|右侧数据|Array|-|-
subData.title|右侧文案|String|-|-
subData.num|右侧数值|String|-|-