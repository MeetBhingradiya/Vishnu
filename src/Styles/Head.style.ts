import Styled from 'styled-components';

export const HeadCSS = Styled.div`
position: fixed;
width: 100%;
height: 97px;
user-select: none;
background: rgba(3, 0, 28, 0.6);
backdrop-filter: blur(14.175px);
-webkit-backdrop-filter: blur(14.175px);
z-index: 100;
.Logo {
    padding: 1px;
    img {
        margin: 16px 0px 0px 129px;
        width: 152px;
        height: 55px;
    }
}

// OLD CSS 
.List {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20.17px;
    width: 567.86px;
    height: 25.06px;
    margin: -37.11px 0px 0px 824px;
    list-style: none;
}
.List .li {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: white;
    cursor: pointer;
}
.active_li {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 20px;
    background: radial-gradient(100% 506.25% at 0% 0%, #F9F7FF 0%, #C9BCF1 49.22%, #8A70DA 100%), radial-gradient(51.02% 51.02% at 27.19% 28.07%, #C3B3F3 0%, #A394D2 23.96%, #5A4696 64.06%, #211449 100%), #EEEEEE;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    flex: none;
    font-weight: 600;
    cursor: default;
    order: 0;
    flex-grow: 0;
    transition: 2s;
}

.Slider {
    position: absolute;
    margin: 35px 0px 0px -510px;
    width: 22.3px;
    height: 7px;
    z-index: 55;
    background: red;
    border-radius: 5px;
    background: radial-gradient(100% 506.25% at 0% 0%, #F9F7FF 0%, #C9BCF1 49.22%, #8A70DA 100%), radial-gradient(51.02% 51.02% at 27.19% 28.07%, #C3B3F3 0%, #A394D2 23.96%, #5A4696 64.06%, #211449 100%), #EEEEEE;
}

/* .List {
    position: relative;
} */
`