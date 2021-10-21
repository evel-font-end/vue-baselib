<template>
  <div class="home-box home-center">
    <china-map :curIndex="firsScreenRadio"></china-map>
    <!-- 智慧地图 无线资源地图 -->
    <div
      class="header_wrap"
      v-if="
        (pageIndex === 2 && moduleType === 'wirelessResource') ||
          moduleType === 'smartOM' || moduleType === 'fiberOpticCable'
      "
    >
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col v-for="(item, index) in mapTabsList" :key="index" :span="6">
          <div class="grid-content">
            <!-- <dv-border-box-7 :color="['#337CFF']" backgroundColor=""> -->
            <div class="grid-item">
              <div style="display: inline-block;" class="grid-icon">
                <span
                  :class="[
                    'icon',
                    'iconfont',
                    'iconfont-linear-gradient',
                    item.iconfont,
                    'icon-block',
                  ]"
                ></span>
              </div>
              <div class="grid-tabs">
                <p>{{ item.title }}</p>
                <dv-digital-flop :config="item.config" style="width:200px;height:50px;" v-if="!isNaN(item.value)"/>
                <p v-else style="font-size: 36px">{{ item.value }}</p>
              </div>
            </div>
            <!-- </dv-border-box-7> -->
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 网络呈现地图 头部5个-->
    <div
      v-if="moduleType === 'webPresent' && pageIndex === 2"
      class="web-present"
    >
      <div class="web-present-title">
        <p>网络数据能力-数据加工</p>
      </div>
      <div>
        <el-row type="flex" justify="center" :gutter="50">
          <el-col
            v-for="(listItem, listIndex) in (webPreentList)"
            :key="listItem.name"
            :span="spanOption[listIndex]"
          >
            <div :class="classOption[listIndex]">
              <div class="content-text">
                <p class="p1">{{listItem.num}}</p>
                <p class="p2">{{listItem.name}}</p>
              </div>
            </div>
          </el-col>
<!--          <el-col :span="3"-->
<!--          ><div class="grid-net-content-side">-->
<!--            <div class="content-text">-->
<!--              <p class="p1">{{ webPreentList.已用空间 }}</p>-->
<!--              <p class="p2">已用空间</p>-->
<!--            </div>-->
<!--          </div></el-col-->
<!--          >-->
<!--          <el-col :span="4"-->
<!--          ><div class="grid-net-content">-->
<!--            <div class="content-text">-->
<!--              <p class="p1">{{ webPreentList.正在执行任务 }}</p>-->
<!--              <p class="p2">正在执行任务</p>-->
<!--            </div>-->
<!--          </div></el-col-->
<!--          >-->
<!--          <el-col :span="5"-->
<!--          ><div class="grid-net-center ">-->
<!--            <div class="content-text">-->
<!--              <p class="p1">{{ webPreentList.等待平均时延 }}</p>-->
<!--              <p class="p2">平均时延</p>-->
<!--            </div>-->
<!--          </div></el-col-->
<!--          >-->
<!--          <el-col :span="4"-->
<!--          ><div class="grid-net-content">-->
<!--            <div class="content-text">-->
<!--              <p class="p1">{{ webPreentList.任务平均执行时长 }}</p>-->
<!--              <p class="p2">任务平均执行时长</p>-->
<!--            </div>-->
<!--          </div></el-col-->
<!--          >-->
<!--          <el-col :span="3"-->
<!--          ><div class="grid-net-content-side">-->
<!--            <div class="content-text">-->
<!--              <p class="p1">{{ webPreentList.总空间 }}</p>-->
<!--              <p class="p2">总空间</p>-->
<!--            </div>-->
<!--          </div></el-col-->
<!--          >-->
        </el-row>
