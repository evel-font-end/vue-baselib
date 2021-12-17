## 年月

>Use
```javascript
<date-style-2 v-model="month" :isShowTitle="isShowTitle" :format="format" :tip="tip"></date-style-2>


const month = "2022-12";
const isShowTitle = "false";
const tip = "请选择月份";
const format = "yyyy/MM";
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
isShowTitle|是否显示日期标题|Boolean|treu/false|true
format|日期显示格式|String|-|yyyy-MM
tip|日期选择提示语|String|-|选择日期

