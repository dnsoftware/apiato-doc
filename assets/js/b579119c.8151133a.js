(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(8),o=(a(0),a(172)),i={title:"Responses"},l={unversionedId:"getting-started/responses",id:"getting-started/responses",isDocsHomePage:!1,title:"Responses",description:"* Apiato Response",source:"@site/docs/getting-started/responses.md",slug:"/getting-started/responses",permalink:"/docs/getting-started/responses",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/getting-started/responses.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Requests",permalink:"/docs/getting-started/requests"},next:{title:"Software Architectural Patterns",permalink:"/docs/getting-started/software-architectural-patterns"}},s=[{value:"Apiato Response",id:"response",children:[]},{value:"Default Apiato Responses Payload:",id:"default-response-payload",children:[]},{value:"Change the default Response payload:",id:"change-default-response-payload",children:[]},{value:"Resource Keys",id:"resource-keys",children:[]},{value:"Error Responses formats",id:"error-response-formats",children:[]},{value:"Building a Responses from the Controller:",id:"building-response-from-controller",children:[]}],p={toc:s};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#response"},"Apiato Response")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#default-response-payload"},"Default Apiato Responses Payload")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#change-default-response-payload"},"Change the default Response payload")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#resource-keys"},"Resource Keys")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#error-response-formats"},"Error Responses formats")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#building-response-from-controller"},"Building a Responses from the Controller"))),Object(o.b)("h3",{id:"response"},"Apiato Response"),Object(o.b)("p",null,"In Apiato you can define your own response payload or use one of the supported serializers."),Object(o.b)("p",null,"Currently the supported serializers are (",Object(o.b)("inlineCode",{parentName:"p"},"ArraySerializer"),", ",Object(o.b)("inlineCode",{parentName:"p"},"DataArraySerializer")," and ",Object(o.b)("inlineCode",{parentName:"p"},"JsonApiSerializer"),"). As provided\nby ",Object(o.b)("a",{parentName:"p",href:"http://fractal.thephpleague.com/transformers/"},"Fractal"),"."),Object(o.b)("p",null,"By default Apiato uses ",Object(o.b)("inlineCode",{parentName:"p"},"DataArraySerializer"),". Below is an example of the response payload."),Object(o.b)("h3",{id:"default-response-payload"},"Default Apiato Responses Payload:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"DataArraySerializer")," pesponse payload look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 100,\n      ...\n      "relation 1": {\n        "data": [ // multiple data\n          {\n            "id": 11,\n              ...\n          }\n        ]\n      },\n      "relation 2": {\n        "data": { // single data\n          "id": 22,\n          ...\n          }\n        }\n      }\n    },\n    ...\n  ],\n  "meta": {\n    "pagination": {\n      "total": 999,\n      "count": 999,\n      "per_page": 999,\n      "current_page": 999,\n      "total_pages": 999,\n      "links": {\n        "next": "http://api.apiato.test/v1/accounts?page=999"\n      }\n    }\n  },\n  "include": [ // what can be included\n    "xxx",\n    "yyy"\n  ],\n  "custom": []\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Paginated response:")),Object(o.b)("p",null,"When data is paginated the response payload will contain a ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," description about the pagination."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "meta": {\n    "pagination": {\n      "total": 999,\n      "count": 999,\n      "per_page": 999,\n      "current_page": 999,\n      "total_pages": 999,\n      "links": {\n        "next": "http://api.apiato.test/v1/accounts?page=999"\n      }\n    }\n  },\n  "include": [ // what can be included\n    "xxx",\n    "yyy"\n  ],\n  "custom": []\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Includes:")),Object(o.b)("p",null,"Informs the User about what relationships can be include in the response. Example: ",Object(o.b)("inlineCode",{parentName:"p"},"?include=tags,user")),Object(o.b)("p",null,"For more details read the ",Object(o.b)("inlineCode",{parentName:"p"},"Relationships")," section in the ","[Query Parameters]","({{ site.baseurl }}{% link _docs/features/query-parameters.md %}) page."),Object(o.b)("h3",{id:"change-default-response-payload"},"Change the default Response payload:"),Object(o.b)("p",null,"The default response format (specification) is the ",Object(o.b)("inlineCode",{parentName:"p"},"DataArray")," Fractal Serializer (",Object(o.b)("inlineCode",{parentName:"p"},"League\\Fractal\\Serializer\\DataArraySerializer"),")."),Object(o.b)("p",null,"To change the default Fractal Serializer open the ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/fractal.php")," file and change the"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"'default_serializer' => League\\Fractal\\Serializer\\DataArraySerializer::class,\n")),Object(o.b)("p",null,"The Supported Serializers are"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ArraySerializer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DataArraySerializer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"JsonApiSerializer"))),Object(o.b)("p",null,"More details can be found at ",Object(o.b)("a",{parentName:"p",href:"http://fractal.thephpleague.com/transformers/"},"Fractal")," and\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/spatie/laravel-fractal"},"Laravel Fractal Wrapper"),"."),Object(o.b)("p",null,"In case of returning JSON Data (",Object(o.b)("inlineCode",{parentName:"p"},"JsonApiSerializer"),"), you may wish to check some JSON response standards:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://labs.omniti.com/labs/jsend"},"JSEND")," (very basic)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://jsonapi.org/format/"},"JSON API")," (very popular and well documented)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://stateless.co/hal_specification.html"},"HAL")," (useful in case of hypermedia)")),Object(o.b)("h3",{id:"resource-keys"},"Resource Keys"),Object(o.b)("h4",{id:"resource-keys-for-json-api-serializer"},"For JsonApiSerializer."),Object(o.b)("p",null,"The transformer allows appending a ",Object(o.b)("inlineCode",{parentName:"p"},"ResourceKey")," to the transformed resource. You can set the ",Object(o.b)("inlineCode",{parentName:"p"},"ResourceKey")," in your\nresponse payload in 2 ways:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Manually set it via the respective parameter in the ",Object(o.b)("inlineCode",{parentName:"li"},"$this->transform()")," call. Note that this will only set the\n",Object(o.b)("inlineCode",{parentName:"li"},"top level")," resource key and does not affect the resource keys from ",Object(o.b)("inlineCode",{parentName:"li"},"included")," resources!"),Object(o.b)("li",{parentName:"ol"},"Specify it on the respective ",Object(o.b)("inlineCode",{parentName:"li"},"Model"),". By overriding the the $resourceKey, (",Object(o.b)("inlineCode",{parentName:"li"},"protected $resourceKey = 'FooBar';"),").\nIf no ",Object(o.b)("inlineCode",{parentName:"li"},"$resourceKey")," is defined at the ",Object(o.b)("inlineCode",{parentName:"li"},"Model"),", the ",Object(o.b)("inlineCode",{parentName:"li"},"ShortClassName")," is used as key. For example, the ",Object(o.b)("inlineCode",{parentName:"li"},"ShortClassName")," of\nthe ",Object(o.b)("inlineCode",{parentName:"li"},"App\\Containers\\User\\Models\\User::class")," is ",Object(o.b)("inlineCode",{parentName:"li"},"User"),".")),Object(o.b)("h4",{id:"resource-keys-for-data-array-serializer"},"For DataArraySerializer."),Object(o.b)("p",null,"By default the ",Object(o.b)("inlineCode",{parentName:"p"},"object")," keyword is used as a resource key for each response, and it's set manually in each transformer,\n",Object(o.b)("em",{parentName:"p"},"to be automated later"),"."),Object(o.b)("h3",{id:"error-response-formats"},"Error Responses formats"),Object(o.b)("p",null,"Visit each feature, example the Authentication and there you will see how an unauthenticated response looks like, same\nfor Authorization, Validation and so on."),Object(o.b)("h2",{id:"building-response-from-controller"},"Building a Responses from the Controller:"),Object(o.b)("p",null,"Checkout the ","[Controller response builder helper functions]","({{ site.baseurl }}{% link _docs/components/controllers.md %})."))}c.isMDXComponent=!0},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(m,l(l({ref:t},p),{},{components:a})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);