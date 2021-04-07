(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(172)),o={title:"Requests"},l={unversionedId:"getting-started/requests",id:"getting-started/requests",isDocsHomePage:!1,title:"Requests",description:"* Form content types",source:"@site/docs/getting-started/requests.md",slug:"/getting-started/requests",permalink:"/docs/getting-started/requests",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/getting-started/requests.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/getting-started/overview"},next:{title:"Responses",permalink:"/docs/getting-started/responses"}},p=[{value:"Form content types (W3C)",id:"form-content-types",children:[{value:"ASCII payload",id:"ascii-payload",children:[]},{value:"JSON payload",id:"json-payload",children:[]}]},{value:"HTTP Request Headers",id:"http-request-headers",children:[]},{value:"Calling Endpoints",id:"calling-endpoints",children:[]}],c={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#form-content-types"},"Form content types")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#http-request-headers"},"HTTP Request Headers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#calling-endpoints"},"Calling Endpoints"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#calling-unprotected-endpoint"},"Calling unprotected endpoint example")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#calling-protected-endpoint"},"Calling protected endpoint (passing Bearer Token) example"))))),Object(i.b)("h2",{id:"form-content-types"},"Form content types (W3C)"),Object(i.b)("p",null,"By default Apiato is configured to encode simple text/ASCII data ",Object(i.b)("inlineCode",{parentName:"p"},"x-www-form-urlencoded"),". However, it does support\nother types as well."),Object(i.b)("h3",{id:"ascii-payload"},"ASCII payload"),Object(i.b)("p",null,"To tell the web server that you are posting simple text/ASCII payload (",Object(i.b)("inlineCode",{parentName:"p"},"name=Mahmoud+Zalt&age=18"),"), you need to include\n",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type : x-www-form-urlencoded")," in the request header."),Object(i.b)("h3",{id:"json-payload"},"JSON payload"),Object(i.b)("p",null,"To tell the web server that you are posting JSON-formatted payload (",Object(i.b)("inlineCode",{parentName:"p"},"{name : 'Mahmoud Zalt', age: 18}"),"), you need to\ninclude ",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type = application/json")," in the request header."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"(you may wish return Json data in this case as well, you can do so by changing the response serializer from\n",Object(i.b)("inlineCode",{parentName:"em"},"DataArraySerializer")," to ",Object(i.b)("inlineCode",{parentName:"em"},"JsonApiSerializer"),", more about that in the response page).")),Object(i.b)("h2",{id:"http-request-headers"},"HTTP Request Headers"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Header"),Object(i.b)("th",{parentName:"tr",align:null},"Value Sample"),Object(i.b)("th",{parentName:"tr",align:null},"When to send it"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Accept"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"application/json")),Object(i.b)("td",{parentName:"tr",align:null},"MUST be sent with every endpoint.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Content-Type"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"application/x-www-form-urlencoded")),Object(i.b)("td",{parentName:"tr",align:null},"MUST be sent when passing Data.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Authorization"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"Bearer {Access-Token-Here}")),Object(i.b)("td",{parentName:"tr",align:null},"MUST be sent whenever the endpoint requires (Authenticated User).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"If-None-Match"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"811b22676b6a4a0489c920073c0df914")),Object(i.b)("td",{parentName:"tr",align:null},"MAY be sent to indicate a specific ",Object(i.b)("strong",{parentName:"td"},"ETag")," of an prior Request to this Endpoint. If both ETags match (i.e., are the same) a HTTP 304 (not modified) is returned.")))),Object(i.b)("blockquote",null,Object(i.b)("h4",{parentName:"blockquote",id:"heads-up"},"Heads Up!"),Object(i.b)("p",{parentName:"blockquote"},"Normally you should include the ",Object(i.b)("inlineCode",{parentName:"p"},"Accept : application/json")," HTTP header when you call a JSON API. However, in Apiato\nyou can force your users to send ",Object(i.b)("inlineCode",{parentName:"p"},"application/json")," by setting ",Object(i.b)("inlineCode",{parentName:"p"},"'force-accept-header' => true,")," in\n",Object(i.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," or allow them to skip it completely by setting the ",Object(i.b)("inlineCode",{parentName:"p"},"'force-accept-header' => false,"),".\nBy default this flag is set to false.")),Object(i.b)("h2",{id:"calling-endpoints"},"Calling Endpoints"),Object(i.b)("h4",{id:"calling-unprotected-endpoint"},"Calling unprotected endpoint example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Accept: application/json" -H "Content-Type: application/x-www-form-urlencoded; -F "email=admin@admin.com" -F "password=admin" -F "=" "http://api.domain.test/v2/register"\n')),Object(i.b)("h4",{id:"calling-protected-endpoint"},"Calling protected endpoint (passing Bearer Token) example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl -X GET -H "Accept: application/json" -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." -H "http://api.domain.test/v1/users"\n')))}d.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||s[u]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);