(self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_dealerModule_customer-details_customer-details_module_ts"],{

/***/ 78305:
/*!**********************************************************************************!*\
  !*** ./src/app/dealerModule/customer-details/customer-details-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailsPageRoutingModule": function() { return /* binding */ CustomerDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _customer_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-details.page */ 67668);




const routes = [
    {
        path: '',
        component: _customer_details_page__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailsPage
    }
];
let CustomerDetailsPageRoutingModule = class CustomerDetailsPageRoutingModule {
};
CustomerDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomerDetailsPageRoutingModule);



/***/ }),

/***/ 64358:
/*!**************************************************************************!*\
  !*** ./src/app/dealerModule/customer-details/customer-details.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailsPageModule": function() { return /* binding */ CustomerDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _customer_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-details-routing.module */ 78305);
/* harmony import */ var _customer_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-details.page */ 67668);







let CustomerDetailsPageModule = class CustomerDetailsPageModule {
};
CustomerDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _customer_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailsPageRoutingModule
        ],
        declarations: [_customer_details_page__WEBPACK_IMPORTED_MODULE_1__.CustomerDetailsPage]
    })
], CustomerDetailsPageModule);



/***/ }),

/***/ 67668:
/*!************************************************************************!*\
  !*** ./src/app/dealerModule/customer-details/customer-details.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailsPage": function() { return /* binding */ CustomerDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_customer_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./customer-details.page.html */ 86774);
/* harmony import */ var _customer_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-details.page.scss */ 49172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/api.service */ 14303);
/* harmony import */ var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transfer.service */ 51532);
/* harmony import */ var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constant */ 56544);









let CustomerDetailsPage = class CustomerDetailsPage {
    constructor(apiService, zone, loadingController, platform, route, sendData) {
        this.apiService = apiService;
        this.zone = zone;
        this.loadingController = loadingController;
        this.platform = platform;
        this.route = route;
        this.sendData = sendData;
        this.allocationData = this.sendData.alldata;
        this.checkredirect = this.sendData.myParam;
        platform.ready().then(() => {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
        });
    }
    ngOnInit() {
        this.fetchData();
    }
    ionViewWillEnter() {
        // this.allocationData= this.sendData.alldata;
        // this.fetchData();
    }
    fetchData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield this.loading.present();
            this.zone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                let apiKey = {
                    "search_str": "",
                    "request_for": this.allocationData.customer_id,
                    "request_user_type": this.allocationData.employee_type,
                    "request_type": "detail",
                    //   "dealer_id":this.sendData.itemDetails,
                    "value": "0"
                };
                this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.getUserList, apiKey).subscribe((result) => {
                    this.loading.dismiss();
                    this.allocatedPointsRes = result;
                    if (result.success == 1) {
                    }
                    else {
                        this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                    }
                }, err => {
                    this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                    this.loading.dismiss();
                });
            }));
        });
    }
    gotoHomeTab() {
        if (this.checkredirect == 'customerCheck') {
            this.apiService.isSelected = 'true';
            console.log("this.apiService.isSelected000000", this.apiService.isSelected);
        }
        // alert(this.apiService.isSelected)
    }
    redemption_report(item) {
        this.sendData.alldata = { "item": item, "requestType": 'customer', 'employee_type': this.allocationData.employee_type, 'dealer_id': this.sendData.itemDetails };
        this.route.navigate(['/redemption-report']);
    }
    customer_list() {
        // this.sendData.viewProfilId = item
        //this.sendData.alldata
        this.route.navigate(['./customer-list']);
    }
    goToRedeem(item) {
        if (item.redirect_url == 'purchasehistory') {
            // this.sendData.backKey = ;
            this.sendData.alldata = { 'customer_id': this.allocationData.customer_id, 'request_page': 'customer', 'backKey': 'back1', 'employee_type': this.allocationData.employee_type, };
        }
        else {
            //this.sendData.backKey = 'back1';
            this.sendData.alldata = { 'customer_id': this.allocationData.customer_id,
                'employee_type': this.allocationData.employee_type, 'request_page': 'customer', 'backKey': 'back1', 'redeem_for': 'other' };
            console.log('2345678:', this.sendData.alldata);
            // this.sendData.redeem_for = 'other';
        }
        // this.sendData.request_page = 'customer';
        // this.sendData.alldata = this.allocationData;
        this.route.navigateByUrl(item === null || item === void 0 ? void 0 : item.redirect_url);
    }
};
CustomerDetailsPage.ctorParameters = () => [
    { type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService }
];
CustomerDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-customer-details',
        template: _raw_loader_customer_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_customer_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomerDetailsPage);



