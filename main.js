import Vue from 'vue'
import App from './App'

// 导入API
import api from './common/api'

// 挂载到Vue原型上
Vue.prototype.$api = api


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
