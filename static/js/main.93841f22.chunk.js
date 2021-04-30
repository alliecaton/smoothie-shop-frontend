(this["webpackJsonpsmoothie-store"]=this["webpackJsonpsmoothie-store"]||[]).push([[0],{81:function(e,t,r){},90:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),i=r(18),A=r.n(i),a=r(5),s=r(6),o=r(8),d=r(7),l=r(1),g=function(e){return Object(l.jsx)(l.Fragment,{children:e.item.ingredients.map((function(e){return Object(l.jsx)("img",{className:"cart-image",alt:e.name,src:e.image_url})}))})},j=r(20),u=r(26),p=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={items:e.props.items},e.renderItems=function(){return e.props.items.map((function(t){return Object(l.jsxs)("div",{className:"cart-list",children:[Object(l.jsxs)("span",{className:"x-button",children:[Object(l.jsx)(j.a,{onClick:e.handleClick,value:t.id,variant:"outline-danger",children:"X"})," "]}),Object(l.jsx)("span",{children:"Item Price: "}),Object(l.jsx)("span",{className:"ingredient-price",children:"$".concat(t.itemPrice)}),Object(l.jsx)("span",{className:"cart-item",children:Object(l.jsx)(g,{item:t},t.id)})]})}))},e.handleClick=function(t){t.preventDefault(),e.setState((function(e){return{items:e.items.filter((function(e){return e.id!==t.target.value}))}})),e.props.removeCartItem(t.target.value)},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(u.Scrollbars,{style:{width:1075,height:500},children:[Object(l.jsx)("h5",{children:"Order:"}),this.renderItems()]})})}}]),r}(n.Component),h=r(15),b=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("h5",{children:[" Checkout Total: "," $".concat(e.cartTotal)]})})},O=r(13),m=r(4),B=r(37),C=r.n(B),D=r(92),f=r(93),I=r(94),w=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={items:e.props.items,totalPrice:e.props.totalPrice,customerName:"",address:"",note:"",message:""},e.handleChange=function(t){e.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(O.a)({},t.target.name,t.target.value))}))},e.handleSubmit=function(t){t.preventDefault(),e.state.items.length>0&&""!==e.state.customerName&&""!==e.setState.address?(e.props.checkout(e.state),e.props.emptyCart(),e.setState({message:"Your order is on the way!"})):e.setState({message:"Please fill out all required fields"})},e}return Object(s.a)(r,[{key:"render",value:function(){var e=this;return Object(l.jsx)(D.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:this.state.message}),Object(l.jsxs)("form",{className:"checkout-form",children:[Object(l.jsx)("label",{children:"Please Enter Checkout Details"}),Object(l.jsx)("br",{}),Object(l.jsxs)(f.a,{children:[Object(l.jsx)("br",{}),Object(l.jsxs)(I.a,{children:[Object(l.jsx)("label",{htmlFor:"customerName",children:"* Name:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{id:"customerName",type:"text",name:"customerName",onChange:this.handleChange}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"address",children:"* Address:"}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{id:"address",type:"textarea",name:"address",onChange:this.handleChange}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"note",children:"Customer Note:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{id:"note",type:"text",name:"note",onChange:this.handleChange}),Object(l.jsx)("br",{})]}),Object(l.jsxs)(I.a,{children:[Object(l.jsx)("label",{htmlFor:"cardnum",children:"* Card Number:"}),Object(l.jsx)("input",{id:"cardnum",type:"text",name:"cardNumber",onChange:this.handleChange}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"cardexp",children:"* Expiration Date (MM/YY):"}),Object(l.jsx)("input",{id:"cardexp",type:"text",name:"cardExp",onChange:this.handleChange}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"cardsec",children:"* Security Code:"}),Object(l.jsx)("input",{id:"cardsec",type:"password",name:"cardSecurityNum",onChange:this.handleChange}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(j.a,{variant:"success",onClick:function(t){return e.handleSubmit(t)},children:"Submit Order"})]})]})]})]})})}}]),r}(n.Component),x=Object(h.b)(null,(function(e){return{checkout:function(t){return e(function(e){return function(t){return t({type:"LOADING_POST"}),fetch("https://boiling-earth-59543.herokuapp.com/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C.a.decamelizeKeys({order:e}))}).then((function(e){return e.json()})).then((function(r){console.log("this is the posted checkout obj",r),t({type:"CHECKOUT",payload:e})}))}}(t))},emptyCart:function(){return e({type:"EMPTY_CART"})}}}))(w),v=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={formDisplayed:!1},e.displayCheckoutForm=function(t){e.setState({formDisplayed:!0})},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(j.a,{variant:"warning",onClick:this.displayCheckoutForm,children:"Checkout"})," ",Object(l.jsx)("div",{style:{display:this.state.formDisplayed?"block":"none"},children:Object(l.jsx)(x,{items:this.props.items,totalPrice:this.props.totalPrice})})]})}}]),r}(n.Component),S=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(l.jsx)(D.a,{children:Object(l.jsx)("div",{className:"body-wrapper",children:Object(l.jsx)("div",{className:"inner-wrapper",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(p,{removeCartItem:this.props.removeCartItem,items:this.props.items}),Object(l.jsx)(b,{cartTotal:this.props.cartTotal}),Object(l.jsx)(v,{items:this.props.items,totalPrice:this.props.cartTotal})]})})})})}}]),r}(n.Component),N=Object(h.b)((function(e){return{items:e.cartReducer.cartItems,ingredientIds:e.cartReducer.cartItems.ingredientIds,cartTotal:e.cartReducer.cartTotal}}),(function(e){return{removeCartItem:function(t){return e(function(e){return{type:"REMOVE_ITEM",payload:e}}(t))}}}))(S),E=r(21),M=r(9),k=r(95),F=r(44),Q=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(l.jsx)("div",{children:this.props.items.length})}}]),r}(n.Component),y=Object(h.b)((function(e){return{items:e.cartReducer.cartItems}}))(Q),P=function(){var e;return Object(l.jsx)("div",{children:Object(l.jsx)(D.a,{className:"nav-bar-edit",children:Object(l.jsxs)(k.a,{bg:"light",className:"nav-bar-edit",children:[Object(l.jsx)(E.b,{to:"/smoothie-shop-frontend/",children:Object(l.jsxs)(k.a.Brand,{children:[Object(l.jsxs)("svg",(e={className:"svg-icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Object(O.a)(e,"xmlns","http://www.w3.org/1999/xlink"),Object(O.a)(e,"viewBox","-100 -50 600 600"),Object(O.a)(e,"xmlns","preserve"),Object(O.a)(e,"children",[Object(l.jsx)("defs",{children:Object(l.jsxs)("linearGradient",{id:"logo-gradient",x1:"50%",y1:"0%",x2:"50%",y2:"100%",children:[Object(l.jsx)("stop",{offset:"0%",stopColor:"#6666ff",children:Object(l.jsx)("animate",{attributeName:"stop-color",values:"#6666ff; #01FF89; #6666ff",dur:"4s",repeatCount:"indefinite"})}),Object(l.jsx)("stop",{offset:"100%",stopColor:"#01FF89",children:Object(l.jsx)("animate",{attributeName:"stop-color",values:"#01FF89; #6666ff; #01FF89",dur:"4s",repeatCount:"indefinite"})})]})}),Object(l.jsx)("path",{fill:"url('#logo-gradient')",d:"M426,0h-84c-6.88,0-12.992,4.416-15.168,10.944l-12.96,38.848C293.552,38.816,270.672,32,246,32 c-73.92,0-134.304,56.224-142.368,128H102c-17.632,0-32,14.368-32,32v32c0,17.632,14.368,32,32,32h1.888l30.24,241.984 c0.992,8,7.808,14.016,15.872,14.016h192c8.064,0,14.88-6.016,15.872-14.016L388.112,256H390c17.632,0,32-14.368,32-32v-32 c0-17.632-14.368-32-32-32h-1.632c-4.064-36.192-21.28-68.16-47.136-91.168L353.52,32H426c8.832,0,16-7.168,16-16S434.832,0,426,0 z M327.888,480H164.112l-28-224h219.744L327.888,480z M390,192v32H102v-32h16h256H390z M356.4,160.032H135.632 C143.472,105.888,189.744,64,246,64c21.152,0,40.736,6.24,57.632,16.48l-8.8,26.464c-2.816,8.384,1.728,17.44,10.112,20.224 C306.64,127.744,308.336,128,310,128c6.688,0,12.928-4.224,15.168-10.944l4.8-14.368 C343.856,118.56,353.232,138.208,356.4,160.032z"})]),e))," ",Object(l.jsx)("span",{className:"line",children:"|"})]})}),Object(l.jsx)(E.b,{className:"nav-text justify-content-end",to:"/smoothie-shop-frontend/smoothie",children:"BUILD A SMOOTHIE"}),Object(l.jsxs)(k.a.Collapse,{className:"justify-content-end",children:[Object(l.jsx)(y,{}),Object(l.jsx)(E.b,{to:"/smoothie-shop-frontend/cart",children:Object(l.jsx)(F.a,{})})]})]})})})},R=function(e){return Object(l.jsx)(I.a,{md:"auto",children:Object(l.jsxs)("div",{className:"info-wrapper",children:[Object(l.jsx)("img",{className:"ingredient-image",src:e.ingredient.image_url}),Object(l.jsx)("h4",{className:"ingredient-name",children:e.ingredient.name}),Object(l.jsx)("p",{className:"ingredient-price",children:"$".concat(e.ingredient.price,"0")})]})})},U=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"current-ingredient-image",src:e.ingredient.image_url})})},G=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).renderIngredients=function(){return e.props.smoothieIngredients.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(U,{ingredient:e},e.id)})}))},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Current Ingredients: "}),Object(l.jsxs)("div",{className:"container-image",children:[Object(l.jsx)("img",{className:"cup",src:"data:image/png;base64,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"}),Object(l.jsx)("ul",{className:"ings",children:this.renderIngredients()})]})]})}}]),r}(n.Component),K=r(17),J=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={smoothieIngredients:e.props.smoothieIngredients,ingredientIds:e.props.ingredientIds,totalPrice:e.props.totalPrice,error:""},e.renderIngredients=function(){return e.props.ingredients.map((function(t){var r;return Object(l.jsxs)("div",{className:"unchecked",children:[Object(l.jsx)("label",{htmlFor:t.id,className:"ing-label",children:Object(l.jsx)(R,{ingredient:t},t.id)}),Object(l.jsx)("input",(r={className:"ing-input",checked:!!e.state.ingredientIds.find((function(e){return t.id===e}))},Object(O.a)(r,"className","checkbox"),Object(O.a)(r,"type","checkbox"),Object(O.a)(r,"id",t.id),Object(O.a)(r,"value",t.id),Object(O.a)(r,"name",t.id),Object(O.a)(r,"onChange",(function(t){return e.handleSelectionChange(t)})),r)),Object(l.jsx)("br",{})]})}))},e.handleSelectionChange=function(t){var r=e.props.ingredients.find((function(e){return"".concat(e.id)===t.target.value}));t.target.checked&&!e.state.ingredientIds.find((function(e){return e===t.target.value}))?(e.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},{totalPrice:parseFloat(e.totalPrice)+parseFloat(r.price),smoothieIngredients:[].concat(Object(K.a)(e.smoothieIngredients),[r]),ingredientIds:[].concat(Object(K.a)(e.ingredientIds),[r.id])})})),e.props.addSmoothieIngredient(r)):t.target.checked||(e.setState((function(e){return{totalPrice:parseFloat(e.totalPrice)-parseFloat(r.price),smoothieIngredients:e.smoothieIngredients.filter((function(e){return e.id!==r.id})),ingredientIds:e.ingredientIds.filter((function(e){return e!==r.id}))}})),e.props.removeSmoothieIngredient(r))},e.unCheck=function(){for(var e=document.getElementsByClassName("checkbox"),t=0;t<e.length;t++)e[t].checked=!1},e.handleSubmit=function(t){t.preventDefault(),e.state.smoothieIngredients.length>0?(e.props.addCartItem(e.state),e.setState({smoothieIngredients:[],ingredientIds:[],totalPrice:0}),e.props.removeAllIngredients()):e.setState(Object(m.a)(Object(m.a)({},e.state),{},{error:"Please select at least one ingredient"}))},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){this.props.fetchIngredients()}},{key:"render",value:function(){var e=this;return console.log(this.state),Object(l.jsx)("div",{className:"body-wrapper",children:Object(l.jsx)(I.a,{children:Object(l.jsxs)("form",{children:[Object(l.jsx)(j.a,{variant:"outline-primary",onClick:function(t){return e.handleSubmit(t)},children:"Add Smoothie to Cart!"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:"Select Ingredients:"}),Object(l.jsx)(u.Scrollbars,{style:{width:350,height:600},children:this.renderIngredients()}),this.state.error,Object(l.jsx)("br",{})]})})})}}]),r}(n.Component),z=Object(h.b)(null,(function(e){return{addCartItem:function(t){return e({type:"ADD_ITEM",payload:t})}}}))(J),T=(r(35),r(40)),H=r.n(T),Z=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(H.a,{})})},L=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).loading=function(){return e.props.loading?Object(l.jsx)(Z,{}):Object(l.jsx)(I.a,{children:Object(l.jsx)(G,{smoothieIngredients:e.props.smoothieIngredients})})},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(l.jsx)(D.a,{className:"body-wrapper",children:Object(l.jsx)("div",{className:"smoothie-container",children:Object(l.jsx)("div",{className:"inner-wrapper",children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(I.a,{children:Object(l.jsx)(z,{fetchIngredients:this.props.fetchIngredients,ingredients:this.props.ingredients,addSmoothieIngredient:this.props.addSmoothieIngredient,removeSmoothieIngredient:this.props.removeSmoothieIngredient,removeAllIngredients:this.props.removeAllIngredients,totalPrice:this.props.totalPrice,smoothieIngredients:this.props.smoothieIngredients,ingredientIds:this.props.ingredientIds})}),Object(l.jsx)("div",{className:"body-wrapper",children:this.loading()})]})})})})}}]),r}(n.Component),X=Object(h.b)((function(e){return{ingredients:e.smoothieReducer.ingredients,smoothieIngredients:e.smoothieReducer.smoothieIngredients,loading:e.smoothieReducer.loading,totalPrice:e.smoothieReducer.smoothiePrice,ingredientIds:e.smoothieReducer.ingredientIds}}),(function(e){return{fetchIngredients:function(){return e((function(e){fetch("https://boiling-earth-59543.herokuapp.com/ingredients").then((function(e){return e.json()})).then((function(t){e({type:"GET_INGREDIENTS",payload:t})}))}))},addSmoothieIngredient:function(t){return e({type:"ADD_TO_SMOOTHIE",payload:t})},removeSmoothieIngredient:function(t){return e({type:"REMOVE_FROM_SMOOTHIE",payload:t})},removeAllIngredients:function(){return e({type:"REMOVE_ALL_INGREDIENTS"})}}}))(L),q=r.p+"static/media/fruit.7d1cbaf9.svg",Y=function(){return Object(l.jsx)("div",{className:"homepage",children:Object(l.jsx)(D.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:"store-name",src:q}),Object(l.jsx)("div",{className:"description",children:Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})})})},V=(r(81),r(82),function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).renderSmoothie=function(){return e.props.order.products.map((function(e){return Object(l.jsxs)("div",{children:[e.id,Object(l.jsx)(g,{item:e})]})}))},e}return Object(s.a)(r,[{key:"render",value:function(){return console.log("the smoothie",this.props.order.products),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[" ".concat(this.props.order.id," ").concat(this.props.order.address," ").concat(this.props.order.total_price)," "]}),this.renderSmoothie()]})}}]),r}(n.Component)),W=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={orders:[]},e.renderOrders=function(){return e.state.orders.map((function(e){return Object(l.jsx)("div",{className:"body-wrapper",children:Object(l.jsx)(V,{order:e})})}))},e}return Object(s.a)(r,[{key:"render",value:function(){return console.log("order state",this.state),Object(l.jsx)("div",{children:this.renderOrders()})}}]),r}(n.Component),_=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)(W,{})})}}]),r}(n.Component),$=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(E.a,{children:[Object(l.jsx)(P,{}),Object(l.jsx)("div",{children:Object(l.jsxs)(M.c,{children:[Object(l.jsx)(M.a,{path:"/smoothie-shop-frontend/cart",component:N}),Object(l.jsx)(M.a,{path:"/smoothie-shop-frontend/smoothie",component:X}),Object(l.jsx)(M.a,{path:"/smoothie-shop-frontend/admin",component:_}),Object(l.jsx)(M.a,{path:"/smoothie-shop-frontend/",component:Y})]})})]})})}}]),r}(n.Component),ee=r(24),te=r(41),re=r(42),ne=r(43),ce=r.n(ne);r(85);var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{ingredients:[],smoothieIngredients:[],ingredientIds:[],smoothiePrice:0,loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_INGREDIENTS":return Object(m.a)(Object(m.a)({},e),{},{ingredients:Object(K.a)(e.ingredients),loading:!0});case"GET_INGREDIENTS":return Object(m.a)(Object(m.a)({},e),{},{ingredients:t.payload,loading:!1});case"ADD_TO_SMOOTHIE":return Object(m.a)(Object(m.a)({},e),{},{smoothieIngredients:[].concat(Object(K.a)(e.smoothieIngredients),[t.payload]),ingredientIds:[].concat(Object(K.a)(e.ingredientIds),[t.payload.id]),smoothiePrice:parseFloat(e.smoothiePrice)+parseFloat(t.payload.price)});case"REMOVE_FROM_SMOOTHIE":return Object(m.a)(Object(m.a)({},e),{},{smoothieIngredients:e.smoothieIngredients.filter((function(e){return e.id!==t.payload.id})),ingredientIds:e.ingredientIds.filter((function(e){return e!==t.payload.id})),smoothiePrice:parseFloat(e.smoothiePrice)-parseFloat(t.payload.price)});case"REMOVE_ALL_INGREDIENTS":return Object(m.a)(Object(m.a)({},e),{},{smoothieIngredients:[],ingredientIds:[],smoothiePrice:0});default:return e}};var Ae=Object(ee.combineReducers)({cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[],cartTotal:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":var r={id:ce()(),ingredients:t.payload.smoothieIngredients,ingredientIds:t.payload.ingredientIds,itemPrice:t.payload.totalPrice};return Object(m.a)(Object(m.a)({},e),{},{cartItems:[].concat(Object(K.a)(e.cartItems),[r]),cartTotal:parseFloat(e.cartTotal)+parseFloat(r.itemPrice)});case"REMOVE_ITEM":var n=e.cartItems.find((function(e){return e.id===t.payload}));return Object(m.a)(Object(m.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload})),cartTotal:parseFloat(e.cartTotal)-parseFloat(n.itemPrice)});case"EMPTY_CART":return Object(m.a)(Object(m.a)({},e),{},{cartItems:[],cartTotal:0});default:return e}},smoothieReducer:ie,checkoutReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{order:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECKOUT":var r={ingredientIds:t.payload.items,totalPrice:t.payload.totalPrice,customerName:t.payload.customerName,address:t.payload.address,cardNumber:t.payload.cardNumber,cardExp:t.payload.cardExp,cardSecurityNum:t.payload.cardSecurityNum,note:t.payload.note};return{order:[].concat(Object(K.a)(e.order),[r])};default:return e}}}),ae=Object(ee.createStore)(Ae,Object(re.composeWithDevTools)(Object(ee.applyMiddleware)(te.a)));A.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h.a,{store:ae,children:Object(l.jsx)(E.a,{children:Object(l.jsx)($,{})})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.93841f22.chunk.js.map