/***/ }),

/***/ 81343:
/*!***********************************************!*\
  !*** ./src/app/image-zoom/image-zoom.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageZoomPage": function() { return /* binding */ ImageZoomPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./image-zoom.page.html */ 47674);
/* harmony import */ var _image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-zoom.page.scss */ 32968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 18345);






let ImageZoomPage = class ImageZoomPage {
    constructor(navParams, modalCtrl, localStorage) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.localStorage = localStorage;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            loop: true,
            zoom: {
                minRatio: 1,
                maxRatio: 3,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed'
            }
        };
        this.localStorage.getStorage().then(result => {
            this.loginUserData = result.allStoreData;
        });
    }
    ionViewWillEnter() {
        this.slides.lockSwipes(true);
    }
    ngOnInit() {
        console.table(this.navParams);
        this.zoomData = this.navParams.data.data;
        console.log('img==> ', this.zoomData);
    }
    dismiss() {
        this.modalCtrl.dismiss();
        this.slides.lockSwipes(false);
    }
    download() {
    }
};
ImageZoomPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService }
];
ImageZoomPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides,] }]
};
ImageZoomPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-image-zoom',
        template: _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImageZoomPage);



/***/ }),

/***/ 51532:
/*!***************************************************!*\
  !*** ./src/app/services/data-transfer.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTransferService": function() { return /* binding */ DataTransferService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image-zoom/image-zoom.page */ 81343);




let DataTransferService = class DataTransferService {
    constructor(modalController) {
        this.modalController = modalController;
    }
    zoomSingleImage(path) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__.ImageZoomPage,
                cssClass: 'my-custom-class',
                // swipeToClose: true,
                // mode: 'ios', backdropDismiss: true,
                // presentingElement: this.routerOutlet.nativeEl,
                componentProps: {
                    data: path,
                },
            });
            return yield modal.present();
        });
    }
    readMoreHTML(str, max, add) {
        console.log('str==> ', str);
        if (str && str.length > max) {
            var tempStr = str.substring(0, max);
            var openAtag = tempStr.split("<a ");
            var closeAtag = tempStr.split("</a>");
            // console.log('openAtag== ', openAtag.length);
            // console.log('closeAtag== ', closeAtag.length);
            if (openAtag.length == closeAtag.length) {
                str = tempStr;
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>';
                // console.log("equal== ", str);
                return str + " " + add;
            }
            else {
                var nextStr = str.substring(max, str.length);
                // console.log("remaining sub string******", nextStr);
                var nextCloseAtagIndex = nextStr.search("</a>");
                // console.log("nextCloseAtagIndex sub string******", nextCloseAtagIndex);
                str = tempStr + "" + nextStr.substring(0, nextCloseAtagIndex + 4);
                // console.log("final******", str);
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>';
                // console.log("not equal== ", str);
                return str + " " + add;
            }
            // add = add || '<span class="community-ReadmoreUpdated">...Read more</span>';
            // return (typeof str === 'string' && str.length > max ? str.substring(0,max)+add : str);
        }
        else {
            return str;
        }
    }
};
DataTransferService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
DataTransferService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DataTransferService);



/***/ }),

