(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{266:function(e,t,r){var content=r(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(136).default)("1dd989a9",content,!0,{sourceMap:!1})},267:function(e,t,r){"use strict";r(266)},268:function(e,t,r){var n=r(135)((function(i){return i[1]}));n.push([e.i,".margin{height:200px}.table{background-color:red;display:flex;flex-wrap:wrap;width:530px}.card{height:96px;margin:12px;width:64px}.footer{height:200px}",""]),n.locals={},e.exports=n},270:function(e,t,r){"use strict";r.r(t);r(30);var n=r(1),o=r(129);var l=r(137),c=r(97);function d(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||Object(l.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r(45),r(36),r(61),r(62),r(63),r(46),r(64),r(47),r(37),r(39),r(195),r(20),r(26),r(66),r(38),r(65);function f(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var h=function(){var e=Object(n.d)([]);e.value.push({name:"あなた",ownedCount:0}),e.value.push({name:"相手",ownedCount:0});var t,r=Object(n.d)(0),o=Object(n.d)([]),l=d(Array(24)).map((function(e,i){return Math.floor(i/2)})),c=function(e){for(var t=d(e),i=t.length-1;i>=0;i--){var r=Math.floor(Math.random()*(i+1)),n=t[i];t[i]=t[r],t[r]=n}return t}(l),v=f(c);try{for(v.s();!(t=v.n()).done;){var h=t.value;o.value.push({cardNmber:h,state:"Closed"})}}catch(e){v.e(e)}finally{v.f()}var y=!1;return{players:e,currentPlayer:r,cards:o,openCard:function(t){console.log("card");var n=t.target,l=Number(n.id.replace("card_",""));if(!y)if(y=!0,"Closed"===o.value[l].state){o.value[l].state="Opened";var c=o.value.filter((function(e){return"Opened"===e.state}));console.log(o.value),console.log(c),2===c.length?setTimeout((function(){c[0].cardNmber===c[1].cardNmber?(o.value.forEach((function(e){return e.state="Opened"===e.state?"None":e.state})),e.value[r.value].ownedCount+=2):o.value.forEach((function(e){return e.state="Opened"===e.state?"Closed":e.state})),r.value=1-r.value,y=!1}),1e3):y=!1}else y=!1}}},y=Object(n.c)({__name:"Table",setup:function(e){var t=h(),r=t.currentPlayer,o=t.players,l=t.cards,c=t.openCard,d=Object(n.d)([]),f=Object(n.a)((function(){return o.value[r.value].name}));return{__sfc:!0,currentPlayer:r,players:o,cards:l,openCard:c,itemRefs:d,currentPlayerName:f}}}),m=(r(267),r(48)),component=Object(m.a)(y,(function(){var e=this,t=e._self._c,r=e._self._setupProxy;return t("div",{staticClass:"wrap"},[t("div",{staticClass:"header"},[e._v("\n    "+e._s(r.currentPlayerName)+"の番です。\n  ")]),e._v(" "),t("div",{staticClass:"table"},e._l(r.cards,(function(n,o){return t("div",{key:o,staticClass:"card"},["Closed"==n.state?t("div",{staticStyle:{width:"100%",height:"100%",margin:"0px","background-color":"blue"},attrs:{id:"card_"+o},on:{click:function(e){return r.openCard(e)}}}):e._e(),e._v(" "),"Opened"==n.state?t("div",{staticStyle:{width:"100%",height:"100%",margin:"0px","background-color":"powderblue"}},[e._v("\n        "+e._s(n.cardNmber)+"\n      ")]):e._e()])})),0),e._v(" "),t("div",{staticClass:"footer"},e._l(r.players,(function(r){return t("div",{key:r.name},[e._v("\n      "+e._s(r.name)+"："+e._s(r.ownedCount)+"点\n    ")])})),0)])}),[],!1,null,null,null);t.default=component.exports},273:function(e,t,r){"use strict";r.r(t);var n=r(1).b.extend({name:"IndexPage"}),o=r(48),component=Object(o.a)(n,(function(){var e=this._self._c;this._self._setupProxy;return e("Table")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Table:r(270).default})}}]);