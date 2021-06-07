/*
 * @Author: your name
 * @Date: 2021-06-05 19:03:21
 * @LastEditTime: 2021-06-05 21:29:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\api\cart.js
 */
//购物车

import {
    get
} from '../utils/request'

export const reqGetCartList = () => get("/api/v1/shop_carts");

export const reqGetProList = () => get("/api/v1/products");