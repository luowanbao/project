import { get } from '../utils/request'

// 封装获取订单列表接口
export const reqallOrders = () => get('/api/v1/orders');
