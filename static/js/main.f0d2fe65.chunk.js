(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),n=a(3),r=a.n(n);a(13);function c(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),o.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-3")},o.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},e.text)))))}function s(e){const[t,a]=Object(l.useState)("Enter text here.."),[n,r]=Object(l.useState)("Arial");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container",style:{color:"light"===e.mode?"#042743":"white"}},o.a.createElement("h1",null,e.heading),o.a.createElement("div",{className:"mb-3"},o.a.createElement("textarea",{className:"form-control",value:t,onChange:e=>{console.log("On change !!!!!!11"),a(e.target.value)},style:{fontFamily:n,backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"},id:"mybox",rows:"8"})),o.a.createElement("button",{className:"btn btn-primary mx-1",style:{backgroundColor:e.buttonColor},onClick:()=>{console.log("UpperCase was clicked...!!!!!!11"+t);let l=t.toUpperCase();a(l),e.showalert("Converted to UpperCase","success")}},"Convert to UpperCase"),o.a.createElement("button",{className:"btn btn-primary mx-1",style:{backgroundColor:(e.mode,"primary")},onClick:()=>{console.log("LowerCase was clicked...!!!!!!11"+t);let l=t.toLowerCase();a(l),e.showalert("Converted to LowerCase","success")}},"Convert to LowerCase"),o.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{console.log("Succesfully clear all text...!!!!!!11"+t);a(""),e.showalert("Text Cleared","success")}},"Clear Text"),o.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{console.log("Successfully changed font...!!!!!!11"+t),r(e=>"Arial"===e?"Courier New":"Arial"),e.showalert("Converted to OtherFont","success")}},"Font Change"),o.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{console.log("Successfully Copy Text...!!!!!!11"+t),navigator.clipboard.writeText(t),e.showalert("Copied to Clipboard","success")}},"Copy Text"),o.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{console.log("Successfully remove space...!!!!!!11"+t);let l=t.split(/[ ]+/).join(" ");a(l),e.showalert("Remove Extra Space","success")}},"Remove Extra Space")),o.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},o.a.createElement("h3",{style:{color:"light"===e.mode?"black":"white"}},"Your Text Summary"),o.a.createElement("p",{style:{color:"light"===e.mode?"black":"white"}},t.split(" ").length," words and ",t.length," charators"),o.a.createElement("p",{style:{color:"light"===e.mode?"black":"white"}},.008*t.length," Minutes read"),o.a.createElement("h4",{style:{color:"light"===e.mode?"black":"white"}},"Priview "),o.a.createElement("p",{style:{color:"light"===e.mode?"black":"white"}},t.length>0?t:"Enter something in the textbox above to preview it here..!!")))}c.defaultProps={title:"Home",aboutText:"About Us"};a(14);var m=function(e){return e.alert&&o.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},o.a.createElement("strong",null,(e=>{if(!e)return"";const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type)),": ",e.alert.msg)};var i=function(){const[e,t]=Object(l.useState)("light"),[a,n]=Object(l.useState)("Enable Dark Mode"),[r,i]=Object(l.useState)(null),u=(e,t)=>{i({msg:e,type:t}),setTimeout(()=>{i(null)},3e3)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(c,{title:"TextUtil's",aboutText:"About",mode:e,toggleMode:()=>{"light"===e?(t("dark"),n("Enable Dark Mode"),u("Dark mode has been enabled","success"),document.body.style.backgroundColor="#042743",document.title="TextUtils - Dark Mode"):(t("light"),n("Enable Light Mode"),u("Light mode has been enabled","success"),document.body.style.backgroundColor="white",document.title="TextUtils - Light Mode")},text:a}),o.a.createElement(m,{alert:r}),o.a.createElement("div",{className:"container my-3"},o.a.createElement(s,{showalert:u,heading:"Enter the text to analyze below",mode:e})))};var u=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(t=>{let{getCLS:a,getFID:l,getFCP:o,getLCP:n,getTTFB:r}=t;a(e),l(e),o(e),n(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i,null))),u()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.f0d2fe65.chunk.js.map