/***/ 49172:
/*!**************************************************************************!*\
  !*** ./src/app/dealerModule/customer-details/customer-details.page.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card_car {\n  box-shadow: 1px 1px 1px 2px #efeaea;\n  border-radius: 12px;\n}\n\n.view {\n  text-transform: capitalize;\n  --border-radius: 20px;\n  width: 135px;\n  height: 35px;\n}\n\n.act {\n  text-transform: capitalize;\n  --border-radius:20px;\n  --background:#B01D22;\n  padding: 5px;\n  width: 180px;\n  height: 50px;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n}\n\n.col_img {\n  font-size: 75px;\n}\n\n.col_text {\n  color: white;\n}\n\n.col_P {\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.butt_col {\n  text-transform: capitalize;\n  --background: transparent !important;\n  --border-color: white !important;\n  color: white !important;\n  border: 1px solid;\n  border-radius: 13px;\n  width: 80%;\n  min-height: 30px;\n}\n\n.hedaerBackgroundImage {\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\n.viewButton {\n  color: #fff;\n  --border-color:#fff;\n  letter-spacing: 0px;\n  width: 100%;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.redemDiv {\n  font-size: 14px;\n}\n\n.image {\n  width: 24px;\n  height: 20px;\n}\n\n.col_pDiv {\n  color: #B01D22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQVUsbUNBQUE7RUFBb0MsbUJBQUE7QUFHbEQ7O0FBRkk7RUFBTSwwQkFBQTtFQUEwQixxQkFBQTtFQUFzQixZQUFBO0VBQWEsWUFBQTtBQVN2RTs7QUFSSTtFQUFNLDBCQUFBO0VBQTBCLG9CQUFBO0VBQXFCLG9CQUFBO0VBQXFCLFlBQUE7RUFBWSxZQUFBO0VBQVksWUFBQTtBQWlCdEc7O0FBaEJJO0VBQUssV0FBQTtFQUFZLFlBQUE7QUFxQnJCOztBQXBCSTtFQUFTLGVBQUE7QUF3QmI7O0FBdkJJO0VBQVUsWUFBQTtBQTJCZDs7QUExQkk7RUFBTyxlQUFBO0VBQWdCLGlCQUFBO0FBK0IzQjs7QUE5Qkk7RUFBVSwwQkFBQTtFQUEyQixvQ0FBQTtFQUFxQyxnQ0FBQTtFQUFpQyx1QkFBQTtFQUMzRyxpQkFBQTtFQUFrQixtQkFBQTtFQUFvQixVQUFBO0VBQVcsZ0JBQUE7QUF3Q3JEOztBQXZDSTtFQUF1Qiw0QkFBQTtFQUE2QiwwQkFBQTtBQTRDeEQ7O0FBM0NJO0VBQVksV0FBQTtFQUFXLG1CQUFBO0VBQW9CLG1CQUFBO0VBQW9CLFdBQUE7RUFBWSxvQkFBQTtFQUFBLHVCQUFBO0FBbUQvRTs7QUFsREk7RUFBVSxlQUFBO0FBc0RkOztBQXJESTtFQUFRLFdBQUE7RUFBYSxZQUFBO0FBMER6Qjs7QUF6REk7RUFBVyxjQUFBO0FBNkRmIiwiZmlsZSI6ImN1c3RvbWVyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5jYXJkX2Nhcntib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggI2VmZWFlYTtib3JkZXItcmFkaXVzOjEycHg7fVxuICAgIC52aWV3e3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7LS1ib3JkZXItcmFkaXVzOiAyMHB4O3dpZHRoOiAxMzVweDtoZWlnaHQ6IDM1cHg7fVxuICAgIC5hY3R7IHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7LS1ib3JkZXItcmFkaXVzOjIwcHg7LS1iYWNrZ3JvdW5kOiNCMDFEMjI7cGFkZGluZzo1cHg7d2lkdGg6MTgwcHg7aGVpZ2h0OjUwcHg7fVxuICAgIC5pbWd7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO31cbiAgICAuY29sX2ltZ3tmb250LXNpemU6NzVweDt9XG4gICAgLmNvbF90ZXh0e2NvbG9yOndoaXRlOyB9XG4gICAgLmNvbF9Qe2ZvbnQtc2l6ZTogMjVweDtmb250LXdlaWdodDogYm9sZDsgfVxuICAgIC5idXR0X2NvbHt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7LS1ib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7Ym9yZGVyLXJhZGl1czogMTNweDt3aWR0aDogODAlO21pbi1oZWlnaHQ6IDMwcHg7fVxuICAgIC5oZWRhZXJCYWNrZ3JvdW5kSW1hZ2V7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTt9XG4gICAgLnZpZXdCdXR0b257Y29sb3I6I2ZmZjstLWJvcmRlci1jb2xvcjojZmZmO2xldHRlci1zcGFjaW5nOiAwcHg7d2lkdGg6IDEwMCU7dGV4dC10cmFuc2Zvcm06IGluaXRpYWw7fVxuICAgIC5yZWRlbURpdntmb250LXNpemU6IDE0cHg7fVxuICAgIC5pbWFnZXsgd2lkdGg6IDI0cHg7IGhlaWdodDogMjBweDt9XG4gICAgLmNvbF9wRGl2eyBjb2xvcjojQjAxRDIyO30iXX0= */");

/***/ }),

