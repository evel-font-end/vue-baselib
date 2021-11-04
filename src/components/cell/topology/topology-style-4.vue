<template>
    <div class="topology4" id="topology4">
        <!-- 机房总数、等级及有源资源专业统计 -->
        <div class="networkResource">
            <!-- 左边列的内容 -->
            <div class="networkResource-01">
                <div class="sp01-style">
                    <div class="sp01-style-img">
                    <img src="../../../assets/image/sp_01_icon.png" alt="" />
                    </div>
                    <div class="sp01-style-tile">
                    <div class="sp01-style-text">
                        <span>{{bureauStation.speciality}}</span>
                        <span class="up-wrap">
                            <img src="../../../assets/image/up_icon.png" alt="" /> {{ bureauStation.num }}
                        </span>
                    </div>
                    <div class="sp01-style-data">
                        <countTo :startVal="Number(bureauStation.totalNum) || 0" :endVal="Number(bureauStation.totalNum) || 0" :duration="3000" separator=""></countTo>
                    </div>
                    </div>
                </div>

                <div class="sp1-style">
                    <div class="sp1-style-img">
                    <img src="../../../assets/image/sp_1_icon.png" alt="" />
                    </div>
                    <div class="sp1-style-tile">
                    <div class="sp1-style-text">
                        <span>{{opticalFiberPath.speciality}}</span>
                        <span class="up-wrap">
                        <img src="../../../assets/image/up_icon.png" alt="" /> {{ opticalFiberPath.num }}
                        </span>
                    </div>
                    <div class="sp1-style-data">
                        <countTo :startVal="Number(opticalFiberPath.totalNum) || 0" :endVal="Number(opticalFiberPath.totalNum) || 0" :duration="3000" separator=""></countTo>
                    </div>
                    </div>
                </div>

                <div class="sp2-style">
                    <div class="sp2-style-img">
                    <img src="../../../assets/image/sp_2_icon.png" alt="" />
                    </div>
                    <div class="sp2-style-tile">
                    <div class="sp2-style-text">
                        <span>{{standardAddress.speciality}}</span>
                        <span class="up-wrap">
                        <img src="../../../assets/image/up_icon.png" alt="" /> {{ standardAddress.num }}
                        </span>
                    </div>
                    <div class="sp2-style-data">
                        <countTo :startVal="Number(standardAddress.totalNum) || 0" :endVal="Number(standardAddress.totalNum) || 0" :duration="3000" separator=""></countTo>
                    </div>
                    </div>
                </div>
            </div>

            <div class="networkResource-02">
                <div class="ball-0-div">
                    <img class="ball-0-width" src="../../../assets/image/line.png" />
                    <div class="ball0"></div>
                </div>
                <div class="ball-1-div">
                    <img class="ball-1-width" src="../../../assets/image/line.png" />
                    <div class="ball1"></div>
                </div>
                <div class="ball-2-div">
                    <img class="ball-2-width" src="../../../assets/image/line.png" />
                    <div class="ball2"></div>
                </div>
            </div>

            <div class="networkResource-03">
                <div class="sp0-style">
                    <div class="sp0-style-img">
                    <img src="../../../assets/image/sp_0.png" alt="" />
                    <!-- <div class="title">资源总数</div>
                    <div class="num">
                        <countTo :startVal="Number(bureauStation.totalNum + opticalFiberPath.totalNum + standardAddress.totalNum + computerRoom.totalNum + buildingObj.totalNum + circuitObj.totalNum) || 0" :endVal="Number(bureauStation.totalNum + opticalFiberPath.totalNum + standardAddress.totalNum + computerRoom.totalNum + buildingObj.totalNum + circuitObj.totalNum) || 0" :duration="3000" separator=""></countTo>
                    </div> -->
                    </div>
                </div>
            </div>
            <!-- 右边的线以及动画效果 -->
            <div class="networkResource-04">
                <div class="ball-4-div">
                    <img class="ball-4-width" src="../../../assets/image/line.png" />
                    <div class="ball4"></div>
                </div>
                <div class="ball-5-div">
                    <img class="ball-5-width" src="../../../assets/image/line.png" />
                    <div class="ball5"></div>
                </div>
                <div class="ball-6-div">
                    <img class="ball-6-width" src="../../../assets/image/line.png" />
                    <div class="ball6"></div>
                </div>
            </div>

            <!-- 右边列的内容 -->
            <div class="networkResource-05">
                <div class="sp02-style">
                    <div class="sp02-style-img">
                        <img src="../../../assets/image/sp_02_icon.png" alt="" />
                    </div>
                    <div class="sp02-style-tile">
                        <div class="sp02-style-text">
                            <span>{{computerRoom.speciality}}</span>
                            <span class="up-wrap">
                            <img src="../../../assets/image/up_icon.png" alt="" /> {{ computerRoom.num }}
                            </span>
                        </div>
                        <div class="sp02-style-data">
                            <countTo :startVal="Number(computerRoom.totalNum) || 0" :endVal="Number(computerRoom.totalNum) || 0" :duration="3000" separator=""></countTo>
                        </div>
                    </div>
                </div>

                <div class="sp6-style">
                    <div class="sp6-style-img">
                    <img src="../../../assets/image/sp_6_icon.png" alt="" />
                    </div>
                    <div class="sp6-style-tile">
                    <div class="sp6-style-text">
                        <span>{{buildingObj.speciality}}</span>
                        <span class="up-wrap">
                        <img src="../../../assets/image/up_icon.png" alt="" /> {{ buildingObj.num }}
                        </span>
                    </div>
                    <div class="sp6-style-data">
                        <countTo :startVal="Number(buildingObj.totalNum) || 0" :endVal="Number(buildingObj.totalNum) || 0" :duration="3000" separator=""></countTo>
                    </div>
                    </div>
                </div>

                <div class="sp5-style">
                    <div class="sp5-style-img">
                        <img src="../../../assets/image/sp_5_icon.png" alt="" />
                    </div>
                    <div class="sp5-style-tile">
                        <div class="sp5-style-text">
                            <span>{{circuitObj.speciality}}</span>
                            <span class="up-wrap">
                            <img src="../../../assets/image/up_icon.png" alt="" /> {{ circuitObj.num }}
                            </span>
                        </div>
                        <div class="sp5-style-data">
                            <countTo :startVal="Number(circuitObj.totalNum) || 0" :endVal="Number(circuitObj.totalNum) || 0" :duration="3000" separator=""></countTo>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import countTo from "vue-count-to";

