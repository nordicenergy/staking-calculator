(this["webpackJsonpnordic-energy-staging-app"]=this["webpackJsonpnordic-energy-staging-app"]||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/nordicenergy_logo_bw_black.62b8cafa.png"},29:function(e,a,t){e.exports=t(42)},34:function(e,a,t){},35:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(12),i=t.n(s),r=(t(34),t(17)),o=t(18),c=t(19),u=t(26),h=t(20),d=t(5),m=t(27),g=t(57),v=(t(35),t(54)),p=t(13),k=t(56),b=t(21),C=t.n(b),E=t(22),S=t.n(E),y=(Object(v.a)((function(e){return{root:{width:300},margin:{height:e.spacing(3)}}})),[{value:0,label:"0"},{value:10},{value:20},{value:30},{value:40,label:"100k"},{value:50},{value:60},{value:70},{value:80,label:"200k"},{value:90},{value:100},{value:110},{value:120,label:"300k"},{value:130},{value:140},{value:150},{value:160,label:"400k"},{value:170},{value:180},{value:190},{value:200,label:"500k"}]),f=[{value:2,label:"2"},{value:5},{value:8},{value:12},{value:16},{value:20},{value:24},{value:28},{value:32},{value:36},{value:40},{value:44},{value:48},{value:52},{value:56},{value:60},{value:64},{value:68},{value:72},{value:76},{value:80},{value:84},{value:88},{value:92},{value:96},{value:100,label:"100"}],x=Object(p.a)({root:{color:"#E6B800",height:2,padding:"15px 0"},thumb:{height:30,width:30,backgroundColor:"#fff",border:"5px solid #E6B800",marginTop:-12,marginLeft:-14,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},track:{height:6,backgroundColor:"#e6b800"},rail:{height:6,opacity:.3,backgroundColor:"#e6b800"},mark:{backgroundColor:"#e6b800",height:6,width:1,marginTop:6},markActive:{opacity:1,backgroundColor:"#e6b800"},markLabel:{marginTop:10}})(k.a);var N=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(u.a)(this,Object(h.a)(a).call(this))).result=function(){return 1==e.state.isGenesisPhase?e.state.stakedTokens*e.state.tokenPrice*.1*e.state.nodeCategory/365:e.state.txNumber*e.state.txCost/(e.state.circulatingSuply*e.state.percentageCirculatingSuply/100)*e.state.stakedTokens*.6*parseFloat(e.state.nodeCategory)},e.normalResult=function(){return e.state.txNumber*e.state.txCost/(e.state.circulatingSuply*e.state.percentageCirculatingSuply/100)*e.state.stakedTokens*.6*parseFloat(e.state.nodeCategory)},e.state={stakedTokens:1e3,tokenPrice:.1,useCases:2,txNumber:4e4,txCost:.01,nodeCategory:1,isGenesisPhase:!1,genesisPhaseCheckboxState:!0,circulatingSuply:0,percentageCirculatingSuply:50,percentageMark:[],apiData:[]},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleCheckboxChange=e.handleCheckboxChange.bind(Object(d.a)(e)),e.handleStakedTokensSlider=e.handleStakedTokensSlider.bind(Object(d.a)(e)),e.handleUseCasesSlider=e.handleUseCasesSlider.bind(Object(d.a)(e)),e.handlePercentageCirculatingSuplySlider=e.handlePercentageCirculatingSuplySlider.bind(Object(d.a)(e)),e}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("1609f116-a205-42f9-80b8-32a99fa17a6b").then((function(e){return e.json()})).then((function(a){e.setState({apiData:a},(function(){return e.processDataFromApi()}))})).catch(console.log)}},{key:"processDataFromApi",value:function(){var e=this;this.setState({tokenPrice:this.state.apiData.market_data.current_price.usd.toFixed(3)}),this.setState({circulatingSuply:this.state.apiData.market_data.circulating_supply.toFixed(0)},(function(){return e.setPercentageMark()}))}},{key:"setPercentageMark",value:function(){this.setState({percentageMark:[{value:4,label:(.02*this.state.circulatingSuply/1e3).toFixed(0)+"Net"},{value:10},{value:20},{value:30},{value:40},{value:50},{value:60},{value:70},{value:80},{value:90},{value:100},{value:110},{value:120},{value:130},{value:140},{value:150},{value:160},{value:170},{value:180},{value:190},{value:200,label:(this.state.circulatingSuply/1e6).toFixed(2)+"M Lit"}]})}},{key:"handleChange",value:function(e){var a=this;if(this.setState(Object(r.a)({},e.target.name,e.target.value),(function(){return a.checkDisableGenesisPhase()})),"useCases"==e.target.name){var t=2e4*e.target.value;this.setState({txNumber:t},(function(){return a.checkDisableGenesisPhase()}))}}},{key:"checkDisableGenesisPhase",value:function(){365*this.normalResult()>this.state.tokenPrice*this.state.stakedTokens*.1*this.state.nodeCategory?(this.setState({genesisPhaseCheckboxState:!0}),this.setState({isGenesisPhase:!1})):this.setState({genesisPhaseCheckboxState:!1})}},{key:"handleCheckboxChange",value:function(e){this.setState({isGenesisPhase:e})}},{key:"handleStakedTokensSlider",value:function(e,a){this.setState({stakedTokens:2500*a})}},{key:"handlePercentageCirculatingSuplySlider",value:function(e,a){var t=this;this.setState({percentageCirculatingSuply:(.5*a).toFixed(1)},(function(){return t.checkDisableGenesisPhase()}))}},{key:"handleUseCasesSlider",value:function(e,a){var t=this,n=2e4*a;this.setState({useCases:a}),this.setState({txNumber:n},(function(){return t.checkDisableGenesisPhase()}))}},{key:"render",value:function(){Object(v.a)((function(e){return{root:{width:300},margin:{height:e.spacing(3)}}}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"imageContainer"},l.a.createElement("img",{className:"nordicenergylogoImage",src:C.a}),l.a.createElement("span",null,"Staking",l.a.createElement("br",null),"Calculator")),l.a.createElement("div",{className:"userInputContainer"},l.a.createElement("div",{className:"textFormPairContainer"},l.a.createElement("p",null,"My Staked Tokens"),l.a.createElement("p",{className:"netAmmount"},this.state.stakedTokens+" NET"),l.a.createElement(x,{className:"stakedTokensSlider",name:"stakedTokens","aria-label":"discrete-slider-small-steps",defaultValue:1,marks:y,valueLabelDisplay:"off",min:0,max:200,step:1,onChange:this.handleStakedTokensSlider})),l.a.createElement("div",{className:"textFormPairContainer"},l.a.createElement("p",null,"Use Cases"),l.a.createElement("p",{className:"netAmmount"},this.state.useCases),l.a.createElement(x,{name:"useCases","aria-label":"discrete-slider-small-steps",defaultValue:1,marks:f,valueLabelDisplay:"off",min:2,max:100,step:1,onChange:this.handleUseCasesSlider})),l.a.createElement("div",{className:"textFormPairContainer"},l.a.createElement("p",null,"Total Staked Tokens / Circulating Supply"),l.a.createElement("p",{className:"netAmmount"},this.state.percentageCirculatingSuply+"%"),l.a.createElement(x,{className:"stakedTokensSlider",name:"stakedTokens","aria-label":"discrete-slider-small-steps",defaultValue:100,marks:this.state.percentageMark,valueLabelDisplay:"off",min:4,max:200,step:1,onChange:this.handlePercentageCirculatingSuplySlider})),l.a.createElement("div",{className:"textFormPairContainer"},l.a.createElement("p",null,"Node Type"),l.a.createElement(g.a,{type:"select",name:"nodeCategory",id:"nodeCategorySelect",className:"inputContainer",onChange:this.handleChange},l.a.createElement("option",{value:"1"},"Node"),l.a.createElement("option",{value:"2"},"Trust Node"),l.a.createElement("option",{value:"1.2"},"Nordic Energy Pool Staking 1 Month"),l.a.createElement("option",{value:"1.4"},"Nordic Energy Pool Staking 3 Months"),l.a.createElement("option",{value:"1.6"},"Nordic Energy Pool Staking 6 Months"),l.a.createElement("option",{value:"1.8"},"Nordic Energy Pool Staking 12 Months"))),l.a.createElement("div",{className:"textFormPairContainer"},l.a.createElement("p",null,"Average Number of Transactions / Day"),l.a.createElement(g.a,{type:"number",name:"txNumber",step:"1000",className:"inputContainer",value:this.state.txNumber,onChange:this.handleChange})),l.a.createElement("div",{className:"textFormPairContainer"},l.a.createElement("p",null,"Nordic Energy Token Price(USD)"),l.a.createElement(g.a,{type:"number",name:"tokenPrice",step:"0.1",className:"inputContainer",value:this.state.tokenPrice,onChange:this.handleChange})),l.a.createElement("div",{className:"textFormPairContainer"},l.a.createElement("label",null,"Activate Genesis Phase"),l.a.createElement(S.a,{name:"isGenesisPhase",checked:this.state.isGenesisPhase,onChange:this.handleCheckboxChange,disabled:this.state.genesisPhaseCheckboxState,onColor:"#E6B800",onHandleColor:"#E6B800",handleDiameter:28,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:15,width:50,className:"react-switch",id:"material-switch"}))),l.a.createElement("div",{className:"resultingIncomeContainer"},l.a.createElement("p",null,"Resulting Income"),l.a.createElement("p",null,this.result().toFixed(2)+"$","/day"),l.a.createElement("p",null,(30*this.result()).toFixed(2)+"$","/month"),l.a.createElement("p",null,(365*this.result()).toFixed(2)+"$","/year"),l.a.createElement("p",null,(365*this.result()/this.state.tokenPrice/this.state.stakedTokens*100).toFixed(2)+"%"," - annual Staking Rate"),l.a.createElement("p",null,(this.state.tokenPrice*this.state.stakedTokens).toFixed(2)+"$"," - my Nordic Energy (NET) Token value")),l.a.createElement("div",{className:"optionalInformationContainer"},l.a.createElement("a",{href:"https://medium.com/nordicenergy-blog"},"Blog"),l.a.createElement("a",{href:"https://github.com/nordicenergy/staking-calculator/"},"GitHub Link"),l.a.createElement("a",{href:"https://etherscan.io/address/0x163e6936bcBbFf19ab70d1E5083FEB4507E96EFB"},"Donate 1 NET"))))}}]),a}(n.Component);var P=function(){return new N};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.5d3dbd73.chunk.js.map