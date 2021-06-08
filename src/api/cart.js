/*
 * @Author: your name
 * @Date: 2021-06-05 19:03:21
 * @LastEditTime: 2021-06-07 22:01:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\api\cart.js
 */
//购物车

import {
    get,
    post,
    deletes
} from '../utils/request'
// 购物车列表
export const reqGetCartList = () => get("/api/v1/shop_carts");
// 商品列表
export const reqGetProList = () => get("/api/v1/products");
// 添加购物车
export const reqAddCart = (params) => post("/api/v1/shop_carts", params);
// 删除购物车
export const reqDelPro = (params) => deletes("/api/v1/shop_carts/" + params);
// 根据id查询商品
export const reqProDetail = (params) => get("/api/v1/products/" + params);