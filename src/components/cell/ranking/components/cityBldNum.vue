<template>
  <div class="city_container">
      <section class="city_item">
        <!-- <i :class="'right ' + obj.icon" style="font-size:35px;color:#2e79c6"></i> -->
        <span class="lineBox">
                <div class="itemText">
                    <span class="left">{{obj.name}}</span>
                    <span class="right">{{obj.value}}</span>
                </div>
                <div class="line">
                    <div class="lineInner" :style="'width:' + obj.score + '%' ">
                        <div class="round" v-if="obj.isfill" />
                    </div>

                </div>
        </span>
      </section>
  </div>
</template>

<script>
export default {
  props: {
    isfill: {
      type: Boolean,
      default: false
    },
    obj: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      roundLocation: []
    }
  },
  watch: {
    obj: {
      handler(newValue, oldValue) {
        this.init();
      },
      deep: true,
    },
  },
  created() {

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.roundLocation = `${this.obj.score - 1}%`
    }
  },
}
</script>

<style scoped lang="scss" >
    .city_container{
        padding: 0 10px;
        .city_item{
            display: flex;
            justify-content: space-between;
            align-items: right;
            height: 41px;
            .right{
                display: block;
                // width: 5%;
                width: 50px;
                padding: 0 15px;
            }
            .lineBox{
                 flex: 1;
                display: block;
                // width: 95%;
                // background-color: #6cf;

                width: 100%;
                height: 40px;
                font-size: 60px;
                position: relative;
                // background-color: #7ff;
                .itemText{
                    width: 100%;
                    top: -15%;
                    // background-color: #77ff;
                    position: absolute;
                    // top: auto;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-size: 14px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 15px;
                    padding: 0 10px 0 15px;
                    color: #fff;
                }

                .line{
                 position: relative;
                 background-color: #203c5d;
                 margin-top: 15px;
                 height: 7px;
                 border: 1px solid #203c5d;
                 // padding: 0  12px;
                //  border-radius: 10px;
                 overflow: hidden;
                    .lineInner {
                    position: relative;
                    // left: 0;
                    height: 7px;
                    background: linear-gradient(
                        270deg,
                        #1edfff 2%,
                        rgba(122, 235, 255, 0.16) 99%
                    );
                    .round {
                        position: absolute;
                        top: 0;
                        right: 0;
                        height: 7px;
                        width: 0;
                        height: 0;
                        border-width: 0 0 7px 7px;
                        border-style: solid;
                        border-color: transparent transparent #203c5d;
                    }
                  }
                }


            }
        }
    }
</style>