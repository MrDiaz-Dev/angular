import{a as n}from"./chunk-DYKERIVD.js";import{q as i}from"./chunk-ZGX2TZUZ.js";import{O as r,U as o}from"./chunk-FFU3QAVA.js";var d=(()=>{class s{constructor(){this.http=o(i),this.API_URL=n.API_URL}getAll(){let t=`${this.API_URL}/datos-personales`;return this.http.get(t)}get(t){let e=`${this.API_URL}/datos-personales/${t}`;return this.http.get(e)}paginated(t){let e=`${this.API_URL}/datos-personales?${t}`;return this.http.get(e)}create(t){let e=`${this.API_URL}/datos-personales`;return this.http.post(e,t)}edit(t,e){let a=`${this.API_URL}/datos-personales/${t}`;return this.http.put(a,e)}delete(t){let e=`${this.API_URL}/datos-personales/${t}`;return this.http.delete(e)}getBajaMedicaActual(t){let e=this.API_URL+`/datos-personales/baja-medica/${t}`;return this.http.get(e)}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275prov=r({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{d as a};
