import { get, post ,deletes, put} from '../utils/request'
export const DzlistApi = (params) => get('/api/v1/addresses', params)

export const newDzApi =(data)=>post("/api/v1/addresses",data)

export const deletApi = (id)=>deletes("/api/v1/addresses/"+id)

// 单条地址详情
export const oneddApi = (id)=>get("/api/v1/addresses/"+id)

export const putApi = (id,params)=>put("/api/v1/addresses/"+id,params)