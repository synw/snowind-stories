var xe=Object.defineProperty,ke=Object.defineProperties;var _e=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var I=(t,e,o)=>e in t?xe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,C=(t,e)=>{for(var o in e||(e={}))he.call(e,o)&&I(t,o,e[o]);if(j)for(var o of j(e))we.call(e,o)&&I(t,o,e[o]);return t},P=(t,e)=>ke(t,_e(e));import{I as Ce,r as y,a as x,c as T,o as l,b as d,n as b,d as s,t as O,e as Te,f as Be,p as B,g as S,F as N,U as Se,S as He,h as Me,i as We,j as f,k,w as p,l as $e,m as Ve,q as z,s as Le,u as H,v as w,x as E,y as je,z as Ie,A as Pe,B as Oe,C as Ne,D as ze,E as Ee,G as Ue,H as qe,J as De,K as Ae,L as Re,M as Fe,N as Je,O as Ke,P as Ge}from"./vendor.cbcadeda.js";const Ze=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};Ze();const Qe={actions:{argTypesRegex:"^on[A-Z].*"},layout:"fullscreen",controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},darkMode:{classTarget:"html",stylePreview:!0},options:{storySort:{method:"",order:["Colors","Widgets","Layout","Forms"],locales:""}},viewport:{viewports:Ce}};var Xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:Qe});const Ye=`Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
tortor pretium viverra suspendisse potenti nullam ac. Massa sed elementum
tempus egestas sed sed risus pretium quam. Non curabitur gravida arcu ac.
Scelerisque in dictum non consectetur a erat nam. Dolor sit amet consectetur
adipiscing elit duis tristique sollicitudin nibh. Ac tortor vitae purus
faucibus ornare. Vitae ultricies leo integer malesuada nunc vel risus. Vitae
elementum curabitur vitae nunc sed. Sapien eget mi proin sed libero enim
sed. Vel eros donec ac odio tempor orci dapibus ultrices. Posuere ac ut
consequat semper. Mi proin sed libero enim sed faucibus. Cursus eget nunc
scelerisque viverra mauris in aliquam sem. Suscipit adipiscing bibendum est
ultricies integer. Consequat mauris nunc congue nisi vitae suscipit tellus
mauris a. Et malesuada fames ac turpis egestas. At augue eget arcu dictum.
Pretium fusce id velit ut tortor. Purus viverra accumsan in nisl nisi
scelerisque eu ultrices. Venenatis lectus magna fringilla urna porttitor
rhoncus. Diam donec adipiscing tristique risus nec feugiat in. Orci porta
non pulvinar neque laoreet suspendisse. Justo laoreet sit amet cursus sit.
Pharetra vel turpis nunc eget lorem dolor sed viverra. Nullam ac tortor
vitae purus faucibus ornare suspendisse sed. Pellentesque nec nam aliquam
sem et tortor consequat id porta. Egestas dui id ornare arcu odio ut.
Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Aliquam
ultrices sagittis orci a scelerisque purus semper eget.`,c=y(null);function M(t,e=!1,o=!1){const n=e?"":"p-5 ";let a='<div style="height:100vh " class="background">';return a+='<div class="flex flex-col h-full">',a+=`<div class="flex-grow ${n}">${t}</div>`,o&&(a+=`<div class="p-3 light">
    <code>{{ cssPanelContent ?? "Move the mouse over components to see the html" }}</code>
    </div>`),a+"</div></div>"}const v=t=>M(t),_=t=>M(t,!1,!0),U=t=>M(t,!0);var m=(t,e)=>{const o=t.__vccOpts||t;for(const[n,a]of e)o[n]=a;return o};const q={name:"ButtonWidget",props:{label:{type:String,default:"Button"},colorVariant:{type:String,default:""},darkVariant:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["click"],setup(t,{emit:e}){return t=x(t),{classes:T(()=>({btn:!0,primary:t.colorVariant==="primary",secondary:t.colorVariant==="secondary",neutral:t.colorVariant==="neutral",light:t.colorVariant==="light",danger:t.colorVariant==="danger",warning:t.colorVariant==="warning",success:t.colorVariant==="success"})),onClick(){e("click")}}}},et=["label","disabled","innerHTML"];function tt(t,e,o,n,a,i){return l(),d("button",{class:b(n.classes),label:o.label,disabled:o.disabled,onClick:e[0]||(e[0]=(...r)=>n.onClick&&n.onClick(...r)),innerHTML:o.label},null,10,et)}var nt=m(q,[["render",tt]]);q.__docgenInfo={displayName:"ButtonWidget",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"Button"'}},{name:"colorVariant",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"darkVariant",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}]};var st={parameters:{storySource:{source:`import "../assets/index.css";
import { createTemplate } from "./utils";
import ButtonWidget from "./widgets/ButtonWidget.vue";

export default {
  title: "Widgets/Buttons",
};

const Template = args => ({
  setup() {
    return { args };
  },
  template: createTemplate(\`
    <div class="text-2xl mb-5">Buttons</div>
    <div class="flex flex-row space-x-3" :class="{'text-xs':args.size === 'xs','text-sm':args.size === 'sm','text-xl':args.size === 'xl'}">
      <button class="btn" v-bind="args">Default</button>
      <button class="btn primary" v-bind="args">Primary</button>
      <button class="btn secondary" v-bind="args">Secondary</button>
      <button class="btn neutral" v-bind="args">Neutral</button>
      <button class="btn light" v-bind="args">Light</button>
      <button class="btn success" v-bind="args">Success</button>
      <button class="btn warning" v-bind="args">Warning</button>
      <button class="btn danger" v-bind="args">Danger</button>
    </div>
  \`),
});
export const Overview = Template.bind({});
Overview.argTypes = {
  size: {
    name: "Size",
    control: { type: "radio" },
    options: ["xs", "sm", "normal", "xl"],
  },
}

const Template2 = args => ({
  components: { ButtonWidget },
  setup() {
    return { args };
  },
  template: createTemplate(\`
    <div class="text-2xl mb-5">Custom buttons</div>
      <div :class="{'text-xs':args.size === 'xs','text-sm':args.size === 'sm','text-xl':args.size === 'xl'}">
        <button :class="'btn '+args.cssClass+' '+args.colorVariant" v-html="args.label ?? 'Button'" />
    </div>
    <div class="mt-5">Use css classes to customize the button: ex: <code>hover:primary dark:hover:primary-dark</code>:</div>  
    <button class="mt-5 btn hover:primary dark:hover:primary-dark">Hover</button>
  \`),
});
export const Custom = Template2.bind({});
Custom.argTypes = {
  ...Overview.argTypes,
  label: {
    name: "Label",
    type: "string",
    description: "The button label",
    control: { type: "text", required: false },
  },
  cssClass: {
    name: "Css classes",
    type: "string",
    description: "Apply css classes to the button. Ex: hover:text-red-500 dark:hover:text-secondary",
    control: { type: "text", required: false },
  },
  colorVariant: {
    name: "Color variants",
    options: ["primary", "secondary", "neutral", "light", "danger", "warning", "success"],
    control: { type: "select" },
  },
}
`,locationsMap:{overview:{startLoc:{col:17,line:9},endLoc:{col:2,line:26},startBody:{col:17,line:9},endBody:{col:2,line:26}},custom:{startLoc:{col:18,line:36},endLoc:{col:2,line:49},startBody:{col:18,line:36},endBody:{col:2,line:49}}}}},title:"Widgets/Buttons"};const ot=t=>({setup(){return{args:t}},template:v(`
    <div class="text-2xl mb-5">Buttons</div>
    <div class="flex flex-row space-x-3" :class="{'text-xs':args.size === 'xs','text-sm':args.size === 'sm','text-xl':args.size === 'xl'}">
      <button class="btn" v-bind="args">Default</button>
      <button class="btn primary" v-bind="args">Primary</button>
      <button class="btn secondary" v-bind="args">Secondary</button>
      <button class="btn neutral" v-bind="args">Neutral</button>
      <button class="btn light" v-bind="args">Light</button>
      <button class="btn success" v-bind="args">Success</button>
      <button class="btn warning" v-bind="args">Warning</button>
      <button class="btn danger" v-bind="args">Danger</button>
    </div>
  `)}),W=ot.bind({});W.argTypes={size:{name:"Size",control:{type:"radio"},options:["xs","sm","normal","xl"]}};const rt=t=>({components:{ButtonWidget:nt},setup(){return{args:t}},template:v(`
    <div class="text-2xl mb-5">Custom buttons</div>
      <div :class="{'text-xs':args.size === 'xs','text-sm':args.size === 'sm','text-xl':args.size === 'xl'}">
        <button :class="'btn '+args.cssClass+' '+args.colorVariant" v-html="args.label ?? 'Button'" />
    </div>
    <div class="mt-5">Use css classes to customize the button: ex: <code>hover:primary dark:hover:primary-dark</code>:</div>  
    <button class="mt-5 btn hover:primary dark:hover:primary-dark">Hover</button>
  `)}),D=rt.bind({});D.argTypes=P(C({},W.argTypes),{label:{name:"Label",type:"string",description:"The button label",control:{type:"text",required:!1}},cssClass:{name:"Css classes",type:"string",description:"Apply css classes to the button. Ex: hover:text-red-500 dark:hover:text-secondary",control:{type:"text",required:!1}},colorVariant:{name:"Color variants",options:["primary","secondary","neutral","light","danger","warning","success"],control:{type:"select"}}});const at=["Overview","Custom"];var it=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:st,Overview:W,Custom:D,__namedExportsOrder:at});const A={props:{isCollapsed:{type:Boolean,default:!0},cssClass:{type:String,default:""}},setup(t){t=x(t);const e=y(t.isCollapsed),o=T(()=>{let a="slide-y";switch(e.value){case!0:a+=" slideup";break;default:a+=" slidedown";break}return t.cssClass!==""&&(a+=` ${t.cssClass}`),a});function n(){e.value=!e.value}return{model:e,textBlock:Ye,onClick:n,css:o}}},lt=["innerHTML"];function dt(t,e,o,n,a,i){return l(),d("div",null,[s("button",{class:"btn",onClick:e[0]||(e[0]=r=>n.model=!n.model),innerHTML:n.model?"Open":"Close"},null,8,lt),s("div",{class:b([n.css,"mt-4"])},O(n.textBlock),3)])}var R=m(A,[["render",dt]]);A.__docgenInfo={exportName:"default",displayName:"CollapseWidget",description:"",tags:{},props:[{name:"isCollapsed",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"cssClass",type:{name:"string"},defaultValue:{func:!1,value:'""'}}]};var ct={parameters:{storySource:{source:`import "../assets/index.css";
import { createTemplate } from "./utils";
import CollapseWidget from "./widgets/CollapseWidget.vue";

export default {
  component: CollapseWidget,
  title: "Widgets/Collapse",
};

const Template = args => ({
  components: { CollapseWidget },
  setup() {
    return { args };
  },
  template: createTemplate(\`
    <div class="text-2xl mb-5">Collapse</div>
    <CollapseWidget v-bind="args" />
  \`),
});

export const Collapse = Template.bind({});
Collapse.argTypes = {
  cssClass: {
    name: "Css classes",
    type: "string",
    description: "Apply css classes to the collapse. Ex: duration-500 delay-1000",
    control: { type: "text", required: false },
    defaultValue: "",
  },
}
`,locationsMap:{collapse:{startLoc:{col:17,line:10},endLoc:{col:2,line:19},startBody:{col:17,line:10},endBody:{col:2,line:19}}}}},component:R,title:"Widgets/Collapse"};const ut=t=>({components:{CollapseWidget:R},setup(){return{args:t}},template:v(`
    <div class="text-2xl mb-5">Collapse</div>
    <CollapseWidget v-bind="args" />
  `)}),F=ut.bind({});F.argTypes={cssClass:{name:"Css classes",type:"string",description:"Apply css classes to the collapse. Ex: duration-500 delay-1000",control:{type:"text",required:!1},defaultValue:""}};const mt=["Collapse"];var gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ct,Collapse:F,__namedExportsOrder:mt}),J=Te({props:{link:{type:String,required:!0}},setup(t){const{link:e}=Be(t),o="https://synw.github.io/snowind/";function n(){window.open(o+e.value,"_blank").focus()}return{base:o,onClick:n}}});function pt(t,e){return l(),d("button",{class:"text-sm cursor-pointer btn border-light dark:border-light-dark hover:secondary dark:hover:secondary-dark txt-neutral",onClick:e[0]||(e[0]=o=>t.onClick())},"Documentation")}var h=m(J,[["render",pt]]);J.__docgenInfo={exportName:"default",displayName:"DocButton",description:"",tags:{},props:[{name:"link",type:{name:"string"},required:!0}]};const K={setup(){function t(o){const n=`<div class="${o}">Text</div>`;c.value=n}function e(){c.value=""}return{onHover:t,endHover:e}}},g=t=>(B("data-v-d40331ce"),t=t(),S(),t),vt={class:"grid grid-flow-col gap-8 mt-5 auto-cols-max"},bt={class:"inline-block"},ft=g(()=>s("div",{class:"mt-2 text-center"},"primary",-1)),yt={class:"inline-block"},xt=g(()=>s("div",{class:"mt-2 text-center"},"secondary",-1)),kt={class:"inline-block"},_t=g(()=>s("div",{class:"mt-2 text-center"},"neutral",-1)),ht={class:"inline-block"},wt=g(()=>s("div",{class:"mt-2 text-center"},"light",-1)),Ct={class:"inline-block"},Tt=g(()=>s("div",{class:"mt-2 text-center"},"success",-1)),Bt={class:"inline-block"},St=g(()=>s("div",{class:"mt-2 text-center"},"warning",-1)),Ht={class:"inline-block"},Mt=g(()=>s("div",{class:"mt-2 text-center"},"danger",-1)),Wt={class:"inline-block"},$t=g(()=>s("div",{class:"mt-2 text-center"},"background",-1));function Vt(t,e,o,n,a,i){return l(),d("div",vt,[s("div",bt,[s("div",{class:"color-block primary",onMouseenter:e[0]||(e[0]=r=>n.onHover("primary"))},"Text",32),ft]),s("div",yt,[s("div",{class:"color-block secondary",onMouseenter:e[1]||(e[1]=r=>n.onHover("secondary"))},"Text",32),xt]),s("div",kt,[s("div",{class:"color-block neutral",onMouseenter:e[2]||(e[2]=r=>n.onHover("neutral"))},"Text",32),_t]),s("div",ht,[s("div",{class:"color-block light",onMouseenter:e[3]||(e[3]=r=>n.onHover("light"))},"Text",32),wt]),s("div",Ct,[s("div",{class:"color-block success",onMouseenter:e[4]||(e[4]=r=>n.onHover("success"))},"Text",32),Tt]),s("div",Bt,[s("div",{class:"color-block warning",onMouseenter:e[5]||(e[5]=r=>n.onHover("warning"))},"Text",32),St]),s("div",Ht,[s("div",{class:"color-block danger",onMouseenter:e[6]||(e[6]=r=>n.onHover("danger"))},"Text",32),Mt]),s("div",Wt,[s("div",{class:"color-block background",onMouseenter:e[7]||(e[7]=r=>n.onHover("background"))},"Text",32),$t])])}var Lt=m(K,[["render",Vt],["__scopeId","data-v-d40331ce"]]);K.__docgenInfo={exportName:"default",displayName:"ColorsWidget",description:"",tags:{}};const G={setup(){function t(e){const o=`<div class="txt-${e}">txt-${e}</div>`;c.value=o}return{onHover:t}}},jt={class:"flex flex-row space-x-3"};function It(t,e,o,n,a,i){return l(),d("div",jt,[s("div",{class:"txt-primary",onMouseenter:e[0]||(e[0]=r=>n.onHover("primary"))},"txt-primary",32),s("div",{class:"txt-secondary",onMouseenter:e[1]||(e[1]=r=>n.onHover("secondary"))},"txt-secondary",32),s("div",{class:"txt-neutral",onMouseenter:e[2]||(e[2]=r=>n.onHover("neutral"))},"txt-neutral",32),s("div",{class:"txt-light",onMouseenter:e[3]||(e[3]=r=>n.onHover("light"))},"txt-light",32),s("div",{class:"txt-success",onMouseenter:e[4]||(e[4]=r=>n.onHover("success"))},"txt-success",32),s("div",{class:"txt-warning",onMouseenter:e[5]||(e[5]=r=>n.onHover("warning"))},"txt-warning",32),s("div",{class:"txt-danger",onMouseenter:e[6]||(e[6]=r=>n.onHover("danger"))},"txt-danger",32),s("div",{class:"txt-background",onMouseenter:e[7]||(e[7]=r=>n.onHover("background"))},"txt-background",32)])}var Pt=m(G,[["render",It],["__scopeId","data-v-67b4745a"]]);G.__docgenInfo={exportName:"default",displayName:"ColorTextUtilsWidget",description:"",tags:{}};const Z={setup(){function t(o){const n=`<div class="block-${o}">block-${o}</div>`;c.value=n}function e(o){const n=`<div class="${o}">${o}</div>`;c.value=n}return{onHoverBlock:t,onHover:e}}},Q=t=>(B("data-v-845dbbf8"),t=t(),S(),t),Ot=Q(()=>s("div",{class:"mb-3 text-xl"},"Background only",-1)),Nt={class:"flex flex-row space-x-3"},zt=Q(()=>s("div",{class:"mt-3 mb-5 text-xl"},"Background and text",-1)),Et={class:"flex flex-row space-x-3"};function Ut(t,e,o,n,a,i){return l(),d(N,null,[Ot,s("div",Nt,[s("div",{class:"block-primary",onMouseenter:e[0]||(e[0]=r=>n.onHoverBlock("primary"))},"block-primary",32),s("div",{class:"block-secondary",onMouseenter:e[1]||(e[1]=r=>n.onHoverBlock("secondary"))},"block-secondary",32),s("div",{class:"block-neutral",onMouseenter:e[2]||(e[2]=r=>n.onHoverBlock("neutral"))},"block-neutral",32),s("div",{class:"block-light",onMouseenter:e[3]||(e[3]=r=>n.onHoverBlock("light"))},"block-light",32),s("div",{class:"block-success",onMouseenter:e[4]||(e[4]=r=>n.onHoverBlock("success"))},"block-success",32),s("div",{class:"block-warning",onMouseenter:e[5]||(e[5]=r=>n.onHoverBlock("warning"))},"block-warning",32),s("div",{class:"block-danger",onMouseenter:e[6]||(e[6]=r=>n.onHoverBlock("danger"))},"block-danger",32),s("div",{class:"block-background",onMouseenter:e[7]||(e[7]=r=>n.onHoverBlock("background"))},"block-background",32)]),zt,s("div",Et,[s("div",{class:"primary",onMouseenter:e[8]||(e[8]=r=>n.onHover("primary"))},"primary",32),s("div",{class:"secondary",onMouseenter:e[9]||(e[9]=r=>n.onHover("secondary"))},"secondary",32),s("div",{class:"neutral",onMouseenter:e[10]||(e[10]=r=>n.onHover("neutral"))},"neutral",32),s("div",{class:"light",onMouseenter:e[11]||(e[11]=r=>n.onHover("light"))},"light",32),s("div",{class:"success",onMouseenter:e[12]||(e[12]=r=>n.onHover("success"))},"success",32),s("div",{class:"warning",onMouseenter:e[13]||(e[13]=r=>n.onHover("warning"))},"warning",32),s("div",{class:"danger",onMouseenter:e[14]||(e[14]=r=>n.onHover("danger"))},"danger",32),s("div",{class:"background",onMouseenter:e[15]||(e[15]=r=>n.onHover("background"))},"background",32)])],64)}var qt=m(Z,[["render",Ut],["__scopeId","data-v-845dbbf8"]]);Z.__docgenInfo={exportName:"default",displayName:"ColorBlockUtilsWidget",description:"",tags:{}};const X={setup(){function t(e){const o=`<div class="hover:${e} dark:hover:${e}-dark">${e}</div>`;c.value=o}return{onHover:t}}},Dt={class:"flex flex-row space-x-3"};function At(t,e,o,n,a,i){return l(),d("div",Dt,[s("div",{class:"hover:primary dark:hover:primary-dark",onMouseenter:e[0]||(e[0]=r=>n.onHover("primary"))},"primary",32),s("div",{class:"hover:secondary dark:hover:secondary-dark",onMouseenter:e[1]||(e[1]=r=>n.onHover("secondary"))},"secondary",32),s("div",{class:"hover:neutral dark:hover:neutral-dark",onMouseenter:e[2]||(e[2]=r=>n.onHover("neutral"))},"neutral",32),s("div",{class:"hover:light dark:hover:light-dark",onMouseenter:e[3]||(e[3]=r=>n.onHover("light"))},"light",32),s("div",{class:"hover:success dark:hover:success-dark",onMouseenter:e[4]||(e[4]=r=>n.onHover("success"))},"success",32),s("div",{class:"hover:warning dark:hover:warning-dark",onMouseenter:e[5]||(e[5]=r=>n.onHover("warning"))},"warning",32),s("div",{class:"hover:danger dark:hover:danger-dark",onMouseenter:e[6]||(e[6]=r=>n.onHover("danger"))},"danger",32),s("div",{class:"hover:background dark:hover:background-dark",onMouseenter:e[7]||(e[7]=r=>n.onHover("background"))},"background",32)])}var Rt=m(X,[["render",At],["__scopeId","data-v-a60c590c"]]);X.__docgenInfo={exportName:"default",displayName:"ColorHoverVariantsWidget",description:"",tags:{}};const Y={setup(){function t(e){const o=`<div class="sm:background sm:dark:background-dark ${e}">${e} mobile only</div>`;c.value=o}return{onHover:t}}},Ft=t=>(B("data-v-fc3f4d82"),t=t(),S(),t),Jt={class:"grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3"},Kt=Ft(()=>s("div",{class:"hidden mt-5 sm:block"},"Resize the viewport to see the responsive variants",-1));function Gt(t,e,o,n,a,i){return l(),d(N,null,[s("div",Jt,[s("div",{class:"sm:background sm:dark:background-dark primary",onMouseenter:e[0]||(e[0]=r=>n.onHover("primary"))},"primary mobile only",32),s("div",{class:"sm:background sm:dark:background-dark secondary",onMouseenter:e[1]||(e[1]=r=>n.onHover("secondary"))},"secondary mobile only",32),s("div",{class:"sm:background sm:dark:background-dark neutral",onMouseenter:e[2]||(e[2]=r=>n.onHover("neutral"))},"neutral mobile only",32),s("div",{class:"sm:background sm:dark:background-dark light",onMouseenter:e[3]||(e[3]=r=>n.onHover("light"))},"light mobile only",32),s("div",{class:"sm:background sm:dark:background-dark success",onMouseenter:e[4]||(e[4]=r=>n.onHover("success"))},"success mobile only",32),s("div",{class:"sm:background sm:dark:background-dark warning",onMouseenter:e[5]||(e[5]=r=>n.onHover("warning"))},"warning mobile only",32),s("div",{class:"sm:background sm:dark:background-dark danger",onMouseenter:e[6]||(e[6]=r=>n.onHover("danger"))},"danger mobile only",32),s("div",{class:"sm:background sm:dark:background-dark background",onMouseenter:e[7]||(e[7]=r=>n.onHover("background"))},"background mobile only",32)]),Kt],64)}var Zt=m(Y,[["render",Gt],["__scopeId","data-v-fc3f4d82"]]);Y.__docgenInfo={exportName:"default",displayName:"ColorResponsiveVariantsWidget",description:"",tags:{}};var Qt={parameters:{storySource:{source:`import "../assets/index.css";
import { createTemplate, createTemplateWithPanel, cssPanelContent } from "./utils";
import DocButton from "./components/DocButton.vue";
import ColorsWidget from "./widgets/ColorsWidget.vue";
import ColorTextUtilsWidget from "./widgets/ColorTextUtilsWidget.vue";
import ColorBlockUtilsWidget from "./widgets/ColorBlockUtilsWidget.vue";
import ColorHoverVariantsWidget from "./widgets/ColorHoverVariantsWidget.vue";
import ColorResponsiveVariantsWidget from "./widgets/ColorResponsiveVariantsWidget.vue";

export default {
  title: "Colors",
};

const Template = args => ({
  components: { ColorsWidget, DocButton },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(\`
    <div class="text-2xl mb-8">Semantic color utilities
      <doc-button class="float-right" link="colors#configure"></doc-button>
    </div>
    <colors-widget />
    <div class="mt-5">Configure your semantic colors in <i>tailwind.config.js</i> and the
    changes will be reflected in the Storybook. All the color utilities have support for the dark mode</div>
    
  \`),
});
export const BasicUtilities = Template.bind({});
BasicUtilities.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false }
};

const Template1 = args => ({
  components: { ColorTextUtilsWidget, DocButton },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(\`
    <div class="text-2xl mb-8">Text utilities
      <doc-button class="float-right" link="colors#textutils"></doc-button>
    </div>
    <color-text-utils-widget />
  \`),
});
export const TextUtilities = Template1.bind({});
TextUtilities.parameters = {
  options: { showPanel: false },
};

const Template2 = args => ({
  components: { ColorBlockUtilsWidget, DocButton },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(\`
    <div class="text-2xl mb-5">Background utilities
      <doc-button class="float-right" link="colors#blockutils"></doc-button>
    </div>
    <color-block-utils-widget />
  \`),
});
export const BackgroundUtilities = Template2.bind({});
BackgroundUtilities.parameters = {
  options: { showPanel: false },
};

const Template3 = args => ({
  components: { ColorHoverVariantsWidget, DocButton },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(\`
    <div class="text-2xl mb-5">Hover variants
      <doc-button class="float-right" link="colors#hovervariants"></doc-button>
    </div>
    <color-hover-variants-widget />
  \`),
});
export const HoverVariants = Template3.bind({});
HoverVariants.parameters = {
  options: { showPanel: false },
};

const Template4 = args => ({
  components: { ColorResponsiveVariantsWidget, DocButton },
  setup() {
    cssPanelContent.value = null;
    return { args, cssPanelContent };
  },
  template: createTemplateWithPanel(\`
    <div class="text-2xl mb-5">Responsive variants
      <doc-button class="hidden sm:block float-right" link="colors#responsivevariants"></doc-button>
    </div>
    <color-responsive-variants-widget />
  \`),

});
export const ResponsiveVariants = Template4.bind({});
ResponsiveVariants.parameters = {
  options: { showPanel: false },
  viewport: {
    defaultViewport: 'iphone6',
  },
};

const Template5 = args => ({
  setup() {
    return { args };
  },
  template: createTemplate(\`
    <div class="text-2xl mb-5">Custom color block</div>
    <div :class="args.cssClass" class="p-3">Lorem ipsum</div>
  \`),
});
export const Customize = Template5.bind({});
Customize.parameters = {
  options: { showPanel: true }
};
Customize.argTypes = {
  cssClass: {
    name: "Css classes",
    type: "string",
    description: "Apply css classes to the button. Ex: hover:text-red-500 dark:hover:text-secondary",
    defaultValue: "primary hover:success dark:hover:danger-dark",
    control: { type: "text" },
  },
}
`,locationsMap:{"basic-utilities":{startLoc:{col:17,line:14},endLoc:{col:2,line:29},startBody:{col:17,line:14},endBody:{col:2,line:29}},"text-utilities":{startLoc:{col:18,line:36},endLoc:{col:2,line:48},startBody:{col:18,line:36},endBody:{col:2,line:48}},"background-utilities":{startLoc:{col:18,line:54},endLoc:{col:2,line:66},startBody:{col:18,line:54},endBody:{col:2,line:66}},"hover-variants":{startLoc:{col:18,line:72},endLoc:{col:2,line:84},startBody:{col:18,line:72},endBody:{col:2,line:84}},"responsive-variants":{startLoc:{col:18,line:90},endLoc:{col:2,line:103},startBody:{col:18,line:90},endBody:{col:2,line:103}},customize:{startLoc:{col:18,line:112},endLoc:{col:2,line:120},startBody:{col:18,line:112},endBody:{col:2,line:120}}}}},title:"Colors"};const Xt=t=>({components:{ColorsWidget:Lt,DocButton:h},setup(){return c.value=null,{args:t,cssPanelContent:c}},template:_(`
    <div class="text-2xl mb-8">Semantic color utilities
      <doc-button class="float-right" link="colors#configure"></doc-button>
    </div>
    <colors-widget />
    <div class="mt-5">Configure your semantic colors in <i>tailwind.config.js</i> and the
    changes will be reflected in the Storybook. All the color utilities have support for the dark mode</div>
    
  `)}),ee=Xt.bind({});ee.parameters={controls:{hideNoControlsWarning:!0},options:{showPanel:!1}};const Yt=t=>({components:{ColorTextUtilsWidget:Pt,DocButton:h},setup(){return c.value=null,{args:t,cssPanelContent:c}},template:_(`
    <div class="text-2xl mb-8">Text utilities
      <doc-button class="float-right" link="colors#textutils"></doc-button>
    </div>
    <color-text-utils-widget />
  `)}),te=Yt.bind({});te.parameters={options:{showPanel:!1}};const en=t=>({components:{ColorBlockUtilsWidget:qt,DocButton:h},setup(){return c.value=null,{args:t,cssPanelContent:c}},template:_(`
    <div class="text-2xl mb-5">Background utilities
      <doc-button class="float-right" link="colors#blockutils"></doc-button>
    </div>
    <color-block-utils-widget />
  `)}),ne=en.bind({});ne.parameters={options:{showPanel:!1}};const tn=t=>({components:{ColorHoverVariantsWidget:Rt,DocButton:h},setup(){return c.value=null,{args:t,cssPanelContent:c}},template:_(`
    <div class="text-2xl mb-5">Hover variants
      <doc-button class="float-right" link="colors#hovervariants"></doc-button>
    </div>
    <color-hover-variants-widget />
  `)}),se=tn.bind({});se.parameters={options:{showPanel:!1}};const nn=t=>({components:{ColorResponsiveVariantsWidget:Zt,DocButton:h},setup(){return c.value=null,{args:t,cssPanelContent:c}},template:_(`
    <div class="text-2xl mb-5">Responsive variants
      <doc-button class="hidden sm:block float-right" link="colors#responsivevariants"></doc-button>
    </div>
    <color-responsive-variants-widget />
  `)}),oe=nn.bind({});oe.parameters={options:{showPanel:!1},viewport:{defaultViewport:"iphone6"}};const sn=t=>({setup(){return{args:t}},template:v(`
    <div class="text-2xl mb-5">Custom color block</div>
    <div :class="args.cssClass" class="p-3">Lorem ipsum</div>
  `)}),$=sn.bind({});$.parameters={options:{showPanel:!0}};$.argTypes={cssClass:{name:"Css classes",type:"string",description:"Apply css classes to the button. Ex: hover:text-red-500 dark:hover:text-secondary",defaultValue:"primary hover:success dark:hover:danger-dark",control:{type:"text"}}};const on=["BasicUtilities","TextUtilities","BackgroundUtilities","HoverVariants","ResponsiveVariants","Customize"];var rn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qt,BasicUtilities:ee,TextUtilities:te,BackgroundUtilities:ne,HoverVariants:se,ResponsiveVariants:oe,Customize:$,__namedExportsOrder:on});const an=new Se,re={components:{SwHeader:He,SwMobileMenu:Me,Icon:We},props:{branding:{type:String,default:"Branding"},menu:{type:String},mobileBranding:{type:String},mobileBack:{type:String},menuIcon:{type:String}},setup(){const t=y(!1);function e(){t.value=!1}return{isMenuVisible:t,closeMenu:e,user:an}}},ln=["innerHTML"],dn=["innerHTML"],cn={class:"flex flex-row items-center justify-end h-full space-x-1"},un=s("div",{class:"flex flex-col p-3 space-y-5"},[s("button",{class:"border-none btn"},"Page 1"),s("button",{class:"border-none btn"},"Page 2")],-1);function mn(t,e,o,n,a,i){const r=f("icon"),u=f("sw-header"),ye=f("sw-mobile-menu");return l(),d("div",null,[k(u,{class:"h-12 bg-primary text-primary-r dark:bg-primary-dark dark:text-primary-r-dark",onTogglemenu:e[2]||(e[2]=L=>n.isMenuVisible=!n.isMenuVisible)},{branding:p(()=>[s("div",{class:"ml-5 text-lg",innerHTML:o.branding},null,8,ln)]),"mobile-branding":p(()=>[s("div",{class:"ml-5 text-lg",innerHTML:o.mobileBranding},null,8,dn)]),"mobile-back":p(()=>[k(r,{icon:"eva:arrow-back-outline",class:"ml-3 text-2xl"})]),menu:p(()=>[s("div",cn,[s("button",{class:"border-none btn",onClick:e[0]||(e[0]=L=>n.closeMenu())},"Page 1"),s("button",{class:"border-none btn",onClick:e[1]||(e[1]=L=>n.closeMenu())},"Page 2")])]),_:1}),k(ye,{"is-visible":n.isMenuVisible,class:"bg-neutral text-neutral-r dark:bg-neutral-dark dark:text-neutral-r-dark"},{default:p(()=>[un]),_:1},8,["is-visible"])])}var ae=m(re,[["render",mn]]);re.__docgenInfo={exportName:"default",displayName:"HeaderWidget",description:"",tags:{},props:[{name:"branding",type:{name:"string"},defaultValue:{func:!1,value:'"Branding"'}},{name:"menu",type:{name:"string"}},{name:"mobileBranding",type:{name:"string"}},{name:"mobileBack",type:{name:"string"}},{name:"menuIcon",type:{name:"string"}}]};var gn={parameters:{storySource:{source:`import "../assets/index.css";
import { createTemplateNoPadding } from "./utils";
import HeaderWidget from "./widgets/HeaderWidget.vue";

export default {
  component: HeaderWidget,
  title: "Layout/Header",
};

const Template = (args) => ({
  components: { HeaderWidget },
  setup() {
    return { args };
  },
  template: createTemplateNoPadding(\`
    <header-widget :branding="args.branding" :mobile-branding="args.mobileBranding ?? 'Mobile branding'"
      ></header-widget>
    <div class="mt-5 px-3">Change the size of the preview in the menu bar to see the mobile version</div>
  \`),
});

export const Header = Template.bind({});
Header.argTypes = {
  branding: {
    name: "Branding",
    description: "The site branding",
    control: { type: "text", required: false },
  },
  mobileBranding: {
    name: "Mobile branding",
    description: "The site branding for mobile view",
    control: { type: "text", required: false },
  },
}`,locationsMap:{header:{startLoc:{col:17,line:10},endLoc:{col:2,line:20},startBody:{col:17,line:10},endBody:{col:2,line:20}}}}},component:ae,title:"Layout/Header"};const pn=t=>({components:{HeaderWidget:ae},setup(){return{args:t}},template:U(`
    <header-widget :branding="args.branding" :mobile-branding="args.mobileBranding ?? 'Mobile branding'"
      ></header-widget>
    <div class="mt-5 px-3">Change the size of the preview in the menu bar to see the mobile version</div>
  `)}),ie=pn.bind({});ie.argTypes={branding:{name:"Branding",description:"The site branding",control:{type:"text",required:!1}},mobileBranding:{name:"Mobile branding",description:"The site branding for mobile view",control:{type:"text",required:!1}}};const vn=["Header"];var bn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gn,Header:ie,__namedExportsOrder:vn});const le={components:{SwInput:$e},props:{inlineLabel:{type:String,default:""},cssClass:{type:String,default:""}},setup(){return{form:x({name:{val:"",isValid:null,validator:e=>e.length>2}})}}},fn={class:"mt-3 text-sm"},yn={key:0,class:"text-success dark:text-success-dark"},xn={key:1,class:"text-danger dark:text-danger-dark"},kn={key:2,class:"text-neutral dark:text-neutral-dark"};function _n(t,e,o,n,a,i){const r=f("sw-input");return l(),d("div",null,[k(r,{id:"username",value:n.form.name.val,"onUpdate:value":e[0]||(e[0]=u=>n.form.name.val=u),isvalid:n.form.name.isValid,"onUpdate:isvalid":e[1]||(e[1]=u=>n.form.name.isValid=u),validator:n.form.name.validator,placeholder:"username","inline-label":o.inlineLabel,class:b(o.cssClass),required:""},null,8,["value","isvalid","validator","inline-label","class"]),s("div",fn,[n.form.name.isValid===!0?(l(),d("div",yn," Ok ")):n.form.name.isValid===!1?(l(),d("div",xn," Type 3 characters minimum ")):(l(),d("div",kn," Type a username "))])])}var de=m(le,[["render",_n]]);le.__docgenInfo={exportName:"default",displayName:"InputWidget",description:"",tags:{},props:[{name:"inlineLabel",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"cssClass",type:{name:"string"},defaultValue:{func:!1,value:'""'}}]};var hn={parameters:{storySource:{source:`import "../assets/index.css";
import { createTemplate } from "./utils";
import InputWidget from "./widgets/InputWidget.vue";

export default {
  component: InputWidget,
  title: "Forms/Input",
};

const Template = args => ({
  components: { InputWidget },
  setup() {
    return { args };
  },
  template: createTemplate(\`
    <div class="text-2xl mb-5">Input with validation</div>
    <InputWidget :inlineLabel="args.inlineLabel" />
  \`),
});

export const Input = Template.bind({});
Input.argTypes = {
  inlineLabel: {
    name: "Inline label",
    type: "string",
    description: "Display the label inline",
    control: { type: "text", required: false },
    defaultValue: "",
  },
}
`,locationsMap:{input:{startLoc:{col:17,line:10},endLoc:{col:2,line:19},startBody:{col:17,line:10},endBody:{col:2,line:19}}}}},component:de,title:"Forms/Input"};const wn=t=>({components:{InputWidget:de},setup(){return{args:t}},template:v(`
    <div class="text-2xl mb-5">Input with validation</div>
    <InputWidget :inlineLabel="args.inlineLabel" />
  `)}),ce=wn.bind({});ce.argTypes={inlineLabel:{name:"Inline label",type:"string",description:"Display the label inline",control:{type:"text",required:!1},defaultValue:""}};const Cn=["Input"];var Tn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:hn,Input:ce,__namedExportsOrder:Cn});const ue={components:{SwSwitch:Ve},props:{labelText:{type:String,default:"Label"},hasLabel:{type:Boolean,default:!1},big:{type:Boolean,default:!1},css:{type:String,default:""},checked:{type:Boolean,default:!0}},setup(t){return t=x(t),{model:y(t.checked)}}},Bn=["innerHTML"];function Sn(t,e,o,n,a,i){const r=f("sw-switch");return o.hasLabel?(l(),z(r,{key:0,value:n.model,"onUpdate:value":e[0]||(e[0]=u=>n.model=u),class:b(o.css),big:o.big},{default:p(()=>[s("div",{class:"pl-2",innerHTML:o.labelText},null,8,Bn)]),_:1},8,["value","class","big"])):(l(),z(r,{key:1,value:n.model,"onUpdate:value":e[1]||(e[1]=u=>n.model=u),class:b(o.css),big:o.big},null,8,["value","class","big"]))}var V=m(ue,[["render",Sn]]);ue.__docgenInfo={exportName:"default",displayName:"SwitchWidget",description:"",tags:{},props:[{name:"labelText",type:{name:"string"},defaultValue:{func:!1,value:'"Label"'}},{name:"hasLabel",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"big",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"css",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"checked",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}]};var Hn={parameters:{storySource:{source:`import "../assets/index.css";
import { createTemplate } from "./utils";
import SwitchWidget from "./widgets/SwitchWidget.vue";

export default {
  component: SwitchWidget,
  title: "Widgets/Switch",
};

const Template = args => ({
  components: { SwitchWidget },
  setup() {
    return { args };
  },
  template: createTemplate(\`
    <div class="text-2xl mb-5">Switch</div>
    <div class="flex flex-row space-x-8">
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block" :checked="true" />&nbsp;Default</div>
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block primary" :checked="true" />&nbsp;Primary</div>
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block secondary" :checked="true" />&nbsp;Secondary</div>
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block warning" :checked="true" />&nbsp;Warning</div>
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block danger" :checked="true" />&nbsp;Danger</div>
    </div>
  \`),
});

export const Overview = Template.bind({});
Overview.argTypes = {
  big: {
    name: "Big",
    type: "boolean",
    defaultValue: false,
  },
}

const Template2 = args => ({
  components: { SwitchWidget },
  setup() {
    return { args };
  },
  template: createTemplate(\`
    <div class="text-2xl mb-5">Custom switch</div>
    <switch-widget :big="args.big" :has-label="args.labelText" :css="'w-max align-middle inline-block '+args.colorVariant" />
  \`),
});

export const Custom = Template2.bind({});
Custom.argTypes = {
  big: {
    name: "Big",
    type: "boolean",
    defaultValue: false,
  },
  labelText: {
    name: "Clickable label",
    type: "boolean",
    defaultValue: true,
  },
  colorVariant: {
    name: "Color variant",
    options: ["default", "primary", "secondary", "danger", "warning"],
    control: { type: "select" },
  },
}
`,locationsMap:{overview:{startLoc:{col:17,line:10},endLoc:{col:2,line:25},startBody:{col:17,line:10},endBody:{col:2,line:25}},custom:{startLoc:{col:18,line:36},endLoc:{col:2,line:45},startBody:{col:18,line:36},endBody:{col:2,line:45}}}}},component:V,title:"Widgets/Switch"};const Mn=t=>({components:{SwitchWidget:V},setup(){return{args:t}},template:v(`
    <div class="text-2xl mb-5">Switch</div>
    <div class="flex flex-row space-x-8">
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block" :checked="true" />&nbsp;Default</div>
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block primary" :checked="true" />&nbsp;Primary</div>
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block secondary" :checked="true" />&nbsp;Secondary</div>
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block warning" :checked="true" />&nbsp;Warning</div>
      <div><switch-widget :big="args.big" css="w-max align-middle inline-block danger" :checked="true" />&nbsp;Danger</div>
    </div>
  `)}),me=Mn.bind({});me.argTypes={big:{name:"Big",type:"boolean",defaultValue:!1}};const Wn=t=>({components:{SwitchWidget:V},setup(){return{args:t}},template:v(`
    <div class="text-2xl mb-5">Custom switch</div>
    <switch-widget :big="args.big" :has-label="args.labelText" :css="'w-max align-middle inline-block '+args.colorVariant" />
  `)}),ge=Wn.bind({});ge.argTypes={big:{name:"Big",type:"boolean",defaultValue:!1},labelText:{name:"Clickable label",type:"boolean",defaultValue:!0},colorVariant:{name:"Color variant",options:["default","primary","secondary","danger","warning"],control:{type:"select"}}};const $n=["Overview","Custom"];var Vn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Hn,Overview:me,Custom:ge,__namedExportsOrder:$n});const pe={components:{SwSidebar:Le},props:{isOpened:{type:Boolean,default:!1},cssClass:{type:String,default:""}},setup(t){t=x(t);const e=y(t.isOpened),o=T(()=>{let n="bg-secondary text-secondary-r";return t.cssClass!==""&&(n=t.cssClass),n});return{model:e,css:o}}},Ln={class:"flex flex-row",style:{height:"100vh"}},jn={class:"flex-grow mt-5 ml-6 space-y-6"},In=w(" 1 "),Pn={key:0,class:"ml-3"},On=w(" 2 "),Nn={key:0,class:"ml-3"},zn=w(" 3 "),En={key:0,class:"ml-3"},Un={key:0},qn={key:1},Dn={class:"w-full bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark"},An={class:"m-5"},Rn=w(" Is the sidebar open? ");function Fn(t,e,o,n,a,i){const r=f("sw-sidebar");return l(),d("div",Ln,[k(r,{opened:n.model,"onUpdate:opened":e[1]||(e[1]=u=>n.model=u),name:"sidebar1",class:b(["flex flex-col h-full",n.css])},{default:p(()=>[s("div",jn,[s("div",null,[In,n.model===!0?(l(),d("span",Pn,"Page 1")):H("",!0)]),s("div",null,[On,n.model===!0?(l(),d("span",Nn,"Page 2")):H("",!0)]),s("div",null,[zn,n.model===!0?(l(),d("span",En,"Page 3")):H("",!0)])]),s("div",{class:"flex-none h-12 mb-3 text-center cursor-pointer",onClick:e[0]||(e[0]=u=>n.model=!n.model)},[n.model===!1?(l(),d("div",Un,"Open")):(l(),d("div",qn,"Close"))])]),_:1},8,["opened","class"]),s("div",Dn,[s("div",An,[Rn,s("b",null,O(n.model),1)])])])}var ve=m(pe,[["render",Fn]]);pe.__docgenInfo={exportName:"default",displayName:"SidebarWidget",description:"",tags:{},props:[{name:"isOpened",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"cssClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};var Jn={parameters:{storySource:{source:`import '../assets/index.css';
import { createTemplateNoPadding } from "./utils";
import SidebarWidget from "./widgets/SidebarWidget.vue";

export default {
  title: 'Layout/Sidebar',
  component: SidebarWidget,
};

const Template = (args) => ({
  components: { SidebarWidget },
  setup() {
    return { args };
  },
  template: createTemplateNoPadding(\`
  <sidebar-widget :cssClass="args.cssClass"></sidebar-widget>
  \`),
});

export const Sidebar = Template.bind({});
Sidebar.argTypes = {
  cssClass: {
    name: "Css classes",
    type: "string",
    description: "Apply css classes to the sidebar. Ex: bg-primary text-primary-r w-24",
    control: { type: 'text', required: false },
    defaultValue: '',
  },
}
`,locationsMap:{sidebar:{startLoc:{col:17,line:10},endLoc:{col:2,line:18},startBody:{col:17,line:10},endBody:{col:2,line:18}}}}},title:"Layout/Sidebar",component:ve};const Kn=t=>({components:{SidebarWidget:ve},setup(){return{args:t}},template:U(`
  <sidebar-widget :cssClass="args.cssClass"></sidebar-widget>
  `)}),be=Kn.bind({});be.argTypes={cssClass:{name:"Css classes",type:"string",description:"Apply css classes to the sidebar. Ex: bg-primary text-primary-r w-24",control:{type:"text",required:!1},defaultValue:""}};const Gn=["Sidebar"];var Zn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Jn,Sidebar:be,__namedExportsOrder:Gn});const Qn=[Ee,Ue,qe,De,Ae,Re,Fe,Je,Ke,Ge,Xe];Qn.forEach(t=>{Object.keys(t).forEach(e=>{const o=t[e];switch(e){case"args":case"argTypes":return Ne.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(o));case"decorators":return o.forEach(n=>Oe(n,!1));case"loaders":return o.forEach(n=>Pe(n,!1));case"parameters":return E(C({},o),!1);case"argTypesEnhancers":return o.forEach(n=>Ie(n));case"argsEnhancers":return o.forEach(n=>je(n));case"globals":case"globalTypes":{const n={};return n[e]=o,E(n,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(e+" was not supported :( !")}})});function fe(t){return{"/home/ggg/dev/js/snowind-stories/src/stories/Button.stories.js":it,"/home/ggg/dev/js/snowind-stories/src/stories/Collapse.stories.js":gt,"/home/ggg/dev/js/snowind-stories/src/stories/Colors.stories.js":rn,"/home/ggg/dev/js/snowind-stories/src/stories/Header.stories.js":bn,"/home/ggg/dev/js/snowind-stories/src/stories/Input.stories.js":Tn,"/home/ggg/dev/js/snowind-stories/src/stories/Switch.stories.js":Vn,"/home/ggg/dev/js/snowind-stories/src/stories/SwSidebar.stories.js":Zn}[t]}Object.assign(fe,{keys:()=>["/home/ggg/dev/js/snowind-stories/src/stories/Button.stories.js","/home/ggg/dev/js/snowind-stories/src/stories/Collapse.stories.js","/home/ggg/dev/js/snowind-stories/src/stories/Colors.stories.js","/home/ggg/dev/js/snowind-stories/src/stories/Header.stories.js","/home/ggg/dev/js/snowind-stories/src/stories/Input.stories.js","/home/ggg/dev/js/snowind-stories/src/stories/Switch.stories.js","/home/ggg/dev/js/snowind-stories/src/stories/SwSidebar.stories.js"],resolve:t=>({"/home/ggg/dev/js/snowind-stories/src/stories/Button.stories.js":"./src/stories/Button.stories.js","/home/ggg/dev/js/snowind-stories/src/stories/Collapse.stories.js":"./src/stories/Collapse.stories.js","/home/ggg/dev/js/snowind-stories/src/stories/Colors.stories.js":"./src/stories/Colors.stories.js","/home/ggg/dev/js/snowind-stories/src/stories/Header.stories.js":"./src/stories/Header.stories.js","/home/ggg/dev/js/snowind-stories/src/stories/Input.stories.js":"./src/stories/Input.stories.js","/home/ggg/dev/js/snowind-stories/src/stories/Switch.stories.js":"./src/stories/Switch.stories.js","/home/ggg/dev/js/snowind-stories/src/stories/SwSidebar.stories.js":"./src/stories/SwSidebar.stories.js"})[t]});ze(fe,{hot:!1},!1);
//# sourceMappingURL=iframe.55ce2f35.js.map
