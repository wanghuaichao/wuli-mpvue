import Vue from 'vue'
import App from './App'
import Store from './store'

import mpvueToastRegistry from 'mptoast/registry'
mpvueToastRegistry(Vue)

Vue.config.productionTip = false
Vue.prototype.$store = Store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: [
            '^pages/dashboard/main', 
            'pages/button/main',
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#ffffff',
            navigationBarTitleText: 'wuli-mpVue',
            backgroundColor: "#eeeeee",
            navigationBarTextStyle: 'black'
        }
    }
}
