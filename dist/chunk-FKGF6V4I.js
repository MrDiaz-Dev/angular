import{i as a}from"./chunk-D74LBUZY.js";import{O as t,U as i}from"./chunk-ALXFD6NA.js";var n=(()=>{class s{constructor(){this.messageService=i(a)}add(e){this.messageService.add({severity:e.severity,summary:e.summary,detail:e.detail})}error(e,r="ERROR"){this.messageService.add({severity:"error",summary:r,detail:e})}success(e,r="SUCCESS"){this.messageService.add({severity:"success",summary:r,detail:e})}info(e,r="INFO"){this.messageService.add({severity:"info",summary:r,detail:e})}alert(e,r="ALERT"){this.messageService.add({severity:"warn",summary:r,detail:e})}static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275prov=t({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{n as a};
