(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),o=(n(0),n(221)),i={title:"Requests"},l={unversionedId:"getting-started/requests",id:"getting-started/requests",isDocsHomePage:!1,title:"Requests",description:"* Form content types",source:"@site/docs/getting-started/requests.md",slug:"/getting-started/requests",permalink:"/docs/next/getting-started/requests",editUrl:"https://github.com/apiato/documentation/tree/master/docs/getting-started/requests.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618149293,formattedLastUpdatedAt:"4/11/2021",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/getting-started/overview"},next:{title:"Responses",permalink:"/docs/next/getting-started/responses"}},p=[{value:"Form content types (W3C)",id:"form-content-types",children:[{value:"ASCII payload",id:"ascii-payload",children:[]},{value:"JSON payload",id:"json-payload",children:[]}]},{value:"HTTP Request Headers",id:"http-request-headers",children:[]},{value:"Calling Endpoints",id:"calling-endpoints",children:[]}],c={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#form-content-types"},"Form content types")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#http-request-headers"},"HTTP Request Headers")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#calling-endpoints"},"Calling Endpoints"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#calling-unprotected-endpoint"},"Calling unprotected endpoint example")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#calling-protected-endpoint"},"Calling protected endpoint (passing Bearer Token) example"))))),Object(o.b)("h2",{id:"form-content-types"},"Form content types (W3C)"),Object(o.b)("p",null,"By default, Apiato is configured to encode simple text/ASCII data ",Object(o.b)("inlineCode",{parentName:"p"},"x-www-form-urlencoded"),". However, it does support\nother types as well."),Object(o.b)("h3",{id:"ascii-payload"},"ASCII payload"),Object(o.b)("p",null,"To tell the web server that you are posting simple text/ASCII payload (",Object(o.b)("inlineCode",{parentName:"p"},"name=John+Doe&age=18"),"), you need to include\n",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type : x-www-form-urlencoded")," in the request header."),Object(o.b)("h3",{id:"json-payload"},"JSON payload"),Object(o.b)("p",null,"To tell the web server that you are posting JSON-formatted payload (",Object(o.b)("inlineCode",{parentName:"p"},"{name : 'John Doe', age: 18}"),"), you need to\ninclude ",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type = application/json")," in the request header."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"(you may wish return Json data in this case as well, you can do so by changing the response serializer from\n",Object(o.b)("inlineCode",{parentName:"em"},"DataArraySerializer")," to ",Object(o.b)("inlineCode",{parentName:"em"},"JsonApiSerializer"),", more about that in the response page).")),Object(o.b)("h2",{id:"http-request-headers"},"HTTP Request Headers"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Header"),Object(o.b)("th",{parentName:"tr",align:null},"Value Sample"),Object(o.b)("th",{parentName:"tr",align:null},"When to send it"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Accept"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"application/json")),Object(o.b)("td",{parentName:"tr",align:null},"MUST be sent with every endpoint.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Content-Type"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"application/x-www-form-urlencoded")),Object(o.b)("td",{parentName:"tr",align:null},"MUST be sent when passing Data.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Authorization"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"Bearer {Access-Token-Here}")),Object(o.b)("td",{parentName:"tr",align:null},"MUST be sent whenever the endpoint requires (Authenticated User).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"If-None-Match"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"811b22676b6a4a0489c920073c0df914")),Object(o.b)("td",{parentName:"tr",align:null},"MAY be sent to indicate a specific ",Object(o.b)("strong",{parentName:"td"},"ETag")," of an prior Request to this Endpoint. If both ETags match (i.e., are the same) a HTTP 304 (not modified) is returned.")))),Object(o.b)("blockquote",null,Object(o.b)("h4",{parentName:"blockquote",id:"heads-up"},"Heads Up!"),Object(o.b)("p",{parentName:"blockquote"},"Normally you should include the ",Object(o.b)("inlineCode",{parentName:"p"},"Accept : application/json")," HTTP header when you call a JSON API. However, in Apiato\nyou can force your users to send ",Object(o.b)("inlineCode",{parentName:"p"},"application/json")," by setting ",Object(o.b)("inlineCode",{parentName:"p"},"'force-accept-header' => true,")," in\n",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," or allow them to skip it completely by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"'force-accept-header' => false,"),".\nBy default this flag is set to false.")),Object(o.b)("h2",{id:"calling-endpoints"},"Calling Endpoints"),Object(o.b)("h4",{id:"calling-unprotected-endpoint"},"Calling unprotected endpoint example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Accept: application/json" -H "Content-Type: application/x-www-form-urlencoded; -F "email=admin@admin.com" -F "password=admin" -F "=" "http://api.domain.test/v2/register"\n')),Object(o.b)("h4",{id:"calling-protected-endpoint"},"Calling protected endpoint (passing Bearer Token) example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'curl -X GET -H "Accept: application/json" -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." -H "http://api.domain.test/v1/users"\n')))}d.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||s[u]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);