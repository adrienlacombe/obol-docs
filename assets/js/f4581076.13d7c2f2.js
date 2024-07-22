"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[59930],{7227:(e,t,a)=>{a.d(t,{A:()=>n});var o=a(96540),r=a(20053);const i={tabItem:"tabItem_Ymn6"};function n(e){let{children:t,hidden:a,className:n}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,n),hidden:a},t)}},49489:(e,t,a)=>{a.d(t,{A:()=>w});var o=a(58168),r=a(96540),i=a(20053),n=a(24245),l=a(56347),s=a(62814),d=a(45167),c=a(81269);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:r}}=e;return{value:t,label:a,attributes:o,default:r}}))}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const o=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,i=h(e),[n,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:i}))),[s,d]=m({queryString:a,groupId:o}),[u,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,c.Dv)(a);return[o,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:o}),y=(()=>{const e=s??u;return p({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:n,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var y=a(11062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),o=d[a].value;o!==l&&(u(t),s(o))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:n}=e;return r.createElement("li",(0,o.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:h},n,{className:(0,i.A)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:o}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function x(e){const t=b(e);return r.createElement("div",{className:(0,i.A)("tabs-container",g.tabList)},r.createElement(f,(0,o.A)({},e,t)),r.createElement(v,(0,o.A)({},e,t)))}function w(e){const t=(0,y.A)();return r.createElement(x,(0,o.A)({key:String(t)},e))}},49206:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var o=a(58168),r=(a(96540),a(15680)),i=a(49489),n=a(7227);a(11321);const l={sidebar_position:7,description:"Exit a validator"},s="Exit a DV",d={unversionedId:"start/quickstart-exit",id:"start/quickstart-exit",title:"Exit a DV",description:"Exit a validator",source:"@site/docs/start/quickstart-exit.md",sourceDirName:"start",slug:"/start/quickstart-exit",permalink:"/docs/next/start/quickstart-exit",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/start/quickstart-exit.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Exit a validator"},sidebar:"tutorialSidebar",previous:{title:"Update a DV",permalink:"/docs/next/start/update"},next:{title:"Enable MEV",permalink:"/docs/next/advanced/quickstart-builder-api"}},c={},u=[{value:"Run the <code>voluntary-exit</code> command on your validator client",id:"run-the-voluntary-exit-command-on-your-validator-client",level:2},{value:"Exit epoch and withdrawable epoch",id:"exit-epoch-and-withdrawable-epoch",level:2},{value:"How to verify a validator exit",id:"how-to-verify-a-validator-exit",level:2}],h={toc:u},p="wrapper";function m(e){let{components:t,...l}=e;return(0,r.yg)(p,(0,o.A)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"exit-a-dv"},"Exit a DV"),(0,r.yg)("p",null,'Users looking to exit staking entirely and withdraw their full balance back must also sign and broadcast a "voluntary exit" message with validator keys which will start the process of exiting from staking. This is done with your validator client and submitted to your beacon node, and does not require gas. In the case of a DV, each Charon node needs to broadcast a partial exit to the other nodes of the cluster. Once a threshold of partial exits has been received by any node, the full voluntary exit will be sent to the beacon chain.'),(0,r.yg)("p",null,"This process will take 27 hours or longer depending on the current length of the exit queue."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"A threshold of operators needs to run the exit command for the exit to succeed."),(0,r.yg)("li",{parentName:"ul"},"If a Charon client restarts after the exit command is run but before the threshold is reached, it will lose the partial exits it has received from the other nodes. If all Charon clients restart and thus all partial exits are lost before the required threshold of exit messages are received, operators will have to rebroadcast their partial exit messages."))),(0,r.yg)("h2",{id:"run-the-voluntary-exit-command-on-your-validator-client"},"Run the ",(0,r.yg)("inlineCode",{parentName:"h2"},"voluntary-exit")," command on your validator client"),(0,r.yg)("p",null,"Run the appropriate command on your validator client to broadcast an exit message from your validator client to its upstream Charon client."),(0,r.yg)("p",null,"It needs to be the validator client that is connected to your Charon client taking part in the DV, as you are only signing a partial exit message, with a partial private key share, which your Charon client will combine with the other partial exit messages from the other operators."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"All operators need to use the same ",(0,r.yg)("inlineCode",{parentName:"li"},"EXIT_EPOCH")," for the exit to be successful. Assuming you want to exit as soon as possible, the default epochs included in the below commands should be sufficient for the respective network."),(0,r.yg)("li",{parentName:"ul"},"Partial exits can be broadcasted by any validator client as long as the sum reaches the threshold for the cluster."))),(0,r.yg)(i.A,{groupId:"validator-clients",mdxType:"Tabs"},(0,r.yg)(n.A,{value:"Holesky",label:"Holesky",mdxType:"TabItem"},(0,r.yg)(i.A,{groupId:"validator-clients",mdxType:"Tabs"},(0,r.yg)(n.A,{value:"teku",label:"Teku",default:!0,mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
            --beacon-node-api-endpoint="http://charon:3600/" \
            --confirmation-enabled=false \
            --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
            --epoch=256`))),(0,r.yg)(n.A,{value:"nimbus",label:"Nimbus",mdxType:"TabItem"},"The following executes an interactive command inside the Nimbus VC container. It copies all files and directories from the Keystore path ",(0,r.yg)("code",null,"/home/user/data/charon")," to the newly created ",(0,r.yg)("code",null,"/home/user/data/wd")," directory.",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c ' \
        
            mkdir /home/user/data/wd
            cp -r /home/user/data/charon/ /home/user/data/wd
                
            /home/user/nimbus_beacon_node deposits exit --all --epoch=256 --rest-url=http://charon:3600/ --data-dir=/home/user/data/wd/'`))),(0,r.yg)(n.A,{value:"lodestar",label:"Lodestar",default:!0,mdxType:"TabItem"},"The following executes an interactive command inside the Lodestar VC container to exit all validators.",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-lodestar-1 node /usr/app/packages/cli/bin/lodestar validator voluntary-exit \
            --beaconNodes="http://charon:3600" \
            --dataDir=/opt/data \
            --exitEpoch=256 \
            --network=holesky \
            --yes`))),(0,r.yg)(n.A,{value:"lighthouse",label:"Lighthouse",default:!0,mdxType:"TabItem"},"The following executes an interactive command inside the Lighthouse VC container to exit all validators. The exit is submitted for the current epoch.",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-lighthouse-1 /bin/bash -c '\
                for file in /opt/charon/keys/*; do \
                  filename=$(basename $file);
                  if [[ $filename == *".json"* ]]; then
                  `,String.raw`  keystore=$`,String.raw`{filename%.*};
                    `,String.raw`lighthouse account validator exit \
                      --beacon-node http://charon:3600 \
                      --keystore /opt/charon/keys/$keystore.json \
                      --network holesky \
                      --password-file /opt/charon/keys/$keystore.txt \
                      --no-confirmation \
                      --no-wait;
                  fi;
                done;'`))),(0,r.yg)(n.A,{value:"prysm",label:"Prysm",default:!0,mdxType:"TabItem"},"Currently voluntary exits through Prysm are not supported. This is because ",(0,r.yg)("a",{href:"https://docs.prylabs.network/docs/wallet/exiting-a-validator",target:"_blank"},"Prysm support voluntary exits only if both the validator client and the beacon node are running on Prysm"),". Note that this is incompatible with Charon, as the Charon client intercepts the communication between the validator client and the consensus layer."),(0,r.yg)(n.A,{value:"charon",label:"Charon",default:!0,mdxType:"TabItem"},"Voluntary exit can be submitted directly through Charon as well. The partially signed exit messages are stored (centrally) on Obol's infrastructure. Exits through Charon are submitted per validator. All active validators public keys for a given cluster lock can be listed with:",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit active-validator-list \
    --beacon-node-endpoints="http://lighthouse:5052"'`)),"Then a signed partial exit for validator can be submitted by:",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit sign \
    --beacon-node-endpoints="http://lighthouse:5052" \
    --validator-public-key="<VALIDATOR_PUBLIC_KEY>" \
    --publish-timeout="5m"'`)),"After a sufficient amount of signed partial exits from node operators in the cluster is cumulated, a full (complete) exit is created. The threshold is the same as the one submitted during the cluster creation. After a full exit message is created, any operator from the cluster can broadcast it to the beacon chain with:",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit broadcast \
    --beacon-node-endpoints="http://lighthouse:5052" \
    --validator-public-key="<VALIDATOR_PUBLIC_KEY>" \
    --publish-timeout="5m"'`))))),(0,r.yg)(n.A,{value:"Goerli",label:"Goerli",default:!0,mdxType:"TabItem"},(0,r.yg)(i.A,{groupId:"validator-clients",mdxType:"Tabs"},(0,r.yg)(n.A,{value:"teku",label:"Teku",default:!0,mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
            --beacon-node-api-endpoint="http://charon:3600/" \
            --confirmation-enabled=false \
            --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
            --epoch=162304`))),(0,r.yg)(n.A,{value:"nimbus",label:"Nimbus",mdxType:"TabItem"},"The following executes an interactive command inside the Nimbus VC container. It copies all files and directories from the Keystore path ",(0,r.yg)("code",null,"/home/user/data/charon")," to the newly created ",(0,r.yg)("code",null,"/home/user/data/wd")," directory.",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c ' \
        
            mkdir /home/user/data/wd
            cp -r /home/user/data/charon/ /home/user/data/wd
                
            /home/user/nimbus_beacon_node deposits exit --all --epoch=162304 --rest-url=http://charon:3600/ --data-dir=/home/user/data/wd/'`))),(0,r.yg)(n.A,{value:"lodestar",label:"Lodestar",default:!0,mdxType:"TabItem"},"The following executes an interactive command inside the Lodestar VC container to exit all validators.",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-lodestar-1 node /usr/app/packages/cli/bin/lodestar validator voluntary-exit \
            --beaconNodes="http://charon:3600" \
            --dataDir=/opt/data \
            --exitEpoch=162304 \
            --network=goerli \
            --yes`))),(0,r.yg)(n.A,{value:"lighthouse",label:"Lighthouse",default:!0,mdxType:"TabItem"},"The following executes an interactive command inside the Lighthouse VC container to exit all validators. The exit is submitted for the current epoch.",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-lighthouse-1 /bin/bash -c '\
                for file in /opt/charon/keys/*; do \
                  filename=$(basename $file);
                  if [[ $filename == *".json"* ]]; then
                  `,String.raw`  keystore=$`,String.raw`{filename%.*};
                    `,String.raw`lighthouse account validator exit \
                      --beacon-node http://charon:3600 \
                      --keystore /opt/charon/keys/$keystore.json \
                      --network goerli \
                      --password-file /opt/charon/keys/$keystore.txt \
                      --no-confirmation \
                      --no-wait;
                  fi;
                done;'`))),(0,r.yg)(n.A,{value:"prysm",label:"Prysm",default:!0,mdxType:"TabItem"},"Currently voluntary exits through Prysm are not supported. This is because ",(0,r.yg)("a",{href:"https://docs.prylabs.network/docs/wallet/exiting-a-validator",target:"_blank"},"Prysm support voluntary exits only if both the validator client and the beacon node are running on Prysm"),". Note that this is incompatible with Charon, as the Charon client intercepts the communication between the validator client and the consensus layer."),(0,r.yg)(n.A,{value:"charon",label:"Charon",default:!0,mdxType:"TabItem"},"Voluntary exit can be submitted directly through Charon as well. The partially signed exit messages are stored (centrally) on Obol's infrastructure. Exits through Charon are submitted per validator. All active validators public keys for a given cluster lock can be listed with:",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit active-validator-list \
    --beacon-node-endpoints="http://lighthouse:5052"'`)),"Then a signed partial exit for validator can be submitted by:",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit sign \
    --beacon-node-endpoints="http://lighthouse:5052" \
    --validator-public-key="<VALIDATOR_PUBLIC_KEY>" \
    --publish-timeout="5m"'`)),"After a sufficient amount of signed partial exits from node operators in the cluster is cumulated, a full (complete) exit is created. The threshold is the same as the one submitted during the cluster creation. After a full exit message is created, any operator from the cluster can broadcast it to the beacon chain with:",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit broadcast \
    --beacon-node-endpoints="http://lighthouse:5052" \
    --validator-public-key="<VALIDATOR_PUBLIC_KEY>" \
    --publish-timeout="5m"'`))))),(0,r.yg)(n.A,{value:"Mainnet",label:"Mainnet",mdxType:"TabItem"},(0,r.yg)(i.A,{groupId:"validator-clients",mdxType:"Tabs"},(0,r.yg)(n.A,{value:"teku",label:"Teku",default:!0,mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit \
            --beacon-node-api-endpoint="http://charon:3600/" \
            --confirmation-enabled=false \
            --validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys" \
            --epoch=194048`))),(0,r.yg)(n.A,{value:"nimbus",label:"Nimbus",mdxType:"TabItem"},"The following executes an interactive command inside the Nimbus VC container. It copies all files and directories from the Keystore path ",(0,r.yg)("code",null,"/home/user/data/charon")," to the newly created ",(0,r.yg)("code",null,"/home/user/data/wd")," directory.",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-nimbus-1 /bin/bash -c ' \
            
            mkdir /home/user/data/wd
            cp -r /home/user/data/charon/ /home/user/data/wd
            
            /home/user/nimbus_beacon_node deposits exit --all --epoch=194048 --rest-url=http://charon:3600/ --data-dir=/home/user/data/wd/'`))),(0,r.yg)(n.A,{value:"lodestar",label:"Lodestar",default:!0,mdxType:"TabItem"},"The following executes an interactive command inside the Lodestar VC container to exit all validators.",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-lodestar-1 node /usr/app/packages/cli/bin/lodestar validator voluntary-exit \
            --beaconNodes="http://charon:3600" \
            --dataDir=/opt/data \
            --exitEpoch=194048 \
            --network=mainnet \
            --yes`))),(0,r.yg)(n.A,{value:"lighthouse",label:"Lighthouse",default:!0,mdxType:"TabItem"},"The following executes an interactive command inside the Lighthouse VC container to exit all validators. The exit is submitted for the current epoch.",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-lighthouse-1 /bin/bash -c '\
                for file in /opt/charon/keys/*; do \
                  filename=$(basename $file);
                  if [[ $filename == *".json"* ]]; then
                  `,String.raw`  keystore=$`,String.raw`{filename%.*};
                    `,String.raw`lighthouse account validator exit \
                      --beacon-node http://charon:3600 \
                      --keystore /opt/charon/keys/$keystore.json \
                      --network mainnet \
                      --password-file /opt/charon/keys/$keystore.txt \
                      --no-confirmation \
                      --no-wait;
                  fi;
                done;'`))),(0,r.yg)(n.A,{value:"prysm",label:"Prysm",default:!0,mdxType:"TabItem"},"Currently voluntary exits through Prysm are not supported. This is because ",(0,r.yg)("a",{href:"https://docs.prylabs.network/docs/wallet/exiting-a-validator",target:"_blank"},"Prysm support voluntary exits only if both the validator client and the beacon node are running on Prysm"),". Note that this is incompatible with Charon, as the Charon client intercepts the communication between the validator client and the consensus layer."),(0,r.yg)(n.A,{value:"charon",label:"Charon",default:!0,mdxType:"TabItem"},"Voluntary exit can be submitted directly through Charon as well. The partially signed exit messages are stored (centrally) on Obol's infrastructure. Exits through Charon are submitted per validator. All active validators public keys for a given cluster lock can be listed with:",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit active-validator-list \
    --beacon-node-endpoints="http://lighthouse:5052"'`)),"Then a signed partial exit for validator can be submitted by:",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit sign \
    --beacon-node-endpoints="http://lighthouse:5052" \
    --validator-public-key="<VALIDATOR_PUBLIC_KEY>" \
    --publish-timeout="5m"'`)),"After a sufficient amount of signed partial exits from node operators in the cluster is cumulated, a full (complete) exit is created. The threshold is the same as the one submitted during the cluster creation. After a full exit message is created, any operator from the cluster can broadcast it to the beacon chain with:",(0,r.yg)("pre",null,(0,r.yg)("code",null,String.raw`docker exec -it charon-distributed-validator-node-charon-1 /bin/sh -c 'charon exit broadcast \
    --beacon-node-endpoints="http://lighthouse:5052" \
    --validator-public-key="<VALIDATOR_PUBLIC_KEY>" \
    --publish-timeout="5m"'`)))))),(0,r.yg)("p",null,"When submitting through a validator client (not through charon directly), once a threshold of exit signatures has been received by any single Charon client, it will craft a valid voluntary exit message and will submit it to the beacon chain for inclusion. You can monitor partial exits stored by each node in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-node"},"Grafana Dashboard"),"."),(0,r.yg)("h2",{id:"exit-epoch-and-withdrawable-epoch"},"Exit epoch and withdrawable epoch"),(0,r.yg)("p",null,"The process of a validator exiting from staking takes variable amounts of time, depending on how many others are exiting at the same time."),(0,r.yg)("p",null,"Immediately upon broadcasting a signed voluntary exit message, the exit epoch and withdrawable epoch values are calculated based off the current epoch number. These values determine exactly when the validator will no longer be required to be online performing validation, and when the validator is eligible for a full withdrawal respectively."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Exit epoch - epoch at which your validator is no longer active, no longer earning rewards, and is no longer subject to slashing rules.",(0,r.yg)("admonition",{parentName:"li",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},'Up until this epoch (while "in the queue") your validator is expected to be online and is held to the same slashing rules as always. Do not turn your DV node off until this epoch is reached.'))),(0,r.yg)("li",{parentName:"ol"},"Withdrawable epoch - epoch at which your validator funds are eligible for a full withdrawal during the next validator sweep.\nThis occurs 256 epochs after the exit epoch, which takes ~27.3 hours.")),(0,r.yg)("h2",{id:"how-to-verify-a-validator-exit"},"How to verify a validator exit"),(0,r.yg)("p",null,"Consult the examples below and compare them to your validator's monitoring to verify that exits from each operator in the cluster are being received. This example is a cluster of 4 nodes with 2 validators and threshold of 3 nodes broadcasting exits are needed."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Operator 1 broadcasts an exit on validator client 1.\n",(0,r.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(38755).A,width:"2988",height:"1226"}),(0,r.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(90869).A,width:"2152",height:"548"})),(0,r.yg)("li",{parentName:"ol"},"Operator 2 broadcasts an exit on validator client 2.\n",(0,r.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(1896).A,width:"2974",height:"952"}),(0,r.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(70494).A,width:"2152",height:"582"})),(0,r.yg)("li",{parentName:"ol"},"Operator 3 broadcasts an exit on validator client 3.\n",(0,r.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(12113).A,width:"2924",height:"1018"}),(0,r.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(46279).A,width:"2144",height:"608"}))),(0,r.yg)("p",null,"At this point, the threshold of 3 has been reached and the validator exit process will start. The logs will show the following:\n",(0,r.yg)("img",{alt:"Verify in Grafana Exit panel",src:a(80300).A,width:"2784",height:"484"})),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Once a validator has broadcasted an exit message, it must continue to validate for at least 27 hours or longer. Do not shut off your distributed validator nodes until your validator is fully exited.")))}m.isMDXComponent=!0},90869:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/DutyExit-01-cc29cb51c323e290f8ceec9c0256f574.png"},70494:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/DutyExit-02-560e45e9e4064f1ca26a0386f8d7ec16.png"},46279:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/DutyExit-03-12edb85f9744e0ff91264177f37fb753.png"},80300:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/ExitLogs-04a7bf322d265372eac30d3671bd916b.png"},38755:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/ExitPromQuery-01-7266f9324d942a47c7966bf2f036f167.png"},1896:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/ExitPromQuery-02-9592e27d4d27ab70911856badffa662a.png"},12113:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/ExitPromQuery-03-d2adbd3dec918750799fe3f07309bed3.png"}}]);