"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[1282],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22264:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:4,description:"Run one node in a multi-operator distributed validator cluster using the CLI"},i="Run a cluster using the CLI",l={unversionedId:"int/quickstart/quickstart-cli",id:"int/quickstart/quickstart-cli",title:"Run a cluster using the CLI",description:"Run one node in a multi-operator distributed validator cluster using the CLI",source:"@site/docs/int/quickstart/quickstart-cli.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-cli",permalink:"/docs/next/int/quickstart/quickstart-cli",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/int/quickstart/quickstart-cli.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Run one node in a multi-operator distributed validator cluster using the CLI"},sidebar:"tutorialSidebar",previous:{title:"Run a cluster with MEV-Boost",permalink:"/docs/next/int/quickstart/quickstart-builder-api"},next:{title:"Split existing validator keys",permalink:"/docs/next/int/quickstart/quickstart-split"}},s={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Create and back up a private key for charon",id:"step-1-create-and-back-up-a-private-key-for-charon",level:2},{value:"Step 2. Leader or Creator creates the DKG configuration file and distribute it to cluster operators",id:"step-2-leader-or-creator-creates-the-dkg-configuration-file-and-distribute-it-to-cluster-operators",level:2},{value:"Step 3. Run the DKG",id:"step-3-run-the-dkg",level:2},{value:"Step 4. Start your Distributed Validator Node",id:"step-4-start-your-distributed-validator-node",level:2},{value:"Step 5. Activate the deposit data",id:"step-5-activate-the-deposit-data",level:2},{value:"Step 6 - Optional. Add the Monitoring Credentials",id:"step-6---optional-add-the-monitoring-credentials",level:2},{value:"Step 7. Validator Voluntary Exit",id:"step-7-validator-voluntary-exit",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Other Actions",id:"other-actions",level:2},{value:"Docker power users",id:"docker-power-users",level:3}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-a-cluster-using-the-cli"},"Run a cluster using the CLI"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Charon is in an alpha state and should be used with caution according to its Terms of Use (check latest URL/Docs).")),(0,r.kt)("p",null,"The following instructions aim to assist a group of operators coordinating together to create a distributed validator cluster."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure you have ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,r.kt)("li",{parentName:"ul"},"Ensure you have ",(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")," installed. "),(0,r.kt)("li",{parentName:"ul"},"Make sure ",(0,r.kt)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below."),(0,r.kt)("li",{parentName:"ul"},"Decide who the Leader or Creator of your cluster will be. Only them have to perform ",(0,r.kt)("a",{parentName:"li",href:"#step-2-leader-creates-the-dkg-configuration-file-and-distributes-it-to-everyone-else"},"step 2")," and ",(0,r.kt)("a",{parentName:"li",href:"#step-5-activate-the-deposit-data"},"step 5")," in this quickstart. They do not get any special privilege.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Leader")," case, the operator creating the cluster will also operate a node in the cluster."),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Creator")," case, the cluster is created by an external party to the cluster.")))),(0,r.kt)("h2",{id:"step-1-create-and-back-up-a-private-key-for-charon"},"Step 1. Create and back up a private key for charon"),(0,r.kt)("p",null,"In order to prepare for a distributed key generation ceremony, all operators (including the leader but NOT a creator) need to create an ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/int/faq/errors#enrs-keys"},"ENR")," for their charon client. This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n\n# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.14.4 create enr\n')),(0,r.kt)("p",null,"You should expect to see a console output like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please make sure to create a backup of the private key at ",(0,r.kt)("inlineCode",{parentName:"p"},".charon/charon-enr-private-key"),". Be careful not to commit it to git! ",(0,r.kt)("strong",{parentName:"p"},"If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully."))),(0,r.kt)("p",null,"Finally, share your ENR with the leader or creator so that he/she can proceed to Step 2."),(0,r.kt)("h2",{id:"step-2-leader-or-creator-creates-the-dkg-configuration-file-and-distribute-it-to-cluster-operators"},"Step 2. Leader or Creator creates the DKG configuration file and distribute it to cluster operators"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The leader or creator of the cluster will prepare the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," file for the Distributed Key Generation ceremony using the ",(0,r.kt)("inlineCode",{parentName:"p"},"charon create dkg")," command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# Prepare an environment variable file\ncp .env.create_dkg.sample .env.create_dkg\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Populate the ",(0,r.kt)("inlineCode",{parentName:"p"},".env.create_dkg")," file created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster name"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"fee recipient")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"withdrawal Ethereum addresses"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"ENRs")," of all the operators participating in the cluster."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The file generated is hidden by default. To view it, run ",(0,r.kt)("inlineCode",{parentName:"li"},"ls -al")," in your terminal. Else, if you are on ",(0,r.kt)("inlineCode",{parentName:"li"},"macOS"),", press ",(0,r.kt)("inlineCode",{parentName:"li"},"Cmd + Shift + .")," to view all hidden files in the finder application."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"charon create dkg")," command that generates DKG cluster-definition.json file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'docker run --rm -v "$(pwd):/opt/charon" --env-file .env.create_dkg obolnetwork/charon:v0.14.4 create dkg\n')),(0,r.kt)("p",{parentName:"li"},"This command should output a file at ",(0,r.kt)("inlineCode",{parentName:"p"},".charon/cluster-definition.json"),". This file needs to be shared with the other operators in a cluster."))),(0,r.kt)("h2",{id:"step-3-run-the-dkg"},"Step 3. Run the DKG"),(0,r.kt)("p",null,"After receiving the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," file created by the leader, cluster operators should ideally save it in the ",(0,r.kt)("inlineCode",{parentName:"p"},".charon/")," folder that was created during step 1, alternatively the ",(0,r.kt)("inlineCode",{parentName:"p"},"--definition-file")," flag can override the default expected location for this file."),(0,r.kt)("p",null,"Every cluster member then participates in the DKG ceremony. For Charon v1, this needs to happen relatively synchronously between participants at an agreed time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Participate in DKG ceremony, this will create .charon/cluster-lock.json, .charon/deposit-data.json and .charon/validator_keys\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.14.4 dkg\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a helpful ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=94Pkovp5zoQ&ab_channel=ObolNetwork"},"video walkthrough"),".")),(0,r.kt)("p",null,"Assuming the DKG is successful, a number of artefacts will be created in the ",(0,r.kt)("inlineCode",{parentName:"p"},".charon")," folder. These include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"deposit-data.json")," file. This contains the information needed to activate the validator on the Ethereum network."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster-lock.json")," file. This contains the information needed by charon to operate the distributed validator cluster with its peers."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"validator_keys/")," folder. This folder contains the private key shares and passwords for the created distributed validators.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please make sure to create a backup of ",(0,r.kt)("inlineCode",{parentName:"p"},".charon/validator_keys"),". ",(0,r.kt)("strong",{parentName:"p"},"If you lose your keys you won't be able to start the DV cluster successfully."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-lock")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"deposit-data")," files are identical for each operator and can be copied if lost.")),(0,r.kt)("h2",{id:"step-4-start-your-distributed-validator-node"},"Step 4. Start your Distributed Validator Node"),(0,r.kt)("p",null,"With the DKG ceremony over, the last phase before activation is to prepare your node for validating over the long term. This repo is configured to sync an execution layer client (",(0,r.kt)("inlineCode",{parentName:"p"},"geth"),") and a consensus layer client (",(0,r.kt)("inlineCode",{parentName:"p"},"lighthouse"),")."),(0,r.kt)("p",null,"Before completing these instructions, you should assign a static local IP address to your device (extending the DHCP reservation indefinitely or removing the device from the DCHP pool entirely if you prefer), and port forward the TCP protocol on the public port ",(0,r.kt)("inlineCode",{parentName:"p"},":3610")," on your router to your device's local IP address on the same port. This step is different for every person's home internet, and can be complicated by the presence of dynamic public IP addresses. We are currently working on making this as easy as possible, but for the time being, a distributed validator cluster isn't going to work very resiliently if all charon nodes cannot talk directly to one another and instead need to have an intermediary node forwarding traffic to them."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Caution"),": If you manually update ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," to mount ",(0,r.kt)("inlineCode",{parentName:"p"},"lighthouse")," from your locally synced ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.lighthouse"),", the whole chain database may get deleted. It'd be best not to manually update as ",(0,r.kt)("inlineCode",{parentName:"p"},"lighthouse")," checkpoint-syncs so the syncing doesn't take much time."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": If you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"geth")," node already synced, you can simply copy over the directory. For ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"cp -r ~/.ethereum/goerli data/geth"),". This makes everything faster since you start from a synced geth node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Delete lighthouse data if it exists\nrm -r ./data/lighthouse\n\n# Spin up a Distributed Validator Node with a Validator Client\ndocker compose up\n\n# Open Grafana dashboard\nopen http://localhost:3000/d/singlenode/\n")),(0,r.kt)("p",null,"You should use the grafana dashboard to infer whether your cluster is healthy. In particular you should check:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"That your charon client can connect to the configured beacon client."),(0,r.kt)("li",{parentName:"ul"},"That your charon client can connect to all peers.")),(0,r.kt)("p",null,"Most components in the dashboard have some help text there to assist you in understanding your cluster performance."),(0,r.kt)("p",null,"You might notice that there are logs indicating that a validator cannot be found and that APIs are returning 404. This is to be expected at this point, as the validator public keys listed in the lock file have not been deposited and acknowledged on the consensus layer yet (usually ~16 hours after the deposit is made)."),(0,r.kt)("p",null,"If at any point you need to turn off your node, you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Shut down the currently running distributed validator node\ndocker compose down\n")),(0,r.kt)("h2",{id:"step-5-activate-the-deposit-data"},"Step 5. Activate the deposit data"),(0,r.kt)("p",null,"Congrats \ud83c\udf89 if your cluster have gotten to this step of the quickstart and have successfully created a distributed validator together. "),(0,r.kt)("p",null,"If you have connected all of your charon clients together such that the monitoring indicates that they are all healthy and ready to operate, ",(0,r.kt)("strong",{parentName:"p"},"ONE operator"),", usually the leader, may process to activate this deposit data with the existing ",(0,r.kt)("a",{parentName:"p",href:"https://goerli.launchpad.ethereum.org/"},"staking launchpad"),"."),(0,r.kt)("p",null,"This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster."),(0,r.kt)("h2",{id:"step-6---optional-add-the-monitoring-credentials"},"Step 6 - Optional. Add the Monitoring Credentials"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This step is ",(0,r.kt)("strong",{parentName:"p"},"optional")," but will help the Obol Team monitor the health of your cluster. It can only be perfomed if the Obol Team has given you a credential to use.")),(0,r.kt)("p",null,"You may have been provided with ",(0,r.kt)("strong",{parentName:"p"},"Monitoring Credentials")," used to push distributed validator metrics to our central prometheus service to monitor, analyze and improve your cluster's performance. The provided credentials needs to be added in ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus/prometheus.yml")," replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"$PROM_REMOTE_WRITE_TOKEN")," and will look like:\n",(0,r.kt)("inlineCode",{parentName:"p"},"obol20!tnt8U!C..."),"."),(0,r.kt)("p",null,"The final ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus/prometheus.yml")," file would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"global:\n  scrape_interval:     30s # Set the scrape interval to every 30 seconds.\n  evaluation_interval: 30s # Evaluate rules every 30 seconds.\n\nremote_write:\n  - url: https://vm.monitoring.gcp.obol.tech/write\n    authorization:\n      credentials: obol20!tnt8U!C...\n\nscrape_configs:\n  - job_name: 'charon'\n    static_configs:\n      - targets: ['charon:3620']\n  - job_name: 'teku'\n    static_configs:\n      - targets: ['teku:8008']\n  - job_name: 'node-exporter'\n    static_configs:\n      - targets: ['node-exporter:9100']\n")),(0,r.kt)("h2",{id:"step-7-validator-voluntary-exit"},"Step 7. Validator Voluntary Exit"),(0,r.kt)("p",null,"Exiting your validator(s) can be useful in situations where you want to stop staking and withdraw your staked ETH."),(0,r.kt)("p",null,"\ud83d\udc49 Follow the exit guide ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/int/quickstart/quickstart-exit"},"here")),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"If you have gotten this far through the process, and whether you succeeded or failed at running the distributed validator successfully, we would like to hear your feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/n6ebKsX46w"},"Discord"),". Also, feel free to add issues to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork"},"GitHub repos"),"."),(0,r.kt)("h2",{id:"other-actions"},"Other Actions"),(0,r.kt)("p",null,"The above steps should get you running a distributed validator cluster. The following are some extra steps you may want to take either to improve the resilience and performance of your distributed validator cluster."),(0,r.kt)("h3",{id:"docker-power-users"},"Docker power users"),(0,r.kt)("p",null,'This section of the readme is intended for the "docker power users", i.e., for the ones who are familiar with working with ',(0,r.kt)("inlineCode",{parentName:"p"},"docker compose")," and want to have more flexibility and power to change the default configuration."),(0,r.kt)("p",null,'We use the "Multiple Compose File" feature which provides a very powerful way to override any configuration in ',(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," without needing to modify git-checked-in files since that results in conflicts when upgrading this repo.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/extends/#multiple-compose-files"},"this")," for more details."),(0,r.kt)("p",null,"There are two additional files in this repository, ",(0,r.kt)("inlineCode",{parentName:"p"},"compose-debug.yml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.override.yml.sample"),", alongwith the default ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file that you can use for this purpose."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compose-debug.yml")," contains some additional containers that developers can use for debugging, like ",(0,r.kt)("inlineCode",{parentName:"li"},"jaeger"),". To achieve this, you can run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker compose -f docker-compose.yml -f compose-debug.yml up\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.override.yml.sample")," is intended to override the default configuration provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". This is useful when, for example, you wish to add port mappings or want to disable a container.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To use it, just copy the sample file to ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.override.yml")," and customise it to your liking. Please create this file ONLY when you want to tweak something. This is because the default override file is empty and docker errors if you provide an empty compose file."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp docker-compose.override.yml.sample docker-compose.override.yml\n\n# Tweak docker-compose.override.yml and then run docker compose up\ndocker compose up\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can also run all these compose files together. This is desirable when you want to use both the features. For example, you may want to have some debugging containers AND also want to override some defaults. To achieve this, you can run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker compose -f docker-compose.yml -f docker-compose.override.yml -f compose-debug.yml up\n")))}c.isMDXComponent=!0}}]);