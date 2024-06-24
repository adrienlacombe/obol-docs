"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[23720],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=d(a),u=r,h=g["".concat(l,".").concat(u)]||g[u]||p[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},32224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const o={sidebar_position:2,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},i="Monitoring your Node",s={unversionedId:"advanced/monitoring",id:"advanced/monitoring",title:"Monitoring your Node",description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster",source:"@site/docs/advanced/monitoring.md",sourceDirName:"advanced",slug:"/advanced/monitoring",permalink:"/docs/next/advanced/monitoring",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/advanced/monitoring.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},sidebar:"tutorialSidebar",previous:{title:"Network tests",permalink:"/docs/next/advanced/test-command"},next:{title:"Push Metrics to Obol Monitoring",permalink:"/docs/next/advanced/obol-monitoring"}},l={},d=[{value:"Setting Up a Contact Point",id:"setting-up-a-contact-point",level:2},{value:"Best Practices for Monitoring Charon Nodes &amp; Cluster",id:"best-practices-for-monitoring-charon-nodes--cluster",level:2},{value:"Third-Party Services for Uptime Testing",id:"third-party-services-for-uptime-testing",level:2},{value:"Key metrics to watch to verify node health based on jobs",id:"key-metrics-to-watch-to-verify-node-health-based-on-jobs",level:2}],c={toc:d},g="wrapper";function p(e){let{components:t,...o}=e;return(0,r.yg)(g,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"monitoring-your-node"},"Monitoring your Node"),(0,r.yg)("p",null,"This comprehensive guide will assist you in effectively monitoring your Charon clusters and setting up alerts by running your own Prometheus and Grafana server. If you want to use Obol\u2019s ",(0,r.yg)("a",{parentName:"p",href:"https://grafana.monitoring.gcp.obol.tech/d/d895e47a-3c2d-46b7-9b15-8f31202681af/clusters-aggregate-view?orgId=6"},"public dashboard")," instead of running your servers, refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/advanced/obol-monitoring"},"this section")," in Obol docs that teaches you how to push Prometheus metrics to Obol."),(0,r.yg)("p",null,"To explain quickly, Prometheus generates the metrics and Grafana visualizes them. To learn more about Prometheus and Grafana, visit ",(0,r.yg)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-prometheus/"},"here"),". If you are using ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://github.com/ObolNetwork/charon-distributed-validator-node"},"CDVN repository"))," or ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster"},"CDVC repository")),", then Prometheus and Grafana are part of docker compose file and will be installed when you run ",(0,r.yg)("inlineCode",{parentName:"p"},"docker compose up"),"."),(0,r.yg)("p",null,"The local Grafana server will have a few pre-built dashboards:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Charon Overview"),(0,r.yg)("p",{parentName:"li"},"This is the main dashboard that provides all the relavant details about the Charon node, for example - peer connectivity, duty completion, health of beacon node and downstream validator, etc. To open, navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"charon-distributed-validator-node")," directory and open the following ",(0,r.yg)("inlineCode",{parentName:"p"},"uri"),"  in the browser ",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:3000/d/d6qujIJVk/"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Single Charon Node Dashboard (deprecated)"),(0,r.yg)("p",{parentName:"li"},"This is an older dashboard Charon node monitoring which is now deprecated. If you are still using it, we would highly recommend to move to Charon Overview for most up to date panels.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Charon Log Dashboard"),(0,r.yg)("p",{parentName:"li"},"This dashboard can be used to query the logs emitted while running your Charon node. It utilises ",(0,r.yg)("a",{parentName:"p",href:"https://grafana.com/oss/loki/"},"Grafana Loki"),". This dashboard is not active by default and should only be used in debug mode. Refer to ",(0,r.yg)("a",{parentName:"p",href:"./adv-docker-configs"},"advanced docker config")," section on how to set up a debug mode."))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Alert Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Troubleshoot"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ClusterBeaconNodeDown"),(0,r.yg)("td",{parentName:"tr",align:null},"This alert is activated when the beacon node in a the cluster is offline. The beacon node is crucial for validating transactions and producing new blocks. Its unavailability could disrupt the overall functionality of the cluster."),(0,r.yg)("td",{parentName:"tr",align:null},"Most likely data is corrupted. Wipe data from the point you know data was corrupted and restart beacon node so it can be synced again.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ClusterMissedAttestations"),(0,r.yg)("td",{parentName:"tr",align:null},"This alert indicates that there have been missed attestations in the cluster. Missed attestations may suggest that validators are not operating correctly, compromising the security and efficiency of the cluster."),(0,r.yg)("td",{parentName:"tr",align:null},"This alert is triggered when 3 attestation are missed in 2 minutes. Check if the minimum threshold of peers are online. If correct, check for beacon node API errors and downstream validator errors using Loki. Lastly, debug from Docker using ",(0,r.yg)("inlineCode",{parentName:"td"},"docker compose debug"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ClusterInUnknownStatus"),(0,r.yg)("td",{parentName:"tr",align:null},"This alert is designed to activate when a node within the cluster is detected to be in an unknown state. The condition is evaluated by checking whether the maximum of the ",(0,r.yg)("inlineCode",{parentName:"td"},"app_monitoring_readyz")," metric is 0."),(0,r.yg)("td",{parentName:"tr",align:null},"This is most likely a bug in Charon. Report to us via ",(0,r.yg)("a",{parentName:"td",href:"https://discord.com/channels/849256203614945310/970759460693901362"},"Discord"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ClusterInsufficientPeers"),(0,r.yg)("td",{parentName:"tr",align:null},"This alert is set to activate when the number of peers for a node in the cluster is insufficient. The condition is evaluated by checking whether the maximum of the ",(0,r.yg)("inlineCode",{parentName:"td"},"app_monitoring_readyz")," equals 4."),(0,r.yg)("td",{parentName:"tr",align:null},"If you are running group cluster, check with other peers to troubleshoot the issue. If you are running solo cluster, look into other machines running the DVs to find the problem.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ClusterFailureRate"),(0,r.yg)("td",{parentName:"tr",align:null},"This alert is activated when the failure rate of the cluster exceeds a certain threshold, more specifically - more than 5% failures in duties in the last 6 hours."),(0,r.yg)("td",{parentName:"tr",align:null},"Check the upstream and downstream dependencies, latency and hardware issues.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ClusterVCMissingValidators"),(0,r.yg)("td",{parentName:"tr",align:null},"This alert is activated if any validators in the cluster are missing. This happens when validator client cannot load validator keys in the past 10 minutes."),(0,r.yg)("td",{parentName:"tr",align:null},"Find if validator keys are missing and load them.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ClusterHighPctFailedSyncMsgDuty"),(0,r.yg)("td",{parentName:"tr",align:null},'This alert is activated if a high percentage of sync message duties failed in the cluster. The alert is activated if the sum of the increase in failed duties tagged with "sync_message" in the last hour divided by the sum of the increase in total duties tagged with "sync_message" in the last hour is greater than 10%.'),(0,r.yg)("td",{parentName:"tr",align:null},"This may be due to limitations in beacon node performance on nodes within the cluster. In charon, this duty is the most demanding, however, an increased failure rate does not impact rewards.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ClusterNumConnectedRelays"),(0,r.yg)("td",{parentName:"tr",align:null},"This alert is activated if the number of connected relays in the cluster falls to 0."),(0,r.yg)("td",{parentName:"tr",align:null},"Make sure correct relay is configured. If you still get the error report to us via ",(0,r.yg)("a",{parentName:"td",href:"https://discord.com/channels/849256203614945310/970759460693901362"},"Discord"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PeerPingLatency"),(0,r.yg)("td",{parentName:"tr",align:null},"This alert is activated if the 90th percentile of the ping latency to the peers in a cluster exceeds 400ms within 2 minutes."),(0,r.yg)("td",{parentName:"tr",align:null},"Make sure to set up stable and high speed internet connection. If you have geographically distributed nodes, make sure latency does not go over 250 ms.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ClusterBeaconNodeZeroPeers"),(0,r.yg)("td",{parentName:"tr",align:null},"This alert is activated when beacon node cannot find peers."),(0,r.yg)("td",{parentName:"tr",align:null},"Go to docs of beacon node client to troubleshoot. Make sure there is no port overlap and p2p discovery is open.")))),(0,r.yg)("h2",{id:"setting-up-a-contact-point"},"Setting Up a Contact Point"),(0,r.yg)("p",null,"When alerts are triggered, they are routed to contact points according notification policies. For this, contact points must be added. Grafana supports several kind of contact points like email, PagerDuty, Discord, Slack, Telegram etc. This document will teach how to add Discord channel as contact point."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"On left nav bar in Grafana console, under ",(0,r.yg)("inlineCode",{parentName:"p"},"Alerts"),"  section, click on contact points.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("inlineCode",{parentName:"p"},"+ Add contact point"),". It will show following page. Choose Discord in the  ",(0,r.yg)("inlineCode",{parentName:"p"},"Integration")," drop down."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"AlertsContactPoint",src:a(16626).A,width:"2256",height:"1264"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Give a descriptive name to the alert. Create a channel in Discord and copy its ",(0,r.yg)("inlineCode",{parentName:"p"},"webhook url"),".  Once done, click ",(0,r.yg)("inlineCode",{parentName:"p"},"Save contact point")," to finish.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When the alerts are fired, it will send without filling in the variables for cluster detail. For example, ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster_hash")," variable is missing here ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster_hash = {{.cluster_hash}}"),". This is done to save disk space. To find the details, use ",(0,r.yg)("inlineCode",{parentName:"p"},"docker compose -f docker-compose.yml -f compose-debug.yml up"),". More description ",(0,r.yg)("a",{parentName:"p",href:"https://docs.obol.tech/docs/advanced/adv-docker-configs"},"here"),"."))),(0,r.yg)("h2",{id:"best-practices-for-monitoring-charon-nodes--cluster"},"Best Practices for Monitoring Charon Nodes & Cluster"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Establish Baselines"),": Familiarize yourself with the normal operation metrics like CPU, memory, and network usage. This will help you detect anomalies."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Define Key Metrics"),": Set up alerts for essential metrics, encompassing both system-level and Charon-specific ones."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Configure Alerts"),": Based on these metrics, set up actionable alerts."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Monitor Network"),": Regularly assess the connectivity between nodes and the network."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Perform Regular Health Checks"),": Consistently evaluate the status of your nodes and clusters."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Monitor System Logs"),": Keep an eye on logs for error messages or unusual activities."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Assess Resource Usage"),": Ensure your nodes are neither over- nor under-utilized."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Automate Monitoring"),": Use automation to ensure no issues go undetected."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Conduct Drills"),": Regularly simulate failure scenarios to fine-tune your setup."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Update Regularly"),": Keep your nodes and clusters updated with the latest software versions.")),(0,r.yg)("h2",{id:"third-party-services-for-uptime-testing"},"Third-Party Services for Uptime Testing"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://updown.io/"},"updown.io")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://grafana.com/grafana/plugins/grafana-synthetic-monitoring-app/"},"Grafana synthetic Monitoring"))),(0,r.yg)("h2",{id:"key-metrics-to-watch-to-verify-node-health-based-on-jobs"},"Key metrics to watch to verify node health based on jobs"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"CPU Usage"),": High or spiking CPU usage can be a sign of a process demanding more resources than it should."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Memory Usage"),": If a node is consistently running out of memory, it could be due to a memory leak or simply under-provisioning."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Disk I/O"),": Slow disk operations can cause applications to hang or delay responses. High disk I/O can indicate storage performance issues or a sign of high load on the system."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Network Usage"),": High network traffic or packet loss can signal network configuration issues, or that a service is being overwhelmed by requests."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Disk Space"),": Running out of disk space can lead to application errors and data loss."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Uptime"),": The amount of time a system has been up without any restarts. Frequent restarts can indicate instability in the system."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Error Rates"),": The number of errors encountered by your application. This could be 4xx/5xx HTTP errors, exceptions, or any other kind of error your application may log."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Latency"),": The delay before a transfer of data begins following an instruction for its transfer."),(0,r.yg)("p",null,"It is also important to check:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"NTP clock skew;"),(0,r.yg)("li",{parentName:"ul"},"Process restarts and failures (eg. through\xa0",(0,r.yg)("inlineCode",{parentName:"li"},"node_systemd"),");"),(0,r.yg)("li",{parentName:"ul"},"Alert on high error and panic log counts.")))}p.isMDXComponent=!0},16626:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/AlertsContactPoint-b505f7bd1bf40fe70c6be5c80fecffc7.png"}}]);