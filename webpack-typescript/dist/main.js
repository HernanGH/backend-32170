(()=>{"use strict";var e={130:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t){this.fname=e,this.lname=t}getFullName(){return`${this.fname} ${this.lname}`}}},607:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(o(860)),s=o(721),a=new(r(o(130)).default)("Coder","House"),i=(0,n.default)();i.get("/",((e,t)=>{t.send({time:(0,s.getTime)(),name:a.getFullName()})})),i.use("*",((e,t)=>{t.json({error:-2,description:`Ruta ${e.originalUrl} metodo ${e.method} no implementado`})})),i.listen(8080,(()=>{console.log("conectado al puerto: 8080")}))},721:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTime=void 0,t.getTime=()=>({fyh:(new Date).toLocaleString(),timestamp:Date.now()})},860:e=>{e.exports=require("express")}},t={};!function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,o),s.exports}(607)})();