(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{217:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(r),b=a,m=s["".concat(i,".").concat(b)]||s[b]||u[b]||o;return r?n.a.createElement(m,d(d({ref:t},p),{},{components:r})):n.a.createElement(m,d({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(8),o=(r(0),r(217)),i={title:"Admin Dashboard"},d={unversionedId:"core-features/admin-dashboard",id:"version-9.x/core-features/admin-dashboard",isDocsHomePage:!1,title:"Admin Dashboard",description:"- The provided Admin route",source:"@site/versioned_docs/version-9.x/core-features/admin-dashboard.md",sourceDirName:"core-features",slug:"/core-features/admin-dashboard",permalink:"/docs/core-features/admin-dashboard",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/admin-dashboard.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618748235,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Admin Dashboard"},sidebar:"version-9.x/docs",previous:{title:"Useful Commands",permalink:"/docs/core-features/useful-commands"},next:{title:"Profiler",permalink:"/docs/core-features/profiler"}},c=[{value:"The provided Admin route",id:"the-provided-admin-route",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Change default Admin credentials",id:"change-default-admin-credentials",children:[]}],p={toc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#the-provided-admin-route"},"The provided Admin route")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#how-it-works"},"How it works")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#change-default-admin-credentials"},"Change default Admin credentials"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Apiato does not recommend serving HTML pages. Instead, you should build your own Frontend App completely isolated from the Backend code.")),Object(o.b)("h2",{id:"the-provided-admin-route"},"The provided Admin route"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"http://admin.apiato.test/dashboard"},"http://admin.apiato.test/dashboard"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"http://admin.apiato.test/login"},"http://admin.apiato.test/login"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"http://admin.apiato.test/logout"},"http://admin.apiato.test/logout")))),Object(o.b)("h2",{id:"how-it-works"},"How it works"),Object(o.b)("p",null,"Visiting ",Object(o.b)("a",{parentName:"p",href:"http://admin.apiato.test/dashboard"},"http://admin.apiato.test/dashboard")," will redirect you to a login page for admins."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"the default credentials are:"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"email: ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"mailto:admin@admin.com"},"admin@admin.com")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"password: ",Object(o.b)("strong",{parentName:"p"},"admin"))))),Object(o.b)("p",null,"It is up to you to build and customize your admin dashboard however you prefer."),Object(o.b)("h2",{id:"change-default-admin-credentials"},"Change default Admin credentials"),Object(o.b)("p",null,"you can change these default values from the seeder class in the Authorization container: ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Authorization/Data/Seeders/RolesAndPermissionsSeeder.php"),"."))}l.isMDXComponent=!0}}]);