import{a as Y}from"./chunk-5NQXMXEA.js";import{a as Z}from"./chunk-NKIOLDQ3.js";import"./chunk-DYKERIVD.js";import{a as X}from"./chunk-EKIJYKJQ.js";import{A as J,C as K,E as Q,L as U,U as W,s as j,y as H,z as G}from"./chunk-KYTGM7MW.js";import"./chunk-OKBA4QQN.js";import{j as z}from"./chunk-TLPBJLCK.js";import{n as N}from"./chunk-OKPV5AN6.js";import{D as M,o as L,y as q}from"./chunk-GZ4CUKNH.js";import{Ab as $,Fb as A,Gb as x,Hb as O,Ib as T,Na as l,O as E,Ob as V,U as p,Ya as k,Z as F,db as _,eb as D,fb as f,ia as h,ja as g,kb as w,lb as y,nb as I,ob as R,pb as a,qb as n,rb as b,vb as C,wb as v,xb as s,z as B}from"./chunk-OND53OBX.js";import"./chunk-CWTPBX7D.js";var ee=(()=>{class t{constructor(){}cargarTabla(e,i,o){console.log("event => ",e),console.log("urlParams => ",i);let m=null,P=i,c=0,u=10,S=c/u+1,d=new L().set("page",S.toString()).set("itemsPerPage",u.toString());return e&&(m=e,console.log("event => ",e),c=e?.first?e?.first:0,u=e?.rows?e?.rows:10,S=c/u+1,d=new L().set("page",S.toString()).set("itemsPerPage",u.toString()),e.sortField&&(e.sortOrder==1&&(d=d.set(`order[${e.sortField}]`,"asc")),e.sortOrder==-1&&(d=d.set(`order[${e.sortField}]`,"desc")))),P=i?`${i}&${d.toString()}`:`${d.toString()}`,{url:P,first:c,rows:u,prevEvent:m}}limpiarTabla(e){e.clear()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function ie(t,r){if(t&1){let e=C();a(0,"div",8)(1,"p-button",9),v("onClick",function(){h(e);let o=s();return g(o.back())}),n()()}}function oe(t,r){if(t&1&&(a(0,"div",8)(1,"h2",10),x(2),n()()),t&2){let e=s();l(2),O(e.titulo)}}function re(t,r){if(t&1){let e=C();a(0,"div",8)(1,"p-button",11),v("onClick",function(){h(e),s();let o=A(7);return g(o.clear())}),n()()}if(t&2){let e=s();l(),f("disabled",!e.url.includes("order"))}}function ae(t,r){if(t&1&&b(0,"p-sortIcon",14),t&2){let e=s().$implicit;f("field",e.field)}}function ne(t,r){if(t&1&&(a(0,"th",12)(1,"div",13),x(2),_(3,ae,1,1,"p-sortIcon",14),n()()),t&2){let e=r.$implicit;f("pSortableColumn",e.sorteable?e.field:null),l(2),T(" ",e.header," "),l(),w(3,e.sorteable?3:-1)}}function se(t,r){if(t&1&&(a(0,"tr"),I(1,ne,4,3,"th",12,y),n()),t&2){let e=r.$implicit;l(),R(e)}}function le(t,r){if(t&1&&x(0),t&2){let e=s().$implicit,i=s().$implicit;T(" ",i[e.field][e.subField]," ")}}function de(t,r){if(t&1&&x(0),t&2){let e=s().$implicit,i=s().$implicit;T(" ",i[e.field]," ")}}function pe(t,r){if(t&1){let e=C();a(0,"p-button",15),v("onClick",function(){h(e);let o=s(2).$implicit,m=s();return g(m.navegarAlDetalle(o))}),n()}}function me(t,r){if(t&1&&(a(0,"td"),_(1,le,1,1)(2,de,1,1)(3,pe,1,0),n()),t&2){let e=r.$implicit;l(),w(1,e.subField?1:e.header!="Acciones"?2:3)}}function ce(t,r){if(t&1&&(a(0,"tr"),I(1,me,4,1,"td",null,y),n()),t&2){let e=r.columns;l(),R(e)}}function ue(t,r){if(t&1&&(a(0,"tr")(1,"td"),b(2,"p-messages",16),n()()),t&2){let e=r.$implicit,i=s();l(),D("colspan",e.length),l(),f("value",i.error404)("closable",!1)}}var ke=(()=>{class t{constructor(){this.router=p(M),this.messageService=p(X),this.datosPersonalesService=p(Y),this.fechaService=p(Z),this.tablaService=p(ee),this.title=p(q),this.titulo="Resultado de la busqueda reducida",this.url="",this.urlParams="",this.data=[],this.loading=k(!1),this.errores=[],this.error404=[{severity:"info",detail:"No se encontraron registros"}],this.first=0,this.mostrarDel=1,this.mostrarAl=10,this.rows=10,this.prevEvent=null,this.itemsPerPageOptions=[],this.cols=[{field:"nombre",subField:null,header:"Nombre",sorteable:!0},{field:"apellido1",subField:null,header:"1er. Apellido",sorteable:!0},{field:"apellido2",subField:null,header:"2do. Apellido",sorteable:!0},{field:"dniNie",subField:null,header:"DNI / NIE"},{field:"",header:"Acciones"}]}ngOnInit(){console.warn("Busqueda reducida listado"),this.title.setTitle("RRHH - Busqueda reducida listado"),this.urlParams=this.router.url.split("?")[1]??""}back(){this.router.navigate(["/busqueda/bus-reducida"])}cargarTabla(e=null){this.loading.set(!0),e=e||(this.prevEvent?this.prevEvent:null);let i=this.tablaService.cargarTabla(e,this.urlParams);this.url=i.url,this.first=i.first,this.rows=i.rows,this.prevEvent=i.prevEvent,console.log("this.url => ",this.url),setTimeout(()=>{this.cargarDatos()})}cargarDatos(){this.datosPersonalesService.paginated(this.url).pipe(B(1)).subscribe({next:e=>{this.data=e["hydra:member"],this.totalItems=e["hydra:totalItems"],this.mostrarDel=this.first+1,this.mostrarAl=this.mostrarDel+this.rows-1,this.mostrarAl>this.totalItems&&(this.mostrarAl=this.totalItems),this.data.forEach(i=>{this.cols.forEach(o=>{o.type=="date"&&(i[o.field]=this.fechaService.fechaAbsoluta(i[o.field]))})}),this.calcItemsPerPageOptions(),this.loading.set(!1)},error:e=>{console.error(e),this.messageService.error(e.error.message??"Error desconocido al cargar los datos")}})}navegarAlDetalle(e){console.log("urlParams => ",this.urlParams),sessionStorage.setItem("previousPersonalPage","/busqueda/bus-reducida-listado?"+this.urlParams),this.router.navigate(["personal/datos-personales",e.id])}calcItemsPerPageOptions(){for(let e=10;e<this.totalItems;e=e+10)e<this.totalItems&&this.itemsPerPageOptions.push(e);this.itemsPerPageOptions.push(this.totalItems)}ngOnDestroy(){console.warn("Busqueda reducida listado destruido")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-bus-reducida-listado"]],standalone:!0,features:[V],decls:12,vars:13,consts:[["dt",""],["styleClass","toolbar-sin-bordes"],["pTemplate","left"],["pTemplate","right"],[3,"onLazyLoad","value","columns","loading","lazy","paginator","rows","totalRecords","rowsPerPageOptions","showCurrentPageReport","currentPageReportTemplate"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"my-2"],["type","button","icon","pi pi-arrow-left","pTooltip","Volver a la b\xFAsqueda","styleClass","p-button-rounded",3,"onClick"],[1,"mb-0"],["type","button","icon","pi pi-filter-slash","label","Limpiar","pTooltip","Limpiar Ordenamiento","tooltipPosition","left","styleClass","p-button-rounded p-button-outlined",3,"onClick","disabled"],[3,"pSortableColumn"],[1,"flex","flex-row"],[3,"field"],["type","button","icon","pi pi-user","label","Seleccionar","pTooltip","Seleccionar personal","tooltipPosition","left",3,"onClick"],[3,"value","closable"]],template:function(i,o){if(i&1){let m=C();a(0,"p-toolbar",1),_(1,ie,2,0,"ng-template",2),n(),a(2,"p-toolbar",1),_(3,oe,3,1,"ng-template",2)(4,re,2,1,"ng-template",3),n(),b(5,"p-divider"),a(6,"p-table",4,0),v("onLazyLoad",function(c){return h(m),g(o.cargarTabla(c))}),_(8,se,3,0,"ng-template",5)(9,ce,3,0,"ng-template",6)(10,ue,3,3,"ng-template",7),n(),b(11,"br")}i&2&&(l(6),$("currentPageReportTemplate","Registros ",o.mostrarDel," - ",o.mostrarAl," / ",o.totalItems,""),f("value",o.data)("columns",o.cols)("loading",o.loading())("lazy",!0)("paginator",!0)("rows",o.rows)("totalRecords",o.totalItems)("rowsPerPageOptions",o.itemsPerPageOptions)("showCurrentPageReport",!0))},dependencies:[W,N,H,G,J,z,K,Q,j,U]})}}return t})();export{ke as BusReducidaListadoComponent};