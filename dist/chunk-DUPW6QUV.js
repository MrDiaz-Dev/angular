import{a as o}from"./chunk-DYKERIVD.js";import{D as u,q as l}from"./chunk-GZ4CUKNH.js";import{J as h,O as s,T as a,n as f}from"./chunk-OND53OBX.js";var c={production:!0,dev:!1,API_URL:null,STORAGE_URL:"",AVATAR_URL:"../../../../../assets/img/img_avatar.png"};var g=(()=>{class i{constructor(e){this.http=e,this.config=null}loadConfig(){return this.fileDir=o.production||o.dev?"assets/config.json":"../../assets/config.json",this.http.get(this.fileDir)}getConfig(){return this.config}get storageUrl(){return this.config?this.config.STORAGE_URL:""}isAllReady(){return console.log("config => ",this.config),console.log("isAllReady => ",!!this.config),this.config!=null}setConfig(e){this.config=e}get apiUrl(){return this.config?this.config.API_URL:""}initializeEnv(){return()=>this.loadConfig().toPromise().then(e=>{this.setConfig(e),o.API_URL=this.apiUrl,c.API_URL=this.apiUrl,o.STORAGE_URL=this.storageUrl,c.STORAGE_URL=this.storageUrl,console.log("envs =>"),console.log(o.API_URL),console.log(c.API_URL)})}static{this.\u0275fac=function(t){return new(t||i)(a(l))}}static{this.\u0275prov=s({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var A=(()=>{class i{constructor(e,t,r){this.http=e,this.router=t,this.envConfigService=r,this.API_URL=o.API_URL,this.ejecutarRefresh=!0,this.intervalID=null,r.initializeEnv(),this.API_URL=r.apiUrl}canDoSomething(){return this.API_URL=this.envConfigService.apiUrl,!!this.API_URL}refreshToken(){if(!this.API_URL)return null;let e=localStorage.getItem("refresh_token")||"",t=this.API_URL+"/token/refresh",r={refresh_token:e,aplicacion:"personal"};return this.http.post(t,r).pipe(h(n=>{this.guardarStorage(n.token,n.refresh_token,n.data)}),f(n=>!0))}SaveStorage(e){console.log("Save STORAGE =>",e),console.log("JSON => ",e),console.log("USUARIO => ",e.data),localStorage.setItem("token",e.token),localStorage.setItem("usuario",JSON.stringify(e.data))}guardarStorage(e,t,r){localStorage.setItem("token",e),localStorage.setItem("refresh_token",t),localStorage.setItem("usuario",JSON.stringify(r))}removeStorage(){localStorage.removeItem("token"),localStorage.removeItem("usuario"),localStorage.removeItem("urldebusqueda")}login(e){if(!this.API_URL)return null;let t=this.API_URL+"/login_check";return this.http.post(t,e).pipe(h(r=>{this.guardarStorage(r.token,r.refresh_token,r.data)}))}logout(){this.removeStorage(),this.router.navigateByUrl("/auth/login")}verificarCaducudadToken(){let e=localStorage.getItem("token");if(e){let t=JSON.parse(atob(e.split(".")[1]));if(this.expirado(t.exp)){console.log("LOGIN EXPIRADO"),this.logout();return}this.intervalID!==null&&(clearInterval(this.intervalID),this.intervalID=null),this.intervalID=setInterval(()=>{if(this.canDoSomething()){this.verificaRenueva(t.exp),clearInterval(this.intervalID),this.intervalID=null;return}},1e3)}}verificaRenueva(e){let t=new Date(e*1e3),r=new Date;r.setTime(r.getTime()+30*60*1e3),this.ejecutarRefresh&&t.getTime()<r.getTime()&&(this.ejecutarRefresh=!1,this.refreshToken().subscribe(n=>{this.ejecutarRefresh=!0},n=>{this.ejecutarRefresh=!0}))}expirado(e){let t=new Date().getTime()/1e3;return e<t}static{this.\u0275fac=function(t){return new(t||i)(a(l),a(u),a(g))}}static{this.\u0275prov=s({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{c as a,g as b,A as c};