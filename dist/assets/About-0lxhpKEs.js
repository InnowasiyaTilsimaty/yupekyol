import{r as p,u as P,j as e,a as g,m,R as W,b as N,d as f,t as $,f as H,e as j,g as V,h as G}from"./i18next-vKD2ZA47.js";import{g as R,m as A,r as U,u as c,a as X,c as _}from"./genStyleUtils-DGs2zUWV.js";import"./setPrototypeOf-B9DBnCZ7.js";const F="/assets/about-Brd3fhXx.jpg",Y=t=>{const{componentCls:i,sizePaddingEdgeHorizontal:o,colorSplit:n,lineWidth:a,textPaddingInline:x,orientationMargin:s,verticalMarginInline:d}=t;return{[i]:Object.assign(Object.assign({},U(t)),{borderBlockStart:`${c(a)} solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:d,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${c(a)} solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${c(t.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${i}-with-text`]:{display:"flex",alignItems:"center",margin:`${c(t.dividerHorizontalWithTextGutterMargin)} 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${c(a)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${i}-with-text-start`]:{"&::before":{width:`calc(${s} * 100%)`},"&::after":{width:`calc(100% - ${s} * 100%)`}},[`&-horizontal${i}-with-text-end`]:{"&::before":{width:`calc(100% - ${s} * 100%)`},"&::after":{width:`calc(${s} * 100%)`}},[`${i}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:x},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${c(a)} 0 0`},[`&-horizontal${i}-with-text${i}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${i}-dashed`]:{borderInlineStartWidth:a,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:n,borderStyle:"dotted",borderWidth:`${c(a)} 0 0`},[`&-horizontal${i}-with-text${i}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${i}-dotted`]:{borderInlineStartWidth:a,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${i}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${i}-with-text-start${i}-no-default-orientation-margin-start`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${i}-inner-text`]:{paddingInlineStart:o}},[`&-horizontal${i}-with-text-end${i}-no-default-orientation-margin-end`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${i}-inner-text`]:{paddingInlineEnd:o}}})}},q=t=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:t.marginXS}),J=R("Divider",t=>{const i=A(t,{dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG,sizePaddingEdgeHorizontal:0});return[Y(i)]},q,{unitless:{orientationMargin:!0}});var K=function(t,i){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&i.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)i.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(o[n[a]]=t[n[a]]);return o};const Q=t=>{const{getPrefixCls:i,direction:o,className:n,style:a}=X("divider"),{prefixCls:x,type:s="horizontal",orientation:d="center",orientationMargin:l,className:b,rootClassName:z,children:h,dashed:I,variant:v="solid",plain:T,style:M}=t,E=K(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),r=i("divider",x),[O,B,k]=J(r),S=!!h,u=p.useMemo(()=>d==="left"?o==="rtl"?"end":"start":d==="right"?o==="rtl"?"start":"end":d,[o,d]),w=u==="start"&&l!=null,y=u==="end"&&l!=null,D=_(r,n,B,k,`${r}-${s}`,{[`${r}-with-text`]:S,[`${r}-with-text-${u}`]:S,[`${r}-dashed`]:!!I,[`${r}-${v}`]:v!=="solid",[`${r}-plain`]:!!T,[`${r}-rtl`]:o==="rtl",[`${r}-no-default-orientation-margin-start`]:w,[`${r}-no-default-orientation-margin-end`]:y},b,z),C=p.useMemo(()=>typeof l=="number"?l:/^\d+$/.test(l)?Number(l):l,[l]),L={marginInlineStart:w?C:void 0,marginInlineEnd:y?C:void 0};return O(p.createElement("div",Object.assign({className:D,style:Object.assign(Object.assign({},a),M)},E,{role:"separator"}),h&&s!=="vertical"&&p.createElement("span",{className:`${r}-inner-text`,style:L},h)))},at=()=>{const{t}=P(),i=[{title:t("18"),value:10},{title:t("19"),value:4},{title:t("20"),value:30}];return e.jsxs(tt,{id:"aboutUs",children:[e.jsx("div",{className:"aboutContainer",children:e.jsxs("div",{className:"aboutCol",children:[e.jsxs("div",{className:"aboutTextSide",children:[e.jsx("div",{className:"aboutSectionName",children:e.jsx(g,{children:e.jsx("span",{children:t("6")})})}),e.jsx("div",{className:"aboutTitle",children:e.jsx(g,{children:e.jsx("h3",{children:t("7")})})}),e.jsx("div",{className:"aboutText",children:e.jsx(g,{children:e.jsxs("p",{children:[t("8"),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"aboutListDot"})," ",t("9")," ",e.jsx("br",{}),e.jsx("span",{className:"aboutListDot"})," ",t("10")," ",e.jsx("br",{}),e.jsx("span",{className:"aboutListDot"})," ",t("12")," ",e.jsx("br",{}),e.jsx("span",{className:"aboutListDot"})," ",t("13")," ",e.jsx("br",{}),e.jsx("br",{}),t("14")," ",e.jsx("br",{}),e.jsx("span",{className:"aboutListDot"})," ",t("16")," ",e.jsx("br",{}),e.jsx("span",{className:"aboutListDot"})," ",t("161")," ",e.jsx("br",{}),e.jsx("span",{className:"aboutListDot"})," ",t("17")," ",e.jsx("br",{})]})})})]}),e.jsx("div",{className:"aboutVideoSide",children:e.jsx("img",{src:F,alt:"aboutImg"})})]})}),e.jsx("div",{className:"aboutBottomMain",children:e.jsx(m.div,{className:"clientsNumberMain",initial:"hidden",whileInView:"visible",viewport:{once:!0},children:e.jsx("div",{className:"aboutTopCol",children:i.map((o,n)=>e.jsxs(W.Fragment,{children:[e.jsx(Z,{title:o.title,value:o.value}),n!==i.length-1&&e.jsx(Q,{type:"vertical"})]},n))})})})]})},Z=({title:t,value:i})=>{const o=p.useRef(null),n=G(o,{once:!0}),[a,x]=p.useState(0);return p.useEffect(()=>{if(n){let s=0;const l=i/(2500/16),b=setInterval(()=>{s+=l,s>=i?(clearInterval(b),x(i)):x(Math.floor(s))},16)}},[n,i]),e.jsxs(m.div,{ref:o,className:"aboutTopItem",children:[e.jsx(m.div,{className:"aboutTopItemNumber",children:a}),e.jsx(m.div,{className:"aboutTopItemTitle",children:t})]})},tt=V.section`
  .aboutContainer {
    ${N.small}
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
      color: ${f.accentColor};
      font-size: ${$[18]};
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
      font-family: ${H.opensans};
      font-size: ${$[18]};
      font-weight: 700;
    }
  }

  .aboutVideoSide{
    width: 450px;
  }
  .aboutListDot{
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 5px;
    margin-top: 15px;
    padding-top: 8px;
    background-color: ${f.additionalColor};
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
    color: ${f.accentColor};
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
  .aboutBottomMain{
    ${N.main}
  }



  ${j.laptop} {
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
        font-size: ${$[16]};
      }
    }
    
  }
  ${j.tablet} {
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
  ${j.mobileL} {
    .aboutContainer {
      margin-top: 50px;
      padding: 40px 10px;
    }
    .aboutTextSide {
      max-width: none;
      margin-right: 0px;
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
`;export{at as default};
