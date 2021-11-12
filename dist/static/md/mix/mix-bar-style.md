## 折柱混合二

> Use

```js
<mix-base-Bar :chartId="id" ref="chartBar2" :chartData="data" />
const data = {
  lineTitle: "指标一",
  barTitle: "指标二",
  xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
  barData: [1, 2, 3, 4, 5, 6, 7, 8],
  lineData: [1, 2, 3, 4, 5, 6, 7, 8]
}
```

> Props

| 参数               | 说明                       | 类型   | 可选值       | 默认值                                                                             |
| ------------------ | -------------------------- | ------ | ------------ | ---------------------------------------------------------------------------------- |
| chartId            | 组件 id                    | String | -            | **_chartId_**                                                                      |
| chartData          | 数据源                     | Object | -            | -                                                                                  |
| legendColor        | legend 图例背景色          | Array  | -            | **_["#0FF1FC", "#07EE95"]_**                                                       |
| lineLegendStyle    | 折线图 legend 图例文字样式 | Object | -            | **_fontSize: 12,fontFamily: "PingFangSC-Regular",color: "#FFFFFF"_**               |
| barLegendStyle     | 柱状图 legend 图例文字样式 | Object | -            | **_fontSize: 12,fontFamily: "PingFangSC-Regular",color: "#FFFFFF"_**               |
| barBackgroundStyle | 柱状图阴影样式             | Object | -            | **_{color: "#3B9DE629",shadowBlur: 0,shadowColor: "#3B9DE629",shadowOffsetX: 6}_** |
| xAxisLabel         | X 轴坐标刻度文字样式       | Object | -            | **_{fontSize: 14,color: "#88D7FDFF"}_**                                            |
| yAxisLabel         | Y 轴坐标刻度文字样式       | Object | -            | **_{fontSize: 14,color: "#88D7FDFF"}_**                                            |
| barColor           | 柱状图柱状体颜色           | Array  | 支持颜色渐变 | **_["#07F096", "#07F0E2"]_**                                                       |
| lineColor          | 折线图折线颜色             | Array  | 支持颜色渐变 | **_["rgba(15,241,252,0.08)","rgba(15,241,252,1)","rgba(15,241,252,0.08)"]_**       |

> data

| 参数      | 说明           | 类型   | 可选值 | 默认值 |
| --------- | -------------- | ------ | ------ | ------ |
| lineTitle | 折线图标题     | String | -      | -      |
| barTitle  | 柱状图标题     | String | -      | -      |
| xdata     | 横轴数据集合   | Array  | -      | -      |
| barData   | 柱状图数据集合 | Array  | -      | -      |
| lineData  | 折线图数据集合 | Array  | -      | -      |

> barColor

> > 柱状图柱状体颜色

**_可添加配置：_**

```js
最多只能设置三个值。如：["#07F096", "#07F0E2", "#88D7FD"],也可只设置一个值：["#07F096"]
折线颜色渐变取值为从上到下方向取值

```

> lineColor

> > 折线图折线颜色

**_可添加配置：_**

```js
最多只能设置三个值。如：["#07F096", "#07F0E2", "#88D7FD"],也可只设置一个值：["#07F096"]
折线颜色渐变取值为从左到右方向取值

```
