import styled, { createGlobalStyle, css } from 'styled-components'

import { motion } from "framer-motion"

const colors = {
  lightGray: '#999',
  mBlack: '#222',
  black: '#111',
  verde: '#ACFCD9',
  red: '#d80032',
  white: '#edf2f4',
  pureWhite: '#FFF',
  gray: '#8d99ae',
  blue: '#15151d',
  blueLight: '#2b2d42',
}

export const themeDark = {
  bgSite: colors.mBlack,
  bg: colors.black,
  color: colors.white,
  txt: colors.lightGray
};
export const themeLight = {
  bgSite: colors.pureWhite,
  bg: colors.white,
  color: colors.black,
  txt: colors.mBlack
};

export const GlobalStyle = createGlobalStyle`

html, body, address, blockquote, div, dl, form, h1, h2, h3, h4, h5, h6, ol, ul, p, pre, table, dd, dt, li, tbody, td, tfoot, th, thead, tr, button, del, ins, map, object, a, abbr, acronym, b, bdo, big, br, cite, code, dfn, em, i, img, kbd, q, samp, small, h4, strong, sub, sup, tt, var, legend, fieldset {
    margin: 0;
    padding: 0;
}
body{background: ${props => props.theme.bg};padding: 0px 0 50px 0; transition: ease .5s;font-family: 'Muli', sans-serif; font-weight:300}
img{width:100%}
`

export const MiHeader = styled.div`
  display: flex; justify-content:center; flex-direction: column;
  align-items: center;
  font-size: 1.5vw;
  height:200px;
  color:${props => props.theme.color};
  h1{margin-top:10px}
  @media (max-width:1000px ) {
    font-size: 3vw;
  }
  @media (max-width:600px ) {
    font-size: 5vw;
  }
`

export const Sitio = styled.div.attrs(props => ({
  id: 'sitio'
}))`
    width:80%; margin: 0 auto; padding:30px; box-sizing:border-box;transition: ease .5s;    
     background: ${props => props.theme.bgSite};
     color:${props => props.theme.color};
     p{font-size:18px; line-height:26px}

     h1,h2,h3{color:${props => props.theme.color}; 
     font-size:32px; 
    }
    > h2{border-bottom: solid 1px ${props => props.theme.color}; 
      display:inline-block; padding: 0 20px; margin-bottom:40px; }

    @media (max-width:1000px ) {
      width:95%;padding:20px;
    }
  `

export const Nav = styled.div`
  position:relative;
  div{ 
    height:60px; z-index:99; transition:ease .5s background;
    background: ${props => props.theme.bgSite};
    color: ${props => props.theme.color};
    font-size: 20px; 
    display:flex; justify-content:space-between;
    a{color: ${props => props.theme.color};}
    svg{cursor: pointer;}
  }
  ${props => props.pegar && css`
    div{ 
      position:fixed !important; top:0;
    }
  `}
`

export const SubNav = styled.ul`
  list-style:none; padding: 0 0 0 40px;
    li{
      a{text-decoration:none; display:inline-block; padding:8px;
        color:${props => props.theme.color};
      }
      .aqui{
        margin:10px 0 10px 8px;
        background: ${props => props.theme.color};
        color: ${props => props.theme.bgSite};
      }
    }
    @media (max-width:800px ) {
      list-style:none; padding: 0;
    }
  
`

export const Fotos = styled.div`

display:grid; grid-template-columns: 1fr 1fr; gap:40px;
box-sizing: border-box; grid-auto-rows:400px;

.foto div, img,.foto div:before{height:100%; width:100%}

.foto{position:relative; background:${props => props.theme.bg};
  div {  height: 100%; width: 100%; position: relative; overflow:hidden;
    img {object-fit:cover; object-position: 50% 50%; display:block;
      transition: transform 0.5s cubic-bezier(0.37, 0, 0.63, 1);
    }    
    h3{z-index:5; color: ${colors.pureWhite}; bottom: 20px;
    font-size: 2vw; position: absolute;
    left: 20px; }
    :before{content:''; 
    position: absolute; z-index:1;
    background: rgb(2,0,36);
    background: linear-gradient(10deg, rgba(2,0,36,0.6) 0%, rgba(0,0,0,0) 30%); 
    }
  }
  :hover{
    div{
      img{transform: scale(1.05)}
    }
  }
}

> div:first-child{ display: flex; 
    justify-content:center; align-items:center;
    flex-direction: column; padding:0 5%;
    
    p{margin-top:10px; line-height:24px; text-align:center;
      color:${props => props.theme.txt};
    }
 }

@media (max-width:1000px ) {
      gap:20px;
      .foto{
        div{
          h3{font-size: 4vw}
        }
      }
    }

    @media (max-width:600px ) {
      gap:20px;grid-template-columns: 1fr ;
      .foto{
        div{
          h3{font-size: 7vw}
        }
      }
    }
`

export const Separador = styled.div`
    display: flex; justify-content:center;
  align-items: center;
  font-size: 2vw;
  height:200px;

  @media (max-width:1000px ) {
    font-size: 4vw;
  }
`

export const LugarStyle = styled(motion.div)`
  display: grid; grid-template-columns: 1fr 70% 3fr; gap: 1fr;
  p{margin-bottom: 16px;color:${props => props.theme.txt};}
  .photo{grid-column: 1/4; height:500px; background:#f79;
    img{height:100%; object-fit: cover; object-position: 50% 50%}; width:auto;
  }
  h1{grid-column: 1/4; display: block; font-size:2.5vw; 
    border-bottom: solid 1px #CCC; padding-bottom:20px; margin:40px 0 40px 0 }



  @media (max-width:1200px ) {
    h1{font-size: 3.5vw;}
    grid-template-columns: 0fr 70% 3fr;
  }
  @media (max-width:800px ) {
    h1{font-size: 7vw;}
    grid-template-columns: 100%;
    .photo,h1{grid-column:1/1;}
  }
  
/*   @media (max-width:600px ) {
    grid-template-columns: 100%; gap:20px;
    .photo,h1{grid-column:1/1;font-size: 8vw;}
  } */
`

export const Footer = styled.footer`
  display:flex; justify-content:center; padding: 40px 0 0 0;
  color:${props => props.theme.txt};
`