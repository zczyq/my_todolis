import Login from "@/pages/login"
import React from 'react';

function HOCisLogin(Component) {
    // 检验token

    return function(){
        // 判读是否有token，有则正常通过，没有则渲染登录页面
        if(localStorage.getItem('token')){
            return <Component/>
        }else {
            return <Login/>
        }
    }
}

export default HOCisLogin;