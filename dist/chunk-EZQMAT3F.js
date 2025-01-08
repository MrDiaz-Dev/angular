import{a as he,b as be}from"./chunk-FZ42FID5.js";import{a as ue}from"./chunk-YM5FUEHW.js";import{a as fe}from"./chunk-224O6KQT.js";import{a as U}from"./chunk-DYKERIVD.js";import{a as me}from"./chunk-N25QT2AP.js";import{D as P,F as re,H as se,N as de,T as ce,U as pe,r as te,s as ie,u as oe,v as le,x as ae,y as ne}from"./chunk-KMAW7RSO.js";import{b as Q,e as H,f as q,g as J,h as K,i as X,j as Y,k as Z,m as $,n as ee}from"./chunk-2A4Z2JYH.js";import{n as G,z}from"./chunk-SR3JLMZB.js";import{D as W}from"./chunk-ZGX2TZUZ.js";import{Db as V,Eb as k,Fb as L,Gb as F,Hb as n,Ib as A,Lb as R,Mb as O,Nb as j,Oa as l,Pb as B,Qb as s,U as b,Y as y,Z as D,Za as S,_a as _,eb as T,gb as p,ia as f,ja as h,jb as d,lb as E,qb as e,rb as t,sb as r,wb as N,xb as x,yb as w,z as I}from"./chunk-FFU3QAVA.js";import{f as M}from"./chunk-CWTPBX7D.js";var ge=()=>({width:"100%",maxWidth:"280px",aspectRatio:"1",borderRadius:"10%",objectFit:"cover",boxShadow:"0 0 5px 0 rgba(0, 0, 0, 0.2)"}),m=()=>({width:"-webkit-fill-available"}),ve=()=>({width:"-webkit-fill-available",height:"30px"}),Se=()=>({width:"97%"}),xe=()=>({standalone:!0}),Ce=()=>({width:"97%",height:"30px"});function ye(c,g){if(c&1&&r(0,"p-dropdown",75),c&2){let a=w();d(s(5,m)),p("options",a.selectPaises())("showClear",!0)("filter",!0)}}function _e(c,g){c&1&&r(0,"p-skeleton"),c&2&&d(s(2,ve))}function we(c,g){if(c&1){let a=N();e(0,"p-dropdown",76),j("ngModelChange",function(i){f(a);let u=w();return O(u.titulacionToAdd,i)||(u.titulacionToAdd=i),h(i)}),t()}if(c&2){let a=w();d(s(7,Se)),p("options",a.selectTitulaciones()),R("ngModel",a.titulacionToAdd),p("ngModelOptions",s(8,xe))("showClear",!0)("filter",!0)}}function Te(c,g){c&1&&r(0,"p-skeleton",77),c&2&&d(s(2,Ce))}function Ne(c,g){c&1&&(e(0,"tr")(1,"th"),n(2,"Titulaciones"),t(),e(3,"th"),n(4,"Acciones"),t()())}function Fe(c,g){if(c&1){let a=N();e(0,"tr")(1,"td"),n(2),t(),e(3,"td")(4,"p-button",78),x("click",function(){let i=f(a).$implicit,u=w();return h(u.removeTitulacion(i))}),t()()()}if(c&2){let a=g.$implicit;l(2),A(a)}}function Pe(c,g){c&1&&(e(0,"tr")(1,"td",79)(2,"p",80)(3,"b"),n(4,"No hay titulaciones"),t()()()())}var at=(()=>{class c{constructor(){this.router=b(W),this.datosPersonalesService=b(ue),this.fechaService=b(fe),this.dropdownService=b(he),this.utilService=b(be),this.messageService=b(me),this.fb=b(Z),this.datosPersonales=_(),this.submitLoading=_(),this.selectSN=S(["SI","NO"]),this.selectSexo=S([{label:"Hombre",value:"H"},{label:"Mujer",value:"M"}]),this.selectDocumento=S(["NIE","NIF","Pasaporte"]),this.selectPaises=S([]),this.selectTitulaciones=S([]),this.form=this.fb.group({id:[null],tipoIdent:[null],dniNie:[null],fechaFinNie:[null],nombre:[null],apellido1:[null],apellido2:[null],sexo:[null],fechaNacimiento:[null],lugarNacimiento:[null],direccion1:[null],cp1:[null],localidad1:[null],provincia1:[null],telefono1:[null],emailPersonal:[null],nss:[null],observaciones:[null],activo:[null],pendienteAct:[null],pendienteDesact:[null],personalCnb:[null],falta:[null],idPais:[null],titulaciones:[null],numeroTarjeta:[null],fotografia:[null]}),this.titulacionToAdd=_(null),this.titulaciones=S([]),this.imagenCargada=_(null)}ngOnInit(){console.warn("Formulario de datos personales"),console.log("datosPersonales recibidos",this.datosPersonales()),this.cargarFormulario(),this.cargarDropdowns()}cargarFormulario(){this.form.reset(this.datosPersonales());for(let a in this.datosPersonales())if(Object.prototype.hasOwnProperty.call(this.datosPersonales(),a)){let o=this.datosPersonales()[a];typeof o=="string"&&o.includes("T")&&o.includes("-")&&o.includes(":")&&this.form.get(a)?.patchValue(this.fechaService.fechaAbsoluta(o))}this.form.get("idPais").patchValue(this.datosPersonales().idPais?.idPais),this.titulaciones.set(this.datosPersonales().titulaciones??[]),this.exclusionMutuaTitulaciones(),console.log("form cargado",this.form.value)}cargarDropdowns(){return M(this,null,function*(){this.dropdownService.setPaisesOnSignal(this.selectPaises),this.dropdownService.setTitulacionesOnSignal(this.selectTitulaciones)})}save(a){if(this.form.invalid){this.messageService.info("Revise los campos");return}console.log("form",this.form.value);let o=this.utilService.controlAndFormatIRIs(this.form.value);o=this.utilService.controlTypes(o),o=this.fechaService.formatDatesBeforeSend(o),o.titulaciones=this.titulaciones(),o.fotografia=this.imagenCargada()??o.fotografia,console.log("bodyToSend",o),this.submitLoading.set(!0),this.datosPersonalesService.edit(this.datosPersonales().id,o).pipe(I(1)).subscribe({next:i=>{console.log("personal",i),this.datosPersonales.set(i),a.clear(),this.messageService.success("Datos personales actualizados"),this.ngOnInit(),this.submitLoading.set(!1)},error:i=>{console.error(i),this.messageService.error(i.error.message??"Error desconocido al actualizar los datos personales"),this.submitLoading.set(!1)}})}addTitulacion(){this.titulacionToAdd&&(this.titulaciones.update(a=>(console.log("titulaciones",a),a.push(this.titulacionToAdd()),a)),this.titulacionToAdd.set(null))}exclusionMutuaTitulaciones(){this.selectTitulaciones.update(a=>a.filter(o=>!this.titulaciones().includes(o.label)))}removeTitulacion(a){this.titulaciones.update(o=>o.filter(i=>i!==a))}clearFile(){this.fileUpload._files&&this.fileUpload.clear(),this.imagenCargada.set(null)}borrarImagen(){this.imagenCargada.set(null),this.form.get("fotografia")?.patchValue(null)}onSelect(a){let o=new FileReader;o.readAsDataURL(a.currentFiles[0]),o.onload=()=>{this.imagenCargada.set(o.result)}}cargarFotografiaURL(){return this.imagenCargada()?this.imagenCargada():this.form.get("fotografia")?.value?U.STORAGE_URL+this.form.get("fotografia")?.value:"assets/images/notImage.png"}static{this.\u0275fac=function(o){return new(o||c)}}static{this.\u0275cmp=D({type:c,selectors:[["app-datos-personales"]],viewQuery:function(o,i){if(o&1&&V(P,5),o&2){let u;k(u=L())&&(i.fileUpload=u.first)}},inputs:{datosPersonales:[y.SignalBased,"datosPersonales"],submitLoading:[y.SignalBased,"submitLoading"],titulacionToAdd:[y.SignalBased,"titulacionToAdd"],imagenCargada:[y.SignalBased,"imagenCargada"]},outputs:{datosPersonales:"datosPersonalesChange",submitLoading:"submitLoadingChange",titulacionToAdd:"titulacionToAddChange",imagenCargada:"imagenCargadaChange"},standalone:!0,features:[B],decls:138,vars:91,consts:[["file",""],["autocomplete","off",3,"ngSubmit","keyup.control.enter","formGroup"],[1,"grid"],[1,"col-12","grid","pb-0"],[1,"col-12","md:col-4","xl:col-3","pb-0","flex","align-items-center","justify-content-center"],[1,"flex","flex-column","justify-content-center","mx-4",2,"min-height","230px","min-width","190px"],["styleClass","p-button-rounded","mode","basic","chooseLabel","SELECCIONAR","uploadLabel","Borrar Seleccion","uploadIcon","pi pi-times","accept",".jpg,.jpeg,.png","pTooltip","Seleccionar imagen","tooltipPosition","top",1,"mb-2","center-file-upload",3,"onSelect","click","maxFileSize"],["alt","avatar","loading","lazy",1,"rounded","float-right","img-thumbnail","img-fluid",3,"src","imageStyle","preview","pTooltip"],[1,"flex","justify-content-center","mt-1"],["label","Borrar","icon","pi pi-trash","styleClass","p-button-sm p-button-rounded p-button-danger","pTooltip","Borrar imagen",3,"click","disabled"],[1,"col-12","md:col-8","pb-0"],[1,"field","grid"],["for","falta",1,"col-fixed","custom-col-fixed-label-2"],[1,"col-fixed","custom-col-fixed-input-2"],["formControlName","falta","placeholder","Seleccionar",3,"options","showClear"],["for","tipoIdent",1,"col-fixed","custom-col-fixed-label-2"],["formControlName","tipoIdent","placeholder","Seleccionar",3,"options","showClear"],["for","dniNie",1,"col-fixed","custom-col-fixed-label-2"],["pInputText","","id","dniNie","formControlName","dniNie","aria-describedby","dniNie-help","placeholder","Numero de documento","autocomplete","off"],["for","fechaFinNie",1,"col-fixed","custom-col-fixed-label-2"],["dateFormat","dd/mm/yy","formControlName","fechaFinNie",3,"showIcon","showClear","showOnFocus"],["for","nombre",1,"col-fixed","custom-col-fixed-label-2"],["pInputText","","id","nombre","formControlName","nombre","aria-describedby","nombre-help","placeholder","Nombre de la persona","autocomplete","off"],["for","apellido1",1,"col-fixed","custom-col-fixed-label-2"],["pInputText","","id","apellido1","formControlName","apellido1","aria-describedby","apellido1-help","placeholder","1er apellido de la persona","autocomplete","off"],["for","apellido2",1,"col-fixed","custom-col-fixed-label-2"],["pInputText","","id","apellido2","formControlName","apellido2","aria-describedby","apellido2-help","placeholder","2do apellido de la persona","autocomplete","off"],["for","numeroTarjeta",1,"col-fixed","custom-col-fixed-label-2"],["pInputText","","id","numeroTarjeta","formControlName","numeroTarjeta","aria-describedby","numeroTarjeta-help","placeholder","Numero de tarjeta","autocomplete","off"],[1,"col-12","field","grid","pt-1","mb-0"],["for","sexo",1,"col-fixed","custom-col-fixed-label"],[1,"col-fixed","custom-col-fixed-input-sm"],["formControlName","sexo","placeholder","Seleccionar","optionValue","value","optionLabel","label",3,"options","showClear"],[1,"col-12","field","grid","pt-0","mb-0"],["for","fechaNacimiento",1,"col-fixed","custom-col-fixed-label"],[1,"col-fixed","custom-col-fixed-input"],["dateFormat","dd/mm/yy","formControlName","fechaNacimiento",3,"showIcon","showClear","showOnFocus"],["for","lugarNacimiento",1,"col-fixed","custom-col-fixed-label"],["pInputText","","id","lugarNacimiento","formControlName","lugarNacimiento","aria-describedby","lugarNacimiento-help","placeholder","Lugar de nacimiento","autocomplete","off"],["for","idPais",1,"col-fixed","custom-col-fixed-label"],["formControlName","idPais","placeholder","Seleccionar","optionValue","value","optionLabel","label","filterBy","label",3,"options","showClear","filter","style"],["for","direccion1",1,"col-fixed","custom-col-fixed-label"],[1,"col-fixed","custom-col-fixed-input-bg"],["pInputText","","id","direccion1","formControlName","direccion1","aria-describedby","direccion1-help","placeholder","Direccion","autocomplete","off"],["for","cp1",1,"col-fixed","custom-col-fixed-label"],[1,"col-fixed","custom-col-fixed-input","inputNumberFixedWidth"],["id","cp1","formControlName","cp1","aria-describedby","cp1-help","placeholder","Codigo Postal","autocomplete","off",3,"useGrouping"],["for","localidad1",1,"col-fixed","custom-col-fixed-label"],["pInputText","","id","localidad1","formControlName","localidad1","aria-describedby","localidad1-help","placeholder","Localidad","autocomplete","off"],["for","provincia1",1,"col-fixed","custom-col-fixed-label"],["pInputText","","id","provincia1","formControlName","provincia1","aria-describedby","provincia1-help","placeholder","Provincia","autocomplete","off"],["for","telefono1",1,"col-fixed","custom-col-fixed-label"],["id","telefono1","formControlName","telefono1","aria-describedby","telefono1-help","placeholder","Telefono","autocomplete","off","mask","999 999 999",3,"autoClear"],["for","emailPersonal",1,"col-fixed","custom-col-fixed-label"],["pInputText","","id","emailPersonal","formControlName","emailPersonal","aria-describedby","emailPersonal-help","placeholder","Mail","autocomplete","off"],["for","nss",1,"col-fixed","custom-col-fixed-label"],["id","nss","formControlName","nss","aria-describedby","nss-help","placeholder","Numero de Seguridad Social","autocomplete","off","mask","99 99999999 99",3,"autoClear"],["for","activo",1,"col-fixed","custom-col-fixed-label"],["formControlName","activo","placeholder","Seleccionar",3,"options","showClear"],["for","personalCnb",1,"col-fixed","custom-col-fixed-label"],["formControlName","personalCnb","placeholder","Seleccionar",3,"options","showClear"],["for","titulacion",1,"col-fixed","custom-col-fixed-label"],[1,"flex","flex-row"],["id","titulacion","placeholder","Seleccionar","optionValue","label","optionLabel","label","filterBy","label",1,"w-full",3,"options","ngModel","ngModelOptions","showClear","filter","style"],["label","Agregar","icon","pi pi-plus","pTooltip","Agregar titulacion","tooltipPosition","right",3,"click","disabled"],[1,"col-11","md:col-10","lg:col-8","pt-1"],[3,"value"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["for","observaciones",1,"col-fixed","custom-col-fixed-label","align-items-start"],["pInputTextarea","","id","observaciones","formControlName","observaciones","aria-describedby","observaciones-help","placeholder","Observaciones","autocomplete","off","rows","3",3,"autoResize"],[1,"col-12","transparent-background",2,"position","sticky","bottom","0"],[1,"w-full","flex","justify-content-center"],["styleClass","p-button-lg p-button-rounded","icon","pi pi-save","label","Guardar",3,"onClick","pTooltip","disabled"],["formControlName","idPais","placeholder","Seleccionar","optionValue","value","optionLabel","label","filterBy","label",3,"options","showClear","filter"],["id","titulacion","placeholder","Seleccionar","optionValue","label","optionLabel","label","filterBy","label",1,"w-full",3,"ngModelChange","options","ngModel","ngModelOptions","showClear","filter"],[1,"w-full"],["icon","pi pi-trash","styleClass","p-button-sm p-button-rounded p-button-danger","pTooltip","Eliminar titulacion","tooltipPosition","left",3,"click"],["colspan","2"],[1,"text-center"]],template:function(o,i){if(o&1){let u=N();e(0,"form",1),x("ngSubmit",function(){f(u);let v=F(6);return h(i.save(v))})("keyup.control.enter",function(){f(u);let v=F(6);return h(i.save(v))}),e(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"p-fileUpload",6,0),x("onSelect",function(v){return f(u),h(i.onSelect(v))})("click",function(){return f(u),h(i.clearFile())}),t(),r(7,"p-image",7),e(8,"div",8)(9,"p-button",9),x("click",function(){return f(u),h(i.borrarImagen())}),t()()()(),e(10,"div",10)(11,"div",11)(12,"label",12),n(13," Faltan Datos "),t(),e(14,"div",13),r(15,"p-dropdown",14),t()(),e(16,"div",11)(17,"label",15),n(18," Tipo de documento "),t(),e(19,"div",13),r(20,"p-dropdown",16),t()(),e(21,"div",11)(22,"label",17),n(23," Numero de documento "),t(),e(24,"div",13),r(25,"input",18),t()(),e(26,"div",11)(27,"label",19),n(28," Caducidad NIE "),t(),e(29,"div",13),r(30,"p-calendar",20),t()(),e(31,"div",11)(32,"label",21),n(33," Nombre "),t(),e(34,"div",13),r(35,"input",22),t()(),e(36,"div",11)(37,"label",23),n(38," 1er apellido "),t(),e(39,"div",13),r(40,"input",24),t()(),e(41,"div",11)(42,"label",25),n(43," 2do apellido "),t(),e(44,"div",13),r(45,"input",26),t()(),e(46,"div",11)(47,"label",27),n(48," Numero Tarjeta "),t(),e(49,"div",13),r(50,"input",28),t()()()(),e(51,"div",29)(52,"label",30),n(53," Sexo "),t(),e(54,"div",31),r(55,"p-dropdown",32),t()(),e(56,"div",33)(57,"label",34),n(58," Fecha de nacimiento "),t(),e(59,"div",35),r(60,"p-calendar",36),t()(),e(61,"div",33)(62,"label",37),n(63," Lugar de nacimiento "),t(),e(64,"div",35),r(65,"input",38),t()(),e(66,"div",29)(67,"label",39),n(68," Nacionalidad "),t(),e(69,"div",35),T(70,ye,1,6,"p-dropdown",40)(71,_e,1,3),t()(),e(72,"div",33)(73,"label",41),n(74," Direccion "),t(),e(75,"div",42),r(76,"input",43),t()(),e(77,"div",33)(78,"label",44),n(79," Codigo Postal "),t(),e(80,"div",45),r(81,"p-inputNumber",46),t()(),e(82,"div",33)(83,"label",47),n(84," Localidad "),t(),e(85,"div",35),r(86,"input",48),t()(),e(87,"div",33)(88,"label",49),n(89," Provincia "),t(),e(90,"div",35),r(91,"input",50),t()(),e(92,"div",33)(93,"label",51),n(94," Telefono "),t(),e(95,"div",45),r(96,"p-inputMask",52),t()(),e(97,"div",33)(98,"label",53),n(99," Mail "),t(),e(100,"div",42),r(101,"input",54),t()(),e(102,"div",33)(103,"label",55),n(104," NSS "),t(),e(105,"div",45),r(106,"p-inputMask",56),t()(),e(107,"div",29)(108,"label",57),n(109," Activo "),t(),e(110,"div",31),r(111,"p-dropdown",58),t()(),e(112,"div",29)(113,"label",59),n(114," Personal CNB "),t(),e(115,"div",31),r(116,"p-dropdown",60),t()(),e(117,"div",33)(118,"label",61),n(119," Titulaciones "),t(),e(120,"div",42)(121,"div",62),T(122,we,1,9,"p-dropdown",63)(123,Te,1,3),e(124,"p-button",64),x("click",function(){return f(u),h(i.addTitulacion())}),t()()()(),e(125,"div",65)(126,"p-table",66),T(127,Ne,5,0,"ng-template",67)(128,Fe,5,1,"ng-template",68)(129,Pe,5,0,"ng-template",69),t()(),e(130,"div",33)(131,"label",70),n(132," Observaciones "),t(),e(133,"div",42),r(134,"textarea",71),t()(),e(135,"div",72)(136,"div",73)(137,"p-button",74),x("onClick",function(){f(u);let v=F(6);return h(i.save(v))}),t()()()()()}o&2&&(p("formGroup",i.form),l(5),p("maxFileSize",1e6),l(2),p("src",i.cargarFotografiaURL())("imageStyle",s(71,ge))("preview",!0)("pTooltip",i.cargarFotografiaURL()==="assets/images/notImage.png"?"No hay imagen del personal":"Ver imagen del personal"),l(2),p("disabled",i.cargarFotografiaURL()==="assets/images/notImage.png"),l(6),d(s(72,m)),p("options",i.selectSN())("showClear",!0),l(5),d(s(73,m)),p("options",i.selectDocumento())("showClear",!0),l(5),d(s(74,m)),l(5),d(s(75,m)),p("showIcon",!0)("showClear",!0)("showOnFocus",!1),l(5),d(s(76,m)),l(5),d(s(77,m)),l(5),d(s(78,m)),l(5),d(s(79,m)),l(5),d(s(80,m)),p("options",i.selectSexo())("showClear",!0),l(5),d(s(81,m)),p("showIcon",!0)("showClear",!0)("showOnFocus",!1),l(5),d(s(82,m)),l(5),E(70,i.selectPaises().length>0?70:71),l(6),d(s(83,m)),l(5),p("useGrouping",!1),l(5),d(s(84,m)),l(5),d(s(85,m)),l(5),p("autoClear",!1),l(5),d(s(86,m)),l(5),p("autoClear",!1),l(5),d(s(87,m)),p("options",i.selectSN())("showClear",!0),l(5),d(s(88,m)),p("options",i.selectSN())("showClear",!0),l(6),E(122,i.selectTitulaciones().length>0?122:123),l(2),p("disabled",!i.titulacionToAdd()),l(2),d(s(89,m)),p("value",i.titulaciones()),l(8),d(s(90,m)),p("autoResize",!0),l(3),p("pTooltip",i.submitLoading()?"Guardando...":"Guardar")("disabled",i.submitLoading()))},dependencies:[pe,G,ne,P,z,K,Q,H,q,J,X,Y,le,re,oe,ae,se,te,ie,de,ce,ee,$]})}}return c})();export{at as a};
