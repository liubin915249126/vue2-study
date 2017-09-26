const moduleB = {
    // 存储状态值
    state: {
        name:'liubin'
    },
    // 状态值的改变方法,操作状态值
    // 提交mutations是更改Vuex状态的唯一方法
    mutations: {
       change(state){
           state.name="another person"
       }
    },
    // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
    getters: {

    },
    actions: {

    }
};
export default moduleB;