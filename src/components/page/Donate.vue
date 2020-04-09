<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-redpacket_fill"></i> 支持作者
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">如果该框架对你有帮助，那就请作者喝杯饮料吧！加微信号linxin_20探讨问题。</div>
            <div>
                <img src="https://lin-xin.gitee.io/images/weixin.jpg" />
            </div>
        </div>

        <a style="color:#1998FB;font-size: 12px">{{this.number}}</a>

    </div>
</template>

<script>
export default {
    data:{
        number:null
    },
    mounted(){
            this.initNumber()
    },
    methods:{
        initNumber(){

            let d = '4500.3456万元人民币'
            this.number = d.replace(/[\u4e00-\u9fa5]/g,'')+''
            console.log(this.number)
        }
    }
};
</script>

<style>
</style>