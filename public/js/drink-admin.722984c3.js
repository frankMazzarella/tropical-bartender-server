(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["drink-admin"],{"27bb":function(t,e,i){"use strict";i("6d69")},"4e0a":function(t,e,i){"use strict";i("8b7f")},6651:function(t,e,i){"use strict";i("707e")},"6d69":function(t,e,i){},"707e":function(t,e,i){},"8b7f":function(t,e,i){},"997d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("bartender-header",[t._v("Drink Admin")]),i("div",{staticClass:"container"},t._l(t.drinkList,(function(t,e){return i("div",{key:e},[i("drink-admin-row",{attrs:{drink:t}})],1)})),0)],1)},s=[],c=i("4e9d"),r=i("e315"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"drink"},[i("div",{staticClass:"drink-name"},[t._v(t._s(t.drink.name))]),t.drink.active?i("div",{staticClass:"drink-toggle active",on:{click:t.toggleActive}},[t._v("active")]):t._e(),t.drink.active?t._e():i("div",{staticClass:"drink-toggle disabled",on:{click:t.toggleActive}},[t._v("disabled")]),i("div",{staticClass:"ingredients"},[i("table",t._l(t.drink.ingredients,(function(e,n){return i("tr",{key:n},[i("div",{staticClass:"ingredient"},[t._v("• "+t._s(e.name))])])})),0)])])},o=[],d={name:"DrinkAdminRow",props:["drink"],methods:{toggleActive:function(){this.$parent.$emit("toggle-drink-active",this.drink.id)}}},l=d,u=(i("27bb"),i("2877")),k=Object(u["a"])(l,a,o,!1,null,"70c9b55b",null),v=k.exports,f={name:"DrinkAdmin",components:{BartenderHeader:r["a"],DrinkAdminRow:v},data:function(){return{socket:null,drinkList:[]}},created:function(){this.socket=c["a"].connectToDrinkList(),this.registerSocketLifecycleEvents(),this.$on("toggle-drink-active",this.emitToggleDrinkActive)},methods:{registerSocketLifecycleEvents:function(){var t=this;this.socket.on("connect",(function(){console.log("socket connect")})),this.socket.on("disconnect",(function(){console.log("socket disconn"),t.drinkList=[]})),this.socket.on("drink list",(function(e){console.log({drinkList:e}),t.drinkList=e}))},emitToggleDrinkActive:function(t){this.socket.emit("toggle drink active",t,(function(){console.log("drink ".concat(t," was toggled"))}))}}},g=f,m=(i("6651"),Object(u["a"])(g,n,s,!1,null,"4473e3db",null));e["default"]=m.exports},e315:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"header"},[i("div",{staticClass:"container"},[i("div",{staticClass:"header-left"},[t._t("default")],2),i("div",{staticClass:"header-right"},[t._v(t._s(t.time))])])]),i("div",{staticClass:"spacer"})])},s=[],c=(i("4d90"),i("d3b7"),i("25f0"),i("99af"),{name:"BartenderHeader",data:function(){return{time:""}},created:function(){this.startTimeUpdateInterval()},methods:{startTimeUpdateInterval:function(){var t=this;this.updateTime(),setInterval((function(){return t.updateTime()}),1e3)},updateTime:function(){var t=new Date,e=t.getHours().toString().padStart(2,"0"),i=t.getMinutes().toString().padStart(2,"0");this.time="".concat(e,":").concat(i)}}}),r=c,a=(i("4e0a"),i("2877")),o=Object(a["a"])(r,n,s,!1,null,"18847e88",null);e["a"]=o.exports}}]);
//# sourceMappingURL=drink-admin.722984c3.js.map