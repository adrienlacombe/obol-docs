"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[93184],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>g});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,g=u["".concat(l,".").concat(p)]||u[p]||f[p]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},28956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(45072),i=(t(11504),t(95788));const a={description:"Documenting a Distributed Validator Cluster in a standardised file format"},o="Cluster Configuration",s={unversionedId:"dv/distributed-validator-cluster-manifest",id:"version-v0.6.1/dv/distributed-validator-cluster-manifest",title:"Cluster Configuration",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/versioned_docs/version-v0.6.1/dv/08_distributed-validator-cluster-manifest.md",sourceDirName:"dv",slug:"/dv/distributed-validator-cluster-manifest",permalink:"/docs/v0.6.1/dv/distributed-validator-cluster-manifest",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.6.1/dv/08_distributed-validator-cluster-manifest.md",tags:[],version:"v0.6.1",sidebarPosition:8,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format"},sidebar:"tutorialSidebar",previous:{title:"P2P interface",permalink:"/docs/v0.6.1/dv/p2p-interface"},next:{title:"Charon CLI reference",permalink:"/docs/v0.6.1/dv/charon_cli_reference"}},l={},d=[{value:"Cluster Configuration Files",id:"cluster-configuration-files",level:2}],c={toc:d},u="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"cluster-configuration"},"Cluster Configuration"),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the ",(0,i.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/"},"EIP process")," when appropriate.")),(0,i.yg)("p",null,"This document describes the configuration options for running a charon client (or cluster) locally or in production."),(0,i.yg)("h2",{id:"cluster-configuration-files"},"Cluster Configuration Files"),(0,i.yg)("p",null,"A charon cluster is configured in two steps:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"cluster-definition.json")," which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"cluster-lock.json")," which includes and extends ",(0,i.yg)("inlineCode",{parentName:"li"},"cluster-definition.json")," with distributed validator BLS public key shares.")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"charon create dkg")," command is used to create ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," file which is used as input to ",(0,i.yg)("inlineCode",{parentName:"p"},"charon dkg"),"."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"charon create cluster")," command combines both steps into one and just outputs the final ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," without a DKG step."),(0,i.yg)("p",null,"The schema of the ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," is defined as:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "v1.0.0",                  // Schema version\n  "num_validators": 100,                // Number of validators to create in cluster.lock\n  "threshold": 3,                       // Optional threshold required for signature reconstruction\n  "uuid": "1234-abcdef-1234-abcdef",    // Random unique identifier\n  "name": "best cluster",               // Optional name field, cosmetic.\n  "fee_recipient_address":"0x123..abfc",// ETH1 fee_recipient address\n  "withdrawal_address": "0x123..abfc",  // ETH1 withdrawal address\n  "algorithm": "foo_dkg_v1" ,           // Optional DKG algorithm\n  "fork_version": "0x00112233",         // Fork version lock, enum of known values\n  "operators": [\n    {\n      "address": "0x123..abfc",         // ETH1 operator identify address\n      "enr": "enr://abcdef...12345",    // charon client ENR\n      "signature": "123456...abcdef",   // Signature of enr by ETH1 address priv key\n      "nonce": 1                        // Nonce of signature\n    }\n  ],\n  "definition_hash": "abcdef...abcedef",// Hash of above field (except free text)\n  "operator_signatures": [              // Operator signatures (seals) of definition hash\n    "123456...abcdef",\n    "123456...abcdef"\n  ]\n}\n')),(0,i.yg)("p",null,"The above ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-definition.json")," is provided as input to the DKG which generates keys and the ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," file."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"cluster-lock.json")," has the following schema:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,\n  "distributed_validators": [                               // Length equaled to num_validators.\n    {\n      "distributed_public_key":  "0x123..abfc",             // DV root pubkey\n      "threshold_verifiers": [ "oA8Z...2XyT", "g1q...icu"], // length of threshold\n      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually\n    }\n  ],\n  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators\n  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.\n}\n')))}f.isMDXComponent=!0}}]);