<!--        <div class="arrow-left"></div>-->
<!--        <div class="arrow-right"></div>-->
      </div>
    </div>

    <div v-if="pageIndex === 1 && moduleType==='dataNetworkResource'" class="top_btns">
      <ul class="top_btn_list">
        <li
          v-for="(item, itemIndex) in backboneNetBtnList"
          :key="itemIndex"
          :class="{ active: firsScreenRadio === itemIndex }"
          @click="changeMapIndex(itemIndex)"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div
      class="web-present-scroll"
      v-if="moduleType === 'dataNetworkResource' && pageIndex === 1"
    >
      <WebPresentScroll></WebPresentScroll>
    </div>
    <div
      class="web-present-scroll"
      v-if="moduleType === 'webPresent' && pageIndex === 2"
    >
      <NetworkInformation></NetworkInformation>
    </div>
    <div
      class="web-present-scroll web-present-scroll-smart"
      v-if="moduleType === 'smartOM' && pageIndex === 2"
    >
      <SmartOMScroll></SmartOMScroll>
    </div>
    <div @click="handleJump" class="jump-btn"></div>
  </div>
</template>

<script>
import ChinaMap from '@/components/ChinaMap/ChinaMap.vue'
import WebPresentScroll from './components/WebPresentScroll.vue'
import NetworkInformation from "./components/NetworkInformation";
import SmartOMScroll from "./components/SmartOMScroll";
import { mapState, mapActions } from 'vuex'
import { getAction } from '@/api/manage'
const spanOption = [3, 4, 5, 4, 3];
const classOption = ['grid-net-content-side', 'grid-net-content', 'grid-net-center', 'grid-net-content','grid-net-content-side']
export default {
  name: 'HomeCenter',
  components: {
    ChinaMap,
    WebPresentScroll,
    NetworkInformation,
    SmartOMScroll
  },
  data() {
    return {
      backboneNetBtnList: [
        '骨干网核心节点',
        '国际出口',
        '骨干网设备端口',
        '城域网设备',
      ],
      screenPageIndex: 1, // 大屏页码 需监听

      // 第二屏各模块：无线资源、网络能力呈现、智慧运维、调度自动开通
      secondPageType: ['wirelessResource', 'webPresent', 'smartOM'],
      // moduleType: 'wirelessResource', // 大屏各模块类型：默认值
      moduleType: 'dataNetworkResource', // 大屏各模块类型：默认值
      // moduleType: 'backboneNet', // 大屏各模块类型
      // 网络能力呈现-webPresent

      mapTabsList: [], // 第二屏4个tabs需展示循环的数据

      firsScreenRadio: 0, // 第一屏4个tabs切换

      // 无线资源
      resourceNetList: [
        {
          title: '基站',
          value: 48457,
          iconfont: 'icon-a-01jizhan',
        },
        {
          title: '覆盖小区',
          value: 63752,
          iconfont: 'icon-a-02fugaixiaoqu',
        },
        {
          title: 'BBU',
          value: 84986,
          iconfont: 'icon-a-03BBU',
        },
        {
          title: 'RU',
          value: 887683,
          iconfont: 'icon-a-04RU',
        },
      ],

      // 智慧运维
      smartOM: [
        {
          title: '自动派单成功率',
          value: '93.6%',
          iconfont: 'icon-zidongpaidan',
        },
        {
          title: '诊断成功率',
          value: '84.8%',
          iconfont: 'icon-zhenduanchenggongshuai',
        },
        {
          title: '4G日节电小时数',
          value: 269790,
          iconfont: 'icon-a-4Gjiedian',
        },
        {
          title: '5G日节电小时数',
          value: 56101,
          iconfont: 'icon-a-5Gjiedian',
        },
      ],
      spanOption,
      classOption,
      // 网络能力呈现
      //
      webPreentList: [
        {name: '任务平均执行时长', num: '9.75min'},
        {name: '已用空间', num: '69.92PiB'},
        {name: '总空间', num: '119.57PiB'},
        {name: '正在执行任务', num: '374个'},
        {name: '等待平均时延', num: '3.57s'}
      ],
      // webPreentList: {
      //   任务平均执行时长: '9.75min',
      //   已用空间: '69.92PiB',
      //   总空间: '119.57PiB',
      //   正在执行任务: '374个',
      //   等待平均时延: '3.57s',
      // },
      timer: null,


      //光缆网资源
      cableNetworkResources: [
        {
          title: '光缆数量',
          value: 185220,
          unit: "",
          iconfont: 'icon-guanglanshuliang',
        },
        {
          title: '光缆皮长',
          value: 3245,
          unit: 'km',
          iconfont: 'icon-yiganzhongjizongliang',
        },
        {
          title: '一干光缆覆盖率',
          value: '10.1%',
          iconfont: 'icon-xunjianpichang',
        },
        {
          title: '一干成端熔接率',
          value: '96.01%',
          iconfont: 'icon-fugaishu',
        },
      ]
    }
  },
  computed: {
    ...mapState(['pageIndex', 'activeTitleValue', 'activeSetionValue']),
  },
  watch: {
    pageIndex(newVal) {
      this.firsScreenRadio = 0
      // if(this.pageIndex === 2 && this.activeSetionValue === 'webPresent') {
      //   this.changePreentList()
      // } else {
      //   this.clear()
      // }
    },
    activeSetionValue (val) {
      if(this.pageIndex === 2 && this.activeSetionValue === 'webPresent') {
        this.changePreentList()
      } else {
        this.clear()
      }
    },
    'activeTitleValue.date'(newVal) {
      if(!newVal) return
      this.moduleType = this.activeTitleValue.value ? this.activeTitleValue.value : 'wirelessResource'
      this.clear()
      if (this.moduleType === 'wirelessResource') {
        this.mapTabsList = this.resourceNetList
        this.mapTabsList.forEach( ele => {
          ele.config = {
            number: [0],
            style: {
              fontSize: 36,
              fill: '#fff'
            }
          }
        })
        this.changeValueConfig()
      } else if (this.moduleType === 'smartOM') {
        this.mapTabsList = this.smartOM
        this.mapTabsList.forEach( ele => {
          ele.config = {
            number: [0],
            style: {
              fontSize: 36,
              fill: '#fff'
            }
          }
        })
        this.changeValueConfig()
      } else if(this.moduleType === 'dataNetworkResource') {
        this.firsScreenRadio = 0
      } else if(this.moduleType === 'fiberOpticCable') {
        this.mapTabsList = this.cableNetworkResources
        this.mapTabsList.forEach( ele => {
          ele.config = {
            number: [0],
            content: '{nt}' + (ele.unit || ''),
            style: {
              fontSize: 36,
              fill: '#fff'
            }
          }
          console.log(ele.config);
        })
        this.changeValueConfig()
      }
      if (this.pageIndex === 1) {
        if (newVal === 'building' || newVal === 'circuits') {
          this.firsScreenRadio = -1
        }
      }
    },
  },
  created() {
    // 初始化赋值tabs数据
    console.log(this.moduleType)
    if (this.moduleType === 'wirelessResource') {
      this.mapTabsList = this.resourceNetList
    } else if (this.moduleType === 'smartOM') {
      this.mapTabsList = this.smartOM
    } else if(this.moduleType==='fiberOpticCable') {
      this.mapTabsList = this.cableNetworkResources
    }
    this.mapTabsList.forEach( ele => {
      ele.config = {
        number: [0],
        content: '{nt}' + (ele.unit || ''),
        style: {
          fontSize: 36,
          fill: '#fff'
        }
      }
    })
    this.changeValueConfig()
    this.getWireLessResourceData()
    this.getSmartOMData()
    this.getNetworkCapabilityData()
    this.getCableNetworkResourcesData()
  },
  methods: {
    initCharts() {
      console.log(echarts)
    },
    changeMapIndex(index) {
      this.firsScreenRadio = index
    },

    // 无限资源地图头部数据
    getWireLessResourceData() {
      getAction('/api/wirelessResources/map').then((res) => {
        if (res.code === 200 && res.success) {
          this.resourceNetList[0].value = res.result.baseStationNum
          this.resourceNetList[1].value = res.result.plotNum
          this.resourceNetList[2].value = res.result.bbu
          this.resourceNetList[3].value = res.result.ru
        }
      })
    },
    // 智慧运维地图头部数据
    getSmartOMData() {
      getAction('/api/intelligence/head').then((res) => {
        if (res.code === 200 && res.success) {
          this.smartOM[0].value =
            (res.result.autoOrderSuccessRate * 100).toFixed(2) + '%'
          this.smartOM[1].value =
            (res.result.diagnosisSuccessRate * 100).toFixed(2) + '%'
          this.smartOM[2].value = res.result.fourGEnergyResidence
          this.smartOM[3].value = res.result.fiveGEnergyResidence
        }
      })
    },

    getNetworkCapabilityData() {
      getAction('/api/networkCapabilityPresentation/mapUp').then((res) => {
        if (res.code === 200 && res.success) {
          console.log(res)
          this.webPreentList = []
          for(let key in res.result) {
            this.webPreentList.push({
              name: key,
              num: res.result[key]
            })
          }
          // let result = res.result
          // this.webPreentList = result
          // console.log(this.webPreentList)
        }
      })
    },
    changePreentList () {
      this.clear();
      this.timer = setInterval(() => {
        let newArray = this.webPreentList.splice(4,1);
        this.webPreentList.unshift(newArray[0]);
      },1000)
    },
    clear() {
      if (this.timer) clearInterval(this.timer)
      this.timer = null
    },

    getCableNetworkResourcesData() {
      getAction('/api/cableNetworkResources/mapUp').then((res) => {
        if (res.code === 200 && res.success) {
          this.cableNetworkResources[0].value = res.result.opticalCable
          this.cableNetworkResources[1].value = res.result.warehouseCover
          this.cableNetworkResources[2].value =  (res.result.cableCoverageRate * 100).toFixed(2) + '%'
          this.cableNetworkResources[3].value =  (res.result.meltPickRate * 100).toFixed(2) + '%'
        }
      })
    },

    changeValueConfig() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.mapTabsList.forEach( ele => {
            ele.config = {
              number: [ele.value],
              content: '{nt}' + (ele.unit || '') ,
              style: {
                fontSize: 36,
                fill: '#fff'
              }
            }
          })
          this.$forceUpdate()
        },500)
      })
    },
    handleJump() {
      window.location.href = 'http://10.245.2.174:8180/statics/interview/index.html'
    }
  },
  beforeDestroy() {
    this.clear()
  }
}
</script>

