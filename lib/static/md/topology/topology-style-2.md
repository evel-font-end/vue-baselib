## CrumbsStyle2

> Use
```javascript

<crumbs-style-2 :breadcrumbList="breadcrumbListData2" :crumbsIcon="'el-icon-arrow-right'" ref="crumbs2"></crumbs-style-2>

const activeIndex:0
const dataList: [
    {
        title: "数据加工",
        image: require('../../../assets/image/serve.png'),
        subData: [
            {
                image: require('../../../assets/image/hexinqu.png'),
                title: "核心区",
                count: 135,
            },
            {
                image: require('../../../assets/image/yonghuqu.png'),
                title: "用户区",
                count: 502,
            },
            {
                image: require('../../../assets/image/dmz.png'),
                title: "DMZ",
                count: 14,
            }
        ],
        listData:[
            {
                list:[
                    {
                        text:"01",
                    },
                    {
                        text:"02",
                    },
                    {
                        text:"03",
                    },
                    {
                        text:"04",
                    },
                    {
                        text:"其他",
                    },
                ]
            },
            {
                list:[
                    {
                        text:"ss",
                    },
                    {
                        text:"0badb2",
                    },
                    {
                        text:"cca03",
                    },
                    {
                        text:"0dddadd4",
                    },
                    {
                        text:"其他dd1",
                    },
                ]
            },
            {
                list:[
                    {
                        text:"0aa",
                    },
                    {
                        text:"0bb2",
                    },
                    {
                        text:"cc03",
                    },
                    {
                        text:"0dd4",
                    },
                    {
                        text:"其他1",
                    },
                ]
            }
        ]
    },
]

```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
activeIndex|默认选中索引值|Number|-|-
dataList|展示数据|Array|-|-

>Table Methods

事件|说明|类型|可选值|默认值
-|-|-|-|-
subItemClickFn|点击切换右侧展示数据|Function|-|index