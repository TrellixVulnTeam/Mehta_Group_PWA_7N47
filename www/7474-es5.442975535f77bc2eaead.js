!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[7474],{67474:function(i,n,s){"use strict";s.r(n),s.d(n,{SelectAddressPageModule:function(){return _}});var a,o,r=s(38583),d=s(90665),l=s(47823),c=s(12234),u=s(56544),h=s(88720),g=s(51532),p=s(14303),Z=function(e){return{"content-bg":e}},f=[{path:"",component:(a=function(){function i(t,n,s,a,o){e(this,i),this.sendData=t,this.route=n,this.apiService=s,this.zone=a,this.platform=o,this.formData=[],this.addid=0,this.searchData=[],this.redeem_for=this.sendData.redeem_for,this.addressDetail=this.sendData.addressDetails,console.log("this.redeem_for : ",this.addressDetail),""==this.addressDetail.auto_id?this.pin=this.addressDetail.pin_code:(this.add1=this.addressDetail.address_line1,this.add2=this.addressDetail.address_line2,this.pin=this.addressDetail.pin_code,this.city=this.addressDetail.city,this.state=this.addressDetail.state,console.log("this.redeem_for :12 ",this.req))}var n,s,a;return n=i,(s=[{key:"ngOnInit",value:function(){""!=this.pin&&this.searchApiCall(this.pin),this.req=this.sendData.alldata}},{key:"checkInput",value:function(e){console.log("1",e),6==e.length?this.searchApiCall(e):this.searchData=[]}},{key:"searchApiCall",value:function(e){var t=this;this.zone.run(function(){t.apiService.apiCallWithLoginToken(u.n.searchApiUrl,{search_str:e,request_type:"pin"}).subscribe(function(e){if(1==e.success){t.searchData=e.data,console.log("   this.searchData",t.searchData);for(var i=0;i<t.searchData.length;i++)t.city=t.searchData[i].city,t.state=t.searchData[i].state,t.addressDetail.pin_id=t.searchData[i].auto_id}else t.searchData=[],console.log("   this.searchData",t.searchData)},function(e){t.apiService.showToastMessage(JSON.stringify(e),"top",3e3,"redBg")})})}},{key:"checkingFilled",value:function(){null==this.add1||""==this.add1?this.apiService.showToastMessage("Please fill the Address line 1","top",2e3,"redBg"):null==this.add2||""==this.add2?this.apiService.showToastMessage("Please fill the Address line 2","top",2e3,"redBg"):null==this.addressDetail.pin_id||""==this.addressDetail.pin_id?this.apiService.showToastMessage(null==this.searchData||0==this.searchData.length?"Please fill the pincode":"Please fill the correct pincode","top",2e3,"redBg"):0==this.searchData.length?this.apiService.showToastMessage("Please fill the correct Pincode","top",2e3,"redBg"):this.addressDetails()}},{key:"addressDetails",value:function(){var e=this;console.log("this.redeem_for : ",this.addressDetail.auto_id),this.zone.run(function(){e.apiService.apiCallWithLoginToken(u.n.AddAddressUrl,{address_line1:e.add1,address_line2:e.add2,address_id:e.addressDetail.auto_id,pin_id:e.addressDetail.pin_id,redeem_for:e.redeem_for,request_for:e.req.customer,request_user_type:e.req.typee,request_page:"dealer"}).subscribe(function(t){console.log("AddAddressUrl:",t),1==t.success&&e.route.navigate(["./change-address"])},function(t){e.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})})}},{key:"back",value:function(){this.route.navigate(["./change-address"])}}])&&t(n.prototype,s),a&&t(n,a),i}(),a.\u0275fac=function(e){return new(e||a)(h.Y36(g.b),h.Y36(c.F0),h.Y36(p.s),h.Y36(h.R0b),h.Y36(l.t4))},a.\u0275cmp=h.Xpm({type:a,selectors:[["app-select-address"]],decls:60,vars:8,consts:[["slot","start"],[3,"ngClass"],[1,"ion-justify-content-center"],["size-xl","6","size-md","6","size-xs","12",1,"boundary1"],[1,"custom_container"],[1,"categoryName"],["size-xl","6","size-md","6","size-xs","12",1,"colu"],["type","text",3,"ngModel","ngModelChange"],["input",""],["maxlength","6","type","tel",3,"ngModel","ngModelChange"],["type","text","disabled","",3,"ngModel","ngModelChange"],["tappable","",1,"ionic_btn",3,"click"]],template:function(e,t){1&e&&(h.TgZ(0,"ion-header"),h.TgZ(1,"ion-toolbar"),h.TgZ(2,"ion-title"),h._uU(3,"Add New Address"),h.qZA(),h.TgZ(4,"ion-buttons",0),h._UZ(5,"ion-back-button"),h.qZA(),h.qZA(),h.qZA(),h.TgZ(6,"ion-content",1),h.TgZ(7,"ion-row",2),h.TgZ(8,"ion-col",3),h.TgZ(9,"div",4),h.TgZ(10,"ion-row"),h.TgZ(11,"ion-col"),h.TgZ(12,"p",5),h._uU(13,"Address Details"),h.qZA(),h.qZA(),h.qZA(),h.TgZ(14,"ion-row"),h.TgZ(15,"ion-col",6),h.TgZ(16,"ion-label"),h._uU(17," Address Line 1"),h.TgZ(18,"sup"),h._uU(19,"*"),h.qZA(),h.qZA(),h.TgZ(20,"ion-input",7,8),h.NdJ("ngModelChange",function(e){return t.add1=e}),h.qZA(),h.qZA(),h.TgZ(22,"ion-col",6),h.TgZ(23,"ion-label"),h._uU(24," Address Line 2 "),h.TgZ(25,"sup"),h._uU(26,"*"),h.qZA(),h.qZA(),h.TgZ(27,"ion-input",7,8),h.NdJ("ngModelChange",function(e){return t.add2=e}),h.qZA(),h.qZA(),h.TgZ(29,"ion-col",6),h.TgZ(30,"ion-label"),h._uU(31,"Pin Code"),h.TgZ(32,"sup"),h._uU(33,"*"),h.qZA(),h.qZA(),h.TgZ(34,"ion-input",9,8),h.NdJ("ngModelChange",function(e){return t.checkInput(e)})("ngModelChange",function(e){return t.pin=e}),h.qZA(),h.qZA(),h.TgZ(36,"ion-col",6),h.TgZ(37,"ion-label"),h._uU(38," City"),h.TgZ(39,"sup"),h._uU(40,"*"),h.qZA(),h.qZA(),h.TgZ(41,"ion-input",10,8),h.NdJ("ngModelChange",function(e){return t.city=e}),h.qZA(),h.qZA(),h.TgZ(43,"ion-col",6),h.TgZ(44,"ion-label"),h._uU(45," State"),h.TgZ(46,"sup"),h._uU(47,"*"),h.qZA(),h.qZA(),h.TgZ(48,"ion-input",10,8),h.NdJ("ngModelChange",function(e){return t.state=e}),h.qZA(),h.qZA(),h.qZA(),h._UZ(50,"br"),h._UZ(51,"br"),h.TgZ(52,"ion-row"),h.TgZ(53,"ion-col"),h.TgZ(54,"ion-button",11),h.NdJ("click",function(){return t.checkingFilled()}),h._uU(55,"Add"),h.qZA(),h.qZA(),h.TgZ(56,"ion-col"),h.TgZ(57,"ion-button",11),h.NdJ("click",function(){return t.back()}),h._uU(58,"Back"),h.qZA(),h.qZA(),h.qZA(),h._UZ(59,"br"),h.qZA(),h.qZA(),h.qZA(),h.qZA()),2&e&&(h.xp6(6),h.Q6J("ngClass",h.VKq(6,Z,(null==t.platform?null:t.platform.width())<740)),h.xp6(14),h.Q6J("ngModel",t.add1),h.xp6(7),h.Q6J("ngModel",t.add2),h.xp6(7),h.Q6J("ngModel",t.pin),h.xp6(7),h.Q6J("ngModel",t.city),h.xp6(7),h.Q6J("ngModel",t.state))},directives:[l.Gu,l.sr,l.wd,l.Sm,l.oU,l.cs,l.W2,r.mk,l.Nd,l.wI,l.Q$,l.pK,l.j9,d.JJ,d.On,d.nD,l.YG],styles:[".colu[_ngcontent-%COMP%]{padding:15px}ion-input[_ngcontent-%COMP%]{border-bottom:1px solid rgba(84,83,83,.6)!important;color:var(--text-light2);font-size:.9rem!important;font-weight:500!important;--padding-bottom:2px!important}.categoryName[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.ionic_btn[_ngcontent-%COMP%]{display:block;margin:auto;text-transform:capitalize;--border-radius:20px;width:122px;font-size:13px;--background:#b01d22;height:32px}"]}),a)}],A=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[c.Bz.forChild(f)],c.Bz]}),t}(),_=((o=function t(){e(this,t)}).\u0275fac=function(e){return new(e||o)},o.\u0275mod=h.oAB({type:o}),o.\u0275inj=h.cJS({imports:[[r.ez,d.u5,l.Pc,A]]}),o)}}])}();