(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{223:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(m,p(p({ref:t},s),{},{components:n})):r.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},286:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/public-api-doc-b4b04c485ce84cb3b4c455d83cf9dfec.png"},287:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/private-api-doc-df79775c15a1f15953133d1b8a6d0b52.png"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(8),o=(n(0),n(223)),i={title:"API Docs Generator"},p={unversionedId:"features/api-docs-generator",id:"features/api-docs-generator",isDocsHomePage:!1,title:"API Docs Generator",description:"- Requirements",source:"@site/docs/features/api-docs-generator.md",slug:"/features/api-docs-generator",permalink:"/docs/next/features/api-docs-generator",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/features/api-docs-generator.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618053713,formattedLastUpdatedAt:"4/10/2021",sidebar:"docs",previous:{title:"Code Generator",permalink:"/docs/next/features/code-generator"},next:{title:"Authentication",permalink:"/docs/next/features/authentication"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Generate Swagger/OpenAPI JSON schema from apiDoc",id:"generate-swagger-openapi-json-schema-from-apidoc",children:[]},{value:"Error: ApiDoc not found !!",id:"error-apidoc-not-found",children:[]},{value:"Shared response for faster updating and less outdated responses:",id:"shared-response-for-faster-updating-and-less-outdated-responses",children:[]}]},{value:"Edit the default generated values in the templates:",id:"edit-the-default-generated-values-in-the-templates",children:[]},{value:"Change the Documentations URL&#39;s",id:"change-the-documentations-urls",children:[]},{value:"Edit the Documentation Header",id:"edit-the-documentation-header",children:[]}],s={toc:c};function l(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#requirements"},"Requirements")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#usage"},"Usage"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#write-a-php-docblock-on-top-of-your-endpoint-like-this"},"1- Write a PHP ",Object(o.b)("strong",{parentName:"a"},"docblock")," on top of your endpoint like this:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#run-the-documentation-generator-command-from-the-root-directory"},"2- Run the documentation generator command from the root directory:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#visit-this-urls-as-shown-in-your-terminal"},"3- Visit this URL's as shown in your terminal:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#generate-swagger-openapi-json-schema-from-apidoc"},"Generate Swagger/OpenAPI JSON schema from apiDoc")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#error-apidoc-not-found"},"Error: ApiDoc not found !!")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#shared-response-for-faster-updating-and-less-outdated-responses"},"Shared response for faster updating and less outdated responses:")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#edit-the-default-generated-values-in-the-templates"},"Edit the default generated values in the templates:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#change-the-documentations-urls"},"Change the Documentations URL's")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#edit-the-documentation-header"},"Edit the Documentation Header"))),Object(o.b)("p",null,"Every great API needs a great Documentation."),Object(o.b)("p",null,"Apiato make writing and generating documentations very easy with the ",Object(o.b)("inlineCode",{parentName:"p"},"php artisan apiato:apidoc")," command."),Object(o.b)("p",null,"Alternatively you can generate a swagger doc from the apidoc comments, to do so run ",Object(o.b)("inlineCode",{parentName:"p"},"php artisan apiato:swagger")," command."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Install the ",Object(o.b)("a",{parentName:"p",href:"http://apidocjs.com/"},"ApiDocJs")," tool, the project directory"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"(",Object(o.b)("inlineCode",{parentName:"li"},"npm install apidoc"),")"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"(Recommended) read the ",Object(o.b)("a",{parentName:"p",href:".././main-components/routes"},"Routes")," page first."))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h4",{id:"write-a-php-docblock-on-top-of-your-endpoint-like-this"},"1 - Write a PHP ",Object(o.b)("strong",{parentName:"h4"},"docblock")," on top of your endpoint like this:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"For more info about the parameters check out ",Object(o.b)("a",{parentName:"em",href:"http://apidocjs.com/#install"},"ApiDocJs")," documentation")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n/**\n * @apiGroup           Authentication\n * @apiName            UserLogin\n * @api                {post} /users/login User Login\n * @apiDescription     Description Here....\n * @apiVersion         1.0.0\n * @apiPermission      none\n *\n * @apiHeader          Accept application/json\n *\n * @apiParam           {String}     email\n * @apiParam           {String}     password\n *\n * @apiSuccessExample  {json}       Success-Response:\n *   HTTP/1.1 200 OK\n *   {\n *     "data": {\n *       "id": "owpzanmh",\n *       "name": "Super Admin",\n *       "email": "admin@admin.com"\n *       ...\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"401 Credentials Incorrect.",\n *      "status_code":401\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"Invalid Input.",\n *      "errors":{\n *         "email":[\n *            "The email field is required."\n *         ]\n *      },\n *      "status_code":422\n *   }\n */\n\n$router->post(\'users/login\', [\n    \'uses\' => \'Controller@userLogin\',\n]);\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," All the Endpoints ",Object(o.b)("inlineCode",{parentName:"p"},"DocBlocks")," MUST be written inside Routes files, otherwise they won't be loaded."),Object(o.b)("h4",{id:"run-the-documentation-generator-command-from-the-root-directory"},"2 - Run the documentation generator command from the root directory:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\nphp artisan apiato:apidoc\n\n")),Object(o.b)("h4",{id:"visit-this-urls-as-shown-in-your-terminal"},"3 - Visit this URL's as shown in your terminal:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Public (external) API at ",Object(o.b)("a",{parentName:"li",href:"http://apiato.test/api/documentation/"},"http://apiato.test/api/documentation/"),".")),Object(o.b)("p",null,Object(o.b)("img",{src:n(286).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Private (internal) API at ",Object(o.b)("a",{parentName:"li",href:"http://apiato.test/api/private/documentation/"},"http://apiato.test/api/private/documentation/"),".")),Object(o.b)("p",null,Object(o.b)("img",{src:n(287).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE:")," Every time you change the DocBlock of a Route file you need to run the ",Object(o.b)("inlineCode",{parentName:"p"},"apiato:apidoc")," command, to regenerate."),Object(o.b)("h3",{id:"generate-swagger-openapi-json-schema-from-apidoc"},"Generate Swagger/OpenAPI JSON schema from apiDoc"),Object(o.b)("p",null,"It's also possible to generate a Swagger/OpenAPI JSON schema from apiDoc with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\nphp artisan apiato:swagger\n\n")),Object(o.b)("p",null,"You can find the JSON schema at ",Object(o.b)("a",{parentName:"p",href:"http://apiato.test/api/private/documentation/swagger/swagger.json"},"http://apiato.test/api/private/documentation/swagger/swagger.json")),Object(o.b)("h3",{id:"error-apidoc-not-found"},"Error: ApiDoc not found !!"),Object(o.b)("p",null,"If you get an error (",Object(o.b)("inlineCode",{parentName:"p"},"apidoc not found"),"),"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"open the container config file ",Object(o.b)("inlineCode",{parentName:"p"},"Containers/Documentation/Configs/apidoc.php"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"edit the ",Object(o.b)("inlineCode",{parentName:"p"},"executable")," path to ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"$(npm bin)/apidoc"))," or to however you access the ",Object(o.b)("inlineCode",{parentName:"p"},"apidoc")," tool on your machine."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n    /*\n    |--------------------------------------------------------------------------\n    | Executable\n    |--------------------------------------------------------------------------\n    |\n    | Specify how you run or access the `apidoc` tool on your machine.\n    |\n    */\n\n    'executable' => 'apidoc',\n")),Object(o.b)("h3",{id:"shared-response-for-faster-updating-and-less-outdated-responses"},"Shared response for faster updating and less outdated responses:"),Object(o.b)("p",null,"To prevent duplicating the responses between routes, let's create a shared response for each object."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"_user.v1.public.php")," will contain all responses (single, multiple...) of the User:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n/**\n * @apiDefine UserSuccessSingleResponse\n * @apiSuccessExample {json} Success-Response:\nHTTP/1.1 200 OK\n{\n   "data":{\n      "object":"User",\n      "id":eqwja3vw94kzmxr0,\n   },\n   "meta":{\n      "include":[],\n      "custom":[]\n   }\n}\n */\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage of the shared User response from any endpoint:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"* @apiUse UserSuccessSingleResponse\n")),Object(o.b)("p",null,"To avoid having to generate and update the Single and Multiple responses of the same object (recommended only for private API's)\nyou can use the general shared Multiple Response ",Object(o.b)("inlineCode",{parentName:"p"},"* @apiUse GeneralSuccessMultipleResponse"),"\nwhich you can find and modify it from ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Documentation/UI/API/Routes/*")),Object(o.b)("h2",{id:"edit-the-default-generated-values-in-the-templates"},"Edit the default generated values in the templates:"),Object(o.b)("p",null,"Apiato generates by defaults 2 API documentations, each one has its own ",Object(o.b)("inlineCode",{parentName:"p"},"apidoc.json")," file. Both can be modified from the Documentation Containers in ",Object(o.b)("inlineCode",{parentName:"p"},"Containers/Documentation/ApiDocJs/")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"apidoc.json")," Example file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Apiato",\n  "description": "Apiato (Private API) Documentation",\n  "title": "Welcome to Apiato",\n  "version": "1.0.0",\n  "url" : "http://api.apiato.test",\n  "template": {\n    "withCompare": true,\n    "withGenerator": true\n  },\n  "header": {\n    "title": "API Overview",\n    "filename": "app/Containers/Documentation/ApiDocJs/private/header.md"\n  },\n  "footer": {\n    "title": "Footer",\n    "filename": "app/Containers/Documentation/ApiDocJs/private/header.md"\n  },\n  "order": [\n\n  ]\n}\n')),Object(o.b)("h2",{id:"change-the-documentations-urls"},"Change the Documentations URL's"),Object(o.b)("p",null,"Edit the config file of the Documentation Container ",Object(o.b)("inlineCode",{parentName:"p"},"Containers/Documentation/Configs/apidoc.php")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nreturn [\n\n    /*\n    |--------------------------------------------------------------------------\n    | Executable\n    |--------------------------------------------------------------------------\n    |\n    | Specify how you run or access the `apidoc` tool on your machine.\n    |\n    */\n\n    'executable' => 'apidoc',\n\n    /*\n    |--------------------------------------------------------------------------\n    | API Types\n    |--------------------------------------------------------------------------\n    |\n    | The `types` helps generating multiple documentations, by grouping them\n    | under types names. You can add or remove any type. By default\n    | `public` and `private` types are set.\n    |\n    | url: The url to access that generated API documentation.\n    |\n    | routes: The route file to read when generating this documentation.\n    |         Every route file will have the following name format:\n    |         `{endpoint-name}.v{version-number}.{documentation-type}.php`.\n    |\n    */\n\n    'types' => [\n\n        'public' => [\n            'url' => 'api/documentation',\n            'routes' => [\n                'public',\n            ],\n        ],\n\n        'private' => [\n            'url' => 'api/private/documentation',\n            'routes' => [\n                'private',\n                'public',\n            ],\n        ],\n    ],\n\n\n    /*\n    |--------------------------------------------------------------------------\n    | HTML files\n    |--------------------------------------------------------------------------\n    |\n    | Specify where to put the generated HTML files.\n    |\n    */\n\n    'html_files' => 'public/'\n\n\n    // ...\n];\n")),Object(o.b)("h2",{id:"edit-the-documentation-header"},"Edit the Documentation Header"),Object(o.b)("p",null,"The header is usually the Overview of your API. It contains Info about authenticating users, making requests, responses, potential errors, rate limiting, pagination, query parameters and anything you want."),Object(o.b)("p",null,"All this information is written in ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Documentation/ApiDocJs/shared/header.template.md")," file, and the same file is used as header for both private and public documentations."),Object(o.b)("p",null,"To edit the content just open the markdown file in any markdown editor and edit it."),Object(o.b)("p",null,"You will notice some variables like ",Object(o.b)("inlineCode",{parentName:"p"},"{{rate-limit}}")," and ",Object(o.b)("inlineCode",{parentName:"p"},"{{token-expires}}"),". Those are replaced when running ",Object(o.b)("inlineCode",{parentName:"p"},"apidoc:generate")," with real values from your application configuration files."),Object(o.b)("p",null,"Feel free to extend them to include more info about your API from the ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Documentation/Actions/ProcessMarkdownTemplatesAction.php")," class."))}l.isMDXComponent=!0}}]);