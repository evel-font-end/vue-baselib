<template>
    <div class="icon1">
        <div class="iconBox" v-for="(item, index) in iconAllDataList" :key="index">
            <div class="title">{{item.name}}图标集合</div>
            <div class="iconList">
                <div class="item" v-for="(childitem, childindex) in item.glyphs" :key="childindex">
                    <p>
                        <i :class="item.font_family+' '+item.css_prefix_text+childitem.font_class" :id="item.css_prefix_text+childitem.font_class"></i>
                    </p>
                    <p>{{childitem.name}}</p>
                    <p class="iconclass">{{item.font_family+' '+item.css_prefix_text+childitem.font_class}}</p>
                    <div class="iconmask" @click="copyClassFn(item.font_family+' '+item.css_prefix_text+childitem.font_class)">
                        <span>复制代码</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LPicondata from '@/assets/icon/LampPoleIconFont/iconfont.json';
import NWicondata from '@/assets/icon/NetWorkIconFont/iconfont.json';
import UIicondata from '@/assets/icon/UIIconFont/iconfont.json';

export default {
    name: 'icon1',
    props: {
    },
    data () {
        return {
            iconAllDataList:[
                UIicondata,
                LPicondata,
                NWicondata,
            ],
        };
    },
    computed: {
        
    },
    mounted () {
    },
    methods: {
        copyClassFn(value){
            let eInput = document.createElement('input')
            eInput.value = value
            document.body.appendChild(eInput)
            eInput.select() //选择对象
            document.execCommand('Copy') //执行浏览器的复制命令
            eInput.style.display = 'none'
            this.$message({
                message: '复制成功',
                type: 'success'
            });
        },
    },
    watch: {
    }
};
</script>

<style lang="less">
.icon1{
    text-align: center;
    font-size: 14px;
    // color: #fff;
    .iconBox{
        width: 100%;
        .title{
            text-align: left;
            font-size: 18px;
            margin-left: 10px;
            margin-top: 20px;
            font-weight: 500;
            color: #fff;
        }
    }
    .iconList{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .item{
            width: 200px;
            height: 120px;
            border-radius: 12px;
            background-color: #132845;
            padding: 10px;
            box-sizing: content-box;
            margin-top: 20px;
            margin-left: 10px;
            position: relative;
            color: #fff;
            overflow: hidden;
            .iconmask{
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 12px;
                background: rgba(4,89,138,0.8);
            }
            &:hover .iconmask{
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                color: #fff;
                cursor: pointer;
            }
        }

    }
    .iconfont{
        font-size: 40px;
        color: red;
    }
    .LPiconfont{
        font-size: 40px;
        color: salmon;
    }
    .NWiconfont{
        font-size: 40px;
        color: sandybrown;
    }
    .UIiconfont{
        font-size: 40px;
        color: gold;
    }
    .iconclass{
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
}
</style>
