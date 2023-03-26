import React,{ useEffect,useState } from 'react';
import { findCurAdrShops } from '@/axios/api'
import './index.scss'

function CanteenOne(props) {
    const [shops,setShops] = useState([])
    //useEffect的第二个参数(比较值)最好加上,避免uesEffect的无限循环(state和props改变会导致重新渲染)
    useEffect(() => {
        async function fetch(){
            const res = await findCurAdrShops(props.label)
            setShops(res.data)
        }
        fetch()
    },[props.label])

    return (
        <div id="CanteenOne">
            <ul>
                {
                    shops?.map((shop) => {
                        return (
                            <li key={shop._id}>
                                <div className="img">
                                    <img src={shop.shopImg} alt="" />
                                </div>
                                <div className="content">
                                    <span>{shop.shopName}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default CanteenOne;