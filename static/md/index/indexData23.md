## 多指标数据

>Use
```javascript
    <indexData23
      :num="indexData23.num"
      :text="indexData23.text"
      :province="indexData23.province"
      :backgroundStyle="indexData23.backgroundStyle"
      :pieChartData="indexData23.pieChartData"
      :lineChartData="indexData23.lineChartData"/>
    <indexData24
      :normal="indexData24.normal"
      :abnormal="indexData24.abnormal"
      :title="indexData24.title"
      :info1="indexData24.info1"
      :info2="indexData24.info2"
      :allNum="indexData24.allNum"
      :progress="indexData24.progress"
      :backgroundStyle="indexData24.backgroundStyle"/>
    <indexData25
      :title="indexData25.title"
      :info1="indexData25.info1"
      :info2="indexData25.info2"
      :info3="indexData25.info3"
      :info4="indexData25.info4"
      :bgImg="indexData25.bgImg"/>
    <indexData26
      :title="indexData26.title"
      :info1="indexData26.info1"
      :info2="indexData26.info2"
      :unit="indexData26.unit"
      :backgroundStyle="indexData26.backgroundStyle"/>
    <indexData27
      :title1="indexData27.title1"
      :title2="indexData27.title2"
      :iconImg="indexData27.iconImg"
      :progress1="indexData27.progress1"
      :progress2="indexData27.progress2"
      :backgroundStyle="indexData27.backgroundStyle"/>
    <indexData28
      :icon="indexData28.icon"
      :title="indexData28.title"
      :info="indexData28.info"
      :backgroundStyle="indexData28.backgroundStyle"/>
    <indexData29
      :title="indexData29.title"
      :iconImg="indexData29.iconImg"
      :icon="indexData29.icon"
      :backgroundStyle="indexData29.backgroundStyle"
      :info="indexData29.info"/>
    <indexData30
      :title="indexData30.title"
      :backgroundStyle="indexData30.backgroundStyle"
      :info="indexData30.info"/>
    <indexData31
      :tag="indexData31.tag"
      :backgroundStyle="indexData31.backgroundStyle"
      :info="indexData31.info"
      :borderStyle="indexData31.borderStyle"/>

    const indexData23 = {
        province: {
          value: "山东省",
          style: {}
        },
        pieChartData: {
          //饼图配置参数
          data: [
            //饼图数据
            { value: 1048, name: "正常" },
            { value: 735, name: "异常" }
          ],
          color: ["#36ECD6", "#FF8161"], //饼图各圆环颜色
          legend: {
            //饼图图例样式
            orient: "vertical",
            icon: "circle",
            left: "50%",
            top: "center",
            fontsize: "12",
            itemWidth: 8,
            textStyle: {
              color: "#9BCDFF"
            }
          },
          series: {
            //饼图series系列参数
            type: "pie",
            radius: ["50%", "80%"],
            center: ["30%", "50%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "12"
              }
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              normal: {
                borderWidth: 6, //设置border的宽度有多大
                borderColor: "#083F60"
              }
            }
          }
        },
        lineChartData: {
          //折线图配置参数
          xData: [
            //X轴数据
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12"
          ],
          xAxisLabel: {
            //X轴刻度值样式
            textStyle: {
              color: "#63aee5"
            }
          },
          ySplitLine: {
            //横向网格线样式
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.18)",
              width: 1,
              opacity: 0.7
            }
          },
          yAxisLabel: {
            //Y轴刻度值样式
            textStyle: {
              color: "#63aee5"
            }
          },
          yData: [
            //Y轴数据
            2432,
            465,
            8686,
            131,
            3455,
            2425,
            654,
            321,
            675,
            321,
            5423,
            1245
          ],
          lineStyle: {
            //折线样式
            normal: {
              width: 2,
              color: {
                type: "linear",
                colorStops: [
                  {
                    offset: 0,
                    color: "#00EBFF"
                  },
                  {
                    offset: 1,
                    color: "#00EBFF"
                  }
                ],
                globalCoord: false
              }
            }
          },
          areaStyle: [
            //折线区域面积颜色
            {
              offset: 0,
              color: "rgba(49,251,217,0.38)"
            },

            {
              offset: 1,
              color: "rgba(49,251,217,0)"
            }
          ],
          title: {
            //折线标题文字样式
            text: "近三天资源入库趋势",
            left: "left",
            top: "10",
            textStyle: {
              fontSize: "12",
              color: "#9BCDFF"
            }
          }
        },
        num: {
          value: "877499",
          style: {}
        },
        text: {
          value: "总资源数",
          style: {}
        },
        backgroundStyle: {} //上方背景颜色
      }

      const indexData24 = {
        title: {
          value: "管线",
          style: {}
        },
        info1: {
          name: {
            value: "总资源表",
            style: {}
          },
          num: {
            value: "23490",
            style: {}
          }
        },
        info2: {
          name: {
            value: "空资源表",
            style: {}
          },
          num: {
            value: "2903",
            style: {}
          }
        },
        allNum: {
          name: {
            value: "总数据",
            style: {}
          },
          num: {
            value: "109923",
            style: {}
          }
        },
        normal: {
          text: {
            value: "正常",
            style: {}
          },
          num: {
            value: "29940",
            style: {}
          }
        },
        abnormal: {
          text: {
            value: "异常",
            style: {}
          },
          num: {
            value: "29940",
            style: {}
          }
        },
        progress: {// 进度条
          value: "80",
          innerColor: "#00DEFF", //外层背景色
          outerColor: "#358CFF" //底层背景色
        },
        backgroundStyle: {} //上方背景颜色
      }

    const indexData25 = {
        title: {
          value: "3G基站",
          style: {}
        },
        info1: {
          name: {
            value: "基站数",
            style: {}
          },
          num: {
            value: "23490",
            style: {}
          }
        },
        info2: {
          name: {
            value: "小区数",
            style: {}
          },
          num: {
            value: "2903",
            style: {}
          }
        },
        info3: {
          name: {
            value: "RU",
            style: {}
          },
          num: {
            value: "394",
            style: {}
          }
        },
        info4: {
          name: {
            value: "BBU",
            style: {}
          },
          num: {
            value: "234",
            style: {}
          }
        },
        bgImg: require("../../cell/indexData/images/indexdata25.png")
      }

    const indexData26 = {
        title: {
          value: "光交接箱统计",
          style: {}
        },
        info1: {
          name: {
            value: "数量",
            style: {}
          },
          num: {
            value: "389904",
            style: {}
          }
        },
        info2: {
          name: {
            value: "标准地址覆盖率",
            style: {}
          },
          num: {
            value: "56.32",
            style: {}
          }
        },
        unit: {
          value: "%",
          style: {}
        },
        backgroundStyle: {}
      }

    const  indexData27 = {
        title1: {
          value: "二干光缆资源",
          style: {}
        },
        title2: {
          value: "清查录入进度",
          style: {}
        },
        progress1: {
          name: {
            value: "光缆覆盖率",
            style: {}
          },
          value: "34",
          innerBackground: "#2262a0",
          outterBackground: "linear-gradient(270deg,#3ff5f8 0%, #50bbff 99%)"
        },
        progress2: {
          name: {
            value: "成端熔接率",
            style: {}
          },
          value: "55",
          innerBackground: "#2262a0",
          outterBackground: "linear-gradient(270deg,#ffb84f 0%, #ed586d 99%)"
        },
        iconImg: require("../../cell/indexData/images/tooltip27.png"),
        backgroundStyle: {}
      }

    const  indexData28 = {
        backgroundStyle: {},
        icon: {
          class: "iconfont icon-shebei",
          style: {}
        },
        title: {
          value: "富力盈通大厦(无业务)",
          style: {}
        },
        info: [
          { value: "2M-空闲67个", style: {} },
          { value: "100M-空闲7个", style: {} },
          { value: "622M-空闲1个", style: {} }
          // {value: '155M-空闲7个', style: {}},
        ]
      }

    const indexData29 = {
        title: {
          value: "3G基站",
          style: {}
        },
        iconImg: require("../../cell/indexData/images/tooltip29.png"),
        icon: {
          class: "iconfont icon-jizhan",
          style: {}
        },
        info: [
          {
            name: {
              value: "基站数",
              style: {}
            },
            num: {
              value: "20",
              style: {}
            }
          },
          {
            name: {
              value: "小区数",
              style: {}
            },
            num: {
              value: "5869",
              style: {}
            }
          }
        ],
        backgroundStyle: {}
      }

    const indexData30 = {
        title: {
          index: {
            value: "1",
            style: {}
          },
          text: {
            value: "审计厅省信息中心琼山区审计监督局FE03FE03",
            style: {}
          }
        },
        info: [
          {
            name: {
              value: "数字电路",
              style: {}
            }
          },
          {
            name: {
              value: "8M",
              style: {}
            }
          }
        ],
        backgroundStyle: {}
      }

    const indexData31 = {
        tag: {
          name: {
            value: "传输网元",
            style: {}
          },
          label: {
            value: "TRS_SEG",
            style: {}
          }
        },
        info: [
          {
            name: {
              value: "总数据",
              style: {}
            },
            num: {
              value: "920445",
              style: {}
            }
          },
          {
            name: {
              value: "正常",
              style: {}
            },
            num: {
              value: "345",
              style: {}
            }
          },
          {
            name: {
              value: "异常",
              style: {}
            },
            num: {
              value: "8294",
              style: {}
            }
          }
        ],
        backgroundStyle: {},
        borderStyle: {}
      }

  ```
  
  > Props
  
  参数|说明|类型|可选值|默认值
  -|-|-|-|-
  province|省份|Object|-|-
  pieChartData|饼图配置参数(可查看Echarts配置项文档)|Object|-|-
  lineChartData|折线图配置参数(可查看Echarts配置项文档)|Object|-|-
  num|指标数据值|Object|-|-
  text|指标数据标题|Object|-|-
  backgroundStyle|背景色样式|Object|-|-
  title|标题|Object|-|-
  progress|进度条及样式配置|Object|-|-
  bgImg|背景图片路径|String|-|-
  unit|单位|String|-|-
  iconImg|图片路径|String|-|-
  icon|icon图标及样式配置|Object|-|-
  info|数组列表|Array|-|-
  tag|标题数据及样式配置|Object|-|-
