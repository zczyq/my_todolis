import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {login,register} from '@/axios/api'
import {useNavigate,Link} from "react-router-dom";

import './index.css'

const UserForm = (props) => {
    const loginOrRegister = props.state
    //和当前用户登录状态相反
    const opposite = loginOrRegister === 'login' ? 'register' : 'login'
    const navigate = useNavigate()
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()

    /**
     * 提交表单信息（用户名，密码）,保存Token
     */
    const submitUserInfo = async ()=>{
        if(!username || !password) {
            alert('账号或密码不能为空')
            return
        }

        const res = loginOrRegister === 'login' ? await login(username,password) : await register(username,password)
        if(res.msg === 'register success'){
            // 跳转到登陆页面
            navigate('/login')
        }else {
            alert(res.msg)
        }

        if(res.msg === 'login success'){
            // enter home
            navigate('/home')
            // 登录成功，保存返回的token
            localStorage.setItem('token',res.data)
        }else {
            // 登陆失败，用户名或密码错误
            alert(res.msg)
        }
    }

    return ( 
        <div id="userForm">
            <Form action='http://127.0.0.1/api/users/login' method='post'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" onChange={(e)=>{setUsername(e.target.value)}}/>
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <Form.Text className="text-muted">
                    We'll never share your Password with anyone else.
                </Form.Text>
                </Form.Group>
                <div className="register"><Link to={'/' + opposite}>click go to {opposite}</Link></div>
                <Button variant="primary" onClick={submitUserInfo}>
                    {loginOrRegister}
                </Button>
            </Form>
        </div>
       
    );
}
 
export default UserForm;