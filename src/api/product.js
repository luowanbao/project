import { get } from '../utils/request'
//商品
// 获取商品列表
export const reqProducts = (data) => get('/api/v1/products', data)

//根据id获取商品详情
export const reqIdDetail = (id) => get("/api/v1/products/" + id)

