(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(8),r=(n(0),n(219)),o={title:"Pagination"},p={unversionedId:"core-features/pagination",id:"core-features/pagination",isDocsHomePage:!1,title:"Pagination",description:"- Limit",source:"@site/docs/core-features/pagination.md",sourceDirName:"core-features",slug:"/core-features/pagination",permalink:"/docs/next/core-features/pagination",editUrl:"https://github.com/apiato/documentation/tree/master/docs/core-features/pagination.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618578346,formattedLastUpdatedAt:"4/16/2021",frontMatter:{title:"Pagination"},sidebar:"docs",previous:{title:"Data Caching",permalink:"/docs/next/core-features/data-caching"},next:{title:"API Versioning",permalink:"/docs/next/core-features/api-versioning"}},l=[{value:"Limit",id:"limit",children:[]},{value:"Change the default pagination limit",id:"change-the-default-pagination-limit",children:[]},{value:"Skip the Pagination Limit",id:"skip-the-pagination-limit",children:[]}],c={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#limit"},"Limit")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#change-the-default-pagination-limit"},"Change the default pagination limit")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#skip-the-pagination-limit"},"Skip the Pagination Limit"))),Object(r.b)("p",null,"For pagination apiato uses the ",Object(r.b)("a",{parentName:"p",href:"https://packagist.org/packages/prettus/l5-repository"},"L5 Repository Package")," and the\npagination gets applied whenever you use the ",Object(r.b)("inlineCode",{parentName:"p"},"paginate")," function on any model repository\n(example: ",Object(r.b)("inlineCode",{parentName:"p"},"$stores = $this->storeRepository->paginate();"),")."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"?page=")," parameter can be applied to any ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"GET"))," HTTP request responsible for listing records (mainly for Paginated data)."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"api.domain.test/endpoint?page=200\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Pagination object is always returned in ",Object(r.b)("strong",{parentName:"em"},"meta")," when pagination is available on the endpoint.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'  "data": [...],\n  "meta": {\n    "pagination": {\n      "total": 2000,\n      "count": 30,\n      "per_page": 30,\n      "current_page": 22,\n      "total_pages": 1111,\n      "links": {\n        "previous": "http://api.domain.test/endpoint?page=21"\n      }\n    }\n  }\n')),Object(r.b)("h3",{id:"limit"},"Limit"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"?limit=")," parameter can be applied to define, how many results should be returned on one page (also see ",Object(r.b)("a",{parentName:"p",href:"../core-features/query-parameters#pagination"},"Pagination"),")."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"api.domain.test/endpoint?limit=100\n")),Object(r.b)("p",null,"This would return 100 resources within one page of the result. Of course, the ",Object(r.b)("inlineCode",{parentName:"p"},"limit")," and ",Object(r.b)("inlineCode",{parentName:"p"},"page")," query parameter can be\ncombined in order to get the next 100 resources:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"api.domain.test/endpoint?limit=100&page=2\n")),Object(r.b)("p",null,"In order to allow clients to request all data that matches their criteria (e.g., search-criteria) and disable pagination,\nyou can manually override the ",Object(r.b)("inlineCode",{parentName:"p"},"$allowDisablePagination")," property in your specific ",Object(r.b)("inlineCode",{parentName:"p"},"Repository")," class. A requester can then\nget all data (with no pagination applied) by requesting ",Object(r.b)("inlineCode",{parentName:"p"},"api.domain.test/endpoint?limit=0"),". This will return all matching\nentities."),Object(r.b)("h3",{id:"change-the-default-pagination-limit"},"Change the default pagination limit"),Object(r.b)("p",null,"Open the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file and set a number for ",Object(r.b)("inlineCode",{parentName:"p"},"PAGINATION_LIMIT_DEFAULT"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-env"},"PAGINATION_LIMIT_DEFAULT=10\n")),Object(r.b)("p",null,"This is used in the ",Object(r.b)("inlineCode",{parentName:"p"},"config/repository.php")," which is the config file of the ",Object(r.b)("strong",{parentName:"p"},"L5 Repository")," Package."),Object(r.b)("h3",{id:"skip-the-pagination-limit"},"Skip the Pagination Limit"),Object(r.b)("p",null,"In order to allow clients to request all data that matches their criteria (e.g. search-criteria) and disable pagination,\nyou can set ",Object(r.b)("inlineCode",{parentName:"p"},"PAGINATION_SKIP=true")," in ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file.\nA request can then get all data (with no pagination applied) by applying ",Object(r.b)("inlineCode",{parentName:"p"},"limit=0"),".  "),Object(r.b)("p",null,"This will return all matching entities:",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("inlineCode",{parentName:"p"},"api.domain.test/endpoint?limit=0")))}b.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||r;return n?i.a.createElement(d,p(p({ref:t},c),{},{components:n})):i.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);