export default {
    name: "TopologyStyle4",
    components:{
        countTo,
    },
    props: {
        list: {
            type: Object,
            default: () => {
                return {
                    spaceResource: 0,
                    tubeResource: 0,
                    transmissionResource: 0,
                    dataResource: 0,
                    accessNetworkResource: 0,
                    mobileResource: 0,
                }
            }
        }
    },
    data(){
        return{
            bureauStation: {
                speciality:'局站',
                num:13459,
                totalNum: 0,
            },
            opticalFiberPath: {
                speciality:'楼宇',
                num:139,
                totalNum: 1000,
            },
            standardAddress: {
                speciality:'光纤光路',
                num:352,
                totalNum: 20000,
            },
            computerRoom: {
                speciality:'机房',
                num:3452,
                totalNum: 500,
            },
            buildingObj: {
                speciality:'政企电路',
                num:7865,
                totalNum: 1500,
            },
            circuitObj: {
                speciality:'标准地址',
                num:139,
                totalNum: 2600,
            }
        }
    },
    mounted(){
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
#topology4.topology4{
    .networkResource {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .networkResource-01 {
            min-width: 100px;
        }
        .networkResource-05 {
            min-width: 100px;
        }
        .networkResource-03{
            position: relative;
            .title{
                font-size: 14px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #32e2f4;
                line-height: 20px;
                letter-spacing: 0px;
                padding-top: 10px;
                text-align: center;
            }
            .num{
                font-size: 20px;
                font-family: YouSheBiaoTiHei, YouSheBiaoTiHei-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 26px;
                text-shadow: 0px 4px 7px 0px rgba(76,19,75,0.47); 
                text-align: center;
                white-space:nowrap;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        .sp01-style {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            min-width: 130px;
            height: 65px;
            white-space: nowrap;
            .sp01-style-img {
                width: 44px;
                height: 40px;
                img {
                    max-width: 100%;
                }
            }
            .sp01-style-tile {
                height: 40px;
            }
            .sp01-style-text {
                min-width: 58px;
                height: 20px;
                opacity: 1;
                font-size: 14px;
                color: #32e2f4;
                text-align: left;
            }
            .sp01-style-data {
                height: 33px;
                opacity: 1;
                font-size: 20px;
                font-family: YouSheBiaoTiHei;
                color: #ffffff;
                text-align: left;
                position: absolute;
            }
        }
        .sp1-style {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            min-width: 130px;
            height: 65px;
            white-space: nowrap;
            .sp1-style-img {
                width: 44px;
                height: 40px;
                img {
                    max-width: 100%;
                }
            }
            .sp1-style-tile {
                height: 40px;
            }
            .sp1-style-text {
                min-width: 58px;
                height: 20px;
                opacity: 1;
                font-size: 14px;
                color: #32e2f4;
                text-align: left;
            }
            .sp1-style-data {
                height: 33px;
                opacity: 1;
                font-size: 20px;
                font-family: YouSheBiaoTiHei;
                color: #ffffff;
                text-align: left;
                position: absolute;
            }
        }
        .sp2-style {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            min-width: 130px;
            height: 65px;
            white-space: nowrap;
            .sp2-style-img {
                width: 44px;
                height: 40px;
                img {
                    max-width: 100%;
                }
            }
            .sp2-style-tile {
                height: 40px;
            }
            .sp2-style-text {
                min-width: 58px;
                height: 20px;
                opacity: 1;
                font-size: 14px;
                color: #32e2f4;
                font-weight: 600;
                font-family: PingFangSC;
                text-align: left;
            }
            .sp2-style-data {
                height: 33px;
                opacity: 1;
                font-size: 20px;
                font-family: YouSheBiaoTiHei;
                color: #ffffff;
                text-align: left;
                position: absolute;
            }
        }
        .ball-0-div {
            position: relative;
            transform: rotate(210deg);
            .ball-0-width {
                width: 100px;
            }
        }
        .ball-1-div {
            position: relative;
            transform: rotate(180deg);
            margin: 20px 0;
            .ball-1-width {
                width: 100px;
            }
        }
        .ball-2-div {
            position: relative;
            transform: rotate(150deg);
            .ball-2-width {
                width: 100px;
            }
        }
        .sp0-style {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 60px;
            .sp0-style-img {
                width: 84px;
                padding-bottom: 50px;
                text-align: center;
                img {
                    max-width: calc(100% - 20px);
                }
            }
        }
        .ball-4-div {
            position: relative;
            transform: rotate(-30deg);
            .ball-4-width {
                width: 100px;
            }
        }
        .ball-5-div {
            position: relative;
            transform: rotate(0deg);
            margin: 20px 0;
            .ball-5-width {
                width: 100px;
            }
        }
        .ball-6-div {
            position: relative;
            transform: rotate(30deg);
            .ball-6-width {
                width: 100px;
            }
        }
        .ball0 {
            width: 5px;
            height: 5px;
            background-color: #ffffff;
            border-radius: 50%;
            position: absolute;
            top: 9px;
            left: 90px;
            animation: ball 2s infinite linear;
        }
        .ball1 {
            width: 5px;
            height: 5px;
            background-color: #ffffff;
            border-radius: 50%;
            position: absolute;
            top: 9px;
            left: 90px;
            animation: ball 2s infinite linear;
        }
        .ball2 {
            width: 5px;
            height: 5px;
            background-color: #ffffff;
            border-radius: 50%;
            position: absolute;
            top: 9px;
            left: 10px;
            animation: ball 2s infinite linear;
        }
        .ball4 {
            width: 5px;
            height: 5px;
            background-color: #ffffff;
            border-radius: 50%;
            position: absolute;
            top: 9px;
            left: 90px;
            animation: ball 2s infinite linear;
        }
        .ball5 {
            width: 5px;
            height: 5px;
            background-color: #ffffff;
            border-radius: 50%;
            position: absolute;
            top: 9px;
            left: 90px;
            animation: ball 2s infinite linear;
        }
        .ball6 {
            width: 5px;
            height: 5px;
            background-color: #ffffff;
            border-radius: 50%;
            position: absolute;
            top: 9px;
            left: 10px;
            animation: ball 2s infinite linear;
        }
        @keyframes ball {
            from {
                left: 10px;
            }
            to {
                left: 90px;
            }
        }
        .sp02-style {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            min-width: 130px;
            height: 65px;
            white-space: nowrap;
            .sp02-style-img {
                width: 44px;
                height: 40px;
                img {
                    max-width: 100%;
                }
            }
            .sp02-style-tile {
                height: 40px;
            }
            .sp02-style-text {
                min-width: 81px;
                height: 20px;
                opacity: 1;
                font-size: 14px;
                color: #32e2f4;
                font-weight: 600;
                font-family: PingFangSC;
                text-align: left;
            }
            .sp02-style-data {
                height: 33px;
                opacity: 1;
                font-size: 20px;
                font-family: YouSheBiaoTiHei;
                color: #ffffff;
                text-align: left;
                position: absolute;
            }
        }
        .sp6-style {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            min-width: 130px;
            height: 65px;
            white-space: nowrap;
            .sp6-style-img {
                width: 44px;
                height: 40px;
                img {
                    max-width: 100%;
                }
            }
            .sp6-style-tile {
                height: 40px;
            }
            .sp6-style-text {
                min-width: 81px;
                height: 20px;
                opacity: 1;
                font-size: 14px;
                color: #32e2f4;
                font-weight: 600;
                font-family: PingFangSC;
                text-align: left;
            }
            .sp6-style-data {
                height: 33px;
                opacity: 1;
                font-size: 20px;
                font-family: YouSheBiaoTiHei;
                color: #ffffff;
                text-align: left;
                position: absolute;
            }
        }
        .sp5-style {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            min-width: 130px;
            height: 65px;
            white-space: nowrap;
            .sp5-style-img {
                width: 44px;
                height: 40px;
                img {
                    max-width: 100%;
                }
            }
            .sp5-style-tile {
                height: 40px;
            }
            .sp5-style-text {
                min-width: 72px;
                height: 20px;
                opacity: 1;
                font-size: 14px;
                color: #32e2f4;
                font-weight: 600;
                font-family: PingFangSC;
                text-align: left;
            }
            .sp5-style-data {
                height: 33px;
                opacity: 1;
                font-size: 20px;
                font-family: YouSheBiaoTiHei;
                color: #ffffff;
                text-align: left;
                position: absolute;
            }
        }
    }
}
</style>

