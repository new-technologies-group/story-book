(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/Divider/Divider.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Col",(function(){return Col})),__webpack_require__.d(__webpack_exports__,"Row",(function(){return Row}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),___WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Divider/index.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Divider",component:___WEBPACK_IMPORTED_MODULE_4__.a,argTypes:{col:{table:{defaultValue:{summary:!1}},control:"boolean"},row:{table:{defaultValue:{summary:!0}},control:"boolean"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_StyledDiv,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({},args))})};Template.displayName="Template";var Col=Template.bind({});Col.args={col:!0};var Row=Template.bind({});Row.args={row:!0},Col.parameters=Object.assign({storySource:{source:"args => (\n  <div tw='w-screen h-screen flex justify-center items-center'>\n    <Divider {...args} />\n  </div>\n)"}},Col.parameters),Row.parameters=Object.assign({storySource:{source:"args => (\n  <div tw='w-screen h-screen flex justify-center items-center'>\n    <Divider {...args} />\n  </div>\n)"}},Row.parameters);var _StyledDiv=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.c)("div").withConfig({displayName:"Dividerstories___StyledDiv",componentId:"sc-14jmyp9-0"})({width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"})},"./src/components/Divider/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Divider_Divider}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),StyledDivider=styled_components_browser_esm.c.div.withConfig({displayName:"Divider__StyledDivider",componentId:"sc-osupgi-0"})((function(_ref){var col=_ref.col,_ref$row=_ref.row;return[{transitionProperty:"all",transitionTimingFunction:"linear",transitionDuration:"300ms"},(void 0===_ref$row||_ref$row)&&{width:"100%",height:".5px",marginTop:"1.25rem",marginBottom:"1.25rem",backgroundImage:"linear-gradient(to right, var(--tw-gradient-stops))","--tw-gradient-from":"var(--purple-700)","--tw-gradient-stops":"var(--tw-gradient-from), var(--pink-500), var(--tw-gradient-to, rgba(255, 255, 255, 0))","--tw-gradient-to":"var(--neutral-900)"},col&&{height:"100%",width:".5px",marginLeft:"1.25rem",marginRight:"1.25rem",backgroundImage:"linear-gradient(to bottom, var(--tw-gradient-stops))","--tw-gradient-from":"var(--purple-700)","--tw-gradient-stops":"var(--tw-gradient-from), var(--pink-500), var(--tw-gradient-to, rgba(255, 255, 255, 0))","--tw-gradient-to":"var(--neutral-900)"}]})),Divider_Divider=function Divider(props){return Object(jsx_runtime.jsx)(StyledDivider,Object.assign({},props))};Divider_Divider.displayName="Divider";try{Divider_Divider.displayName="Divider",Divider_Divider.__docgenInfo={description:"",displayName:"Divider",props:{col:{defaultValue:null,description:"",name:"col",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:Divider_Divider.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}}}]);