(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[5262],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6753:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(5999),o=n(7462),l=n(3366),c=n(6010),i="iconEdit_dcUD",s=["className"];function u(e){var t=e.className,n=(0,l.Z)(e,s);return r.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(i,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var m=n(5281);function p(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.k.common.editThisPage},r.createElement(u,null),r.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(5999),i=n(6668),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",m=["as","id"];function p(e){var t=e.as,n=e.id,p=(0,a.Z)(e,m),d=(0,i.L)().navbar.hideOnScroll;return"h1"!==t&&n?o.createElement(t,(0,r.Z)({},p,{className:(0,l.Z)("anchor",d?u:s),id:n}),p.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,r.Z)({},p,{id:void 0}))}},5290:function(e,t,n){"use strict";n.d(t,{Z:function(){return de}});var r=n(7294),a=n(3905),o=n(7462),l=n(3366),c=n(5742),i=["mdxType","originalType"];var s=n(2389),u=n(6010),m=n(2949),p=n(6668);function d(){var e=(0,p.L)().prism,t=(0,m.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var f=n(6528),g=n(7594),v=n.n(g),h=(0,f.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),y=(0,f.Z)(/\{([\d,-]+)\}/,{range:1}),b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function k(e,t){var n=e.map((function(e){var n=b[e],r=n.start,a=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function E(e,t){var n=e.replace(/\n$/,""),r=t.language,a=t.magicComments,o=t.metastring;if(o&&y.test(o)){var l=o.match(y).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+o+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var c=a[0].className,i=v()(l).filter((function(e){return e>0})).map((function(e){return[e-1,[c]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);default:return k(Object.keys(b),t)}}(r,a),u=n.split("\n"),m=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),p=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),d=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),f=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),g=0;g<u.length;){var h=u[g].match(s);if(h){var E=h.slice(1).find((function(e){return void 0!==e}));p[E]?m[p[E]].range+=g+",":d[E]?m[d[E]].start=g:f[E]&&(m[f[E]].range+=m[f[E]].start+"-"+(g-1)+","),u.splice(g,1)}else g+=1}n=u.join("\n");var N={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;v()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}var N=n(5281),Z="codeBlockContainer_MPoW",B=["as"];function j(e){var t=e.as,n=(0,l.Z)(e,B),a=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(d());return r.createElement(t,(0,o.Z)({},n,{style:a,className:(0,u.Z)(n.className,Z,N.k.common.codeBlock)}))}var C={codeBlockContent:"codeBlockContent_B9tL",codeBlockTitle:"codeBlockTitle_YYkX",codeBlock:"codeBlock__0OG",codeBlockStandalone:"codeBlockStandalone_Px3r",codeBlockLines:"codeBlockLines_gEuF",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_hGCP",buttonGroup:"buttonGroup_hRr1"};function w(e){var t=e.children,n=e.className;return r.createElement(j,{as:"pre",tabIndex:0,className:(0,u.Z)(C.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:C.codeBlockLines},t))}var O={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},T={Prism:n(7410).default,theme:O};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}var x=/\r\n|\r|\n/,P=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},D=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=L({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=L({},n,{backgroundColor:null}),a};function I(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var A=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?D(e.theme,e.language):void 0;return t.themeDict=n})),_(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=L({},I(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?L({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),_(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),_(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=L({},I(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?L({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),_(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],m=n[l][o];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=S(u,m.type),m.alias&&(u=S(u,m.alias)),s=m.content),"string"==typeof s){var p=s.split(x),d=p.length;c.push({types:u,content:p[0]});for(var f=1;f<d;f++)P(c),i.push(c=[]),c.push({types:u,content:p[f]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return P(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),z=A,R="codeLine_rqGN",W="codeLineNumber_hzTh",M="codeLineContent_hM6e";function V(e){var t=e.line,n=e.classNames,a=e.showLineNumbers,l=e.getLineProps,c=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=l({line:t,className:(0,u.Z)(n,a&&R)}),s=t.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},c({token:e,key:t})))}));return r.createElement("span",i,a?r.createElement(r.Fragment,null,r.createElement("span",{className:W}),r.createElement("span",{className:M},s)):r.createElement(r.Fragment,null,s,r.createElement("br",null)))}var H=n(5999),F={copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function q(e){var t=e.code,n=e.className,a=(0,r.useState)(!1),o=a[0],l=a[1],c=(0,r.useRef)(void 0),i=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(t),l(!0),c.current=window.setTimeout((function(){l(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),r.createElement("button",{type:"button","aria-label":o?(0,H.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,H.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,H.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,F.copyButton,o&&F.copyButtonCopied),onClick:i},r.createElement("span",{className:F.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:F.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:F.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var G="wordWrapButtonIcon_azs1",Q="wordWrapButtonEnabled_Geot";function U(e){var t=e.className,n=e.onClick,a=e.isEnabled,o=(0,H.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,a&&Q),"aria-label":o,title:o},r.createElement("svg",{className:G,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function X(e){var t,n,a,l,c,i,s,m,f,g,v,y=e.children,b=e.className,k=void 0===b?"":b,N=e.metastring,Z=e.title,B=e.showLineNumbers,w=e.language,O=(0,p.L)().prism,_=O.defaultLanguage,L=O.magicComments,x=null!=(t=null!=w?w:null==(n=k.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:_,P=d(),S=(a=(0,r.useState)(!1),l=a[0],c=a[1],i=(0,r.useState)(!1),s=i[0],m=i[1],f=(0,r.useRef)(null),g=(0,r.useCallback)((function(){var e=f.current.querySelector("code");l?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",c((function(e){return!e}))}),[f,l]),v=(0,r.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");m(t)}),[f]),(0,r.useEffect)((function(){v()}),[l,v]),(0,r.useEffect)((function(){return window.addEventListener("resize",v,{passive:!0}),function(){window.removeEventListener("resize",v)}}),[v]),{codeBlockRef:f,isEnabled:l,isCodeScrollable:s,toggle:g}),D=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(h))?void 0:n.groups.title)?t:""}(N)||Z,I=E(y,{metastring:N,language:x,magicComments:L}),A=I.lineClassNames,R=I.code,W=B||function(e){return(null==e?void 0:e.includes("showLineNumbers"))||!1}(N);return r.createElement(j,{as:"div",className:(0,u.Z)(k,x&&!k.includes("language-"+x)&&"language-"+x)},D&&r.createElement("div",{className:C.codeBlockTitle},D),r.createElement("div",{className:C.codeBlockContent},r.createElement(z,(0,o.Z)({},T,{theme:P,code:R,language:null!=x?x:"text"}),(function(e){var t=e.className,n=e.tokens,a=e.getLineProps,o=e.getTokenProps;return r.createElement("pre",{tabIndex:0,ref:S.codeBlockRef,className:(0,u.Z)(t,C.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,u.Z)(C.codeBlockLines,W&&C.codeBlockLinesWithNumbering)},n.map((function(e,t){return r.createElement(V,{key:t,line:e,getLineProps:a,getTokenProps:o,classNames:A[t],showLineNumbers:W})}))))})),r.createElement("div",{className:C.buttonGroup},(S.isEnabled||S.isCodeScrollable)&&r.createElement(U,{className:C.codeButton,onClick:function(){return S.toggle()},isEnabled:S.isEnabled}),r.createElement(q,{className:C.codeButton,code:R}))))}var $=["children"];function Y(e){var t=e.children,n=(0,l.Z)(e,$),a=(0,s.Z)(),c=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof c?X:w;return r.createElement(i,(0,o.Z)({key:String(a)},n),c)}var J=n(9960);var K=n(6043),ee="details_lb9f",te="isBrowser_bmU9",ne="collapsibleContent_i85q",re=["summary","children"];function ae(e){return!!e&&("SUMMARY"===e.tagName||ae(e.parentElement))}function oe(e,t){return!!e&&(e===t||oe(e.parentElement,t))}function le(e){var t=e.summary,n=e.children,a=(0,l.Z)(e,re),o=(0,s.Z)(),c=(0,r.useRef)(null),i=(0,K.u)({initialState:!a.open}),m=i.collapsed,p=i.setCollapsed,d=(0,r.useState)(a.open),f=d[0],g=d[1];return r.createElement("details",Object.assign({},a,{ref:c,open:f,"data-collapsed":m,className:(0,u.Z)(ee,o&&te,a.className),onMouseDown:function(e){ae(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;ae(t)&&oe(t,c.current)&&(e.preventDefault(),m?(p(!1),g(!0)):p(!0))}}),t||r.createElement("summary",null,"Details"),r.createElement(K.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){p(e),g(!e)}},r.createElement("div",{className:ne},n)))}var ce="details_BAp3";function ie(e){var t=Object.assign({},e);return r.createElement(le,(0,o.Z)({},t,{className:(0,u.Z)("alert alert--info",ce,t.className)}))}var se=n(9649);function ue(e){return r.createElement(se.Z,e)}var me="img_E7b_";var pe={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,l.Z)(a,i));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(c.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(Y,e)},a:function(e){return r.createElement(J.Z,e)},pre:function(e){var t;return r.createElement(Y,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ie,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"clean-list"))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,me))}));var t},h1:function(e){return r.createElement(ue,(0,o.Z)({as:"h1"},e))},h2:function(e){return r.createElement(ue,(0,o.Z)({as:"h2"},e))},h3:function(e){return r.createElement(ue,(0,o.Z)({as:"h3"},e))},h4:function(e){return r.createElement(ue,(0,o.Z)({as:"h4"},e))},h5:function(e){return r.createElement(ue,(0,o.Z)({as:"h5"},e))},h6:function(e){return r.createElement(ue,(0,o.Z)({as:"h6"},e))}};function de(e){var t=e.children;return r.createElement(a.Zo,{components:pe},t)}},1750:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o=n(9960);function l(e){var t=e.permalink,n=e.title,l=e.subLabel,c=e.isNext;return r.createElement(o.Z,{className:(0,a.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},n))}},7774:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),o=n(9960),l="tag_hD8n",c="tagRegular_D6E_",i="tagWithCount_i0QQ";function s(e){var t=e.permalink,n=e.label,s=e.count;return r.createElement(o.Z,{href:t,className:(0,a.Z)(l,s?i:c)},n,s&&r.createElement("span",null,s))}},62:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),o=n(5999),l=n(7774),c="tags_XVD_",i="tag_JSN8";function s(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:i},r.createElement(l.Z,{label:t,permalink:n}))}))))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);