## 年

>Use
```javascript
<dateStyle3 ref="dateStyle3" v-model="year" :isShowTitle="isShowTitle" ></dateStyle3>


const month = "2025";
const isShowTitle = "true";
const tip = "请选择年份";
const format = "yyyy年";
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
isShowTitle|是否显示日期标题|Boolean|treu/false|true
format|日期显示格式|String|-|yyyy
tip|日期选择提示语|String|-|选择年份
