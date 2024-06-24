"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[73297],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7227:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:n},t)}},49489:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(58168),a=n(96540),o=n(20053),l=n(24245),i=n(56347),s=n(62814),u=n(45167),c=n(81269);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=s??p;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(11062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.A)("tabs-container",g.tabList)},a.createElement(y,(0,r.A)({},e,t)),a.createElement(v,(0,r.A)({},e,t)))}function k(e){const t=(0,b.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},70462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));n(49489),n(7227);const o={sidebar_position:1,description:"Test networking between Charon dependant services"},l="Network tests",i={unversionedId:"advanced/test-command",id:"advanced/test-command",title:"Network tests",description:"Test networking between Charon dependant services",source:"@site/docs/advanced/test-command.md",sourceDirName:"advanced",slug:"/advanced/test-command",permalink:"/docs/next/advanced/test-command",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/advanced/test-command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Test networking between Charon dependant services"},sidebar:"tutorialSidebar",previous:{title:"Enable MEV",permalink:"/docs/next/advanced/quickstart-builder-api"},next:{title:"Monitoring your Node",permalink:"/docs/next/advanced/monitoring"}},s={},u=[{value:"Peers",id:"peers",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Run",id:"run",level:3},{value:"Run with Docker",id:"run-with-docker",level:3},{value:"Beacon",id:"beacon",level:2},{value:"Pre-requisites",id:"pre-requisites-1",level:3},{value:"Run",id:"run-1",level:3},{value:"Run with Docker",id:"run-with-docker-1",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"network-tests"},"Network tests"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"The charon test command is in alpha state and is still in development. It can not do any harm, but there is no guarantee it is stable and working as expected.")),(0,a.yg)("p",null,"Charon test command evaluates network performance and effectiveness of the machine it is running on and the targeted external service - other Charon peers, beacon node(s), etc.. It prints a performance report to the standard output and a machine-readable TOML format of the report if ",(0,a.yg)("inlineCode",{parentName:"p"},"output-toml")," flag is set."),(0,a.yg)("h2",{id:"peers"},"Peers"),(0,a.yg)("p",null,"Run tests towards other Charon peers to evaluate the effectiveness of a potential cluster setup. The command sets up a libp2p node, similarly to what Charon originally does. This test command ",(0,a.yg)("strong",{parentName:"p"},"has to be running simultaneously with other peers"),". After the node is up it waits for other peers to get their nodes up and running, retrying connection every 3 seconds. The libp2p node connects to relays (configurable with ",(0,a.yg)("inlineCode",{parentName:"p"},"p2p-relays")," flag) and to other libp2p nodes via TCP. Other peer nodes are discoverable by using their ENRs. Note that for a peer to be successfully discovered, it needs to be connected to the same relay. After completion of the test suite the libp2p node stays alive (duration configurable with ",(0,a.yg)("inlineCode",{parentName:"p"},"keep-alive")," flag) for other peers to continue testing against it. The node can be forcefully stopped as well."),(0,a.yg)("p",null,"To be able to establish direct connection, you have to ensure:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Your machine is publicly accessible on the internet or at least a specific port is."),(0,a.yg)("li",{parentName:"ul"},"You add flag ",(0,a.yg)("inlineCode",{parentName:"li"},"p2p-tcp-address")," (i.e.: ",(0,a.yg)("inlineCode",{parentName:"li"},"127.0.0.1:9001"),") flag and the port specified in it is free and publicly accessible."),(0,a.yg)("li",{parentName:"ul"},"You add the flag ",(0,a.yg)("inlineCode",{parentName:"li"},"p2p-external-ip")," (i.e.: ",(0,a.yg)("inlineCode",{parentName:"li"},"8.8.8.8"),") and specify your public ip.")),(0,a.yg)("p",null,"If all points are satisfied by you and the other peers, you should be able to establish a direct TCP connection between each other. Note that a relay is still required, as it is used for peer discovery. "),(0,a.yg)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"../charon/charon-cli-reference#creating-an-enr-for-charon"},"Create ENR"),"."),(0,a.yg)("li",{parentName:"ul"},"Share your ENR with other peers which will test against you."),(0,a.yg)("li",{parentName:"ul"},"Obtain the ENRs of the other peers against which you will test.")),(0,a.yg)("h3",{id:"run"},"Run"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'charon alpha test peers \\\n  --enrs="enr:-HW4QNDXi9MzdH9Af65g20jDfelAJ0kJhclitkYYgFziYHXhRFF6JyB_CnVnimB7VxKBGBSkHbmy-Tu8BJq8JQkfptiAgmlkgnY0iXNlY3AyNTZrMaEDBVt5pk6x0A2fjth25pjLOEE9DpqCG-BCYyvutY04TZ,enr:-HW4QO2vefLueTBEUGly5hkcpL7NWdMKWx7Nuy9f7z6XZInCbFAc0IZj6bsnmj-Wi4ElS6jNa0Mge5Rkc2WGTVemas2AgmlkgnY0iXNlY3AyNTZrMaECR9SmYQ_1HRgJmNxvh_ER2Sxx78HgKKgKaOkCROYwaDY"\n')),(0,a.yg)("h3",{id:"run-with-docker"},"Run with Docker"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'docker run -v /Users/obol/charon/.charon:/opt/charon/.charon obolnetwork/charon:v1.0.0 alpha test peers \\\n  --enrs="enr:-HW4QNDXi9MzdH9Af65g20jDfelAJ0kJhclitkYYgFziYHXhRFF6JyB_CnVnimB7VxKBGBSkHbmy-Tu8BJq8JQkfptiAgmlkgnY0iXNlY3AyNTZrMaEDBVt5pk6x0A2fjth25pjLOEE9DpqCG-BCYyvutY04TZs,enr:-HW4QO2vefLueTBEUGly5hkcpL7NWdMKWx7Nuy9f7z6XZInCbFAc0IZj6bsnmj-Wi4ElS6jNa0Mge5Rkc2WGTVemas2AgmlkgnY0iXNlY3AyNTZrMaECR9SmYQ_1HRgJmNxvh_ER2Sxx78HgKKgKaOkCROYwaDY"\n')),(0,a.yg)("h2",{id:"beacon"},"Beacon"),(0,a.yg)("p",null,"Run tests towards beacon node(s), evaluating the effectiveness of a potential connection of a Charon node running on the same machine."),(0,a.yg)("h3",{id:"pre-requisites-1"},"Pre-requisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Running beacon node(s) towards which tests will be executed.")),(0,a.yg)("h3",{id:"run-1"},"Run"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'charon alpha test beacon \\\n  --endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com"\n')),(0,a.yg)("h3",{id:"run-with-docker-1"},"Run with Docker"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'docker run obolnetwork/charon:v1.0.0 alpha test beacon \\\n  --endpoints="https://ethereum-holesky-beacon-api.publicnode.com,https://ethereum-sepolia-beacon-api.publicnode.com"\n')))}d.isMDXComponent=!0}}]);