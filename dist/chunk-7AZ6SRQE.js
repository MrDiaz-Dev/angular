import{a as k}from"./chunk-FKGF6V4I.js";import{E as L,V as U,s as M,v as V}from"./chunk-VCJMVCMV.js";import{b as y,e as N,f as P,h as D,i as E,j as I,l as F,m as G,n as w}from"./chunk-UVXM5JHS.js";import{n as C,z as R}from"./chunk-D74LBUZY.js";import{D as T,o as S,y as v}from"./chunk-UFTRMQMS.js";import{Hb as l,Ib as q,Oa as h,Pb as x,U as s,Z as f,eb as m,gb as _,ia as b,ja as g,qb as o,rb as a,sb as r,wb as B,xb as d,yb as p}from"./chunk-ALXFD6NA.js";import"./chunk-CWTPBX7D.js";function H(t,u){if(t&1&&(o(0,"div",15)(1,"h2",16),l(2),a()()),t&2){let e=p();h(2),q(e.titulo)}}function A(t,u){t&1&&r(0,"p-button",17)}function J(t,u){t&1&&r(0,"div",15)}function j(t,u){if(t&1){let e=B();o(0,"p-button",18),d("click",function(){b(e);let n=p();return g(n.limpiar())}),a()}}var ne=(()=>{class t{constructor(){this.fb=s(F),this.router=s(T),this.messageService=s(k),this.title=s(v),this.titulo="Busqueda reducida",this.camposDeBusqueda=this.fb.group({nombre:[null],apellido1:[null],apellido2:[null]})}ngOnInit(){console.warn("Busqueda reducida"),this.title.setTitle("RRHH - Busqueda reducida"),this.recuperarBusquedaPrevia()}recuperarBusquedaPrevia(){let e=sessionStorage.getItem("busquedaReducida");if(sessionStorage.removeItem("busquedaReducida"),e){console.log("busquedaReducida",e);let i={};e.split("&").forEach(n=>{let[c,O]=n.split("=");i[c]=O}),console.log("busquedaGuardada.split('&')",e.split("&")),console.log("busquedaGuardadaOBJ",i),this.camposDeBusqueda.patchValue(i)}}limpiar(){this.camposDeBusqueda.reset()}genURLParams(){let e=new S;for(let i in this.camposDeBusqueda.value)this.camposDeBusqueda.value[i]&&(e=e.set(i,this.camposDeBusqueda.value[i]));return e.toString()}buscar(){sessionStorage.setItem("busquedaReducida",this.genURLParams()),this.router.navigateByUrl(`/busqueda/bus-reducida-listado?${this.genURLParams()}`)}ngOnDestroy(){console.warn("Busqueda reducida destruido")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=f({type:t,selectors:[["app-bus-reducida"]],standalone:!0,features:[x],decls:30,vars:1,consts:[["autocomplete","off",3,"ngSubmit","formGroup"],["styleClass","toolbar-sin-bordes"],["pTemplate","left"],["pTemplate","right"],[1,"grid"],[1,"flex","flex-column","gap-2","col-12","md:col-6","xl:col-4"],["for","nombre"],["pInputText","","id","nombre","formControlName","nombre","aria-describedby","nombre-help","placeholder","Nombre","autocomplete","off"],["id","nombre-help"],["for","apellido1"],["pInputText","","id","apellido1","formControlName","apellido1","aria-describedby","apellido1-help","placeholder","Nombre","autocomplete","off"],["id","apellido1-help"],["for","apellido2"],["pInputText","","id","apellido2","formControlName","apellido2","aria-describedby","apellido2-help","placeholder","Nombre","autocomplete","off"],["id","apellido2-help"],[1,"my-2"],[1,"mb-0"],["icon","pi pi-search","label","Buscar","pTooltip","Realizar b\xFAsqueda","tooltipPosition","left","type","submit","styleClass","p-button-rounded p-button-success ml-1"],["icon","pi pi-trash","label","Limpiar","pTooltip","Limpiar campos del formulario","tooltipPosition","left","styleClass","p-button-rounded p-button-secondary p-button-outlined ml-1",3,"click"]],template:function(i,n){i&1&&(o(0,"form",0),d("ngSubmit",function(){return n.buscar()}),o(1,"p-toolbar",1),m(2,H,3,1,"ng-template",2)(3,A,1,0,"ng-template",3),a(),r(4,"hr"),o(5,"p-toolbar",1),m(6,J,1,0,"ng-template",2)(7,j,1,0,"ng-template",3),a(),o(8,"div",4)(9,"div",5)(10,"label",6)(11,"b"),l(12,"Nombre"),a()(),r(13,"input",7),o(14,"small",8),l(15," Nombre de la persona que se desea buscar. "),a()(),o(16,"div",5)(17,"label",9)(18,"b"),l(19,"Primer apellido"),a()(),r(20,"input",10),o(21,"small",11),l(22," Pirmer apellido de la persona que se desea buscar. "),a()(),o(23,"div",5)(24,"label",12)(25,"b"),l(26,"Segundo apellido"),a()(),r(27,"input",13),o(28,"small",14),l(29," Pirmer apellido de la persona que se desea buscar. "),a()()()()),i&2&&_("formGroup",n.camposDeBusqueda)},dependencies:[U,C,R,D,y,N,P,E,I,L,V,M,w,G]})}}return t})();export{ne as BusReducidaComponent};
