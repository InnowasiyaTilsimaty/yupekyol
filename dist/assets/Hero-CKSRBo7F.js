import{j as e,m,d as l,g as h,r as x,u,t as n,b,q as c,e as s}from"./i18next-vKD2ZA47.js";import{P as d}from"./index-Ce6cBIBd.js";const f="/assets/heroImg2-DaZJ6wp9.jpg",g=({text:o,enterDelay:i,backgroundColor:r})=>{const a={initial:{y:"100%"},enter:t=>({y:"0",transition:{duration:.75,ease:[.33,1,.68,1],delay:.075*t+i}})};return e.jsx(v,{$backgroundColor:r,children:o.map((t,p)=>e.jsx("div",{className:"lineMask",children:e.jsx(m.p,{custom:p,variants:a,initial:"initial",animate:"enter",children:t})},p))})};g.propTypes={text:d.array,enterDelay:d.number,backgroundColor:d.string};const v=h.div`
    .lineMask{
  overflow: hidden;
}

.lineMask p{
  margin: 0px;
  font-weight: 700;
  color: ${l.backgroundColor};
  background-color: ${o=>o.$backgroundColor?o.$backgroundColor:"none"};
}
`,$=()=>{const[o,i]=x.useState(!0),{t:r}=u(),a=[r("4")];return x.useEffect(()=>{const t=()=>{i(window.innerWidth>768)};return window.addEventListener("resize",t),i(window.innerWidth>768),()=>{window.removeEventListener("resize",t)}},[]),e.jsx(k,{children:e.jsx("div",{className:"heroContainer",children:e.jsx("div",{className:"heroCol",children:e.jsxs("div",{className:"headerMotto",children:[e.jsx("div",{className:"headerTitle",children:e.jsx("h1",{children:e.jsx(g,{text:a,enterDelay:4.2,backgroundColor:"#3a776396"})})}),e.jsx("div",{className:"heroText",children:e.jsx(m.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:80,damping:20,duration:1,delay:4.2},children:e.jsx("p",{children:r("5")})})})]})})})})},k=h.section`
  background-image: url(${f});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .headerMotto {
    max-width: 820px;
  }
  .headerTitle {
    h1 {
      font-size: 58px;
      line-height: 86px;
      margin-bottom: 30px;
      
    }
  }
  .heroText {
    margin-bottom: 50px;
    p {
      color: #fff;
      font-size: ${n[18]};
      background-color: ${l.accentColor};
      padding: 5px;
      border-radius: 5px;
    }
  }
  .heroContainer {
    ${b.main}
  }
  .heroCol {
    ${c.between}
    height: 100vh;
  }
  .headerServices {
    max-width: 500px;
    background-color: ${l.orange};
    padding: 40px;
  }
  .headerServicesTitle {
    margin-bottom: 30px;
    h3 {
      text-align: center;
      font-size: ${n[32]};
    }
  }
  .serCol {
    ${c.center}
    max-width: 350px;
  }
  .serImg {
    flex: 1 0 auto;
  }
  .serItemsTitle {
    margin: 0px 0px 30px 20px;
    h4 {
      margin-bottom: 20px;
    }
    span {
      color: #fff;
    }
  }
  ${s.laptopL} {
    .headerMotto {
      max-width: 650px;
    }
    .headerTitle {
      h1 {
        font-size: 45px;
        line-height: 65px;
        margin-bottom: 25px;
      }
    }
    .heroText {
      margin-bottom: 30px;
    }
  }
  ${s.laptop} {
    .headerServices {
      max-width: 368px;
      padding: 22px;
    }
    .serImg {
      flex: 0 1 auto;
    }
    .headerServicesTitle {
      margin-bottom: 15px;
      h3 {
        font-size: ${n[26]};
      }
    }
    .serItemsTitle {
      margin: 0px 0px 20px 20px;
      h4 {
        margin-bottom: 15px;
      }
    }
  }
  @media screen and (max-width: 970px) {
    .heroCol {
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
    }
    .headerMotto {
      margin-top: 70px;
    }
    .headerServices {
      margin-top: 40px;
    }
    .headerServiceAnimation {
      opacity: 1;
      transform: none !important;
    }
  }
  ${s.mobileL} {
    .headerTitle h1 {
      font-size: 36px;
      line-height: 44px;
      margin-bottom: 20px;
    }
    .headerMotto {
      margin-top: 140px;
    }
    .heroText {
      margin-bottom: 30px;
      p {
        font-size: ${n[16]};
        line-height: ${n[22]};
      }
    }
    .serImg {
      display: none;
    }
    .headerServices {
      max-width: none;
      padding: 15px;
    }
  }
`;export{$ as default};
