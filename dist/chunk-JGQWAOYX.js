import{a as S,b as I}from"./chunk-5CTBJP5H.js";import{a as g}from"./chunk-NKIOLDQ3.js";import{a as h}from"./chunk-DYKERIVD.js";import{a as C}from"./chunk-EKIJYKJQ.js";import{k as v}from"./chunk-OKBA4QQN.js";import{D as f,q as l}from"./chunk-GZ4CUKNH.js";import{Gb as p,O as i,Ob as d,U as r,Y as n,Z as m,Za as a,pb as c,qb as u}from"./chunk-OND53OBX.js";var $=(()=>{class o{constructor(){this.http=r(l),this.API_URL=h.API_URL}getAll(){let e=`${this.API_URL}/per-datos-comunes`;return this.http.get(e)}get(e){let t=`${this.API_URL}/per-datos-comunes/${e}`;return this.http.get(t)}paginated(e){let t=`${this.API_URL}/per-datos-comunes?${e}`;return this.http.get(t)}create(e){let t=`${this.API_URL}/per-datos-comunes`;return this.http.post(t,e)}edit(e,t){let s=`${this.API_URL}/per-datos-comunes/${e}`;return this.http.put(s,t)}delete(e){let t=`${this.API_URL}/per-datos-comunes/${e}`;return this.http.delete(t)}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275prov=i({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var B=(()=>{class o{constructor(){this.router=r(f),this.datosComunesService=r($),this.fechaService=r(g),this.dropdownService=r(S),this.utilService=r(I),this.messageService=r(C),this.fb=r(v),this.datosComunes=a()}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-datos-comunes"]],inputs:{datosComunes:[n.SignalBased,"datosComunes"]},outputs:{datosComunes:"datosComunesChange"},standalone:!0,features:[d],decls:2,vars:0,template:function(t,s){t&1&&(c(0,"p"),p(1,"datos-comunes works!"),u())}})}}return o})();export{$ as a,B as b};
