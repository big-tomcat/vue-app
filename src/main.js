//入口文件
import Vue from 'vue'

//导入MUI的样式
import './lib/mui/css/mui.min.css'

//按需导入Mint-UI 中的组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header)

import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

//导入app根组件
import app from './App.vue'



var vm = new Vue({
    el: '#app',
    render: c=> c(app)
})