## 竖向tab标签

>Use
```javascript
    <tabs-style-6 v-model="currIndex6" :tabsList="tabsList6" @tabsHandle="tabsHandle6">
      <tabsContent1 v-if="currIndex6==0"></tabsContent1>
      <tabsContent2 v-if="currIndex6==1"></tabsContent2>
      <tabsContent3 v-if="currIndex6==2"></tabsContent3>
      <tabsContent4 v-if="currIndex6==3"></tabsContent4>
    </tabs-style-6>
    <tabs-style-7 v-model="currIndex7" :tabsList="tabsList7" @tabsHandle="tabsHandle7">
      <tabsContent1 v-if="currIndex7==0"></tabsContent1>
      <tabsContent2 v-if="currIndex7==1"></tabsContent2>
    </tabs-style-7>

    const tabsList6 = [
      {
        icon: 'iconfont icon-dianlu',
        title: '电路',
        style: {
          color: '#3fd6f1'
        }
      },
      {
        icon: 'iconfont icon-louyu',
        title: '楼宇',
        style: {
          color: '#3fd6f1'
        }
      },
      ...
    ],
    const tabsList7 = ['机房','局站'],
    
    const currIndex6 = 0,
    const currIndex7 = 1,
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
tabsList|tabs数组|Array|-| -
currIndex6|tabs选中默认值|Number|-| 0


> tabsList

参数|说明|类型|可选值|默认值
-|-|-|-|-
icon|icon图标名字|String|-| -
title|tab按钮名字|String|-| -
style|可设置icon图标的颜色、大小等属性|Object|-| -


> methods

事件名称|说明|类型|可选值|回调参数
-|-|-|-|-
tabsHandle|tabs点击事件|Function|-|返回tabsList的下标值如,0、1、2等
