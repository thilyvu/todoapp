(function(t){function e(e){for(var o,d,i=e[0],c=e[1],s=e[2],l=0,p=[];l<i.length;l++)d=i[l],Object.prototype.hasOwnProperty.call(a,d)&&a[d]&&p.push(a[d][0]),a[d]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=d(d.s=n[0]))}return t}var o={},a={app:0},r=[];function d(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=t,d.c=o,d.d=function(t,e,n){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)d.d(n,o,function(e){return t[e]}.bind(null,o));return n},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1795:function(t,e,n){},"332a":function(t,e,n){},"3a15":function(t,e,n){"use strict";n("1795")},"441d":function(t,e){},"4c05":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("7a23"),a=Object(o["r"])("data-v-3b655a3d");Object(o["j"])("data-v-3b655a3d");var r={id:"todolist"},d=Object(o["f"])(" Todo List "),i=Object(o["g"])("span",null,"Get things done, one item at a time.",-1);Object(o["i"])();var c=a((function(t,e,n,a,c,s){return Object(o["h"])(),Object(o["d"])("h1",r,[d,i])}))},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a=Object(o["r"])("data-v-cbbd8052");Object(o["j"])("data-v-cbbd8052");var r={className:"todolist"},d={key:0};Object(o["i"])();var i=a((function(t,e,n,a,i,c){var s=Object(o["l"])("headers"),u=Object(o["l"])("todolist"),l=Object(o["l"])("updateitem"),p=Object(o["l"])("addtask");return Object(o["h"])(),Object(o["d"])("div",r,[Object(o["g"])(s),Object(o["g"])(u,{todo:i.todos,onDeleteItemFromList:c.deleteItem,position:"1",onCheck:c.checkItem,onUpdate:c.updateOldItem},null,8,["todo","onDeleteItemFromList","onCheck","onUpdate"]),Object(o["g"])(u,{todo:i.todosFalse,onDeleteItemFromList:c.deleteItem,position:"2",onCheck:c.checkItem,onUpdate:c.updateOldItem},null,8,["todo","onDeleteItemFromList","onCheck","onUpdate"]),i.showupdate?(Object(o["h"])(),Object(o["d"])("div",d,[Object(o["g"])(l,{onUpdate2:c.updateNew,update:i.UD},null,8,["onUpdate2","update"])])):Object(o["e"])("",!0),Object(o["g"])(p,{onAddItem:c.addNewItem},null,8,["onAddItem"])])})),c=n("5530"),s=n("1da1"),u=(n("4de4"),n("d81d"),n("96cf"),Object(o["r"])("data-v-2229176a"));Object(o["j"])("data-v-2229176a");var l=Object(o["g"])("label",{for:"newitem"},"Add to the todo list",-1),p=Object(o["g"])("button",{type:"submit"},"Add item",-1);Object(o["i"])();var b=u((function(t,e,n,a,r,d){return Object(o["h"])(),Object(o["d"])("form",{name:"newform",onSubmit:e[2]||(e[2]=Object(o["q"])((function(){return d.addItem&&d.addItem.apply(d,arguments)}),["prevent"]))},[l,Object(o["p"])(Object(o["g"])("input",{type:"text",name:"newitem",id:"newitem","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.newitem=t})},null,512),[[o["n"],r.newitem]]),p],32)})),h={data:function(){return{newitem:"",done:!1,id:1e5*Math.random()}},methods:{addItem:function(){""==this.newitem&&alert("please add task");var t={id:Math.floor(1e5*Math.random()),label:this.newitem,done:!1};this.$emit("addItem",t),this.newitem=""}}};n("fda6");h.render=b,h.__scopeId="data-v-2229176a";var f=h,m=n("8bb0"),O={class:"label"},j={class:"actions"},v=Object(o["g"])("i",{class:"fas fa-edit"},null,-1),g={key:0},q=Object(o["g"])("i",{class:"far fa-square"},null,-1),w={key:1},y=Object(o["g"])("i",{class:"far fa-check-square"},null,-1),k=Object(o["g"])("i",{class:"far fa-trash-alt"},null,-1);function _(t,e,n,a,r,d){var i=Object(o["l"])("togglebutton");return Object(o["h"])(),Object(o["d"])("div",{onDrop:e[3]||(e[3]=function(t){return d.OnDrop(t,n.position)}),onDragenter:e[4]||(e[4]=Object(o["q"])((function(){}),["prevent"])),onDragover:e[5]||(e[5]=Object(o["q"])((function(){}),["prevent"]))},[Object(o["g"])(o["b"],{name:"todolist",tag:"ul"},{default:Object(o["o"])((function(){return[(Object(o["h"])(!0),Object(o["d"])(o["a"],null,Object(o["k"])(n.todo,(function(n){return Object(o["h"])(),Object(o["d"])("li",{class:n.done?"done":"",key:n.id,draggable:"true",onDragstart:function(t){return d.startDrag(t,n)},onDragenter:e[1]||(e[1]=Object(o["q"])((function(){}),["prevent"])),onDragover:e[2]||(e[2]=Object(o["q"])((function(){}),["prevent"]))},[Object(o["g"])("span",O,Object(o["m"])(n.label),1),Object(o["g"])("div",j,[Object(o["g"])("button",{class:"btn-picto",type:"button",onClick:function(e){return t.$emit("update",n)}},[v],8,["onClick"]),Object(o["g"])("button",{class:"btn-picto",type:"button",onClick:function(e){return t.$emit("Check",n)},"aria-label":"Edit",title:"Edit"},[n.done?(Object(o["h"])(),Object(o["d"])("div",g,[q])):Object(o["e"])("",!0),n.done?Object(o["e"])("",!0):(Object(o["h"])(),Object(o["d"])("div",w,[y]))],8,["onClick"]),Object(o["g"])("button",{class:"btn-picto",type:"button",onClick:function(e){return t.$emit("deleteItemFromList",n)},"aria-label":"Delete",title:"Delete"},[k],8,["onClick"])])],42,["onDragstart"])})),128))]})),_:1}),Object(o["g"])(i,{label:"Move done items at the end?",name:"todosort",onClicked:t.clickontoogle},null,8,["onClicked"])],32)}var I={props:{todo:Object,position:String},methods:{startDrag:function(t,e){t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("itemID",e.id),localStorage.setItem("DraggedItem",JSON.stringify(e))},OnDrop:function(t,e){console.log(e);var n=JSON.parse(localStorage.getItem("DraggedItem"));console.log(n.done),"1"==e&&0==n.done&&this.$emit("Check",n),"2"==e&&1==n.done&&this.$emit("Check",n)}}};n("f149");I.render=_;var T=I,x=Object(o["r"])("data-v-61966804");Object(o["j"])("data-v-61966804");var D=Object(o["g"])("label",{for:"update"},"Update to the todo list",-1),C=Object(o["g"])("button",{type:"submit"},"Update item",-1);Object(o["i"])();var M=x((function(t,e,n,a,r,d){return Object(o["h"])(),Object(o["d"])("form",{name:"newform",onSubmit:e[2]||(e[2]=Object(o["q"])((function(t){return d.UpdateItem(n.Item)}),["prevent"]))},[D,Object(o["p"])(Object(o["g"])("input",{type:"text",name:"updateItem",id:"updateItem","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.updateItem=t})},null,512),[[o["n"],r.updateItem]]),C],32)})),F={data:function(){return{updateItem:"",done:!1,id:1e5*Math.random()}},methods:{UpdateItem:function(){""==this.updateItem&&alert("please add task");var t={id:Math.floor(1e5*Math.random()),label:this.updateItem,done:!1};this.$emit("Update2",t),this.updateItem=""}},props:{Item:Object}};n("6fa8");F.render=M,F.__scopeId="data-v-61966804";var S=F,E=n("bc3a"),U=n.n(E),G={setup:function(){},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U()({method:"POST",url:"https://demooooo.hasura.app/v1/graphql",headers:{"Content-Type":"application/json","x-hasura-admin-secret":"KnuTN2VT5la4Ob5Se3hTEGMauGzotiG7h4kFPii5q5TKXuZCWdZqXEcEjpi8W29q"},data:{query:"\n\t\t\t\t\t\tquery MyQuery {\n\t\t\t\t\t\t\ttodos(where: {done: {_eq: true}}) {\n\t\t\t\t\t\t\t\tdone\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tlabel\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\n\t\t\t\t"}});case 3:n=e.sent,console.log(n.data.data.todos),t.todos=n.data.data.todos,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:return e.prev=11,e.next=14,U()({method:"POST",url:"https://demooooo.hasura.app/v1/graphql",headers:{"Content-Type":"application/json","x-hasura-admin-secret":"KnuTN2VT5la4Ob5Se3hTEGMauGzotiG7h4kFPii5q5TKXuZCWdZqXEcEjpi8W29q"},data:{query:"\n\t\t\t\t\t\tquery MyQuery {\n\t\t\t\t\t\ttodos(where: {done: {_eq: false}}) {\n\t\t\t\t\t\t\tdone\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tlabel\n\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t"}});case 14:o=e.sent,console.log(o.data.data.todos),t.todosFalse=o.data.data.todos,e.next=22;break;case 19:e.prev=19,e.t1=e["catch"](11),console.error(e.t1);case 22:case"end":return e.stop()}}),e,null,[[0,8],[11,19]])})))()},components:{headers:m["default"],todolist:T,addtask:f,updateitem:S},data:function(){return{todos:[],todosFalse:[],UD:{id:1e3,label:"Learn VueJs",done:!0},showupdate:!1}},methods:{deleteItem:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.todos=e.todos.filter((function(e){return e.id!==t.id})),e.todosFalse=e.todosFalse.filter((function(e){return e.id!==t.id})),n.prev=2,n.next=5,U()({method:"POST",url:"https://demooooo.hasura.app/v1/graphql",headers:{"Content-Type":"application/json","x-hasura-admin-secret":"KnuTN2VT5la4Ob5Se3hTEGMauGzotiG7h4kFPii5q5TKXuZCWdZqXEcEjpi8W29q"},data:{query:"\n\t\t\t\t\tmutation MyMutation($_eq: Int) {\n\t\t\t\t\tdelete_todos(where: {id: {_eq: $_eq}}) {\n\t\t\t\t\t\treturning {\n\t\t\t\t\t\tdone\n\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t",variables:{_eq:t.id}}});case 5:o=n.sent,console.log(o.data.data.todos),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},checkItem:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t.done),1==t.done?(e.todosFalse.push(t),e.todosFalse=e.todosFalse.map((function(e){return e.id===t.id?Object(c["a"])(Object(c["a"])({},e),{},{done:!e.done}):e})),e.todos=e.todos.filter((function(e){return e.id!==t.id}))):(e.todos.push(t),e.todos=e.todos.map((function(e){return e.id===t.id?Object(c["a"])(Object(c["a"])({},e),{},{done:!e.done}):e})),e.todosFalse=e.todosFalse.filter((function(e){return e.id!==t.id}))),n.prev=2,n.next=5,U()({method:"POST",url:"https://demooooo.hasura.app/v1/graphql",headers:{"Content-Type":"application/json","x-hasura-admin-secret":"KnuTN2VT5la4Ob5Se3hTEGMauGzotiG7h4kFPii5q5TKXuZCWdZqXEcEjpi8W29q"},data:{query:"\n\t\t\t\t\tmutation MyMutation($_eq: Int, $_set: todos_set_input ) {\n\t\t\t\t\t\tupdate_todos(where: {id: {_eq: $_eq}}, _set: $_set) {\n\t\t\t\t\t\t\treturning {\n\t\t\t\t\t\t\tdone\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t",variables:{_eq:t.id,_set:{done:!t.done}}}});case 5:o=n.sent,console.log(o.data.data.todos),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},updateOldItem:function(t){this.UD.id=t.id,this.UD.label=t.label,this.UD.done=t.done,this.showupdate=!this.showupdate},addNewItem:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t.done),1==t.done?e.todos.push(t):e.todosFalse.push(t),n.prev=2,n.next=5,U()({method:"POST",url:"https://demooooo.hasura.app/v1/graphql",headers:{"Content-Type":"application/json","x-hasura-admin-secret":"KnuTN2VT5la4Ob5Se3hTEGMauGzotiG7h4kFPii5q5TKXuZCWdZqXEcEjpi8W29q"},data:{query:"\n\t\t\t\t\t mutation MyMutation($objects: [todos_insert_input!]!) {\n\t\t\t\t\t\tinsert_todos(objects: $objects) {\n\t\t\t\t\t\t\treturning {\n\t\t\t\t\t\t\tdone\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tlabel\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t",variables:{objects:{done:t.done,id:t.id,label:t.label}}}});case 5:o=n.sent,console.log(o.data.data.todos),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},updateNew:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t.done),1==t.done?e.todos=e.todos.map((function(n){return n.id===e.UD.id?{todo:n,label:t.label}:n})):e.todosFalse=e.todosFalse.map((function(n){return n.id===e.UD.id?{todoFalse:n,label:t.label}:n})),n.prev=2,n.next=5,U()({method:"POST",url:"https://demooooo.hasura.app/v1/graphql",headers:{"Content-Type":"application/json","x-hasura-admin-secret":"KnuTN2VT5la4Ob5Se3hTEGMauGzotiG7h4kFPii5q5TKXuZCWdZqXEcEjpi8W29q"},data:{query:"\n\t\t\t\t\t\tmutation MyMutation($_eq: Int , $_set: todos_set_input = {}) {\n\t\t\t\t\t\t\tupdate_todos(where: {id: {_eq: $_eq}}, _set: $_set) {\n\t\t\t\t\t\t\t\treturning {\n\t\t\t\t\t\t\t\tdone\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tlabel\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t",variables:{_eq:e.UD.id,_set:{done:t.done,label:t.label}}}});case 5:o=n.sent,console.log(o.data.data.todos),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),console.error(n.t0);case 12:e.showupdate=!e.showupdate;case 13:case"end":return n.stop()}}),n,null,[[2,9]])})))()}}};n("d131");G.render=i,G.__scopeId="data-v-cbbd8052";var P=G;Object(o["c"])(P).mount("#app")},"60e8":function(t,e,n){},"6fa8":function(t,e,n){"use strict";n("60e8")},"7cfa":function(t,e,n){},"8bb0":function(t,e,n){"use strict";var o=n("4c05"),a=n("8c67");n("3a15");a["default"].render=o["a"],a["default"].__scopeId="data-v-3b655a3d",e["default"]=a["default"]},"8c67":function(t,e,n){"use strict";var o=n("441d"),a=n.n(o);n.d(e,"default",(function(){return a.a}))},"9f2d":function(t,e,n){},d131:function(t,e,n){"use strict";n("332a")},f149:function(t,e,n){"use strict";n("9f2d")},fda6:function(t,e,n){"use strict";n("7cfa")}});
//# sourceMappingURL=app.ae607465.js.map