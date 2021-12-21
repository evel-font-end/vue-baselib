## 平滑折线图

> Use

```js
<lineStyle1 :chartId="id" ref="line1" :chartData="data" />
const data = {
  lineTitle: ["指标一", "指标二", "指标三", "指标四"],
  xdata: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
  colors: ['#0c7d9d', '#587c0c','#7a6ac0', '#c3653f'],
  ydata: [
    [
      [134, 235, 312, 412, 512, 136, 457, 128],
      [21, 14, 343, 422, 535, 236, 127, 118]
    ],
    [
      [34, 25, 32, 41, 52, 16, 45, 28],
      [21, 14, 343, 422, 55, 26, 127, 18]
    ],
    [34, 25, 32, 41, 52, 16, 45, 28],
    [21, 14, 343, 422, 55, 26, 127, 18],
  ]
}
```

> Props

| 参数                | 说明                         | 类型   | 可选值       | 默认值                                                                       |
| ------------------- | ---------------------------- | ------ | ------------ | ---------------------------------------------------------------------------- |
| chartId             | 组件 id                      | String | -            | **_lineChart_**                                                              |
| chartData           | 数据源                       | Object | -            | -                                                                            |
| legendColor         | legend 图例背景色            | Array  | -            | **_["#38DFEF", "#27DDA8"]_**                                                 |
| lineLegendStyle    | 折线图 legend 图例文字样式 | Object | -            | **_{fontSize: 14,fontFamily: "PingFangSC",color: "#ffff"}_**                 |
| xAxisLabel          | X 轴坐标刻度文字样式         | Object | -            | **_{color: "#88D7FD",fontSize: 14,fontFamily: "PingFangSC"}_**               |
| yAxisLabel          | Y 轴坐标刻度文字样式         | Object | -            | **_{color: "#88D7FD",fontSize: 14,fontFamily: "PingFangSC"}_**               |
| xAxisLineStyle      | X 坐标轴样式                 | Object | -            | **_{type: "solid",color: "rgba(41,153,234,0.2)",width: "1" }_**              |
| yAxisSplitLineStyle | Y 轴 网格线样式              | Object | -            | **_{color: "rgba(41,153,234,0.2)",width: 1,type: "solid"}_**                 |


> data

| 参数       | 说明              | 类型   | 可选值 | 默认值 |
| ---------- | ----------------- | ------ | ------ | ------ |
| lineTitle | 折线图标题集合     | Array | -      | -      |
| colors | 折线图颜色集合     | Array | -      | -      |
| xdata      | 横轴数据集合      | Array  | -      | -      |
| ydata     | 折线图数据集合 | Array  | -      | -      |
