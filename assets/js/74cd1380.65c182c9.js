(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{144:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),o=(t(0),t(222)),i={title:"Actions"},s={unversionedId:"main-components/actions",id:"main-components/actions",isDocsHomePage:!1,title:"Actions",description:"- Definition & Principles",source:"@site/docs/main-components/actions.md",slug:"/main-components/actions",permalink:"/docs/next/main-components/actions",editUrl:"https://github.com/apiato/documentation/tree/master/docs/main-components/actions.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618487183,formattedLastUpdatedAt:"4/15/2021",sidebar:"docs",previous:{title:"Transporters",permalink:"/docs/next/main-components/transporters"},next:{title:"Tasks",permalink:"/docs/next/main-components/tasks"}},c=[{value:"Definition &amp; Principles",id:"definition-principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-sample",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),Object(o.b)("h3",{id:"definition-principles"},"Definition & Principles"),Object(o.b)("p",null,"Read the section in the  ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Actions"},Object(o.b)("strong",{parentName:"a"},"Porto SAP Documentation (#Actions)")),"."),Object(o.b)("h3",{id:"rules"},"Rules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All Actions MUST extend ",Object(o.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Actions\\Action"),".")),Object(o.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Actions\n                - CreateUserAction.php\n                - DeleteUserAction.php\n                - ...\n")),Object(o.b)("h3",{id:"code-sample"},"Code Sample"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Delete User Action:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\AppSection\\User\\Actions;\n\nuse Apiato\\Core\\Foundation\\Facades\\Apiato;\nuse App\\Containers\\AppSection\\User\\Models\\User;\nuse App\\Ship\\Parents\\Actions\\Action;\n\nclass CreateAdminAction extends Action\n{\n\n    /**\n     * @param string $email\n     * @param string $password\n     * @param string $name\n     * @param bool   $isClient\n     *\n     * @return  \\App\\Containers\\AppSection\\User\\Models\\User\n     */\n    public function run(string $email, string $password, string $name, bool $isClient = false): User\n    {\n        $admin = Apiato::call('User@CreateUserByCredentialsTask', [\n            $isClient,\n            $email,\n            $password,\n            $name\n        ]);\n\n        Apiato::call('Authorization@AssignUserToRoleTask', [$admin, ['admin']]);\n\n        return $admin;\n    }\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: instead of passing these parameters ",Object(o.b)("inlineCode",{parentName:"p"},"string $email, string $password, string $name, bool $isClient = false"),' from place to another over and over.\nConsider using the Transporters classes (simple DTO\'s "Data Transfer Objects"), for more details read the ',Object(o.b)("a",{parentName:"p",href:"../main-components/transporters"},"Transporters Page"),".")),Object(o.b)("p",null,"Injecting each Task in constructor and then using it below through its property is really boring, and the more Tasks you use the worse it gets. So instead you can use the function ",Object(o.b)("inlineCode",{parentName:"p"},"call")," to call whichever Task you want and then pass any parameters to it."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Same Example using the ",Object(o.b)("inlineCode",{parentName:"strong"},"call")," function:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\AppSection\\User\\Actions;\n\nuse App\\Containers\\AppSection\\User\\Tasks\\DeleteUserTask;\nuse App\\Ship\\Parents\\Actions\\Action;\n\nclass DeleteUserAction extends Action\n{\n\n    public function run($userId)\n    {\n        return Apiato::call(DeleteUserTask::class, [$userId]); // <<<<<\n    }\n\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example: Calling multiple Tasks:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Email\\Actions;\n\nuse App\\Containers\\Xxx\\Tasks\\Sample111Task;\nuse App\\Containers\\Xxx\\Tasks\\Sample222Task;\nuse App\\Ship\\Parents\\Actions\\Action;\n\nclass DemoAction extends Action\n{\n\n    public function run($xxx, $yyy, $zzz)\n    {\n\n        $foo = Apiato::call(Sample111Task::class, [$xxx, $yyy]);\n\n        $bar = Apiato::call(Sample222Task::class, [$zzz]);\n\n        // ...\n\n    }\n\n}\n\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Action usage from a Controller:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"}," <?php\n    //...\n\n    public function deleteUser(DeleteUserRequest $request)\n    {\n        $user = Apiato::call(DeleteUserAction::class, [$request->xxx, $request->yyy]);\n\n        return $this->deleted($user);\n    }\n\n    //...\n")),Object(o.b)("p",null,"The same Action MAY be called by multiple Controllers (Web, Api, Cli)."))}l.isMDXComponent=!0},222:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return t?a.a.createElement(d,s(s({ref:n},p),{},{components:t})):a.a.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);