!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[1616],{61616:function(n,i,o){"use strict";o.r(i),o.d(i,{SelectDealerPageModule:function(){return _}});var a=o(38583),s=o(90665),l=o(47823),c=o(12234),r=o(56544),u=o(88720),p=o(51532),d=o(14303);function g(e,t){if(1&e&&(u.TgZ(0,"ion-select-option",9),u._uU(1),u._UZ(2,"br"),u._uU(3),u.qZA()),2&e){var n=t.$implicit;u.Q6J("value",n),u.xp6(1),u.Oqu(null==n?null:n.full_name),u.xp6(2),u.Oqu(null==n?null:n.dealer_code)}}function h(e,t){if(1&e&&(u.TgZ(0,"ion-item"),u.TgZ(1,"ion-label"),u._uU(2),u.qZA(),u.qZA()),2&e){var n=t.$implicit;u.xp6(2),u.AsE(" ",null==n?null:n.full_name,"\xa0(",null==n?null:n.dealer_code,") ")}}function f(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"div",10),u.TgZ(1,"ion-button",11),u.NdJ("click",function(){return u.CHM(n),u.oxw().continue()}),u._uU(2),u.qZA(),u.qZA()}if(2&e){var i=u.oxw();u.xp6(2),u.Oqu(null==i.dealerList||null==i.dealerList.continue_process?null:i.dealerList.continue_process.btn_text)}}var b,m,v=[{path:"",component:(b=function(){function n(t,i,o,a,s){e(this,n),this.sendData=t,this.zone=i,this.apiService=o,this.navCntrl=a,this.route=s,this.searchString="",this.imgArr="",this.ischecked=!1,this.bp=[]}var i,o,a;return i=n,(o=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.obj=this.sendData.alldata,this.itemss=this.sendData.item,console.log("qwew: ",this.obj),this.loginPageData=this.sendData.loginKey,this.dealerList=this.sendData.itemDetails}},{key:"back",value:function(){this.navCntrl.back()}},{key:"checkValue",value:function(e){console.log("select opt value==> ",e),this.selcetdItem=e.target.value,console.log("select opt value==> ",this.selcetdItem),this.ischecked=!0}},{key:"continue",value:function(){var e=this;this.selcetdItem?this.zone.run(function(){e.bp=[];for(var t=0;t<e.selcetdItem.length;t++)e.bp.push(e.selcetdItem[t].dealer_id),e.bp.toString(),console.log("bp :",e.bp.toString());var n={contact:e.obj.contact,send_type:e.obj.send_type,message_type:"sms",dealer_id:e.bp.toString()};console.log("login data response",n),e.apiService.apiCallWithLoginToken(r.n.MobileSubmitUrl,n).subscribe(function(t){if(console.log("login data response",t),1==t.success){e.mobileSubmitData=t;var n={apiData:e.mobileSubmitData,phonenumber:e.obj.contact,send_type:e.obj.send_type,dealer_id:e.bp.toString(),requestPage:e.loginPageData.requestPage};e.sendData.alldata=n,e.obj.contact="",console.log("login data response",e.sendData),e.apiService.showToastMessage(t.message,"top",2e3,"greenBg"),e.sendData.itemDetails=e.itemss,e.route.navigate(["./otpverify"])}},function(t){e.apiService.presentLoadingClose(),e.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})}):this.apiService.showToastMessage("Please Select Dealer","top",3e3,"redBg")}}])&&t(i.prototype,o),a&&t(i,a),n}(),b.\u0275fac=function(e){return new(e||b)(u.Y36(p.b),u.Y36(u.R0b),u.Y36(d.s),u.Y36(l.SH),u.Y36(c.F0))},b.\u0275cmp=u.Xpm({type:b,selectors:[["app-select-dealer"]],decls:18,vars:5,consts:[["slot","start"],[3,"click"],[1,"ion-padding"],["sizexs","12","size-md","8","size-lg","8","push-md","2","push-lg","2",1,"whiteCol","ion-no-padding",3,"size"],["sizexs","12","size-md","12","size-lg","12",3,"size"],["placeholder","Select Dealer","multiple","true",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["class","txtcentr",4,"ngIf"],[3,"value"],[1,"txtcentr"],["tappable","",1,"ionic_btnic",3,"click"]],template:function(e,t){1&e&&(u.TgZ(0,"ion-header"),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-title"),u._uU(3,"Select Dealer"),u.qZA(),u.TgZ(4,"ion-buttons",0),u.TgZ(5,"ion-back-button",1),u.NdJ("click",function(){return t.back()}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"ion-content",2),u.TgZ(7,"ion-row"),u.TgZ(8,"ion-col",3),u.TgZ(9,"ion-row"),u.TgZ(10,"ion-col",4),u.TgZ(11,"ion-list"),u.TgZ(12,"ion-select",5),u.NdJ("ionChange",function(e){return t.checkValue(e)}),u.YNc(13,g,4,3,"ion-select-option",6),u.qZA(),u.YNc(14,h,3,2,"ion-item",7),u.qZA(),u.qZA(),u.qZA(),u._UZ(15,"br"),u.YNc(16,f,3,1,"div",8),u._UZ(17,"br"),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(8),u.Q6J("size",12),u.xp6(2),u.Q6J("size",12),u.xp6(3),u.Q6J("ngForOf",null==t.dealerList?null:t.dealerList.data),u.xp6(1),u.Q6J("ngForOf",t.selcetdItem),u.xp6(2),u.Q6J("ngIf",1==(null==t.dealerList||null==t.dealerList.continue_process?null:t.dealerList.continue_process.btn_applicable)))},directives:[l.Gu,l.sr,l.wd,l.Sm,l.oU,l.cs,l.W2,l.Nd,l.wI,l.q_,l.t9,l.QI,a.sg,a.O5,l.n0,l.Ie,l.Q$,l.YG],styles:[".padd10[_ngcontent-%COMP%]{padding:10px 0}.ionic_btnic[_ngcontent-%COMP%]{--background:var(--headerColor);--border-radius:14px;width:auto;text-transform:capitalize;height:30px;font-size:14px}.txtcentr[_ngcontent-%COMP%]{text-align:center}"]}),b)}],Z=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[c.Bz.forChild(v)],c.Bz]}),t}(),_=((m=function t(){e(this,t)}).\u0275fac=function(e){return new(e||m)},m.\u0275mod=u.oAB({type:m}),m.\u0275inj=u.cJS({imports:[[a.ez,s.u5,l.Pc,Z]]}),m)}}])}();