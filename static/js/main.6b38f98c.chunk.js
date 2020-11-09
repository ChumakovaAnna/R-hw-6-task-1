(this["webpackJsonp6-t-1"]=this["webpackJsonp6-t-1"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/clockFace.3a875958.svg"},function(e,t,n){e.exports=n.p+"static/media/hourHand.e9ad9691.svg"},function(e,t,n){e.exports=n.p+"static/media/minuteHand.d5db1757.svg"},function(e,t,n){e.exports=n.p+"static/media/secondHand.dffcd1d1.svg"},,,,,function(e,t,n){e.exports=n(27)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(8),r=n.n(o),s=(n(24),n(16)),i=n(4),l=(n(25),n(3)),u=n(6),m=n(17);var d=function(e){var t=e.onSubmit,n=Object(a.useState)({name:"",zone:""}),o=Object(i.a)(n,2),r=o[0],s=o[1],d=function(e){var t=e.target,n=t.name,a=t.value;"zone"===n&&(Number(a)>12||Number(a)<-12)&&console.log("\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0437\u043e\u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e"),s((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},n,a))}))};return c.a.createElement("div",null,c.a.createElement("form",{name:"clockAdd",className:"form"},c.a.createElement("div",{className:"input"},c.a.createElement("label",{className:"label",htmlFor:"name"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),c.a.createElement("input",{name:"name",onChange:d,value:r.name})),c.a.createElement("div",{className:"input"},c.a.createElement("label",{className:"label",htmlFor:"zone"},"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0437\u043e\u043d\u0430"),c.a.createElement("input",{name:"zone",type:"number",onChange:d,value:r.zone})),c.a.createElement("button",{className:"button",onClick:function(e){if(e.preventDefault(),""!==r.name&&""!==r.value){var n={id:Object(m.a)(),name:r.name,zone:r.zone};t(n),s({name:"",zone:""})}}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))},h=n(9),v=n(10),f=n(18),b=n(15),p=n(11),y=n.n(p),E=n(12),g=n.n(E),k=n(13),N=n.n(k),S=n(14),j=n.n(S),O=n(5),w=n.n(O),z=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var a,c=e.id,o=e.name,r=e.zone;return Object(h.a)(this,n),(a=t.call(this)).id=c,a.zone=Number(r),a.name=o,a.state={hour:0,minute:0,second:0},a.interval=null,a.styles={hour:null,minute:null,second:null},a}return Object(v.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"clock"},c.a.createElement("div",{className:"nameAndClose"},c.a.createElement("span",null,this.name),c.a.createElement("button",{className:"close",onClick:function(){return e.props.onClose(e.id)}},"X")),c.a.createElement("div",{className:"clockFace_container"},c.a.createElement("img",{src:y.a,alt:"clock face"}),c.a.createElement("div",null,c.a.createElement("img",{src:g.a,style:{transform:"".concat(this.styles.hour)},className:"hands hours",alt:"hour hand"}),c.a.createElement("img",{src:N.a,style:{transform:"".concat(this.styles.minute)},className:"hands minute",alt:"minute hand"}),c.a.createElement("img",{src:j.a,style:{transform:"".concat(this.styles.second)},className:"hands second",alt:"second hand"}))),c.a.createElement("span",null,this.state.hour,":",this.state.minute,":",this.state.second))}},{key:"getTime",value:function(){var e=w()().hour()+this.zone,t={hour:e>23?e-23:e,minute:w()().minute(),second:w()().second()};this.setState(t)}},{key:"arrowHourStyle",value:function(){var e=this.state.hour<12?30*this.state.hour:30*(this.state.hour-12);this.styles.hour="rotate(".concat(e,"deg)")}},{key:"arrowMinuteSecondStyle",value:function(e){var t=6*this.state[e];this.styles[e]="rotate(".concat(t,"deg)")}},{key:"getTimeAndStyle",value:function(){this.getTime(),this.arrowHourStyle(),this.arrowMinuteSecondStyle("minute"),this.arrowMinuteSecondStyle("second")}},{key:"componentDidMount",value:function(){var e=this;this.getTimeAndStyle(),this.interval=setInterval((function(){return e.getTimeAndStyle()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),n}(a.Component);var C=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],r=function(e){o((function(t){return t.filter((function(t){return t.id!==e}))}))};return c.a.createElement("div",{className:"App"},c.a.createElement(d,{onSubmit:function(e){o((function(t){return[].concat(Object(s.a)(t),[e])}))}}),c.a.createElement("div",{className:"clocks_container"},n.map((function(e){return c.a.createElement(z,Object.assign({key:e.id},e,{onClose:r}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.6b38f98c.chunk.js.map