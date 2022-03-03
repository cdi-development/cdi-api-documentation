"use strict";(self.webpackChunkcdi_website_api_docs=self.webpackChunkcdi_website_api_docs||[]).push([[775],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(a),c=r,f=s["".concat(o,".").concat(c)]||s[c]||d[c]||l;return a?n.createElement(f,p(p({ref:t},u),{},{components:a})):n.createElement(f,p({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3223:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return m},assets:function(){return u},toc:function(){return d},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),p=["components"],i={sidebar_position:1,title:"POST /apply",hide_title:!0},o=void 0,m={unversionedId:"api/apply/apply",id:"api/apply/apply",title:"POST /apply",description:"POST /apply",source:"@site/docs/api/apply/apply.md",sourceDirName:"api/apply",slug:"/api/apply/",permalink:"/cdi-api-documentation/api/apply/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"POST /apply",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"DELETE /featured-works/{id}",permalink:"/cdi-api-documentation/api/featured-works/delete"},next:{title:"POST /contact-us",permalink:"/cdi-api-documentation/api/contact-us/"}},u={},d=[{value:"POST /apply",id:"post-apply",level:2},{value:"Request Header Schema",id:"request-header-schema",level:3},{value:"Request Header Sample",id:"request-header-sample",level:3},{value:"Request Body Schema",id:"request-body-schema",level:3},{value:"Request Body Sample (FormData)",id:"request-body-sample-formdata",level:3},{value:"Response Body Sample",id:"response-body-sample",level:3},{value:"Response Codes",id:"response-codes",level:3}],s={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"post-apply"},"POST /apply"),(0,l.kt)("p",null,"Submits an application form to the system"),(0,l.kt)("h3",{id:"request-header-schema"},"Request Header Schema"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"none")),(0,l.kt)("h3",{id:"request-header-sample"},"Request Header Sample"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"none")),(0,l.kt)("h3",{id:"request-body-schema"},"Request Body Schema"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"first_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String ",(0,l.kt)("strong",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},"The first name of the applicant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"last_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String ",(0,l.kt)("strong",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},"The last name of the applicant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email")),(0,l.kt)("td",{parentName:"tr",align:null},"String ",(0,l.kt)("strong",{parentName:"td"},'(required, format = "email")')),(0,l.kt)("td",{parentName:"tr",align:null},"The email of the applicant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mobile_number")),(0,l.kt)("td",{parentName:"tr",align:null},"String ",(0,l.kt)("strong",{parentName:"td"},'(required, pattern = "^9',"[0-9]",'{9}$")')),(0,l.kt)("td",{parentName:"tr",align:null},"The mobile number of the applicant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resume")),(0,l.kt)("td",{parentName:"tr",align:null},"File ",(0,l.kt)("strong",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},"The resume of the applicant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"short_pitch")),(0,l.kt)("td",{parentName:"tr",align:null},"String ",(0,l.kt)("strong",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},"The short pitch of the applicant.")))),(0,l.kt)("h3",{id:"request-body-sample-formdata"},"Request Body Sample (FormData)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JavaScript"},"const formData = new FormData();\nformData.set('first_name', form.first_name.value);\nformData.set('last_name', form.last_name.value);\nformData.set('email', form.email.value);\nformData.set('mobile_number', form.mobile_number.value);\nformData.set('resume', form.resume.files[0]);\nformData.set('short_pitch', form.short_pitch.value);\n\naxios.post('/apply', formData);\n")),(0,l.kt)("p",null,"Media-type: ",(0,l.kt)("inlineCode",{parentName:"p"},"multipart/form-data")),(0,l.kt)("h3",{id:"response-body-sample"},"Response Body Sample"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{\n  success: true\n  message: 'Successfully created application',\n}\n")),(0,l.kt)("p",null,"Media-type: ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("h3",{id:"response-codes"},"Response Codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"Successful created an application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Required parameter(s) are missing or has invalid format.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5xx"),(0,l.kt)("td",{parentName:"tr",align:null},"Unexpected error.")))))}c.isMDXComponent=!0}}]);