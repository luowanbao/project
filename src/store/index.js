/*
 * @Author: your name
 * @Date: 2021-06-05 19:03:21
 * @LastEditTime: 2021-06-07 16:00:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\project\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        fromPath: "",
        toPath: "",
        userInfo: null,
    },
    mutations: {
        fromPath(state, fromPath) {
            state.fromPath = fromPath;
        },
        toPath(state, toPath) {
            state.toPath = toPath;
        },
        userInfo(state, userInfo) {
            state.userInfo = userInfo;
        },

    },
    actions: {},
    getters: {
        fromPath(state) {
            return state.fromPath;
        },
        toPath(state) {
            return state.toPath;
        },
        userInfo(state) {
            return state.userInfo;
        },
    },
    modules: {}
})

export default store