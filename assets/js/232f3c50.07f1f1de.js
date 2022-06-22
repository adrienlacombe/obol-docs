"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[1536],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={description:"A go-based middleware client for taking part in Distributed Validator clusters."},l="Charon CLI reference",d={unversionedId:"dv/charon_cli_reference",id:"dv/charon_cli_reference",title:"Charon CLI reference",description:"A go-based middleware client for taking part in Distributed Validator clusters.",source:"@site/docs/dv/09_charon_cli_reference.md",sourceDirName:"dv",slug:"/dv/charon_cli_reference",permalink:"/docs/next/dv/charon_cli_reference",draft:!1,editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/docs/dv/09_charon_cli_reference.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"A go-based middleware client for taking part in Distributed Validator clusters."},sidebar:"tutorialSidebar",previous:{title:"Cluster Configuration",permalink:"/docs/next/dv/distributed-validator-cluster-manifest"},next:{title:"Distributed Validator Key Generation",permalink:"/docs/next/dvk/distributed-validator-keys"}},c={},p=[{value:"Available Commands",id:"available-commands",level:3},{value:"<code>create</code> subcommand",id:"create-subcommand",level:3},{value:"Creating an ENR for charon",id:"creating-an-enr-for-charon",level:4},{value:"Create a full cluster locally",id:"create-a-full-cluster-locally",level:4},{value:"Creating the configuration for a DKG Ceremony",id:"creating-the-configuration-for-a-dkg-ceremony",level:4},{value:"Performing a DKG Ceremony",id:"performing-a-dkg-ceremony",level:3},{value:"Run the Charon middleware",id:"run-the-charon-middleware",level:3}],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"charon-cli-reference"},"Charon CLI reference"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"charon")," client is under heavy development, interfaces are subject to change until a first major version is published. "))),(0,o.kt)("p",null,"The following is a reference for charon version ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases/tag/v0.7.0"},(0,o.kt)("inlineCode",{parentName:"a"},"v0.7.0")),". Find the latest release on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases"},"our Github"),"."),(0,o.kt)("h3",{id:"available-commands"},"Available Commands"),(0,o.kt)("p",null,"The following are the top-level commands available to use. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon help\nCharon enables the operation of Ethereum validators in a fault tolerant manner by splitting the validating keys across a group of trusted parties using threshold cryptography.\n\nUsage:\n  charon [command]\n\nAvailable Commands:\n  bootnode    Start a discv5 bootnode server\n  completion  Generate the autocompletion script for the specified shell\n  create      Create artifacts for a distributed validator cluster\n  dkg         Participate in a Distributed Key Generation ceremony\n  enr         Print this client\'s Ethereum Node Record\n  help        Help about any command\n  run         Run the charon middleware client\n  version     Print version and exit\n\nFlags:\n  -h, --help   Help for charon\n\nUse "charon [command] --help" for more information about a command.\n')),(0,o.kt)("h3",{id:"create-subcommand"},(0,o.kt)("inlineCode",{parentName:"h3"},"create")," subcommand"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," subcommand handles the creation of artifacts needed by charon to operate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon create --help\nCreate artifacts for a distributed validator cluster. These commands can be used to facilitate the creation of a distributed validator cluster between a group of operators by performing a distributed key generation ceremony, or they can be used to create a local cluster for single operator use cases.\n\nUsage:\n  charon create [command]\n\nAvailable Commands:\n  cluster     Create private keys and configuration files needed to run a distributed validator cluster locally\n  dkg         Create the configuration for a new Distributed Key Generation ceremony using charon dkg\n  enr         Create an Ethereum Node Record (ENR) private key to identify this charon client\n\nFlags:\n  -h, --help   Help for create\n\nUse "charon create [command] --help" for more information about a command.\n\n')),(0,o.kt)("h4",{id:"creating-an-enr-for-charon"},"Creating an ENR for charon"),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"enr")," is an Ethereum Node Record. It is used to identify this charon client to its other counterparty charon clients across the internet. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon create enr --help\nCreate an Ethereum Node Record (ENR) private key to identify this charon client\n\nUsage:\n  charon create enr [flags]\n\nFlags:\n      --data-dir string                The directory where charon will store all its internal data (default ".charon")\n  -h, --help                           Help for enr\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.\n      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. (default [http://bootnode.gcp.obol.tech:16000/enr])\n      --p2p-bootnodes-from-lockfile    Enables using cluster lock ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:3610])\n      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:3630")\n')),(0,o.kt)("h4",{id:"create-a-full-cluster-locally"},"Create a full cluster locally"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"charon create cluster")," creates a set of distributed validators locally, including the private keys, a ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.lock")," file, and deposit and exit data. However, this command should only be used for solo use of distributed validators. To run a Distributed Validator with a group of operators, it is preferable to create these artifacts using the ",(0,o.kt)("inlineCode",{parentName:"p"},"charon dkg")," command. That way, no single operator custodies all of the private keys to a distributed validator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon create cluster --help\nCreates a local charon cluster configuration including validator keys, charon p2p keys, and a cluster manifest. See flags for supported features.\n\nUsage:\n  charon create cluster [flags]\n\nFlags:\n      --clean                       Delete the cluster directory before generating it.\n      --cluster-dir string          The target folder to create the cluster in. (default ".charon/cluster")\n  -h, --help                        Help for cluster\n      --network string              Ethereum network to create validators for. Options: mainnet, prater, kintsugi, kiln, gnosis. (default "prater")\n  -n, --nodes int                   The number of charon nodes in the cluster. (default 4)\n      --split-existing-keys         Split an existing validator\'s private key into a set of distributed validator private key shares. Does not re-create deposit data for this key.\n      --split-keys-dir string       Directory containing keys to split. Expects keys in keystore-*.json and passwords in keystore-*.txt. Requires --split-existing-keys.\n  -t, --threshold int               The threshold required for signature reconstruction. Minimum is n-(ceil(n/3)-1). (default 3)\n      --withdrawal-address string   Ethereum address to receive the returned stake and accrued rewards. (default "0x0000000000000000000000000000000000000000")\n')),(0,o.kt)("h4",{id:"creating-the-configuration-for-a-dkg-ceremony"},"Creating the configuration for a DKG Ceremony"),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"charon create dkg")," command creates a cluster_definition file used for the ",(0,o.kt)("inlineCode",{parentName:"p"},"charon dkg")," command. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon create dkg --help\nCreate a cluster definition file that will be used by all participants of a DKG.\n\nUsage:\n  charon create dkg [flags]\n\nFlags:\n      --dkg-algorithm string           DKG algorithm to use; default, keycast, frost (default "default")\n      --fee-recipient-address string   Optional Ethereum address of the fee recipient\n  -h, --help                           Help for dkg\n      --name string                    Optional cosmetic cluster name\n      --network string                 Ethereum network to create validators for. Options: mainnet, prater, kintsugi, kiln, gnosis. (default "prater")\n      --num-validators int             The number of distributed validators the cluster will manage (32ETH staked for each). (default 1)\n      --operator-enrs strings          Comma-separated list of each operator\'s Charon ENR address\n      --output-dir string              The folder to write the output cluster-definition.json file to. (default ".charon")\n  -t, --threshold int                  The threshold required for signature reconstruction. Minimum is n-(ceil(n/3)-1). (default 3)\n      --withdrawal-address string      Withdrawal Ethereum address (default "0x0000000000000000000000000000000000000000")\n')),(0,o.kt)("h3",{id:"performing-a-dkg-ceremony"},"Performing a DKG Ceremony"),(0,o.kt)("p",null,"Th ",(0,o.kt)("inlineCode",{parentName:"p"},"charon dkg")," command takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster_definition.json")," file that instructs charon on the terms of a new distributed validator cluster to be created. Charon establishes communication with the other nodes identified in the file, performs a distributed key generation ceremony to create the required threshold private keys, and signs deposit and exit data for each new distributed validator. The command outputs the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.lock")," file and key shares for each Distributed Validator created. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon dkg --help\nParticipate in a distributed key generation ceremony for a specific cluster definition that creates\ndistributed validator key shares and a final cluster lock configuration. Note that all other cluster operators should run\nthis command at the same time.\n\nUsage:\n  charon dkg [flags]\n\nFlags:\n      --data-dir string                The directory where charon will store all its internal data (default ".charon")\n      --definition-file string         The path to the cluster definition file. (default ".charon/cluster-definition.json")\n  -h, --help                           Help for dkg\n      --log-format string              Log format; console, logfmt or json (default "console")\n      --log-level string               Log level; debug, info, warn or error (default "info")\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.\n      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. (default [http://bootnode.gcp.obol.tech:16000/enr])\n      --p2p-bootnodes-from-lockfile    Enables using cluster lock ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:3610])\n      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:3630")\n')),(0,o.kt)("h3",{id:"run-the-charon-middleware"},"Run the Charon middleware"),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," command accepts a ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.lock")," file that was created either via a ",(0,o.kt)("inlineCode",{parentName:"p"},"charon create cluster")," command or ",(0,o.kt)("inlineCode",{parentName:"p"},"charon dkg"),". This lock file outlines the nodes in the cluster and the distributed validators they operate on behalf of. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon run --help\nStarts the long-running Charon middleware process to perform distributed validator duties.\n\nUsage:\n  charon run [flags]\n\nFlags:\n      --beacon-node-endpoint string    Beacon node endpoint URL (default "http://localhost/")\n      --data-dir string                The directory where charon will store all its internal data (default ".charon")\n      --feature-set string             Minimum feature set to enable by default: alpha, beta, or stable. Warning: modify at own risk. (default "stable")\n      --feature-set-disable strings    Comma-separated list of features to disable, overriding the default minimum feature set.\n      --feature-set-enable strings     Comma-separated list of features to enable, overriding the default minimum feature set.\n  -h, --help                           Help for run\n      --jaeger-address string          Listening address for jaeger tracing\n      --jaeger-service string          Service name used for jaeger tracing (default "charon")\n      --lock-file string               The path to the cluster lock file defining distributed validator cluster (default ".charon/cluster-lock.json")\n      --log-format string              Log format; console, logfmt or json (default "console")\n      --log-level string               Log level; debug, info, warn or error (default "info")\n      --monitoring-address string      Listening address (ip and port) for the monitoring API (prometheus, pprof) (default "127.0.0.1:3620")\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.\n      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. (default [http://bootnode.gcp.obol.tech:16000/enr])\n      --p2p-bootnodes-from-lockfile    Enables using cluster lock ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:3610])\n      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:3630")\n      --simnet-beacon-mock             Enables an internal mock beacon node for running a simnet.\n      --simnet-validator-mock          Enables an internal mock validator client when running a simnet. Requires simnet-beacon-mock.\n      --validator-api-address string   Listening address (ip and port) for validator-facing traffic proxying the beacon-node API (default "127.0.0.1:3600")\n')))}f.isMDXComponent=!0}}]);