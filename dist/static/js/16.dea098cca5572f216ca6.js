webpackJsonp([16],{"3xDa":function(t,e){},"5r/c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("yc7N"),o=n("aA9S"),a=n.n(o),r={name:"BoardStyle2",props:{sid:{type:String,default:function(){return"board2"}},source:{type:String,default:function(){return"80"}},options:{type:Object,default:function(){return{}}}},data:function(){return{timer:null,chart:null,option:{},echartOptions:{subtext:"稽核准确率",subtextStyle:{color:"#99CBFC",fontSize:14,top:"center",fontFamily:"DINAlternateBold"},centerColor:"#004C8E",pointerColor:"#00FFD6",splitColor:"#129FF6"}}},watch:{source:function(t){null===this.chart&&this.initChart(),this.updateChart(t)}},created:function(){},mounted:function(){this.chart=this.initChart(),this.echartOptions=a()(this.echartOptions,this.options),this.updateChart(this.source)},destroyed:function(){this.timer&&clearInterval(this.timer)},methods:{initChart:function(){var t=document.getElementById(this.sid),e=this.$echarts.init(t);return window.addEventListener("resize",function(){e.resize()}),e},updateChart:function(t){var e=this;this.angle=0;this.option={backgroundColor:"transparent",title:{text:"{a|30}{c|%}",x:"center",y:"60%",textStyle:{rich:{a:{fontSize:48,color:"#29EEF3"},c:{fontSize:20,color:"#ffffff"}}}},legend:{type:"plain",orient:"vertical",right:0,top:"10%",align:"auto",data:[{name:"涨价后没吃过",icon:"circle"},{name:"天天吃",icon:"circle"},{name:"三五天吃一次",icon:"circle"},{name:"半个月吃一次",icon:"circle"}],textStyle:{color:"white",fontSize:16,padding:[10,1,10,0]},selectedMode:!1},series:[{type:"gauge",radius:"135%",center:["50%","80%"],min:0,max:100,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:4,color:[[1,"rgba(229,229,229,0.3)"]]}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},detail:{show:!1}},{name:"吃猪肉频率",type:"pie",radius:["120%","90%"],center:["50%","80%"],min:0,max:100,startAngle:180,endAngle:100,z:0,zlevel:0,label:{normal:{position:"center"}},data:[{value:30,name:"",itemStyle:{normal:{color:{colorStops:[{offset:0,color:"#4FADFD"},{offset:1,color:"#28E8FA"}]}}}},{value:20,name:"",label:{normal:{show:!1}},itemStyle:{normal:{color:"#093B5F"}}},{value:50,name:"",label:{normal:{show:!1}},itemStyle:{normal:{color:"transparent"}}}]},{name:"",type:"gauge",radius:"120%",center:["50%","80%"],min:0,max:100,startAngle:180,endAngle:0,splitNumber:8,hoverAnimation:!0,axisTick:{show:!1},splitLine:{length:60,lineStyle:{width:5,color:"#132845"}},axisLabel:{show:!1},pointer:{show:!1},axisLine:{lineStyle:{opacity:0}},detail:{show:!1},data:[{value:0,name:""}]}]},this.timer=setInterval(function(){e.draw()},100)},draw:function(){this.angle=this.angle+3,this.chart.setOption(this.option)}}},s=n("W5g0");var l=function(t){n("iemh")},c=Object(s.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"board-container",attrs:{id:this.sid}})},[],!1,l,"data-v-d7019b64",null).exports,h={name:"BoardStyle2",props:{sid:{type:String,default:function(){return"board2"}},source:{type:String,default:function(){return"80"}},options:{type:Object,default:function(){return{}}}},data:function(){return{chart:null,option:{},echartOptions:{subtext:"稽核准确率",subtextStyle:{color:"#99CBFC",fontSize:14,top:"center",fontFamily:"DINAlternateBold"},centerColor:"#004C8E",pointerColor:"#00FFD6",splitColor:"#129FF6"}}},watch:{source:function(t){null===this.chart&&this.initChart(),this.updateChart(t)}},created:function(){},mounted:function(){this.chart=this.initChart(),this.echartOptions=a()(this.echartOptions,this.options),this.updateChart(this.source)},methods:{initChart:function(){var t=document.getElementById(this.sid),e=this.$echarts.init(t);return window.addEventListener("resize",function(){e.resize()}),e},updateChart:function(t){var e={name:"时钟",value:t,pos:["50%","60%"]};this.option={title:{text:t+"%",bottom:"6%",left:"center",textStyle:{fontSize:28,color:"#fff",fontFamily:"DINAlternateBold"},subtext:this.echartOptions.subtext,subtextStyle:this.echartOptions.subtextStyle},series:[{name:e.name,type:"gauge",center:e.pos,radius:"100%",startAngle:225,endAngle:-45,min:0,max:100,axisLine:{show:!0,lineStyle:{width:2,color:[[0,"#25D9FF"],[1,this.echartOptions.splitColor]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:0},detail:{show:0},data:[{value:e.value}]},{name:"小圆形border",type:"pie",hoverAnimation:!1,legendHoverLink:!1,radius:["0%","21%"],z:0,center:e.pos,labelLine:{normal:{show:!1}},data:[{value:10,itemStyle:{normal:{color:this.echartOptions.centerColor}}}]},{name:e.name,type:"gauge",center:e.pos,radius:"80%",startAngle:226,endAngle:-46,min:0,max:100,axisLine:{show:!0,lineStyle:{width:16,color:[[1,this.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#25D9FF"},{offset:.5,color:"#00AEFF"},{offset:1,color:"#25D9FF"}])]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},title:{show:!1,offsetCenter:[0,"65%"],color:"white",fontSize:20,borderRadius:30,padding:5},detail:{show:!1,offsetCenter:[0,60],textStyle:{fontSize:25,color:"#fff"},formatter:["{value}"].join("\n"),rich:{name:{fontSize:20,lineHeight:10,color:"#ddd",padding:[30,0,0,0]}}},itemStyle:{normal:{color:this.echartOptions.pointerColor}},pointer:{show:!0,length:"66%",width:6},data:[{value:e.value,name:e.name}]},{type:"gauge",center:e.pos,radius:"90%",splitNumber:10,min:0,max:100,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"rgba(0,0,0,0)"]]}},axisTick:{splitNumber:10,length:6,lineStyle:{color:this.echartOptions.splitColor,width:1}},axisLabel:{color:this.echartOptions.splitColor,fontSize:12},splitLine:{show:!0,length:12,lineStyle:{width:1,color:this.echartOptions.splitColor}},pointer:{show:0},detail:{show:0}}]},this.chart.setOption(this.option)}}};var d=function(t){n("nvTZ")},u=Object(s.a)(h,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"board-container",attrs:{id:this.sid}})},[],!1,d,"data-v-5e5994b8",null).exports,p={name:"BoardStyle3",props:{sid:{type:String,default:function(){return"board3"}},source:{type:String,default:function(){return"80"}},options:{type:Object,default:function(){return{}}}},data:function(){return{chart:null,option:{},echartOptions:{subtext:"今日事件",subtextStyle:{},sourceStyle:{}}}},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.echartOptions=a()(t.echartOptions,t.options)})},methods:{}};var f=function(t){n("3xDa")},m=Object(s.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board-container",attrs:{id:t.sid}},[n("div",{staticClass:"com-chart"},[n("svg",{staticClass:"circle-line",attrs:{width:"300px",height:"210px",viewBox:"0 0 267 219",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("title",[t._v("路径")]),t._v(" "),n("defs",[n("linearGradient",{attrs:{x1:"54.9676335%",y1:"89.3607194%",x2:"62.4135293%",y2:"16.6241132%",id:"linearGradient-1"}},[n("stop",{attrs:{"stop-color":"#398BFF","stop-opacity":"0",offset:"0%"}}),t._v(" "),n("stop",{attrs:{"stop-color":"#25EDA0",offset:"50.4955403%"}}),t._v(" "),n("stop",{attrs:{"stop-color":"#39D6FF",offset:"100%"}})],1)],1),t._v(" "),n("g",{attrs:{id:"确定的效果",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"摄像头",transform:"translate(-113.000000, -215.000000)",fill:"url(#linearGradient-1)","fill-rule":"nonzero"}},[n("g",{attrs:{id:"编组-45",transform:"translate(40.000000, 210.000000)"}},[n("g",{attrs:{id:"今日事件数据",transform:"translate(73.000000, 0.000000)"}},[n("g",{attrs:{id:"编组-27",transform:"translate(0.000000, 0.502242)"}},[n("path",{attrs:{d:"M133.737778,5.09321173 C207.323506,5.09321173 266.975556,65.0303401 266.975556,138.965346 C266.975556,169.582391 256.714429,198.622894 238.17864,222.098745 L237.614419,222.808427 L236.833751,222.183481 C255.584626,198.760338 265.975556,169.662518 265.975556,138.965346 C265.975556,65.5815604 206.770151,6.09321173 133.737778,6.09321173 C60.7054048,6.09321173 1.5,65.5815604 1.5,138.965346 C1.5,168.920933 11.3936945,197.358133 29.31165,220.494177 L29.8570725,221.193643 L29.070522,221.811169 C10.6708788,198.375307 0.5,169.449352 0.5,138.965346 C0.5,65.0303401 60.15205,5.09321173 133.737778,5.09321173 Z",id:"路径"}})])])])])])]),t._v(" "),n("div",{staticClass:"ball"}),t._v(" "),n("div",{ref:"gauge",staticClass:"gauge-img"}),t._v(" "),n("div",{staticClass:"todayEvents"},[n("p",{staticClass:"num",style:t.echartOptions.sourceStyle},[t._v("\n      "+t._s(t.source)+"\n      ")]),t._v(" "),n("p",{staticClass:"text",style:t.echartOptions.subtextStyle},[t._v("\n      "+t._s(t.echartOptions.subtext)+"\n      ")])])])])},[],!1,f,"data-v-5c9b08d0",null).exports,b={name:"Board",components:{"box-container":i.a,"board-style-1":c,"board-style-2":u,"board-style-3":m},data:function(){return{eventTypeFetchData:[],caringObjectFetchData:[],eventHandlingData:[],spinShow1:!0,spinShow2:!0,spinShow3:!0,activeRef:""}},created:function(){},methods:{showOption:function(t){this.$store.commit("UPDATE_DIALOG_SHOW",this.$refs[t].$options._componentTag)}}};var g=function(t){n("nBba")},v=Object(s.a)(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("box-container",{staticClass:"bg-grey",attrs:{title:"仪表盘1"},on:{showOptionHandler:function(e){return t.showOption("board1")}}},[n("board-style-1",{ref:"board1",attrs:{sid:"board1",source:"80"}})],1),t._v(" "),n("box-container",{staticClass:"bg-grey",attrs:{title:"仪表盘2"},on:{showOptionHandler:function(e){return t.showOption("board2")}}},[n("board-style-2",{ref:"board2",attrs:{sid:"board2",source:"80"}})],1),t._v(" "),n("box-container",{staticClass:"bg-grey",attrs:{title:"仪表盘3"},on:{showOptionHandler:function(e){return t.showOption("board3")}}},[n("board-style-3",{ref:"board3",attrs:{sid:"board3",source:"80"}})],1)],1)},[],!1,g,"data-v-36743f80",null);e.default=v.exports},iemh:function(t,e){},nBba:function(t,e){},nvTZ:function(t,e){}});