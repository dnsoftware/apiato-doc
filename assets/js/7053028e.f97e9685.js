(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),a=(n(0),n(172)),o={title:"Routes"},l={unversionedId:"main-components/routes",id:"main-components/routes",isDocsHomePage:!1,title:"Routes",description:"* Definition & Principles",source:"@site/docs/main-components/routes.md",slug:"/main-components/routes",permalink:"/docs/main-components/routes",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/main-components/routes.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617809122,formattedLastUpdatedAt:"4/7/2021",sidebar:"docs",previous:{title:"Profiler",permalink:"/docs/features/profiler"},next:{title:"Controllers",permalink:"/docs/main-components/controllers"}},p=[{value:"Definition &amp; Principles",id:"definition-principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Web Routes",id:"web-routes",children:[]},{value:"API Routes",id:"api-routes",children:[]},{value:"Protect your Endpoints:",id:"protect-your-endpoints",children:[{value:"Difference between Public &amp; Private routes files",id:"difference-between-public-private-routes-files",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#web-routes"},"Web Routes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#api-routes"},"API Routes"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#protect-your-endpoints"},"Protect your Endpoints:"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#difference-between-public-private-routes-files"},"Difference between Public & Private routes files"))),Object(a.b)("h3",{id:"definition-principles"},"Definition & Principles"),Object(a.b)("p",null,"Read from the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Routes"},Object(a.b)("strong",{parentName:"a"},"Porto SAP Documentation (#Routes)")),"."),Object(a.b)("h3",{id:"rules"},"Rules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The API Routes files MUST be named according to their API's versions, exposure and functionality. Example ",Object(a.b)("inlineCode",{parentName:"p"},"CreateOrder.v1.public.php"),", ",Object(a.b)("inlineCode",{parentName:"p"},"FulfillOrder.v2.public.php"),", ",Object(a.b)("inlineCode",{parentName:"p"},"CancelOrder.v1.private.php"),"...")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Web Routes files are pretty similar to API web files but they can be named anything."))),Object(a.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - UI\n                - API\n                   - Routes\n                      - CreateItem.v1.public.php\n                      - DeleteItem.v1.public.php\n                      - CreateItem.v2.public.php\n                      - DeleteItem.v1.private.php\n                      - ApproveItem.v1.private.php\n                      - ...\n                - WEB\n                   - Routes\n                      - main.php\n                      - ...\n")),Object(a.b)("h3",{id:"web-routes"},"Web Routes"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example: Endpoint to display a Hello View in the browser")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$router->get('/hello', [\n    'uses' => 'Controller@sayHello',\n]);\n")),Object(a.b)("p",null,"In all the Web ",Object(a.b)("inlineCode",{parentName:"p"},"Routes")," files the ",Object(a.b)("inlineCode",{parentName:"p"},"$router")," variable is an instance of the default Laravel Router ",Object(a.b)("inlineCode",{parentName:"p"},"Illuminate\\Routing\\Router"),"."),Object(a.b)("h3",{id:"api-routes"},"API Routes"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example: User Login API Endpoint")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$router->post('login', [\n    'uses' => 'Controller@loginUser',\n]);\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example: Protected List All Users API Endpoint, for an API Routes file")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$router->get('users', [\n    'uses'       => 'Controller@listAllUsers',\n    'middleware' => [\n        'api.auth',\n    ]\n]);\n")),Object(a.b)("h2",{id:"protect-your-endpoints"},"Protect your Endpoints:"),Object(a.b)("p",null,"Checkout the ","[Authorization]","({{ site.baseurl }}{% link _docs/features/authorization.md %}) Page."),Object(a.b)("h3",{id:"difference-between-public-private-routes-files"},"Difference between Public & Private routes files"),Object(a.b)("p",null,"apiato has 2 types of endpoints, Public (External) mainly for third parties clients, and Private (Internal) for your own Apps. This will help generating separate documentations for each and keep your internal API private."))}u.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);