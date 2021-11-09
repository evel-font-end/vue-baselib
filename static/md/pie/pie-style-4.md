## 南丁格尔玫瑰图

> Use

```
<pie-style-4 :sid="id" ref="pie4" :data="data" :iconImg="iconImg" />
const data = [
          {name: "空间资源",value: 330},
          {name: "管线资源",value: 340},
          {name: "数据资源",value: 350},
          {name: "无线资源",value: 360},
          {name: "传输资源",value: 370},
          {name: "接入资源",value: 380}
        ]
```

> Props

| 参数            | 说明                    | 类型    | 可选值      | 默认值                                                              |
| --------------- | ----------------------- | ------- | ----------- | ------------------------------------------------------------------- |
| sid             | 组件 id                 | String  | -           | **_pie4_**                                                        |
| iconImg         | 圆环中心背景图          | String  | -           | **_-_**                                                             |
| data            | 数据源                  | Array   | -           | -                                                                   |
| color           | 饼图扇区颜色            | Object  | -           | **_["#2CF0FF","#84FFC9","#E5795C","#D869FF","#8768FF","#1B7FF5"]_** |
| legendStyle     | 图例 legend 文字样式    | Object  | -           | **_-_**                                                             |
| labelStyle      | 饼图扇区 label 文字样式 | Object  | -           | **_-_**                                                             |
| isShowLabelLine | 是否显示扇区指示线      | Boolean | **_false_** | **_true_**                                                          |

> data

| 参数  | 说明           | 类型   | 可选值 | 默认值 |
| ----- | -------------- | ------ | ------ | ------ |
| name  | 饼图扇区名字   | String | -      | -      |
| value | 饼图扇区数据值 | Number | -      | -      |

> legendStyle

> > 图例 legend 文字样式

**可添加配置：**

```
legendStyle: {
  fontSize: 12,
  fontWeight: 600,
  color: 'red'
}
```

> labelStyle

> > 饼图扇区 label 文字样式

**可添加配置：**

```
labelStyle: {
  fontSize: 12,
  fontWeight: 600,
  color: 'red'
}
```
