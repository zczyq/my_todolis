import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {search} from '@/axios/api'
import {LeftOutlined} from '@ant-design/icons';
import { Input } from 'antd';
import './index.scss'

const { Search } = Input;
function Header() {
    const [loading,setLoading] = useState(false)
    const [inpVal,setInpVal] = useState()
    const navigate = useNavigate()
    const enSearch = ()=>{
        setLoading(true)
        search(inpVal).then(data=>{
            navigate('/searchShop',{state:data})
        }).finally(()=>{setLoading(false)})
    }
    return (
        <div id="header" style={{display:localStorage.getItem('token') ? 'block' : 'none'}}>
            <header>
                <div><span onClick={()=>{navigate(-1)}}><LeftOutlined /></span></div>
                <div className="left">
                    <span>欢迎您 {localStorage.getItem('username')}</span>
                </div>
                <div className="right">
                    <Search onChange={(e)=>{setInpVal(e.target.value)}} onSearch={enSearch} placeholder="input content" loading={loading} enterButton />
                </div>
            </header>
        </div>
    );
}

export default Header;