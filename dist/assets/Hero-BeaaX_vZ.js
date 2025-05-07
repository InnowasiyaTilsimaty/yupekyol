import{j as e,a as m,u as h,r as x,t as n,m as u,s as l,b as s}from"./i18next-D8RqUy11.js";import{P as d}from"./index-BEYBDXSc.js";import{h as c,j as b}from"./motion-C-9R7bad.js";const f="/assets/hero31-DLqg2Xe2.jpg",g=({text:i,enterDelay:r,backgroundColor:o})=>{const a={initial:{y:"100%"},enter:t=>({y:"0",transition:{duration:.75,ease:[.33,1,.68,1],delay:.075*t+r}})};return e.jsx(v,{$backgroundColor:o,children:i.map((t,p)=>e.jsx("div",{className:"lineMask",children:e.jsx(c.p,{custom:p,variants:a,initial:"initial",animate:"enter",children:t})},p))})};g.propTypes={text:d.array,enterDelay:d.number,backgroundColor:d.string};const v=h.div`
    .lineMask{
  overflow: hidden;
}

.lineMask p{
  margin: 0px;
  font-weight: 700;
  color: ${m.white};
  background-color: ${i=>i.$backgroundColor?i.$backgroundColor:"none"};
}
`,k=()=>{const[i,r]=x.useState(!0),{t:o}=b(),a=[o("4")];return x.useEffect(()=>{const t=()=>{r(window.innerWidth>768)};return window.addEventListener("resize",t),r(window.innerWidth>768),()=>{window.removeEventListener("resize",t)}},[]),e.jsx(w,{children:e.jsx("div",{className:"heroContainer",children:e.jsx("div",{className:"heroCol",children:e.jsxs(c.div,{className:"headerMotto",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:80,damping:20,duration:1,delay:4.2},children:[e.jsx("div",{className:"headerTitle",children:e.jsx("h1",{children:e.jsx(g,{text:a,enterDelay:4.2})})}),e.jsx("div",{className:"heroText",children:e.jsx("div",{children:e.jsx("p",{children:o("5")})})})]})})})})},w=h.section`
  background-image: url(${f});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .headerMotto {
    max-width: 820px;
    background-color: #bb9d5386;
    padding: 5px;
    border-radius: 12px;
  }
  .headerTitle {
    h1 {
      font-size: 58px;
      line-height: 86px;
      margin-bottom: 20px;
    }
  }
  .heroText {
    margin-bottom: 10px;
    p {
      color: #fff;
      font-size: ${n[22]};
      padding: 5px;
      border-radius: 5px;
    }
  }
  .heroContainer {
    ${u.main}
  }
  .heroCol {
    ${l.between}
    height: 100vh;
  }
  .headerServices {
    max-width: 500px;
    background-color: ${m.orange};
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
    ${l.center}
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
`;export{k as default};
