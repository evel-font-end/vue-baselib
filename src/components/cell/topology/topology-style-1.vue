<template>
    <div class="topology1" id="topology1">
        <div class="topology1_contain">
            <div class="earth">
                <div class="building-total">{{buildingTotal}}</div>
                <div class="building-total-title">全国楼宇总数(栋)</div>
            </div>
            <div class="cone">
                <span class="circular1"></span>
                <span class="circular2"></span>
                <span class="circular3"></span>
                <span class="circular4"></span>
                <span class="circular5"></span>
                <img class="circleimg1" src="../../../assets/image/circleimg.png" />
                <img class="circleimg2" src="../../../assets/image/circleimg.png" />
                <img class="circleimg3" src="../../../assets/image/circleimg.png" />
            </div>
        </div>
        <div class="building-list">
            <div class="building-line-top">
                <svg width="46px" height="115px" viewBox="0 0 46 115" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>路径 4</title>
                    <defs>
                        <linearGradient x1="60.6200378%" y1="5.14410373%" x2="41.3161894%" y2="96.9865219%" id="linearGradient-1">
                            <stop stop-color="#29BAFF" offset="0%"></stop>
                            <stop stop-color="#989EFF" stop-opacity="0" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="line" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path d="M-7,116 C3.95044403,116 13.1485309,107.76369 14.3530384,96.8796932 L22.6499289,21.9085244 C23.9670873,10.006607 34.0254209,1 46,1 L46,1 L46,1" id="路径-4" stroke="url(#linearGradient-1)" stroke-width="2"></path>
                    </g>
                </svg>
                <div class="ball1"></div>
            </div>
            <div class="building-line-bottom">
                <svg width="53px" height="127px" viewBox="0 0 53 127" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>路径 8</title>
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                            <stop stop-color="#989EFF" stop-opacity="0" offset="0%"></stop>
                            <stop stop-color="#29BAFF" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="line" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path d="M0,0 C10.9234791,-2.00661055e-15 20.0725076,8.27147114 21.170262,19.1396509 L29.8497994,105.070322 C31.0502207,116.954943 41.0549077,126 53,126 L53,126 L53,126" id="路径-8" stroke="url(#linearGradient-1)" stroke-width="2"></path>
                    </g>
                </svg>
                <div class="ball2"></div>
            </div>
            <div>
                <div class="building-list-box" v-for="(item,index) in buildingList" :key="index">
                    <div class="building-list-box-left">
                        <div class="building-sign">
                            <div :class="['building-sign-icon', 'icon', 'iconfont', item.icon]"></div>
                        </div>
                        <div class="building-list-box-left-title">{{item.title}}</div>
                        <div class="building-list-box-left-tong">{{item.riTong}}</div>
                    </div>
                    <div class="building-list-box-right">{{item.number}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "topology1",
    props: {
    },
    data(){
        return{
            buildingTotal: 84990,
            buildingList:[
                {
                    title: 'A类楼宇',
                    number: 9600,
                    riTong: '1日通',
                    icon: 'icon-Alei'
                },
                {
                    title: 'B类楼宇',
                    number: 8493,
                    riTong: '3日通',
                    icon: 'icon-Blei'
                },
                {
                    title: 'C类楼宇',
                    number: 749,
                    riTong: '6日通',
                    icon: 'icon-Clei'
                },
                {
                    title: 'D类楼宇',
                    number: 490,
                    riTong: '10日通',
                    icon: 'icon-Dlei'
                },
                {
                    title: 'N类楼宇',
                    number: 30,
                    riTong: '15日通',
                    icon: 'icon-Nlei'
                },
            ],
        }
    },
    mounted(){
    },
    methods:{
        
    }
};
</script>

