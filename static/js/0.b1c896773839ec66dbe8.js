webpackJsonp([0],{"63HS":function(t,e){},BfwS:function(t,e){},FP3a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("woOf"),s=i.n(n),a=i("Zrlr"),r=i.n(a),h=i("wxAW"),o=i.n(h),c=function(){function t(e){r()(this,t),s()(this,e)}return o()(t,[{key:"print",value:function(t,e){t.fillStyle=this.style?this.style:"black",t.fillRect(this.sx,this.sy,e,e),this.sx=this.sx+(this.x-this.sx)*this.speed||.07,this.sy=this.sy+(this.y-this.sy)*this.speed||.07}}]),t}(),u=function(){function t(e){r()(this,t),this.canvas=e.canvas,this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.offsetWidth,this.height=this.canvas.offsetHeight,this.textArray=e.textArray,this.textIndex=e.textIndex||0,this.init()}return o()(t,[{key:"init",value:function(){this.gap=2,this.timer=null,this.running=!1,this.dots=this.getTextDots(this.textArray[this.textIndex]),this.nextDots=this.getTextDots(this.textArray[++this.textIndex]),this.initAnim()}},{key:"initAnim",value:function(){var t=this.width,e=this.height;this.dots.forEach(function(i){i.sx=util.random(0,t),i.sy=util.random(0,e)}),this.anim()}},{key:"anim",value:function(){var t=this;this.ctx.save(),this.ctx.fillStyle="rgba(255,255,255,0.2)",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.restore(),this.dots.forEach(function(e){e.print(t.ctx,t.gap)}),this.timer=requestAnimationFrame(this.anim.bind(this)),this.running||(this.running=!0,setTimeout(function(){cancelAnimationFrame(t.timer),t.running=!1,t.mixDots(),t.nextDots=t.getTextDots(t.textArray[++t.textIndex]),t.timer=requestAnimationFrame(t.anim.bind(t))},5e3))}},{key:"mixDots",value:function(){var t=this.width,e=this.height,i=this.dots,n=this.nextDots,s=n.length-i.length,a=Math.abs(s);s>0?util.interEach(a,1,function(){i.push(new c({sx:t/2,sy:e/2,speed:util.random(.05,.15),style:"rgba("+util.random(0,255,!0)+","+util.random(0,255,!0)+","+util.random(0,255,!0)+",255)"}))}):s<0&&(i.length-=a),n.forEach(function(t,e){i[e].x=t.x,i[e].y=t.y})}}]),t}();u.prototype.getTextDots=function(){var t=document.createElement("canvas"),e=t.getContext("2d"),i=null,n=null,s=!1;return function(a){var r=this;!s&&function(){i=t.width=this.width,n=t.height=this.height,e.textBaseline="middle",e.textAlign="center",e.font="100px Arial bold",document.body.appendChild(t),s=!0}.call(this),e.clearRect(0,0,i,n),e.fillText(a,i/2,n/2);var h=e.getImageData(0,0,i,n).data,o=[];return util.interEach(i,this.gap,function(t){util.interEach(n,r.gap,function(e){h[4*((e-1)*i+t)+3]>0&&o.push(new c({x:t,y:e,speed:util.random(.05,.15),style:"rgba("+util.random(0,255,!0)+","+util.random(0,255,!0)+","+util.random(0,255,!0)+",255)"}))})}),o}}();var l={beforeCreate:function(){this.$nextTick(function(){var t=this.$refs.canvas;t.setAttribute("width",this.$el.offsetWidth),t.setAttribute("height",this.$el.offsetHeight);new u({canvas:t,textArray:["我爱歌词网 [www.5ilrc.com]","有谁能够一夜之间长大 - 戊道子","词：[盘子]","曲：[陈绍楠]","编曲：[SEVEN]","走去忘记 旧的人旧的自己","远离回忆 找个人说我爱你","别带着沉重去飞行","别怀疑内心深处的勇气","放纵地拥抱晨曦","在路上遇见新的自己","有谁能够一夜之间长大","爱情碾过还能喘气就不算差","何必羡慕那不凋败的塑料花","没有花期不会枯萎 难道美吗","尽情亲吻爱情留下的疤","童话也不只是有水晶鞋和白马","何必为了一段插曲哭到沙哑","过程不留遗憾结果也就伟大","走去忘记 旧的人旧的自己","远离回忆 找个人说我爱你","别带着沉重去飞行","别怀疑内心深处的勇气","放纵地拥抱晨曦","在路上遇见新的自己","有谁能够一夜之间长大","爱情碾过还能喘气就不算差","何必羡慕那不凋败的塑料花","没有花期不会枯萎 难道美吗","尽情亲吻爱情留下的疤","童话也不只是有水晶鞋和白马","何必为了一段插曲哭到沙哑","过程不留遗憾结果也就伟大","Lrc By：珍妮 QQ：929964514"]})})}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("canvas",{ref:"canvas"})])},staticRenderFns:[]};var d=[{name:"grainText",introduce:"111111111111111"}],x={components:{grainText:i("VU/8")(l,f,!1,function(t){i("63HS")},"data-v-4c0bc928",null).exports},data:function(){return{componentsMsg:d}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"page"},[e("el-tabs",{staticClass:"tabs-container",attrs:{"tab-position":"left"}},this._l(this.componentsMsg,function(t){return e("el-tab-pane",{key:t.name,attrs:{label:t.introduce}},[e(t.name,{tag:"component"})],1)}))],1)},staticRenderFns:[]};var g=i("VU/8")(x,m,!1,function(t){i("BfwS")},"data-v-940d5da0",null);e.default=g.exports},Zrlr:function(t,e,i){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},wxAW:function(t,e,i){"use strict";e.__esModule=!0;var n,s=i("C4MV"),a=(n=s)&&n.__esModule?n:{default:n};e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,a.default)(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}()}});
//# sourceMappingURL=0.b1c896773839ec66dbe8.js.map