import { post } from '../utils/request'
//注册
export const reqReg = (params) => post("/api/v1/auth/reg", params)
//登录
export const reqLogin = (params) => post("/api/v1/auth/login", params)
//修改账户

//修改密码

