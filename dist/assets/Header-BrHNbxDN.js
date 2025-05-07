import{r as $,j as c,a as G,u as fe,v as Ee,w as Se,s as F,t as C,o as ne,b as K}from"./i18next-DxKCbYAp.js";import{_ as je}from"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import{a as Ce,_ as oe}from"./setPrototypeOf-B9DBnCZ7.js";import{p}from"./index-xh3ILbnE.js";import{j as Ae,h as ke}from"./motion-Cf0AUs4q.js";const Ie="/assets/favicon1-DjKUOy2l.png",qe="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206L8%2010L4%206'%20stroke='white'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function Re(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,Ce(o,e)}function Y(o,e,a){if(a||arguments.length===2)for(var r=0,t=e.length,n;r<t;r++)(n||!(r in e))&&(n||(n=Array.prototype.slice.call(e,0,r)),n[r]=e[r]);return o.concat(n||Array.prototype.slice.call(e))}/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var ae=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,Ne=/\\([\u000b\u0020-\u00ff])/g,Le=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,Ge=$e;function $e(o){if(!o)throw new TypeError("argument string is required");var e=typeof o=="object"?Te(o):o;if(typeof e!="string")throw new TypeError("argument string is required to be a string");var a=e.indexOf(";"),r=a!==-1?e.slice(0,a).trim():e.trim();if(!Le.test(r))throw new TypeError("invalid media type");var t=new We(r.toLowerCase());if(a!==-1){var n,i,l;for(ae.lastIndex=a;i=ae.exec(e);){if(i.index!==a)throw new TypeError("invalid parameter format");a+=i[0].length,n=i[1].toLowerCase(),l=i[2],l.charCodeAt(0)===34&&(l=l.slice(1,-1),l.indexOf("\\")!==-1&&(l=l.replace(Ne,"$1"))),t.parameters[n]=l}if(a!==e.length)throw new TypeError("invalid parameter format")}return t}function Te(o){var e;if(typeof o.getHeader=="function"?e=o.getHeader("content-type"):typeof o.headers=="object"&&(e=o.headers&&o.headers["content-type"]),typeof e!="string")throw new TypeError("content-type header is missing from object");return e}function We(o){this.parameters=Object.create(null),this.type=o}var V=new Map,pe=function(e){return e.cloneNode(!0)},ie=function(){return window.location.protocol==="file:"},ue=function(e,a,r){var t=new XMLHttpRequest;t.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&t.readyState===2){var n=t.getResponseHeader("Content-Type");if(!n)throw new Error("Content type not found");var i=Ge(n).type;if(!(i==="image/svg+xml"||i==="text/plain"))throw new Error("Invalid content type: ".concat(i))}if(t.readyState===4){if(t.status===404||t.responseXML===null)throw new Error(ie()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(t.status===200||ie()&&t.status===0)r(null,t);else throw new Error("There was a problem injecting the SVG: "+t.status+" "+t.statusText)}}catch(l){if(t.abort(),l instanceof Error)r(l,t);else throw l}},t.open("GET",e),t.withCredentials=a,t.overrideMimeType&&t.overrideMimeType("text/xml"),t.send()},k={},se=function(e,a){k[e]=k[e]||[],k[e].push(a)},Me=function(e){for(var a=function(i,l){setTimeout(function(){if(Array.isArray(k[e])){var d=V.get(e),u=k[e][i];d instanceof SVGSVGElement&&u(null,pe(d)),d instanceof Error&&u(d),i===k[e].length-1&&delete k[e]}},0)},r=0,t=k[e].length;r<t;r++)a(r)},Ve=function(e,a,r){if(V.has(e)){var t=V.get(e);if(t===void 0){se(e,r);return}if(t instanceof SVGSVGElement){r(null,pe(t));return}}V.set(e,void 0),se(e,r),ue(e,a,function(n,i){var l;n?V.set(e,n):((l=i.responseXML)===null||l===void 0?void 0:l.documentElement)instanceof SVGSVGElement&&V.set(e,i.responseXML.documentElement),Me(e)})},_e=function(e,a,r){ue(e,a,function(t,n){var i;t?r(t):((i=n.responseXML)===null||i===void 0?void 0:i.documentElement)instanceof SVGSVGElement&&r(null,n.responseXML.documentElement)})},Oe=0,ze=function(){return++Oe},E=[],le={},He="http://www.w3.org/2000/svg",J="http://www.w3.org/1999/xlink",ce=function(e,a,r,t,n,i,l){var d=e.getAttribute("data-src")||e.getAttribute("src");if(!d){l(new Error("Invalid data-src or src attribute"));return}if(E.indexOf(e)!==-1){E.splice(E.indexOf(e),1),e=null;return}E.push(e),e.setAttribute("src","");var u=t?Ve:_e;u(d,n,function(h,s){if(!s){E.splice(E.indexOf(e),1),e=null,l(h);return}var I=e.getAttribute("id");I&&s.setAttribute("id",I);var A=e.getAttribute("title");A&&s.setAttribute("title",A);var q=e.getAttribute("width");q&&s.setAttribute("width",q);var R=e.getAttribute("height");R&&s.setAttribute("height",R);var x=Array.from(new Set(Y(Y(Y([],(s.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(e.getAttribute("class")||"").split(" "),!0))).join(" ").trim();s.setAttribute("class",x);var m=e.getAttribute("style");m&&s.setAttribute("style",m),s.setAttribute("data-src",d);var b=[].filter.call(e.attributes,function(g){return/^data-\w[\w-]*$/.test(g.name)});if(Array.prototype.forEach.call(b,function(g){g.name&&g.value&&s.setAttribute(g.name,g.value)}),r){var w={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]},T,v,S,f,j;Object.keys(w).forEach(function(g){T=g,S=w[g],v=s.querySelectorAll(T+"[id]");for(var ge=function(D,Ke){f=v[D].id,j=f+"-"+ze();var _;Array.prototype.forEach.call(S,function(Z){_=s.querySelectorAll("["+Z+'*="'+f+'"]');for(var z=0,ye=_.length;z<ye;z++){var re=_[z].getAttribute(Z);re&&!re.match(new RegExp('url\\("?#'+f+'"?\\)'))||_[z].setAttribute(Z,"url(#"+j+")")}});for(var P=s.querySelectorAll("[*|href]"),B=[],O=0,be=P.length;O<be;O++){var te=P[O].getAttributeNS(J,"href");te&&te.toString()==="#"+v[D].id&&B.push(P[O])}for(var Q=0,we=B.length;Q<we;Q++)B[Q].setAttributeNS(J,"href","#"+j);v[D].id=j},X=0,xe=v.length;X<xe;X++)ge(X)})}s.removeAttribute("xmlns:a");for(var y=s.querySelectorAll("script"),N=[],W,L,M=0,he=y.length;M<he;M++)L=y[M].getAttribute("type"),(!L||L==="application/ecmascript"||L==="application/javascript"||L==="text/javascript")&&(W=y[M].innerText||y[M].textContent,W&&N.push(W),s.removeChild(y[M]));if(N.length>0&&(a==="always"||a==="once"&&!le[d])){for(var U=0,me=N.length;U<me;U++)new Function(N[U])(window);le[d]=!0}var ve=s.querySelectorAll("style");if(Array.prototype.forEach.call(ve,function(g){g.textContent+=""}),s.setAttribute("xmlns",He),s.setAttribute("xmlns:xlink",J),i(s),!e.parentNode){E.splice(E.indexOf(e),1),e=null,l(new Error("Parent node is null"));return}e.parentNode.replaceChild(s,e),E.splice(E.indexOf(e),1),e=null,l(null,s)})},Ue=function(e,a){var r=a===void 0?{}:a,t=r.afterAll,n=t===void 0?function(){}:t,i=r.afterEach,l=i===void 0?function(){}:i,d=r.beforeEach,u=d===void 0?function(){}:d,h=r.cacheRequests,s=h===void 0?!0:h,I=r.evalScripts,A=I===void 0?"never":I,q=r.httpRequestWithCredentials,R=q===void 0?!1:q,x=r.renumerateIRIElements,m=x===void 0?!0:x;if(e&&"length"in e)for(var b=0,w=0,T=e.length;w<T;w++)ce(e[w],A,m,s,R,u,function(v,S){l(v,S),e&&"length"in e&&e.length===++b&&n(b)});else e?ce(e,A,m,s,R,u,function(v,S){l(v,S),n(1),e=null}):n(0)},Xe=function(e){var a=(e==null?void 0:e.ownerDocument)||document;return a.defaultView||window},De=function(e,a){for(var r in e)if(!(r in a))return!0;for(var t in a)if(e[t]!==a[t])return!0;return!1},Pe=["afterInjection","beforeInjection","desc","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","title","useRequestCache","wrapper"],H="http://www.w3.org/2000/svg",de="http://www.w3.org/1999/xlink",ee=function(o){function e(){for(var r,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r=o.call.apply(o,[this].concat(n))||this,r.initialState={hasError:!1,isLoading:!0},r.state=r.initialState,r._isMounted=!1,r.reactWrapper=void 0,r.nonReactWrapper=void 0,r.refCallback=function(l){r.reactWrapper=l},r}Re(e,o);var a=e.prototype;return a.renderSVG=function(){var t=this;if(this.reactWrapper instanceof Xe(this.reactWrapper).Node){var n=this.props,i=n.desc,l=n.evalScripts,d=n.httpRequestWithCredentials,u=n.renumerateIRIElements,h=n.src,s=n.title,I=n.useRequestCache,A=this.props.onError,q=this.props.beforeInjection,R=this.props.afterInjection,x=this.props.wrapper,m,b;x==="svg"?(m=document.createElementNS(H,x),m.setAttribute("xmlns",H),m.setAttribute("xmlns:xlink",de),b=document.createElementNS(H,x)):(m=document.createElement(x),b=document.createElement(x)),m.appendChild(b),b.dataset.src=h,this.nonReactWrapper=this.reactWrapper.appendChild(m);var w=function(f){if(t.removeSVG(),!t._isMounted){A(f);return}t.setState(function(){return{hasError:!0,isLoading:!1}},function(){A(f)})},T=function(f,j){if(f){w(f);return}t._isMounted&&t.setState(function(){return{isLoading:!1}},function(){try{R(j)}catch(y){w(y)}})},v=function(f){if(f.setAttribute("role","img"),i){var j=f.querySelector(":scope > desc");j&&f.removeChild(j);var y=document.createElement("desc");y.innerHTML=i,f.prepend(y)}if(s){var N=f.querySelector(":scope > title");N&&f.removeChild(N);var W=document.createElement("title");W.innerHTML=s,f.prepend(W)}try{q(f)}catch(L){w(L)}};Ue(b,{afterEach:T,beforeEach:v,cacheRequests:I,evalScripts:l,httpRequestWithCredentials:d,renumerateIRIElements:u})}},a.removeSVG=function(){var t;(t=this.nonReactWrapper)!=null&&t.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},a.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},a.componentDidUpdate=function(t){var n=this;De(oe({},t),this.props)&&this.setState(function(){return n.initialState},function(){n.removeSVG(),n.renderSVG()})},a.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},a.render=function(){var t=this.props;t.afterInjection,t.beforeInjection,t.desc,t.evalScripts;var n=t.fallback;t.httpRequestWithCredentials;var i=t.loading;t.renumerateIRIElements,t.src,t.title,t.useRequestCache;var l=t.wrapper,d=je(t,Pe),u=l;return $.createElement(u,oe({},d,{ref:this.refCallback},l==="svg"?{xmlns:H,xmlnsXlink:de}:{}),this.state.isLoading&&i&&$.createElement(i,null),this.state.hasError&&n&&$.createElement(n,null))},e}($.Component);ee.defaultProps={afterInjection:function(){},beforeInjection:function(){},desc:"",evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,onError:function(){},renumerateIRIElements:!0,title:"",useRequestCache:!0,wrapper:"div"};ee.propTypes={afterInjection:p.func,beforeInjection:p.func,desc:p.string,evalScripts:p.oneOf(["always","once","never"]),fallback:p.oneOfType([p.func,p.object,p.string]),httpRequestWithCredentials:p.bool,loading:p.oneOfType([p.func,p.object,p.string]),onError:p.func,renumerateIRIElements:p.bool,src:p.string.isRequired,title:p.string,useRequestCache:p.bool,wrapper:p.oneOf(["div","span","svg"])};const Be=({initialValue:o,onSelect:e,items:a,onEdit:r})=>{const[t,n]=$.useState(!1),[i,l]=$.useState(o),d=h=>{l(h.label),n(!1),r(h.value)},u={transform:t?"rotate(180deg)":"rotate(0)",transition:"transform 0.3s ease",marginLeft:"5px"};return c.jsx(Qe,{children:c.jsxs("div",{className:"dropdown",children:[c.jsxs("div",{className:"dropdownBtn",onClick:()=>n(!t),children:[i||"Выберите пункт",c.jsx("div",{style:u,children:c.jsx(ee,{className:"dropDownIcon",src:qe})})]}),t&&c.jsx("div",{className:"dropdownContent",children:c.jsx("div",{className:"sideBarMain",children:a.map((h,s)=>c.jsx("div",{className:"dropdownItem",onClick:()=>d(h),children:h.label},s))})})]})})},Qe=fe.div`
  .dropdown {
    width: 100%;
    position: relative;
    user-select: none;
    .dropdownBtn {
      background-color: #bb9d53;
      padding: 15px 24px;
      border: 1px solid #bb9d53;
      border-radius: 12px;
      cursor: pointer;
      color: ${G.white};
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.2s ease;
      &:hover{
        border: 1px solid ${G.hoverColor};
      }
    }
    .dropdownContent {
      position: absolute;
      transition: all 0.3s ease;
      border-radius: 12px;
      padding: 10px;
      background-color: #bb9d53;
      z-index: 100;
      color: ${G.white};
      width: 100%;
      margin-top: 10px;

      .dropdownItem {
        text-align: left;
        padding: 10px;
        border-radius: 12px;
        color: ${G.gray800};
        cursor: pointer;
        &:hover{
            color: ${G.white};
            background-color: #a1802f;
        }
      }
    }
    .dropDownIcon{
      margin-left: 5px;
        line-height: 0px;
        svg{
            path{
                stroke: ${G.gray800};
            }
        }
    }
  }
  .sideBarMain{
    margin-bottom: 0px;
  }
