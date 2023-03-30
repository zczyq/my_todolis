import React from 'react';
import HomeContent from '@/components/homeContent'
import { useLocation } from 'react-router-dom';
function SearchShop() {
    const searchShops = useLocation().state.data
    return (  
        <div id="searchShop">
            <HomeContent searchShops={searchShops}/>
        </div>
    );
}

export default SearchShop;