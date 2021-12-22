## 基础折线图

> Use

```js
<lineStyle2 :chartId="id" ref="line2" :chartData="data" />
const data = {
    lineTitle: ["指标一", "指标二"],
    colors: ['#21B791', '#FFBA1E'],
    xdata: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
    ydata: [
      [
        [134, 235, 312, 412, 512, 136, 457, 128],
        [21, 14, 343, 422, 535, 236, 127, 118]
      ],
      [421, 214, 343, 422, 535, 236, 527, 118],
      [421, 114, 343, 422, 535, 236, 527, 118],
    ]
}
```

> Props

| 参数                | 说明                         | 类型   | 可选值       | 默认值                                                                       |
| ------------------- | ---------------------------- | ------ | ------------ | ---------------------------------------------------------------------------- |
| chartId             | 组件 id                      | String | -            | **_lineChart_**                                                              |
| chartData           | 数据源                       | Object | -            | -                                                                            |
| legendColor         | legend 图例背景色            | Array  | -            | **_["#21B791", "#FFBA1E"]_**                                                 |
| xAxisLabel          | X 轴坐标刻度文字样式         | Object | -            | **_{color: "#88D7FD",fontSize: 14,fontFamily: "PingFangSC"}_**               |
| yAxisLabel          | Y 轴坐标刻度文字样式         | Object | -            | **_{color: "#88D7FD",fontSize: 14,fontFamily: "PingFangSC"}_**               |
| xAxisLineStyle      | X 坐标轴样式                 | Object | -            | **_{type: "solid",color: "rgba(41,153,234,0.2)",width: "1" }_**              |
| yAxisSplitLineStyle | Y 轴 网格线样式              | Object | -            | **_{color: "rgba(41,153,234,0.2)",width: 1,type: "solid"}_**

> data

| 参数       | 说明              | 类型   | 可选值 | 默认值 |
| ---------- | ----------------- | ------ | ------ | ------ |
| lineTitle | 折线图标题     | Array | -      | -      |
| colors | 折线图颜色     | Array | -      | -      |
| xdata      | 横轴数据集合      | Array  | -      | -      |
| ydata     | 折线图  数据集合 | Array  | -      | -      |