/***/ 32968:
/*!*************************************************!*\
  !*** ./src/app/image-zoom/image-zoom.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: none;\n}\n\nion-slides {\n  width: 100%;\n}\n\nion-slide {\n  background: rgba(0, 0, 0, 0.9);\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n}\n\n.zoom-box {\n  position: absolute;\n  height: 100%;\n  display: flex;\n  width: 100%;\n}\n\n.product-zoom-modal {\n  --width: 100%;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n/* End Modal css */\n\n/* Global modal transparent*/\n\n.sc-ion-modal-md-h {\n  --background: none;\n}\n\n.sc-ion-modal-ios-h {\n  --background: none;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: #fff;\n  position: absolute;\n  top: 0;\n}\n\nion-icon {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXpvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVksa0JBQUE7QUFDWjs7QUFBQTtFQUFhLFdBQUE7QUFJYjs7QUFIQTtFQUFhLDhCQUFBO0FBT2I7O0FBTkE7RUFBcUIsV0FBQTtFQUFjLGVBQUE7QUFXbkM7O0FBVkE7RUFBYSxrQkFBQTtFQUFxQixZQUFBO0VBQWdCLGFBQUE7RUFBZSxXQUFBO0FBaUJqRTs7QUFmQTtFQUF1QixhQUFBO0VBQWdCLG9DQUFBO0FBb0J2Qzs7QUFuQkEsa0JBQUE7O0FBQ0EsNEJBQUE7O0FBQ0E7RUFBdUIsa0JBQUE7QUF1QnZCOztBQXRCQTtFQUF3QixrQkFBQTtBQTBCeEI7O0FBdkJBO0VBQWEsZ0RBQUE7RUFDVCxhQUFBO0VBQWdCLGtCQUFBO0VBQXNCLE1BQUE7QUE2QjFDOztBQTVCSTtFQUFTLFdBQUE7QUFnQ2IiLCJmaWxlIjoiaW1hZ2Utem9vbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVtIHsgIC0tYmFja2dyb3VuZDogbm9uZTt9XG5pb24tc2xpZGVzIHsgd2lkdGg6IDEwMCU7fVxuaW9uLXNsaWRlIHsgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC45KTt9XG4uc3dpcGVyLXNsaWRlIGltZyB7ICB3aWR0aDogMTAwJTsgIG1heC13aWR0aDogMTAwJTt9XG4uem9vbS1ib3ggeyAgcG9zaXRpb246IGFic29sdXRlOyAgaGVpZ2h0OiAxMDAlOyAgIGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlO31cblxuLnByb2R1Y3Qtem9vbS1tb2RhbCB7ICAtLXdpZHRoOiAxMDAlOyAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO31cbi8qIEVuZCBNb2RhbCBjc3MgKi9cbi8qIEdsb2JhbCBtb2RhbCB0cmFuc3BhcmVudCovXG4uc2MtaW9uLW1vZGFsLW1kLWggeyAgIC0tYmFja2dyb3VuZDogbm9uZTt9XG4uc2MtaW9uLW1vZGFsLWlvcy1oIHsgICAtLWJhY2tncm91bmQ6IG5vbmU7fVxuXG5cbmlvbi10b29sYmFyIHstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gICAgLS1jb2xvcjogI2ZmZjsgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICB0b3A6IDA7ICB9XG4gICAgaW9uLWljb257Y29sb3I6I2ZmZjt9Il19 */");

/***/ }),

