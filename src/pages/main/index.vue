<template>
  <div class="container">
    <button class="wuli-btn" @getuserinfo="getUersInfo" open-type="getUserInfo" lang="zh_CN">获取用户数据</button>
    <template v-if="userInfo">
        <image :src="userInfo.avatarUrl" mode="aspectFit" />
        <div>名字：{{userInfo.nickName}}</div>
        <div>位置：{{userInfo.city}}</div>
    </template>
    <button class="wuli-btn" @click="toggleVisible">弹出层</button>
    <!-- <button @click="goHandle(2)">页面跳转</button>
    <button @click="showHandle">跟单测试接口</button>
    <button @click="clickHandle">登录</button>
    <div>{{info.str_status}}</div>    
    <radio-group class="radio-group" @change="radioChange">
      <label class="radio" v-for="item in items" :key="item.name">
        <radio :value="item.name" :checked="item.checked"/> {{item.value}}
      </label>
    </radio-group>
    <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
        当前选择: {{date}}
    </picker> -->
    <div class="wuli-popup" :class="[visible ? 'wuli-popup__show' : '']">
        <div class="wuli-popup__mask" @click.stop="toggleVisible"></div>
        <div class="wuli-popup__container">
            dsdsdsdsdsdsdsd
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { showSuccessModal, showTextModal } from '@/utils'
import { GetDetail } from '@/api/home'

export default {
    data() {
        return {
            userInfo: {},
            formData: {
                name: 'fyzjzs',
                pwd: '123qwe',
                key: 'fyzjzs'
            },
            info: {},
            items: [
                {name: 'USA', value: '美国'},
                {name: 'CHN', value: '中国', checked: 'true'},
                {name: 'BRA', value: '巴西'},
                {name: 'JPN', value: '日本'},
                {name: 'ENG', value: '英国'},
                {name: 'TUR', value: '法国'}
            ],
            date: '',
            visible: false
        };
    },
    onShow() {
        // `this` 指向 vm 实例
        // console.log("motto is: " + this.motto, "小程序触发的 onshow");
    },
    methods: {
        clickHandle(id) {
            this.$store.dispatch('userLogin', this.formData)
        },
        goHandle(id) {
            var url = "/pages/apply/main?id=" + id
            wx.navigateTo({url})
        },
        showHandle() {
            GetDetail({ 
                data: { id: 8 }
            }).then(res => {
                if (res.StatusCode === 200) {
                    this.info = res.Data
                }
            });
            
        },
        getUersInfo(e) {
            const { errMsg } = e.mp.detail;
            if(errMsg === 'getUserInfo:ok') {
                this.userInfo = JSON.parse(e.mp.detail.rawData)
            }else {
                showTextModal('您取消了授权，获取失败')
            }
        },
        radioChange(e) {
            console.log('radio发生change事件，携带value值为：', e.target.value)
        },
        bindDateChange(e) {
            const { value } = e.mp.detail;
            this.date = value;
        },
        toggleVisible() {
            this.visible = !this.visible
        }
    },
    computed: {
        ...mapGetters(['token'])
    }
};
</script>

<style scoped>

</style>
