(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),s=n(8),a=(n(0),n(172)),o={title:"Tests",category:"Optional Components",order:21},i={unversionedId:"optional-components/tests",id:"optional-components/tests",isDocsHomePage:!1,title:"Tests",description:"* Definition",source:"@site/docs/optional-components/tests.md",slug:"/optional-components/tests",permalink:"/docs/optional-components/tests",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/optional-components/tests.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Criterias",permalink:"/docs/optional-components/criterias"},next:{title:"Migrations",permalink:"/docs/optional-components/migrations"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-sample",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),Object(a.b)("a",{name:"definition"}),Object(a.b)("h3",{id:"definition"},"Definition"),Object(a.b)("p",null,"Tests classes are created to test the Application classes are working as expected."),Object(a.b)("p",null,"The two most essential Tests types for this architecture are the Unit Tests and the Functional Tests. However, Integration and Acceptance Tests can be used as well."),Object(a.b)("a",{name:"principles"}),Object(a.b)("h2",{id:"principles"},"Principles"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Containers MAY be covered by all types of Tests.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Use Functional Tests to test Container Routes are doing what's expected from them.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Use Unit Tests to test Container Actions and Tasks are doing what's expected from them."))),Object(a.b)("a",{name:"rules"}),Object(a.b)("h3",{id:"rules"},"Rules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All Container Tests classes SHOULD extend from a Container Internal TestCase class ",Object(a.b)("inlineCode",{parentName:"li"},"{container-name}/tests/TestCase.php"),". The container ",Object(a.b)("strong",{parentName:"li"},"TestCase")," MUST extends from the main TestCase on the Ship layer ",Object(a.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Tests\\PhpUnit\\TestCase"),". ",Object(a.b)("em",{parentName:"li"},"(Adding functions to the container TestCase allows sharing those functions between all Test classes of the Container)"),".")),Object(a.b)("a",{name:"folder-structure"}),Object(a.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Tests\n                - TestCase.php // the container test case\n                - Unit\n                    - CreateUserTest.php\n                    - UpdateUserTest.php\n                    - ...\n            - UI\n                - API\n                    - Tests\n                        - Functional\n                            - LoginTest.php\n                            - LogoutTest.php\n                            - ...\n                - WEB\n                    - Tests\n                        - Functional\n                            - LoginTest.php\n                            - LogoutTest.php\n                            - ...\n                - CLI\n                    - Tests\n                        - Functional\n                            - BackupDataTest.php\n                            - ...\n")),Object(a.b)("a",{name:"code-sample"}),Object(a.b)("h3",{id:"code-sample"},"Code Sample"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\UI\\API\\Tests\\Functional;\n\nuse App\\Containers\\{container-name}\\Tests\\TestCase;\n\n    class DeleteUserTest extends TestCase\n    {\n        protected $endpoint = '/users';\n\n        protected $permissions = [\n            'delete-users'\n        ];\n\n        public function testDeleteExistingUser_()\n        {\n            // get a testing user of type admin.\n            $user = $this->getLoggedInTestingAdmin();\n\n            // send the HTTP request\n            $response = $this->apiCall($this->endpoint, 'delete');\n\n            // assert response status is correct\n            $this->assertEquals($response->getStatusCode(), '202');\n\n            // ...\n        }\n\n    }\n\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"See the ","[Tests Helpers]","({{ site.baseurl }}{% link _docs/miscellaneous/tests-helpers.md %}) Page")))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),p=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?s.a.createElement(m,i(i({ref:t},l),{},{components:n})):s.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);