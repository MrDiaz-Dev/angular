import{a as c}from"./chunk-DYKERIVD.js";import{a as u}from"./chunk-EKIJYKJQ.js";import{q as a}from"./chunk-GZ4CUKNH.js";import{O as n,U as o,z as l}from"./chunk-OND53OBX.js";var h=(()=>{class i{constructor(){this.http=o(a),this.API_URL=c.API_URL}getAll(){let e=`${this.API_URL}/paises?pagination=false&order[nombre]=asc`;return this.http.get(e)}get(e){let t=`${this.API_URL}/paises/${e}`;return this.http.get(t)}paginated(e){let t=`${this.API_URL}/paises?${e}`;return this.http.get(t)}create(e){let t=`${this.API_URL}/paises`;return this.http.post(t,e)}edit(e,t){let r=`${this.API_URL}/paises/${e}`;return this.http.put(r,t)}delete(e){let t=`${this.API_URL}/paises/${e}`;return this.http.delete(t)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var m=(()=>{class i{constructor(){this.http=o(a),this.API_URL=c.API_URL}getAll(){let e=`${this.API_URL}/titulaciones?pagination=false&order[nombre]=asc`;return this.http.get(e)}get(e){let t=`${this.API_URL}/titulaciones/${e}`;return this.http.get(t)}paginated(e){let t=`${this.API_URL}/titulaciones?${e}`;return this.http.get(t)}create(e){let t=`${this.API_URL}/titulaciones`;return this.http.post(t,e)}edit(e,t){let r=`${this.API_URL}/titulaciones/${e}`;return this.http.put(r,t)}delete(e){let t=`${this.API_URL}/titulaciones/${e}`;return this.http.delete(t)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var O=(()=>{class i{constructor(){this.http=o(a),this.messageService=o(u),this.paisesService=o(h),this.titulacionesService=o(m),this._paises=[],this._titulaciones=[]}cargarPaises(){return new Promise(e=>{this.paisesService.getAll().pipe(l(1)).subscribe({next:t=>{let r=t["hydra:member"];this._paises=r.map(s=>({label:s.nombre,value:s.idPais})),e(this._paises)},error:t=>{console.error(t),this.messageService.error(t.error.message??"Error desconocido al cargar los paises","ERROR CON LOS PAISES"),e([])}})})}get paises(){return this._paises}setPaisesOnSignal(e){this.setDataOnSignal(e,"_paises","cargarPaises")}cargarTitulaciones(){return new Promise(e=>{this.titulacionesService.getAll().pipe(l(1)).subscribe({next:t=>{let r=t["hydra:member"];this._titulaciones=r.map(s=>({label:s.nombre,value:s.id})),e(this._titulaciones)},error:t=>{console.error(t),this.messageService.error(t.error.message??"Error desconocido al cargar las titulaciones","ERROR CON LAS TITULACIONES"),e([])}})})}get titulaciones(){return this._titulaciones}setTitulacionesOnSignal(e){this.setDataOnSignal(e,"_titulaciones","cargarTitulaciones")}setDataOnSignal(e,t,r){this[t].length===0?this[r]().then(s=>{e.set(s)}):e.set(this[t])}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var k=(()=>{class i{controlAndFormatIRIs(e){let t=structuredClone(e);for(let r in t)if(t[r]!=null)switch(r){case"idPais":let s=t[r].toString().includes("/")?t[r]:"/api/paises/"+t[r];t[r]=s;break;default:}else t[r]=null;return t}controlTypes(e){let t=structuredClone(e);for(let r in t)if(t[r]!=null)switch(r){case"telefono1":typeof t[r]=="string"&&(t[r]=parseInt(t[r].replace(/\D/g,"")));break;default:}else t[r]=null;return t}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{O as a,k as b};
