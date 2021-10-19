(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["src_app_redemptionModule_select-address_select-address_module_ts"], {
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
    39231: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SelectAddressPageRoutingModule": function SelectAddressPageRoutingModule() {
          return (
            /* binding */
            _SelectAddressPageRoutingModule
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


      var _select_address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./select-address.page */
      30692);

      var routes = [{
        path: '',
        component: _select_address_page__WEBPACK_IMPORTED_MODULE_0__.SelectAddressPage
      }];

      var _SelectAddressPageRoutingModule = function SelectAddressPageRoutingModule() {
        _classCallCheck(this, SelectAddressPageRoutingModule);
      };

      _SelectAddressPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SelectAddressPageRoutingModule);
      /***/
    },

    /***/
    38423: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SelectAddressPageModule": function SelectAddressPageModule() {
          return (
            /* binding */
            _SelectAddressPageModule
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


      var _select_address_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./select-address-routing.module */
      39231);
      /* harmony import */


      var _select_address_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./select-address.page */
      30692);

      var _SelectAddressPageModule = function SelectAddressPageModule() {
        _classCallCheck(this, SelectAddressPageModule);
      };

      _SelectAddressPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _select_address_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectAddressPageRoutingModule],
        declarations: [_select_address_page__WEBPACK_IMPORTED_MODULE_1__.SelectAddressPage]
      })], _SelectAddressPageModule);
      /***/
    },

    /***/
    30692: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SelectAddressPage": function SelectAddressPage() {
          return (
            /* binding */
            _SelectAddressPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_select_address_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./select-address.page.html */
      73466);
      /* harmony import */


      var _select_address_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./select-address.page.scss */
      21600);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
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
      56544);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _SelectAddressPage = /*#__PURE__*/function () {
        function SelectAddressPage(sendData, route, apiService, zone, platform) {
          _classCallCheck(this, SelectAddressPage);

          this.sendData = sendData;
          this.route = route;
          this.apiService = apiService;
          this.zone = zone;
          this.platform = platform;
          this.formData = [];
          this.addid = 0;
          this.searchData = [];
          this.redeem_for = this.sendData.redeem_for;
          this.addressDetail = this.sendData.addressDetails;
          console.log("this.redeem_for : ", this.addressDetail);

          if (this.addressDetail.auto_id != '') {
            console.log("this.redeem_for :123 ", this.addressDetail);
            this.add1 = this.addressDetail.address_line1;
            this.add2 = this.addressDetail.address_line2;
            this.pin = this.addressDetail.pin_code;
            this.city = this.addressDetail.city;
            this.state = this.addressDetail.state;
            console.log("this.redeem_for :12 ", this.req);
          } // else{
          //   this.addressDetail.auto_id='';
          //   console.log("this ",this.addressDetail.auto_id);
          // }

        }

        _createClass(SelectAddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.searchApiCall(this.pin);
            this.req = this.sendData.alldata;
          } // ionViewWillLeave(){
          //   this.addressDetail={};
          // }

        }, {
          key: "checkInput",
          value: function checkInput(event) {
            console.log('1', event);

            if (event.length == 6) {
              this.searchApiCall(event);
            } else {
              this.searchData = [];
            }
          }
        }, {
          key: "searchApiCall",
          value: function searchApiCall(searchString) {
            var _this2 = this;

            this.zone.run(function () {
              var apiKey = {
                "search_str": searchString,
                "request_type": "pin"
              };
              console.log('lengthBABA', apiKey.search_str.toString().length);

              _this2.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.searchApiUrl, apiKey).subscribe(function (result) {
                if (result.success == 1) {
                  _this2.searchData = result.data;
                  console.log('   this.searchData', _this2.searchData);

                  for (var i = 0; i < _this2.searchData.length; i++) {
                    _this2.city = _this2.searchData[i].city;
                    _this2.state = _this2.searchData[i].state;
                    _this2.addressDetail.pin_id = _this2.searchData[i].auto_id;
                  }
                } else {
                  // this.addressDetail.auto_id
                  _this2.searchData = [];
                  console.log('   this.searchData', _this2.searchData); // this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            }); // }
          }
        }, {
          key: "checkingFilled",
          value: function checkingFilled() {
            if (this.add1 == undefined || this.add1 == '') {
              this.apiService.showToastMessage('Please fill the Address line 1', 'top', 2000, 'redBg');
            } else if (this.add2 == undefined || this.add2 == '') {
              this.apiService.showToastMessage('Please fill the Address line 2', 'top', 2000, 'redBg');
            } else if (this.addressDetail.pin_id == undefined || this.addressDetail.pin_id == '') {
              if (this.searchData == undefined || this.searchData.length == 0) {
                this.apiService.showToastMessage('Please fill the pincode', 'top', 2000, 'redBg');
              } else {
                this.apiService.showToastMessage('Please fill the correct pincode', 'top', 2000, 'redBg');
              }
            } else {
              if (this.searchData.length == 0) {
                this.apiService.showToastMessage('Please fill the correct Pincode', 'top', 2000, 'redBg');
              } else {
                this.addressDetails();
              } // if(this.searchData.length>0){
              // }else{
              // this.apiService.showToastMessage('Please fill the correct Pincode','top',2000,'redBg');
              // }

            }
          } //AddAddressUrl

        }, {
          key: "addressDetails",
          value: function addressDetails() {
            var _this3 = this;

            // if(this.addressDetail.auto_id==undefined || this.addressDetail.auto_id=='')
            // {
            //   this.addressDetail.auto_id='';
            // }
            console.log("this.redeem_for : ", this.addressDetail.auto_id);
            this.zone.run(function () {
              var apiKey = {
                "address_line1": _this3.add1,
                "address_line2": _this3.add2,
                "address_id": _this3.addressDetail.auto_id,
                "pin_id": _this3.addressDetail.pin_id,
                "redeem_for": _this3.redeem_for,
                "request_for": _this3.req.customer,
                "request_user_type": _this3.req.typee,
                "request_page": "dealer"
              }; //console.log('apiiikkker', apiKey)

              _this3.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_4__.URLS.AddAddressUrl, apiKey).subscribe(function (result) {
                console.log("AddAddressUrl:", result); // this.addres = result;

                if (result.success == 1) {
                  _this3.route.navigate(['./change-address']);
                } else {//  this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this3.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.route.navigate(['./change-address']);
          }
        }]);

        return SelectAddressPage;
      }();

      _SelectAddressPage.ctorParameters = function () {
        return [{
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__.DataTransferService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_provider_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }];
      };

      _SelectAddressPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-select-address',
        template: _raw_loader_select_address_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_select_address_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SelectAddressPage);
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
    21600: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".colu {\n  padding: 15px;\n}\n\nion-input {\n  border-bottom: 1px solid rgba(84, 83, 83, 0.6) !important;\n  /* margin: 0 0px; */\n  color: var(--text-light2);\n  font-size: 0.9rem !important;\n  font-weight: 500 !important;\n  --padding-bottom: 2px !important;\n}\n\n.categoryName {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.ionic_btn {\n  display: block;\n  margin: auto;\n  text-transform: capitalize;\n  --border-radius: 20px;\n  width: 122px;\n  font-size: 13px;\n  --background: #B01D22;\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHlEQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUdKIiwiZmlsZSI6InNlbGVjdC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1e1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgXG59XG5pb24taW5wdXR7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoODQsIDgzLCA4MywgMC42KSAhaW1wb3J0YW50O1xuICAgIC8qIG1hcmdpbjogMCAwcHg7ICovXG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICBmb250LXNpemU6IDAuOTByZW0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG59XG4uY2F0ZWdvcnlOYW1le1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pb25pY19idG57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogMTIycHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC0tYmFja2dyb3VuZDogI0IwMUQyMjtcbiAgICBoZWlnaHQ6IDMycHg7XG59Il19 */";
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
    73466: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Add New Address</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'content-bg':  platform?.width()<740}\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size-xl=\"6\" size-md=\"6\" size-xs=\"12\" class=\"boundary1\">\n      <div  class=\"custom_container\">\n        <ion-row>\n          <ion-col >\n            <p class=\"categoryName\">Address Details</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col  class=\"colu\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" >\n            <ion-label> Address Line 1<sup>*</sup></ion-label>\n            <ion-input #input  type = \"text\" [(ngModel)]=\"add1\" ></ion-input>\n          </ion-col>\n            <ion-col  class=\"colu\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" >\n              <ion-label> Address Line 2 <sup>*</sup> </ion-label>\n               <ion-input #input  type = \"text\" [(ngModel)]=\"add2\" ></ion-input>\n  \n              </ion-col>\n              <ion-col  class=\"colu\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" >\n                <ion-label>Pin Code<sup>*</sup> </ion-label>\n                 <ion-input (ngModelChange)='checkInput($event)' #input  maxlength = \"6\" type = \"tel\" \n                  [(ngModel)]=\"pin\"></ion-input>\n                </ion-col>\n                <ion-col  class=\"colu\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" >\n                  <ion-label> City<sup>*</sup> </ion-label>\n                   <ion-input #input  type = \"text\" [(ngModel)]=\"city\" disabled></ion-input>\n                    <!-- {{searchData?.city}} {{addressDetail?.city}} -->\n                  </ion-col>\n                  <ion-col  class=\"colu\" size-xl=\"6\" size-md=\"6\" size-xs=\"12\" >\n                    <ion-label> State<sup>*</sup> </ion-label>\n                     <ion-input #input  type = \"text\" [(ngModel)]=\"state\" disabled></ion-input>\n                       <!-- {{searchData?.state}}{{addressDetail?.state}} -->\n                  \n        \n                    </ion-col>\n        </ion-row>\n        <br>\n       <br>\n        <ion-row>\n          <ion-col>\n            <ion-button class=\"ionic_btn\" tappable (click)=\"checkingFilled() \">Add</ion-button>\n           </ion-col>\n           <ion-col>\n            <ion-button class=\"ionic_btn\" tappable (click)=\"back()\">Back</ion-button>\n           </ion-col>\n        </ion-row>\n        <br>\n        </div>\n      </ion-col>\n      </ion-row>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_redemptionModule_select-address_select-address_module_ts-es5.js.map