import{b as r,g as a,m as n,p as l,ub as g,xb as d}from"./chunk-ZOV2UBJC.js";var u=(()=>{class o{constructor(e){this.pageModeBS=new r({}),this.pageMode=this.pageModeBS.asObservable(),this.pageModeControlerVisibleBS=new r({}),this.pageModeControlerVisible=this.pageModeControlerVisibleBS.asObservable(),this.setPageModeControlerVisible(!1);let s=JSON.parse(sessionStorage.getItem("context"));s&&(this.setPageMode(s.pageMode),this.setPageModeControlerVisible(s.pageModeControlerVisible)),e.events.pipe(a(i=>i instanceof g)).subscribe(i=>{console.log("event",i);let t=i.url.split("/")[1];t==="tms"||t==="tms-menu"?(this.setPageMode("TMS"),console.log("es TMS")):t==="warehouse"||t==="warehouse-menu"?(this.setPageMode("Warehouse"),console.log("es Warehouse")):t==="external-data"||t==="external-data-menu"?(this.setPageMode("External Data"),console.log("es external")):t==="inventory"&&(this.setPageMode("Inventory"),console.log("es Inventory"))})}setPageMode(e){this.pageModeBS.next(e),sessionStorage.setItem("context",JSON.stringify({pageMode:e,pageModeControlerVisible:!1}))}setPageModeControlerVisible(e){this.pageModeControlerVisibleBS.next(e)}static{this.\u0275fac=function(s){return new(s||o)(l(d))}}static{this.\u0275prov=n({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();export{u as a};
