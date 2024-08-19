"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[26657],{93348:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(74848),r=n(28453);const o={description:"Deployment Architecture for a Distributed Validator Client"},s="Middleware daemon",a={id:"dv/middleware-daemon",title:"Middleware daemon",description:"Deployment Architecture for a Distributed Validator Client",source:"@site/versioned_docs/version-v0.3.0/dv/04_middleware-daemon.md",sourceDirName:"dv",slug:"/dv/middleware-daemon",permalink:"/docs/v0.3.0/dv/middleware-daemon",draft:!1,unlisted:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.3.0/dv/04_middleware-daemon.md",tags:[],version:"v0.3.0",sidebarPosition:4,frontMatter:{description:"Deployment Architecture for a Distributed Validator Client"},sidebar:"tutorialSidebar",previous:{title:"Distributed validator creation",permalink:"/docs/v0.3.0/dv/validator-creation"},next:{title:"Peer discovery",permalink:"/docs/v0.3.0/dv/peer-discovery"}},d={},l=[{value:"Operation",id:"operation",level:3},{value:"Initialization",id:"initialization",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"middleware-daemon",children:"Middleware daemon"})}),"\n",(0,t.jsx)(i.p,{children:"The Charon daemon serves as a consensus layer API middleware and connects to the Obol peer-to-peer network to discover it's counterpart Charon nodes."}),"\n",(0,t.jsx)(i.h3,{id:"operation",children:"Operation"}),"\n",(0,t.jsx)(i.p,{children:"The middleware strives to be stateless and statically configured through 777 file systems. The lack of a control-plane API for online reconfiguration is deliberate to keep operations simple and secure by default."}),"\n",(0,t.jsx)(i.p,{children:"A single instance of the middleware can participate in multiple distributed validator clusters. The amount of validators per middleware is bound by risk management and hardware limits (CPU, memory, bandwidth), but there is no hardcoded limit."}),"\n",(0,t.jsx)(i.p,{children:"The daemon offers a config reload instruction through Unix signals which is useful to join or leave Obol clusters on-the-fly without interruption."}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"charon"})," package will initially be available as a Docker image and through binary builds. An APT package with a systemd integration is planned."]}),"\n",(0,t.jsx)(i.h3,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsx)(i.p,{children:"An instance of Charon requires the following pieces of information at minimum in order to operate."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["A DV cluster manifest file in the to be confirmed EIP format. This file contains the required information a DV client needs for joining a Distributed Validator Cluster. This file includes:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The total number of shares of the key and the required threshold for reconstruction."}),"\n",(0,t.jsx)(i.li,{children:"An SECP256K1 key pair in an ENR format for Obol consensus messages, this key is signed by the corresponding operators validator key share to legitimise it."}),"\n",(0,t.jsx)(i.li,{children:"A list of all ENR public keys of other operators participating in the cluster."}),"\n",(0,t.jsx)(i.li,{children:"The group public keys representing each distributed validator in the cluster to the Ethereum network."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Access to an Ethereum Consensus API","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"It is recommended to run at least one Ethereum Consensus client for each Charon middleware client."}),"\n",(0,t.jsxs)(i.li,{children:["Any ",(0,t.jsx)(i.a,{href:"https://ethereum.github.io/beacon-APIs/",children:"compliant"})," Beacon node implementation should work \u2013 try to establish client diversity."]}),"\n",(0,t.jsx)(i.li,{children:"These consensus clients need to be connected to at least one Ethereum Execution clients for block production."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["The public IP address and port the charon client will operate on","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"For now, we make the (naive) assumption that the address will be static."}),"\n",(0,t.jsxs)(i.li,{children:["Charon will attempt to auto-discover its address on first use by enumerating network interfaces and using ",(0,t.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc5389",children:"STUN"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var t=n(96540);const r={},o=t.createContext(r);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);