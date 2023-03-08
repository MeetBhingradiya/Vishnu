/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { assets } from '../assets';
import { Styles } from "../Styles";
import Context from '..';
import { motion, useDragControls } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import Ripples from '../Plugins/ReactRipples';

function Head() {
    const context: any = React.useContext(Context);
    const DragControls = useDragControls();

    const [SliderMenu, SetSliderMenu] = React.useState({
        x: 0,
        y: 0,
        width: 22.3,
    });

    const Slider_Update = () => {
        switch (context.Settings.ActiveComponent) {
            case 0:
                SetSliderMenu({
                    x: 0,
                    y: 0,
                    width: 22.3,
                })
                break;
            case 1:
                SetSliderMenu({
                    x: 80,
                    y: 0,
                    width: 40,
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
                    x: 255,
                    y: 0,
                    width: 35,
                })
                break;
            case 4:
                SetSliderMenu({
                    x: 370,
                    y: 0,
                    width: 30,
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
    }, [context.Settings.ActiveComponent])

    return (<Styles.HeadCSS>
        <motion.div className="Logo"  transition={{ duration: 1 , ease: "linear" }} animate={{ opacity: 1 }} initial={{ opacity: 0}}>
            <img src={assets.Logo} alt="Visnu Logo" />
        </motion.div>
        <motion.ul onPointerDown={(event) => DragControls.start(event)} className="List" transition={{ duration: 1 , ease: "linear" }} animate={{ opacity: 1 }} initial={{ opacity: 0}}>
            <li className={ context.Settings.ActiveComponent === 0 ? "active_li" : "li"} onClick={context.Settings.ActiveComponent === 0 ? ()=> {} : () => { context.SetSettings({ ...context.Settings, ActiveComponent: 0 }) } }>Home</li>
            <li className={ context.Settings.ActiveComponent === 1 ? "active_li" : "li"} onClick={context.Settings.ActiveComponent === 1 ? ()=> {} : () => { context.SetSettings({ ...context.Settings, ActiveComponent: 1 }) } }>About Me</li>
            <li className={ context.Settings.ActiveComponent === 2 ? "active_li" : "li"} onClick={context.Settings.ActiveComponent === 2 ? ()=> {} : () => { context.SetSettings({ ...context.Settings, ActiveComponent: 2 }) } }>Skill</li>
            <li className={ context.Settings.ActiveComponent === 3 ? "active_li" : "li"} onClick={context.Settings.ActiveComponent === 3 ? ()=> {} : () => { context.SetSettings({ ...context.Settings, ActiveComponent: 3 }) } }>Experience</li>
            <li className={ context.Settings.ActiveComponent === 4 ? "active_li" : "li"} onClick={context.Settings.ActiveComponent === 4 ? ()=> {} : () => { context.SetSettings({ ...context.Settings, ActiveComponent: 4 }) } }>Portfolios</li>
            <li className={ context.Settings.ActiveComponent === 5 ? "active_li" : "li"} onClick={context.Settings.ActiveComponent === 5 ? ()=> {} : () => { context.SetSettings({ ...context.Settings, ActiveComponent: 5 }) } }>Contact Me</li>
            <motion.div className="Slider" animate={SliderMenu} transition={{ duration: 0.5 , ease: "backInOut" }} initial={false} whileTap={{ scale: 1.2 }} whileHover={{ scale: 1.1}}/>
        </motion.ul>
        {/* <div className="container">
            <Ripples className='Logo'>
                <Tooltip title={"Visnu Shekhada"}>
                    <img src={assets.Logo} alt="Visnu Shekhada'S Icon" />
                </Tooltip>
            </Ripples>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </div> */}
    </Styles.HeadCSS>)
}

export { Head };