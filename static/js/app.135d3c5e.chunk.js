(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{134:function(t,e,a){"use strict";a.d(e,"a",(function(){return j}));var n=a(135),i=a.n(n),o=a(15),r=a.n(o),s=a(11),c=a.n(s),l=a(18),u=a.n(l),f=a(27),h=a.n(f),y=a(28),m=a.n(y),d=a(16),g=a.n(d),p=a(0),v=a.n(p),b=a(103),k=a(17),E=a(21),S=a(14),x=a(341),C=a(54),w=(a(188),a(53));function I(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=g()(t);if(e){var i=g()(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return m()(this,a)}}var j=function(t){h()(a,t);var e=I(a);function a(){var t;c()(this,a),(t=e.call(this)).defaultState={difficulty:"",ticks:0,target:0,pc:0,running:!1,motivation:"Are you excited? I bet you are"};try{t.state=JSON.parse(localStorage.getItem("ProgState"))}catch(n){t.state=null}return t.state||(console.log("Hello"),t.state=r()({},t.defaultState)),setInterval((function(){t.tick()}),1e3),t}return u()(a,[{key:"tick",value:function(){if(this.state.running&&(this.state.ticks++,this.setState({pc:(this.state.ticks/this.state.target*100).toFixed(5)}),localStorage.setItem("ProgState",JSON.stringify(this.state)),this.state.ticks%5===0)){var t=w.motivation[Math.floor(Math.random()*w.motivation.length)];this.setState({motivation:t})}}},{key:"chooseDifficulty",value:function(t,e){e.parent.setState({difficulty:e.difficulty,ticks:0,target:w.difficulties[e.difficulty].target,pc:0,running:!0,motivation:"Let's go!"})}},{key:"reset",value:function(t,e){e.parent.setState(r()({},e.parent.defaultState)),localStorage.removeItem("ProgState")}},{key:"render",value:function(){var t=v.a.createElement(S.a,{style:A.progress},v.a.createElement(x.a,{percent:this.state.pc,label:this.state.pc+"%",color:"teal"}),v.a.createElement(S.a,{style:A.resetButton},v.a.createElement(C.a,{content:"Reset",onClick:this.reset,parent:this})));if(0===this.state.target){for(var e=[],a=0,n=Object.entries(w.difficulties);a<n.length;a++){var o=n[a],r=i()(o,2),s=r[0],c=r[1];e.push(v.a.createElement(C.a,{animated:"fade",onClick:this.chooseDifficulty,difficulty:s,parent:this},v.a.createElement(C.a.Content,{visible:!0},c.title),v.a.createElement(C.a.Content,{hidden:!0},c.description)))}t=v.a.createElement(S.a,{style:A.chooseDifficulty},v.a.createElement(E.a,{style:A.titleSubtext},"Choose a difficulty (hover for more info)"),v.a.createElement(S.a,{style:A.chooseDifficultyButtons},e))}else this.state.ticks>=this.state.target&&(t=v.a.createElement(S.a,{style:A.complete},v.a.createElement(E.a,{style:{marginBottom:10}},"\ud83c\udf88 Good job, you did it! \ud83c\udf88"),v.a.createElement(E.a,{style:{marginBottom:20}},"Why not try again on a harder difficulty?"),v.a.createElement(C.a,{content:"I'd love to",onClick:this.reset,parent:this})));return v.a.createElement(S.a,{style:A.container},v.a.createElement(S.a,{style:A.title},v.a.createElement(E.a,{style:A.titleText},"Prog"),v.a.createElement(E.a,{style:A.titleSubtext},"A game that exists because some guy on Reddit said something like"),v.a.createElement(E.a,null,'"I just want to press Play and not bother with anything else"')),t,v.a.createElement(S.a,{style:A.motivation},v.a.createElement(E.a,null,this.state.motivation)),v.a.createElement(S.a,{style:A.footer},v.a.createElement(E.a,{style:{fontSize:10}},"Love this game? Why not"," "),v.a.createElement(E.a,{style:A.hyperlink,onPress:function(){return b.a.openURL("https://paypal.me/FifteenFifty")}},"donate"),v.a.createElement(E.a,{style:{fontSize:10}}," ","or"," "),v.a.createElement(E.a,{style:A.hyperlink,onPress:function(){return b.a.openURL("https://github.com/FifteenFifty/prog/")}},"contribute")))}}]),a}(p.Component),A=k.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},titleText:{fontSize:72,marginBottom:20},titleSubtext:{marginBottom:10},title:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},chooseDifficulty:{width:"80%",backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},chooseDifficultyButtons:{flexDirection:"column"},progress:{flex:1,width:"80%",backgroundColor:"#fff",justifyContent:"center"},resetButton:{alignItems:"center"},motivation:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},complete:{alignItems:"center"},footer:{flexDirection:"row"},hyperlink:{fontSize:10,color:"teal"}})},178:function(t,e,a){a(179),t.exports=a(339)},179:function(t,e){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/prog/expo-service-worker.js",{scope:"/prog/"}).then((function(t){})).catch((function(t){console.info("Failed to register service-worker",t)}))}))},53:function(t){t.exports=JSON.parse('{"difficulties":{"sEasy":{"title":"Super Easy","description":"About a minute","target":60},"vEasy":{"title":"Very easy","description":"About a dozen minutes","target":720},"easy":{"title":"Easy","description":"About thirty minutes","target":1800},"medium":{"title":"Medium","description":"About an hour","target":3600},"hard":{"title":"Hard","description":"About six hours","target":21600},"pHard":{"title":"Pretty hard","description":"About a day","target":86400},"vHard":{"title":"Very hard","description":"About a week","target":604800},"sHard":{"title":"Super hard","description":"About a February","target":2419200},"what":{"title":"Why would you even choose this?","description":"About a year","target":31536000}},"motivation":["You can do it!","You\'re almost there","This is such fun!","You\'ve totally got this","You\'re the best","You\'ve completely mastered this game\'s mechanics","Good job with the progress","Keep it up!","Great job getting this far, keep going!","Hours of fun! (*as long as you choose the right difficulty)"]}')}},[[178,1,2]]]);
//# sourceMappingURL=app.135d3c5e.chunk.js.map