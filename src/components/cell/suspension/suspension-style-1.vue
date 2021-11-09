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
                <div>{{dataList.content.id}}</div>
                <div class="xy">
                    <span>{{dataList.content.x}}</span>
                    <span>{{dataList.content.y}}</span>
                </div>
                <div>{{dataList.content.statustext}}<span class="status">{{dataList.content.status}}</span></div>
                <div>{{dataList.content.volume}}</div>
                <div>{{dataList.content.time}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SuspensionStyle1",
    props: {
        dataList:{
            type: Object,
            default: function(){
                let data = 
                {
                    header:{
                        icon:"icon-guangboqi iconfont",
                        title:"智慧音柱-DF45",
                        information:"海口市美兰区江东大道"
                    },
                    content:{
                        id:"编号：0972A873AAF211EA8A5A00163E02E0CA",
                        x:"经度：110.389148",
                        y:"纬度：20.071856",
                        statustext:"设备状态：",
                        status:"在线",
                        volume:"音量：0分贝",
                        time:"最后上报时间：2021-04-26 21:00:12"
                    }
                }
                return data
            }
        }
    },
    data(){
        return{
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
            display: flex;
            .iconfont{
                width: 34px;
                height: 34px;
                line-height: 32px;
                color: #ffffff;
                text-align: center;
                background: rgba(1,139,168,0.87);
                margin-right: 7px;
                margin-top: 2px;
                border-radius: 17px;
                border: 1px solid #4afff6;
            }
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

