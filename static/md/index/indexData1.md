## 单指标数据

>Use
```javascript
  <indexData1 
    :iconImg="indexData1.iconImg"
    :bgImg="indexData1.bgImg"
    :gifImg="indexData1.gifImg"
    :num="indexData1.num"
    :text="indexData1.text"/>
  <indexData2
    :iconImg="indexData2.iconImg"
    :bgImg="indexData2.bgImg"
    :num="indexData2.num"
    :text="indexData2.text"/>
  <indexData3
    :num="indexData3.num"
    :borderStyle="indexData3.borderStyle"
    :backgroundStyle="indexData3.backgroundStyle"
    :text="indexData3.text"
    :iconClass="indexData3.iconClass"
    :iconStyle="indexData3.iconStyle"
    :iconBgStyle="indexData3.iconBgStyle"/>
  <indexData4
    :bgImg="indexData4.bgImg"
    :num="indexData4.num"
    :text="indexData4.text"
    :iconClass="indexData4.iconClass"
    :iconStyle="indexData4.iconStyle"/>
  <indexData5
    :iconImg="indexData5.iconImg"
    :num="indexData5.num"
    :text="indexData5.text"
    :borderStyle="indexData5.borderStyle"
    :backgroundStyle="indexData5.backgroundStyle"/>
  <indexData6
    :iconImg="indexData6.iconImg"
    :num="indexData6.num"
    :text="indexData6.text"
    :borderStyle="indexData6.borderStyle"
    :backgroundStyle="indexData6.backgroundStyle"/>
  <indexData7
    :num="indexData7.num"
    :text="indexData7.text"
    :bgImg="indexData7.bgImg"/>
  <indexData8
    :num="indexData8.num"
    :text="indexData8.text"
    :iconTitle="indexData8.iconTitle"
    :iconBgStyle="indexData8.iconBgStyle"
    :borderStyle="indexData8.borderStyle"
    :backgroundStyle="indexData8.backgroundStyle"/>
  <indexData9
    :num="indexData9.num"
    :text="indexData9.text"
    :iconImg="indexData9.iconImg"
    :unit="indexData9.unit"/>
  <indexData10
    :icon="indexData10.icon"
    :buildTitle="indexData10.buildTitle"
    :timeText="indexData10.timeText"
    :num="indexData10.num"
    :boxStyle="indexData10.boxStyle"/>
  <indexData11
    :num="indexData11.num"
    :text="indexData11.text"
    :iconImg="indexData11.iconImg"
    :icon="indexData11.icon"
    :borderStyle="indexData11.borderStyle"
    :backgroundStyle="indexData11.backgroundStyle"/>
   <indexData12
    :num="indexData12.num"
    :text="indexData12.text"
    :unit="indexData12.unit"
    :iconImg="indexData12.iconImg"
    :borderStyle="indexData12.borderStyle"
    :backgroundStyle="indexData12.backgroundStyle"
    :progressBgStyle="indexData12.progressBgStyle"
    :progressValueStyle="indexData12.progressValueStyle"/>
  <indexData13
    :num="indexData13.num"
    :text="indexData13.text"
    :iconImg="indexData13.iconImg"
    :borderStyle="indexData13.borderStyle"
    :backgroundStyle="indexData13.backgroundStyle"/>
  <indexData14
    :num="indexData14.num"
    :text="indexData14.text"
    :bgImg="indexData14.bgImg"
    :btnImg="indexData14.btnImg"
    :icon="indexData14.icon"
    :btnText="indexData14.btnText"/>
  <indexData15
    :num="indexData15.num"
    :text="indexData15.text"
    :bgImg="indexData15.bgImg"
    :iconImg="indexData15.iconImg"/>
  <indexData16
    :num="indexData16.num"
    :text="indexData16.text"
    :bgImg="indexData16.bgImg"/>
  <indexData17
    :num="indexData17.num"
    :text="indexData17.text"
    :bgImg="indexData17.bgImg"/>
  <indexData18
    :text="indexData18.text"
    :bgImg="indexData18.bgImg"
    :icon="indexData18.icon"/>
  <indexData19
    :num="indexData19.num"
    :text="indexData19.text"
    :bottomBgImg="indexData19.bottomBgImg"
    :topBgImg="indexData19.topBgImg"
    :btnText="indexData19.btnText"/>
  <indexData20
    :num="indexData20.num"
    :unit="indexData20.unit"
    :text="indexData20.text"
    :bgImg="indexData20.bgImg"
    :icon="indexData20.icon"/>
  <indexData21
    :num="indexData21.num"
    :text="indexData21.text"
    :bgImg="indexData21.bgImg"/>
  <indexData22
    :num="indexData22.num"
    :text="indexData22.text"
    :bgImg="indexData22.bgImg"/>

  const indexData1 = {
    iconImg: require("../../cell/indexDaimages/tooltip.png"),
    bgImg: require("../../cell/indexDaimages/gray_bg.png"),
    gifImg: require("../../cell/indexDaimages/tooltip.gif"),
    num: {
      value: 200,
      style: {}
    },
    text: {
      value: "使用中",
      style: {}
    }
  }

  const indexData2 = {
    iconImg: require("../../ceindexData/images/tooltipng"),
    bgImg: require("../../ceindexData/images/indexdatpng"),
    num: {
      value: "200%",
      style: {
        color: "red"
      }
    },
    text: {
      value: "一干成端熔接率",
      style: {}
    }
  }
  
  const indexData3 = {
    num: {
      value: 300,
      style: {}
    },
    text: {
      value: "调度调单数",
      style: {}
    },
    iconClass: "iconfont icon-tiaodan",
    borderStyle: "",
    backgroundStyle: "",
    iconStyle: {},
    iconBgStyle: {}
  }

  const indexData4 = {
    bgImg: "",
    iconClass: "iconfont icon-zhenduan",
    iconStyle: {},
    num: {
      value: "49504",
      style: {}
    },
    text: {
      value: "全国日诊断告警量",
      style: {}
    }
  }

  const indexData5 = {
    iconImg: require("../../cell/indexData/images/tooltippng"),
    borderStyle: "",
    backgroundStyle: "",
    num: {
      value: "49504",
      style: {}
    },
    text: {
      value: "全国日诊断告警量",
      style: {}
    }
  }
  const indexData6 = {
    iconImg: require("../../cell/indexData/images/tooltip6.png"),
    borderStyle: "",
    backgroundStyle: "",
    num: {
      value: "6972929",
      style: {}
    },
    text: {
      value: "上联带宽",
      style: {}
    }
  }
  const indexData7 = {
    bgImg: "",
    num: {
      value: "390",
      style: {}
    },
    text: {
      value: "全国4G小区",
      style: {}
    }
  }

  const indexData8 = {
    num: {
      value: "390",
      style: {}
    },
    text: {
      value: "总数",
      style: {}
    },
    iconTitle: {
      value: "调用",
      style: {}
    },
    iconBgStyle: {},
    borderStyle: "",
    backgroundStyle: ""
  }
  const indexData9 = {
    num: {
      value: "65",
      style: {}
    },
    text: {
      value: "广播器总数",
      style: {}
    },
    unit: {
      value: "个",
      style: {}
    },
    iconImg: require("../../cell/indexData/images/tooltip9.png")
  }

  const indexData10 = {
    icon: {
      class: "iconfont icon-Clei",
      style: {}
    },
    buildTitle: {
      value: "C类楼宇",
      style: {}
    },
    timeText: {
      value: "6日通",
      style: {}
    },
    num: {
      value: "750",
      style: {}
    },
    boxStyle: {}
  }

  const indexData11 = {
    num: {
      value: "65",
      style: {}
    },
    text: {
      value: "基站机房",
      style: {}
    },
    icon: {
      class: "iconfont icon-jifang",
      style: {}
    },
    iconImg: require("../../cell/indexData/images/tooltip11.png"),
    borderStyle: {},
    backgroundStyle: {}
  }

  const indexData12 = {
    num: {
      value: "65",
      style: {}
    },
    text: {
      value: "接入",
      style: {}
    },
    icon: {
      class: "iconfont icon-jifang",
      style: {}
    },
    unit: {
      value: "%",
      style: {}
    },
    progressBgStyle: {
      startColor: "rgba(15,121,163,0.36)",
      endColor: "rgba(15,121,163,0.36)"
    },
    progressValueStyle: {
      startColor: "rgba(0,209,255,1)",
      endColor: "rgba(0,209,255,0.15)"
    },
    iconImg: require("../../cell/indexData/images/tooltip12.png"),
    borderStyle: {},
    backgroundStyle: {}
  }

  const indexData13 = {
    num: {
      value: "65",
      style: {}
    },
    text: {
      value: "耗电量总计",
      style: {}
    },
    iconImg: require("../../cell/indexData/images/tooltip13.png"),
    borderStyle: {},
    backgroundStyle: {}
  }

  const indexData14 = {
    bgImg: require("../../cell/indexData/images/indexdata14.png"),
    btnImg: require("../../cell/indexData/images/tooltip14.png"),
    num: {
      value: "390",
      style: {}
    },
    icon: {
      class: "iconfont icon-banka",
      style: {}
    },
    text: {
      value: "板卡",
      style: {}
    },
    btnText: {
      value: "查看",
      style: {}
    }
  }

  const indexData15 = {
    bgImg: require("../../cell/indexData/images/indexdata15.png"),
    num: {
      value: "390",
      style: {}
    },
    iconImg: require("../../cell/indexData/images/tooltip15.png"),
    text: {
      value: "政企电路数",
      style: {}
    }
  }
  const indexData16 = {
    bgImg: require("../../cell/indexData/images/indexdata16.png"),
    num: {
      value: "9.75min",
      style: {}
    },
    text: {
      value: "执行时长",
      style: {}
    }
  }
  
  const indexData17 = {
    bgImg: require("../../cell/indexData/images/indexdata17.png"),
    num: {
      value: "84990",
      style: {}
    },
    text: {
      value: "169骨干网",
      style: {}
    }
  }
  cosnt indexData18 = {
    bgImg: require("../../cell/indexData/images/indexdata18.png"),
    text: {
      value: "4G",
      style: {}
    },
    icon: {
      class: "iconfont icon-wangluo",
      style: {}
    }
  }

  const indexData19 = {
    topBgImg: require("../../cell/indexData/images/indexdata19_topng"),
    bottomBgImg: require("../../cell/indexData/imageindexdata19_bottom.png"),
    num: {
      value: "378885",
      style: {}
    },
    text: {
      value: "传输网",
      style: {}
    },
    btnText: {
      value: "查看",
      style: {}
    }
  }
  
  const indexData20 = {
    bgImg: require("../../cell/indexData/imageindexdata20.png"),
    icon: {
      class: "iconfont icon-rili",
      style: {}
    },
    num: {
      value: "778",
      style: {}
    },
    text: {
      value: "月用电量",
      style: {}
    },
    unit: {
      value: "度",
      style: {}
    }
  }

  const indexData21 = {
    bgImg: require("../../cell/indexData/images/indexdata21.png"),
    num: {
      value: "4G",
      style: {}
    },
    text: {
      value: "月用电量",
      style: {}
    }
  }
    
  const indexData22 = {
    bgImg: require("../../cell/indexData/images/indexdata22.png"),
    num: {
      value: "23676",
      style: {}
    },
    text: {
      value: "不达标资源",
      style: {}
    }
  }

  ```
  
  > Props
  
  参数|说明|类型|可选值|默认值
  -|-|-|-|-
  iconImg|图片路径|String|-|-
  bgImg|背景图片路径|String|-|-
  gifImg|动态图片路径|String|-|-
  num|指标数据值|Object|-|-
  text|指标数据标题|Object|-|-
  iconClass|字体图标iconfont|Object|-|-
  borderStyle|背景边框样式|Object|-|-
  backgroundStyle|背景色样式|Object|-|-
  iconStyle|字体图标样式|Object|-|-
  iconBgStyle|字体图标外围圆圈样式|Object|-|-
  iconTitle|属性值|Object|-|-
  unit|单位|String|-|-
  icon|icon图标|Object|-|-
  buildTitle|指标数据类型|Object|-|-
  timeText|指标数据类型|Object|-|-
  boxStyle|椭圆框|Object|-|-
  progressBgStyle|进度条底色样式|Object|-|-
  progressValueStyle|进度条刻度值样式|Object|-|-
  btnImg|按钮背景图片路径|String|-|-
  btnText|按钮文字|String|-|-
  topBgImg|顶部背景图片路径|String|-|-
  bottomBgImg|底部背景图片路径|String|-|-