<style lang="scss" scoped>
#topology1.topology1{
    display: flex;
    .topology1_contain{
        width: 50%;
        position: relative;
        .earth {
            margin: 0 auto;
            width: 221px;
            height: 219px;
            background: url("../../../assets/image/earth.png") no-repeat;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            .building-total {
                font-size: 32px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                color: #ffffff;
                text-shadow: 0 2px 4px  #014253;
                width: 117px;
                height: 43px;
                opacity: 1;
                background: linear-gradient(270deg,rgba(1,95,125,0.00), rgba(0,114,191,0.85) 49%, rgba(1,85,171,0.00));
                border: 1px solid;
                border-image: linear-gradient(270deg, rgba(103,214,255,0.00), #36adff 55%, rgba(54,173,255,0.00)) 1 1;
                border-radius: 1px;
                margin-bottom: 5px;
            }
            .building-total-title {
                width: 180px;
                height: 30px;
                font-size: 22px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                color: #fff;
                text-shadow: 0 2px 4px 0 #001745;
            }
        }
        .cone {
            width: 180px;
            height: 126px;
            background: url("../../../assets/image/cone.png") no-repeat;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 192px;
            .circle1 {
                width: 184px;
                height: 32px;
                opacity: 1;
                border: 2px solid #21c3f2;
                position: absolute;
                left: 0;
                top: 5px;
                /*border-image: linear-gradient(180deg, rgba(14,144,225,0.00) 25%, #21c3f2) 2 2;*/
                border-radius: 50%;
            }
            .circular1{
                position: absolute;
                left: -16px;
                top: 20px;
                width: 7px;
                height: 7px;
                opacity: 1;
                background: #54fffe;
                border-radius: 50%;
                filter: blur(2px);
                animation:mymove 3s infinite;
                -webkit-animation:mymove 3s infinite;
            }
            @keyframes mymove
                {
                0% {
                    top:20px;
                }
                50% {
                    top:26px;
                }
                100% {
                    top:20px;
                }
            }
            .circular2{
                position: absolute;
                left: 35px;
                top: 34px;
                width: 10px;
                height: 10px;
                opacity: 1;
                background: #54fffe;
                border-radius: 50%;
                animation:mymove2 3s infinite;
                -webkit-animation:mymove2 3s infinite;
            }
            @keyframes mymove2
                {
                0% {
                    top:34px;
                }
                50% {
                    top:40px;
                }
                100% {
                    top:34px;
                }
            }
            .circular3{
                width: 7px;
                height: 7px;
                opacity: 1;
                background: #54fffe;
                border-radius: 50%;
                position: absolute;
                left: 52px;
                top: 70px;
                animation:mymove3 3s infinite;
                -webkit-animation:mymove3 3s infinite;
            }
            @keyframes mymove3
                {
                0% {
                    top:76px;
                }
                50% {
                    top:70px;
                }
                100% {
                    top:76px;
                }
            }
            .circular4{
                width: 5px;
                height: 5px;
                opacity: 0.75;
                background: #54fffe;
                border-radius: 50%;
                position: absolute;
                right: 20px;
                top: 50px;
                animation:mymove4 5s infinite;
                -webkit-animation:mymove4 5s infinite;
            }
            @keyframes mymove4
                {
                0% {
                    top:44px;
                }
                50% {
                    top:50px;
                }
                100% {
                    top:44px;
                }
            }
            .circular5{
                width: 6px;
                height: 6px;
                opacity: 0.73;
                background: #54fffe;
                border-radius: 50%;
                filter: blur(1px);
                position: absolute;
                right: -16px;
                top: 10px;
                animation:mymove5 3s infinite;
                -webkit-animation:mymove5 3s infinite;
            }
            @keyframes mymove5
                {
                0% {
                    top:13px;
                }
                50% {
                    top:8px;
                }
                100% {
                    top:13px;
                }
            }
            .circleimg1{
                width: 185px;
                height: 24px;
                opacity: 0;
                position: absolute;
                left: 0;
                bottom: 20px;
                animation:circleimgmove1 3s infinite;
            }
            @keyframes circleimgmove1
                {
                0% {
                    bottom: 20px;
                    opacity: 1;
                    transform: scale(1);
                }
                100% {
                    bottom: 100%;
                    opacity: 0;
                    transform: scale(1.5);
                }
            }
            .circleimg2{
                width: 155px;
                height: 24px;
                opacity: 0;
                position: absolute;
                bottom: 0;
                left: 15px;
                animation:circleimgmove2 3s infinite;
                animation-delay:0.5s;
            }
            @keyframes circleimgmove2
                {
                0% {
                    bottom: 0;
                    opacity: 1;
                    transform: scale(1);
                }
                100% {
                    bottom: 100%;
                    opacity: 0;
                    transform: scale(1.5);
                }
            }
            .circleimg3{
                width: 125px;
                height: 24px;
                opacity: 0;
                position: absolute;
                left:30px;
                bottom: -20px;
                animation: circleimgmove3 3s infinite;
                animation-delay: 1s;
            }
            @keyframes circleimgmove3
                {
                0% {
                    bottom: -20px;
                    opacity: 1;
                    transform: scale(1);
                }
                100% {
                    bottom: 100%;
                    opacity: 0;
                    transform: scale(1.5);
                }
            }
        }
    }
    .building-list {
        width: 50%;
        display: flex;
        align-items: center;
        margin-left: -8%;
        .building-line-top {
            position: relative;
            top: -55px;
            .ball1 {
                width: 8px;
                height: 8px;
                background: #6de1ff;
                border-radius: 50%;
                position: absolute;
                right: 37px;
                top: 0px;
                offset-path: path(
                    "M-7,116 C3.95044403,116 13.1485309,107.76369 14.3530384,96.8796932 L22.6499289,21.9085244 C23.9670873,10.006607 34.0254209,1 46,1 L46,1 L46,1"
                );
                offset-distance: 0%;
                animation: ball1 2s linear infinite;
            }
        }
        .building-line-bottom {
            position: relative;
            top: 80px;
            left: -40px;
            .ball2 {
                width: 8px;
                height: 8px;
                background: #6de1ff;
                border-radius: 50%;
                position: absolute;
                right: 45px;
                top: -3px;
                offset-path: path(
                    "M0,1 C10.950444,1 20.1485309,9.23631 21.3530384,20.1203068 L29.6499289,95.0914756 C30.9670873,106.993393 41.0254209,116 53,116 L53,116 L53,116"
                );
                offset-distance: 0%;
                animation: ball1 2s linear infinite;
            }
        }
        &-box {
            width: 205px;
            height: 60px;
            background: linear-gradient(270deg,rgba(5,223,243,0.00), rgba(2,188,227,0.29) 99%);
            border-radius: 54px 0 0 54px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px 0 30px;
            margin-top: 10px;
            position: relative;
            .building-sign {
                width: 42px;
                height: 42px;
                border-radius: 50%;
                position: absolute;
                left: -21px;
                top: 9px;
                background: linear-gradient(146deg, #00d0e6 12%, #006f86 83%);
                padding: 1px;
                &-icon {
                    background: linear-gradient(180deg,#31bfec, #00476e);
                    border-radius: 50%;
                    height: 100%;
                    font-size: 24px;
                    font-weight: normal;
                    color: #fff;
                    line-height: 40px;
                }
            }
            &-left {
                &-title {
                    height: 25px;
                    font-size: 18px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    text-align: center;
                    color: #88d7fd;
                    margin-bottom: 4px;
                }
                &-tong {
                    width: 50px;
                    height: 20px;
                    opacity: 1;
                    background: #036f85;
                    border-radius: 3px;
                    color: #fff;
                    font-size: 14px;
                    text-align: center;
                }
            }
            &-right {
                font-size: 24px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                color: #fff;
                line-height: 26px;
            }
        }
    }
}

</style>

