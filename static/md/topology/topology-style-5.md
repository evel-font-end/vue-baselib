## CrumbsStyle2

> Use
```JavaScript
<topology-style-5 :dataList="data5List" ref="topology5" />

const data5List = [
    {
        title: "数据加工",
        image: require('../../../assets/image/serve.png'),
        subData: [
            {
                image: require('../../../assets/image/hexinqu.png'),
                title: "核心区",
                count: 135,
                rightObj: {
                    gaojin: 0,
                    lianjie: 129,
                    neicun: '256G',
                    cpu: '8core*4',
                    cunchu : '100G',
                }
            },
            {
                image: require('../../../assets/image/yonghuqu.png'),
                title: "用户区",
                count: 502,
                rightObj: {
                    gaojin: 0,
                    lianjie: 490,
                    neicun: '64G',
                    cpu: '16vCPU',
                    cunchu : '100G',
                }
            },
            {
                image: require('../../../assets/image/dmz.png'),
                title: "DMZ",
                count: 14,
                rightObj: {
                    gaojin: 0,
                    lianjie: 9,
                    neicun: '16G',
                    cpu: '8vCPU',
                    cunchu : '100G',
                }
            }
        ]
    },
]
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
dataList|数据|Array|-|-