`,nt=({delayTime:o})=>{const e=Ee(),a=Se(),{t:r,i18n:t}=Ae(),[n,i]=$.useState(!1),l=()=>{i(!n)},d=s=>{document.getElementById(s).scrollIntoView({behavior:"smooth"}),i(!1)},u=[{label:"English",value:"en"},{label:"Русский",value:"ru"},{label:"Türkmen",value:"tm"}],h=s=>{t.changeLanguage(s),localStorage.setItem("i18nextLng",s)};return c.jsx(Ze,{children:c.jsx("div",{className:"headerContainer",children:c.jsx(ke.div,{initial:{opacity:0,y:-40},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:80,damping:20,duration:1,delay:o},className:"header",children:c.jsxs("div",{className:"headerCol",children:[c.jsxs("div",{className:"headerLogo",onClick:()=>e("/"),children:[c.jsx("div",{className:"logo",children:c.jsx("img",{src:Ie,alt:"logo"})}),c.jsx("div",{className:"logoText",children:c.jsx("div",{children:"Ýüpek Ýol Harytlary"})})]}),c.jsx("div",{className:"headerNav",children:c.jsxs("ul",{className:n?"navbarCol active":"navbarCol",children:[a.pathname!=="/products"&&c.jsx("li",{onClick:()=>d("aboutUs"),children:r("1")}),c.jsx("li",{onClick:()=>e("/products"),children:r("2")}),c.jsx("li",{onClick:()=>d("contacts"),children:r("3")}),c.jsx("li",{children:c.jsx("div",{children:c.jsx(Be,{items:u,initialValue:t.language==="ru"?"Русский":"English",onEdit:s=>h(s)})})})]})}),c.jsxs("div",{onClick:l,className:n?"btn active":"btn",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]})})})})},Ze=fe.header`
  background-color: #fdeedd;
  .headerContainer {
    max-width: 1400px;
    padding: 15px 10px;
    margin: 0 auto;
  }
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
  .logoText {
    font-size: 24px;
    margin-left: 10px;
    font-weight: 600;
    color: #bb9d53;
  }
  .headerNav {
    .navbarCol {
      ${F.flex}
      li {
        font-size: ${C[22]};
        ${ne[600]}
        line-height: ${C[26]};
        color: #bb9d53;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          color: #8b6c1d;
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
  ${K.laptopL} {

    .headerNav {
      .navbarCol {
        li {
          font-size: ${C[18]};
          ${ne[600]}
          line-height: ${C[24]};
          &:not(:first-child) {
            margin-left: 40px;
          }
        }
      }
    }
  }
  ${K.laptop} {

    padding: 20px 10px;
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 10;
.headerContainer{
  padding: 0px;
}
    .headerLogo {
      .logoText {
        font-size: ${C[24]};
        line-height: ${C[28]};
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
          font-size: ${C[22]};
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
      background: ${G.orange};
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
  ${K.mobileL} {
    padding: 15px 10px;
    .logo {
      img {
        width: 50%;
      }
    }
    .headerLogo {
      .logoText {
        font-size: ${C[16]};
        line-height: ${C[22]};
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
`;export{nt as default};
