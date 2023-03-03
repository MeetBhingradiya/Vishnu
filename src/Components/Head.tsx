/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { assets } from '../assets';
import { Styles } from "../Styles";
import Context from '..';
import { motion } from 'framer-motion';

function Head() {
    const context: any = React.useContext(Context);

    const [ SliderMenu , SetSliderMenu ] = React.useState({
        x: 0,
        y: 0,
        width: 22.3,
    });

    const Slider_Update = () => {
        switch(context.Settings.ActiveComponent) {
            case 0:
                SetSliderMenu({
                    x: 0,
                    y: 0,
                    width: 22.3,
                })
                break;
            case 1:
                SetSliderMenu({
                    x: 85,
                    y: 0,
                    width: 35,
                })
                break;
            case 2:
                SetSliderMenu({
                    x: 175,
                    y: 0,
                    width: 19,
                })
                break;
            case 3:
                SetSliderMenu({
                    x: 250,
                    y: 0,
                    width: 40,
                })
                break;
            case 4:
                SetSliderMenu({
                    x: 365,
                    y: 0,
                    width: 45,
                })
                break;
            case 5:
                SetSliderMenu({
                    x: 477,
                    y: 0,
                    width: 45,
                })
                break;
            default:
                SetSliderMenu({
                    x: 0,
                    y: 0,
                    width: 22.3,
                })
                break;
        }
    } 

    React.useEffect(() => {
        Slider_Update();
    },[context.Settings.ActiveComponent])

    return (<Styles.HeadCSS>
        <div className="Logo">
            <img src={assets.Logo} alt="Visnu Logo" />
        </div>
        <ul className="List">
            <li className={ context.Settings.ActiveComponent === 0 ? "active_li" : ""} onClick={() => { context.SetSettings({ ...context.Settings, ActiveComponent: 0 }) }}>Home</li>
            <li className={ context.Settings.ActiveComponent === 1 ? "active_li" : ""} onClick={() => { context.SetSettings({ ...context.Settings, ActiveComponent: 1 }) }}>About Me</li>
            <li className={ context.Settings.ActiveComponent === 2 ? "active_li" : ""} onClick={() => { context.SetSettings({ ...context.Settings, ActiveComponent: 2 }) }}>Skill</li>
            <li className={ context.Settings.ActiveComponent === 3 ? "active_li" : ""} onClick={() => { context.SetSettings({ ...context.Settings, ActiveComponent: 3 }) }}>Experience</li>
            <li className={ context.Settings.ActiveComponent === 4 ? "active_li" : ""} onClick={() => { context.SetSettings({ ...context.Settings, ActiveComponent: 4 }) }}>Portfolios</li>
            <li className={ context.Settings.ActiveComponent === 5 ? "active_li" : ""} onClick={() => { context.SetSettings({ ...context.Settings, ActiveComponent: 5 }) }}>Contact Me</li>
            <motion.div className="Slider" animate={SliderMenu} />
        </ul>
    </Styles.HeadCSS>)
}

export { Head };