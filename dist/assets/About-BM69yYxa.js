import{r as u,j as t,R as N,m as v,a as b,t as h,l as T,b as f,u as C}from"./i18next-D8RqUy11.js";import{r as E}from"./Home-BsNrLXyy.js";import{s as y,k as S,a as V,u as $,h as d,j as z}from"./motion-C-9R7bad.js";import{D}from"./index-BG9dkJdE.js";import"./genStyleUtils-DC8qU0vC.js";import"./setPrototypeOf-B9DBnCZ7.js";function L(e){e.values.forEach(o=>o.stop())}function k(){const e=new Set,o={subscribe(s){return e.add(s),()=>void e.delete(s)},start(s,i){const n=[];return e.forEach(a=>{n.push(S(a,s,{transitionOverride:i}))}),Promise.all(n)},set(s){return e.forEach(i=>{y(i,s)})},stop(){e.forEach(s=>{L(s)})},mount(){return()=>{o.stop()}}};return o}function A(){const e=V(k);return $(e.mount,[]),e}const w=A,R={some:0,all:1};function M(e,o,{root:s,margin:i,amount:n="some"}={}){const a=E(e),r=new WeakMap,x=p=>{p.forEach(l=>{const m=r.get(l.target);if(l.isIntersecting!==!!m)if(l.isIntersecting){const j=o(l);typeof j=="function"?r.set(l.target,j):c.unobserve(l.target)}else m&&(m(l),r.delete(l.target))})},c=new IntersectionObserver(x,{root:s,rootMargin:i,threshold:typeof n=="number"?n:R[n]});return a.forEach(p=>c.observe(p)),()=>c.disconnect()}function I(e,{root:o,margin:s,amount:i,once:n=!1}={}){const[a,r]=u.useState(!1);return u.useEffect(()=>{if(!e.current||n&&a)return;const x=()=>(r(!0),n?void 0:()=>r(!1)),c={root:o&&o.current||void 0,margin:s,amount:i};return M(e.current,x,c)},[o,e,s,n,i]),a}const g=({children:e,width:o="fit-content"})=>{const s=u.useRef(null),i=I(s),n=w(),a=w();return u.useEffect(()=>{i&&(n.start("visible"),a.start("visible"))},[i,n,a]),t.jsxs("div",{ref:s,style:{position:"relative",width:o,overflow:"hidden"},children:[t.jsx(d.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:n,transition:{duration:.5,delay:.5},children:e}),t.jsx(d.div,{variants:{hidden:{left:0},visible:{left:"100%"}},initial:"hidden",animate:a,transition:{duration:.5,ease:"easeIn",delay:.2},style:{position:"absolute",top:4,bottom:4,left:0,right:0,background:"#3A7763",zIndex:20}})]})},B="/assets/about-Brd3fhXx.jpg",H=()=>{const{t:e}=z(),o=[{title:e("18"),value:10},{title:e("19"),value:4},{title:e("20"),value:30}];return t.jsxs(U,{id:"aboutUs",children:[t.jsx("div",{className:"aboutContainer",children:t.jsxs("div",{className:"aboutCol",children:[t.jsxs("div",{className:"aboutTextSide",children:[t.jsx("div",{className:"aboutSectionName",children:t.jsx(g,{children:t.jsx("span",{children:e("6")})})}),t.jsx("div",{className:"aboutTitle",children:t.jsx(g,{children:t.jsx("h3",{children:e("7")})})}),t.jsx("div",{className:"aboutText",children:t.jsx(g,{children:t.jsxs("p",{children:[e("8"),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{className:"aboutListDot"})," ",e("9")," ",t.jsx("br",{}),t.jsx("span",{className:"aboutListDot"})," ",e("10")," ",t.jsx("br",{}),t.jsx("span",{className:"aboutListDot"})," ",e("12")," ",t.jsx("br",{}),t.jsx("span",{className:"aboutListDot"})," ",e("13")," ",t.jsx("br",{}),t.jsx("br",{}),e("14")," ",t.jsx("br",{}),t.jsx("span",{className:"aboutListDot"})," ",e("16")," ",t.jsx("br",{}),t.jsx("span",{className:"aboutListDot"})," ",e("161")," ",t.jsx("br",{}),t.jsx("span",{className:"aboutListDot"})," ",e("17")," ",t.jsx("br",{})]})})})]}),t.jsx("div",{className:"aboutVideoSide",children:t.jsx("img",{src:B,alt:"aboutImg"})})]})}),t.jsx("div",{className:"aboutBottomMain",children:t.jsx(d.div,{className:"clientsNumberMain",initial:"hidden",whileInView:"visible",viewport:{once:!0},children:t.jsx("div",{className:"aboutTopCol",children:o.map((s,i)=>t.jsxs(N.Fragment,{children:[t.jsx(O,{title:s.title,value:s.value}),i!==o.length-1&&t.jsx(D,{type:"vertical"})]},i))})})})]})},O=({title:e,value:o})=>{const s=u.useRef(null),i=I(s,{once:!0}),[n,a]=u.useState(0);return u.useEffect(()=>{if(i){let r=0;const c=o/(2500/16),p=setInterval(()=>{r+=c,r>=o?(clearInterval(p),a(o)):a(Math.floor(r))},16)}},[i,o]),t.jsxs(d.div,{ref:s,className:"aboutTopItem",children:[t.jsx(d.div,{className:"aboutTopItemNumber",children:n}),t.jsx(d.div,{className:"aboutTopItemTitle",children:e})]})},U=C.section`
  .aboutContainer {
    ${v.main}
    padding: 60px 10px;
  }
  .aboutCol {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .aboutTextSide {
    max-width: 650px;
    margin-right: 30px;
  }

  .aboutSectionName {
    margin-bottom: 15px;
    span {
      color: ${b.accentColor};
      font-size: ${h[18]};
    }
  }
  .aboutTitle {
    margin-bottom: 20px;
    h3 {
      font-size: 56px;
      line-height: 64px;
      font-weight: 600;
    }
  }
  .aboutText {
    p {
      font-family: ${T.opensans};
      font-size: ${h[18]};
      font-weight: 700;
    }
  }

  .aboutVideoSide {
    max-width: 700px;
    width: 100%;
  }
  .aboutListDot {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 5px;
    margin-top: 15px;
    padding-top: 8px;
    background-color: ${b.additionalColor};
    border-radius: 50%;
    position: relative;
    top: -3px;
  }
  .aboutTopCol {
    margin: 25px 0px;
    display: flex;
    justify-content: space-around;
  }
  .aboutTopItem {
    text-align: center;
  }
  .aboutTopItemNumber {
    color: ${b.accentColor};
    font-size: 42px;
    font-weight: 800;
    line-height: 50px;
  }
  .aboutTopItemTitle {
    text-transform: uppercase;
    color: #3d3d3d;
    font-size: 28px;
    font-weight: 400;
    line-height: 36.46px;
  }
  .aboutBottomMain {
    ${v.main}
  }

  ${f.laptop} {
    .aboutContainer {
      padding: 60px 10px;
    }
    .aboutTextSide {
      max-width: 500px;
      margin-right: 20px;
    }
    .aboutTitle {
      margin-bottom: 15px;
      h3 {
        font-size: 40px;
        line-height: 50px;
      }
    }
    .aboutText {
      p {
        font-size: ${h[16]};
      }
    }
  }
  ${f.tablet} {
    .aboutCol {
      flex-direction: column;
      align-items: center;
    }

    .aboutTopCol {
      margin: 20px 0px;
      display: flex;
      gap: 20px;
      flex-direction: column;
    }
    .ant-divider-vertical {
      display: none;
    }
  }
  ${f.mobileL} {
    .aboutContainer {
      margin-top: 50px;
      padding: 40px 10px;
    }
    .aboutTextSide {
      max-width: none;
      margin-right: 0px;
    }
    .aboutVideoSide {
      margin-top: 30px;
    }
    .aboutTitle {
      margin-bottom: 10px;
      h3 {
        font-size: 29px;
        line-height: 39px;
      }
    }
    .aboutText {
      p {
        font-size: 15px;
      }
    }
  }
`;export{H as default};
