## 折柱混合一

> Use

```js
<mix-base-Bar :chartId="id" ref="chartBar1" :chartData="data" />
const data = {
  lineTitle: "指标一",
  barTitle: "指标二",
  xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
  barData: [1, 2, 3, 4, 5, 6, 7, 8],
  lineData: [1, 2, 3, 4, 5, 6, 7, 8]
}
```

> Props

| 参数        | 说明              | 类型   | 可选值 | 默认值                       |
| ----------- | ----------------- | ------ | ------ | ---------------------------- |
| chartId     | 组件 id           | String | -      | **_chartId_**                |
| chartData   | 数据源            | Object | -      | -                            |
| legendColor | legend 图例背景色 | Array  | -      | **_["#EFE438", "#015BCC"]_** |

> data

| 参数      | 说明           | 类型   | 可选值 | 默认值 |
| --------- | -------------- | ------ | ------ | ------ |
| lineTitle | 折线图标题     | String | -      | -      |
| barTitle  | 柱状图标题     | String | -      | -      |
| xdata     | 横轴数据集合   | Array  | -      | -      |
| barData   | 柱状图数据集合 | Array  | -      | -      |
| lineData  | 折线图数据集合 | Array  | -      | -      |
