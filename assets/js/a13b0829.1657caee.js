"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[2377],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1125:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={description:"Charon -  The Distributed Validator Client"},l="Introducing Charon",s={unversionedId:"dv/introducing-charon",id:"version-v0.3.0/dv/introducing-charon",isDocsHomePage:!1,title:"Introducing Charon",description:"Charon -  The Distributed Validator Client",source:"@site/versioned_docs/version-v0.3.0/dv/01_introducing-charon.md",sourceDirName:"dv",slug:"/dv/introducing-charon",permalink:"/docs/dv/introducing-charon",editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/versioned_docs/version-v0.3.0/dv/01_introducing-charon.md",tags:[],version:"v0.3.0",sidebarPosition:1,frontMatter:{description:"Charon -  The Distributed Validator Client"},sidebar:"version-v0.3.0/tutorialSidebar",previous:{title:"Frequently asked questions",permalink:"/docs/int/faq"},next:{title:"Distributed validator creation",permalink:"/docs/dv/validator-creation"}},d=[{value:"What is Charon?",id:"what-is-charon",children:[],level:3},{value:"Charon architecture",id:"charon-architecture",children:[],level:3},{value:"Get started",id:"get-started",children:[],level:3}],u={toc:d};function p(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introducing-charon"},"Introducing Charon"),(0,a.kt)("p",null,"This section introduces and outlines the Charon DVT middleware. For additional context regarding distributed validator technology, see ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/int/key-concepts#distributed-validator"},"this section")," of the key concept page."),(0,a.kt)("h3",{id:"what-is-charon"},"What is Charon?"),(0,a.kt)("p",null,"Charon is a GoLang-based, HTTP middleware built by Obol to enable any existing Ethereum validator clients to operate together as part of a distributed validator."),(0,a.kt)("p",null,"Charon sits as a middleware between a normal validating client and it's connected beacon node, intercepting and proxying API traffic. Multiple Charon clients are configured to communicate together to come to consensus on validator duties and behave as a single unified proof-of-stake validator together. The nodes form a cluster that is ",(0,a.kt)("em",{parentName:"p"},"byzantine-fault tolerant")," and continues to progress assuming a supermajority of working/honest nodes is met."),(0,a.kt)("h3",{id:"charon-architecture"},"Charon architecture"),(0,a.kt)("p",null,"The below graphic visually outlines the internal functionalies of Charon."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Charon Internals Slide",src:n(7155).Z})),(0,a.kt)("h3",{id:"get-started"},"Get started"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"charon")," client is in an early alpha state, and is not ready for mainnet, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon#supported-consensus-layer-clients"},"here")," for the latest on charon's readiness."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run ghcr.io/obolnetwork/charon:v0.3.0 --help\n")))}p.isMDXComponent=!0},7155:function(e,t,n){t.Z=n.p+"assets/images/CharonInternals-8cab9fd64594cf16a86f3b7c10f10a88.png"}}]);