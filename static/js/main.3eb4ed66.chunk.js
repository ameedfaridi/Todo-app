(this["webpackJsonptodo-redux"]=this["webpackJsonptodo-redux"]||[]).push([[0],{37:function(e,t,a){e.exports=a(48)},42:function(e,t,a){},43:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),i=(a(42),a(27)),l=a(16),d=a(35),u=a(34),m=(a(43),a(12)),s=a(65),f=a(66),p=function(e){var t=e.id,a=e.item,n=e.name,r=e.del;return o.a.createElement("div",{className:"common-part"},o.a.createElement(s.a,{item:!0,xs:12,key:t,className:"common"},o.a.createElement(s.a,{item:!0,xs:10},o.a.createElement("h2",null,a)),o.a.createElement(s.a,{item:!0,xs:2},o.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:function(){return r(t,n)},className:"dlt-btn"},"Del"))))},g=function(){var e=Object(m.d)((function(e){return e.Todo.todo})),t=Object(m.d)((function(e){return e.Goal.goal})),a=Object(m.c)(),n=function(e,t){return a("Todo"===t?{type:"DEL_TODO",id:e}:function(e){return{type:"DEL_GOAL",id:e}}(e))};return o.a.createElement(s.a,{container:!0,spacing:3,className:"list"},o.a.createElement(s.a,{item:!0,xs:6},o.a.createElement("h1",null,"Todo"),o.a.createElement("div",{className:"toal"},e.map((function(e,t){return o.a.createElement(p,{del:n,id:e.id,item:e.todo,name:"Todo",key:e.id})})))),o.a.createElement(s.a,{item:!0,xs:6},o.a.createElement("h1",null,"Goal"),o.a.createElement("div",null,t.map((function(e){return o.a.createElement(p,{del:n,id:e.id,item:e.goal,name:"goal",key:e.id})})))))},E=["todo","goal"],v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).add=function(t){t.preventDefault(),t.target.todo?e.props.addTodo(t.target.todo.value):e.props.addGoal(t.target.goal.value),document.getElementById("empty").value=""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(s.a,{container:!0},o.a.createElement(s.a,{item:!0,xs:12},o.a.createElement("h1",null,"Created With Redux"))),o.a.createElement("div",null,o.a.createElement(s.a,{container:!0,spacing:3,className:"search-container"},E.map((function(t,a){return o.a.createElement(s.a,{item:!0,xs:6,key:a},o.a.createElement("form",{onSubmit:function(t){return e.add(t)},className:"form"},o.a.createElement("input",{type:"text",name:t,required:!0,autoComplete:"off",id:"empty"}),o.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit"},"Add ".concat(t))))}))),o.a.createElement(g,null)))}}]),a}(n.Component),O=Object(m.b)((function(e){return{Todo:e.Todo.todo,Goal:e.Goal.goal}}),(function(e){return{addTodo:function(t){return e(function(e){return{type:"ADD_TODO",todo:e}}(t))},addGoal:function(t){return e(function(e){return{type:"ADD_GOAL",goal:e}}(t))}}}))(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(10),h=a(20),y=a(8),D={todo:[],id:0},j={goal:[],id:0},T=Object(b.combineReducers)({Todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;return"ADD_TODO"===t.type?{id:e.id+1,todo:[].concat(Object(y.a)(e.todo),[{id:e.id+1,todo:t.todo}])}:"DEL_TODO"===t.type?Object(h.a)(Object(h.a)({},e),{},{todo:e.todo.filter((function(e){return e.id!==t.id}))}):e},Goal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return"ADD_GOAL"===t.type?{id:e.id+1,goal:[].concat(Object(y.a)(e.goal),[{id:e.id+1,goal:t.goal}])}:"DEL_GOAL"===t.type?Object(h.a)(Object(h.a)({},e),{},{goal:e.goal.filter((function(e){return e.id!==t.id}))}):e}}),x=a(32),A=a.n(x),G=a(33),k=Object(b.createStore)(T,Object(G.composeWithDevTools)(Object(b.applyMiddleware)(A.a)));console.log(k.getState()),k.subscribe((function(){return console.log("state changed",k.getState())})),c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m.a,{store:k},o.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.3eb4ed66.chunk.js.map