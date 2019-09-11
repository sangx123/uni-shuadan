import Vue from 'vue'
import App from './App'

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)
// 
import components from './pages/component/home.vue'
Vue.component('components',components)
// 
import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

// //我的
import mine from './pages/mine/mine.vue'
Vue.component('mine',mine)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false



const app = new Vue({
    ...App
})
app.$mount()
