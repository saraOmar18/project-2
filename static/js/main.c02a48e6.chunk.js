(this["webpackJsonpproject-2"]=this["webpackJsonpproject-2"]||[]).push([[0],{40:function(e,t,n){e.exports=n.p+"static/media/beautiful.b230946c.jpg"},41:function(e,t,n){e.exports=n.p+"static/media/background.abd275fa.jpg"},42:function(e,t,n){e.exports=n.p+"static/media/ina-soulis.c4277627.jpg"},48:function(e,t,n){e.exports=n(84)},53:function(e,t,n){},78:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(39),r=n.n(c),i=(n(53),n(9)),l=n(10),s=n(12),m=n(11),u=n(13),p=n(17),d=n(15),h=n(87),b=n(85),f=n(40),v=n.n(f),E=n(41),k=n.n(E),j=n(42),O=n.n(j),g=function(e){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement(b.a,{className:"cont"},o.a.createElement(h.a,null,o.a.createElement("img",{src:v.a,height:"350px"}),o.a.createElement("img",{src:k.a,height:"350px"}),o.a.createElement("img",{src:O.a,height:"350px"}))),o.a.createElement("h1",null," Welcome to our website "))},I=n(45),y=n.n(I),C=function(e){return o.a.createElement(b.a,{className:"cont"},o.a.createElement("div",null,o.a.createElement("img",{id:"gallery",src:e.url,width:"500px",height:"500px"})))},x=function(e){console.log(e.allcosmetics);var t=e.allcosmetics.map((function(e,t){return o.a.createElement(C,{url:e.download_url,key:t})}));return o.a.createElement("div",null,t)},D=function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"Contact page  "))},N=n(8),S=n(86),T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).onClickClose=n.onClickClose.bind(Object(N.a)(n)),n.onClickDone=n.onClickDone.bind(Object(N.a)(n)),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onClickClose",value:function(){var e=parseInt(this.props.index);this.props.removeItem(e)}},{key:"onClickDone",value:function(){var e=parseInt(this.props.index);this.props.markTodoDone(e)}},{key:"render",value:function(){var e=this.props.item.done?"done":"undone";return o.a.createElement("li",{className:"list-group-item "},o.a.createElement("div",{className:e},o.a.createElement("span",{className:"glyphicon glyphicon-ok","aria-hidden":"true",onClick:this.onClickDone}),this.props.item.value,o.a.createElement(S.a,{variant:"outline",type:"button",className:"close",onClick:this.onClickClose},"\xd7")))}}]),t}(o.a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.productItems.map((function(t,n){return o.a.createElement(T,{item:t,key:n,index:n,removeItem:e.props.removeItem,markTodoDone:e.props.markTodoDone})}));return o.a.createElement("ul",{className:"list-group"},t)}}]),t}(a.Component),L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).onSubmit=n.onSubmit.bind(Object(N.a)(n)),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refs.itemName.focus()}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.refs.itemName.value;t&&(this.props.addItem({newItemValue:t}),this.refs.form.reset())}},{key:"render",value:function(){return o.a.createElement("form",{ref:"form",onSubmit:this.onSubmit,className:"form-inline"},o.a.createElement("input",{type:"text",ref:"itemName",className:"form-control",placeholder:"add a new Task..."}),o.a.createElement("br",null),o.a.createElement(S.a,{type:"submit",variant:"outline-success",className:"btn btn-default"}," Add"))}}]),t}(a.Component),P=[{index:1,value:"Gloss",done:!1},{index:2,value:"lipstick",done:!1},{index:3,value:"Powder",done:!1}],A=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).clearList=function(e){P.splice(e,P.length),n.setState({productItem:[]})},n.addItem=n.addItem.bind(Object(N.a)(n)),n.removeItem=n.removeItem.bind(Object(N.a)(n)),n.markTodoDone=n.markTodoDone.bind(Object(N.a)(n)),n.state={productItem:P},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"addItem",value:function(e){P.unshift({index:this.state.productItem.length+1,value:e.newItemValue,done:!1}),this.setState({productItem:P})}},{key:"removeItem",value:function(e){P.splice(e,1),this.setState({productItem:P})}},{key:"markTodoDone",value:function(e){var t=P[e];P.splice(e,1),t.done=!t.done,t.done?P.push(t):P.unshift(t),this.setState({productItem:P})}},{key:"render",value:function(){return o.a.createElement("div",{id:"main"},o.a.createElement("p",null,"Task List Page "),o.a.createElement(w,{productItems:this.state.productItem,removeItem:this.removeItem,markTodoDone:this.markTodoDone}),o.a.createElement(L,{addItem:this.addItem}),o.a.createElement(S.a,{className:"form-inline variant",variant:"outline-danger",onClick:this.clearList},"Remove All List   "))}}]),t}(a.Component),J=(n(78),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={cosmetics:[]},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("https://picsum.photos/v2/list").then((function(t){console.log(t.data),e.setState({cosmetics:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return console.log(this.state.cosmetics),o.a.createElement(p.a,null,o.a.createElement("nav",null,o.a.createElement(p.b,{to:"/"},"Home  ")," "," \u2764 ",o.a.createElement(p.b,{to:"/productList"}," Products ")," "," \u2764 ",o.a.createElement(p.b,{to:"/search"},"Search ")," "," \u2764 ",o.a.createElement(p.b,{to:"/contact"}," Contact")),o.a.createElement("div",null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:g}),o.a.createElement(d.a,{path:"/productList",component:A}),o.a.createElement(d.a,{path:"/search",component:function(){return o.a.createElement(x,{allcosmetics:e.state.cosmetics})}}),o.a.createElement(d.a,{path:"/contact",component:D}))))}}]),t}(a.Component));r.a.render(o.a.createElement(J,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.c02a48e6.chunk.js.map