import React, { useState } from 'react';
import HOCisLogin from '@/hooks/isLogin';
import { Tabs } from 'antd';
import HomeContent from '@/components/homeContent';
import './index.scss'

const Home = () => {
    const [key,steKey] = useState('1')
  
    const onChange = (key) => {
      steKey(key)
    };
    const items = [
      {
        key: '1',
        label: `一期食堂`,
        children: <HomeContent label='一期食堂' style={{display:key === '1' ? 'block' : 'none'}}/>,
      },
      {
        key: '2',
        label: `二期食堂`,
        children: <HomeContent label='二期食堂' style={{display:key === '2' ? 'block' : 'none'}}/>,
      },
      {
        key: '3',
        label: `校内小吃街`,
        children: <HomeContent label='校内小吃街' style={{display:key === '3' ? 'block' : 'none'}}/>,
      },
      {
          key: '4',
          label: `校外小吃街`,
          children: <HomeContent label='校外小吃街' style={{display:key === '4' ? 'block' : 'none'}}/>,
      },
    ];
    return (  
        <div id="Home">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
}
    
export default HOCisLogin(Home);