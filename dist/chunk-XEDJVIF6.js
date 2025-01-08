import{a as c}from"./chunk-DYKERIVD.js";import{a as u}from"./chunk-FKGF6V4I.js";import{q as a}from"./chunk-UFTRMQMS.js";import{O as n,U as o,z as l}from"./chunk-ALXFD6NA.js";var h=(()=>{class s{constructor(){this.http=o(a),this.API_URL=c.API_URL}getAll(){let e=`${this.API_URL}/paises?pagination=false&order[nombre]=asc`;return this.http.get(e)}get(e){let t=`${this.API_URL}/paises/${e}`;return this.http.get(t)}paginated(e){let t=`${this.API_URL}/paises?${e}`;return this.http.get(t)}create(e){let t=`${this.API_URL}/paises`;return this.http.post(t,e)}edit(e,t){let i=`${this.API_URL}/paises/${e}`;return this.http.put(i,t)}delete(e){let t=`${this.API_URL}/paises/${e}`;return this.http.delete(t)}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275prov=n({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var m=(()=>{class s{constructor(){this.http=o(a),this.API_URL=c.API_URL}getAll(){let e=`${this.API_URL}/titulaciones?pagination=false&order[nombre]=asc`;return this.http.get(e)}get(e){let t=`${this.API_URL}/titulaciones/${e}`;return this.http.get(t)}paginated(e){let t=`${this.API_URL}/titulaciones?${e}`;return this.http.get(t)}create(e){let t=`${this.API_URL}/titulaciones`;return this.http.post(t,e)}edit(e,t){let i=`${this.API_URL}/titulaciones/${e}`;return this.http.put(i,t)}delete(e){let t=`${this.API_URL}/titulaciones/${e}`;return this.http.delete(t)}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275prov=n({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var O=(()=>{class s{constructor(){this.http=o(a),this.messageService=o(u),this.paisesService=o(h),this.titulacionesService=o(m),this._paises=[],this._titulaciones=[]}cargarPaises(){return new Promise(e=>{this.paisesService.getAll().pipe(l(1)).subscribe({next:t=>{let i=t["hydra:member"];this._paises=i.map(r=>({label:r.nombre,value:r.idPais})),e(this._paises)},error:t=>{console.error(t),this.messageService.error(t.error.message||t.message||"Error desconocido al cargar los paises","ERROR CON LOS PAISES"),e([])}})})}get paises(){return this._paises}setPaisesOnSignal(e){this.setDataOnSignal(e,"_paises","cargarPaises")}cargarTitulaciones(){return new Promise(e=>{this.titulacionesService.getAll().pipe(l(1)).subscribe({next:t=>{let i=t["hydra:member"];this._titulaciones=i.map(r=>({label:r.nombre,value:r.id})),e(this._titulaciones)},error:t=>{console.error(t),this.messageService.error(t.error.message||t.message||"Error desconocido al cargar las titulaciones","ERROR CON LAS TITULACIONES"),e([])}})})}get titulaciones(){return this._titulaciones}setTitulacionesOnSignal(e){this.setDataOnSignal(e,"_titulaciones","cargarTitulaciones")}setDataOnSignal(e,t,i){this[t].length===0?this[i]().then(r=>{e.set(r)}):e.set(this[t])}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275prov=n({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var k=(()=>{class s{controlAndFormatIRIs(e){let t=structuredClone(e);for(let i in t)if(t[i]!=null){let r;switch(i){case"idPais":r=t[i].toString().includes("/")?t[i]:"/api/paises/"+t[i],t[i]=r;break;case"idTipo":r=t[i].toString().includes("/")?t[i]:"/api/tipos-trabajadores/"+t[i],t[i]=r;break;default:}}else t[i]=null;return t}controlTypes(e){let t=structuredClone(e);for(let i in t)if(t[i]!=null)switch(i){case"telefono1":typeof t[i]=="string"&&(t[i]=parseInt(t[i].replace(/\D/g,"")));break;default:}else t[i]=null;return t}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275prov=n({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{O as a,k as b};
