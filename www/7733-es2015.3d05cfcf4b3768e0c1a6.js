(self.webpackChunkMehta=self.webpackChunkMehta||[]).push([[7733],{17733:function(t,e,o){"use strict";o.r(e),o.d(e,{TabsPageModule:function(){return P}});var n=o(47823),a=o(38583),i=o(90665),s=o(12234),r=o(64762),c=o(56544),l=o(51270),g=o(88720),p=o(18345),d=o(14303),h=o(51532);const u=["openTabs"],m=function(t){return{activeTab:t}};function f(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"div",9),g.NdJ("click",function(e){return g.CHM(t),g.oxw().changeTab("home",e)}),g.TgZ(1,"p",10),g._UZ(2,"img",11),g._uU(3," \xa0"),g.TgZ(4,"span",12),g._uU(5,"Home"),g.qZA(),g.qZA(),g._UZ(6,"ion-ripple-effect"),g.qZA()}if(2&t){const t=g.oxw();g.Q6J("ngClass",g.VKq(1,m,"home"==t.activeTabs))}}function b(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"div",9),g.NdJ("click",function(e){return g.CHM(t),g.oxw().changeTab("profile",e)}),g.TgZ(1,"p",10),g._UZ(2,"img",13),g._uU(3," \xa0"),g.TgZ(4,"span",12),g._uU(5,"Profile"),g.qZA(),g.qZA(),g._UZ(6,"ion-ripple-effect"),g.qZA()}if(2&t){const t=g.oxw();g.Q6J("ngClass",g.VKq(1,m,"profile"==t.activeTabs))}}function v(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"div",9),g.NdJ("click",function(e){return g.CHM(t),g.oxw().changeTab("customer-allocation",e)}),g.TgZ(1,"p",10),g._UZ(2,"img",14),g._uU(3," \xa0"),g.TgZ(4,"span",12),g._uU(5,"Customer"),g.qZA(),g.qZA(),g._UZ(6,"ion-ripple-effect"),g.qZA()}if(2&t){const t=g.oxw();g.Q6J("ngClass",g.VKq(1,m,"customer-allocation"==t.activeTabs))}}function C(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"div",9),g.NdJ("click",function(e){return g.CHM(t),g.oxw().changeTab("orders",e)}),g.TgZ(1,"p",10),g._UZ(2,"img",15),g._uU(3," \xa0"),g.TgZ(4,"span",12),g._uU(5,"Orders"),g.qZA(),g.qZA(),g._UZ(6,"ion-ripple-effect"),g.qZA()}if(2&t){const t=g.oxw();g.Q6J("ngClass",g.VKq(1,m,"orders"==t.activeTabs))}}function _(t,e){1&t&&(g.TgZ(0,"div",16),g._uU(1," \xa0\xa0\xa0 \xa0\xa0\xa0 "),g.qZA())}function T(t,e){1&t&&(g.TgZ(0,"ion-tab-button",25),g._UZ(1,"img",26),g.TgZ(2,"ion-label",20),g._uU(3,"Customer"),g.qZA(),g.qZA())}function Z(t,e){1&t&&(g.TgZ(0,"ion-tab-button",27),g._UZ(1,"img",28),g.TgZ(2,"ion-label",20),g._uU(3,"Orders"),g.qZA(),g.qZA())}function k(t,e){if(1&t&&(g.TgZ(0,"ion-tab-bar",17),g.TgZ(1,"ion-tab-button",18),g._UZ(2,"img",19),g.TgZ(3,"ion-label",20),g._uU(4,"Home"),g.qZA(),g.qZA(),g.TgZ(5,"ion-tab-button",21),g._UZ(6,"img",22),g.TgZ(7,"ion-label",20),g._uU(8,"Profile"),g.qZA(),g.qZA(),g.YNc(9,T,4,0,"ion-tab-button",23),g.YNc(10,Z,4,0,"ion-tab-button",24),g.qZA()),2&t){const t=g.oxw();g.xp6(9),g.Q6J("ngIf","2"==t.employType),g.xp6(1),g.Q6J("ngIf",1==t.orderShow)}}const w=function(t){return{deskDiv1:t}},S=function(t){return[t]},M=[{path:"tabs",component:(()=>{class t{constructor(t,e,o,n,a,i,s){this.zone=t,this.router=e,this.platform=o,this.popoverController=n,this.localStorage=a,this.apiService=i,this.sendData=s,this.activeTabs=""}ionViewWillEnter(){this.localStorage.getStorage().then(t=>{this.employType=t.allStoreData.employee_type}),console.log("current tabs constructor==> ",this.apiService.isSelected),"true"==this.apiService.isSelected?this.router.navigateByUrl(2==this.employType?"tabs/customer-allocation":"tabs/orders"):(this.apiService.isSelected="",this.router.navigateByUrl("/tabs/home")),this.forceUpdate()}ngOnInit(){}forceUpdate(){console.log("force Upadte call"),this.zone.run(()=>{this.localStorage.getStorage().then(t=>{let e=t.fcmToken;console.log("finally get new fcm token on tabs page==",e),this.apiService.apiCallWithLoginToken(c.n.forceUpdateUrl,{registration_token:e||this.apiService.fcmToken||""}).subscribe(t=>{if(console.log("force Upadte call result",t),1==t.success||"1"==t.success){if(this.orderShow=t.conditionCheks.order_tab_access,1==t.conditionCheks.app_status||"1"==t.conditionCheks.app_status)this.sendData.alldata=t.conditionCheks.app_status,this.sendData.myParam=t.force_update_data,this.router.navigate(["/force-optional-update"]);else if(2==t.conditionCheks.app_status||"2"==t.conditionCheks.app_status)1==this.apiService.forceUpdateCount&&(this.sendData.alldata=t.conditionCheks.app_status,this.sendData.myParam=t.force_update_data,this.apiService.forceUpdateCount=this.apiService.forceUpdateCount+1,this.router.navigate(["/force-optional-update"]));else if(0==t.conditionCheks.app_status||"0"==t.conditionCheks.app_status)if(1==t.conditionCheks.is_down||"1"==t.conditionCheks.is_down)this.sendData.myParam=t.maintainence_data,this.router.navigate(["/maintenance"]);else if(0==t.conditionCheks.is_down||"0"==t.conditionCheks.is_down){if(0==t.conditionCheks.tnc_verified)return this.sendData.alldata=t.conditionCheks.tnc_data,this.router.navigate(["/terms-conditions"]),!1;if(0==t.conditionCheks.registration_status.is_uploaded)return this.sendData.registrationType={request_page:"home"},this.router.navigate(["/registration"]),!1;if(0==t.conditionCheks.profile_image_status.is_uploaded)return this.sendData.alldata={requestFor:"",requestPage:"home"},this.router.navigate(["/profile-upload"]),!1;if(0==t.conditionCheks.user_location_submit.is_uploaded)return this.sendData.alldata={requestFor:"",requestPage:"home"},this.router.navigate(["/geolocation"]),!1;if(1==t.conditionCheks.show_registration_image)return this.sendData.alldata=t.conditionCheks.registration_image,this.router.navigate(["/admin-approval"]),console.log("login data response",this.sendData.alldata),!1}}else 2!=t.success&&"2"!=t.success&&0!=t.success&&"0"!=t.success||this.logOutCall()},t=>{this.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})})})}logOutCall(){this.zone.run(()=>{let t={};console.log("login data response",t),this.apiService.apiCallWithLoginToken(c.n.LogOutUrl,t).subscribe(t=>{console.log("logout data response",t),this.localStorage.remove("allStoreData"),this.apiService.generateDeviceId(),this.apiService.generateFCMToken(),this.maintance(),this.router.navigate(["/login"]),this.apiService.showToastMessage(t.message,"top",2e3,"greenBg")},t=>{this.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})})}maintance(){return(0,r.mG)(this,void 0,void 0,function*(){yield this.localStorage.getStorage().then(t=>{console.log("localStorage storedData storedData000",t)}),this.zone.run(()=>{this.apiService.apiCallWithLoginToken(c.n.maintanceUrl,{}).subscribe(t=>(0,r.mG)(this,void 0,void 0,function*(){1==t.success||"1"==t.success?(this.maintanceData=t,yield this.localStorage.setStorage("maintainanceData",t),1!=t.data.is_down&&"1"!=t.data.is_down||(this.sendData.myParam=t.maintainence_data,this.router.navigate(["/maintenance"]))):this.apiService.showToastMessage(t.message,"top",3e3,"redBg")}),t=>{this.apiService.showToastMessage(JSON.stringify(t),"top",3e3,"redBg")})})})}changeTab(t,e){this.zone.run(()=>{"profile"==t?this.presentPopover(e):"communication-list"==t?this.apiService.showToastMessage("Coming Soon!","top",2e3,"redBg"):this.router.navigateByUrl("tabs/"+t),this.activeTabs=t})}setCurrentTab(){console.log("this.tabRef.getSelected()",this.tabRef.getSelected()),this.zone.run(()=>{console.log("current tabs==> ",this.tabRef.getSelected()),this.activeTabs=this.tabRef.getSelected()})}presentPopover(t){return(0,r.mG)(this,void 0,void 0,function*(){const e=yield this.popoverController.create({component:l.G,cssClass:"my-custom-class",event:t,translucent:!0});yield e.present()})}}return t.\u0275fac=function(e){return new(e||t)(g.Y36(g.R0b),g.Y36(s.F0),g.Y36(n.t4),g.Y36(n.Dh),g.Y36(p.n),g.Y36(d.s),g.Y36(h.b))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-tabs"]],viewQuery:function(t,e){if(1&t&&(g.Gf(u,5,n.UN),g.Gf(n.jP,5)),2&t){let t;g.iGM(t=g.CRH())&&(e.tabRef=t.first),g.iGM(t=g.CRH())&&(e.routerOutlets=t)}},decls:13,vars:13,consts:[[3,"translucent"],["slot","start",1,"headerButtons"],[3,"ngClass"],["src","assets/Bandhan Icon/Bandhan yellow logo.png","onerror","this.src='assets/watermark/watermark.png'",1,"homeBandhanLogo",3,"ngClass"],["class","ion-text-center inlineDiv ion-activatable ripple-parent",3,"ngClass","click",4,"ngIf"],["class","ion-text-center inlineDiv",4,"ngIf"],[3,"ionTabsDidChange"],["openTabs",""],["slot","bottom","style","position:relative;","class","headerColor",4,"ngIf"],[1,"ion-text-center","inlineDiv","ion-activatable","ripple-parent",3,"ngClass","click"],[1,"ion-no-margin","navIcon","tab_padd"],["src","assets/icon/Home.png","onerror","this.src='assets/watermark/watermark.png'",1,"homeLogo"],[1,"ion-no-margin","navText1","homepDiv1"],["src","assets/icon/Profile.png","onerror","this.src='assets/watermark/watermark.png'",1,"homeLogo"],["src","assets/icon/Customer.png","onerror","this.src='assets/watermark/watermark.png'",1,"homeLogo"],["src","assets/icon/Shop.png","onerror","this.src='assets/watermark/watermark.png'",1,"homeLogo"],[1,"ion-text-center","inlineDiv"],["slot","bottom",1,"headerColor",2,"position","relative"],["tab","home"],["src","assets/NavbarIcon/Home.svg","onerror","this.src='assets/watermark/watermark.png'",1,"homeLogo"],[1,"homepDiv"],["tab","profile"],["src","assets/NavbarIcon/Profile.svg","onerror","this.src='assets/watermark/watermark.png'",1,"homeLogo"],["tab","customer-allocation",4,"ngIf"],["tab","orders",4,"ngIf"],["tab","customer-allocation"],["src","assets/NavbarIcon/Customer.svg","onerror","this.src='assets/watermark/watermark.png'",1,"homeLogo"],["tab","orders"],["src","assets/NavbarIcon/Order.svg","onerror","this.src='assets/watermark/watermark.png'",1,"homeLogo"]],template:function(t,e){1&t&&(g.TgZ(0,"ion-header",0),g.TgZ(1,"ion-toolbar"),g.TgZ(2,"ion-buttons",1),g.TgZ(3,"div",2),g._UZ(4,"img",3),g.qZA(),g.YNc(5,f,7,3,"div",4),g.YNc(6,b,7,3,"div",4),g.YNc(7,v,7,3,"div",4),g.YNc(8,C,7,3,"div",4),g.YNc(9,_,2,0,"div",5),g.qZA(),g.qZA(),g.qZA(),g.TgZ(10,"ion-tabs",6,7),g.NdJ("ionTabsDidChange",function(){return e.setCurrentTab()}),g.YNc(12,k,11,2,"ion-tab-bar",8),g.qZA()),2&t&&(g.Q6J("translucent",!0),g.xp6(3),g.Q6J("ngClass",g.VKq(9,w,!(null!=e.platform&&e.platform.is("mobile")))),g.xp6(1),g.Q6J("ngClass",g.VKq(11,S,null!=e.platform&&e.platform.is("ios")?"b_logoIos":"b_logo")),g.xp6(1),g.Q6J("ngIf",!(null!=e.platform&&e.platform.is("mobile"))),g.xp6(1),g.Q6J("ngIf",!(null!=e.platform&&e.platform.is("mobile"))),g.xp6(1),g.Q6J("ngIf",!(null!=e.platform&&e.platform.is("mobile"))&&"2"==e.employType),g.xp6(1),g.Q6J("ngIf",!(null!=e.platform&&e.platform.is("mobile"))&&1==e.orderShow),g.xp6(1),g.Q6J("ngIf",!(null!=e.platform&&e.platform.is("mobile"))),g.xp6(3),g.Q6J("ngIf",null==e.platform?null:e.platform.is("mobile")))},directives:[n.Gu,n.sr,n.Sm,a.mk,a.O5,n.UN,n.H$,n.yq,n.ZU,n.Q$],styles:["ion-tab-button[_ngcontent-%COMP%]{color:var(--headerColor);border-bottom:3px solid var(--nonSelectedTabsBorder);background:var(--nonSelectedTabsBg)}.tab-selected[_ngcontent-%COMP%]{border-bottom:3px solid var(--headerColor);background:var(--selectedTabBg)}.tab-selected[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:700;color:var(--whiteColor);margin:0}.tab-selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--whiteColor)}ion-icon[_ngcontent-%COMP%]{font-size:25px}.notificationDiv[_ngcontent-%COMP%]{position:relative}.notificationDiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:absolute;margin:0;font-size:12px;top:-5px;right:-5px;border-radius:50%;min-width:20px;min-height:20px;background:red;text-align:center;padding:3px 2px;color:#fff}.inlineDiv[_ngcontent-%COMP%]{position:relative;padding:12px 22px}.inlineDiv[_ngcontent-%COMP%]   p.navIcon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.2em!important;color:#6c7fcc;font-weight:700}.inlineDiv[_ngcontent-%COMP%]   p.navText1[_ngcontent-%COMP%]{font-size:13px;color:#fff}.activeTab[_ngcontent-%COMP%]{border-bottom:3px solid #fff}.activeTab[_ngcontent-%COMP%]   p.navIcon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.2em!important;color:#fff;font-weight:700}.activeTab[_ngcontent-%COMP%]   p.navText[_ngcontent-%COMP%]{font-size:13px;color:var(--headerColor)}.b_logo[_ngcontent-%COMP%]{margin-top:14px}.b_logo[_ngcontent-%COMP%], .b_logoIos[_ngcontent-%COMP%]{height:53px;margin-left:10px}.b_logoIos[_ngcontent-%COMP%]{margin-top:8px}.tab_padd[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px}.transparantBgColor[_ngcontent-%COMP%]{background:transparent}"]}),t})(),children:[{path:"home",loadChildren:()=>o.e(1542).then(o.bind(o,61542)).then(t=>t.HomePageModule)},{path:"profile",loadChildren:()=>o.e(8592).then(o.bind(o,68243)).then(t=>t.ProfilePageModule)},{path:"customer-allocation",loadChildren:()=>o.e(9727).then(o.bind(o,99727)).then(t=>t.CustomerAllocationPageModule)},{path:"orders",loadChildren:()=>o.e(5548).then(o.bind(o,75548)).then(t=>t.OrdersPageModule)},{path:"",redirectTo:"/tabs/home",pathMatch:"full"}]}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[s.Bz.forChild(M)],s.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[n.Pc,a.ez,i.u5,x]]}),t})()}}]);