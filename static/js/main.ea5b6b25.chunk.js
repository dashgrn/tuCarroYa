(this.webpackJsonptuautoya=this.webpackJsonptuautoya||[]).push([[0],{29:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(23),i=c.n(r),a=c(6),s=c(2),j=c(10),o=c(13),l=c(5),d=(c(29),c(7)),b=c.n(d),h="https://json-server-tucarro-sim01.herokuapp.com/data/",u=c(14),x=c.n(u),O=c(24),m=function(){var e=Object(O.a)(x.a.mark((function e(t){var c,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/diqhctpcx/upload",(c=new FormData).append("upload_preset","simuTec01"),c.append("file",t),e.next=6,fetch("https://api.cloudinary.com/v1_1/diqhctpcx/upload",{method:"POST",body:c});case 6:return n=e.sent,e.next=9,n.json();case 9:return r=e.sent,e.abrupt("return",r.secure_url);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=c(0),f=function(){var e=Object(n.useState)({marca:"",referencia:"",modelo:"",km:"",img:""}),t=Object(l.a)(e,2),c=t[0],r=t[1],i=function(e){var t=e.target;r(Object(o.a)(Object(o.a)({},c),{},Object(j.a)({},t.name,t.value)))};return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{id:"formulario",onSubmit:function(e){e.preventDefault(),alert("Auto agregado a la lista")},children:[Object(p.jsx)("h2",{children:"Registro de Autos"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"inputNombre",children:"Marca"}),Object(p.jsx)("input",{id:"inputNombre",name:"marca",onChange:i,type:"text"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"inputReferencia",children:"Referencia"}),Object(p.jsx)("input",{id:"inputReferencia",name:"referencia",onChange:i,type:"text"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"inputModelo",children:"Modelo"}),Object(p.jsx)("input",{id:"inputModelo",type:"number",name:"modelo",min:"2000",max:"2022",onChange:i})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"inputKm",children:"Kilometraje"}),Object(p.jsx)("input",{id:"inputKm",type:"number",name:"km",onChange:i})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Foto"}),Object(p.jsx)("input",{id:"botonImagen",type:"file",name:"img",onChange:function(e){var t=e.target.files[0];m(t).then((function(e){return c.img=e})).catch((function(e){return console.log(e)}))}})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"btn btn-warning",onClick:function(){b.a.post(h,c).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))},id:"btnRegistro",children:"Enviar"})})]})})},g=(c(50),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){b.a.get(h).then((function(e){return r(e.data)})).catch((function(e){return console.error(e)}))};return console.log(c),Object(p.jsx)("div",{children:Object(p.jsxs)("table",{className:"tabla",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Marca"}),Object(p.jsx)("th",{children:"Referencia"}),Object(p.jsx)("th",{children:"Modelo"}),Object(p.jsx)("th",{children:"Kilometros"}),Object(p.jsx)("th",{children:"Imagen"}),Object(p.jsx)("th",{children:"Acci\xf3n"})]})}),Object(p.jsx)("tbody",{children:c.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.marca}),Object(p.jsx)("td",{children:e.referencia}),Object(p.jsx)("td",{children:e.modelo}),Object(p.jsx)("td",{children:e.km}),Object(p.jsx)("td",{children:Object(p.jsx)("img",{src:e.img,width:"40",height:"50",alt:e.referencia})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e.id,void b.a.delete(h+t).then((function(e){i(),alert("Auto eliminado")})).catch((function(e){return console.log(e)}));var t},children:"Eliminar"})})]},e.id)}))})]})})}),v=(c(51),function(){return Object(p.jsxs)("div",{className:"bg-dark",children:[Object(p.jsx)("div",{className:"header",children:Object(p.jsxs)("nav",{children:[Object(p.jsx)(a.b,{className:"text-light",to:"/Home",children:"Inicio"}),Object(p.jsx)(a.b,{className:"text-light",to:"/Registro",children:"Registra"}),Object(p.jsx)(a.b,{className:"text-light",to:"/Todos",children:"Todos"})]})}),Object(p.jsx)("hr",{})]})}),y=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{id:"hero",className:"bg-dark text-secondary px-4 py-5 text-center",children:[Object(p.jsxs)("div",{className:"py-5",children:[Object(p.jsx)("h1",{className:"display-5 fw-bold text-white",children:"Tu Carro Ya!"}),Object(p.jsx)("div",{className:"col-lg-6 mx-auto",children:Object(p.jsx)("p",{className:"fs-5 mb-4",children:"Encuentra autos a los mejores precios!"})})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col text-center",children:[Object(p.jsx)("a",{href:"/Registro",children:Object(p.jsx)("button",{type:"button",className:"btn btn-warning",children:"Vende el tuyo"})}),Object(p.jsxs)("a",{href:"/Todos",children:[" ",Object(p.jsx)("button",{type:"button",className:"btn btn-warning",children:"Listar todos"})]})]})})]})})},N=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(a.a,{children:[Object(p.jsx)(v,{}),Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{exact:!0,path:"/Registro",element:Object(p.jsx)(f,{})}),Object(p.jsx)(s.a,{exact:!0,path:"/Todos",element:Object(p.jsx)(g,{})}),Object(p.jsx)(s.a,{exact:!0,path:"/Home",element:Object(p.jsx)(y,{})}),Object(p.jsx)(s.a,{exact:!0,path:"/",element:Object(p.jsx)(y,{})})]})]})})};i.a.render(Object(p.jsx)(N,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.ea5b6b25.chunk.js.map