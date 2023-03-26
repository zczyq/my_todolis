import request from './index'

export const login = (username,password)=>{
    return request({url:`/users/login/${username}/${password}`,method:'POST'})
} 

export const register = (username,password)=>{
    return request({url:`/users/register/${username}/${password}`,method:'POST'})
} 

// 查找当前地址下的所有店铺
export const findCurAdrShops = (address)=>{
    return request({url:`/shops/shop/${address}`,method:'GET'})
}