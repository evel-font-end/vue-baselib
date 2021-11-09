<template>
    <div class="suspension7" id="suspension7">
        <div class="box">
            <div class="item" v-for="(item, index) in dataList" :key="index">
                <span :class="[item.class==1?'green':'blue','icondv']"></span>
                <span class="text">{{item.text}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "SuspensionStyle7",
    components:{
    },
    props: {
        dataList:{
            type: Array,
            default: [
                {
                    class: 1,
                    text: "A端机房：阆中七里大道七里香榭小区地下室车库",
                },
                {
                    class: 1,
                    text: "A端机房：阆中七里大道七里香榭小区地下室车库",
                },
                {
                    class: 0,
                    text: "Z端机房：阆中思依卫生院",
                },
                {
                    class: 0,
                    text: "Z端机房：阆中思依卫生院",
                },
            ]
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
#suspension7.suspension7{
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        width: 373px;
        height: 143px;
        background: url("../../../assets/image/suspension7_bg.png") no-repeat;
        padding-left: 33px;
        padding-right: 10px;
        padding-bottom: 29px;
        padding-top: 16px;
        .item{
            margin-bottom: 6px;
            .icondv{
                display: inline-block;
                width: 8px;
                height: 8px;
            }
            .text{
                font-size: 14px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                text-shadow: 0px 2px 4px 0px rgba(0,0,0,0.50); 
            }
        }
    }
}
.green{
    background: #5fffd7;
}
.blue{
    background: #5fcaff;
}
</style>

