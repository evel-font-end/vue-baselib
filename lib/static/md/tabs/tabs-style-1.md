## 横向tab标签

>Use
```javascript
    <tabs-style-1 v-model="currIndex1" :tabsList="tabsList1" @tabsHandle="tabsHandle1">
      <tabsContent1 v-if="currIndex1==0"></tabsContent1>
      <tabsContent2 v-if="currIndex1==1"></tabsContent2>
      <tabsContent3 v-if="currIndex1==2"></tabsContent3>
      <tabsContent4 v-if="currIndex1==3"></tabsContent4>
    </tabs-style-1>
    <tabs-style-2 v-model="currIndex2"  :tabsList="tabsList2" @tabsHandle="tabsHandle2">
    </tabs-style-2>
     <tabs-style-3 v-model="currIndex3"  :tabsList="tabsList3" @tabsHandle="tabsHandle3">
    </tabs-style-3>
     <tabs-style-4 v-model="currIndex4"  :tabsList="tabsList4" @tabsHandle="tabsHandle4">
    </tabs-style-4>
     <tabs-style-5 v-model="currIndex5"  :tabsList="tabsList5" @tabsHandle="tabsHandle5">
    </tabs-style-5>

    const tabsList1 = ['骨干网核心节点', '国际出口', '骨干网设备端口', '城域网设备'],
    const tabsList2 = [
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
    const tabsList3 = ['总览','一千调度','本地网调度', '二千调度','本地网调度'],
    const tabsList4 = ['稽核统计汇总','稽核详情'],
    const tabsList5 = ['楼宇','电路','机房', '光缆'],
   
    const currIndex1 = 3,
    const currIndex2 = 0,
    const currIndex3 = 2,
    const currIndex4 = 0,
    const currIndex5 = 2,
```

> Props

参数|说明|类型|可选值|默认值
-|-|-|-|-
tabsList|tabs数组|Array|-| -
currIndex1|tabs选中默认值|Number|-| 0


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
