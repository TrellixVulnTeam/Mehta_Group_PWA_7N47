(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMehta"] = self["webpackChunkMehta"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: 'tabs',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("default-src_app_profileModule_profile_profile_page_ts"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./tabs/tabs.module */
          15564)).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: '*',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login-type',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_loginModule_login-type_login-type_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./loginModule/login-type/login-type.module */
          28780)).then(function (m) {
            return m.LoginTypePageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("default-src_app_profileModule_profile_profile_page_ts"), __webpack_require__.e("default-src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./home/home.module */
          3467)).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'communication-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_communicationModule_communication-list_communication-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./communicationModule/communication-list/communication-list.module */
          27028)).then(function (m) {
            return m.CommunicationListPageModule;
          });
        }
      }, {
        path: 'communication-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_communicationModule_communication-detail_communication-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./communicationModule/communication-detail/communication-detail.module */
          26297)).then(function (m) {
            return m.CommunicationDetailPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("default-src_app_profileModule_profile_profile_page_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./profileModule/profile/profile.module */
          58063)).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'accounts-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_profileModule_accounts-detail_accounts-detail_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./profileModule/accounts-detail/accounts-detail.module */
          68938)).then(function (m) {
            return m.AccountsDetailPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_profileModule_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./profileModule/settings/settings.module */
          8254)).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'account-statment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_account-statment_account-statment_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./account-statment/account-statment.module */
          61800)).then(function (m) {
            return m.AccountStatmentPageModule;
          });
        }
      }, {
        path: 'help-support-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_helpSupportModule_help-support-list_help-support-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./helpSupportModule/help-support-list/help-support-list.module */
          74246)).then(function (m) {
            return m.HelpSupportListPageModule;
          });
        }
      }, {
        path: 'faq',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_helpSupportModule_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./helpSupportModule/faq/faq.module */
          64621)).then(function (m) {
            return m.FaqPageModule;
          });
        }
      }, {
        path: 'contact-us',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_helpSupportModule_contact-us_contact-us_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./helpSupportModule/contact-us/contact-us.module */
          67048)).then(function (m) {
            return m.ContactUsPageModule;
          });
        }
      }, //chandan working start
      {
        path: 'language',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_RegistrationModule_language_language_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/language/language.module */
          83224)).then(function (m) {
            return m.LanguagePageModule;
          });
        }
      }, {
        path: 'mobile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_RegistrationModule_mobile_mobile_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/mobile/mobile.module */
          67150)).then(function (m) {
            return m.MobilePageModule;
          });
        }
      }, {
        path: 'otpverify',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_RegistrationModule_otpverify_otpverify_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/otpverify/otpverify.module */
          10533)).then(function (m) {
            return m.OtpverifyPageModule;
          });
        }
      }, {
        path: 'registration',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("src_app_RegistrationModule_registration_registration_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/registration/registration.module */
          61683)).then(function (m) {
            return m.RegistrationPageModule;
          });
        }
      }, {
        path: 'profile-upload',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("src_app_RegistrationModule_profile-upload_profile-upload_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/profile-upload/profile-upload.module */
          78140)).then(function (m) {
            return m.ProfileUploadPageModule;
          });
        }
      }, {
        path: 'geolocation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_RegistrationModule_geolocation_geolocation_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/geolocation/geolocation.module */
          45967)).then(function (m) {
            return m.GeolocationPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_RegistrationModule_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/login/login.module */
          11933)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'customer-reg',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customerRegistrationModule_customer-reg_customer-reg_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customerRegistrationModule/customer-reg/customer-reg.module */
          68786)).then(function (m) {
            return m.CustomerRegPageModule;
          });
        }
      }, {
        path: 'approved-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customerRegistrationModule_approved-list_approved-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customerRegistrationModule/approved-list/approved-list.module */
          85981)).then(function (m) {
            return m.ApprovedListPageModule;
          });
        }
      }, {
        path: 'rejected-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customerRegistrationModule_rejected-list_rejected-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customerRegistrationModule/rejected-list/rejected-list.module */
          5507)).then(function (m) {
            return m.RejectedListPageModule;
          });
        }
      }, {
        path: 'dealer-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealerModule_dealer-list_dealer-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealerModule/dealer-list/dealer-list.module */
          35869)).then(function (m) {
            return m.DealerListPageModule;
          });
        }
      }, {
        path: 'profile-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealerModule_profile-view_profile-view_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealerModule/profile-view/profile-view.module */
          89395)).then(function (m) {
            return m.ProfileViewPageModule;
          });
        }
      }, {
        path: 'customer-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealerModule_customer-list_customer-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealerModule/customer-list/customer-list.module */
          79440)).then(function (m) {
            return m.CustomerListPageModule;
          });
        }
      }, {
        path: 'customer-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealerModule_customer-details_customer-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealerModule/customer-details/customer-details.module */
          64358)).then(function (m) {
            return m.CustomerDetailsPageModule;
          });
        }
      }, {
        path: 'redemption-report',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_redemption-report_redemption-report_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/redemption-report/redemption-report.module */
          51092)).then(function (m) {
            return m.RedemptionReportPageModule;
          });
        }
      }, {
        path: 'dealer-allocat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealer-allocat_dealer-allocat_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealer-allocat/dealer-allocat.module */
          74150)).then(function (m) {
            return m.DealerAllocatPageModule;
          });
        }
      }, {
        path: 'point-statement',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_point-statement_point-statement_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/point-statement/point-statement.module */
          57109)).then(function (m) {
            return m.PointStatementPageModule;
          });
        }
      }, {
        path: 'assign-dealer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customerRegistrationModule_assign-dealer_assign-dealer_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customerRegistrationModule/assign-dealer/assign-dealer.module */
          84866)).then(function (m) {
            return m.AssignDealerPageModule;
          });
        }
      }, {
        path: 'model-camera',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_RegistrationModule_model-camera_model-camera_page_ts"), __webpack_require__.e("src_app_RegistrationModule_model-camera_model-camera_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/model-camera/model-camera.module */
          67233)).then(function (m) {
            return m.ModelCameraPageModule;
          });
        }
      }, {
        path: 'privacy-policy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_profileModule_privacy-policy_privacy-policy_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./profileModule/privacy-policy/privacy-policy.module */
          95312)).then(function (m) {
            return m.PrivacyPolicyPageModule;
          });
        }
      }, {
        path: 'terms-conditions',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_profileModule_terms-conditions_terms-conditions_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./profileModule/terms-conditions/terms-conditions.module */
          3625)).then(function (m) {
            return m.TermsConditionsPageModule;
          });
        }
      }, {
        path: 'customer-allocation',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_dealerModule_customer-allocation_customer-allocation_module_ts"), __webpack_require__.e("src_app_services_data-transfer_service_ts-_07560")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealerModule/customer-allocation/customer-allocation.module */
          71689)).then(function (m) {
            return m.CustomerAllocationPageModule;
          });
        }
      }, {
        path: 'allocate-point-form',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dealerModule_allocate-point-form_allocate-point-form_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dealerModule/allocate-point-form/allocate-point-form.module */
          7926)).then(function (m) {
            return m.AllocatePointFormPageModule;
          });
        }
      }, {
        path: 'redeemotp',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_redemptionModule_redeemotp_redeemotp_page_ts"), __webpack_require__.e("src_app_redemptionModule_redeemotp_redeemotp_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/redeemotp/redeemotp.module */
          14326)).then(function (m) {
            return m.RedeemotpPageModule;
          });
        }
      }, {
        path: 'admin-approval',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_RegistrationModule_admin-approval_admin-approval_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./RegistrationModule/admin-approval/admin-approval.module */
          72091)).then(function (m) {
            return m.AdminApprovalPageModule;
          });
        }
      }, {
        path: 'appove-reject-reedemption',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_orderModule_appove-reject-reedemption_appove-reject-reedemption_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./orderModule/appove-reject-reedemption/appove-reject-reedemption.module */
          74177)).then(function (m) {
            return m.AppoveRejectReedemptionPageModule;
          });
        }
      }, {
        path: 'orders',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_services_data-transfer_service_ts-_07561")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./orderModule/orders/orders.module */
          8844)).then(function (m) {
            return m.OrdersPageModule;
          });
        }
      }, {
        path: 'orderdetails',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_orderModule_orderdetails_orderdetails_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./orderModule/orderdetails/orderdetails.module */
          74590)).then(function (m) {
            return m.OrderdetailsPageModule;
          });
        }
      }, {
        path: 'redeemotp',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_redemptionModule_redeemotp_redeemotp_page_ts"), __webpack_require__.e("src_app_redemptionModule_redeemotp_redeemotp_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/redeemotp/redeemotp.module */
          14326)).then(function (m) {
            return m.RedeemotpPageModule;
          });
        }
      }, {
        path: 'buyitem',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_redemptionModule_redeemotp_redeemotp_page_ts"), __webpack_require__.e("src_app_redemptionModule_buyitem_buyitem_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/buyitem/buyitem.module */
          12402)).then(function (m) {
            return m.BuyitemPageModule;
          });
        }
      }, {
        path: 'itemdetail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_itemdetail_itemdetail_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/itemdetail/itemdetail.module */
          43723)).then(function (m) {
            return m.ItemdetailPageModule;
          });
        }
      }, {
        path: 'pointsgiftlist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_pointsgiftlist_pointsgiftlist_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/pointsgiftlist/pointsgiftlist.module */
          61321)).then(function (m) {
            return m.PointsgiftlistPageModule;
          });
        }
      }, {
        path: 'purchasehistory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_purchasehistory_purchasehistory_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/purchasehistory/purchasehistory.module */
          9258)).then(function (m) {
            return m.PurchasehistoryPageModule;
          });
        }
      }, {
        path: 'select-address',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_select-address_select-address_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/select-address/select-address.module */
          38423)).then(function (m) {
            return m.SelectAddressPageModule;
          });
        }
      }, {
        path: 'point-statement',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_point-statement_point-statement_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/point-statement/point-statement.module */
          57109)).then(function (m) {
            return m.PointStatementPageModule;
          });
        }
      }, {
        path: 'redemption-report',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_redemption-report_redemption-report_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/redemption-report/redemption-report.module */
          51092)).then(function (m) {
            return m.RedemptionReportPageModule;
          });
        }
      }, {
        path: 'change-address',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_redemptionModule_change-address_change-address_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./redemptionModule/change-address/change-address.module */
          51504)).then(function (m) {
            return m.ChangeAddressPageModule;
          });
        }
      }, {
        path: 'transaction-hist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_transaction-hist_transaction-hist_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./transaction-hist/transaction-hist.module */
          52860)).then(function (m) {
            return m.TransactionHistPageModule;
          });
        }
      }, {
        path: 'product-catalogue',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_quickModule_product-catalogue_product-catalogue_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./quickModule/product-catalogue/product-catalogue.module */
          2911)).then(function (m) {
            return m.ProductCataloguePageModule;
          });
        }
      }, {
        path: 'product-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_quickModule_product-detail_product-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./quickModule/product-detail/product-detail.module */
          68658)).then(function (m) {
            return m.ProductDetailPageModule;
          });
        }
      }, {
        path: 'image-zoom',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_image-zoom_image-zoom_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./image-zoom/image-zoom.module */
          87421)).then(function (m) {
            return m.ImageZoomPageModule;
          });
        }
      }, {
        path: 'polls',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_quickModule_polls_polls_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./quickModule/polls/polls.module */
          889)).then(function (m) {
            return m.PollsPageModule;
          });
        }
      }, {
        path: 'user-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_office_report_user-list_user-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./office_report/user-list/user-list.module */
          20358)).then(function (m) {
            return m.UserListPageModule;
          });
        }
      }, {
        path: 'select-dealer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_select-dealer_select-dealer_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./select-dealer/select-dealer.module */
          72639)).then(function (m) {
            return m.SelectDealerPageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/assets/constant */
      56544);
      /* harmony import */


      var _provider_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./provider/api.service */
      14303);
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/local-storage.service */
      18345);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      51524);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583); //import { Location } from '@angular/common';
      //import { Platform,  } from '@ionic/angular';


      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, localStorage, loc, zone, apiService, route, alertController, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.localStorage = localStorage;
          this.loc = loc;
          this.zone = zone;
          this.apiService = apiService;
          this.route = route;
          this.alertController = alertController;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.isDesktop = false;
          this.localStorage.createDB();
          this.initializeApp(); // this.maintance();
          // this.initializeApp();
          //.initializeApp();
          // var r = confirm("You pressed a Back button! Are you sure?!");
          // if (r == true) {
          //   if(window.location.pathname == "/tabs/home"){
          //     history.pushState(null, null, window.location.href);
          //   }
          //   else{
          //     history.back();
          //   }
          //     // Call Back button programmatically as per user confirmation.
          //     // Uncomment below line to redirect to the previous page instead.
          //     // window.location = document.referrer // Note: IE11 is not supporting this.
          // } else {
          //  // alert(2);
          //     // Stay on the current page.
          //     alert(window.location.pathname);
          //     history.pushState(null, null, window.location.href);
          // }
          // history.pushState(null, null, window.location.href);

          document.querySelector('body').style.setProperty('--headerColor', '#B01D22');
          document.querySelector('body').style.setProperty('--backgroundColor', ' #F2F4F5');
          document.querySelector('body').style.setProperty('--reedeemColor', '  #FEBA12');
        }

        _createClass(AppComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {//  this.initializeApp();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.isDesktop = this.platform.is('desktop');
            this.route.events.subscribe(function (e) {
              if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivationStart && e.snapshot.outlet === "administration") _this.outlet.deactivate();
            }); // this.maintance();
            // this.backButtonEvent();
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide();

              _this2.maintance();
            }); //   this.loc.onPopState(() => {
            //     // this.loc.forward();
            //     // this.route.navigate(['./transaction-hist']);
            //     // history.pushState(null, null, window.location.pathname);
            //     //window.location.replace('/transaction-hist');
            //     history.pushState(null, null, window.location.pathname);
            //     // if(window.location.pathname == "/tabs/home"){
            //     // }
            //     // else if(window.location.pathname == "/login"){
            //     // //  alert(window.location.pathname);
            //     //   history.pushState(null, null, window.location.pathname);
            //     // }
            //  });
            // this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
            //   console.log('Back press handler!');
            //   if (this._location.isCurrentPathEqualTo('/home')) {
            //     // Show Exit Alert!
            //     console.log('Show Exit Alert!');
            //     this.showExitConfirm();
            //     processNextHandler();
            //   } 
            //   else if(this._location.isCurrentPathEqualTo('/login')){
            //     console.log('Show Exit Alert!');
            //     this.showExitConfirm();
            //     processNextHandler();
            //   }
            //   else {
            //     // Navigate to back page
            //     console.log('Navigate to back page');
            //     this._location.back();
            //   }
            // });
            // this.platform.backButton.subscribeWithPriority(5, () => {
            //   console.log('Handler called to force close!');
            //   this.alertController.getTop().then(r => {
            //     if (r) {
            //       navigator['app'].exitApp();
            //     }
            //   }).catch(e => {
            //     console.log(e);
            //   })
            // });
          } // backButtonEvent() {
          //   document.addEventListener("backbutton", () => {
          //     this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
          //     if (outlet && outlet.canGoBack()) {
          //     outlet.pop();
          //     }else if(this.route.url === "tabs/home"){
          //     navigator['app'].exitApp(); // work for ionic 4
          //     } else if (!outlet.canGoBack()) {
          //     navigator['app'].exitApp(); // work for ionic 4
          //     }
          //     });
          //     });
          //   // this.platform.backButton.subscribeWithPriority(0, () => {
          //   //   if (this.routerOutlets && this.routerOutlets.canGoBack()) {
          //   //     this.routerOutlets.pop();
          //   //   } else if (this.route.url === '/LoginPage') {
          //   //     navigator['app'].exitApp();
          //   //     // or if that doesn't work, try
          //   //     navigator['app'].exitApp();
          //   //   } else {
          //   //     this.generic.showAlert("Exit", "Do you want to exit the app?", this.onYesHandler, this.onNoHandler, "backPress");
          //   //   }
          //   // });
          //   }

        }, {
          key: "showExitConfirm",
          value: function showExitConfirm() {
            this.alertController.create({
              header: 'App termination',
              message: 'Do you want to close the app?',
              backdropDismiss: false,
              buttons: [{
                text: 'Stay',
                role: 'cancel',
                handler: function handler() {
                  console.log('Application exit prevented!');
                }
              }, {
                text: 'Exit',
                handler: function handler() {
                  navigator['app'].exitApp();
                }
              }]
            }).then(function (alert) {
              alert.present();
            });
          }
        }, {
          key: "maintance",
          value: function maintance() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.zone.run(function () {
                        var apiKey = {};

                        _this3.apiService.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_2__.URLS.maintanceUrl, apiKey).subscribe(function (result) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var _this4 = this;

                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    if (!(result.success == 1 || result.success == '1')) {
                                      _context.next = 9;
                                      break;
                                    }

                                    this.maintanceData = result;
                                    _context.next = 4;
                                    return this.localStorage.setStorage('maintainanceData', result);

                                  case 4:
                                    _context.next = 6;
                                    return this.localStorage.getStorage().then(function (storedData) {
                                      console.log('localStorage storedData storedData', storedData);

                                      if (storedData && storedData.allStoreData != undefined) {
                                        // this.route.navigate(['/tabs']);
                                        console.log('localStorage storedData', storedData); // window.location.assign('/tabs');

                                        // window.location.assign('/tabs');
                                        _this4.route.navigateByUrl('tabs');
                                      } else {
                                        console.log('localStorage storedData maintance', storedData);
                                        _this4.maintanceData = storedData.maintainanceData;

                                        _this4.route.navigate(['/login']);
                                      }
                                    });

                                  case 6:
                                    if (result.data.is_down == 1 || result.data.is_down == '1') {//for maintance redirection page
                                    }

                                    _context.next = 10;
                                    break;

                                  case 9:
                                    this.apiService.showToastMessage(result.message, 'top', 3000, 'redBg');

                                  case 10:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));
                        }, function (err) {
                          _this3.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                        });
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.PlatformLocation
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone
        }, {
          type: _provider_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__.SplashScreen
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar
        }];
      };

      _AppComponent.propDecorators = {
        routerOutlets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRouterOutlet]
        }],
        outlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren,
          args: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet]
        }]
      };
      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      51524);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/service-worker */
      72249);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/environment */
      92340);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      20138);
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      59865);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      83046);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/storage-angular */
      54925);
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      97905);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__.IonicStorageModule.forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__.ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy
        }, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File, _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__.FileTransfer, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__.Geolocation, _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__.NativeGeocoder, _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__.FilePath],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    14303: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      69412);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/constant */
      56544);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      19773);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/local-storage.service */
      18345);

      var _ApiService = /*#__PURE__*/function () {
        function ApiService(http, loadingCtrl, toastController, localStorage) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.loadingCtrl = loadingCtrl;
          this.toastController = toastController;
          this.localStorage = localStorage;
        }

        _createClass(ApiService, [{
          key: "apiCallWithLoginToken",
          value: function apiCallWithLoginToken(url, data) {
            var _this5 = this;

            console.log("22url==", url);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.localStorage.getStorage()).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (storedData) {
              console.log("Shivanshi local storage data==", storedData);
              data["client_id"] = src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.clientId;
              data["device"] = src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.device;
              data["app_version"] = src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.app_version;
              data["device_id"] = src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.device_id;
              var loginToken;

              if (storedData && storedData.allStoreData) {
                console.log("Shivanshi allStoreData==", storedData.allStoreData);
                data["employee_id"] = storedData.allStoreData.user_id;
                data["user_type"] = storedData.allStoreData.employee_type;
                loginToken = storedData.allStoreData.login_token;
                console.log('Shivanshi login token', loginToken);
              } else {
                loginToken = "";
                console.log('login token response', loginToken);
              }

              var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                  "Content-Type": "application/json",
                  Authorization: loginToken
                })
              };
              console.log('Shivanshi request options', httpOptions);
              console.log('Shivanshi request url', src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.URLS.baseUrl + url);
              console.log('Shivanshi request data', data);
              return _this5.http.post(src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.URLS.baseUrl + url, data, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(_this5.handleError));
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error("An error occurred:", error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            } // return an observable with a user-facing error message


            return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)("Something bad happened, please try again later.");
          }
        }, {
          key: "showToastMessage",
          value: function showToastMessage(msg, pos, time, bgClassName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log("toastMessage color==", bgClassName);
                      _context3.next = 3;
                      return this.toastController.create({
                        message: msg,
                        position: pos,
                        duration: time,
                        cssClass: bgClassName
                      });

                    case 3:
                      toast = _context3.sent;
                      toast.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentLoadingDefault",
          value: function presentLoadingDefault() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingCtrl.create({
                        message: '',
                        cssClass: 'loader-waiting',
                        duration: 2000
                      });

                    case 2:
                      this.loading = _context4.sent;
                      _context4.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentLoadingClose",
          value: function presentLoadingClose() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } //for media file

        }, {
          key: "mediaFileUpload",
          value: function mediaFileUpload(url, formData) {
            var _this6 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.localStorage.getStorage()).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (storedData) {
              console.log("storedData", storedData);
              formData.append('client_id', src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.clientId);
              formData.append('device', src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.device);
              formData.append('device_id', src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.device_id);
              formData.append('app_version', src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.app_version);
              formData.append('employee_id', storedData.allStoreData.user_id);
              formData.append('user_type', storedData.allStoreData.employee_type);
              return _this6.http.post(src_assets_constant__WEBPACK_IMPORTED_MODULE_0__.URLS.baseUrl + url, formData, {
                reportProgress: true,
                observe: 'events'
              });
            }));
          }
        }]);

        return ApiService;
      }();

      _ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService
        }];
      };

      _ApiService = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
      })], _ApiService);
      /***/
    },

    /***/
    18345: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LocalStorageService": function LocalStorageService() {
          return (
            /* binding */
            _LocalStorageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/storage-angular */
      43250); // import { Storage } from "@ionic/storage";


      var _LocalStorageService = /*#__PURE__*/function () {
        function LocalStorageService(storage) {
          _classCallCheck(this, LocalStorageService);

          this.storage = storage;
          this._storage = null;
        }

        _createClass(LocalStorageService, [{
          key: "setStorage",
          value: function setStorage(key, value) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log('localStorage storedData storage data key==> ', key);
                      console.log('localStorage storedData storage data value==> ', value);
                      _context7.next = 4;
                      return this.storage.get('allStoreData').then(function (storedData) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          var obj;
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  console.log('call Fcm storage service2==> ', storedData);

                                  if (!storedData) {
                                    _context6.next = 7;
                                    break;
                                  }

                                  storedData[key] = value;
                                  _context6.next = 5;
                                  return this.storage.set('allStoreData', storedData).then(function (res) {
                                    console.log('storage data==> ', res);
                                  });

                                case 5:
                                  _context6.next = 14;
                                  break;

                                case 7:
                                  console.log('******==> ', storedData);
                                  console.log('****** key==> ', key);
                                  console.log('****** value==> ', value);
                                  obj = {};
                                  obj[key] = value;
                                  _context6.next = 14;
                                  return this.storage.set('allStoreData', obj).then(function (res) {
                                    console.log('storage data null obj==> ', res);
                                  });

                                case 14:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      });

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          } // to get a key/value pair

        }, {
          key: "getStorage",
          value: function getStorage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var result;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.prev = 0;
                      _context8.next = 3;
                      return this.storage.get('allStoreData');

                    case 3:
                      result = _context8.sent;

                      if (!(result != null)) {
                        _context8.next = 6;
                        break;
                      }

                      return _context8.abrupt("return", result);

                    case 6:
                      return _context8.abrupt("return", null);

                    case 9:
                      _context8.prev = 9;
                      _context8.t0 = _context8["catch"](0);
                      console.log(_context8.t0);
                      return _context8.abrupt("return", null);

                    case 13:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[0, 9]]);
            }));
          } // remove a single key value:

        }, {
          key: "remove",
          value: function remove(key) {
            this.storage.remove(key);
          } //  delete all data from your application:

        }, {
          key: "clear",
          value: function clear() {
            this.storage.clear();
          }
        }, {
          key: "createDB",
          value: function createDB() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var storage;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.storage.create();

                    case 2:
                      storage = _context9.sent;
                      this._storage = storage;

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return LocalStorageService;
      }();

      _LocalStorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage
        }];
      };

      _LocalStorageService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LocalStorageService);
      /***/
    },

    /***/
    56544: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "URLS": function URLS() {
          return (
            /* binding */
            _URLS
          );
        },

        /* harmony export */
        "APP_CONFIG": function APP_CONFIG() {
          return (
            /* binding */
            _APP_CONFIG
          );
        }
        /* harmony export */

      });

      var _URLS = {
        //***************** Development URL*****************
        MainUrl: "https://benepik.in",
        baseUrl: "https://benepik.in/BandhanRewards/api",
        //***************** UAT URL*****************
        // MainUrl:"https://benepik.org",
        // baseUrl:"https://benepik.org/BandhanRewards/api",
        //***************** production URL*****************
        // MainUrl:"https://benepik.co.in",
        // baseUrl:"https://benepik.co.in/BandhanRewards/api",
        //pwa
        maintanceUrl: "/maintainence",
        MobileSubmitUrl: "/login",
        otpSubmitUrl: "/otpVerify",
        forceUpdateUrl: "/forceUpdate",
        registrationFormUrl: "/registrationForm",
        registrationFormSubmitUrl: "/saveForm",
        PromotedFeedUrl: "/promotedFeed",
        HomeUrl: "/home",
        QUickAccessUrl: '/quickAccess',
        PostListUrl: '/postList',
        PostDetailUrl: '/postDetail',
        SideMenuUrl: '/sideMenu',
        HelpSupportUrl: '/helpSupport',
        AccStatementUrl: '/accStatement',
        ContactHelpSupportUrl: '/contactHelpSupport',
        LikeList: '/likeList',
        DoCommentUrl: '/doComment',
        accountDetailUrl: "/accountDetails",
        imageUploadUrl: "/uploadImage",
        geoLocationUrl: "/geoLocation",
        LogOutUrl: '/logout',
        DoLike: '/doLike',
        customerAllocationUrl: "/customerList",
        searchApiUrl: "/search",
        pointAllocateApiUrl: '/pointAllocate',
        getUserList: '/userList',
        otpGetUrl: "/sendOtp",
        reedemTransectionUrl: "/transactionHistory",
        SkipUrl: "/common",
        UpdateRegistrationUrl: '/updateRegistration',
        CustRegDataUrl: '/custRegData',
        DealerAllocationUrl: '/dealerAllocation',
        ProductListUrl: '/productList',
        CustReg: "/custReg",
        orderDetailUrl: "/OrderDetail",
        acceptRejectUrl: "/OrderUpdate",
        AddressUrl: '/address',
        AddAddressUrl: '/addAddress',
        ProductDetailUrl: '/productDetail',
        BuyUrl: '/buy',
        CartUrl: '/cart',
        PurchaseHistoryUrl: '/purchaseHistory',
        ApprovalListUrl: '/ApprovalList',
        OrderDetailListUrl: '/OrderDetailList',
        RedemptionUrl: '/redemption',
        BrandProductUrl: '/brandProduct',
        ExistingUrl: '/Existing'
      };
      var _APP_CONFIG = {
        clientId: 'CO-43',
        device: 4,
        device_id: 'PWA',
        app_version: 1 // packageName : 'com.benepik.multiply',

      };
      /***/
    },

    /***/
    92340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863: function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    91106: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map