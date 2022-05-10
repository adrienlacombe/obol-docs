"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[8858],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8238:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={description:"A go-based middleware client for taking part in Distributed Validator clusters."},l="Charon CLI reference",c={unversionedId:"dv/charon_cli_reference",id:"version-v0.3.0/dv/charon_cli_reference",isDocsHomePage:!1,title:"Charon CLI reference",description:"A go-based middleware client for taking part in Distributed Validator clusters.",source:"@site/versioned_docs/version-v0.3.0/dv/09_charon_cli_reference.md",sourceDirName:"dv",slug:"/dv/charon_cli_reference",permalink:"/docs/dv/charon_cli_reference",editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/versioned_docs/version-v0.3.0/dv/09_charon_cli_reference.md",tags:[],version:"v0.3.0",sidebarPosition:9,frontMatter:{description:"A go-based middleware client for taking part in Distributed Validator clusters."},sidebar:"version-v0.3.0/tutorialSidebar",previous:{title:"Distributed validator cluster manifest",permalink:"/docs/dv/distributed-validator-cluster-manifest"},next:{title:"Distributed validator keys",permalink:"/docs/dvk/distributed-validator-keys"}},d=[],p={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"charon-cli-reference"},"Charon CLI reference"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"charon")," client is under heavy development, interfaces are subject to change until a first major version is published. "))),(0,o.kt)("p",null,"The following is a reference for charon version ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases/tag/v0.3.0"},(0,o.kt)("inlineCode",{parentName:"a"},"0.3.0")),". Find the latest release on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases"},"our Github"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon --help\nCharon enables the operation of Ethereum validators in a fault tolerant manner by splitting the validating keys across a group of trusted parties using threshold cryptography.\n\nUsage:\n  charon [command]\n\nAvailable Commands:\n  bootnode       Starts a p2p-udp discv5 bootnode\n  completion     Generate the autocompletion script for the specified shell\n  create-cluster Create a local charon cluster\n  enr            Return this node\'s ENR\n  gen-p2pkey     Generates a new p2p key\n  help           Help about any command\n  run            Runs the Charon middleware\n  version        Print version and exit\n\nFlags:\n  -h, --help   Help for charon\n\nUse "charon [command] --help" for more information about a command.\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon create-cluster --help\nCreate a local charon cluster including validator keys, charon p2p keys, and a cluster manifest. See flags for supported features.\n\nUsage:\n  charon create-cluster [flags]\n\nFlags:\n      --clean                   Delete the cluster directory before generating it.\n      --cluster-dir string      The target folder to create the cluster in. (default "./charon/cluster")\n      --config                  Enables creation of local non-docker config files.\n      --config-binary string    Path of the charon binary to use in the config files. Defaults to this binary if empty. Requires --config.\n      --config-port-start int   Starting port number used in config files. Requires --config. (default 16000)\n      --config-simnet           Configures a simulated network cluster with mock beacon node and mock validator clients. It showcases a running charon in isolation. Requires --config. (default true)\n  -h, --help                    Help for create-cluster\n  -n, --nodes int               The number of charon nodes in the cluster. (default 4)\n      --split-existing-keys     Enables splitting of existing non-dvt validator keys into distributed threshold private shares (instead of creating new random keys).\n      --split-keys-dir string   Directory containing keys to split. Expects keys in keystore-*.json and passwords in keystore-*.txt. Requires --split-validator-keys.\n  -t, --threshold int           The threshold required for signature reconstruction. Minimum is n-(ceil(n/3)-1). (default 3)\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon run --help\nStarts the long-running Charon middleware process to perform distributed validator duties.\n\nUsage:\n  charon run [flags]\n\nFlags:\n      --beacon-node-endpoint string    Beacon node endpoint URL (default "http://localhost/")\n      --data-dir string                The directory where charon will store all its internal data (default "./charon/data")\n  -h, --help                           Help for run\n      --jaeger-address string          Listening address for jaeger tracing\n      --jaeger-service string          Service name used for jaeger tracing (default "charon")\n      --log-format string              Log format; console, logfmt or json (default "console")\n      --log-level string               Log level; debug, info, warn or error (default "info")\n      --manifest-file string           The path to the manifest file defining distributed validator cluster (default "./charon/manifest.json")\n      --monitoring-address string      Listening address (ip and port) for the monitoring API (prometheus, pprof) (default "127.0.0.1:16001")\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-bootmanifest               Enables using manifest ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.\n      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.\n      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. Example: enode://<hex node id>@10.3.58.6:30303?discport=30301.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-peerdb string              Path to store a discv5 peer database. Empty default results in in-memory database.\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:16003])\n      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:16004")\n      --simnet-beacon-mock             Enables an internal mock beacon node for running a simnet.\n      --simnet-validator-mock          Enables an internal mock validator client when running a simnet. Requires simnet-beacon-mock.\n      --validator-api-address string   Listening address (ip and port) for validator-facing traffic proxying the beacon-node API (default "127.0.0.1:16002")\n')))}u.isMDXComponent=!0}}]);