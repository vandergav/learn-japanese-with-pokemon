(this["webpackJsonppokemon-master"]=this["webpackJsonppokemon-master"]||[]).push([[0],{28:function(e,t,a){},35:function(e,t,a){e.exports=a(65)},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),o=a.n(r),l=(a(40),a(8)),s=a.n(l),i=(a(28),a(2)),m=a(34),u=a(33),p=a(13);function v(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("h1",null,"Pok\xe9mon"),c.a.createElement("div",{className:"click-me"},c.a.createElement(m.a,{onClick:function(){return r(!a)},"aria-controls":"example-collapse-text","aria-expanded":a,className:"btn btn-warning btn-lg"},"Pok\xe9Nav"),c.a.createElement(u.a,{in:a},c.a.createElement("div",{id:"example-collapse-text"},c.a.createElement("div",null,c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement(p.b,{to:"/shiny"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"navbar-item",href:""},"Shiny"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"navbar-item",href:""},"Option 2")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"navbar-item",href:""},"Option 3"))))))))}function d(e){var t=e.gotoNextPage,a=e.gotoPrevPage;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"pagination-button"},a&&c.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg",onClick:a},"Previous")),c.a.createElement("div",{className:"pagination-button"},t&&c.a.createElement("button",{type:"button",className:"btn btn-warning btn-lg",onClick:t},"Next")))}function b(e){var t=e.imageUrl,a=t.split("/")[t.split("/").length-2],n="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/".concat(a,".png");return c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(p.b,{to:"/".concat(a)},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",null,a),c.a.createElement("img",{src:n,alt:"",width:"200",height:"200"})))))}function g(e){var t=e.pokemon,a=e.imageUrl;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3 list"},c.a.createElement("ul",null,t.map((function(e){return c.a.createElement("li",{className:"list-item",key:e},e)})))),c.a.createElement("div",{className:"col-8"},c.a.createElement("div",{className:"row"},a.map((function(e){return c.a.createElement(b,{key:e,imageUrl:e})})))))}function f(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("https://pokeapi.co/api/v2/pokemon"),l=Object(i.a)(o,2),m=l[0],u=l[1],p=Object(n.useState)(),v=Object(i.a)(p,2),b=v[0],f=v[1],E=Object(n.useState)(),x=Object(i.a)(E,2),h=x[0],k=x[1],j=Object(n.useState)(!0),N=Object(i.a)(j,2),O=N[0],_=N[1],w=Object(n.useState)([]),y=Object(i.a)(w,2),P=y[0],I=y[1];return Object(n.useEffect)((function(){var e;return _(!0),s.a.get(m,{cancelToken:new s.a.CancelToken((function(t){return e=t}))}).then((function(e){_(!1),f(e.data.next),k(e.data.previous),r(e.data.results.map((function(e){return e.name}))),I(e.data.results.map((function(e){return e.url})))})),function(){return e()}}),[m]),O?"Loading...":c.a.createElement("div",null,c.a.createElement("div",{className:"pagination-style"},c.a.createElement(d,{gotoNextPage:b?function(){u(b)}:null,gotoPrevPage:h?function(){u(h)}:null})),c.a.createElement("div",null,c.a.createElement(g,{pokemon:a,imageUrl:P})))}var E=a(9),x=a.n(E);function h(e){var t=e.match,a=Object(n.useState)([""]),r=Object(i.a)(a,2),o=(r[0],r[1],Object(n.useState)([""])),l=Object(i.a)(o,2),m=l[0],u=l[1],p=Object(n.useState)([""]),v=Object(i.a)(p,2),d=(v[0],v[1],Object(n.useState)([""])),b=Object(i.a)(d,2),g=b[0],f=b[1],E=Object(n.useState)([""]),h=Object(i.a)(E,2),k=h[0],j=h[1],N=Object(n.useState)([""]),O=Object(i.a)(N,2),_=O[0],w=O[1],y=Object(n.useState)([""]),P=Object(i.a)(y,2),I=P[0],S=P[1],C=Object(n.useState)([""]),A=Object(i.a)(C,2),U=A[0],B=A[1];Object(n.useEffect)((function(){J()}),[]);var J=function(){var e,a,n,c,r,o;return x.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=t.params.pokemonIndex,B(e),console.log(U),a="https://pokeapi.co/api/v2/pokemon/".concat(e,"/"),n="https://pokeapi.co/api/v2/pokemon-species/".concat(e,"/"),c="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e,".png"),l.next=8,x.a.awrap(s.a.get(a));case 8:return r=l.sent,l.next=11,x.a.awrap(s.a.get(n));case 11:o=l.sent,console.log(r),console.log(o),u(r.data.name),f(o.data.names[1].name),S(c),j(o.data.flavor_text_entries[o.data.flavor_text_entries.findIndex((function(e,t){return"ja"===e.language.name}))].flavor_text),w(o.data.flavor_text_entries[o.data.flavor_text_entries.findIndex((function(e,t){return"en"===e.language.name}))].flavor_text);case 19:case"end":return l.stop()}}))};return c.a.createElement("div",{className:"factfile"},c.a.createElement("img",{src:I,alt:"",width:"200",height:"200"}),c.a.createElement("h1",{style:{color:"indianred"}},m),c.a.createElement("h1",{style:{color:"blue"}},g),c.a.createElement("h2",{style:{backgroundColor:"AliceBlue"}},_),c.a.createElement("h2",{style:{backgroundColor:"Snow"}},k),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"},c.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){var e,t,a,n,c,r;return x.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log(parseInt(U)-1),e=parseInt(U)-1,console.log("y",e),B(e>0?e:1),console.log("x",U),t="https://pokeapi.co/api/v2/pokemon/".concat(U,"/"),a="https://pokeapi.co/api/v2/pokemon-species/".concat(U,"/"),n="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(U,".png"),o.next=10,x.a.awrap(s.a.get(t));case 10:return c=o.sent,o.next=13,x.a.awrap(s.a.get(a));case 13:r=o.sent,u(c.data.name),f(r.data.names[1].name),S(n),j(r.data.flavor_text_entries[r.data.flavor_text_entries.findIndex((function(e,t){return"ja"===e.language.name}))].flavor_text),w(r.data.flavor_text_entries[r.data.flavor_text_entries.findIndex((function(e,t){return"en"===e.language.name}))].flavor_text);case 19:case"end":return o.stop()}}))}},"Previous")),c.a.createElement("div",{className:"col-2"},c.a.createElement("button",{type:"button",className:"btn btn-warning btn-lg",onClick:function(){var e,t,a,n,c,r;return x.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log(parseInt(U)+1),e=parseInt(U)+1,console.log("y",e),B(e<808?e:807),console.log("x",U),t="https://pokeapi.co/api/v2/pokemon/".concat(U,"/"),a="https://pokeapi.co/api/v2/pokemon-species/".concat(U,"/"),n="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(U,".png"),o.next=10,x.a.awrap(s.a.get(t));case 10:return c=o.sent,o.next=13,x.a.awrap(s.a.get(a));case 13:r=o.sent,u(c.data.name),f(r.data.names[1].name),S(n),j(r.data.flavor_text_entries[r.data.flavor_text_entries.findIndex((function(e,t){return"ja"===e.language.name}))].flavor_text),w(r.data.flavor_text_entries[r.data.flavor_text_entries.findIndex((function(e,t){return"en"===e.language.name}))].flavor_text);case 19:case"end":return o.stop()}}))}},"Next"))))}var k=a(10);var j=function(){return c.a.createElement(p.a,null,c.a.createElement("div",null,c.a.createElement(v,null)),c.a.createElement(k.c,null,c.a.createElement(k.a,{exact:!0,path:"/shiny",component:f}),c.a.createElement(k.a,{exact:!0,path:"/:pokemonIndex",component:h})))};o.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ca1c8926.chunk.js.map