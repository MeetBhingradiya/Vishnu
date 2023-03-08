import React from 'react';
import { Styles } from '../Styles';

function Home() {
    return (<Styles.HomeCSS>
        <div className="Home_container">
            <div className="CircleBox1">
                <div className="Circle"/>
            </div>
        </div>
    </Styles.HomeCSS>)
}

export { Home };