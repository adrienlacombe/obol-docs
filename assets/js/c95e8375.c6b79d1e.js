"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[8964],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6053:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={description:"Deployment Architecture for a Distributed Validator Client"},c="Middleware Architecture",d={unversionedId:"dv/middleware-daemon",id:"version-v0.6.0/dv/middleware-daemon",title:"Middleware Architecture",description:"Deployment Architecture for a Distributed Validator Client",source:"@site/versioned_docs/version-v0.6.0/dv/04_middleware-daemon.md",sourceDirName:"dv",slug:"/dv/middleware-daemon",permalink:"/docs/dv/middleware-daemon",draft:!1,editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/versioned_docs/version-v0.6.0/dv/04_middleware-daemon.md",tags:[],version:"v0.6.0",sidebarPosition:4,frontMatter:{description:"Deployment Architecture for a Distributed Validator Client"},sidebar:"tutorialSidebar",previous:{title:"Distributed validator creation",permalink:"/docs/dv/validator-creation"},next:{title:"Peer discovery",permalink:"/docs/dv/peer-discovery"}},s={},u=[{value:"Operation",id:"operation",level:3}],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"middleware-architecture"},"Middleware Architecture"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/DistributedValidatorCluster.svg"})),(0,i.kt)("p",null,"The Charon daemon sits as a middleware between the consensus layer's ",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.github.io/beacon-APIs/"},"beacon node API")," and any downstream validator clients. "),(0,i.kt)("h3",{id:"operation"},"Operation"),(0,i.kt)("p",null,"The middleware strives to be stateless and statically configured through 777 file systems. The lack of a control-plane API for online reconfiguration is deliberate to keep operations simple and secure by default."),(0,i.kt)("p",null,"The daemon offers a config reload instruction through Unix signals which is useful to join or leave Obol clusters on-the-fly without interruption."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"charon")," package will initially be available as a Docker image and through binary builds. An APT package with a systemd integration is planned."))}f.isMDXComponent=!0}}]);