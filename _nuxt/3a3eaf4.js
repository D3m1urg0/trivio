(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{294:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("bad8e090",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n.r(e);var r={props:{books:{type:Array,default:function(){return[]}}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},t._l(t.books,(function(e,i){return n("book-label",t._b({key:e.title,staticClass:"lg:w-1/3",attrs:{index:i}},"book-label",e,!1))})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BookLabel:function(){return n.e(4).then(n.bind(null,334)).then((function(t){return t.default||t}))}})},310:function(t,e,n){"use strict";n(294)},311:function(t,e,n){var r=n(52)((function(i){return i[1]}));r.push([t.i,".bg-main{background:radial-gradient(circle closest-side,#572361,#17162e);overflow:hidden}",""]),r.locals={},t.exports=r},333:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(28),n(298)),l=n(327),c={components:{"book-list":o.default,raindrops:l.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("homepage").fetch();case 3:return r=e.sent,e.next=6,n("books").only(["title","category","author","slug"]).fetch();case 6:return o=e.sent,e.abrupt("return",{page:r,books:o});case 8:case"end":return e.stop()}}),e)})))()}},f=(n(310),n(7)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main",{staticClass:"bg-main"},[n("div",{staticClass:"border-brand-light container relative flex flex-wrap justify-center h-full px-4 py-8 mx-auto border-t"},[n("raindrops",{staticClass:"pointer-events-none"}),t._v(" "),n("div",{staticClass:"w-full"},[n("div",{staticClass:"md:flex-row z-10 flex flex-col items-center flex-1 max-w-4xl mx-auto"},[n("div",{staticClass:"flex justify-center flex-1 p-4"},[n("div",{staticClass:"flex justify-center w-64 h-64"},[n("IconBase",{staticClass:"flex-1 text-white",attrs:{"icon-name":"trivio"}})],1)]),t._v(" "),n("div",{staticClass:"flex flex-col flex-1 p-4"},[n("nuxt-content",{staticClass:"prose text-white",attrs:{document:t.page}})],1)])]),t._v(" "),t._m(0)],1)]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"bg-brand-dark"},[n("book-list",{staticClass:"lg:flex-row flex flex-col p-10",attrs:{books:t.books}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"max-w-lg",attrs:{href:"https://www.kickstarter.com/projects/collanatrivio/librigame-collana-trivio",target:"_blank"}},[n("div",{staticClass:"bg-ks p-4 mx-auto rounded-lg cursor-pointer"},[n("p",{staticClass:"text-center text-white"},[t._v("Live su")]),t._v(" "),n("img",{attrs:{src:"kickstarter-logo-white.png",alt:"Kickstarter"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container flex flex-wrap justify-around px-4 py-12 mx-auto text-center"},[n("div",{staticClass:"flex-1 p-8"},[n("h3",{staticClass:"text-brand-light mb-2 text-lg font-bold"},[t._v("LIBRIGAME")]),t._v(" "),n("p",[t._v("\n        Collana Trivio è dedicata all'esplorazione del Librogame attraverso\n        soluzioni narrative sperimentali e autori molto diversi tra loro.\n      ")])]),t._v(" "),n("div",{staticClass:"flex-1 p-8"},[n("h3",{staticClass:"text-brand-light mb-2 text-lg font-bold"},[t._v("TRE STRADE")]),t._v(" "),n("p",[t._v("\n        Il numero tre è fondamentale nel nostro progetto. Tre storie, tre\n        protagonisti, tre modi diversi di vivere l'avventura.\n      ")])]),t._v(" "),n("div",{staticClass:"flex-1 p-8"},[n("h3",{staticClass:"text-brand-light mb-2 text-lg font-bold"},[t._v("CROWDFUNDING")]),t._v(" "),n("p",[t._v("\n        Autunno 2021: è la nostra data. Il progetto partirà da un\n        crowdfunding, e questo è il posto migliore per rimanere aggiornati.\n      ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Raindrops:function(){return Promise.resolve().then(n.bind(null,327)).then((function(t){return t.default||t}))},IconBase:function(){return Promise.resolve().then(n.bind(null,197)).then((function(t){return t.default||t}))},BookList:function(){return Promise.resolve().then(n.bind(null,298)).then((function(t){return t.default||t}))}})}}]);