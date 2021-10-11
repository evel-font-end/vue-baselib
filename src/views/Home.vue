<template>
  <div class="flexRow home">
    <div class="flexColumn equipment">
      <CardList :siteId="gatewayList.siteId" />
      <div class="title">智慧校园照明应用分布</div>
      <div id="map" ref="mapChart" />
    </div>
    <div class="classroomList">
      <div class="title">教室网关状态</div>
      <div class="flexRow gatewayList">
        <div
          class="flexCenter flexColumn gatewayItem"
          v-for="gatewayItem in gatewayList.list"
          :key="gatewayItem.id"
        >
          <i
            :class="`iconfont ${gatewayItem.icon}`"
            :style="
              `font-size:${gatewayItem.iconSize};background: ${gatewayItem.iconColor}; -webkit-background-clip:text;-webkit-text-fill-color:transparent;`
            "
          />
          <div class="name">{{ gatewayItem.name }}</div>
          <div class="num">
            {{ gatewayItem.num }}
            <span>个</span>
          </div>
        </div>
      </div>
      <div class="title">智慧教室模式应用情况分析</div>
      <PieChart :siteId="gatewayList.siteId" />
      <div class="title">教室用电量排行</div>
      <UseList />
    </div>
  </div>
</template>

<script lang="ts">
import * as echarts from "echarts"; // 引入echarts
import { ref, reactive, onMounted, getCurrentInstance } from "vue";
import { convertData, testSection } from "@/util/tool";
import { homeIcon } from "@/util/util";
import PieChart from "@/views/baseManage/baseDataBoard/components/pieChart.vue";
import UseList from "@/views/baseManage/baseDataBoard/components/useList.vue";
import CardList from "./baseManage/baseDataBoard/components/card.vue";
import {
  getGatewayStatisticsInfo,
  getSmartCampusDistribution,
} from "@/api/index";
var mapScatterColorList = [
  "rgba(194,132,240,0.64)",
  "rgba(15,194,213,0.64)",
  "rgba(15,143,213,0.64)",
];
var mapColorList = [
  "rgba(237,224,255,0.64)",
  "rgba(218,254,242,0.64)",
  "rgba(216,230,255,0.64)",
];
var mapMax = 200;
var maxArrayList = [0];
var minMaxMapList: any[] = [];
mapColorList.map((colorItem, index) => {
  const maxValue = (mapMax / mapColorList.length) * (index + 1);
  maxArrayList.push(maxValue);
  minMaxMapList.push({
    min: maxArrayList[index],
    max: maxValue,
    color: mapColorList[index],
  });
});
export default {
  components: {
    PieChart,
    UseList,
    CardList,
  },
  setup() {
    let gatewayList = reactive({
      siteId: 0,
      list: [
        {
          icon: "icon-zongshuliang",
          iconColor: "-webkit-linear-gradient(180deg,#7ebaff, #3f5cc5)",
          id: "gatewayNum",
          name: "总数量",
          num: "1938",
        },
        {
          icon: "icon-zaixianshu",
          iconColor: "-webkit-linear-gradient(180deg,#5fe0ff, #31a3dd)",
          id: "onlineNum",
          name: "在线数",
          num: "1938",
        },
        {
          icon: "icon-shiyongzhong",
          iconColor: "-webkit-linear-gradient(180deg,#8198ff, #583fc5)",
          iconSize: "0.45rem",
          id: "useNum",
          name: "使用中",
          num: "1938",
        },
      ],
      outdata: [],
    });
    let allData: any[] = [];
    let geoCoordMap: any = {};
    echarts.registerMap("china", require("../common/js/map/china.json"));
    const mapFeatures = echarts.getMap("china").geoJson.features;
    mapFeatures.forEach(function(v: any) {
      // 地区名称
      var name: any = v.properties.name;
      allData.push({
        name: name,
        value: 0,
      });
      // 地区经纬度
      geoCoordMap[name] = v.properties.cp;
    });
    let mapOption = reactive({});
    onMounted(() => {
      getSmartCampusDistribution().then((res: any) => {
        if (res && res.code === "200") {
          gatewayList.outdata = res.data.map((dataItem: any) => {
            return {
              ...dataItem,
              name: dataItem.name.replace(/省/g, ""),
            };
          });
          mapOption = {
            tooltip: {
              show: true,
              formatter: function(params: any) {
                if (params.value) {
                  return (
                    "&nbsp;&nbsp;" +
                    params.name +
                    "&nbsp;&nbsp;&nbsp;" +
                    params.value[2] +
                    "个&nbsp;&nbsp;"
                  );
                } else {
                  return (
                    "&nbsp;&nbsp;" +
                    params.name +
                    "&nbsp;&nbsp;&nbsp;0个&nbsp;&nbsp;"
                  );
                }
              },
            },
            visualMap: {
              type: "piecewise",
              show: false,
              min: 0,
              max: mapMax,
              left: "10%",
              top: "bottom",
              calculable: true,
              seriesIndex: [1],
              inRange: {
                color: mapColorList,
              },
              pieces: minMaxMapList,
            },
            geo: {
              show: true,
              map: "china",
              zoom: 1.2,
              label: {
                normal: {
                  show: true,
                  color: "#515151",
                },
                emphasis: {
                  show: true,
                  color: "#515151",
                },
              },
              roam: false,
              itemStyle: {
                normal: {
                  areaColor: "#fff",
                  borderColor: "#9FAFC7",
                },
                emphasis: {
                  areaColor: "#D8E6FF",
                  borderColor: "#D8E6FF",
                },
              },
              regions: convertData(geoCoordMap, gatewayList.outdata, "block"),
            },
            series: [
              {
                name: "散点",
                type: "scatter",
                coordinateSystem: "geo",
                data: convertData(geoCoordMap, gatewayList.outdata, "block"),
                symbolSize: function() {
                  return 36;
                },
                symbolOffset: [-10, -20],
                label: {
                  normal: {
                    formatter: (parames: any) => {
                      return parames.value[2];
                    },
                    position: "top",
                    padding: 5,
                    backgroundColor: "rgba(0,17,31,0.49)",
                    color: "#fff",
                    show: true,
                  },
                  emphasis: {
                    show: true,
                  },
                },
                itemStyle: {
                  normal: {
                    color: (parames: any) => {
                      const value = parames.value[2];
                      const index: number = testSection(
                        maxArrayList,
                        value
                      ) as number;
                      return mapScatterColorList[index];
                    },
                  },
                },
              },
              {
                type: "map",
                map: "china",
                geoIndex: 0,
                zoom: 1.2,
                // aspectScale: 0.75, //长宽比
                showLegendSymbol: true, // 存在legend时显示
                label: {
                  normal: {
                    formatter: "{a}:{c}",
                    show: true,
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      color: "#515151",
                    },
                  },
                },
                roam: true,
                itemStyle: {
                  normal: {
                    areaColor: "#fff",
                    borderColor: "#9FAFC7",
                  },
                  emphasis: {
                    areaColor: "#D8E6FF",
                    borderColor: "#D8E6FF",
                  },
                },
                animation: false,
                markPoint: {
                  symbol: "circle",
                  symbolSize: 10,
                },
                data: gatewayList.outdata,
              },
              {
                type: "scatter",
                coordinateSystem: "geo",
                itemStyle: {
                  color: "rgba(37,126,244,0.95)",
                },
                symbol: homeIcon,
                symbolSize: 10,
                symbolOffset: [5, -15],
                data: convertData(geoCoordMap, allData),
              },
            ],
          };
          let mapChart = echarts.init(document.getElementById("map") as any);
          mapChart.setOption(mapOption);
        }
      });
      initGatewayList();
    });
    const initGatewayList = () => {
      getGatewayStatisticsInfo().then((res: any) => {
        if (res && res.code === "200") {
          gatewayList.list = gatewayList.list.map((gatewayItem: any) => {
            return {
              ...gatewayItem,
              num: res.data[gatewayItem.id],
            };
          });
        }
      });
    };
    return {
      gatewayList,
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  .equipment {
    width: 0;
    flex: 2;
    padding: 20px; /*no*/
    height: 100%;
    background: #fafcff;
    border-radius: 0px 0px 0px 2px;
    box-shadow: 0px 0px 9px 0px rgba(198, 198, 198, 0.27);
    .title {
      font-size: 20px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #353535;
      line-height: 28px;
    }
    #map {
      width: 100%;
      height: calc(100% - 190px);
    }
  }
  .classroomList {
    width: 0;
    flex: 1;
    background: #ffffff;
    border-radius: 0px 2px 2px 0px;
    padding: 20px;
    box-shadow: -4px 0px 16px 0px rgba(209, 218, 239, 0.51);
    .title {
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #353535;
      line-height: 25px;
      margin-bottom: 20px;
    }
    .gatewayList {
      width: 100%;
      justify-content: space-between;
      margin-bottom: 20px;
      .gatewayItem {
        width: calc(33% - 13px);
        background: #ffffff;
        border-radius: 2px; /*no*/
        padding: 15px; /*no*/
        box-shadow: 0px 0px 6px 0px #e6eafe; /*no*/
        .iconfont {
          margin-bottom: 20px; /*no*/
          font-size: 40px;
          background: -webkit-linear-gradient(90deg, #acb6e5, #86fde8);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .name {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #353535;
          line-height: 16px;
          margin-bottom: 10px;
        }
        .num {
          font-size: 18px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          text-align: left;
          color: #353535;
          line-height: 16px;
          span {
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: #353535;
            line-height: 16px;
            margin-left: 4px;
          }
        }
      }
    }
    #pieChart {
      width: 100%;
      height: calc(100% - 565px);
    }
  }
}
</style>
