<template>
    <div class="suspension1" id="suspension1">
        <div class="box">
            <div class="header">
                <i :class="dataList.header.icon"></i>
                <span class="header_information">
                    <span class="title">{{dataList.header.title}}</span>
                    <span class="information">{{dataList.header.information}}</span>
                </span>
            </div>
            <div class="content">
                <div>编号：{{dataList.content.id}}</div>
                <div class="xy">
                    <span>经度：{{dataList.content.x}}</span>
                    <span>纬度：{{dataList.content.y}}</span>
                </div>
                <div>设备状态：<span class="status">{{dataList.content.status}}</span></div>
                <div>音量：{{dataList.content.volume}}</div>
                <div>最后上报时间：{{dataList.content.time}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "suspension1",
    props: {
    },
    data(){
        return{
            dataList:{
                header:{
                    icon:"icon-guangboqi",
                    title:"智慧音柱-DF45",
                    information:"海口市美兰区江东大道"
                },
                content:{
                    id:"0972A873AAF211EA8A5A00163E02E0CA",
                    x:"110.389148",
                    y:"20.071856",
                    status:"在线",
                    volume:"0分贝",
                    time:"2021-04-26 21:00:12"
                }
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
#suspension1.suspension1{
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        width: 316px;
        height: 219px;
        border: 1px solid;
        border-image: linear-gradient(316deg, rgba(27,150,219,0.26), rgba(40,222,255,0.80) 99%) 1 1;
        border-radius: 1px;
        box-shadow: 0px 5px 4px 0px rgba(0,22,43,0.39);
        .header{
            padding: 10px;
            background: linear-gradient(270deg,rgba(32,45,85,0.20), rgba(40,222,255,0.47) 85%, rgba(40,222,255,0.25));
            .header_information{
                .title{
                    display: block;
                    font-size: 16px;
                    font-family: PangMenZhengDao;
                    text-align: left;
                    color: #ffffff;
                    line-height: 18px;
                }
                .information{
                    display: block;
                    font-size: 12px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #f5f7ff;
                    line-height: 17px;
                    margin-top: 4px;
                }
            }
        }
        .content{
            padding: 20px;
            div{
                height: 17px;
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 17px;
                margin-top: 10px;
                &:first-child{
                    margin-top: 0;
                }
                .status{
                    padding: 0 6px;
                    background: #14c5a0;
                    border-radius: 4px;
                }
            }
            .xy{
                display: flex;
                justify-content: space-between;
            }
        }
    }
}

</style>

