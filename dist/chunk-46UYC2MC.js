import{a as pe,b as he}from"./chunk-MPQZOI7J.js";import{c as de}from"./chunk-DX2JNSHU.js";import"./chunk-DUPW6QUV.js";import"./chunk-DYKERIVD.js";import"./chunk-EKIJYKJQ.js";import{U as ue,l as N,w as se}from"./chunk-KYTGM7MW.js";import{a as re,d as le,m as B,n as ce}from"./chunk-OKBA4QQN.js";import{g as ne,h as oe,k as ae}from"./chunk-TLPBJLCK.js";import{a as L,k as ee,n as te,o as ie}from"./chunk-OKPV5AN6.js";import{G as A,f as J,h as Y,i as Z,j as $,k as v}from"./chunk-GZ4CUKNH.js";import{$a as Q,Bb as H,Cb as P,Db as S,Eb as E,Fb as j,Gb as U,Ib as G,N as O,Na as l,Nb as K,Oa as x,P as m,Sb as D,Tb as W,Y as d,Z as R,_ as f,db as p,eb as s,fb as a,ia as b,ja as g,jb as M,kc as X,na as q,pb as _,pc as C,qb as k,qc as z,ra as y,rb as T,sb as w,tb as V,vb as F,wb as I,xb as h}from"./chunk-OND53OBX.js";import"./chunk-CWTPBX7D.js";var fe=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=f({type:t})}static{this.\u0275inj=m({imports:[A.forChild([{path:"",loadComponent:()=>import("./chunk-R47G4CS3.js").then(e=>e.LoginComponent)}]),A]})}}return t})();var Ce=["input"],_e=(t,r,e,n)=>({"p-checkbox p-component":!0,"p-checkbox-checked":t,"p-checkbox-disabled":r,"p-checkbox-focused":e,"p-variant-filled":n}),ke=(t,r,e)=>({"p-highlight":t,"p-disabled":r,"p-focus":e}),ye=(t,r,e)=>({"p-checkbox-label":!0,"p-checkbox-label-active":t,"p-disabled":r,"p-checkbox-label-focus":e});function xe(t,r){if(t&1&&T(0,"span",10),t&2){let e=h(3);a("ngClass",e.checkboxIcon),s("data-pc-section","icon")}}function Ie(t,r){t&1&&T(0,"CheckIcon",11),t&2&&(a("styleClass","p-checkbox-icon"),s("data-pc-section","icon"))}function ve(t,r){if(t&1&&(w(0),p(1,xe,1,2,"span",8)(2,Ie,1,2,"CheckIcon",9),V()),t&2){let e=h(2);l(),a("ngIf",e.checkboxIcon),l(),a("ngIf",!e.checkboxIcon)}}function Me(t,r){}function Te(t,r){t&1&&p(0,Me,0,0,"ng-template")}function we(t,r){if(t&1&&(_(0,"span",12),p(1,Te,1,0,null,13),k()),t&2){let e=h(2);s("data-pc-section","icon"),l(),a("ngTemplateOutlet",e.checkboxIconTemplate)}}function Ve(t,r){if(t&1&&(w(0),p(1,ve,3,2,"ng-container",5)(2,we,2,2,"span",7),V()),t&2){let e=h();l(),a("ngIf",!e.checkboxIconTemplate),l(),a("ngIf",e.checkboxIconTemplate)}}function Fe(t,r){if(t&1){let e=F();_(0,"label",14),I("click",function(i){b(e);let o=h(),c=j(3);return g(o.onClick(i,c,!0))}),U(1),k()}if(t&2){let e=h();M(e.labelStyleClass),a("ngClass",D(6,ye,e.checked(),e.disabled,e.focused)),s("for",e.inputId)("data-pc-section","label"),l(),G(" ",e.label,"")}}var Se={provide:re,useExisting:O(()=>Ee),multi:!0},Ee=(()=>{class t{cd;injector;config;value;name;disabled;binary;label;ariaLabelledBy;ariaLabel;tabindex;inputId;style;styleClass;labelStyleClass;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new y;onFocus=new y;onBlur=new y;inputViewChild;templates;checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;constructor(e,n,i){this.cd=e,this.injector=n,this.config=i}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this.checkboxIconTemplate=e.template;break}})}onClick(e,n,i){e.preventDefault(),!(this.disabled||this.readonly)&&(this.updateModel(e),i&&n.focus())}updateModel(e){let n,i=this.injector.get(le,null,{optional:!0,self:!0}),o=i&&!this.formControl?i.value:this.model;this.binary?(n=this.checked()?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked()?n=o.filter(c=>!L.equals(c,this.value)):n=o?[...o,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(e){this.model=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){setTimeout(()=>{this.disabled=e,this.cd.markForCheck()})}checked(){return this.binary?this.model===this.trueValue:L.contains(this.value,this.model)}static \u0275fac=function(n){return new(n||t)(x(X),x(q),x(ee))};static \u0275cmp=R({type:t,selectors:[["p-checkbox"]],contentQueries:function(n,i,o){if(n&1&&H(o,te,4),n&2){let c;S(c=E())&&(i.templates=c)}},viewQuery:function(n,i){if(n&1&&P(Ce,5),n&2){let o;S(o=E())&&(i.inputViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:[d.HasDecoratorInputTransform,"disabled","disabled",C],binary:[d.HasDecoratorInputTransform,"binary","binary",C],label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[d.HasDecoratorInputTransform,"tabindex","tabindex",z],inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[d.HasDecoratorInputTransform,"readonly","readonly",C],required:[d.HasDecoratorInputTransform,"required","required",C],autofocus:[d.HasDecoratorInputTransform,"autofocus","autofocus",C],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[K([Se]),Q],decls:7,vars:37,consts:[["input",""],[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox","pAutoFocus","",3,"change","focus","blur","value","checked","disabled","readonly","autofocus"],[1,"p-checkbox-box",3,"click","ngClass"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"click","ngClass"]],template:function(n,i){if(n&1){let o=F();_(0,"div",1)(1,"div",2)(2,"input",3,0),I("change",function(u){return b(o),g(i.handleChange(u))})("focus",function(u){return b(o),g(i.onInputFocus(u))})("blur",function(u){return b(o),g(i.onInputBlur(u))}),k()(),_(4,"div",4),I("click",function(u){b(o);let ge=j(3);return g(i.onClick(u,ge,!0))}),p(5,Ve,3,2,"ng-container",5),k()(),p(6,Fe,2,10,"label",6)}n&2&&(M(i.styleClass),a("ngStyle",i.style)("ngClass",W(28,_e,i.checked(),i.disabled,i.focused,i.variant==="filled"||i.config.inputStyle()==="filled")),s("data-pc-name","checkbox")("data-pc-section","root"),l(),s("data-pc-section","hiddenInputWrapper")("data-p-hidden-accessible",!0),l(),a("value",i.value)("checked",i.checked())("disabled",i.disabled)("readonly",i.readonly)("autofocus",i.autofocus),s("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("required",i.required)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("aria-checked",i.checked())("data-pc-section","hiddenInput"),l(2),a("ngClass",D(33,ke,i.checked(),i.disabled,i.focused)),s("data-p-highlight",i.checked())("data-p-disabled",i.disabled)("data-p-focused",i.focused)("data-pc-section","input"),l(),a("ngIf",i.checked()),l(),a("ngIf",i.label))},dependencies:()=>[J,Y,$,Z,ne,N],styles:[`@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}
`],encapsulation:2,changeDetection:0})}return t})(),be=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=f({type:t});static \u0275inj=m({imports:[v,oe,N,ie]})}return t})();var st=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=f({type:t})}static{this.\u0275inj=m({providers:[de],imports:[v,fe,ae,be,se,B,pe,B,ce,ue,he]})}}return t})();export{st as LoginModule};
