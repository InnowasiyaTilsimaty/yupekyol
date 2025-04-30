import{r as G,j as c,d as h,g as fe,u as Ee,m as Se,s as je,q as F,t as A,o as ne,e as Y}from"./i18next-vKD2ZA47.js";import{_ as Ce}from"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import{a as Ae,_ as oe}from"./setPrototypeOf-B9DBnCZ7.js";import{p}from"./index-Ce6cBIBd.js";const ke="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206L8%2010L4%206'%20stroke='white'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function Ie(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,Ae(o,e)}function J(o,e,a){if(a||arguments.length===2)for(var r=0,t=e.length,n;r<t;r++)(n||!(r in e))&&(n||(n=Array.prototype.slice.call(e,0,r)),n[r]=e[r]);return o.concat(n||Array.prototype.slice.call(e))}/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var ae=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,qe=/\\([\u000b\u0020-\u00ff])/g,Re=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,Ne=$e;function $e(o){if(!o)throw new TypeError("argument string is required");var e=typeof o=="object"?Le(o):o;if(typeof e!="string")throw new TypeError("argument string is required to be a string");var a=e.indexOf(";"),r=a!==-1?e.slice(0,a).trim():e.trim();if(!Re.test(r))throw new TypeError("invalid media type");var t=new Ge(r.toLowerCase());if(a!==-1){var n,i,s;for(ae.lastIndex=a;i=ae.exec(e);){if(i.index!==a)throw new TypeError("invalid parameter format");a+=i[0].length,n=i[1].toLowerCase(),s=i[2],s.charCodeAt(0)===34&&(s=s.slice(1,-1),s.indexOf("\\")!==-1&&(s=s.replace(qe,"$1"))),t.parameters[n]=s}if(a!==e.length)throw new TypeError("invalid parameter format")}return t}function Le(o){var e;if(typeof o.getHeader=="function"?e=o.getHeader("content-type"):typeof o.headers=="object"&&(e=o.headers&&o.headers["content-type"]),typeof e!="string")throw new TypeError("content-type header is missing from object");return e}function Ge(o){this.parameters=Object.create(null),this.type=o}var V=new Map,pe=function(e){return e.cloneNode(!0)},ie=function(){return window.location.protocol==="file:"},ue=function(e,a,r){var t=new XMLHttpRequest;t.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&t.readyState===2){var n=t.getResponseHeader("Content-Type");if(!n)throw new Error("Content type not found");var i=Ne(n).type;if(!(i==="image/svg+xml"||i==="text/plain"))throw new Error("Invalid content type: ".concat(i))}if(t.readyState===4){if(t.status===404||t.responseXML===null)throw new Error(ie()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(t.status===200||ie()&&t.status===0)r(null,t);else throw new Error("There was a problem injecting the SVG: "+t.status+" "+t.statusText)}}catch(s){if(t.abort(),s instanceof Error)r(s,t);else throw s}},t.open("GET",e),t.withCredentials=a,t.overrideMimeType&&t.overrideMimeType("text/xml"),t.send()},I={},se=function(e,a){I[e]=I[e]||[],I[e].push(a)},Te=function(e){for(var a=function(i,s){setTimeout(function(){if(Array.isArray(I[e])){var d=V.get(e),u=I[e][i];d instanceof SVGSVGElement&&u(null,pe(d)),d instanceof Error&&u(d),i===I[e].length-1&&delete I[e]}},0)},r=0,t=I[e].length;r<t;r++)a(r)},We=function(e,a,r){if(V.has(e)){var t=V.get(e);if(t===void 0){se(e,r);return}if(t instanceof SVGSVGElement){r(null,pe(t));return}}V.set(e,void 0),se(e,r),ue(e,a,function(n,i){var s;n?V.set(e,n):((s=i.responseXML)===null||s===void 0?void 0:s.documentElement)instanceof SVGSVGElement&&V.set(e,i.responseXML.documentElement),Te(e)})},Me=function(e,a,r){ue(e,a,function(t,n){var i;t?r(t):((i=n.responseXML)===null||i===void 0?void 0:i.documentElement)instanceof SVGSVGElement&&r(null,n.responseXML.documentElement)})},Ve=0,_e=function(){return++Ve},S=[],le={},ze="http://www.w3.org/2000/svg",K="http://www.w3.org/1999/xlink",ce=function(e,a,r,t,n,i,s){var d=e.getAttribute("data-src")||e.getAttribute("src");if(!d){s(new Error("Invalid data-src or src attribute"));return}if(S.indexOf(e)!==-1){S.splice(S.indexOf(e),1),e=null;return}S.push(e),e.setAttribute("src","");var u=t?We:Me;u(d,n,function(m,l){if(!l){S.splice(S.indexOf(e),1),e=null,s(m);return}var q=e.getAttribute("id");q&&l.setAttribute("id",q);var k=e.getAttribute("title");k&&l.setAttribute("title",k);var R=e.getAttribute("width");R&&l.setAttribute("width",R);var N=e.getAttribute("height");N&&l.setAttribute("height",N);var w=Array.from(new Set(J(J(J([],(l.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(e.getAttribute("class")||"").split(" "),!0))).join(" ").trim();l.setAttribute("class",w);var v=e.getAttribute("style");v&&l.setAttribute("style",v),l.setAttribute("data-src",d);var b=[].filter.call(e.attributes,function(x){return/^data-\w[\w-]*$/.test(x.name)});if(Array.prototype.forEach.call(b,function(x){x.name&&x.value&&l.setAttribute(x.name,x.value)}),r){var y={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]},T,g,j,f,C;Object.keys(y).forEach(function(x){T=x,j=y[x],g=l.querySelectorAll(T+"[id]");for(var ge=function(U,Ze){f=g[U].id,C=f+"-"+_e();var _;Array.prototype.forEach.call(j,function(Z){_=l.querySelectorAll("["+Z+'*="'+f+'"]');for(var O=0,ye=_.length;O<ye;O++){var re=_[O].getAttribute(Z);re&&!re.match(new RegExp('url\\("?#'+f+'"?\\)'))||_[O].setAttribute(Z,"url(#"+C+")")}});for(var D=l.querySelectorAll("[*|href]"),B=[],z=0,we=D.length;z<we;z++){var te=D[z].getAttributeNS(K,"href");te&&te.toString()==="#"+g[U].id&&B.push(D[z])}for(var Q=0,be=B.length;Q<be;Q++)B[Q].setAttributeNS(K,"href","#"+C);g[U].id=C},P=0,xe=g.length;P<xe;P++)ge(P)})}l.removeAttribute("xmlns:a");for(var E=l.querySelectorAll("script"),$=[],W,L,M=0,he=E.length;M<he;M++)L=E[M].getAttribute("type"),(!L||L==="application/ecmascript"||L==="application/javascript"||L==="text/javascript")&&(W=E[M].innerText||E[M].textContent,W&&$.push(W),l.removeChild(E[M]));if($.length>0&&(a==="always"||a==="once"&&!le[d])){for(var X=0,me=$.length;X<me;X++)new Function($[X])(window);le[d]=!0}var ve=l.querySelectorAll("style");if(Array.prototype.forEach.call(ve,function(x){x.textContent+=""}),l.setAttribute("xmlns",ze),l.setAttribute("xmlns:xlink",K),i(l),!e.parentNode){S.splice(S.indexOf(e),1),e=null,s(new Error("Parent node is null"));return}e.parentNode.replaceChild(l,e),S.splice(S.indexOf(e),1),e=null,s(null,l)})},Oe=function(e,a){var r=a===void 0?{}:a,t=r.afterAll,n=t===void 0?function(){}:t,i=r.afterEach,s=i===void 0?function(){}:i,d=r.beforeEach,u=d===void 0?function(){}:d,m=r.cacheRequests,l=m===void 0?!0:m,q=r.evalScripts,k=q===void 0?"never":q,R=r.httpRequestWithCredentials,N=R===void 0?!1:R,w=r.renumerateIRIElements,v=w===void 0?!0:w;if(e&&"length"in e)for(var b=0,y=0,T=e.length;y<T;y++)ce(e[y],k,v,l,N,u,function(g,j){s(g,j),e&&"length"in e&&e.length===++b&&n(b)});else e?ce(e,k,v,l,N,u,function(g,j){s(g,j),n(1),e=null}):n(0)},He=function(e){var a=(e==null?void 0:e.ownerDocument)||document;return a.defaultView||window},Xe=function(e,a){for(var r in e)if(!(r in a))return!0;for(var t in a)if(e[t]!==a[t])return!0;return!1},Pe=["afterInjection","beforeInjection","desc","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","title","useRequestCache","wrapper"],H="http://www.w3.org/2000/svg",de="http://www.w3.org/1999/xlink",ee=function(o){function e(){for(var r,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r=o.call.apply(o,[this].concat(n))||this,r.initialState={hasError:!1,isLoading:!0},r.state=r.initialState,r._isMounted=!1,r.reactWrapper=void 0,r.nonReactWrapper=void 0,r.refCallback=function(s){r.reactWrapper=s},r}Ie(e,o);var a=e.prototype;return a.renderSVG=function(){var t=this;if(this.reactWrapper instanceof He(this.reactWrapper).Node){var n=this.props,i=n.desc,s=n.evalScripts,d=n.httpRequestWithCredentials,u=n.renumerateIRIElements,m=n.src,l=n.title,q=n.useRequestCache,k=this.props.onError,R=this.props.beforeInjection,N=this.props.afterInjection,w=this.props.wrapper,v,b;w==="svg"?(v=document.createElementNS(H,w),v.setAttribute("xmlns",H),v.setAttribute("xmlns:xlink",de),b=document.createElementNS(H,w)):(v=document.createElement(w),b=document.createElement(w)),v.appendChild(b),b.dataset.src=m,this.nonReactWrapper=this.reactWrapper.appendChild(v);var y=function(f){if(t.removeSVG(),!t._isMounted){k(f);return}t.setState(function(){return{hasError:!0,isLoading:!1}},function(){k(f)})},T=function(f,C){if(f){y(f);return}t._isMounted&&t.setState(function(){return{isLoading:!1}},function(){try{N(C)}catch(E){y(E)}})},g=function(f){if(f.setAttribute("role","img"),i){var C=f.querySelector(":scope > desc");C&&f.removeChild(C);var E=document.createElement("desc");E.innerHTML=i,f.prepend(E)}if(l){var $=f.querySelector(":scope > title");$&&f.removeChild($);var W=document.createElement("title");W.innerHTML=l,f.prepend(W)}try{R(f)}catch(L){y(L)}};Oe(b,{afterEach:T,beforeEach:g,cacheRequests:q,evalScripts:s,httpRequestWithCredentials:d,renumerateIRIElements:u})}},a.removeSVG=function(){var t;(t=this.nonReactWrapper)!=null&&t.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},a.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},a.componentDidUpdate=function(t){var n=this;Xe(oe({},t),this.props)&&this.setState(function(){return n.initialState},function(){n.removeSVG(),n.renderSVG()})},a.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},a.render=function(){var t=this.props;t.afterInjection,t.beforeInjection,t.desc,t.evalScripts;var n=t.fallback;t.httpRequestWithCredentials;var i=t.loading;t.renumerateIRIElements,t.src,t.title,t.useRequestCache;var s=t.wrapper,d=Ce(t,Pe),u=s;return G.createElement(u,oe({},d,{ref:this.refCallback},s==="svg"?{xmlns:H,xmlnsXlink:de}:{}),this.state.isLoading&&i&&G.createElement(i,null),this.state.hasError&&n&&G.createElement(n,null))},e}(G.Component);ee.defaultProps={afterInjection:function(){},beforeInjection:function(){},desc:"",evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,onError:function(){},renumerateIRIElements:!0,title:"",useRequestCache:!0,wrapper:"div"};ee.propTypes={afterInjection:p.func,beforeInjection:p.func,desc:p.string,evalScripts:p.oneOf(["always","once","never"]),fallback:p.oneOfType([p.func,p.object,p.string]),httpRequestWithCredentials:p.bool,loading:p.oneOfType([p.func,p.object,p.string]),onError:p.func,renumerateIRIElements:p.bool,src:p.string.isRequired,title:p.string,useRequestCache:p.bool,wrapper:p.oneOf(["div","span","svg"])};const Ue=({initialValue:o,onSelect:e,items:a,onEdit:r})=>{const[t,n]=G.useState(!1),[i,s]=G.useState(o),d=m=>{s(m.label),n(!1),r(m.value)},u={transform:t?"rotate(180deg)":"rotate(0)",transition:"transform 0.3s ease",marginLeft:"5px"};return c.jsx(De,{children:c.jsxs("div",{className:"dropdown",children:[c.jsxs("div",{className:"dropdownBtn",onClick:()=>n(!t),children:[i||"Выберите пункт",c.jsx("div",{style:u,children:c.jsx(ee,{className:"dropDownIcon",src:ke})})]}),t&&c.jsx("div",{className:"dropdownContent",children:c.jsx("div",{className:"sideBarMain",children:a.map((m,l)=>c.jsx("div",{className:"dropdownItem",onClick:()=>d(m),children:m.label},l))})})]})})},De=fe.div`
  .dropdown {
    width: 100%;
    position: relative;
    user-select: none;
    .dropdownBtn {
      background-color: ${h.accentColor};
      padding: 15px 24px;
      border: 1px solid ${h.accentColor};
      border-radius: 12px;
      cursor: pointer;
      color: ${h.white};
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.2s ease;
      &:hover{
        border: 1px solid ${h.hoverColor};
      }
    }
    .dropdownContent {
      position: absolute;
      transition: all 0.3s ease;
      border-radius: 12px;
      padding: 10px;
      background-color: ${h.accentColor};
      z-index: 100;
      color: ${h.white};
      width: 100%;
      margin-top: 10px;

      .dropdownItem {
        text-align: left;
        padding: 10px;
        border-radius: 12px;
        color: ${h.gray800};
        cursor: pointer;
        &:hover{
            color: ${h.white};
            background-color: ${h.additionalColor};
        }
      }
    }
    .dropDownIcon{
      margin-left: 5px;
        line-height: 0px;
        svg{
            path{
                stroke: ${h.gray800};
            }
        }
    }
  }
  .sideBarMain{
    margin-bottom: 0px;
  }
