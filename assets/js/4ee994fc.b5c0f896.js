(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(217)),o={title:"Rate Limiting"},l={unversionedId:"core-features/rate-limiting",id:"version-9.x/core-features/rate-limiting",isDocsHomePage:!1,title:"Rate Limiting",description:"apiato uses the default Laravel middleware for rate limiting (throttling).",source:"@site/versioned_docs/version-9.x/core-features/rate-limiting.md",sourceDirName:"core-features",slug:"/core-features/rate-limiting",permalink:"/docs/core-features/rate-limiting",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/rate-limiting.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618748235,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Rate Limiting"},sidebar:"version-9.x/docs",previous:{title:"Localization",permalink:"/docs/core-features/localization"},next:{title:"Requests Monitor",permalink:"/docs/core-features/requests-monitor"}},c=[{value:"Enable/Disable Rate Limiting:",id:"enable-disable-rate-limiting",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"apiato")," uses the default Laravel middleware for rate limiting (throttling)."),Object(i.b)("p",null,"All REST API requests are throttled to prevent abuse and ensure stability.\nThe exact number of calls that your application can make per day varies based on the type of request you are making."),Object(i.b)("p",null,"The rate limit window is ",Object(i.b)("inlineCode",{parentName:"p"},"1")," minute per endpoint, with most individual calls allowing for ",Object(i.b)("inlineCode",{parentName:"p"},"30")," requests in each window."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"In other words, each user is allowed to make ",Object(i.b)("inlineCode",{parentName:"em"},"30")," calls per endpoint every ",Object(i.b)("inlineCode",{parentName:"em"},"1")," minute. (For each unique access token).")),Object(i.b)("p",null,"To update these values go to ",Object(i.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," config file, or to the ",Object(i.b)("inlineCode",{parentName:"p"},"ENV")," file."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"'throttle' => [\n    'enabled' => env('API_RATE_LIMIT_ENABLED', true),\n    'attempts' => env('API_RATE_LIMIT_ATTEMPTS', '30'),\n    'expires' => env('API_RATE_LIMIT_EXPIRES', '1'),\n]\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"API_RATE_LIMIT_ENABLED=true\nAPI_RATE_LIMIT_ATTEMPTS=30\nAPI_RATE_LIMIT_EXPIRES=1\n")),Object(i.b)("p",null,"For how many hits you can preform on an endpoint, you can always check the header:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"X-RateLimit-Limit \u219230\nX-RateLimit-Remaining \u219229\n")),Object(i.b)("h2",{id:"enable-disable-rate-limiting"},"Enable/Disable Rate Limiting:"),Object(i.b)("p",null,"The API rate limiting middleware is enabled and applied to all the Container Endpoints by default."),Object(i.b)("p",null,"To disable it set ",Object(i.b)("inlineCode",{parentName:"p"},"API_RATE_LIMIT_ENABLED")," to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," in the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file."))}s.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);