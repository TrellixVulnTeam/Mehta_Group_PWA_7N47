(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_RegistrationModule_mobile_mobile_module_ts"], {
    /***/
    33421: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MobilePageRoutingModule": function MobilePageRoutingModule() {
          return (
            /* binding */
            _MobilePageRoutingModule
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


      var _mobile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mobile.page */
      61023);

      var routes = [{
        path: '',
        component: _mobile_page__WEBPACK_IMPORTED_MODULE_0__.MobilePage
      }];

      var _MobilePageRoutingModule = function MobilePageRoutingModule() {
        _classCallCheck(this, MobilePageRoutingModule);
      };

      _MobilePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MobilePageRoutingModule);
      /***/
    },

    /***/
    67150: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MobilePageModule": function MobilePageModule() {
          return (
            /* binding */
            _MobilePageModule
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


      var _mobile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mobile-routing.module */
      33421);
      /* harmony import */


      var _mobile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mobile.page */
      61023);

      var _MobilePageModule = function MobilePageModule() {
        _classCallCheck(this, MobilePageModule);
      };

      _MobilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mobile_routing_module__WEBPACK_IMPORTED_MODULE_0__.MobilePageRoutingModule],
        declarations: [_mobile_page__WEBPACK_IMPORTED_MODULE_1__.MobilePage]
      })], _MobilePageModule);
      /***/
    },

    /***/
    61023: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MobilePage": function MobilePage() {
          return (
            /* binding */
            _MobilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_mobile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mobile.page.html */
      88368);
      /* harmony import */


      var _mobile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mobile.page.scss */
      71963);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      18345);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/assets/constant */
      56544);

      var _MobilePage = /*#__PURE__*/function () {
        function MobilePage(route, platform, apiService, zone, sendData, localStorage, navCntrl) {
          _classCallCheck(this, MobilePage);

          this.route = route;
          this.platform = platform;
          this.apiService = apiService;
          this.zone = zone;
          this.sendData = sendData;
          this.localStorage = localStorage;
          this.navCntrl = navCntrl;
          this.phonenumber = '';
          console.log('ssssssss:', this.loginPageData);
          this.itemss = this.sendData.itemDetails;
          platform.ready().then(function () {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
          });
        }

        _createClass(MobilePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.loginPageData = this.sendData.loginKey;

            if (this.loginPageData.type == 'Register') {
              this.maintanceData = this.sendData.alldata.otp_screen_data;
              console.log('gggg: ', this.maintanceData);
            } else {
              console.log('data comming from login page', this.loginPageData);
              this.localStorage.getStorage().then(function (storedData) {
                _this.maintanceData = storedData.maintainanceData;
                console.log('ffff: ', _this.maintanceData);
                console.log('localStorage data from maintance', storedData);
              });
            }
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {//this.sendData.alldata.otp_screen_data = this.maintanceData;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "LoginCall",
          value: function LoginCall(phonenumber, sms) {
            var _this2 = this;

            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              var apiKey = {
                contact: phonenumber,
                send_type: _this2.loginPageData.type,
                message_type: sms
              };
              console.log('login data response', apiKey);

              _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.MobileSubmitUrl, apiKey).subscribe(function (result) {
                console.log('login data response', result);

                _this2.apiService.presentLoadingClose();

                if (result.success == 1) {
                  _this2.mobileSubmitData = result;
                  var object = {
                    apiData: _this2.mobileSubmitData,
                    phonenumber: phonenumber,
                    send_type: _this2.loginPageData.type,
                    requestPage: _this2.loginPageData.requestPage
                  };
                  _this2.sendData.alldata = object;
                  _this2.phonenumber = '';
                  console.log('login data response', _this2.sendData);

                  _this2.apiService.showToastMessage(result.message, 'top', 3000, 'greenBg');

                  _this2.sendData.itemDetails = _this2.itemss;

                  _this2.route.navigate(['/otpverify']);
                } else {
                  _this2.phonenumber = '';

                  _this2.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this2.apiService.presentLoadingClose();

                _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "termsShow",
          value: function termsShow() {
            var _this3 = this;

            this.zone.run(function () {
              _this3.route.navigate(['/terms-conditions']);
            });
          }
        }, {
          key: "privacyShow",
          value: function privacyShow() {
            var _this4 = this;

            console.log('1');
            this.zone.run(function () {
              _this4.route.navigate(['/privacy-policy']);
            });
          }
        }, {
          key: "gotoLogn",
          value: function gotoLogn() {
            var _this5 = this;

            this.zone.run(function () {
              _this5.route.navigate(['/login']);
            });
          }
        }, {
          key: "gotoHomeTab",
          value: function gotoHomeTab() {
            var _this6 = this;

            this.zone.run(function () {
              console.log('request page==', _this6.loginPageData);

              if (_this6.loginPageData.requestPage == 'officer') {
                console.log('1');
                _this6.apiService.isSelected = '';

                _this6.navCntrl.back(); // this.route.navigateByUrl("/tabs/home",{replaceUrl:true});

              } else {
                _this6.apiService.isSelected = 'true';

                _this6.navCntrl.back(); // this.route.navigateByUrl('/tabs/customer-allocation');

              }

              console.log('this.apiService.isSelected000000', _this6.apiService.isSelected);
            }); // alert(this.apiService.isSelected)
          }
        }, {
          key: "UpCall",
          value: function UpCall(phonenumber, sms) {
            var _this7 = this;

            this.zone.run(function () {
              var apiKey = {
                contact: phonenumber,
                send_type: 'Existing',
                message_type: sms
              };
              console.log('login data response', apiKey);

              _this7.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.ExistingUrl, apiKey).subscribe(function (result) {
                console.log('login data response', result);

                if (result.success == 1) {
                  _this7.sendData.itemDetails = result;
                  _this7.sendData.alldata = apiKey;
                  _this7.sendData.item = _this7.itemss;
                  _this7.sendData.loginKey = _this7.loginPageData;

                  _this7.route.navigate(['/select-dealer']);
                } else {
                  _this7.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this7.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }]);

        return MobilePage;
      }();

      _MobilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }];
      };

      _MobilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-mobile',
        template: _raw_loader_mobile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mobile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MobilePage);
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
          var _this8 = this;

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
            _this8.loginUserData = result.allStoreData;
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
    71963: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".col {\n  text-align: end;\n}\n\n.para {\n  font-size: small;\n}\n\n.banner_bg {\n  left: 0;\n  width: 100%;\n  border-radius: 10px;\n  display: block;\n}\n\nion-input {\n  border-bottom: 1px solid rgba(84, 83, 83, 0.6) !important;\n  color: var(--text-light2);\n  font-size: 18px !important;\n  font-weight: 500 !important;\n}\n\np span {\n  color: var(--headerColor);\n}\n\n.btnCenter {\n  display: block;\n  margin: auto;\n  width: 100%;\n  color: white;\n}\n\n.small {\n  width: 120px;\n  text-align: right;\n  margin-top: -10px;\n}\n\n.small_p {\n  width: 125px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSyxlQUFBO0FBRUw7O0FBREE7RUFBTyxnQkFBQTtBQUtQOztBQUpBO0VBQVksT0FBQTtFQUFRLFdBQUE7RUFBWSxtQkFBQTtFQUFvQixjQUFBO0FBV3BEOztBQVZBO0VBQVkseURBQUE7RUFBeUQseUJBQUE7RUFDakUsMEJBQUE7RUFBMkIsMkJBQUE7QUFnQi9COztBQWZDO0VBQU8seUJBQUE7QUFtQlI7O0FBbEJBO0VBQVcsY0FBQTtFQUFlLFlBQUE7RUFBYyxXQUFBO0VBQVksWUFBQTtBQXlCcEQ7O0FBeEJBO0VBQU8sWUFBQTtFQUFlLGlCQUFBO0VBQW1CLGlCQUFBO0FBOEJ6Qzs7QUE3QkE7RUFBUyxZQUFBO0FBaUNUIiwiZmlsZSI6Im1vYmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29se3RleHQtYWxpZ246IGVuZDt9XG4ucGFyYXsgZm9udC1zaXplOiBzbWFsbDt9XG4uYmFubmVyX2JnIHtsZWZ0OiAwO3dpZHRoOiAxMDAlO2JvcmRlci1yYWRpdXM6IDEwcHg7ZGlzcGxheTogYmxvY2s7fSAgIFxuaW9uLWlucHV0IHsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSg4NCwgODMsIDgzLCAwLjYpICFpbXBvcnRhbnQ7Y29sb3I6dmFyKC0tdGV4dC1saWdodDIpO1xuICAgIGZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7IGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDsgfSBcbiBwIHNwYW57Y29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTt9XG4uYnRuQ2VudGVye2Rpc3BsYXk6IGJsb2NrO21hcmdpbjogYXV0bzsgd2lkdGg6MTAwJTsgY29sb3I6IHdoaXRlO31cbi5zbWFsbHt3aWR0aDogMTIwcHg7ICB0ZXh0LWFsaWduOiByaWdodDsgbWFyZ2luLXRvcDotMTBweDt9XG4uc21hbGxfcHt3aWR0aDogMTI1cHg7fSJdfQ== */";
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
    88368: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content [ngClass]=\"{'content-bg':  platform.width()<740}\">\n  <ion-row class=\"ion-justify-content-center abc1\">\n    <ion-col size-xl=\"4\" size-md=\"8\" size-xs=\"12\" [ngClass]=\"{'boundary':  platform.width()>740}\">\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <img src = \"assets/icon/logo.svg\" class=\"small_p\">\n          </ion-col>\n          <ion-col class=\"col\">\n            <img src = \"assets/icon/abc.png\" class=\"small\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row class=\"ion-padding\">\n        <ion-col >\n          <p class=\"ion-no-margin\" [innerHTML]=\"maintanceData?.mobile_string\"></p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-padding\">\n        <ion-col [size]=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\" >\n          <ion-input maxlength=\"0\" type=\"tel\" [(ngModel)]=\"phone_code\" read-only>+91</ion-input>\n          </ion-col>\n          <ion-col [size]=\"10\" size-sm=\"10\" size-md=\"10\" size-lg=\"10\">\n              <ion-input type=\"tel\" [(ngModel)]=\"phonenumber\" pattern=\"^[1-9][0-9]*$\" maxlength=\"10\"></ion-input>\n          </ion-col>\n      </ion-row>\n   \n      <br>  <br>\n      <ion-row *ngIf=\"loginPageData?.type!='Register'\" class=\"ion-padding\">\n        <ion-col [size]=\"1\" class=\"autoMargin\"> <ion-checkbox color=\"danger\" [(ngModel)]=\"isChecked\"></ion-checkbox></ion-col>\n        <ion-col [size]=\"11\">\n        <p class = \"para ion-no-margin\" >By continuing you agree to the \n          <span tappable (click)=\"termsShow()\">Terms of Use</span> and \n          <span tappable (click)=\"privacyShow()\">Privacy Policy.</span></p></ion-col>\n      </ion-row>\n\n      <br>\n      <ion-row>\n        <ion-col *ngIf=\"loginPageData?.type =='login' || loginPageData?.type =='newRegister'\">\n          <ion-button tappable (click)=\"gotoLogn()\" class=\"ionic_btn btnCenter\">Back</ion-button></ion-col>\n        <ion-col *ngIf=\"loginPageData?.type =='Register' || loginPageData?.type =='Existing'\"> \n          <ion-button tappable (click)=\"gotoHomeTab()\" class=\"ionic_btn btnCenter\">Back</ion-button></ion-col>\n        <ion-col>\n          <ion-button *ngIf=\"loginPageData?.type =='login' || loginPageData?.type =='newRegister'\" [disabled]=\"phonenumber?.trim()=='' || !isChecked\" \n            tappable (click)=\"LoginCall(phonenumber,'sms')\" class=\"ionic_btn btnCenter\">{{maintanceData?.btn_text}}</ion-button>\n          <ion-button *ngIf=\"loginPageData?.type !='Register' && loginPageData?.type =='Existing'\"\n            [disabled]=\"phonenumber?.trim()==''\"   tappable (click)=\"UpCall(phonenumber,'sms')\" class=\"ionic_btn btnCenter\">Continue</ion-button>\n          <ion-button *ngIf=\"loginPageData?.type == 'Register' && loginPageData?.type != 'Existing'\"\n            [disabled]=\"phonenumber?.trim()==''\"   tappable (click)=\"LoginCall(phonenumber,'sms')\" class=\"ionic_btn btnCenter\">Continue</ion-button>    \n        </ion-col>\n      </ion-row>\n \n  \n      <br>\n      <div class = \"ion-text-center\" [ngClass]=\"{'banner': platform.width()<740}\">\n        <img src=\"./assets/icon/Design 1.png\" class =\"banner_bg\">\n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";
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
//# sourceMappingURL=src_app_RegistrationModule_mobile_mobile_module_ts-es5.js.map