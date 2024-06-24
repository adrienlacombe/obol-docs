"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[37780],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var i=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(r),p=a,y=h["".concat(l,".").concat(p)]||h[p]||u[p]||n;return r?i.createElement(y,o(o({ref:t},c),{},{components:r})):i.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<n;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},87317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var i=r(58168),a=(r(96540),r(15680));const n={description:"Generating private keys for a Distributed Validator requires a Distributed Key Generation (DKG) Ceremony.",sidebar_position:2},o="Distributed Key Generation",s={unversionedId:"charon/dkg",id:"charon/dkg",title:"Distributed Key Generation",description:"Generating private keys for a Distributed Validator requires a Distributed Key Generation (DKG) Ceremony.",source:"@site/docs/charon/dkg.md",sourceDirName:"charon",slug:"/charon/dkg",permalink:"/docs/next/charon/dkg",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/charon/dkg.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Generating private keys for a Distributed Validator requires a Distributed Key Generation (DKG) Ceremony.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/next/charon/intro"},next:{title:"Cluster configuration",permalink:"/docs/next/charon/cluster-configuration"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Actors Involved",id:"actors-involved",level:2},{value:"Cluster Definition Creation",id:"cluster-definition-creation",level:2},{value:"Carrying out the DKG ceremony",id:"carrying-out-the-dkg-ceremony",level:2},{value:"Backing up the ceremony artifacts",id:"backing-up-the-ceremony-artifacts",level:2},{value:"DKG Verification",id:"dkg-verification",level:2},{value:"Appendix",id:"appendix",level:2},{value:"Sample Configuration and Lock Files",id:"sample-configuration-and-lock-files",level:3}],c={toc:d},h="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(h,(0,i.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"distributed-key-generation"},"Distributed Key Generation"),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"A ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/int/key-concepts#distributed-validator-key"},(0,a.yg)("strong",{parentName:"a"},"distributed validator key"))," is a group of BLS private keys that together operate as a threshold key for participating in proof-of-stake consensus."),(0,a.yg)("p",null,"To make a distributed validator with no fault-tolerance (i.e. all nodes need to be online to sign every message), due to the BLS signature scheme used by Proof of Stake Ethereum, each key share could be chosen by operators independently. However, to create a distributed validator that can stay online despite a subset of its nodes going offline, the key shares need to be generated together (4 randomly chosen points on a graph don't all necessarily sit on the same order three curve). To do this in a secure manner with no one party being trusted to distribute the keys requires what is known as a ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/int/key-concepts#distributed-validator-key-generation-ceremony"},(0,a.yg)("strong",{parentName:"a"},"distributed key generation ceremony")),"."),(0,a.yg)("p",null,"The Charon client has the responsibility of securely completing a distributed key generation ceremony with its counterparty nodes. The ceremony configuration is outlined in a ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/charon/cluster-configuration"},"cluster definition"),"."),(0,a.yg)("h2",{id:"actors-involved"},"Actors Involved"),(0,a.yg)("p",null,"A distributed key generation ceremony involves ",(0,a.yg)("inlineCode",{parentName:"p"},"Operators")," and their ",(0,a.yg)("inlineCode",{parentName:"p"},"Charon clients"),"."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"An ",(0,a.yg)("inlineCode",{parentName:"p"},"Operator")," is identified by their Ethereum address. They will sign a message with this address to authorize their Charon client to take part in the DKG ceremony.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"A ",(0,a.yg)("inlineCode",{parentName:"p"},"Charon client")," is also identified by a public/private key pair, in this instance, the public key is represented as an ",(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-778"},"Ethereum Node Record")," (ENR). This is a standard identity format for both EL and CL clients. These ENRs are used by each Charon node to identify its cluster peers over the internet, and to communicate with one another in an ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/libp2p/go-libp2p/tree/master/p2p/security/noise"},"end to end encrypted manner"),". These keys need to be created (and backed up) by each operator before they can participate in a cluster creation."))),(0,a.yg)("h2",{id:"cluster-definition-creation"},"Cluster Definition Creation"),(0,a.yg)("p",null,"This cluster definition specifies the intended cluster configuration before keys have been created in a distributed key generation ceremony. The ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," file can be created with the help of the ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/charon/cluster-configuration#using-the-dv-launchpad"},"Distributed Validator Launchpad")," or via the ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/charon/cluster-configuration#using-the-cli"},"CLI"),"."),(0,a.yg)("h2",{id:"carrying-out-the-dkg-ceremony"},"Carrying out the DKG ceremony"),(0,a.yg)("p",null,"Once all participants have signed the cluster definition, they can load the ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster-definition")," file into their Charon client, and the client will attempt to complete the DKG."),(0,a.yg)("p",null,"Charon will read the ENRs in the definition, confirm that its ENR is present, and then will reach out to relays that are deployed to find the other ENRs on the network. (Fresh ENRs just have a public key and an IP address of 0.0.0.0 until they are loaded into a live Charon client, which will update the IP address and increment the ENRs nonce and resign with the clients private key. If an ENR with a higher nonce is seen by a Charon client, they will update the IP address of that ENR in their address book.)"),(0,a.yg)("p",null,"Once all clients in the cluster can establish a connection with one another and they each complete a handshake (confirm everyone has a matching ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster_definition_hash"),"), the ceremony begins."),(0,a.yg)("p",null,"No user input is required, Charon does the work and outputs the following files to each machine and then exits."),(0,a.yg)("h2",{id:"backing-up-the-ceremony-artifacts"},"Backing up the ceremony artifacts"),(0,a.yg)("p",null,"At the end of a DKG ceremony, each operator will have a number of files outputted by their Charon client based on how many distributed validators the group chose to generate together."),(0,a.yg)("p",null,"These files are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Validator keystore(s):")," These files will be loaded into the operator's validator client and each file represents one share of a Distributed Validator."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"A distributed validator cluster lock file:")," This ",(0,a.yg)("inlineCode",{parentName:"li"},"cluster-lock.json")," file contains the configuration a distributed validator client like Charon needs to join a cluster capable of operating a number of distributed validators."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Validator deposit data:")," This file is used to activate one or more distributed validators on the Ethereum network.")),(0,a.yg)("p",null,"Once the ceremony is complete, all participants should take a backup of the created files. In future versions of Charon, if a participant loses access to these key shares, it will be possible to use a key re-sharing protocol to swap the participants old keys out of a distributed validator in favor of new keys, allowing the rest of a cluster to recover from a set of lost key shares. However for now, without a backup, the safest thing to do would be to exit the validator."),(0,a.yg)("h2",{id:"dkg-verification"},"DKG Verification"),(0,a.yg)("p",null,"For many use cases of distributed validators, the funder/depositor of the validator may not be the same person as the key creators/node operators, as (outside of the base protocol) stake delegation is a common phenomenon. This handover of information introduces a point of trust. How does someone verify that a proposed validator ",(0,a.yg)("inlineCode",{parentName:"p"},"deposit data")," corresponds to a real, fair, DKG with participants the depositor expects?"),(0,a.yg)("p",null,'There are a number of aspects to this trust surface that can be mitigated with a "Don\'t trust, verify" model. Verification for the time being is easier off chain, until things like a ',(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2537"},"BLS precompile")," are brought into the EVM, along with cheap ZKP verification on chain. Some of the questions that can be asked of Distributed Validator Key Generation Ceremonies include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Do the public key shares combine together to form the group public key?",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"This can be checked on chain as it does not require a pairing operation"),(0,a.yg)("li",{parentName:"ul"},"This can give confidence that a BLS pubkey represents a Distributed Validator, but does not say anything about the custody of the keys. (e.g. Was the ceremony sybil attacked, did they collude to reconstitute the group private key etc.)"))),(0,a.yg)("li",{parentName:"ul"},"Do the created BLS public keys attest to their ",(0,a.yg)("inlineCode",{parentName:"li"},"cluster_definition_hash"),"?",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"This is to create a backwards link between newly created BLS public keys and the operator's eth1 addresses that took part in their creation."),(0,a.yg)("li",{parentName:"ul"},"If a proposed distributed validator BLS group public key can produce a signature of the ",(0,a.yg)("inlineCode",{parentName:"li"},"cluster_definition_hash"),", it can be inferred that at least a threshold of the operators signed this data."),(0,a.yg)("li",{parentName:"ul"},"As the ",(0,a.yg)("inlineCode",{parentName:"li"},"cluster_definition_hash")," is the same for all distributed validators created in the ceremony, the signatures can be aggregated into a group signature that verifies all created group keys at once. This makes it cheaper to verify a number of validators at once on chain."))),(0,a.yg)("li",{parentName:"ul"},"Is there either a VSS or PVSS proof of a fair DKG ceremony?",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"VSS (Verifiable Secret Sharing) means only operators can verify fairness, as the proof requires knowledge of one of the secrets."),(0,a.yg)("li",{parentName:"ul"},"PVSS (Publicly Verifiable Secret Sharing) means anyone can verify fairness, as the proof is usually a Zero Knowledge Proof."),(0,a.yg)("li",{parentName:"ul"},"A PVSS of a fair DKG would make it more difficult for operators to collude and undermine the security of the Distributed Validator."),(0,a.yg)("li",{parentName:"ul"},"Zero Knowledge Proof verification on chain is currently expensive, but is becoming achievable through the hard work and research of the many ZK based teams in the industry.")))),(0,a.yg)("h2",{id:"appendix"},"Appendix"),(0,a.yg)("h3",{id:"sample-configuration-and-lock-files"},"Sample Configuration and Lock Files"),(0,a.yg)("p",null,"Refer to the details ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/charon/cluster-configuration"},"here"),"."))}u.isMDXComponent=!0}}]);