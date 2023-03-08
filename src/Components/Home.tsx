import React from 'react';
import { assets } from '../assets';
import { Styles } from '../Styles';

function Home() {
    return (<Styles.HomeCSS>
        <div className="Home_container">
            <div className="CircleBox1">
                <img src={assets.Home_Circle_1} alt='circle'/>
            </div>
            <div className="CircleBox2">
                <img src={assets.Home_Circle_2} alt='circle'/>
            </div>
        </div>
    </Styles.HomeCSS>)
}

export { Home };