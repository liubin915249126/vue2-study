import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from './moduleA';
import moduleB from './moduleB';

Vue.use(Vuex)
//创建Store实例
const store = new Vuex.Store({
    modules:{
        moduleA, moduleB
    }
})
// 要改变状态值只能通过提交mutations来完成
export default store;