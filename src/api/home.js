import { wxPromise, wxTokenRequest } from '@/utils/request'

// use用法
// 登录接口 
export const postonLogin = (params) => {
    return wxPromise(params, '/api/fc/auth/login');
}

export const GetDetail = (params) => {
    return wxTokenRequest(params, '/api/Client/Home/GetDetail');
}