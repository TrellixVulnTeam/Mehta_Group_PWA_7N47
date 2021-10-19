(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_orderModule_orderdetails_orderdetails_module_ts"], {
    /***/
    81343: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImageZoomPage": function ImageZoomPage() {
          return (
            /* binding */
            _ImageZoomPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./image-zoom.page.html */
      47674);
      /* harmony import */


      var _image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-zoom.page.scss */
      32968);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/local-storage.service */
      18345);

      var _ImageZoomPage = /*#__PURE__*/function () {
        function ImageZoomPage(navParams, modalCtrl, localStorage) {
          var _this = this;

          _classCallCheck(this, ImageZoomPage);

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
          this.localStorage.getStorage().then(function (result) {
            _this.loginUserData = result.allStoreData;
          });
        }

        _createClass(ImageZoomPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.slides.lockSwipes(true);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.table(this.navParams);
            this.zoomData = this.navParams.data.data;
            console.log('img==> ', this.zoomData);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
            this.slides.lockSwipes(false);
          }
        }, {
          key: "download",
          value: function download() {}
        }]);

        return ImageZoomPage;
      }();

      _ImageZoomPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService
        }];
      };

      _ImageZoomPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides]
        }]
      };
      _ImageZoomPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-image-zoom',
        template: _raw_loader_image_zoom_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_image_zoom_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ImageZoomPage);
      /***/
    },

    /***/
    2922: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderdetailsPageRoutingModule": function OrderdetailsPageRoutingModule() {
          return (
            /* binding */
            _OrderdetailsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _orderdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./orderdetails.page */
      58984);

      var routes = [{
        path: '',
        component: _orderdetails_page__WEBPACK_IMPORTED_MODULE_0__.OrderdetailsPage
      }];

      var _OrderdetailsPageRoutingModule = function OrderdetailsPageRoutingModule() {
        _classCallCheck(this, OrderdetailsPageRoutingModule);
      };

      _OrderdetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OrderdetailsPageRoutingModule);
      /***/
    },

    /***/
    74590: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderdetailsPageModule": function OrderdetailsPageModule() {
          return (
            /* binding */
            _OrderdetailsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./orderdetails-routing.module */
      2922);
      /* harmony import */


      var _orderdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./orderdetails.page */
      58984);

      var _OrderdetailsPageModule = function OrderdetailsPageModule() {
        _classCallCheck(this, OrderdetailsPageModule);
      };

      _OrderdetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderdetailsPageRoutingModule],
        declarations: [_orderdetails_page__WEBPACK_IMPORTED_MODULE_1__.OrderdetailsPage]
      })], _OrderdetailsPageModule);
      /***/
    },

    /***/
    58984: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderdetailsPage": function OrderdetailsPage() {
          return (
            /* binding */
            _OrderdetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_orderdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./orderdetails.page.html */
      40983);
      /* harmony import */


      var _orderdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./orderdetails.page.scss */
      24996);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/provider/api.service */
      14303);
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      51532);
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      18345);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/assets/constant */
      56544);

      var _OrderdetailsPage = /*#__PURE__*/function () {
        function OrderdetailsPage(route, location, platform, zone, popoverController, apiService, sendData, localStorage) {
          _classCallCheck(this, OrderdetailsPage);

          this.route = route;
          this.location = location;
          this.platform = platform;
          this.zone = zone;
          this.popoverController = popoverController;
          this.apiService = apiService;
          this.sendData = sendData;
          this.localStorage = localStorage;
          this.value = 0;
          this.month = new Date().toISOString();
          this.infiniteScroll_call = false;
          this.searchString = '';
          this.mnth = '';
          this.customerT = '';
          this.callapicheck = 0;
        }

        _createClass(OrderdetailsPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.apiDetails = this.sendData.ordersDetails;
            this.mnth = this.month.slice(5, 7);
            this.value = 0;
            this.listData = [];
            this.customerT = '1,2';
            this.orderDetailsShow(this.searchString, this.mnth, this.customerT);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "gotoHomeTab",
          value: function gotoHomeTab() {
            console.log("this.apiService.isSelected000000", this.apiService.isSelected);
          }
        }, {
          key: "close",
          value: function close() {
            this.apiService.isSelected = 'true';
            this.route.navigate(['./tabs']);
          }
        }, {
          key: "changeData",
          value: function changeData(ev) {
            if (this.callapicheck != 0) {
              this.listData = [];
              this.value = 0;
              console.log('ev', ev);
              this.mnth = this.month.slice(5, 7);
              console.log('ev', this.mnth);
              this.orderDetailsShow(this.searchString, this.mnth, this.customerT);
            }
          }
        }, {
          key: "checkValue",
          value: function checkValue(ev) {
            console.log('select opt value==> ', ev);
            this.customerT = ev.target.value;
            this.listData = [];
            this.value = 0;
            this.mnth = this.month.slice(5, 7);
            this.orderDetailsShow(this.searchString, this.mnth, this.customerT);
          }
        }, {
          key: "orderDetailsShow",
          value: function orderDetailsShow(string, Month, customerType) {
            var _this2 = this;

            console.log('val');
            this.zone.run(function () {
              var apiKey = {
                "year": _this2.apiDetails.year,
                "month": Month,
                "order_status": _this2.apiDetails.item.order_status,
                "customer_type": customerType,
                "search_str": string,
                "value": _this2.value
              };

              _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.OrderDetailListUrl, apiKey).subscribe(function (result) {
                // this.apiService.presentLoadingClose();
                console.log("OrderDetailListUrl: ", result);
                _this2.listType = result.filter.data;
                _this2.callapicheck = 1;

                if (result.success == 1) {
                  if (_this2.listData == undefined) {
                    _this2.listData = result.data;
                  } else {
                    _this2.listData = _this2.listData.concat(result.data);
                  }

                  _this2.errorMessage = '';
                  _this2.errorImage = '';
                } else {
                  if (_this2.value == 0) {
                    _this2.errorImage = result.error_image;
                  } else {
                    _this2.errorMessage = result.message;
                  } // this.listData=[];
                  // this.apiService.showToastMessage(result.message, 'top', 2000, 'redBg');

                }

                if (_this2.infiniteScroll_call == true) {
                  _this2.stopInfiniteScroll();
                }
              }, function (err) {
                //   this.apiService.presentLoadingClose();
                _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');

                if (_this2.infiniteScroll_call == true) {
                  _this2.stopInfiniteScroll();
                }
              });
            });
          }
        }, {
          key: "gotoViewOrder",
          value: function gotoViewOrder(item) {
            this.sendData.alldata = item;
            this.route.navigate(['/appove-reject-reedemption']);
          }
        }, {
          key: "searchCustomer",
          value: function searchCustomer(ev) {
            console.log('ev', ev);

            if (ev.detail.value && ev.detail.value != '') {
              this.searchString = ev.detail.value;
            } else {
              this.searchString = '';
            }

            console.log('ev', ev);
            this.value = 0;
            this.listData = [];
            this.mnth = this.month.slice(5, 7);
            this.orderDetailsShow(this.searchString, this.mnth, this.customerT);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this3 = this;

            this.infiniteScroll_call = true;
            this.infiniteScroll_val = event;
            setTimeout(function () {
              _this3.value = _this3.listData.length;
              _this3.mnth = _this3.month.slice(5, 7);

              _this3.orderDetailsShow(_this3.searchString, _this3.mnth, _this3.customerT);
            }, 500);
          }
        }, {
          key: "stopInfiniteScroll",
          value: function stopInfiniteScroll() {
            if (this.infiniteScroll_call == true) {
              this.infiniteScroll_call = false;
              this.infiniteScroll_val.target.complete();
            }
          }
        }, {
          key: "verifyFun",
          value: function verifyFun(item, key) {
            var _this4 = this;

            console.log("item::::::", item);
            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              var apiKey = {
                "order_id": item.auto_id,
                "product_price": '',
                "agency_fees": '',
                "courier_charges": '',
                "order_status": key.order_status,
                "approval_status": key.approval_status,
                "utm_source": ''
              };

              _this4.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.acceptRejectUrl, apiKey).subscribe(function (result) {
                console.log("PostListUrl: ", result);

                _this4.apiService.presentLoadingClose();

                if (result.success == 1) {
                  _this4.mnth = _this4.month.slice(5, 7);
                  _this4.value = 0;
                  _this4.listData = [];
                  _this4.customerT = '1,2';

                  _this4.orderDetailsShow(_this4.searchString, _this4.mnth, _this4.customerT); // this.location.back();


                  _this4.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');
                } else {
                  _this4.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this4.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }]);

        return OrderdetailsPage;
      }();

      _OrderdetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
        }];
      };

      _OrderdetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-orderdetails',
        template: _raw_loader_orderdetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_orderdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OrderdetailsPage);
      /***/
    },

    /***/
    51532: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataTransferService": function DataTransferService() {
          return (
            /* binding */
            _DataTransferService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../image-zoom/image-zoom.page */
      81343);

      var _DataTransferService = /*#__PURE__*/function () {
        function DataTransferService(modalController) {
          _classCallCheck(this, DataTransferService);

          this.modalController = modalController;
        }

        _createClass(DataTransferService, [{
          key: "zoomSingleImage",
          value: function zoomSingleImage(path) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _image_zoom_image_zoom_page__WEBPACK_IMPORTED_MODULE_0__.ImageZoomPage,
                        cssClass: 'my-custom-class',
                        // swipeToClose: true,
                        // mode: 'ios', backdropDismiss: true,
                        // presentingElement: this.routerOutlet.nativeEl,
                        componentProps: {
                          data: path
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "readMoreHTML",
          value: function readMoreHTML(str, max, add) {
            console.log('str==> ', str);

            if (str && str.length > max) {
              var tempStr = str.substring(0, max);
              var openAtag = tempStr.split("<a ");
              var closeAtag = tempStr.split("</a>"); // console.log('openAtag== ', openAtag.length);
              // console.log('closeAtag== ', closeAtag.length);

              if (openAtag.length == closeAtag.length) {
                str = tempStr;
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>'; // console.log("equal== ", str);

                return str + " " + add;
              } else {
                var nextStr = str.substring(max, str.length); // console.log("remaining sub string******", nextStr);

                var nextCloseAtagIndex = nextStr.search("</a>"); // console.log("nextCloseAtagIndex sub string******", nextCloseAtagIndex);

                str = tempStr + "" + nextStr.substring(0, nextCloseAtagIndex + 4); // console.log("final******", str);

                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>'; // console.log("not equal== ", str);

                return str + " " + add;
              } // add = add || '<span class="community-ReadmoreUpdated">...Read more</span>';
              // return (typeof str === 'string' && str.length > max ? str.substring(0,max)+add : str);

            } else {
              return str;
            }
          }
        }]);

        return DataTransferService;
      }();

      _DataTransferService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _DataTransferService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _DataTransferService);
      /***/
    },

    /***/
    32968: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background: none;\n}\n\nion-slides {\n  width: 100%;\n}\n\nion-slide {\n  background: rgba(0, 0, 0, 0.9);\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n}\n\n.zoom-box {\n  position: absolute;\n  height: 100%;\n  display: flex;\n  width: 100%;\n}\n\n.product-zoom-modal {\n  --width: 100%;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n/* End Modal css */\n\n/* Global modal transparent*/\n\n.sc-ion-modal-md-h {\n  --background: none;\n}\n\n.sc-ion-modal-ios-h {\n  --background: none;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: #fff;\n  position: absolute;\n  top: 0;\n}\n\nion-icon {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXpvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVksa0JBQUE7QUFDWjs7QUFBQTtFQUFhLFdBQUE7QUFJYjs7QUFIQTtFQUFhLDhCQUFBO0FBT2I7O0FBTkE7RUFBcUIsV0FBQTtFQUFjLGVBQUE7QUFXbkM7O0FBVkE7RUFBYSxrQkFBQTtFQUFxQixZQUFBO0VBQWdCLGFBQUE7RUFBZSxXQUFBO0FBaUJqRTs7QUFmQTtFQUF1QixhQUFBO0VBQWdCLG9DQUFBO0FBb0J2Qzs7QUFuQkEsa0JBQUE7O0FBQ0EsNEJBQUE7O0FBQ0E7RUFBdUIsa0JBQUE7QUF1QnZCOztBQXRCQTtFQUF3QixrQkFBQTtBQTBCeEI7O0FBdkJBO0VBQWEsZ0RBQUE7RUFDVCxhQUFBO0VBQWdCLGtCQUFBO0VBQXNCLE1BQUE7QUE2QjFDOztBQTVCSTtFQUFTLFdBQUE7QUFnQ2IiLCJmaWxlIjoiaW1hZ2Utem9vbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVtIHsgIC0tYmFja2dyb3VuZDogbm9uZTt9XG5pb24tc2xpZGVzIHsgd2lkdGg6IDEwMCU7fVxuaW9uLXNsaWRlIHsgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC45KTt9XG4uc3dpcGVyLXNsaWRlIGltZyB7ICB3aWR0aDogMTAwJTsgIG1heC13aWR0aDogMTAwJTt9XG4uem9vbS1ib3ggeyAgcG9zaXRpb246IGFic29sdXRlOyAgaGVpZ2h0OiAxMDAlOyAgIGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlO31cblxuLnByb2R1Y3Qtem9vbS1tb2RhbCB7ICAtLXdpZHRoOiAxMDAlOyAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO31cbi8qIEVuZCBNb2RhbCBjc3MgKi9cbi8qIEdsb2JhbCBtb2RhbCB0cmFuc3BhcmVudCovXG4uc2MtaW9uLW1vZGFsLW1kLWggeyAgIC0tYmFja2dyb3VuZDogbm9uZTt9XG4uc2MtaW9uLW1vZGFsLWlvcy1oIHsgICAtLWJhY2tncm91bmQ6IG5vbmU7fVxuXG5cbmlvbi10b29sYmFyIHstLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gICAgLS1jb2xvcjogI2ZmZjsgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICB0b3A6IDA7ICB9XG4gICAgaW9uLWljb257Y29sb3I6I2ZmZjt9Il19 */";
      /***/
    },

    /***/
    24996: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container1 {\n  width: 100%;\n  margin: 60px auto 0;\n}\n\n.orderPDiv {\n  font-size: 13px;\n}\n\n.orderPDiv1 {\n  font-size: 12px;\n  color: var(--headerColor);\n}\n\n.orderPDiv2 {\n  font-size: 16px;\n  color: var(--headerColor);\n}\n\n.margin10Div {\n  margin-bottom: 10px;\n}\n\nion-searchbar {\n  --border-radius: 20px;\n  padding: 2px;\n  --box-shadow: 0px 0px 7px 2px #D6D1D1;\n}\n\n.butt_ion {\n  --border-radius: 15px;\n  height: 30px;\n}\n\n.ionic_btn1 {\n  --background:var(--headerColor);\n  --border-radius:14px;\n  width: 100%;\n  text-transform: none;\n  text-transform: initial;\n  height: 30px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZ0IsV0FBQTtFQUNaLG1CQUFBO0FBRUo7O0FBQUE7RUFBZSxlQUFBO0FBSWY7O0FBREE7RUFBZ0IsZUFBQTtFQUFnQix5QkFBQTtBQU1oQzs7QUFIQTtFQUFnQixlQUFBO0VBQWdCLHlCQUFBO0FBUWhDOztBQUxBO0VBQWlCLG1CQUFBO0FBU2pCOztBQVJBO0VBQWMscUJBQUE7RUFDVixZQUFBO0VBQ0EscUNBQUE7QUFZSjs7QUFYSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQWNSOztBQVpJO0VBQVksK0JBQUE7RUFBZ0Msb0JBQUE7RUFBcUIsV0FBQTtFQUFXLG9CQUFBO0VBQUEsdUJBQUE7RUFBdUIsWUFBQTtFQUMvRixlQUFBO0FBb0JSIiwiZmlsZSI6Im9yZGVyZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMXsgICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA2MHB4IGF1dG8gMDtcbn1cbi5vcmRlclBEaXZ7ICAgIGZvbnQtc2l6ZTogMTNweDtcblxufVxuLm9yZGVyUERpdjF7ICAgIGZvbnQtc2l6ZTogMTJweDtjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xuXG59XG4ub3JkZXJQRGl2MnsgICAgZm9udC1zaXplOiAxNnB4O2NvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XG5cbn1cbi5tYXJnaW4xMERpdnsgICAgbWFyZ2luLWJvdHRvbTogMTBweDt9XG5pb24tc2VhcmNoYmFyey0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDdweCAycHggI0Q2RDFEMTt9XG4gICAgLmJ1dHRfaW9ue1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgLmlvbmljX2J0bjF7LS1iYWNrZ3JvdW5kOnZhcigtLWhlYWRlckNvbG9yKTstLWJvcmRlci1yYWRpdXM6MTRweDt3aWR0aDoxMDAlO3RleHQtdHJhbnNmb3JtOmluaXRpYWw7aGVpZ2h0OjMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDt9Il19 */";
      /***/
    },

    /***/
    47674: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"end\">\n        <a *ngIf=\"zoomData?.flag==10 && (zoomData?.award_to==loginUserData?.employee_id)\" href=\"{{zoomData?.certificate_image}}\" download>\n          <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        </a>\n  \n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"dismiss()\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- [fulscreen]=\"true\" -->\n<ion-content  class=\"imageZoomPage fullscreen\">\n  <div class=\"zoom-box\">\n    <ion-slides pager=\"false\" #slides [options]=\"slideOpts\"  >\n      <ion-slide >\n        <div class=\"swiper-zoom-container\">\n          <img *ngIf=\"zoomData?.flag!=10\" class=\"card-img\" src=\"{{zoomData}}\" onerror=\"this.src='./assets/error.jpg'\" >\n          <img *ngIf=\"zoomData?.flag==10\" class=\"card-img\" src=\"{{zoomData?.certificate_image}}\" onerror=\"this.src='./assets/error.jpg'\" >\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    40983: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{apiDetails?.item?.name}}&nbsp;Orders</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-padding\">\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol ion-padding borderRediDiv quick widthtotalDiv\">\n        <ion-searchbar placeholder=\"Search Customer\"  [(ngModel)]=\"searchString\" (ionChange)=\"searchCustomer($event)\"></ion-searchbar>\n      <ion-row>\n        <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"6\">\n         <ion-item lines=\"none\">\n           <!-- <ion-label position=\"stacked\">Change Year</ion-label> -->\n             <ion-datetime [(ngModel)] = \"month\" displayFormat=\"MMMM\" placeholder=\"Month\" (ionChange)=\"changeData($event)\"></ion-datetime>\n             <ion-icon name=\"chevron-down-outline\"></ion-icon>\n           </ion-item>\n        </ion-col>\n        <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"6\" class=\"autoMargin\">\n            <!-- <ion-label position=\"stacked\">Customer Type &nbsp;<ion-icon name=\"chevron-down-outline\"></ion-icon></ion-label> -->\n            <ion-select  placeholder=\"Customer Type\"  (ionChange)=\"checkValue($event)\" >\n              <ion-select-option *ngFor = \"let id of listType\" [value]=\"id?.value\" >{{id?.key}}</ion-select-option>\n            </ion-select>\n            <!-- </ion-item> -->\n         </ion-col>\n      </ion-row>\n      <div class=\"ion-padding borderRediDiv borderDiv margin10Div\" *ngFor = \"let item of listData\">\n        <ion-row>\n          <ion-col [size]=\"7\" size-sm=\"7\" size-md=\"9\" size-lg=\"9\">\n            <p class=\"ion-no-margin orderPDiv\">{{item?.full_name}}</p>\n            <p class=\"ion-no-margin orderPDiv\">{{item?.type_name}}</p>\n            <p class=\"ion-no-margin orderPDiv\">{{item?.contact}}</p>\n          </ion-col>\n          <ion-col [size]=\"5\" size-sm=\"5\" size-md=\"3\" size-lg=\"3\" class=\"ion-text-right\">\n            <p class=\"ion-no-margin orderPDiv\">{{item?.order_id_str}}</p>\n            <p class=\"ion-no-margin orderPDiv\">{{item?.buy_date}}</p>\n            <p class=\"ion-no-margin orderPDiv\">{{item?.tat_days}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\">\n            <p class=\"ion-no-margin orderPDiv1\">{{item?.good_str}}</p>\n            <p class=\"ion-no-margin orderPDiv1\">{{item?.points_str}}</p>\n          </ion-col>\n          <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"5\" size-lg=\"5\" >\n            <ion-row>\n              <ion-col *ngFor=\"let kick of item?.footer_data\">\n                <ion-button *ngIf=\"kick?.btn_applicable==true\" color=\"danger ionic_btn1 btnDiv\" \n                tappable (click)=\"verifyFun(item, kick)\">{{kick?.btn_text}}</ion-button>\n              </ion-col>\n            </ion-row>\n           \n          </ion-col>\n          <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"3\">\n            <p *ngIf=\"item?.btn_applicable==true\" class=\"ion-no-margin orderPDiv2 ion-text-right\" tappable (click)=\"gotoViewOrder(item)\">{{item?.btn_text}}</p>\n        <!-- <p *ngIf=\"item.btn_applicable==true\" color=\"danger btnDiv\" \n        tappable (click)=\"gotoViewOrder(item)\">{{item?.btn_text}}</p> -->\n      </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col [size]=\"4\" size-sm=\"4\" size-md=\"4\" size-lg=\"4\">\n            <p class=\"ion-no-margin orderPDiv\">{{item?.tracking_id}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf=\"errorMessage!=''\"><p class=\"ion-text-center\">{{errorMessage}}</p></div>\n      <div *ngIf=\"errorImage!=''\">\n        <img [src]=\"errorImage\"/>\n      </div>\n      <ion-infinite-scroll *ngIf=\"errorMessage==''\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      </ion-col>\n      </ion-row>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_orderModule_orderdetails_orderdetails_module_ts-es5.js.map