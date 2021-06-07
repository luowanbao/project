import { get } from '../utils/request'
export const DzlistApi = (params) => get('/api/v1/addresses', params)