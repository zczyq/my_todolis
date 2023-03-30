import React,{ useEffect,useLayoutEffect,useRef,useState } from 'react';
import { findCurAdrShops } from '@/axios/api'
import './index.scss'

function CanteenOne(props) {
    let [shops,setShops] = useState([])
    //用来保存数组
    let [temps,setTemps] = useState([])
    //只有当startIndex > preStartIndex时tipBox的大小才会改变
    const [preStartIndex,setpreStartIndex] = useState(0)
    //是否展示加载更多字样
    const [loadMoreShow,setLoadMoreShow] = useState(true)
    const listRef = useRef()
    const liRef = useRef()
    const topBoxRef = useRef()
    //useEffect的第二个参数(比较值)最好加上,避免uesEffect的无限循环(state和props改变会导致重新渲染)
    useEffect(() => {
        // 搜索商铺将使用搜索出来的数据，不在发起findCurAdrShops请求
        if (props.searchShops) {
            setShops(props.searchShops.slice(0,1))
            setTemps(props.searchShops)
            setLoadMoreShow(true)
            return
        }
        async function fetch() {
            const res = await findCurAdrShops(props.label)
            setShops(res.data)
        }
        fetch()
    },[props.label,props.searchShops])

    function deb(func,delay) {
        let timer = null
        return function () {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                func()
            },delay)
        }
    }

    let liHeight = 0
    let showDatepreStartIndex = 0
    /**
     * 点击加载更多
     */
    function showMore() {
        setLoadMoreShow(false)
        liHeight = liRef.current?.clientHeight
        showDatepreStartIndex = Math.floor(window.innerHeight / liHeight)
        scroll()
    }
    // 展示数组的尾索引值
    function scroll() {
        liHeight = liRef.current?.clientHeight
        //充满屏幕高度应展示的数据个数,一次多刷新几个避免卡顿
        showDatepreStartIndex = Math.floor(window.innerHeight / liHeight) + 2
        const startIndex = Math.floor(listRef.current.scrollTop / liHeight)
        const endIndex = startIndex + showDatepreStartIndex + 1
        //控制topBox高度的在滑动至少1个li的时候才会改变
        if(startIndex > preStartIndex){
            topBoxRef.current.style.height = startIndex * 102 + 'px'
            setpreStartIndex(preStartIndex + 1)
        }else if(preStartIndex > startIndex){
            topBoxRef.current.style.height = listRef.current?.scrollTop + 'px'
            setpreStartIndex(startIndex)
        }
        if(startIndex === 0){ topBoxRef.current.style.height = 0;setpreStartIndex(0)}
        console.log(startIndex,preStartIndex);
        // 设置边界
        // if (temps.length > showDatepreStartIndex && startIndex + showDatepreStartIndex > temps.length) return
        console.log(listRef.current.scrollTop,liHeight,topBoxRef.current.clientHeight);
        //当前屏幕可视区域内展示的数据
        const curShowData = temps.slice(startIndex,endIndex)
        setShops(curShowData)
    }

    return (
        <div id="CanteenOne" >
            <div className="list" onTouchMove={deb(scroll,100)} ref={listRef} style={{ height: `${Math.floor(window.innerHeight / liRef.current?.clientHeight) * liRef.current?.clientHeight}px` }}>
                {/* 用来撑开向下滑动后上面的空隙 */}
                <div ref={topBoxRef} className="topBox" ></div>

                <ul>
                    {
                        shops?.map((shop) => {
                            return (
                                <li key={shop._id} ref={liRef}>
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
                <span onClick={showMore} style={{ visibility: loadMoreShow ? 'visible' : 'hidden' }} className='loadMore'>点击加载更多...</span>
            </div>
        </div>
    );
}


export default CanteenOne;