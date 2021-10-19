(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_dealerModule_dealer-list_dealer-list_module_ts"], {
    /***/
    46098: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DealerListPageRoutingModule": function DealerListPageRoutingModule() {
          return (
            /* binding */
            _DealerListPageRoutingModule
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


      var _dealer_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dealer-list.page */
      20483);

      var routes = [{
        path: '',
        component: _dealer_list_page__WEBPACK_IMPORTED_MODULE_0__.DealerListPage
      }];

      var _DealerListPageRoutingModule = function DealerListPageRoutingModule() {
        _classCallCheck(this, DealerListPageRoutingModule);
      };

      _DealerListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DealerListPageRoutingModule);
      /***/
    },

    /***/
    35869: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DealerListPageModule": function DealerListPageModule() {
          return (
            /* binding */
            _DealerListPageModule
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


      var _dealer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dealer-list-routing.module */
      46098);
      /* harmony import */


      var _dealer_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dealer-list.page */
      20483);

      var _DealerListPageModule = function DealerListPageModule() {
        _classCallCheck(this, DealerListPageModule);
      };

      _DealerListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _dealer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.DealerListPageRoutingModule],
        declarations: [_dealer_list_page__WEBPACK_IMPORTED_MODULE_1__.DealerListPage]
      })], _DealerListPageModule);
      /***/
    },

    /***/
    20483: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DealerListPage": function DealerListPage() {
          return (
            /* binding */
            _DealerListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_dealer_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./dealer-list.page.html */
      14058);
      /* harmony import */


      var _dealer_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dealer-list.page.scss */
      38121);
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

      var _DealerListPage = /*#__PURE__*/function () {
        function DealerListPage(route, platform, zone, apiService, sendData, localStorage, navController) {
          _classCallCheck(this, DealerListPage);

          this.route = route;
          this.platform = platform;
          this.zone = zone;
          this.apiService = apiService;
          this.sendData = sendData;
          this.localStorage = localStorage;
          this.navController = navController;
          this.userImg = "";
          this.infiniteScroll_call = false;
          this.value = 0;
          platform.ready().then(function () {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
          }); //  this.allStored = this.sendData.alldata;
        }

        _createClass(DealerListPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// this.dealerListShow();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.sendData.alldata != undefined) {
              if (this.sendData.alldata.my == 'officer') {
                this.allStored = this.sendData.alldata;
                this.dealerListShow();
              } else {
                this.localStorage.getStorage().then(function (storedData) {
                  _this.allStored = storedData.allStoreData;
                  console.log('stored data in dealer list page', _this.allStored);

                  _this.dealerListShow();
                });
              }
            } else {
              this.localStorage.getStorage().then(function (storedData) {
                _this.allStored = storedData.allStoreData;
                console.log('stored data in dealer list page', _this.allStored);

                _this.dealerListShow();
              });
            }
          }
        }, {
          key: "close",
          value: function close() {
            if (this.sendData.alldata != undefined) {
              if (this.sendData.alldata.my == 'officer') {
                this.route.navigate(['./user-list']);
              } else {
                this.route.navigate(['./tabs/home']);
              }
            } else {
              this.route.navigate(['./tabs/home']);
            } // this.navController.back();
            // this.modalCtrl.dismiss();

          }
        }, {
          key: "dealerListShow",
          value: function dealerListShow() {
            var _this2 = this;

            this.apiService.presentLoadingDefault();
            this.zone.run(function () {
              var apiKey = {
                "request_user_type": _this2.allStored.employee_type,
                "search_str": "",
                "value": _this2.value,
                "request_for": _this2.allStored.user_id,
                "request_type": "list"
              };
              console.log('dealerListShoow::', apiKey);

              _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__.URLS.getUserList, apiKey).subscribe(function (result) {
                _this2.apiService.presentLoadingClose();

                console.log("UserListUrl: ", result);
                _this2.listHeader = result.tab_data;
                _this2.header_title = result.header_title;

                if (result.success == 1) {
                  if (_this2.dealerList == undefined) {
                    _this2.dealerList = result.data;
                  } else {
                    _this2.dealerList = _this2.dealerList.concat(result.data);
                  }

                  _this2.errorMessage = '';
                } else {
                  _this2.errorMessage = result.message;

                  _this2.apiService.showToastMessage(result.message, top, 2000, "redBg");
                }

                if (_this2.infiniteScroll_call == true) {
                  _this2.stopInfiniteScroll();
                }
              }, function (err) {
                _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 2000, "redBg");
              });
            });
          }
        }, {
          key: "view",
          value: function view(item) {
            // this.sendData.viewProfilId = id.customer_id;
            // this.sendData.viewProfilType = id.employee_type;
            this.sendData.alldata = item;
            this.route.navigate(['./profile-view']); // this.route.navigate(['./customer-details']);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this3 = this;

            this.infiniteScroll_call = true;
            this.infiniteScroll_val = event;
            setTimeout(function () {
              _this3.value = _this3.dealerList.length;

              _this3.dealerListShow();
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
        }]);

        return DealerListPage;
      }();

      _DealerListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }];
      };

      _DealerListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-dealer-list',
        template: _raw_loader_dealer_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dealer_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DealerListPage);
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
          var _this4 = this;

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
            _this4.loginUserData = result.allStoreData;
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
    38121: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h5 {\n  color: #B01D22;\n  font-size: 20px;\n}\n\n.seg {\n  padding: 10px;\n}\n\n.act {\n  text-transform: none;\n  text-transform: initial;\n  background: linear-gradient(195deg, #bb2929 57%, var(--headerColor) 33%) !important;\n  border-radius: 8px;\n  padding: 5px;\n  width: 100%;\n  color: #fff;\n}\n\nhr {\n  width: 100% !important;\n  font-size: 1em !important;\n  border: 0.5px solid gainsboro;\n}\n\n.userImageUpload {\n  border-radius: 50%;\n  border: 2px dotted #b01d22;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.profile_image {\n  width: 70px;\n  height: 70px;\n}\n\n.name {\n  font-size: 15px;\n}\n\n.phone {\n  font-size: 13px;\n}\n\n.view {\n  --background:transparent;\n  color: #b01d22;\n  text-transform: capitalize;\n  --border-radius:20px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.but-div {\n  padding-top: 24px;\n}\n\n.no {\n  font-size: 23px;\n}\n\n.no_text {\n  font-size: 18px;\n}\n\n.container1 {\n  width: 100%;\n}\n\n.bgWalletImage {\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWxlci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQUE7RUFBSyxvQkFBQTtFQUFBLHVCQUFBO0VBQXdCLG1GQUFBO0VBQ3pCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxXQUFBO0VBQVksV0FBQTtBQVFoRDs7QUFQQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQVVKOztBQVJFO0VBRUUsa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFVSjs7QUFSQztFQUNHLFdBQUE7RUFDQSxZQUFBO0FBV0o7O0FBVEM7RUFBTSxlQUFBO0FBYVA7O0FBWkE7RUFBTyxlQUFBO0FBZ0JQOztBQWZBO0VBQU0sd0JBQUE7RUFBeUIsY0FBQTtFQUFjLDBCQUFBO0VBQTBCLG9CQUFBO0VBQXFCLFdBQUE7RUFBVyxlQUFBO0FBd0J2Rzs7QUF2QkE7RUFBUyxpQkFBQTtBQTJCVDs7QUExQkE7RUFBSSxlQUFBO0FBOEJKOztBQTdCQTtFQUNJLGVBQUE7QUFnQ0o7O0FBOUJBO0VBQWdCLFdBQUE7QUFrQ2hCOztBQS9CQTtFQUFtQiw0QkFBQTtFQUNmLHNCQUFBO0VBQXVCLFlBQUE7RUFDdkIsMkJBQUE7QUFvQ0oiLCJmaWxlIjoiZGVhbGVyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDV7XG4gICAgY29sb3I6ICNCMDFEMjI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLnNlZ3tcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmFjdHt0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTk1ZGVnLCNiYjI5MjkgNTclLHZhcigtLWhlYWRlckNvbG9yKSAzMyUpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O3BhZGRpbmc6IDVweDt3aWR0aDogMTAwJTtjb2xvcjogI2ZmZjt9XG5ociB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgZ2FpbnNib3JvO1xuICB9XG4gIC51c2VySW1hZ2VVcGxvYWR7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggZG90dGVkICNiMDFkMjI7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gfVxuIC5wcm9maWxlX2ltYWdle1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiB9XG4gLm5hbWV7Zm9udC1zaXplOiAxNXB4O31cbi5waG9uZXtmb250LXNpemU6IDEzcHg7fVxuLnZpZXd7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOiNiMDFkMjI7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTstLWJvcmRlci1yYWRpdXM6MjBweDt3aWR0aDoxMDAlO2ZvbnQtc2l6ZToxMnB4O31cbi5idXQtZGl2e3BhZGRpbmctdG9wOiAyNHB4fVxuLm5ve2ZvbnQtc2l6ZTogMjNweDt9XG4ubm9fdGV4dHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uY29udGFpbmVyMXsgICAgd2lkdGg6IDEwMCU7XG4gICAvLyBtYXJnaW46IDYwcHggYXV0byAwO1xufVxuLmJnV2FsbGV0SW1hZ2V7ICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO30iXX0= */";
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
    14058: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{header_title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <br>\n  <div class=\"container1\">\n  <ion-row>\n    <ion-col [size]=\"12\" sizexs=\"12\" size-md=\"8\" size-lg=\"8\" push-md=\"2\" push-lg=\"2\" class=\"whiteCol ion-no-padding\">\n      <div style=\"background-image: url('assets/Other Icons/Banner.svg');\" class=\"bgWalletImage\">\n      </div>\n     <div class=\"seg\">\n       <ion-row>\n         <ion-col [size]=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" *ngFor = \"let item of listHeader\">\n           <div class= \"act ion-text-center\">\n                <p class=\"ion-no-margin no_text\">{{item?.key}}</p>\n                <p class=\"no\"><b>{{item?.value}}</b></p>\n              </div>\n         </ion-col>\n       </ion-row>\n       <ion-grid>\n        <hr>\n         <ion-row *ngFor =\"let item of dealerList\">\n           <ion-col size=\"3\">\n            <img *ngIf=\"userImg=='' \" class=\"profile_image centerData\" src=\"assets/icon/Group 14078.png\"/>\n            <img *ngIf=\"userImg!='' \"  class=\"profile_image centerData dottedBorder userImageUpload\" [src]=\"userImg\"/>\n           </ion-col>\n           <ion-col size=\"5\" class=\"autoMargin\">\n             <p class=\"name ion-no-margin\"><b>{{item?.full_name}}</b></p>\n             <p class=\"phone ion-no-margin\">{{item?.contact}}</p>\n             <p class=\"phone ion-no-margin\">Customer : {{item?.total_customers}}</p>\n           </ion-col>\n           <ion-col class=\"but-div\" size=\"4\" class=\"autoMargin\">\n             <ion-button class=\"view butt\" (click)=\"view(item)\">View Profile</ion-button>\n           </ion-col>\n           <hr>\n         </ion-row>\n         <div *ngIf=\"errorMessage!=''\"><p class=\"ion-text-center\">{{errorMessage}}</p></div>\n      <ion-infinite-scroll *ngIf=\"errorMessage==''\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n        \n       </ion-grid>\n     </div>\n    </ion-col>\n  </ion-row>\n</div>\n</ion-content>\n";
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
//# sourceMappingURL=src_app_dealerModule_dealer-list_dealer-list_module_ts-es5.js.map