<style scoped lang="less">
.grid-content {
  color: #fff;
  opacity: 1;
  z-index: 10;
  width: 338px;
  height: 111px;
  // background: rgba(51, 124, 255, 0.11);
  position: relative;
  background: url('../../../assets/gird-item-bg.png');
  margin: auto;

  .grid-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    right: 0;
    margin: 7% auto;
  }

  .grid-tabs {
    display: inline-block;
    // border: 1px solid #fff;
    // margin-left: 5%;
    // margin-top: 10%;
    // width: 100px;
    height: 66px;
    font-size: 24px;
    font-family: PingFangSC;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    margin-top: 1%;
    margin-left: 5%;
  }

  .grid-icon {
    // border: 1px solid #fff;
    width: 80px;
    height: 66px;
  }

  .icon-block {
    display: inline-block;
    // width: 44px;
    // height: 30px;
    width: 100%;
    height: 100%;
    font-size: 38px;
    background: url('../../../assets/grid-bg.png');
  }
}

.web-present {
  color: #fff;
  width: 100%;
  height: 214px;
  background: url('../../../assets/image/NetPower/net-bg.png') no-repeat center;
  // position: absolute;
  .web-present-title {
    position: absolute;
    left: 0;
    top: 0;
    margin: auto;
    right: 0;
    bottom: 0;
    font-size: 24px;
    font-weight: 600;
    color: #30a4e7;
  }
  .arrow-left {
    display: inline-block;
    position: absolute;
    left: 38%;
    top: 57%;
    height: 46px;
    width: 45px;
    background: url('../../../assets/image/web-left-arrow.png') no-repeat ;
  }
  .arrow-right {
    display: inline-block;
    position: absolute;
    right: 38%;
    top: 57%;
    height: 46px;
    width: 45px;
    background: url('../../../assets/image/web-right-arrow.png') no-repeat ;
  }
  .grid-net-center {
    position: relative;
    // width: 254px;
    height: 210px;
    background: url('../../../assets/image/NetPower/center-time.png') no-repeat
      center;
    background-size: contain;
    .content-text {
      display: inline-block;
      position: absolute;
      top: 20%;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      .p1 {
        font-size: 44px;
        font-weight: 700;
      }
      .p2 {
        font-size: 26px;
        font-weight: 600;
      }
      &::before{
        content: '';
        position: absolute;
        bottom: 30px;
        left: -40px;
        width: 45px;
        height: 45px;
        background: url(../../../assets/image/center1-1.png) no-repeat center;
        background-size: 100%;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-name: leftAnimation;
      }
      &::after{
        content: '';
        position: absolute;
        bottom: 30px;
        right: -40px;
        width: 45px;
        height: 45px;
        background: url(../../../assets/image/center1-2.png) no-repeat center;
        background-size: 100%;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-name: rightAnimation;
      }
    }
  }
  .grid-net-content {
    position: relative;
    // width: 200px;
    height: 175px;
    background: url('../../../assets/image/NetPower/other-time.png') no-repeat
      center;
    background-size: contain;

    .content-text {
      display: inline-block;
      position: absolute;
      top: 25%;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;

      .p1 {
        font-size: 24px;
        font-weight: 700;
      }

      .p2 {
        width: 70px;
        margin: 15px auto;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
  .grid-net-content-side {
    position: relative;
    // width: 200px;
    height: 150px;
    background: url('../../../assets/image/NetPower/other-time.png') no-repeat
      center;
    background-size: contain;

    .content-text {
      display: inline-block;
      position: absolute;
      top: 25%;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;

      .p1 {
        font-size: 24px;
        font-weight: 700;
      }

      .p2 {
        margin-top: 15px;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}

.web-present-scroll {
  position: absolute;
  right: 10px;
  top: 470px;
  z-index: 10;
  &.web-present-scroll-smart {
    right: 30px;
    top: 424px;
  }
}
.top_btns {
  display: inline-block;
  border-radius: 48px;
  overflow: hidden;
  padding: 2px;
  box-sizing: border-box;
  position: absolute;
  top: 39px;
  left: 50%;
  transform: translateX(-50%);
}
.top_btn_list {
  box-sizing: border-box;
  display: flex;
  color: #36B7FDFF;
  justify-content: center;
  border: 1px solid #30a4e7;
  border-radius: 100px;
  overflow: hidden;

  li {
    box-sizing: border-box;
    cursor: pointer;
    padding: 0 20px;
    line-height: 50px;
    border-left: 1px solid #30a4e7;
    box-shadow: 0px 7px 5px 0px rgba(23, 183, 216, 0.47),
      0px 0px 14px 0px rgba(23, 183, 216, 0.47) inset;
    border-collapse: collapse;

    &:first-child {
      border-left: none;
      // box-shadow: none
    }
    &.active {
      background: #005374;
      color: white;
    }
  }
}
.header_wrap,
.web-present {
  position: absolute;
  top: 37px;
  width: 100%;
}
.web-present {
  top: 24px;
}
.jump-btn {
  position: absolute;
  width: 200px;
  height: 64px;
  bottom: 10px;
  left: 760px;
  cursor: pointer;
  z-index: 10;
}
@keyframes leftAnimation {
    0%,20%,53%,80%,to {
       left: -40px;
    }

    40%,43% {
              left: -30px;

    }

    70% {
               left: -20px;

    }

    90% {
               left: -10px;

    }
}
@keyframes rightAnimation {
    0%,20%,53%,80%,to {
       right: -40px;
    }

    40%,43% {
              right: -30px;

    }

    70% {
               right: -20px;

    }

    90% {
               right: -10px;

    }
}
</style>
