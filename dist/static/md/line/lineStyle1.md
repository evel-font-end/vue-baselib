## 平滑折线图

> Use

```js
<lineStyle1 :chartId="id" ref="line1" :chartData="data" />
const data = {
  lineTitle1: "指标一",
  lineTitle2: "指标二",
  xdata: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
  ydata1: [134, 235, 312, 412, 512, 136, 457, 128],
  ydata2: [421, 214, 343, 422, 535, 236, 527, 118]
}
```

> Props

| 参数                | 说明                         | 类型   | 可选值       | 默认值                                                                       |
| ------------------- | ---------------------------- | ------ | ------------ | ---------------------------------------------------------------------------- |
| chartId             | 组件 id                      | String | -            | **_lineChart_**                                                              |
| chartData           | 数据源                       | Object | -            | -                                                                            |
| legendColor         | legend 图例背景色            | Array  | -            | **_["#38DFEF", "#27DDA8"]_**                                                 |
| line1LegendStyle    | 折线图 1 legend 图例文字样式 | Object | -            | **_{fontSize: 14,fontFamily: "PingFangSC",color: "#ffff"}_**                 |
| line2LegendStyle    | 折线图 1 legend 图例文字样式 | Object | -            | **_{fontSize: 14,fontFamily: "PingFangSC",color: "#ffff"}_**                 |
| xAxisLabel          | X 轴坐标刻度文字样式         | Object | -            | **_{color: "#88D7FD",fontSize: 14,fontFamily: "PingFangSC"}_**               |
| yAxisLabel          | Y 轴坐标刻度文字样式         | Object | -            | **_{color: "#88D7FD",fontSize: 14,fontFamily: "PingFangSC"}_**               |
| xAxisLineStyle      | X 坐标轴样式                 | Object | -            | **_{type: "solid",color: "rgba(41,153,234,0.2)",width: "1" }_**              |
| yAxisSplitLineStyle | Y 轴 网格线样式              | Object | -            | **_{color: "rgba(41,153,234,0.2)",width: 1,type: "solid"}_**                 |
| line1Color          | 折线图 1 折线颜色            | Array  | 支持颜色渐变 | **_["rgba(56,223,239,0.08)","rgba(56,223,239,1)","rgba(56,223,239,0.08)"]_** |
| line2Color          | 折线图 2 折线颜色            | Array  | 支持颜色渐变 | **_["rgba(39,221,168,0.08)","rgba(39,221,168,1)","rgba(39,221,168,0.08)"]_** |

> data

| 参数       | 说明              | 类型   | 可选值 | 默认值 |
| ---------- | ----------------- | ------ | ------ | ------ |
| lineTitle1 | 折线图 1 标题     | String | -      | -      |
| lineTitle2 | 折线图 2 标题     | String | -      | -      |
| xdata      | 横轴数据集合      | Array  | -      | -      |
| ydata1     | 折线图 1 数据集合 | Array  | -      | -      |
| ydata2     | 折线图 2 数据集合 | Array  | -      | -      |

> line1Color

> > 折线图 1 折线颜色

**_可添加配置：_**

```js
最多只能设置三个值。如：["#07F096", "#07F0E2", "#88D7FD"],也可只设置一个值：["#07F096"]
折线颜色渐变取值为从左到右方向取值

```

> line2Color

> > 折线图 2 折线颜色

**_可添加配置：_**

```js
最多只能设置三个值。如：["#07F096", "#07F0E2", "#88D7FD"],也可只设置一个值：["#07F096"]
折线颜色渐变取值为从左到右方向取值

```
