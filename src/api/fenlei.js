import { get } from '../utils/request'

/*
  封装请求所有商品接口
*/
export const reqAllproducts = (params) => get('/api/v1/products', params)