`,et=()=>{const{t:o,i18n:e}=Ee(),[a,r]=G.useState(!1),t=()=>{r(!a)},n=d=>{document.getElementById(d).scrollIntoView({behavior:"smooth"}),r(!1)},i=[{label:"English",value:"en"},{label:"Русский",value:"ru"},{label:"Türkmen",value:"tm"}],s=d=>{e.changeLanguage(d),localStorage.setItem("i18nextLng",d)};return c.jsx(Be,{children:c.jsx(Se.div,{initial:{opacity:0,y:-40},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:80,damping:20,duration:1,delay:4.3},className:"header",children:c.jsxs("div",{className:"headerCol",children:[c.jsxs("div",{className:"headerLogo",children:[c.jsx("div",{className:"logo",children:c.jsx("img",{src:je,alt:"logo"})}),c.jsx("div",{className:"logoText",children:c.jsx("div",{children:"Ýüpek Ýol Harytlary"})})]}),c.jsx("div",{className:"headerNav",children:c.jsxs("ul",{className:a?"navbarCol active":"navbarCol",children:[c.jsx("li",{onClick:()=>n("aboutUs"),children:o("1")}),c.jsx("li",{onClick:()=>n("catalog"),children:o("2")}),c.jsx("li",{onClick:()=>n("contacts"),children:o("3")}),c.jsx("li",{children:c.jsx("div",{children:c.jsx(Ue,{items:i,initialValue:e.language==="ru"?"Русский":"English",onEdit:d=>s(d)})})})]})}),c.jsxs("div",{onClick:t,className:a?"btn active":"btn",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]})})})},Be=fe.header`
  max-width: 1400px;
  padding: 15px 10px;
  margin: 0 auto;
  .headerCol {
    ${F.between}
  }

  .headerLogo {
    position: relative;
    z-index: 11;
    ${F.flex}
    cursor: pointer;
  }
  .logo {
    width: 70px;
  }
  .logoText{
    font-size: 24px;
    margin-left: 10px;
    font-weight: 600;
    color: ${h.accentColor};
  }
  .headerNav {
    .navbarCol {
      ${F.flex}
      li {
        font-size: ${A[22]};
        ${ne[600]}
        line-height: ${A[26]};
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          color: ${h.accentColor};
        }
        &:not(:first-child) {
          margin-left: 100px;
        }
      }
    }
  }
  .btn {
    display: none;
  }
  ${Y.laptopL} {
    padding: 30px 10px;


    .headerNav {
      .navbarCol {
        li {
          font-size: ${A[18]};
          ${ne[600]}
          line-height: ${A[24]};
          &:not(:first-child) {
            margin-left: 40px;
          }
        }
      }
    }
  }
  ${Y.laptop} {
    padding: 20px 10px;
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 10;

    .headerLogo {
      .logoText {
        font-size: ${A[24]};
        line-height: ${A[28]};
        margin-left: 10px;
      }
    }
    .headerNav {
      .navbarCol {
        flex-direction: column;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0%;
        right: 100%;
        transition: all 0.5s ease;
        li {
          font-size: ${A[22]};
          &:not(:first-child) {
            margin-top: 20px;
            margin-left: 0px;
          }
        }
      }
      .navbarCol.active {
        background-color: #fff;
        top: 0%;
        right: 0%;
        transition: all 0.5s ease;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 105vh;
      }
    }
    .btn {
      display: block;
      margin-right: 20px;
      z-index: 11;
      width: 50px;
      cursor: pointer;
    }

    span {
      display: block;
      /* width: 100%; */
      border-radius: 3px;
      height: 6px;
      background: ${h.orange};
      transition: all 0.3s;
      position: relative;
    }

    span + span {
      margin-top: 7px;
    }

    .active span:nth-child(1) {
      animation: ease 0.7s top forwards;
    }

    .not-active span:nth-child(1) {
      animation: ease 0.7s top-2 forwards;
    }

    .active span:nth-child(2) {
      animation: ease 0.7s scaled forwards;
    }

    .not-active span:nth-child(2) {
      animation: ease 0.7s scaled-2 forwards;
    }

    .active span:nth-child(3) {
      animation: ease 0.7s bottom forwards;
    }

    .not-active span:nth-child(3) {
      animation: ease 0.7s bottom-2 forwards;
    }

    @keyframes top {
      0% {
        top: 0;
        transform: rotate(0);
      }
      50% {
        top: 10px;
        transform: rotate(0);
      }
      100% {
        top: 10px;
        transform: rotate(45deg);
      }
    }

    @keyframes top-2 {
      0% {
        top: 10px;
        transform: rotate(45deg);
      }
      50% {
        top: 10px;
        transform: rotate(0deg);
      }
      100% {
        top: 0;
        transform: rotate(0deg);
      }
    }

    @keyframes bottom {
      0% {
        bottom: 0;
        transform: rotate(0);
      }
      50% {
        bottom: 10px;
        transform: rotate(0);
      }
      100% {
        bottom: 15px;
        transform: rotate(135deg);
      }
    }

    @keyframes bottom-2 {
      0% {
        bottom: 10px;
        transform: rotate(135deg);
      }
      50% {
        bottom: 10px;
        transform: rotate(0);
      }
      100% {
        bottom: 0;
        transform: rotate(0);
      }
    }

    @keyframes scaled {
      50% {
        transform: scale(0);
      }
      100% {
        transform: scale(0);
      }
    }

    @keyframes scaled-2 {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  ${Y.mobileL} {
    padding: 15px 10px;
    .logo {
      img {
        width: 50%;
      }
    }
    .headerLogo {
      .logoText {
        font-size: ${A[16]};
        line-height: ${A[22]};
        margin-left: -20px;
      }
    }
    .btn {
      width: 35px;
    }
    span {
      height: 4px;
    }

    span + span {
      margin-top: 5px;
    }
    @keyframes bottom {
      0% {
        bottom: 0;
        transform: rotate(0);
      }
      50% {
        bottom: 10px;
        transform: rotate(0);
      }
      100% {
        bottom: 8px;
        transform: rotate(135deg);
      }
    }
  }
`;export{et as default};
