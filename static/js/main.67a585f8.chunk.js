(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),o=n(4),r=n(5),s=n(7),u=n(6),i=n(1),l=n.n(i),d=n(0),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={keyValue:""},e.handleDocumentClick=function(t){e.setState({keyValue:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleDocumentClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleDocumentClick)}},{key:"render",value:function(){var e=this.state.keyValue;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(l.a.PureComponent);n(13);c.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.67a585f8.chunk.js.map