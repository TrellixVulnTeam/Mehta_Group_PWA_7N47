(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_dealerModule_allocate-point-form_allocate-point-form_module_ts"], {
    /***/
    86393: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllocatePointFormPageRoutingModule": function AllocatePointFormPageRoutingModule() {
          return (
            /* binding */
            _AllocatePointFormPageRoutingModule
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


      var _allocate_point_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allocate-point-form.page */
      31061);

      var routes = [{
        path: '',
        component: _allocate_point_form_page__WEBPACK_IMPORTED_MODULE_0__.AllocatePointFormPage
      }];

      var _AllocatePointFormPageRoutingModule = function AllocatePointFormPageRoutingModule() {
        _classCallCheck(this, AllocatePointFormPageRoutingModule);
      };

      _AllocatePointFormPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AllocatePointFormPageRoutingModule);
      /***/
    },

    /***/
    7926: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllocatePointFormPageModule": function AllocatePointFormPageModule() {
          return (
            /* binding */
            _AllocatePointFormPageModule
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


      var _allocate_point_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allocate-point-form-routing.module */
      86393);
      /* harmony import */


      var _allocate_point_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allocate-point-form.page */
      31061);

      var _AllocatePointFormPageModule = function AllocatePointFormPageModule() {
        _classCallCheck(this, AllocatePointFormPageModule);
      };

      _AllocatePointFormPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _allocate_point_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllocatePointFormPageRoutingModule],
        declarations: [_allocate_point_form_page__WEBPACK_IMPORTED_MODULE_1__.AllocatePointFormPage]
      })], _AllocatePointFormPageModule);
      /***/
    },

    /***/
    31061: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllocatePointFormPage": function AllocatePointFormPage() {
          return (
            /* binding */
            _AllocatePointFormPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_allocate_point_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./allocate-point-form.page.html */
      43679);
      /* harmony import */


      var _allocate_point_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allocate-point-form.page.scss */
      28197);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/assets/constant */
      56544); // import{RedeemotpPage} from '../../redeemotp/redeemotp.page';


      var _AllocatePointFormPage = /*#__PURE__*/function () {
        function AllocatePointFormPage(apiService, zone, loadingController, navCtrl, sendData, route, modalCtrl) {
          _classCallCheck(this, AllocatePointFormPage);

          this.apiService = apiService;
          this.zone = zone;
          this.loadingController = loadingController;
          this.navCtrl = navCtrl;
          this.sendData = sendData;
          this.route = route;
          this.modalCtrl = modalCtrl;
          this.bagsCount = "";
          this.pointAllocatedRes = 0;
          this.btnText = "Submit";
          this.btnDisable = false;
          this.maxBagLimit = 0;
          this.Invoice = '';
          this.dealerHomeData = this.sendData.alldata;
          this.maxBagLimit = parseInt(this.sendData.alldata.max_bag_limit);
          console.log('previousePageData==> ', this.dealerHomeData);
          console.log("bag Count==", this.bagsCount);
        }

        _createClass(AllocatePointFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchmonthData();
          }
        }, {
          key: "checkBagCount",
          value: function checkBagCount(ev) {
            console.log('bageCount', ev);

            if (parseInt(ev.detail.value) > this.dealerHomeData.max_bag_limit) {
              this.apiService.showToastMessage('Maximum' + ' ' + this.dealerHomeData.max_bag_limit + ' ' + 'bags allowed', 'top', 2000, 'redBg');
            }
          }
        }, {
          key: "gotoHomeTab",
          value: function gotoHomeTab() {
            this.apiService.isSelected = 'true';
            console.log("this.apiService.isSelected000000", this.apiService.isSelected); // alert(this.apiService.isSelected)
          }
        }, {
          key: "fetchmonthData",
          value: function fetchmonthData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var apiKey;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context.sent;
                      _context.next = 5;
                      return this.loading.present();

                    case 5:
                      apiKey = {
                        "search_str": "",
                        "request_type": "brandAllocateMonth",
                        "request_user_type": this.dealerHomeData.employee_type
                      };
                      this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.searchApiUrl, apiKey).subscribe(function (result) {
                        console.log('allocatedMonthData', result);

                        _this.loading.dismiss();

                        if (result.success == 1) {
                          _this.budgetMonth = result.data;
                        } else {
                          _this.apiService.showToastMessage(JSON.stringify(result.message), 'top', 3000, 'redBg');

                          _this.navCtrl.pop();
                        }
                      }, function (err) {
                        _this.loading.dismiss();

                        _this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "fetchData",
          value: function fetchData(productName, count) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.zone.run(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var _this3 = this;

                          var proName, apiKey;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return productName;

                                case 2:
                                  proName = _context2.sent;
                                  apiKey = {
                                    "search_str": "",
                                    "request_type": proName,
                                    "request_user_type": this.dealerHomeData.employee_type,
                                    'dealer_budget_id': this.budgetId
                                  };
                                  this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.searchApiUrl, apiKey).subscribe(function (result) {
                                    if (count == _this3.dataList.length - 1) {
                                      _this3.loading.dismiss();
                                    }

                                    if (result.success == 1) {
                                      if (productName == 'product') {
                                        _this3.productList = result.data;
                                        console.log('productlist==>', _this3.productList);
                                      } else if (productName == 'brand') {
                                        _this3.brandList = result.data;
                                        console.log('brandList==>', _this3.brandList);
                                      }
                                    } else {
                                      _this3.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                                    }
                                  }, function (err) {
                                    _this3.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');

                                    if (count == _this3.dataList.length - 1) {
                                      _this3.loading.dismiss();
                                    }
                                  });

                                case 5:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "checkBrandValue",
          value: function checkBrandValue(ev, data) {
            console.log('ev', ev);
            console.log('brand data ', data);
            this.brandId = data.auto_id;
          }
        }, {
          key: "checkProdValue",
          value: function checkProdValue(ev, data) {
            console.log('ev', ev);
            console.log('prouct data ', data);
            this.prodId = data.auto_id;
            this.pointAllocatedRes = data.points_allocated;
          }
        }, {
          key: "checkBudgetValue",
          value: function checkBudgetValue(ev, data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var i;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log('ev', ev);
                      console.log('prouct data ', data);
                      this.minDate = data.min_date;
                      this.maxDate = data.max_date;
                      this.budgetId = data.auto_id;
                      this.dataList = ['product', 'brand'];
                      i = 0;

                    case 7:
                      if (!(i < this.dataList.length)) {
                        _context4.next = 18;
                        break;
                      }

                      this.fetchData(this.dataList[i], i);

                      if (!(i == 0)) {
                        _context4.next = 15;
                        break;
                      }

                      _context4.next = 12;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 12:
                      this.loading = _context4.sent;
                      _context4.next = 15;
                      return this.loading.present();

                    case 15:
                      i++;
                      _context4.next = 7;
                      break;

                    case 18:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "gotoSubmit",
          value: function gotoSubmit() {
            var _this4 = this;

            this.zone.run(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var _this5 = this;

                var apiKey;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        this.btnText = 'Please wait...';
                        this.btnDisable = true;
                        apiKey = {
                          "allocate_to": this.dealerHomeData.customer_id,
                          "brand_id": this.brandId,
                          "product_id": this.prodId,
                          "sell_date": this.myDate,
                          "bag_number": this.bagsCount,
                          'budget_id': this.budgetId,
                          "invoice_number": this.Invoice
                        };
                        this.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.pointAllocateApiUrl, apiKey).subscribe(function (result) {
                          _this5.btnText = 'Submit';
                          _this5.btnDisable = false;

                          if (result.success == 1) {
                            // this.brandId=''
                            //  this.budMonthOpt='';
                            _this5.myDate = ''; // this.budgetMonth=''
                            //  this.budMonthOpt='';
                            // this.productList=[];
                            // this.fetchmonthData();
                            //  this.budgetMonth='';

                            _this5.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');

                            _this5.bagsCount = ''; //  this.route.navigate(['/tabs/customer-allocation']);
                            // window.history.go(-1);
                            // this.navCtrl.navigateBack('/customer-allocation');
                          } else {
                            _this5.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                          }
                        }, function (err) {
                          _this5.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                        });

                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            });
          }
        }]);

        return AllocatePointFormPage;
      }();

      _AllocatePointFormPage.ctorParameters = function () {
        return [{
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }];
      };

      _AllocatePointFormPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-allocate-point-form',
        template: _raw_loader_allocate_point_form_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_allocate_point_form_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AllocatePointFormPage);
      /***/
    },

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
          var _this6 = this;

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
            _this6.loginUserData = result.allStoreData;
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
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
                      modal = _context6.sent;
                      _context6.next = 5;
                      return modal.present();

                    case 5:
                      return _context6.abrupt("return", _context6.sent);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
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
    28197: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p, ion-label {\n  color: var(--headerColor) !important;\n}\n\np.totalPoint {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.container {\n  padding: 1% 5%;\n}\n\n.whiteBg {\n  background-color: #fff;\n  border: 1px solid #cdcdcd;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 10px;\n  box-shadow: 1px 1px 16px 1px #cdcdcd;\n}\n\n.redbgDiv {\n  --background: linear-gradient(195deg, #bb2929 57%, var(--headerColor) 33%) !important;\n  border-radius: 7px;\n}\n\n.fullNamediv {\n  color: white !important;\n  font-weight: bold;\n  margin: 6px 0px 6px 0px;\n}\n\n.BTmmm {\n  width: 60% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbG9jYXRlLXBvaW50LWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEsb0NBQUE7QUFFYjs7QUFEQTtFQUFhLGVBQUE7RUFBZ0IsaUJBQUE7QUFNN0I7O0FBTEE7RUFBWSxjQUFBO0FBU1o7O0FBUkE7RUFBUyxzQkFBQTtFQUFzQix5QkFBQTtFQUF5QixtQkFBQTtFQUFtQixnQkFBQTtFQUFnQixhQUFBO0VBQWEsb0NBQUE7QUFpQnhHOztBQWhCQTtFQUFVLHFGQUFBO0VBQXNGLGtCQUFBO0FBcUJoRzs7QUFwQkE7RUFBYSx1QkFBQTtFQUF3QixpQkFBQTtFQUFrQix1QkFBQTtBQTBCdkQ7O0FBekJBO0VBQU8scUJBQUE7QUE2QlAiLCJmaWxlIjoiYWxsb2NhdGUtcG9pbnQtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLCBpb24tbGFiZWx7Y29sb3I6IHZhcigtLWhlYWRlckNvbG9yKSAhaW1wb3J0YW50O31cbnAudG90YWxQb2ludHtmb250LXNpemU6IDEycHg7Zm9udC13ZWlnaHQ6IGJvbGQ7fVxuLmNvbnRhaW5lcnsgcGFkZGluZzogMSUgNSU7fVxuLndoaXRlQmd7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2NkY2RjZDtib3JkZXItcmFkaXVzOjEwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MTBweDtib3gtc2hhZG93OjFweCAxcHggMTZweCAxcHggI2NkY2RjZDt9XG4ucmVkYmdEaXZ7LS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTk1ZGVnLCAjYmIyOTI5IDU3JSwgdmFyKC0taGVhZGVyQ29sb3IpIDMzJSkgIWltcG9ydGFudDtib3JkZXItcmFkaXVzOiA3cHg7fVxuLmZ1bGxOYW1lZGl2e2NvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OiBib2xkO21hcmdpbjogNnB4IDBweCA2cHggMHB4O31cbi5CVG1tbXt3aWR0aDogNjAlICFpbXBvcnRhbnQ7fSJdfQ== */";
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
    43679: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Allocate Bags</ion-title>\n    <ion-buttons slot=\"start\" tappable (click)=\"gotoHomeTab()\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col [size]=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\" push-lg=\"2\" push-md=\"2\" class=\"whiteCol ion-padding\">\n      <ion-list>\n        <ion-item lines=\"none\" class=redbgDiv>\n          <p  class=\"fullNamediv\">{{dealerHomeData?.full_name}},&nbsp;{{dealerHomeData?.contact}}</p>\n        </ion-item>\n        <ion-item *ngIf=\"budgetMonth && budgetMonth?.length>=1\">\n          <ion-label position=\"stacked\">Month</ion-label>\n          <ion-select [(ngModel)]=\"budMonthOpt\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"checkBudgetValue($event,budMonthOpt )\"  interface=\"popover\">\n            <ion-select-option *ngFor=\"let budMonthOpt of budgetMonth\" [value]=\"budMonthOpt\" class=\"w100\">{{budMonthOpt?.budget_month}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"brandList && brandList?.length>=1\">\n          <ion-label position=\"stacked\">Brands</ion-label>\n          <ion-select [(ngModel)]=\"brandOption\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"checkBrandValue($event,brandOption )\"  interface=\"popover\">\n            <ion-select-option *ngFor=\"let brandOption of brandList\" [value]=\"brandOption\" class=\"w100\">{{brandOption?.brand_name}} </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n  \n  \n        <ion-item  *ngIf=\"productList && productList?.length>=1\">\n          <ion-label position=\"stacked\">Product</ion-label>\n          <ion-select  [(ngModel)]=\"productOption\"  okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"checkProdValue($event,productOption )\"  interface=\"popover\">\n            <ion-select-option *ngFor=\"let productOption of productList\" [value]=\"productOption\" class=\"w100\">  {{productOption?.product_name}} </ion-select-option>\n          </ion-select>\n        </ion-item>\n  <!-- {{minmonth}} -->\n        <ion-item *ngIf=\"brandList && brandList?.length>=1\">\n          <ion-label position=\"stacked\">Date</ion-label>\n          <ion-datetime placeholder=\"Select Allocation Date\"  min={{minDate}} max={{maxDate}} \n          displayFormat=\"MMM/DD/YYYY\" [(ngModel)]=\"myDate\"></ion-datetime>\n          <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" >Invoice No.</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"Invoice\" ></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"stacked\" >No. of Bags</ion-label>\n          <!-- <ion-input type=\"tel\" [(ngModel)]=\"bagsCount\" ></ion-input> -->\n          <ion-input type=\"tel\" [(ngModel)]=\"bagsCount\" (ionChange)=\"checkBagCount($event)\"></ion-input>\n        </ion-item>\n        <!-- {{dealerHomeData?.max_bag_limit}} -->\n        <!-- <ion-item *ngIf=\"bagsCount>0\" lines=\"none\">\n          <p class=\"totalPoint\">Points: {{bagsCount}}</p>\n          <p class=\"totalPoint\">Points: {{bagsCount*pointAllocatedRes}}</p>\n        </ion-item> -->\n     \n      </ion-list>\n  <br>\n  <ion-row >\n   <ion-col  class=\" ion-text-center\">\n   <ion-button [disabled]=\"!brandOption || !productOption || bagsCount<=0\n     || btnDisable==true  || !myDate || maxBagLimit<bagsCount\"  class=\"ionic_btn BTmmm\" tappable (click)=\"gotoSubmit()\">{{btnText}}</ion-button>\n   <!-- || bagsCount>maxBagLimit |||| bagsCount<=0-->\n   <!-- bagsCount>0 -->\n  <br>\n  <br>\n    </ion-col>\n    </ion-row>\n    </ion-col>\n  </ion-row>\n    <!-- <div class=\"whiteBg\"> -->\n  \n<!-- </div> -->\n</ion-content>\n";
      /***/
    },

    /***/
    47674: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"end\">\n        <a *ngIf=\"zoomData?.flag==10 && (zoomData?.award_to==loginUserData?.employee_id)\" href=\"{{zoomData?.certificate_image}}\" download>\n          <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        </a>\n  \n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-icon name=\"close\" slot=\"end\" (click)=\"dismiss()\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- [fulscreen]=\"true\" -->\n<ion-content  class=\"imageZoomPage fullscreen\">\n  <div class=\"zoom-box\">\n    <ion-slides pager=\"false\" #slides [options]=\"slideOpts\"  >\n      <ion-slide >\n        <div class=\"swiper-zoom-container\">\n          <img *ngIf=\"zoomData?.flag!=10\" class=\"card-img\" src=\"{{zoomData}}\" onerror=\"this.src='./assets/error.jpg'\" >\n          <img *ngIf=\"zoomData?.flag==10\" class=\"card-img\" src=\"{{zoomData?.certificate_image}}\" onerror=\"this.src='./assets/error.jpg'\" >\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_dealerModule_allocate-point-form_allocate-point-form_module_ts-es5.js.map