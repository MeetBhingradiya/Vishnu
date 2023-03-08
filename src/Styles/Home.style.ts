import Styled from 'styled-components';

export const HomeCSS = Styled.div`
position: relative;
height: 100vh;
width: 100%;
margin: 0px;
padding-top: 97px;
color: black;
.Home_container {
    position: relative;
    width: 1317.04px;
    height: 567.28px;
    left: 120px;
    top: 50.1px;
    background: red;
    .CircleBox1 {
        position: relative;
        width: 308.29px;
        height: 308.29px;
        left: 1008.28px;
        background: blue;
        .Circle{
            position: relative;
            width: 248.06px;
            height: 248.06px;
            /* left: 1437.04px; */
            top: 217.55px;
            background: radial-gradient(51.02% 51.02% at 27.19% 28.07%, #C3B3F3 0%, #A394D2 23.96%, #5A4696 64.06%, #211449 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
            /* transform: rotate(106.5deg); */
        }
    }
}
`;