/***/ 86774:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealerModule/customer-details/customer-details.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{allocatedPointsRes?.header_title}}</ion-title>\n    <ion-buttons slot=\"start\" tappable (click)=\"gotoHomeTab()\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <ion-row *ngIf=\"allocatedPointsRes\" class=\"ion-justify-content-center\">\n    <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"12\" class=\"whiteCol ion-no-padding\">\n      <div style=\"background-image: url({{allocatedPointsRes?.header_bg}});\" class=\"hedaerBackgroundImage ion-padding\">\n        <ion-row *ngFor=\"let item of allocatedPointsRes?.user_data\" >\n          <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"3\" size-lg=\"4\"  push-lg=\"1\" push-md=\"1\">\n            <h6 class=\"ion-no-margin \">{{item?.key}}</h6>\n          </ion-col>\n          <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\">\n            <h6 class=\"ion-no-margin ion-text-center\">:</h6>\n          </ion-col>\n          <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"3\" size-lg=\"4\"  push-lg=\"1\" push-md=\"1\">\n            <h6 class=\"ion-no-margin\">{{item.value}}</h6>\n          </ion-col>\n        </ion-row>\n        <br>\n        <ion-row *ngIf=\"allocatedPointsRes?.footer\" (click)=\"customer_list()\">\n          <ion-col size=\"5\" class=\"ion-text-right\">\n            <img [src]=\"allocatedPointsRes?.footer?.icon\" class=\"image\" />\n          </ion-col>\n          <ion-col size=\"7\" class=\"col_pDiv\"><p class=\"ion-no-margin\" >{{allocatedPointsRes?.footer?.text}}</p></ion-col>\n        </ion-row>\n      </div>\n      <br>\n        <ion-row  *ngIf=\"allocatedPointsRes?.point_data\">\n          <ion-col>\n            <div style=\"background-image: url({{allocatedPointsRes?.point_data?.background_image}});\" class=\"hedaerBackgroundImage\">\n              <!-- <ion-grid> -->\n               <ion-row >\n                 <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\"  class=\"col_img\">\n                   <img [src]=\"allocatedPointsRes?.point_data?.coin_icon\" class=\"img\">\n                 </ion-col>\n                 <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\" class=\"col_text\">\n                   <p style=\"margin-bottom:0px;\">{{allocatedPointsRes?.point_data?.available_balance_string}}</p>                \n                  <p class=\"col_P ion-no-margin\">{{allocatedPointsRes?.point_data?.available_balance}}</p>\n                </ion-col>\n                <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\" class=\"colom1\">\n                  <ion-row *ngFor=\"let ki of allocatedPointsRes?.point_data?.other_arr\">\n                    <ion-col class=\"ion-no-padding\" *ngIf = \"ki?.btn_applicable == true\">\n                      <ion-button fill=\"outline\" shape=\"round\" size=\"small\" class=\"viewButton\" (click)=\"goToRedeem(ki)\">{{ki?.btn_text}}</ion-button>\n                    </ion-col>\n                  </ion-row>\n                  <!-- <ion-button fill=\"outline\" shape=\"round\" size=\"small\" class=\"viewButton\">Purchase History</ion-button> -->\n                  <!-- <ion-button fill=\"outline\" shape=\"round\" size=\"small\" class=\"viewButton\">Redeem</ion-button> -->\n                </ion-col>\n               </ion-row>\n               <ion-row class=\"col_text\">\n                 <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\" class=\"ion-text-center\"><p class=\"ion-no-margin redemDiv\">\n                   {{allocatedPointsRes?.point_data?.debit_string}}&nbsp;{{allocatedPointsRes?.point_data?.total_debits}}</p></ion-col>\n                 <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\" class=\"ion-text-center\">|</ion-col>\n                <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\"><p class=\"ion-no-margin redemDiv\">\n                  {{allocatedPointsRes?.point_data?.total_balance_string}}&nbsp;{{allocatedPointsRes?.point_data?.total_credits}}</p>\n                </ion-col>\n               </ion-row>\n              <!-- </ion-grid> -->\n            </div>\n          </ion-col>\n        </ion-row>\n     \n        <ion-row *ngIf=\"allocatedPointsRes?.statement?.show_statement_btn==true\">\n          <ion-col class=\"colom\">\n            <ion-button class=\"act\" (click) = \"redemption_report(allocationData)\">{{allocatedPointsRes?.statement?.statement_text}}</ion-button>\n          </ion-col>\n        </ion-row>\n     \n      <!-- </div> -->\n      </ion-col>\n      </ion-row>\n</ion-content>\n");

/***/ }),

/***/ 47674:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-zoom/image-zoom.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"end\">\n        <a *ngIf=\"zoomData?.flag==10 && (zoomData?.award_to==loginUserData?.employee_id)\" href=\"{{zoomData?.certificate_image}}\" download>\n          <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        </a>\n  \n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"dismiss()\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- [fulscreen]=\"true\" -->\n<ion-content  class=\"imageZoomPage fullscreen\">\n  <div class=\"zoom-box\">\n    <ion-slides pager=\"false\" #slides [options]=\"slideOpts\"  >\n      <ion-slide >\n        <div class=\"swiper-zoom-container\">\n          <img *ngIf=\"zoomData?.flag!=10\" class=\"card-img\" src=\"{{zoomData}}\" onerror=\"this.src='./assets/error.jpg'\" >\n          <img *ngIf=\"zoomData?.flag==10\" class=\"card-img\" src=\"{{zoomData?.certificate_image}}\" onerror=\"this.src='./assets/error.jpg'\" >\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dealerModule_customer-details_customer-details_module_ts-es2015.js.map