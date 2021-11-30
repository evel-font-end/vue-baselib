## 年月日

>Use
```javascript
<date-style-1 v-model="date1" :isShowTitle="isShowTitle" :format="format" :tip="tip"></date-style-1>


const date1 = "2022-12-12";
const isShowTitle = "true";
const tip = "请选择日期";
const format = "yyyy年MM月dd日";
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
isShowTitle|是否显示日期标题|Boolean|treu/false|true
format|日期显示格式|String|-|yyyy-MM-dd
tip|日期选择提示语|String|-|选择日期
