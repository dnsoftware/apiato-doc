(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{159:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(8),a=(r(0),r(219)),i={title:"Repositories"},p={unversionedId:"optional-components/repositories",id:"optional-components/repositories",isDocsHomePage:!1,title:"Repositories",description:"* Definition",source:"@site/docs/optional-components/repositories.md",sourceDirName:"optional-components",slug:"/optional-components/repositories",permalink:"/docs/next/optional-components/repositories",editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/repositories.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618498753,formattedLastUpdatedAt:"4/15/2021",frontMatter:{title:"Repositories"},sidebar:"docs",previous:{title:"Providers",permalink:"/docs/next/optional-components/providers"},next:{title:"Criterias",permalink:"/docs/next/optional-components/criterias"}},s=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]},{value:"Other Properties:",id:"other-properties",children:[]},{value:"API Query Parameters Property",id:"api-query-parameters-property",children:[]},{value:"All other Properties",id:"all-other-properties",children:[]}],l={toc:s};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#other-properties"},"Other Properties:")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#api-query-parameters-property"},"API Query Parameters Property")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#all-other-properties"},"All other Properties"))),Object(a.b)("h3",{id:"definition"},"Definition"),Object(a.b)("p",null,"The Repository classes are an implementation of the Repository Design Pattern."),Object(a.b)("p",null,"Their major roles are separating the business logic from the data (or the data access Task)."),Object(a.b)("p",null,"Repositories save and retrieves Models to/from the underlying storage mechanism."),Object(a.b)("p",null,"The Repository is used to separate the logic that retrieves the data and maps it to a Model, from the business logic that acts on the Model."),Object(a.b)("h3",{id:"principles"},"Principles"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Every Model SHOULD have a Repository.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"A Model SHOULD always get accessed through its Repository. (Never direct access to Model)."))),Object(a.b)("h3",{id:"rules"},"Rules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"All Repositories MUST extend from ",Object(a.b)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Repositories\\Repository"),". Extending from this class will give access to functions like (",Object(a.b)("inlineCode",{parentName:"p"},"find"),", ",Object(a.b)("inlineCode",{parentName:"p"},"create"),", ",Object(a.b)("inlineCode",{parentName:"p"},"update")," and much more).")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Repository name should be same like it's model name (model: ",Object(a.b)("inlineCode",{parentName:"p"},"Foo")," -> repository: ",Object(a.b)("inlineCode",{parentName:"p"},"FooRepository"),").")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If a Repository belongs to a Model whose name is not equal to its Container name, then the Repository must set the ",Object(a.b)("inlineCode",{parentName:"p"},"$container")," property like this: ",Object(a.b)("inlineCode",{parentName:"p"},"$container='ContainerName'"),". ",Object(a.b)("em",{parentName:"p"},"See an example below")))),Object(a.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n                - Data\n                - Repositories\n                    - UserRepository.php\n                    - ...\n")),Object(a.b)("h3",{id:"code-samples"},"Code Samples"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"User ",Object(a.b)("inlineCode",{parentName:"strong"},"Repository"),":")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"namespace App\\Containers\\AppSection\\User\\Data\\Repositories;\n\nuse App\\Containers\\AppSection\\User\\Contracts\\UserRepositoryInterface;\nuse App\\Containers\\AppSection\\User\\Models\\User;\nuse App\\Ship\\Parents\\Repositories\\Repository;\n\nclass UserRepository extends Repository implements UserRepositoryInterface\n{\n    protected $fieldSearchable = [\n        'name'  => 'like',\n        'email' => '=',\n    ];\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"// paginate the data by 10\n$users = $userRepository->paginate(10);\n\n// search by 1 field\n$cars = $carRepository->findByField('colour', $colour);\n\n// searching multiple fields\n$offer = $offerRepository->findWhere([\n    'offer_id' => $offer_id,\n    'user_id'  => $user_id,\n])->first();\n\n//....\n")),Object(a.b)("p",null,"Note: If the Repository belongs to Model with a name different from its Container name, the Repository class of that Model must set the property ",Object(a.b)("inlineCode",{parentName:"p"},"$container")," and define the Container name."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"namespace App\\Containers\\AppSection\\Authorization\\Data\\Repositories;\n\nuse App\\Ship\\Parents\\Repositories\\Repository;\n\nclass RoleRepository extends Repository\n{\n    protected $container = 'Authorization'; // the container name. Must be set when the model has different name than the container\n\n    protected $fieldSearchable = [\n\n    ];\n\n}\n")),Object(a.b)("h3",{id:"other-properties"},"Other Properties:"),Object(a.b)("h3",{id:"api-query-parameters-property"},"API Query Parameters Property"),Object(a.b)("p",null,"To enable query parameters (",Object(a.b)("inlineCode",{parentName:"p"},"?search=text"),",...) in your API you need to set the property ",Object(a.b)("inlineCode",{parentName:"p"},"$fieldSearchable")," on the Repository class, to instruct the querying on your model."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example ",Object(a.b)("inlineCode",{parentName:"strong"},"$fieldSearchable")," of a ",Object(a.b)("inlineCode",{parentName:"strong"},"Repository"),":")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"     <?php\n\n    protected $fieldSearchable = [\n      'name'  => 'like',\n      'email' => '=',\n    ];\n")),Object(a.b)("p",null,"Continue reading to find more about those properties and what they do."),Object(a.b)("h3",{id:"all-other-properties"},"All other Properties"),Object(a.b)("p",null,"apiato uses the ",Object(a.b)("inlineCode",{parentName:"p"},"andersao/l5-repository")," package, to provide a lot of powerful features to the repository class. such as"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"     // ...\n\n    protected $cacheMinutes = 1440; // 1 day\n\n    protected $cacheOnly = ['all'];\n\n")),Object(a.b)("p",null,"To learn more about all the properties you can use, visit the ",Object(a.b)("inlineCode",{parentName:"p"},"andersao/l5-repository")," package ",Object(a.b)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository"},"documentation"),"."))}c.isMDXComponent=!0},219:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),c=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=c(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return r?o.a.createElement(m,p(p({ref:t},l),{},{components:r})):o.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);