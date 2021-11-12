## 立体饼图 1

> Use

```javascript
<pie-style-1 :sid="id" ref="pie1" :data="data" />
const data = [
  {name: "空间资源",y: 330,sliced: false,selected: false},
  {name: "管线资源",y: 340,sliced: false,selected: false}
]
```

> Props

| 参数                   | 说明                          | 类型    | 可选值      | 默认值                      |
| ---------------------- | ----------------------------- | ------- | ----------- | --------------------------- |
| sid                    | 组件 id                       | String  | -           | **_pie1_**                |
| data                   | 数据源                        | Array   | -           | -                           |
| color                  | 饼图扇区颜色                  | Object  | -           |**_["#2CF0FF","#84FFC9","#E5795C","#D869FF","#8768FF","#1B7FF5"]_**                 |
| legendStyle            | 图例 legend 文字样式          | Object  | -           | **_-_**                    |
| tooltipStyle           | 提示框 tooltip 中文字内容样式 | Object  | -           | **_-_**                    |
| tooltipBackgroundColor | 提示框 tooltip 背景样式       | String  | -           | **_rgba(49,101,129,0.45)_** |
| tooltipBorderColor     | 提示框 tooltip 边框样式       | String  | -           | **_rgba(49,101,129,0.45)_** |
| isShowTooltip          | 是否显示提示框 tooltip        | Boolean | **_false_** | **_true_**                  |
| isLoopHighLight        | 是否实现饼图循环高亮          | Boolean | **_true_**  | **_false_**                 |
| isShowLabel            | 是否显示饼图扇区指示线        | Boolean | **_false_** | **_true_**                  |

> data

| 参数     | 说明                     | 类型    | 可选值     | 默认值      |
| -------- | ------------------------ | ------- | ---------- | ----------- |
| name     | 饼图扇区名字             | String  | -          | -           |
| y        | 饼图扇区数据值           | Number  | -          | -           |
| sliced   | 饼图扇区是否突出显示     | Boolean | **_true_** | **_false_** |
| selected | 饼图标识数据点是否被选中 | Boolean | **_true_** | **_false_** |

> legendStyle

> > 图例 legend 文字样式

**_可添加配置：_**

```css
legendStyle: {
  fontSize: 12,
  fontWeight: 600,
  color: 'red'
}
```

> tooltipStyle

> > 提示框 tooltip 中文字内容样式

**_可添加配置：_**

```css
tooltipStyle: {
  fontSize: 12,
  fontWeight: 600,
  color: 'red'
}
```
