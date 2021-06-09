/*
 * @Author: your name
 * @Date: 2021-06-05 19:03:21
 * @LastEditTime: 2021-06-08 15:49:19
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
        userInfo: null, //请求订单新增接口参数
        listProJs: [],
        sumPriceProJs: 0,
        countProJs: 0,
        myOrderInfo: null,
        detailAddrId: null,
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
        listProJs(state, listProJs) {
            state.listProJs = listProJs;
        },
        sumPriceProJs(state, sumPriceProJs) {
            state.sumPriceProJs = sumPriceProJs;
        },
        countProJs(state, countProJs) {
            state.countProJs = countProJs;
        },
        myOrderInfo(state, myOrderInfo) {
            state.myOrderInfo = myOrderInfo;
        },
        detailAddrId(state, detailAddrId) {
            state.detailAddrId = detailAddrId;
        }

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
        listProJs(state) {
            return state.listProJs;
        },
        sumPriceProJs(state) {
            return state.sumPriceProJs;
        },
        countProJs(state) {
            return state.countProJs;
        },
        myOrderInfo(state) {
            return state.myOrderInfo;
        },
    },
    modules: {}
})

export default store