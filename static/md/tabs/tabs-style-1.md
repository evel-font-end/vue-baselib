## 横向tab标签

>Use
```javascript
    <tabs-style-1 :tabsList="tabsList1" @tabsHandle="tabsHandle1" ref="tabsStyle1">
      <tabsContent1 v-if="currIndex1==0"></tabsContent1>
      <tabsContent2 v-if="currIndex1==1"></tabsContent2>
      <tabsContent3 v-if="currIndex1==2"></tabsContent3>
      <tabsContent4 v-if="currIndex1==3"></tabsContent4>
    </tabs-style-1>
    <tabs-style-2  :tabsList="tabsList2" @tabsHandle="tabsHandle2">
    </tabs-style-2>

    const tabsList1 = [
        '骨干网核心节点',
        '国际出口',
        '骨干网设备端口',
        '城域网设备',
     	],
    const tabsList2 = [
      {
        icon: 'iconfont icon-dianlu',
        title: '电路',
        style: {
          color: '#3fd6f1'
        }
      },
      ...
    ],
    
    const currIndex1 = 0,
    const currIndex2 = 0,
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
tabsList|tabs数组|Array|-| -


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
