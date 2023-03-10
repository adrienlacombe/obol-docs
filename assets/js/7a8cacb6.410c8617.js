"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[8756],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},22945:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:10,description:"Frequently asked questions"},i="Frequently asked questions",s={unversionedId:"int/faq",id:"version-v0.6.1/int/faq",title:"Frequently asked questions",description:"Frequently asked questions",source:"@site/versioned_docs/version-v0.6.1/int/faq.md",sourceDirName:"int",slug:"/int/faq",permalink:"/docs/v0.6.1/int/faq",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.6.1/int/faq.md",tags:[],version:"v0.6.1",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Frequently asked questions"},sidebar:"tutorialSidebar",previous:{title:"Working groups",permalink:"/docs/v0.6.1/int/working-groups"},next:{title:"Introducing Charon",permalink:"/docs/v0.6.1/dv/introducing-charon"}},l={},d=[{value:"Does Obol have a token?",id:"does-obol-have-a-token",level:3},{value:"Can I keep my existing validator client?",id:"can-i-keep-my-existing-validator-client",level:3},{value:"Can I migrate my existing validator into a distributed validator?",id:"can-i-migrate-my-existing-validator-into-a-distributed-validator",level:3},{value:"What is an ENR?",id:"what-is-an-enr",level:3},{value:"Where can I learn more about Distributed Validators?",id:"where-can-i-learn-more-about-distributed-validators",level:3}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,a.kt)("h3",{id:"does-obol-have-a-token"},"Does Obol have a token?"),(0,a.kt)("p",null,"No. Distributed validators use only ether."),(0,a.kt)("h3",{id:"can-i-keep-my-existing-validator-client"},"Can I keep my existing validator client?"),(0,a.kt)("p",null,"Yes. Charon sits as a middleware between a validator client and it's beacon node. All validators that implement the standard REST API will be supported, along with all popular client delivery software such as DAppNode ",(0,a.kt)("a",{parentName:"p",href:"https://dappnode.github.io/explorer/#/"},"packages"),", Rocket Pool's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rocket-pool/smartnode"},"smart node"),", StakeHouse's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stake-house/wagyu"},"wagyu"),", and Stereum's ",(0,a.kt)("a",{parentName:"p",href:"https://stereum.net/development/#roadmap"},"node launcher"),"."),(0,a.kt)("h3",{id:"can-i-migrate-my-existing-validator-into-a-distributed-validator"},"Can I migrate my existing validator into a distributed validator?"),(0,a.kt)("p",null,"It will be possible to split an existing validator keystore into a set of key shares suitable for a distributed validator, but it is a trusted distribution process, and if the old staking system is not safely shut down, it could pose a risk of double signing alongside the new distributed validator."),(0,a.kt)("p",null,"In an ideal scenario, a distributed validator's private key should never exist in full in a single location."),(0,a.kt)("h3",{id:"what-is-an-enr"},"What is an ENR?"),(0,a.kt)("p",null,"An ENR is shorthand for an ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-778"},"Ethereum Node Record"),". It is a way to represent a node on a public network, with a reliable mechanism to update its information. At Obol we use ENRs to identify charon nodes to one another such that they can form clusters with the right charon nodes and not impostors. "),(0,a.kt)("p",null,"ENRs have private keys they use to sign updates to the ",(0,a.kt)("a",{parentName:"p",href:"https://enr-viewer.com/"},"data contained")," in their ENR. This private key is by default found at ",(0,a.kt)("inlineCode",{parentName:"p"},".charon/charon-enr-private-key"),", and should be kept secure, and not checked into version control. An ENR looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"enr:-JG4QAgAOXjGFcTIkXBO30aUMzg2YSo1CYV0OH8Sf2s7zA2kFjVC9ZQ_jZZItdE8gA-tUXW-rWGDqEcoQkeJ98Pw7GaGAYFI7eoegmlkgnY0gmlwhCKNyGGJc2VjcDI1NmsxoQI6SQlzw3WGZ_VxFHLhawQFhCK8Aw7Z0zq8IABksuJEJIN0Y3CCPoODdWRwgj6E\n")),(0,a.kt)("h3",{id:"where-can-i-learn-more-about-distributed-validators"},"Where can I learn more about Distributed Validators?"),(0,a.kt)("p",null,"Have you checked out our ",(0,a.kt)("a",{parentName:"p",href:"https://blog.obol.tech"},"blog site")," and ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/ObolNetwork"},"twitter")," yet? Maybe join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/obol"},"discord")," too."))}p.isMDXComponent=!0}}]);