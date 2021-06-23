(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order-queue"],{"4e0a":function(e,t,i){"use strict";i("8b7f")},"4f5d":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("bartender-header",[e._v("Order Queue")]),n("div",{staticClass:"container"},e._l(e.orderQueue,(function(e,t){return n("div",{key:t},[n("drink-order-row",{attrs:{order:e}})],1)})),0),0===e.orderQueue.length?n("div",{staticClass:"no-orders"},[n("inline-svg",{attrs:{src:i("e616"),fill:"#eee",width:"100px"}}),n("div",[e._v("no orders")])],1):e._e()],1)},r=[],s=i("6d5e"),a=i.n(s),o=i("4e9d"),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container",class:{active:e.isActive},on:{click:e.toggleActive}},[i("div",{staticClass:"row"},[i("div",{staticClass:"top-left"},[e._v(e._s(e.order.name))]),i("div",{staticClass:"top-right"},[e._v(e._s(e.age))])]),e.isActive?e._e():i("div",{staticClass:"row"},[i("div",{staticClass:"bottom-left"},[e._v("for "+e._s(e.order.recipient.toLowerCase()))]),i("div",{staticClass:"bottom-right"},[e._v("+ tap to expand")])]),e.isActive?i("div",{staticClass:"ingredient-container"},e._l(e.order.ingredients,(function(t,n){return i("div",{key:n,staticClass:"ingredient"},[i("div",{staticClass:"ingredient-name"},[e._v(e._s(t.name))]),i("div",{staticClass:"ingredient-amount"},[e._v("- "+e._s(t.amount))])])})),0):e._e(),e.isActive?i("div",{staticClass:"row"},[i("div",{staticClass:"drink-style"},[i("div",[e._v("serve as "+e._s(e.order.type))]),i("div",[e._v("deliver to "+e._s(e.order.recipient.toLowerCase()))])]),i("button",{staticClass:"complete-button",on:{click:e.complete}},[e._v("Complete")])]):e._e()])},d=[],u={name:"OrderDrinkRow",props:["order"],data:function(){return{age:"",isActive:!1}},created:function(){this.startOrderAgeInterval()},methods:{startOrderAgeInterval:function(){var e=this;this.updateOrderAge(),setInterval((function(){return e.updateOrderAge()}),1e3)},updateOrderAge:function(){var e=this.getOrderAgeInMinutes();this.age=0===e?"ordered just now":1===e?"1 minute ago":"".concat(e," minutes ago")},getOrderAgeInMinutes:function(){var e=new Date,t=6e4;return Math.floor((e.getTime()-this.order.timestamp)/t)},toggleActive:function(){this.isActive=!this.isActive},complete:function(){this.$parent.$emit("complete-order",this.order.id)}}},l=u,v=(i("7b0a"),i("2877")),f=Object(v["a"])(l,c,d,!1,null,"41a22c16",null),g=f.exports,m=i("e315"),p={name:"OrderQueue",components:{BartenderHeader:m["a"],DrinkOrderRow:g,InlineSvg:a.a},data:function(){return{socket:null,orderQueue:[]}},created:function(){this.socket=o["a"].connectToOrderQueue(),this.registerSocketLifecycleEvents(),this.$on("complete-order",this.emitDeleteDrinkOrder)},methods:{registerSocketLifecycleEvents:function(){var e=this;this.socket.on("connect",(function(){console.log("socket connect")})),this.socket.on("disconnect",(function(){console.log("socket disconn"),e.orderQueue=[]})),this.socket.on("queue update",(function(t){console.log({orderQueue:t}),e.orderQueue=t}))},emitDeleteDrinkOrder:function(e){this.socket.emit("delete drink order",e,(function(){console.log("drink ".concat(e," was deleted"))}))}}},h=p,_=(i("ea03"),Object(v["a"])(h,n,r,!1,null,"6806a845",null));t["default"]=_.exports},"7b0a":function(e,t,i){"use strict";i("9300")},"8b7f":function(e,t,i){},9300:function(e,t,i){},cfe7:function(e,t,i){},e315:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"header"},[i("div",{staticClass:"container"},[i("div",{staticClass:"header-left"},[e._t("default")],2),i("div",{staticClass:"header-right"},[e._v(e._s(e.time))])])]),i("div",{staticClass:"spacer"})])},r=[],s=(i("4d90"),i("d3b7"),i("25f0"),i("99af"),{name:"BartenderHeader",data:function(){return{time:""}},created:function(){this.startTimeUpdateInterval()},methods:{startTimeUpdateInterval:function(){var e=this;this.updateTime(),setInterval((function(){return e.updateTime()}),1e3)},updateTime:function(){var e=new Date,t=e.getHours().toString().padStart(2,"0"),i=e.getMinutes().toString().padStart(2,"0");this.time="".concat(t,":").concat(i)}}}),a=s,o=(i("4e0a"),i("2877")),c=Object(o["a"])(a,n,r,!1,null,"18847e88",null);t["a"]=c.exports},e616:function(e,t,i){e.exports=i.p+"img/cocktail.26b6a9b6.svg"},ea03:function(e,t,i){"use strict";i("cfe7")}}]);
//# sourceMappingURL=order-queue.ad369b92.js.map