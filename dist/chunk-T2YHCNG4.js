import{a as L}from"./chunk-GKOY3KDA.js";import{d as j}from"./chunk-FMXQXYQW.js";import{Fa as E,Ga as S,Ha as I,J as D,L as i,Y as d,_ as s,ca as _,da as f,ea as h,fa as v,fb as V,g as y,ga as b,ha as o,ia as r,ja as x,na as C,oa as g,pa as m,q as l,s as F,ub as M,xa as k,xb as $,y as p,ya as w,yb as U,z as u,za as T}from"./chunk-ZOV2UBJC.js";var N=t=>[t],O=()=>[],R=()=>({width:"7.5rem",height:"7.5rem",borderRadius:"50%"});function z(t,c){if(t&1&&(o(0,"div",1)(1,"h2"),k(2),r(),x(3,"hr"),r()),t&2){let e=m().$implicit;i(2),w(e.title)}}function B(t,c){if(t&1){let e=C();o(0,"a",9),g("click",function(a){return p(e),u(a.preventDefault())}),r()}if(t&2){let e=m().$implicit,n=m(2);s("href",n.rootUrl+(e.enlace?e.enlace:e.link?e.link:""),D)}}function J(t,c){if(t&1){let e=C();o(0,"div",2)(1,"div",3),g("click",function(){let a=p(e).$implicit;return u(a.onClick())}),d(2,B,1,1,"a",4),o(3,"div",5)(4,"div",6),x(5,"i",7),r()(),o(6,"span",8),k(7),r()()()}if(t&2){let e=c.$implicit;i(),s("routerLink",e.link?I(8,N,e.link):S(10,O)),i(),f(2,(e.enlace?e.enlace:e.link&&e.link)?2:-1),i(2),_("flex align-items-center justify-content-center bg-"+e.color+"-100"),s("ngStyle",S(11,R)),i(),_(e.icon+" text-"+e.color+"-500"),i(2),T(" ",e.title," ")}}function P(t,c){if(t&1&&(d(0,z,4,1,"div",1),v(1,J,8,12,"div",2,h)),t&2){let e=c.$implicit;f(0,e.title?0:-1),i(),b(e.items)}}var Y=(()=>{class t{constructor(){this.otrasSubscripciones=[],this.usuarioID=JSON.parse(localStorage.getItem("usuario")).id,this.usuarioService=l(j),this.router=l($),this.contextService=l(L),this.url=null,this.rootUrl=window.location.origin+"/#"}ngOnInit(){this.router.events.pipe(y(e=>e instanceof M)).subscribe(e=>{this.url=e.url}),this.contextService.setPageMode(null),this.sections=[{items:[]}]}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.otrasSubscripciones.forEach(e=>{e.unsubscribe()})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["ng-component"]],standalone:!0,features:[E],decls:3,vars:0,consts:[[1,"grid"],[1,"col-12","pb-0"],[1,"col-6"],[1,"card","mb-0",2,"cursor","pointer","height","100%","position","relative",3,"click","routerLink"],[1,"full-link",3,"href"],[1,"flex","justify-content-center","align-items-center"],[3,"ngStyle"],[2,"font-size","3.75rem"],[1,"block","text-center","font-medium","text-2xl","mt-2"],[1,"full-link",3,"click","href"]],template:function(n,a){n&1&&(o(0,"div",0),v(1,P,3,1,null,null,h),r()),n&2&&(i(),b(a.sections))},dependencies:[U,V],encapsulation:2})}}return t})();export{Y as a};
