(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/XHt":
    /*!*********************************************!*\
      !*** ./src/app/_guards/admin.auth.guard.ts ***!
      \*********************************************/

    /*! exports provided: AdminAuthGuard */

    /***/
    function XHt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function () {
        return AdminAuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AdminAuthGuard = /*#__PURE__*/function () {
        function AdminAuthGuard(router) {
          _classCallCheck(this, AdminAuthGuard);

          this.router = router;
        }

        _createClass(AdminAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var url = state.url;
            return this.checkLogin(url);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin(url) {
            var currentSuperAdmin = JSON.parse(localStorage.getItem('currentSuperAdmin'));

            if (!currentSuperAdmin || !currentSuperAdmin.id) {
              this.router.navigate(['/superadmin/login']);
              return false;
            }

            return true;
          }
        }]);

        return AdminAuthGuard;
      }();

      AdminAuthGuard.ɵfac = function AdminAuthGuard_Factory(t) {
        return new (t || AdminAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AdminAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AdminAuthGuard,
        factory: AdminAuthGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "/zcR":
    /*!*********************************************!*\
      !*** ./src/app/_services/client.service.ts ***!
      \*********************************************/

    /*! exports provided: ClientService */

    /***/
    function zcR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientService", function () {
        return ClientService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/timeout */
      "g3Qq");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../constant */
      "0b+V");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/common.service */
      "YWaA"); //import { Client } from '../_models/client';


      var ClientService = /*#__PURE__*/function () {
        function ClientService(http, router, commonService) {
          _classCallCheck(this, ClientService);

          this.http = http;
          this.router = router;
          this.commonService = commonService;
          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }

        _createClass(ClientService, [{
          key: "isSuperAdminLoggedIn",
          get: function get() {
            var currentSuperAdmin = JSON.parse(localStorage.getItem('currentSuperAdmin'));

            if (currentSuperAdmin && currentSuperAdmin.id) {
              this.loggedIn.next(true);
            }

            return this.loggedIn.asObservable();
          }
        }, {
          key: "getProfileById",
          value: function getProfileById(clientId) {
            var _this = this;

            var requestData = {
              "userId": clientId
            };
            return new Promise(function (resolve, reject) {
              _this.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'client/get-profile', JSON.stringify(requestData), _this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getCountries",
          value: function getCountries() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'country-list', _this2.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getStatesById",
          value: function getStatesById(countryId) {
            var _this3 = this;

            var requestData = {
              "country_id": countryId
            };
            return new Promise(function (resolve, reject) {
              _this3.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'state-list-by-country-id', JSON.stringify(requestData), _this3.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getCitiesById",
          value: function getCitiesById(stateId) {
            var _this4 = this;

            var requestData = {
              "state_id": stateId
            };
            return new Promise(function (resolve, reject) {
              _this4.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'city-list-by-state-id', JSON.stringify(requestData), _this4.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getClients",
          value: function getClients() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              _this5.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'client/list', _this5.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getMessages",
          value: function getMessages() {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              _this6.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'client/message-list', _this6.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getarchivedClients",
          value: function getarchivedClients() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'client/archived-list', _this7.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "deleteClient",
          value: function deleteClient(id) {
            var _this8 = this;

            var requestData = {
              "id": id
            };
            return new Promise(function (resolve, reject) {
              _this8.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'client/delete', JSON.stringify(requestData), _this8.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(id) {
            var _this9 = this;

            var requestData = {
              "id": id
            };
            return new Promise(function (resolve, reject) {
              _this9.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'client/update-status', JSON.stringify(requestData), _this9.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "clientRegister",
          value: function clientRegister(clinicName, firstName, lastName, emailAddress, userName, phoneNumber, startDate, endDate, address, countryId, stateId, cityId, zipCode, keyword) {
            var _this10 = this;

            var requestData = {
              "clinic_name": clinicName,
              "first_name": firstName,
              "last_name": lastName,
              "email": emailAddress,
              "username": userName,
              "phone_number": phoneNumber,
              "start_date": startDate,
              "end_date": endDate,
              "address": address,
              "country_id": countryId,
              "state_id": stateId,
              "city_id": cityId,
              "zip_code": zipCode,
              "keyword": keyword
            };
            return new Promise(function (resolve, reject) {
              _this10.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'client/create', JSON.stringify(requestData), _this10.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "clientUpdate",
          value: function clientUpdate(clinicName, firstName, lastName, emailAddress, userName, phoneNumber, startDate, endDate, address, countryId, stateId, cityId, zipCode, keyword, clientId) {
            var _this11 = this;

            var requestData = {
              "clinic_name": clinicName,
              "first_name": firstName,
              "last_name": lastName,
              "email": emailAddress,
              "username": userName,
              "phone_number": phoneNumber,
              "start_date": startDate,
              "end_date": endDate,
              "address": address,
              "country_id": countryId,
              "state_id": stateId,
              "city_id": cityId,
              "zip_code": zipCode,
              "keyword": keyword,
              "clientId": clientId
            };
            return new Promise(function (resolve, reject) {
              _this11.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'client/edit-client', JSON.stringify(requestData), _this11.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(subject, message, useremail, fromuser, touser) {
            var _this12 = this;

            var requestData = {
              "subject": subject,
              "message": message,
              "useremail": useremail,
              "fromuser": fromuser,
              "touser": touser
            }; //console.log(this.commonService.getHttpOptions(localStorage.getItem('currentClinic'),Config.API_OTHERS_KEY));
            //console.log(Config.API_OTHERS_KEY);

            return new Promise(function (resolve, reject) {
              _this12.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'client/client-send-message', JSON.stringify(requestData), _this12.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }]);

        return ClientService;
      }();

      ClientService.ɵfac = function ClientService_Factory(t) {
        return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]));
      };

      ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ClientService,
        factory: ClientService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/a3logics/Documents/medirecx/medirecx-ui/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "03oT":
    /*!****************************************!*\
      !*** ./src/app/_guardsclinic/index.ts ***!
      \****************************************/

    /*! exports provided: AuthclinicGuard, AdminclinicAuthGuard */

    /***/
    function oT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _authclinic_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authclinic.guard */
      "vcQU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthclinicGuard", function () {
        return _authclinic_guard__WEBPACK_IMPORTED_MODULE_0__["AuthclinicGuard"];
      });
      /* harmony import */


      var _adminclinic_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./adminclinic.auth.guard */
      "DTsu");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AdminclinicAuthGuard", function () {
        return _adminclinic_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AdminclinicAuthGuard"];
      });
      /***/

    },

    /***/
    "0b+V":
    /*!*****************************!*\
      !*** ./src/app/constant.ts ***!
      \*****************************/

    /*! exports provided: Config */

    /***/
    function bV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Config", function () {
        return Config;
      });

      var Config = {
        API_BASE_PATH: 'http://34.237.70.31/medirecx-dev-api/api/v1/',
        //API_BASE_PATH : 'http://localhost:1337/api/v1/',
        APP_TITLE: 'MediRecX',
        TIMEOUT_SECONDS: 3000000000000,
        API_SUPERADMIN_KEY: "bXktZW4tcHJvLWRldmVsb3BtZW50LXNlY3JldC1rZXlAMjAxOSE=",
        //API_CLINIC_KEY : "bXktZW4tcHJvLWRldmVsb3BtZW50LXNlY3JldC1rZXlAMjAxOSE=",
        API_OTHERS_KEY: "aHC$kykHa=aZHC#yZZkA$#HyHaCkH=k#akHkkZ$C$ZaAakHZ",
        BAD_REQUEST_STATUS: 400,
        SUCCESS_STATUS: 200,
        REGISTRATION_TITLE: "Registration",
        SUPPORT_EMAIL: "support@medirecx.com",
        SUPPORT_PHONE: "+1 408 655 7179",
        COMMON_ERROR: 'Something went wrong, please try again later.',
        FORGOT_PASSWORD_TITLE: "Forgot Password",
        RESET_PASSWORD_TITLE: "Reset Password",
        CHANGE_PASSWORD_TITLE: "Change Password",
        NOT_FOUND_TITLE: "404 Not Found",
        SUPERADMIN_TITLE: "Super Admin",
        CLINIC_TITLE: "Clinic Title",
        TITLE_SEPRATOR: " :: ",
        LOGIN_TITLE: "Login",
        BAD_AUTH_STATUS: 401,
        USERNAME_REQUIRED_VALIDATION_MSG: "Username is required.",
        EMAIL_REQUIRED_VALIDATION_MSG: "Email is required.",
        EMAIL_FORMAT_VALIDATION_MSG: "Email address is not vaild.",
        PASSWORD_REQUIRED_VALIDATION_MSG: "Password is required.",
        PASSWORD_NOT_VALID_VALIDATION_MSG: "Password should be minimum 8 characters & maximum 16 characters long, alphanumeric, with 1 special character.",
        PASSWORD_MISMATCH_VALIDATION_MSG: "Password and Confirm Password are not same.",
        CONFIRM_PASSWORD_REQUIRED_VALIDATION_MSG: "Confirm Password is required.",
        RESET_PASSWORD_SUCCESS_MSG: "Password has been reset/changed successfully.",
        PAGE_RELOAD_TIMEOUT_SECONDS: 500,
        SPINNER_TIMEOUT_SECONDS: 100,
        BLOCK_UI_TIMEOUT_SECONDS: 2000,
        BLOCK_UI_UPDATE_TIMEOUT_SECONDS: 850,
        AUTHORIZATION_NOT_VALID_STATUS: 501,
        ALERT_AUTO_REMOVE_TIME: 2000,
        DEFAULT_PAGE_SIZE: 10,
        FORGOT_PASSWORD_SUCCESS_MSG: "Please check your email as we have sent you a link to reset your password.",
        PASSWORD_REGX: "(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,16}",
        SIDEBAR_LOGO_PATH: "assets/img/favicon.png",
        PROFILE_NO_IMG_PATH: "assets/img/profile-no-img.jpg",
        UNDER_CONSTRUCTION_IMG_PATH: "assets/img/under-construction-img.jpg",
        CLINIC_UNDER_CONSTRUCTION_IMG_PATH: "assets/img/clinic_uc.png",
        CLINIC_LOGO_DEFAULT_IMG_PATH: "assets/img/clinic.png",
        OLD_PASSWORD_REQUIRED_VALIDATION_MSG: "Old Password is required.",
        NEW_PASSWORD_REQUIRED_VALIDATION_MSG: "New Password is required.",
        NEW_PASSWORD_NOT_VALID_VALIDATION_MSG: "New Password should be minimum 8 characters & maximum 16 characters long, alphanumeric, with 1 special character.",
        NEW_PASSWORD_MISMATCH_VALIDATION_MSG: "New Password and Confirm Password are not same.",
        SWAL_LOGOUT_TITLE: "Ready to Leave?",
        SWAL_LOGOUT_TEXT: "Select \"Logout\" below if you are ready to end your current session.",
        SWAL_LOGOUT_CONFIRM_BUTTON_TEXT: "Logout",
        PLEASE_FILL_REQUIRED_FIELD_MSG: "Please fill the required fields.",
        UNAME_PATTERN: "^[a-z0-9_-]{8,16}$",
        UNAME_NOT_VALID_MESSAGE: "Username should be minimum 8 characters & maximum 16 characters long with alphanumeric.",
        KEYWORD_PATTERN: "^[a-z0-9]{3,16}$",
        KEYWORD_NOT_VALID_MESSAGE: "Keyword should be minimum 3 characters & maximum 16 characters long with small characters and number only.",
        CLNAME_PATTERN: "^[a-zA-Z0-9_ -]{4,20}$",
        CLNAME_NOT_VALID_MESSAGE: "Clinic name should be minimum 4 characters & maximum 20 characters long with alphanumeric.",
        NAME_PATTERN: "^(?=.{3,16}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$",
        NAME_NOT_VALID_MESSAGE: "Name should be minimum 3 characters & maximum 16 characters long with alphabate.",
        PHONE_PATTERN: "^((\\+91-?)|0)?[0-9]{10}$",
        ZIP_PATTERN: "^[0-9]{6}",
        PHONE_NOT_VALID_MESSAGE: "Phone number should of 10 character numeric only.",
        ZIP_NOT_VALID_MESSAGE: "Zip code should of 6 character numeric only.",
        EMAIL_PATTERN: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
        EMAIL_NOT_VALID_MESSAGE: "Please enter valid email format.",
        STATUS_UPDATED_SUCCESSFULLY: "Status updated successfully.",
        DOCUMENT_ADDED_SUCCESSFULLY: "Document added successfully.",
        DOCUMENT_UPDATED_SUCCESSFULLY: "Document updated successfully.",
        DOCUMENT_DELETED_SUCCESSFULLY: "Document deleted successfully.",
        ROLE_ADDED_SUCCESSFULLY: "Role added successfully.",
        ROLE_UPDATED_SUCCESSFULLY: "Role updated successfully.",
        ROLE_DELETED_SUCCESSFULLY: "Role deleted successfully.",
        CLAIM_ADDED_SUCCESSFULLY: "Claim added successfully.",
        CLAIM_UPDATED_SUCCESSFULLY: "Claim updated successfully.",
        CLAIM_DELETED_SUCCESSFULLY: "Status updated successfully.",
        PROFILE_UPDATED_SUCCESSFULLY: "Profile updated successfully.",
        CLINIC_ACCUOUNT_EXPIRED: "Account expired. Please contact to administrator.",
        PROFILE_IMG_S3_PATH: "https://medirecx.s3.amazonaws.com/user-avtar/",
        DOC_IMG_S3_PATH: "https://medirecx.s3.amazonaws.com/document/",
        MESSAGE_SEND_SUCCESSFULLY: "Message sent successfully.",
        SUBDOMAIN: "",
        STATUS: "<html><body><ul><li>Uploaded</li><li> Sent to Medpro</li><li>Sent to Doctor</li><li>Reviewed by Medpro</li><li>Reviewed by Doctor</li><li>Doctor sent to medpro</li><li>Medpro sent to clinic</li><li>Completed</li><li>Inactive</li></ul></body></html>"
      };
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'http://ec2-34-237-70-31.compute-1.amazonaws.com/medirecx-dev-api/api/v1/'
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
    "DTsu":
    /*!*********************************************************!*\
      !*** ./src/app/_guardsclinic/adminclinic.auth.guard.ts ***!
      \*********************************************************/

    /*! exports provided: AdminclinicAuthGuard */

    /***/
    function DTsu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminclinicAuthGuard", function () {
        return AdminclinicAuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AdminclinicAuthGuard = /*#__PURE__*/function () {
        function AdminclinicAuthGuard(router) {
          _classCallCheck(this, AdminclinicAuthGuard);

          this.router = router;
        }

        _createClass(AdminclinicAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var url = state.url;
            return this.checkLogin(url);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin(url) {
            var currentClinic = JSON.parse(localStorage.getItem('currentClinic'));

            if (!currentClinic || !currentClinic.id) {
              this.router.navigate(['/clinic/login']);
              return false;
            }

            return true;
          }
        }]);

        return AdminclinicAuthGuard;
      }();

      AdminclinicAuthGuard.ɵfac = function AdminclinicAuthGuard_Factory(t) {
        return new (t || AdminclinicAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AdminclinicAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AdminclinicAuthGuard,
        factory: AdminclinicAuthGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminclinicAuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "EJ4i":
    /*!*******************************************!*\
      !*** ./src/app/_services/role.service.ts ***!
      \*******************************************/

    /*! exports provided: RoleService */

    /***/
    function EJ4i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleService", function () {
        return RoleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/timeout */
      "g3Qq");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../constant */
      "0b+V");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/common.service */
      "YWaA"); //import { Client } from '../_models/client';


      var RoleService = /*#__PURE__*/function () {
        function RoleService(http, router, commonService) {
          _classCallCheck(this, RoleService);

          this.http = http;
          this.router = router;
          this.commonService = commonService;
          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }

        _createClass(RoleService, [{
          key: "isClinicLoggedIn",
          get: function get() {
            var currentClinic = JSON.parse(localStorage.getItem('currentClinic'));

            if (currentClinic && currentClinic.id) {
              this.loggedIn.next(true);
            }

            return this.loggedIn.asObservable();
          }
        }, {
          key: "getRoleById",
          value: function getRoleById(roleId) {
            var _this13 = this;

            var requestData = {
              "roleId": roleId
            };
            return new Promise(function (resolve, reject) {
              _this13.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'role/get-role', JSON.stringify(requestData), _this13.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getRoles",
          value: function getRoles() {
            var _this14 = this;

            return new Promise(function (resolve, reject) {
              _this14.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'role/list?domain="clinic"', _this14.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          } //getarchivedClients() {
          //     return new Promise((resolve, reject) => {
          //         this.http.get(Config.API_BASE_PATH+'client/archivedlist', this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY))
          //         .timeout(Config.TIMEOUT_SECONDS)
          //         .subscribe(res => {
          //             console.log(res);
          //             resolve(res);
          //         }, (err) => {
          //             reject(err);
          //         });
          //     });
          //}

        }, {
          key: "deleteRole",
          value: function deleteRole(id) {
            var _this15 = this;

            var requestData = {
              "id": id
            };
            return new Promise(function (resolve, reject) {
              _this15.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'role/delete-role', JSON.stringify(requestData), _this15.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(id) {
            var _this16 = this;

            var requestData = {
              "roleId": id
            };
            return new Promise(function (resolve, reject) {
              _this16.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'role/update-role-status', JSON.stringify(requestData), _this16.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "roleRegister",
          value: function roleRegister(title, description) {
            var _this17 = this;

            var requestData = {
              "title": title,
              "description": description
            };
            console.log(this.commonService.getHttpOptions(localStorage.getItem('currentClinic'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY)); //console.log(Config.API_OTHERS_KEY);

            return new Promise(function (resolve, reject) {
              _this17.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'role/add-role', JSON.stringify(requestData), _this17.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "roleUpdate",
          value: function roleUpdate(title, description, roleId) {
            var _this18 = this;

            var requestData = {
              "title": title,
              "description": description,
              "id": roleId
            }; //console.log(requestData);

            return new Promise(function (resolve, reject) {
              _this18.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'role/edit-role', JSON.stringify(requestData), _this18.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }]);

        return RoleService;
      }();

      RoleService.ɵfac = function RoleService_Factory(t) {
        return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]));
      };

      RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RoleService,
        factory: RoleService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HJN2":
    /*!*******************************************************!*\
      !*** ./src/app/_services/adminclinic.auth.service.ts ***!
      \*******************************************************/

    /*! exports provided: AdminclinicAuthService */

    /***/
    function HJN2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminclinicAuthService", function () {
        return AdminclinicAuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/timeout */
      "g3Qq");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../constant */
      "0b+V");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/common.service */
      "YWaA");

      var AdminclinicAuthService = /*#__PURE__*/function () {
        function AdminclinicAuthService(http, router, commonService) {
          _classCallCheck(this, AdminclinicAuthService);

          this.http = http;
          this.router = router;
          this.commonService = commonService;
          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }

        _createClass(AdminclinicAuthService, [{
          key: "isClinicLoggedIn",
          get: function get() {
            var currentClinic = JSON.parse(localStorage.getItem('currentClinic'));

            if (currentClinic && currentClinic.id) {
              this.loggedIn.next(true);
            }

            return this.loggedIn.asObservable();
          }
        }, {
          key: "login",
          value: function login(username, password) {
            var _this19 = this;

            var requestData = {
              'username': username,
              'password': password
            };
            return new Promise(function (resolve, reject) {
              _this19.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'clinic/login', JSON.stringify(requestData), _this19.commonService.getHttpOptions(null, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                if (res["status"] == _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUCCESS_STATUS) {
                  _this19.loggedIn.next(true);

                  localStorage.setItem('currentClinic', JSON.stringify(res["data"]));
                  localStorage.setItem('currentClinicToken', JSON.stringify(res["data"]["token"]));
                  resolve(res);
                } else {
                  resolve(res);
                }
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('currentClinic');
            localStorage.removeItem('currentClinicToken');
            localStorage.clear();
            this.loggedIn.next(false);
            this.router.navigate(['/clinic/login']);
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(email) {
            var _this20 = this;

            var requestData = {
              'email': email
            };
            return new Promise(function (resolve, reject) {
              _this20.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'clinic/forgot-password', JSON.stringify(requestData), _this20.commonService.getHttpOptions(null, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(password, confirmPassword, resetToken) {
            var _this21 = this;

            var requestData = {
              "password": password,
              "confirm_password": confirmPassword,
              "reset_token": resetToken
            };
            return new Promise(function (resolve, reject) {
              _this21.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'clinic/reset-password', JSON.stringify(requestData), _this21.commonService.getHttpOptions(null, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "changePassword",
          value: function changePassword(oldPassword, newPassword, confirmPassword) {
            var _this22 = this;

            var requestData = {
              "old_password": oldPassword,
              "new_password": newPassword,
              "confirm_new_password": confirmPassword
            };
            return new Promise(function (resolve, reject) {
              _this22.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'clinic/change-password', JSON.stringify(requestData), _this22.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }]);

        return AdminclinicAuthService;
      }();

      AdminclinicAuthService.ɵfac = function AdminclinicAuthService_Factory(t) {
        return new (t || AdminclinicAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]));
      };

      AdminclinicAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AdminclinicAuthService,
        factory: AdminclinicAuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminclinicAuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Incs":
    /*!*******************************************************!*\
      !*** ./src/app/block-element/block-element.module.ts ***!
      \*******************************************************/

    /*! exports provided: BlockElementModule */

    /***/
    function Incs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockElementModule", function () {
        return BlockElementModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-block-ui */
      "12jx");
      /* harmony import */


      var _block_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./block-element.component */
      "x4yX");

      var BlockElementModule = function BlockElementModule() {
        _classCallCheck(this, BlockElementModule);
      };

      BlockElementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: BlockElementModule
      });
      BlockElementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function BlockElementModule_Factory(t) {
          return new (t || BlockElementModule)();
        },
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUIModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlockElementModule, {
          declarations: [_block_element_component__WEBPACK_IMPORTED_MODULE_3__["BlockElementComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUIModule"]],
          exports: [_block_element_component__WEBPACK_IMPORTED_MODULE_3__["BlockElementComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlockElementModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUIModule"]],
            declarations: [_block_element_component__WEBPACK_IMPORTED_MODULE_3__["BlockElementComponent"]],
            exports: [_block_element_component__WEBPACK_IMPORTED_MODULE_3__["BlockElementComponent"]],
            entryComponents: [_block_element_component__WEBPACK_IMPORTED_MODULE_3__["BlockElementComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Ip3H":
    /*!************************************************************!*\
      !*** ./src/app/block-template/block-template.component.ts ***!
      \************************************************************/

    /*! exports provided: BlockTemplateComponent */

    /***/
    function Ip3H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockTemplateComponent", function () {
        return BlockTemplateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BlockTemplateComponent = function BlockTemplateComponent() {
        _classCallCheck(this, BlockTemplateComponent);
      };

      BlockTemplateComponent.ɵfac = function BlockTemplateComponent_Factory(t) {
        return new (t || BlockTemplateComponent)();
      };

      BlockTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlockTemplateComponent,
        selectors: [["ng-component"]],
        decls: 5,
        vars: 0,
        consts: [[1, "block-ui-template"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
        template: function BlockTemplateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n      color: #fff;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockTemplateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            styles: ["\n    :host {\n      color: #fff;\n    }\n  "],
            template: "\n    <div class=\"block-ui-template\">\n      <div class=\"preloader\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n      </div>\n    </div>\n  "
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "J9tS":
    /*!************************************!*\
      !*** ./src/app/_services/index.ts ***!
      \************************************/

    /*! exports provided: AuthenticationService, AuthenticationclinicService, UserService, CommonService, AdminAuthService, AdminclinicAuthService, ClientService, PatientService, RoleService, BusinessService */

    /***/
    function J9tS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authentication.service */
      "pW6c");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"];
      });
      /* harmony import */


      var _authenticationclinic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authenticationclinic.service */
      "QXgR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationclinicService", function () {
        return _authenticationclinic_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationclinicService"];
      });
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user.service */
      "VITL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"];
      });
      /* harmony import */


      var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./common.service */
      "YWaA");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"];
      });
      /* harmony import */


      var _admin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admin.auth.service */
      "bvSn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AdminAuthService", function () {
        return _admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"];
      });
      /* harmony import */


      var _adminclinic_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./adminclinic.auth.service */
      "HJN2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AdminclinicAuthService", function () {
        return _adminclinic_auth_service__WEBPACK_IMPORTED_MODULE_5__["AdminclinicAuthService"];
      });
      /* harmony import */


      var _client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./client.service */
      "/zcR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ClientService", function () {
        return _client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"];
      });
      /* harmony import */


      var _patient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./patient.service */
      "mx5+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PatientService", function () {
        return _patient_service__WEBPACK_IMPORTED_MODULE_7__["PatientService"];
      });
      /* harmony import */


      var _role_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./role.service */
      "EJ4i");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RoleService", function () {
        return _role_service__WEBPACK_IMPORTED_MODULE_8__["RoleService"];
      });
      /* harmony import */


      var _business_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./business.service */
      "dNWa");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BusinessService", function () {
        return _business_service__WEBPACK_IMPORTED_MODULE_9__["BusinessService"];
      });
      /***/

    },

    /***/
    "PSoG":
    /*!***************************************!*\
      !*** ./src/app/_guards/auth.guard.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function PSoG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/authentication.service */
      "pW6c");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var url = state.url;
            return this.checkLogin(url);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin(url) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));

            if (!currentUser || !currentUser.id) {
              this.router.navigate(['/login']);
              return false;
            }

            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QXgR":
    /*!***********************************************************!*\
      !*** ./src/app/_services/authenticationclinic.service.ts ***!
      \***********************************************************/

    /*! exports provided: AuthenticationclinicService */

    /***/
    function QXgR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationclinicService", function () {
        return AuthenticationclinicService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AuthenticationclinicService = /*#__PURE__*/function () {
        function AuthenticationclinicService(router, http) {
          _classCallCheck(this, AuthenticationclinicService);

          this.router = router;
          this.http = http;
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
          this.user = this.userSubject.asObservable();
        }

        _createClass(AuthenticationclinicService, [{
          key: "userValue",
          get: function get() {
            return this.userSubject.value;
          }
        }, {
          key: "login",
          value: function login(email, password) {//let headers = new HttpHeaders();
            //headers = headers.append('Content-Type', 'application/json');
            //headers = headers.append('appkey', 'bXktZW4tcHJvLWRldmVsb3BtZW50LXNlY3JldC1rZXlAMjAxOSE=');
            //    return this.http.post<any>(`${environment.apiUrl}/superadmin/login`, { email, password },{ headers })
            //        .pipe(map(user => {
            //      
            //            // store user details and jwt token in local storage to keep user logged in between page refreshes
            //            localStorage.setItem('user', JSON.stringify(user));
            //            this.userSubject.next(user);
            //            return user;
            //        }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('user');
            this.userSubject.next(null);
            this.router.navigate(['/login']);
          }
        }]);

        return AuthenticationclinicService;
      }();

      AuthenticationclinicService.ɵfac = function AuthenticationclinicService_Factory(t) {
        return new (t || AuthenticationclinicService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      AuthenticationclinicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthenticationclinicService,
        factory: AuthenticationclinicService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationclinicService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-block-ui */
      "12jx");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./constant */
      "0b+V");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/spinner/spinner.component */
      "f3yp");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(blockUIService) {
          _classCallCheck(this, AppComponent);

          this.blockUIService = blockUIService;
          this.defaultMessage = 'Default Message...';
          this.timeout = _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].BLOCK_UI_TIMEOUT_SECONDS;
          this.blockInstances = ['block-element', 'block-element-2', 'block-element-3'];
        }

        _createClass(AppComponent, [{
          key: "blockMain",
          value: function blockMain(message) {
            var _this23 = this;

            this.blockUI.start(message);
            setTimeout(function (blockUI) {
              _this23.blockUI.stop();
            }, this.timeout);
          }
        }, {
          key: "blockElement",
          value: function blockElement() {
            var _this24 = this;

            this.elementBlockUI.start();
            setTimeout(function (blockUI) {
              _this24.elementBlockUI.stop();
            }, this.timeout);
          }
        }, {
          key: "blockAllElements",
          value: function blockAllElements() {
            var _this25 = this;

            this.blockUIService.start(this.blockInstances, 'Loading All');
            setTimeout(function (blockUI) {
              _this25.blockUIService.stop(_this25.blockInstances);
            }, this.timeout);
          }
        }, {
          key: "blockUpdate",
          value: function blockUpdate() {
            var _this26 = this;

            var messages = ['Logining In', 'Loading Settings', 'Loading Widgets'],
                i = 0,
                interval;
            this.elementBlockUI.start('Welcome');
            interval = setInterval(function () {
              _this26.elementBlockUI.update(messages[i]);

              i++;

              if (i > messages.length) {
                _this26.elementBlockUI.stop();

                clearInterval(interval);
              }
            }, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].BLOCK_UI_UPDATE_TIMEOUT_SECONDS);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUIService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "block-ui");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUIComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])()], AppComponent.prototype, "blockUI", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('block-element')], AppComponent.prototype, "elementBlockUI", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUIService"]
          }];
        }, {
          blockUI: [],
          elementBlockUI: []
        });
      })();
      /***/

    },

    /***/
    "VITL":
    /*!*******************************************!*\
      !*** ./src/app/_services/user.service.ts ***!
      \*******************************************/

    /*! exports provided: UserService */

    /***/
    function VITL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/timeout */
      "g3Qq");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../constant */
      "0b+V");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/common.service */
      "YWaA");

      var UserService = /*#__PURE__*/function () {
        function UserService(http, router, commonService) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.router = router;
          this.commonService = commonService;
          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }

        _createClass(UserService, [{
          key: "isClinicLoggedIn",
          get: function get() {
            var currentClinic = JSON.parse(localStorage.getItem('currentClinic'));

            if (currentClinic && currentClinic.id) {
              this.loggedIn.next(true);
            }

            return this.loggedIn.asObservable();
          }
        }, {
          key: "getUserById",
          value: function getUserById(userId) {
            var _this27 = this;

            var requestData = {
              "userId": userId
            };
            return new Promise(function (resolve, reject) {
              _this27.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'user/get-profile', JSON.stringify(requestData), _this27.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this28 = this;

            return new Promise(function (resolve, reject) {
              _this28.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'user/list', _this28.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getMessages",
          value: function getMessages() {
            var _this29 = this;

            return new Promise(function (resolve, reject) {
              _this29.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'user/message-list', _this29.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          } //getarchivedClients() {
          //     return new Promise((resolve, reject) => {
          //         this.http.get(Config.API_BASE_PATH+'client/archivedlist', this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY))
          //         .timeout(Config.TIMEOUT_SECONDS)
          //         .subscribe(res => {
          //             console.log(res);
          //             resolve(res);
          //         }, (err) => {
          //             reject(err);
          //         });
          //     });
          //}

        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var _this30 = this;

            var requestData = {
              "id": id
            };
            return new Promise(function (resolve, reject) {
              _this30.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'user/delete-user', JSON.stringify(requestData), _this30.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(id) {
            var _this31 = this;

            var requestData = {
              "userId": id
            };
            return new Promise(function (resolve, reject) {
              _this31.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'user/update-user-status', JSON.stringify(requestData), _this31.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          } //userRegister(firstName: string, lastName:string,emailAddress: string, phoneNumber:string,username: string, password: string, dateOfBirth: string, role: string, address:string,countryId: string, stateId: string, cityId:string, zipCode: string, emergencyContact:string, maritialStatus:string, profileImage:string) {
          //    let requestData = {
          //        "first_name":firstName,
          //        "last_name":lastName,
          //        "email":emailAddress,           
          //        "username":username,
          //        "password":password,
          //        "role_id":role,
          //        "phone_number":phoneNumber,  
          //        "address":address,
          //        "country_id":countryId,
          //        "state_id":stateId,
          //        "city_id":cityId,
          //        "zip_code":zipCode,
          //        "image_url ":profileImage,            
          //        "date_of_birth ":dateOfBirth,
          //        "emergency_contact":emergencyContact,
          //        "marital_status":maritialStatus
          //    }
          //  return new Promise((resolve, reject) => {
          //      this.http.post(Config.API_BASE_PATH+'user/add-user', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY))
          //      .timeout(Config.TIMEOUT_SECONDS)
          //      .subscribe(res => {
          //          resolve(res);
          //      }, (err) => {
          //          reject(err);
          //      });
          //  });
          //}

        }, {
          key: "userRegister",
          value: function userRegister(postData) {
            var _this32 = this;

            return new Promise(function (resolve, reject) {
              _this32.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'user/add-user', postData, _this32.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN, 'image')).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "userUpdate",
          value: function userUpdate(postData) {
            var _this33 = this;

            return new Promise(function (resolve, reject) {
              _this33.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'user/edit-user', postData, _this33.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN, 'image')).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getRoles",
          value: function getRoles() {
            var _this34 = this;

            return new Promise(function (resolve, reject) {
              _this34.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'role/list', _this34.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getCountries",
          value: function getCountries() {
            var _this35 = this;

            return new Promise(function (resolve, reject) {
              _this35.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'country-list?subdomain=sms', _this35.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getStatesById",
          value: function getStatesById(countryId) {
            var _this36 = this;

            var requestData = {
              "country_id": countryId
            };
            return new Promise(function (resolve, reject) {
              _this36.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'state-list-by-country-id', JSON.stringify(requestData), _this36.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getCitiesById",
          value: function getCitiesById(stateId) {
            var _this37 = this;

            var requestData = {
              "state_id": stateId
            };
            return new Promise(function (resolve, reject) {
              _this37.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'city-list-by-state-id', JSON.stringify(requestData), _this37.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(subject, message, useremail, fromuser, touser, claimNo, wcabNo) {
            var _this38 = this;

            var requestData = {
              "subject": subject,
              "message": message,
              "useremail": useremail,
              "fromuser": fromuser,
              "touser": touser,
              "claim_no": claimNo,
              "wcab_no": wcabNo
            };
            return new Promise(function (resolve, reject) {
              _this38.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'user/user-send-message', JSON.stringify(requestData), _this38.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XgRA":
    /*!***********************************!*\
      !*** ./src/app/_helpers/index.ts ***!
      \***********************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function XgRA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error.interceptor */
      "nSnL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"];
      });
      /***/

    },

    /***/
    "YWaA":
    /*!*********************************************!*\
      !*** ./src/app/_services/common.service.ts ***!
      \*********************************************/

    /*! exports provided: CommonService */

    /***/
    function YWaA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../constant */
      "0b+V");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CommonService = /*#__PURE__*/function () {
        function CommonService(http, titleService, router, route) {
          _classCallCheck(this, CommonService);

          this.http = http;
          this.titleService = titleService;
          this.router = router;
          this.route = route;
        }

        _createClass(CommonService, [{
          key: "setPageTitle",
          value: function setPageTitle(pageTitle) {
            this.titleService.setTitle(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].APP_TITLE + _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].TITLE_SEPRATOR + pageTitle);
          } // getPageUrl(url){
          // 	return '/'+url;
          // }

        }, {
          key: "getHttpOptions",
          value: function getHttpOptions() {
            var accessToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var appKey = arguments.length > 1 ? arguments[1] : undefined;
            var subDomain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var reqType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var httpOptions = {}; //console.warn(Config.SUBDOMAIN);
            //console.warn(accessToken);

            subDomain = _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].SUBDOMAIN;

            if (accessToken && accessToken.length > 0 && reqType == 'image') {
              //console.warn("inside");
              accessToken = accessToken.replace(/(^"|"$)/g, '');
              httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  //'Content-Type': 'application/json; charset=utf-8',
                  //'Content-Type': undefined,
                  //'Accept': 'application/json',
                  'Authorization': 'Bearer ' + accessToken,
                  'appkey': appKey,
                  'subDomain': subDomain
                })
              };
              return httpOptions;
            } else if (accessToken && accessToken.length > 0) {
              //console.warn("outside");
              accessToken = accessToken.replace(/(^"|"$)/g, '');
              httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  'Content-Type': 'application/json; charset=utf-8',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + accessToken,
                  'appkey': appKey,
                  'subDomain': subDomain
                })
              };
              return httpOptions;
            } else {
              httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  'Content-Type': 'application/json; charset=utf-8',
                  'Accept': 'application/json',
                  'appKey': appKey,
                  'subDomain': subDomain
                })
              };
              return httpOptions;
            }
          } // reloadUrl(returnUrl){
          //     setTimeout(()=>{
          //         this.router.navigate([returnUrl])
          //     }, Config.PAGE_RELOAD_TIMEOUT_SECONDS);
          // }
          // checkLogin(){
          //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          //     let routerUrl = this.router.url;
          //     let returnUrl = routerUrl || '/';
          //     if (currentUser && currentUser.id) {
          //         if(routerUrl.includes(Config.LOGIN_URL) || routerUrl.includes(Config.FORGOT_PASSWORD_URL) || routerUrl.includes(Config.REGISTRATION_VERIFY_URL) || routerUrl.includes(Config.RESET_PASSWORD_URL)){
          //             this.router.navigate(['/']);
          //         }else{
          //             this.router.navigate([returnUrl]);
          //         }
          //     }else{
          //         if(!routerUrl.includes(Config.FORGOT_PASSWORD_URL) && !routerUrl.includes(Config.REGISTRATION_VERIFY_URL) && !routerUrl.includes(Config.RESET_PASSWORD_URL)){
          //             this.router.navigate([returnUrl+'login']);
          //         }
          //     }
          // }

        }, {
          key: "checkSuperAdminLogin",
          value: function checkSuperAdminLogin() {
            var currentSuperAdmin = JSON.parse(localStorage.getItem('currentSuperAdmin'));
            var routerUrl = this.router.url;
            var returnUrl = routerUrl || '/';

            if (currentSuperAdmin && currentSuperAdmin.id) {
              if (routerUrl.includes('login') || routerUrl.includes('forgot-password') || routerUrl.includes('reset-password')) {
                this.router.navigate(['/']);
              } else {
                this.router.navigate([returnUrl]);
              }
            } else {
              if (!routerUrl.includes('forgot-password') && !routerUrl.includes('reset-password')) {
                this.router.navigate([returnUrl + 'login']);
              }
            }
          }
        }, {
          key: "commonSuperAdminLogout",
          value: function commonSuperAdminLogout() {
            localStorage.removeItem('currentSuperAdmin');
            localStorage.removeItem('currentSuperAdminToken');
            localStorage.clear();
            return true;
          }
        }, {
          key: "getLoggedInSuperAdminData",
          value: function getLoggedInSuperAdminData() {
            return JSON.parse(localStorage.getItem('currentSuperAdmin'));
          }
          /************************** Clinic Module Service ******************/

        }, {
          key: "checkClinicLogin",
          value: function checkClinicLogin() {
            var currentClinic = JSON.parse(localStorage.getItem('currentClinic'));
            var routerUrl = this.router.url;
            var returnUrl = routerUrl || '/';

            if (currentClinic && currentClinic.id) {
              if (routerUrl.includes('login') || routerUrl.includes('forgot-password') || routerUrl.includes('reset-password')) {
                this.router.navigate(['/']);
              } else {
                this.router.navigate([returnUrl]);
              }
            } else {
              if (!routerUrl.includes('forgot-password') && !routerUrl.includes('reset-password')) {
                this.router.navigate([returnUrl + 'login']);
              }
            }
          }
        }, {
          key: "commonClinicLogout",
          value: function commonClinicLogout() {
            localStorage.removeItem('currentClinic');
            localStorage.removeItem('currentClinicToken');
            localStorage.clear();
            return true;
          }
        }, {
          key: "getLoggedInClinicData",
          value: function getLoggedInClinicData() {
            return JSON.parse(localStorage.getItem('currentClinic'));
          }
        }]);

        return CommonService;
      }();

      CommonService.ɵfac = function CommonService_Factory(t) {
        return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CommonService,
        factory: CommonService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./_helpers */
      "XgRA");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      "nod/");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var ng_block_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-block-ui */
      "12jx");
      /* harmony import */


      var ng_block_ui_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-block-ui/router */
      "K4YA");
      /* harmony import */


      var ng_block_ui_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-block-ui/http */
      "bxEq");
      /* harmony import */


      var _block_element_block_element_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./block-element/block-element.module */
      "Incs");
      /* harmony import */


      var _block_template_block_template_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./block-template/block-template.component */
      "Ip3H");
      /* harmony import */


      var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./shared/spinner/spinner.component */
      "f3yp");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./_guards */
      "tkpy");
      /* harmony import */


      var _guardsclinic__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./_guardsclinic */
      "03oT");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./_services */
      "J9tS");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelSpeed: 2,
        wheelPropagation: true
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _helpers__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"],
          multi: true
        }, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], _guards__WEBPACK_IMPORTED_MODULE_19__["AdminAuthGuard"], _guardsclinic__WEBPACK_IMPORTED_MODULE_20__["AdminclinicAuthGuard"], _services__WEBPACK_IMPORTED_MODULE_21__["CommonService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([]), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], _block_element_block_element_module__WEBPACK_IMPORTED_MODULE_16__["BlockElementModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_13__["BlockUIModule"].forRoot({
          message: '',
          delayStop: 3000,
          template: _block_template_block_template_component__WEBPACK_IMPORTED_MODULE_17__["BlockTemplateComponent"]
        }), ng_block_ui_router__WEBPACK_IMPORTED_MODULE_14__["BlockUIRouterModule"].forRoot(), ng_block_ui_http__WEBPACK_IMPORTED_MODULE_15__["BlockUIHttpModule"].forRoot({
          requestFilters: []
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"], _block_template_block_template_component__WEBPACK_IMPORTED_MODULE_17__["BlockTemplateComponent"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__["SpinnerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], _block_element_block_element_module__WEBPACK_IMPORTED_MODULE_16__["BlockElementModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_13__["BlockUIModule"], ng_block_ui_router__WEBPACK_IMPORTED_MODULE_14__["BlockUIRouterModule"], ng_block_ui_http__WEBPACK_IMPORTED_MODULE_15__["BlockUIHttpModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"], _block_template_block_template_component__WEBPACK_IMPORTED_MODULE_17__["BlockTemplateComponent"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__["SpinnerComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([]), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], _block_element_block_element_module__WEBPACK_IMPORTED_MODULE_16__["BlockElementModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_13__["BlockUIModule"].forRoot({
              message: '',
              delayStop: 3000,
              template: _block_template_block_template_component__WEBPACK_IMPORTED_MODULE_17__["BlockTemplateComponent"]
            }), ng_block_ui_router__WEBPACK_IMPORTED_MODULE_14__["BlockUIRouterModule"].forRoot(), ng_block_ui_http__WEBPACK_IMPORTED_MODULE_15__["BlockUIHttpModule"].forRoot({
              requestFilters: []
            })],
            entryComponents: [_block_template_block_template_component__WEBPACK_IMPORTED_MODULE_17__["BlockTemplateComponent"]],
            providers: [{
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }, {
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"]
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
              useClass: _helpers__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"],
              multi: true
            }, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], _guards__WEBPACK_IMPORTED_MODULE_19__["AdminAuthGuard"], _guardsclinic__WEBPACK_IMPORTED_MODULE_20__["AdminclinicAuthGuard"], _services__WEBPACK_IMPORTED_MODULE_21__["CommonService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bvSn":
    /*!*************************************************!*\
      !*** ./src/app/_services/admin.auth.service.ts ***!
      \*************************************************/

    /*! exports provided: AdminAuthService */

    /***/
    function bvSn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminAuthService", function () {
        return AdminAuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/timeout */
      "g3Qq");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../constant */
      "0b+V");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/common.service */
      "YWaA");

      var AdminAuthService = /*#__PURE__*/function () {
        function AdminAuthService(http, router, commonService) {
          _classCallCheck(this, AdminAuthService);

          this.http = http;
          this.router = router;
          this.commonService = commonService;
          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }

        _createClass(AdminAuthService, [{
          key: "isSuperAdminLoggedIn",
          get: function get() {
            var currentSuperAdmin = JSON.parse(localStorage.getItem('currentSuperAdmin'));

            if (currentSuperAdmin && currentSuperAdmin.id) {
              this.loggedIn.next(true);
            }

            return this.loggedIn.asObservable();
          }
        }, {
          key: "login",
          value: function login(username, password) {
            var _this39 = this;

            console.log("superadmin login");
            var requestData = {
              'email': username,
              'password': password
            };
            return new Promise(function (resolve, reject) {
              console.log(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH);

              _this39.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'superadmin/login', JSON.stringify(requestData), _this39.commonService.getHttpOptions(null, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                if (res["status"] == _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUCCESS_STATUS) {
                  _this39.loggedIn.next(true);

                  localStorage.setItem('currentSuperAdmin', JSON.stringify(res["data"]));
                  localStorage.setItem('currentSuperAdminToken', JSON.stringify(res["data"]["token"]));
                  resolve(res);
                } else {
                  resolve(res);
                }
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('currentSuperAdmin');
            localStorage.removeItem('currentSuperAdminToken');
            localStorage.clear();
            this.loggedIn.next(false);
            this.router.navigate(['/superadmin/login']);
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(email) {
            var _this40 = this;

            var requestData = {
              'email': email
            };
            return new Promise(function (resolve, reject) {
              _this40.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'superadmin/forgot-password', JSON.stringify(requestData), _this40.commonService.getHttpOptions(null, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(password, confirmPassword, resetToken) {
            var _this41 = this;

            var requestData = {
              "password": password,
              "confirm_password": confirmPassword,
              "reset_token": resetToken
            };
            return new Promise(function (resolve, reject) {
              _this41.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'superadmin/reset-password', JSON.stringify(requestData), _this41.commonService.getHttpOptions(null, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "changePassword",
          value: function changePassword(oldPassword, newPassword, confirmPassword) {
            var _this42 = this;

            var requestData = {
              "old_password": oldPassword,
              "new_password": newPassword,
              "confirm_new_password": confirmPassword
            };
            return new Promise(function (resolve, reject) {
              _this42.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'superadmin/change-password', JSON.stringify(requestData), _this42.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_SUPERADMIN_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }]);

        return AdminAuthService;
      }();

      AdminAuthService.ɵfac = function AdminAuthService_Factory(t) {
        return new (t || AdminAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]));
      };

      AdminAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AdminAuthService,
        factory: AdminAuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dNWa":
    /*!***********************************************!*\
      !*** ./src/app/_services/business.service.ts ***!
      \***********************************************/

    /*! exports provided: BusinessService */

    /***/
    function dNWa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessService", function () {
        return BusinessService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/timeout */
      "g3Qq");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../constant */
      "0b+V");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/common.service */
      "YWaA"); //import { Client } from '../_models/client';


      var BusinessService = /*#__PURE__*/function () {
        function BusinessService(http, router, commonService) {
          _classCallCheck(this, BusinessService);

          this.http = http;
          this.router = router;
          this.commonService = commonService;
          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }

        _createClass(BusinessService, [{
          key: "isClinicLoggedIn",
          get: function get() {
            var currentClinic = JSON.parse(localStorage.getItem('currentClinic'));

            if (currentClinic && currentClinic.id) {
              this.loggedIn.next(true);
            }

            return this.loggedIn.asObservable();
          }
        }, {
          key: "getBusinessById",
          value: function getBusinessById(businessId) {
            var _this43 = this;

            var requestData = {
              "businessId": businessId
            };
            return new Promise(function (resolve, reject) {
              _this43.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'business/get-business', JSON.stringify(requestData), _this43.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "businessUpdate",
          value: function businessUpdate(postData) {
            var _this44 = this;

            return new Promise(function (resolve, reject) {
              _this44.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'business/edit-business', postData, _this44.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN, 'image')).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          } //businessUpdate(clinicname: string, firstname: string, lastname: string, emailaddress: string, phonenumber: string, address: string, zip: string, businessId: string) {
          //  let requestData = {
          //      "clinicname":clinicname,
          //      "firstname":firstname,
          //      "lastname":lastname,
          //      "emailaddress":emailaddress,
          //      "phonenumber":phonenumber,
          //      "address":address,
          //      "zip":zip,
          //      "businessid":businessId
          //  }
          //  //console.log(requestData);
          //  return new Promise((resolve, reject) => {
          //      this.http.post(Config.API_BASE_PATH+'business/edit-business', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          //      .timeout(Config.TIMEOUT_SECONDS)
          //      .subscribe(res => {
          //          resolve(res);
          //      }, (err) => {
          //          reject(err);
          //      });
          //  });
          //}

        }, {
          key: "getCountries",
          value: function getCountries() {
            var _this45 = this;

            return new Promise(function (resolve, reject) {
              _this45.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'country-list?subdomain=sms', _this45.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getStatesById",
          value: function getStatesById(countryId) {
            var _this46 = this;

            var requestData = {
              "country_id": countryId
            };
            return new Promise(function (resolve, reject) {
              _this46.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'state-list-by-country-id', JSON.stringify(requestData), _this46.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getCitiesById",
          value: function getCitiesById(stateId) {
            var _this47 = this;

            var requestData = {
              "state_id": stateId
            };
            return new Promise(function (resolve, reject) {
              _this47.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'city-list-by-state-id', JSON.stringify(requestData), _this47.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }]);

        return BusinessService;
      }();

      BusinessService.ɵfac = function BusinessService_Factory(t) {
        return new (t || BusinessService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]));
      };

      BusinessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BusinessService,
        factory: BusinessService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusinessService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "f3yp":
    /*!*****************************************************!*\
      !*** ./src/app/shared/spinner/spinner.component.ts ***!
      \*****************************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function f3yp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../constant */
      "0b+V");

      function SpinnerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent(router, document) {
          var _this48 = this;

          _classCallCheck(this, SpinnerComponent);

          this.router = router;
          this.document = document;
          this.isSpinnerVisible = true;
          this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              _this48.isSpinnerVisible = true;
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
              setTimeout(function () {
                _this48.isSpinnerVisible = false;
              }, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SPINNER_TIMEOUT_SECONDS);
            }
          }, function () {
            _this48.isSpinnerVisible = false;
          });
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isSpinnerVisible = false;
          }
        }]);

        return SpinnerComponent;
      }();

      SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerComponent,
        selectors: [["app-spinner"]],
        inputs: {
          backgroundColor: "backgroundColor"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".preloader{\n  position: absolute;\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  top:35%; \n  position: relative;\n  margin: 100px auto;\n}\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #1976d2;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  \n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out;\n}\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n@-webkit-keyframes sk-bounce {\n  0%, 100% { -webkit-transform: scale(0.0) }\n  50% { -webkit-transform: scale(1.0) }\n}\n@keyframes sk-bounce {\n  0%, 100% { \n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 50% { \n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTzs7RUFFUCxzREFBc0Q7RUFDdEQsOENBQThDO0FBQ2hEO0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxXQUFXLDhCQUE4QjtFQUN6QyxNQUFNLDhCQUE4QjtBQUN0QztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsNkJBQTZCO0VBQy9CLEVBQUU7SUFDQSxxQkFBcUI7SUFDckIsNkJBQTZCO0VBQy9CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJlbG9hZGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNwaW5uZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0b3A6MzUlOyBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG59XG5cbi5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBvcGFjaXR5OiAwLjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4uZG91YmxlLWJvdW5jZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cbiAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gIDAlLCAxMDAlIHsgXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICB9IDUwJSB7IFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgfVxufSJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-spinner',
            templateUrl: './spinner.component.html',
            styleUrls: ['./spinner.component.css'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, {
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "mx5+":
    /*!**********************************************!*\
      !*** ./src/app/_services/patient.service.ts ***!
      \**********************************************/

    /*! exports provided: PatientService */

    /***/
    function mx5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatientService", function () {
        return PatientService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/timeout */
      "g3Qq");
      /* harmony import */


      var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../constant */
      "0b+V");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/common.service */
      "YWaA");

      var PatientService = /*#__PURE__*/function () {
        function PatientService(http, router, commonService) {
          _classCallCheck(this, PatientService);

          this.http = http;
          this.router = router;
          this.commonService = commonService;
          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }

        _createClass(PatientService, [{
          key: "isClinicLoggedIn",
          get: function get() {
            var currentClinic = JSON.parse(localStorage.getItem('currentClinic'));

            if (currentClinic && currentClinic.id) {
              this.loggedIn.next(true);
            }

            return this.loggedIn.asObservable();
          }
        }, {
          key: "getDoctors",
          value: function getDoctors() {
            var _this49 = this;

            return new Promise(function (resolve, reject) {
              _this49.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/list-doctors', _this49.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                //console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getStatus",
          value: function getStatus() {
            var _this50 = this;

            return new Promise(function (resolve, reject) {
              _this50.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/list-status', _this50.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                //console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getMedpros",
          value: function getMedpros() {
            var _this51 = this;

            return new Promise(function (resolve, reject) {
              _this51.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/list-medpros', _this51.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                //console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "patientRegister",
          value: function patientRegister(firstName, lastName, dateOfBirth, contctInfo, wcabNo, claimNo, appAttorney, employer, defAttorney, doctorId, medproId, supplementaryWcabno) {
            var _this52 = this;

            var requestData = {
              "first_name": firstName,
              "last_name": lastName,
              "date_of_birth": dateOfBirth,
              "contact_info": contctInfo,
              "case_no": wcabNo,
              "claim_no": claimNo,
              "applicant_attorney": appAttorney,
              "employer": employer,
              "defendant_attorney": defAttorney,
              "doctor_id": doctorId,
              "medpro_id": medproId,
              "supplementary_wcabno": supplementaryWcabno
            }; //console.warn(requestData);

            return new Promise(function (resolve, reject) {
              _this52.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/add-patient', JSON.stringify(requestData), _this52.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                console.log(res);
                resolve(res);
              }, function (err) {
                console.log(err);
                reject(err);
              });
            });
          }
        }, {
          key: "getClaims",
          value: function getClaims(roleId) {
            var _this53 = this;

            var requestData = {
              "roleId": roleId
            }; // console.log(roleId);

            return new Promise(function (resolve, reject) {
              _this53.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/list-claims', JSON.stringify(requestData), _this53.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                //console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getArchivedClaims",
          value: function getArchivedClaims() {
            var _this54 = this;

            return new Promise(function (resolve, reject) {
              _this54.http.get(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/list-archived-claims', _this54.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                //console.log(res);
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getClaimById",
          value: function getClaimById(claimId) {
            var _this55 = this;

            var requestData = {
              "claimId": claimId
            };
            return new Promise(function (resolve, reject) {
              _this55.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/get-claim-detail', JSON.stringify(requestData), _this55.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "addDocument",
          value: function addDocument(postData) {
            var _this56 = this;

            //console.log(postData);
            return new Promise(function (resolve, reject) {
              _this56.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/add-document', postData, _this56.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN, 'image')).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getDocumentsByClaimId",
          value: function getDocumentsByClaimId(claimId) {
            var _this57 = this;

            var requestData = {
              "claimId": claimId
            };
            return new Promise(function (resolve, reject) {
              _this57.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/list-document', JSON.stringify(requestData), _this57.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "claimUpdate",
          value: function claimUpdate(firstName, lastName, contactInfo, appAttorney, employer, defAttorney, patientId, dateOfBirth) {
            var _this58 = this;

            var requestData = {
              "firstName": firstName,
              "lastName": lastName,
              "contactInfo": contactInfo,
              "appAttorney": appAttorney,
              "employer": employer,
              "defAttorney": defAttorney,
              "patientId": patientId,
              "date_of_birth": dateOfBirth
            }; //console.log(requestData);

            return new Promise(function (resolve, reject) {
              _this58.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/edit-patient', JSON.stringify(requestData), _this58.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "deleteClaim",
          value: function deleteClaim(id) {
            var _this59 = this;

            var requestData = {
              "id": id
            };
            return new Promise(function (resolve, reject) {
              _this59.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/delete-claim', JSON.stringify(requestData), _this59.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "updateClaimStatus",
          value: function updateClaimStatus(id, roleId, claimId) {
            var _this60 = this;

            var requestData = {
              "userId": id,
              "roleId": roleId,
              "claimId": claimId
            };
            return new Promise(function (resolve, reject) {
              _this60.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/update-claim-status', JSON.stringify(requestData), _this60.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "updateClaimStatusbyClaimId",
          value: function updateClaimStatusbyClaimId(claimId, Status) {
            var _this61 = this;

            var requestData = {
              "status": Status,
              "claimId": claimId
            };
            return new Promise(function (resolve, reject) {
              _this61.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/update-status-claimId', JSON.stringify(requestData), _this61.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "deleteDocument",
          value: function deleteDocument(id) {
            var _this62 = this;

            var requestData = {
              "id": id
            };
            return new Promise(function (resolve, reject) {
              _this62.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/delete-document', JSON.stringify(requestData), _this62.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getDocumentById",
          value: function getDocumentById(documentId) {
            var _this63 = this;

            var requestData = {
              "documentId": documentId
            };
            return new Promise(function (resolve, reject) {
              _this63.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/get-document-detail', JSON.stringify(requestData), _this63.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "documentUpdate",
          value: function documentUpdate(documentNote, expectedDate, documentId) {
            var _this64 = this;

            var requestData = {
              "documentNote": documentNote,
              "expectedDate": expectedDate,
              "documentId": documentId
            }; //console.log(requestData);

            return new Promise(function (resolve, reject) {
              _this64.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/edit-document', JSON.stringify(requestData), _this64.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(id) {
            var _this65 = this;

            var requestData = {
              "documentId": id
            };
            return new Promise(function (resolve, reject) {
              _this65.http.post(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_BASE_PATH + 'patient/update-document-status', JSON.stringify(requestData), _this65.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'), _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].API_OTHERS_KEY, _constant__WEBPACK_IMPORTED_MODULE_3__["Config"].SUBDOMAIN)).timeout(_constant__WEBPACK_IMPORTED_MODULE_3__["Config"].TIMEOUT_SECONDS).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }]);

        return PatientService;
      }();

      PatientService.ɵfac = function PatientService_Factory(t) {
        return new (t || PatientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]));
      };

      PatientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PatientService,
        factory: PatientService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nSnL":
    /*!***********************************************!*\
      !*** ./src/app/_helpers/error.interceptor.ts ***!
      \***********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function nSnL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/_services */
      "J9tS");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(adminAuthService, adminclinicAuthService) {
          _classCallCheck(this, ErrorInterceptor);

          this.adminAuthService = adminAuthService;
          this.adminclinicAuthService = adminclinicAuthService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this66 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                if (request["url"].indexOf('superadmin') !== -1) {
                  _this66.adminAuthService.logout();
                } else if (request["url"].indexOf('clinic') !== -1) {
                  _this66.adminclinicAuthService.logout();
                } else {//this.authenticationService.logout();    
                }
              }

              var error = err.error.message || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AdminclinicAuthService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
          }, {
            type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AdminclinicAuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nod/":
    /*!**************************************************!*\
      !*** ./src/app/not-found/not-found.component.ts ***!
      \**************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function nod(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services */
      "J9tS");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent(route, commonService) {
          _classCallCheck(this, NotFoundComponent);

          this.route = route;
          this.commonService = commonService;
          this.commonService.setPageTitle(this.route.snapshot.data['title']);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["CommonService"]));
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 18,
        vars: 0,
        consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-6", "col-lg-8", "col-md-5"], [1, "card", "o-hidden", "border-0", "shadow-lg", "my-5"], [1, "card-body", "p-0"], [1, "row"], [1, "col-lg-12"], [1, "p-5"], [1, "text-center"], ["src", "assets/img/logo.png", "alt", "app-logo", 1, "logo"], ["data-text", "404", 1, "lead", "text-gray-800"], [1, "lead", "text-gray-800", "mb-5"], [1, "text-gray-500", "mb-0"], ["href", ""]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Page Not Found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "It looks like you found a glitch in the matrix...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u2190 Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pW6c":
    /*!*****************************************************!*\
      !*** ./src/app/_services/authentication.service.ts ***!
      \*****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function pW6c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(router, http) {
          _classCallCheck(this, AuthenticationService);

          this.router = router;
          this.http = http;
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
          this.user = this.userSubject.asObservable();
        }

        _createClass(AuthenticationService, [{
          key: "userValue",
          get: function get() {
            return this.userSubject.value;
          }
        }, {
          key: "login",
          value: function login(email, password) {//let headers = new HttpHeaders();
            //headers = headers.append('Content-Type', 'application/json');
            //headers = headers.append('appkey', 'bXktZW4tcHJvLWRldmVsb3BtZW50LXNlY3JldC1rZXlAMjAxOSE=');
            //    return this.http.post<any>(`${environment.apiUrl}/superadmin/login`, { email, password },{ headers })
            //        .pipe(map(user => {
            //      
            //            // store user details and jwt token in local storage to keep user logged in between page refreshes
            //            localStorage.setItem('user', JSON.stringify(user));
            //            this.userSubject.next(user);
            //            return user;
            //        }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('user');
            this.userSubject.next(null);
            this.router.navigate(['/login']);
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tkpy":
    /*!**********************************!*\
      !*** ./src/app/_guards/index.ts ***!
      \**********************************/

    /*! exports provided: AuthGuard, AdminAuthGuard */

    /***/
    function tkpy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "PSoG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /* harmony import */


      var _admin_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin.auth.guard */
      "/XHt");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function () {
        return _admin_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AdminAuthGuard"];
      });
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./constant */
      "0b+V");
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      "nod/");
      /* harmony import */


      var ng_block_ui_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-block-ui/router */
      "K4YA");

      var fullURL = window.location.host.split('.');
      var subDomain = '';
      console.log("Full URL : ".concat(fullURL));
      console.log("Length of Full URL : ".concat(fullURL.length));

      if (fullURL.length == 3) {
        subDomain = fullURL[0];
        _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].SUBDOMAIN = 'medirecx_' + subDomain;
      }

      console.log("Subdomain :".concat(subDomain)); //var subDomain = 'sms';
      //Config.SUBDOMAIN = 'medirecx_'+subDomain;

      var routes = [];

      if (subDomain !== '') {
        console.log('if'); //routes.push({
        //    path: '404', 
        //    component: NotFoundComponent,
        //    canActivateChild: [BlockUIPreventNavigation],
        //    data: {
        //        title:Config.NOT_FOUND_TITLE
        //    }
        //});
        //routes.push({
        //    path: '**', 
        //    redirectTo: '/404'
        //});

        routes.push({
          path: '',
          redirectTo: '/clinic',
          pathMatch: 'full'
        });
        routes.push({
          path: 'clinic',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | clinic-clinic-module */
            [__webpack_require__.e("default~clinic-clinic-module~superadmin-superadmin-module"), __webpack_require__.e("clinic-clinic-module")]).then(__webpack_require__.bind(null,
            /*! ./clinic/clinic.module */
            "h7pw")).then(function (m) {
              return m.ClinicModule;
            });
          },
          data: {
            title: _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].CLINIC_TITLE
          },
          canActivateChild: [ng_block_ui_router__WEBPACK_IMPORTED_MODULE_4__["BlockUIPreventNavigation"]]
        });
        routes.push({
          path: '404',
          component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
          canActivateChild: [ng_block_ui_router__WEBPACK_IMPORTED_MODULE_4__["BlockUIPreventNavigation"]],
          data: {
            title: _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NOT_FOUND_TITLE
          }
        });
        routes.push({
          path: '**',
          redirectTo: '404'
        });
      } else {
        console.log('else');
        routes.push({
          path: '',
          redirectTo: '/superadmin',
          pathMatch: 'full'
        });
        routes.push({
          path: 'superadmin',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | superadmin-superadmin-module */
            [__webpack_require__.e("default~clinic-clinic-module~superadmin-superadmin-module"), __webpack_require__.e("superadmin-superadmin-module")]).then(__webpack_require__.bind(null,
            /*! ./superadmin/superadmin.module */
            "T2Ka")).then(function (m) {
              return m.SuperAdminModule;
            });
          },
          data: {
            title: _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].SUPERADMIN_TITLE
          },
          canActivateChild: [ng_block_ui_router__WEBPACK_IMPORTED_MODULE_4__["BlockUIPreventNavigation"]]
        });
        routes.push({
          path: '404',
          component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
          canActivateChild: [ng_block_ui_router__WEBPACK_IMPORTED_MODULE_4__["BlockUIPreventNavigation"]],
          data: {
            title: _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NOT_FOUND_TITLE
          }
        });
        routes.push({
          path: '**',
          redirectTo: '/404'
        });
      }

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vcQU":
    /*!***************************************************!*\
      !*** ./src/app/_guardsclinic/authclinic.guard.ts ***!
      \***************************************************/

    /*! exports provided: AuthclinicGuard */

    /***/
    function vcQU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthclinicGuard", function () {
        return AuthclinicGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authenticationclinic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/authenticationclinic.service */
      "QXgR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthclinicGuard = /*#__PURE__*/function () {
        function AuthclinicGuard(authclinicService, router) {
          _classCallCheck(this, AuthclinicGuard);

          this.authclinicService = authclinicService;
          this.router = router;
        }

        _createClass(AuthclinicGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var url = state.url;
            return this.checkLogin(url);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin(url) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));

            if (!currentUser || !currentUser.id) {
              this.router.navigate(['/login']);
              return false;
            }

            return true;
          }
        }]);

        return AuthclinicGuard;
      }();

      AuthclinicGuard.ɵfac = function AuthclinicGuard_Factory(t) {
        return new (t || AuthclinicGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authenticationclinic_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationclinicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthclinicGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthclinicGuard,
        factory: AuthclinicGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthclinicGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services_authenticationclinic_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationclinicService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "x4yX":
    /*!**********************************************************!*\
      !*** ./src/app/block-element/block-element.component.ts ***!
      \**********************************************************/

    /*! exports provided: BlockElementComponent */

    /***/
    function x4yX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockElementComponent", function () {
        return BlockElementComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BlockElementComponent = function BlockElementComponent() {
        _classCallCheck(this, BlockElementComponent);
      };

      BlockElementComponent.ɵfac = function BlockElementComponent_Factory(t) {
        return new (t || BlockElementComponent)();
      };

      BlockElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlockElementComponent,
        selectors: [["block-element"]],
        decls: 2,
        vars: 0,
        template: function BlockElementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MediRecX Block UI Element");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrLWVsZW1lbnQvYmxvY2stZWxlbWVudC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockElementComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'block-element',
            templateUrl: './block-element.component.html',
            styleUrls: ['./block-element.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map