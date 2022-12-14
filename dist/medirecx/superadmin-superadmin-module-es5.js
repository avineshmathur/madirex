(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["superadmin-superadmin-module"], {
    /***/
    "5r+J":
    /*!**************************************************************!*\
      !*** ./src/app/superadmin/auth/change-password.component.ts ***!
      \**************************************************************/

    /*! exports provided: ChangePasswordComponent */

    /***/
    function rJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
        return ChangePasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../constant */
      "0b+V");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ChangePasswordComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.attributes.oldPassword, " ");
        }
      }

      function ChangePasswordComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.attributes.newPassword, " ");
        }
      }

      function ChangePasswordComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r2.attributes.confirmPassword, " ");
        }
      }

      function ChangePasswordComponent_div_23_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r5.validationMessages.confirmPassword.mismatch, " ");
        }
      }

      function ChangePasswordComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ChangePasswordComponent_div_23_span_1_Template, 2, 1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx_r3.changePasswordForm.hasError("mismatch"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.changePasswordForm.hasError("mismatch"));
        }
      }

      function ChangePasswordComponent_span_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 22);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var ChangePasswordComponent = /*#__PURE__*/function () {
        function ChangePasswordComponent(formBuilder, adminAuthService, toastr, spinner, router, route, commonService) {
          _classCallCheck(this, ChangePasswordComponent);

          this.formBuilder = formBuilder;
          this.adminAuthService = adminAuthService;
          this.toastr = toastr;
          this.spinner = spinner;
          this.router = router;
          this.route = route;
          this.commonService = commonService;
          this.loading = false;
          this.showErrors = 0;
          this.attributes = {
            'oldPassword': '',
            'newPassword': '',
            'confirmPassword': ''
          };
          this.validationMessages = {
            'oldPassword': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].OLD_PASSWORD_REQUIRED_VALIDATION_MSG
            },
            'newPassword': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NEW_PASSWORD_REQUIRED_VALIDATION_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NEW_PASSWORD_NOT_VALID_VALIDATION_MSG
            },
            'confirmPassword': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].CONFIRM_PASSWORD_REQUIRED_VALIDATION_MSG,
              'mismatch': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NEW_PASSWORD_MISMATCH_VALIDATION_MSG
            }
          };
          this.commonService.setPageTitle(this.route.snapshot.data['title']);
          this.commonService.checkSuperAdminLogin();
        }

        _createClass(ChangePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changePasswordForm = this.formBuilder.group({
              oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PASSWORD_REGX)]],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }, {
              validator: this.passwordMatchValidator
            });
          }
        }, {
          key: "passwordMatchValidator",
          value: function passwordMatchValidator(frm) {
            return frm.controls['newPassword'].value === frm.controls['confirmPassword'].value ? null : {
              'mismatch': true
            };
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            this.loading = true;
            this.showErrors = 1;
            var form = this.changePasswordForm;

            for (var field in this.attributes) {
              this.attributes[field] = '';
              var control = form.get(field);

              if (control && !control.valid) {
                var messages = this.validationMessages[field];

                for (var key in control.errors) {
                  if (this.attributes[field] == '') {
                    this.attributes[field] += messages[key] + ' ';
                  }
                }
              }
            }

            if (this.changePasswordForm.valid) {
              this.showErrors = 0;
              this.spinner.show();
              this.adminAuthService.changePassword(this.changePasswordForm.get('oldPassword').value, this.changePasswordForm.get('newPassword').value, this.changePasswordForm.get('confirmPassword').value).then(function (result) {
                _this.spinner.hide();

                _this.loading = false;

                if (result['message'] && result['message'] != '') {
                  _this.toastr.success(result['message']);
                } else {
                  _this.toastr.success(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].RESET_PASSWORD_SUCCESS_MSG);
                }

                _this.changePasswordForm.reset();
              }, function (error) {
                _this.spinner.hide();

                _this.loading = false;

                _this.changePasswordForm.reset();

                _this.toastr.error(error);
              });
            } else {
              this.loading = false;
            }
          }
        }]);

        return ChangePasswordComponent;
      }();

      ChangePasswordComponent.??fac = function ChangePasswordComponent_Factory(t) {
        return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      ChangePasswordComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ChangePasswordComponent,
        selectors: [["app-change-password"]],
        decls: 27,
        vars: 15,
        consts: [[1, "container-fluid"], [1, "d-sm-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "h3", "mb-0", "text-gray-800"], [1, "row"], [1, "col-xl-12", "col-md-12", "mb-4"], [1, "card", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col"], ["novalidate", "", 1, "", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-group"], ["type", "password", "id", "inputOldPassword", "aria-describedby", "oldPasswordHelp", "placeholder", "Enter Old Password...", "formControlName", "oldPassword", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "id", "inputNewPassword", "aria-describedby", "newPasswordHelp", "placeholder", "Enter New Password...", "formControlName", "newPassword", 1, "form-control", 3, "ngClass"], ["type", "password", "id", "inputConfirmPassword", "aria-describedby", "confirmPasswordHelp", "placeholder", "Enter Confrim Password...", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 3, "hidden", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "invalid-feedback"], [1, "invalid-feedback", 3, "hidden"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ChangePasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_10_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ChangePasswordComponent_div_14_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ChangePasswordComponent_div_18_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ChangePasswordComponent_div_22_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ChangePasswordComponent_div_23_Template, 2, 2, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ChangePasswordComponent_span_25_Template, 1, 0, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.changePasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c0, ctx.showErrors && !ctx.changePasswordForm.controls.oldPassword.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.changePasswordForm.controls.oldPassword.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c0, ctx.showErrors && !ctx.changePasswordForm.controls.newPassword.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.changePasswordForm.controls.newPassword.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c0, ctx.showErrors && (!ctx.changePasswordForm.controls.confirmPassword.valid || ctx.changePasswordForm.hasError("mismatch"))));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.changePasswordForm.controls.confirmPassword.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && ctx.changePasswordForm.controls.confirmPassword.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChangePasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./auth.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "85qy":
    /*!****************************************************!*\
      !*** ./src/app/superadmin/superadmin.component.ts ***!
      \****************************************************/

    /*! exports provided: SuperAdminComponent */

    /***/
    function qy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuperAdminComponent", function () {
        return SuperAdminComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../constant */
      "0b+V");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services */
      "J9tS");

      var SuperAdminComponent = /*#__PURE__*/function () {
        function SuperAdminComponent(route, commonService) {
          _classCallCheck(this, SuperAdminComponent);

          this.route = route;
          this.commonService = commonService;
          this.underConstructionImgPath = _constant__WEBPACK_IMPORTED_MODULE_1__["Config"].UNDER_CONSTRUCTION_IMG_PATH;
          this.commonService.setPageTitle(this.route.snapshot.data['title']);
        }

        _createClass(SuperAdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SuperAdminComponent;
      }();

      SuperAdminComponent.??fac = function SuperAdminComponent_Factory(t) {
        return new (t || SuperAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      SuperAdminComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SuperAdminComponent,
        selectors: [["app-superadmin"]],
        decls: 11,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "d-sm-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "h3", "mb-0", "text-gray-800"], [1, "row"], [1, "col-xl-12", "col-md-12", "mb-4"], [1, "card", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col", "text-center"], ["alt", "under-construction-image", 1, "img-fluid", 3, "src"]],
        template: function SuperAdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.underConstructionImgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vc3VwZXJhZG1pbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SuperAdminComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-superadmin',
            templateUrl: './superadmin.component.html',
            styleUrls: ['./superadmin.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FYNE":
    /*!**************************************************************!*\
      !*** ./src/app/superadmin/layout/header/header.component.ts ***!
      \**************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function FYNE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../constant */
      "0b+V");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_services */
      "J9tS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(commonService, adminAuthService) {
          _classCallCheck(this, HeaderComponent);

          this.commonService = commonService;
          this.adminAuthService = adminAuthService;
          this.currentDate = new Date();
          this.appTitle = _constant__WEBPACK_IMPORTED_MODULE_1__["Config"].APP_TITLE;
          this.profileImgPath = _constant__WEBPACK_IMPORTED_MODULE_1__["Config"].PROFILE_NO_IMG_PATH;
          this.loggedInSuperAdminDetails = this.commonService.getLoggedInSuperAdminData();
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            var _this2 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: _constant__WEBPACK_IMPORTED_MODULE_1__["Config"].SWAL_LOGOUT_TITLE,
              text: _constant__WEBPACK_IMPORTED_MODULE_1__["Config"].SWAL_LOGOUT_TEXT,
              icon: 'question',
              showCancelButton: true,
              confirmButtonText: _constant__WEBPACK_IMPORTED_MODULE_1__["Config"].SWAL_LOGOUT_CONFIRM_BUTTON_TEXT,
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false
            }).then(function (result) {
              if (result.isConfirmed) {
                _this2.adminAuthService.logout();
              }
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.??fac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]));
      };

      HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HeaderComponent,
        selectors: [["superadmin-header"]],
        decls: 17,
        vars: 2,
        consts: [[1, "navbar", "navbar-expand", "navbar-light", "bg-white", "topbar", "mb-4", "static-top", "shadow"], ["id", "sidebarToggleTop", 1, "btn", "btn-link", "d-md-none", "rounded-circle", "mr-3"], [1, "fa", "fa-bars"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "no-arrow"], ["href", "#", "id", "userDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "mr-2", "d-none", "d-lg-inline", "text-gray-600", "small"], [1, "img-profile", "rounded-circle", 3, "src"], ["aria-labelledby", "userDropdown", 1, "dropdown-menu", "dropdown-menu-right", "shadow", "animated--grow-in"], ["routerLink", "change-password", 1, "dropdown-item"], [1, "fas", "fa-cogs", "fa-sm", "fa-fw", "mr-2", "text-gray-400"], [1, "dropdown-divider"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-sign-out-alt", "fa-sm", "fa-fw", "mr-2", "text-gray-400"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Change Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_a_click_14_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.loggedInSuperAdminDetails.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.profileImgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'superadmin-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [{
            type: _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Hafk":
    /*!********************************************************************!*\
      !*** ./src/app/superadmin/client/client-send-message.component.ts ***!
      \********************************************************************/

    /*! exports provided: ClientSendMessageComponent */

    /***/
    function Hafk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientSendMessageComponent", function () {
        return ClientSendMessageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../constant */
      "0b+V");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ClientSendMessageComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.attributes.subject, " ");
        }
      }

      function ClientSendMessageComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.attributes.message, " ");
        }
      }

      function ClientSendMessageComponent_span_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 20);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var ClientSendMessageComponent = /*#__PURE__*/function () {
        function ClientSendMessageComponent(formBuilder, adminAuthService, clientService, toastr, spinner, router, route, commonService) {
          _classCallCheck(this, ClientSendMessageComponent);

          this.formBuilder = formBuilder;
          this.adminAuthService = adminAuthService;
          this.clientService = clientService;
          this.toastr = toastr;
          this.spinner = spinner;
          this.router = router;
          this.route = route;
          this.commonService = commonService;
          this.loading = false;
          this.showErrors = 0;
          this.attributes = {
            'subject': '',
            'message': '',
            'useremail': ''
          };
          this.validationMessages = {
            'subject': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'message': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'useremail': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'fromuser': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'touser': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            }
          };
          this.commonService.setPageTitle(this.route.snapshot.data['title']);
          this.commonService.checkSuperAdminLogin();
        }

        _createClass(ClientSendMessageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            var userId = this.route.snapshot.paramMap.get('id'); //getProfileById(clientId: number) {

            if (userId) {
              this.clientService.getProfileById(+userId).then(function (result) {
                _this3.resData = result;
                _this3.user = _this3.resData.data;

                _this3.sendMessageForm.patchValue({
                  useremail: _this3.user.email,
                  fromuser: "1",
                  touser: _this3.user.id
                });
              }, function (error) {
                _this3.spinner.hide();

                _this3.loading = false;

                _this3.toastr.error(error);
              });
            } else {
              this.user = null;
            }

            this.sendMessageForm = this.formBuilder.group({
              subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              useremail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              fromuser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              touser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this4 = this;

            console.log(this.attributes);
            this.loading = true;
            this.showErrors = 1;
            var form = this.sendMessageForm;

            for (var field in this.attributes) {
              this.attributes[field] = '';
              var control = form.get(field);

              if (control && !control.valid) {
                var messages = this.validationMessages[field];

                for (var key in control.errors) {
                  if (this.attributes[field] == '') {
                    this.attributes[field] += messages[key] + ' ';
                  }
                }
              }
            }

            if (this.sendMessageForm.valid) {
              this.showErrors = 0;
              this.spinner.show();
              this.clientService.sendMessage(this.sendMessageForm.get('subject').value, this.sendMessageForm.get('message').value, this.sendMessageForm.get('useremail').value, this.sendMessageForm.get('fromuser').value, this.sendMessageForm.get('touser').value).then(function (result) {
                _this4.spinner.hide();

                _this4.loading = false;

                if (result['message'] && result['message'] != '') {
                  _this4.toastr.success(result['message']);
                } else {
                  _this4.toastr.success(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].MESSAGE_SEND_SUCCESSFULLY);
                }

                _this4.sendMessageForm.reset();
              }, function (error) {
                _this4.spinner.hide();

                _this4.loading = false;

                _this4.toastr.error(error);
              });
            } else {
              this.loading = false;
            }
          }
        }]);

        return ClientSendMessageComponent;
      }();

      ClientSendMessageComponent.??fac = function ClientSendMessageComponent_Factory(t) {
        return new (t || ClientSendMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      ClientSendMessageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ClientSendMessageComponent,
        selectors: [["app-client-send-message"]],
        decls: 24,
        vars: 10,
        consts: [[1, "container-fluid"], [1, "d-sm-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "h3", "mb-0", "text-gray-800"], [1, "row"], [1, "col-xl-12", "col-md-12", "mb-4"], [1, "card", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col"], ["novalidate", "", 1, "", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["type", "text", "id", "inputSubject", "aria-describedby", "newPasswordHelp", "placeholder", "Subject...", "formControlName", "subject", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "textarea", "id", "inputMessage", "aria-describedby", "newPasswordHelp", "placeholder", "Message...", "formControlName", "message", "rows", "8", "cols", "100", 3, "ngClass"], ["type", "hidden", "id", "inputId", "formControlName", "useremail", 1, "form-control"], ["type", "hidden", "id", "inputId", "formControlName", "fromuser", 1, "form-control"], ["type", "hidden", "id", "inputId", "formControlName", "touser", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ClientSendMessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Send Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ClientSendMessageComponent_Template_form_ngSubmit_10_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ClientSendMessageComponent_div_13_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "textarea", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ClientSendMessageComponent_div_16_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ClientSendMessageComponent_span_21_Template, 1, 0, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Send Message ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.sendMessageForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, ctx.showErrors && !ctx.sendMessageForm.controls.subject.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.sendMessageForm.controls.subject.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, ctx.showErrors && !ctx.sendMessageForm.controls.message.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.sendMessageForm.controls.message.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vY2xpZW50L2NsaWVudC1zZW5kLW1lc3NhZ2UuY29tcG9uZW50Lmxlc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientSendMessageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-client-send-message',
            templateUrl: './client-send-message.component.html',
            styleUrls: ['./client-send-message.component.less']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "SfGP":
    /*!**************************************************************!*\
      !*** ./src/app/superadmin/auth/forgot-password.component.ts ***!
      \**************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function SfGP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../constant */
      "0b+V");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ForgotPasswordComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.attributes.email, " ");
        }
      }

      function ForgotPasswordComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 20);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(formBuilder, adminAuthService, toastr, spinner, router, route, commonService) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.formBuilder = formBuilder;
          this.adminAuthService = adminAuthService;
          this.toastr = toastr;
          this.spinner = spinner;
          this.router = router;
          this.route = route;
          this.commonService = commonService;
          this.loading = false;
          this.showErrors = 0;
          this.attributes = {
            'email': ''
          };
          this.validationMessages = {
            'email': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].EMAIL_REQUIRED_VALIDATION_MSG,
              'email': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].EMAIL_FORMAT_VALIDATION_MSG
            }
          };
          this.commonService.setPageTitle(this.route.snapshot.data['title']);
          this.commonService.checkSuperAdminLogin();
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.forgotPasswordForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this5 = this;

            this.loading = true;
            this.showErrors = 1;
            var form = this.forgotPasswordForm;

            for (var field in this.attributes) {
              this.attributes[field] = '';
              var control = form.get(field);

              if (control && !control.valid) {
                var messages = this.validationMessages[field];

                for (var key in control.errors) {
                  if (this.attributes[field] == '') {
                    this.attributes[field] += messages[key] + ' ';
                  }
                }
              }
            }

            if (this.forgotPasswordForm.valid) {
              this.showErrors = 0;
              this.spinner.show();
              this.adminAuthService.forgotPassword(this.forgotPasswordForm.get('email').value).then(function (result) {
                _this5.spinner.hide();

                _this5.loading = false;

                if (result['message'] && result['message'] != '') {
                  _this5.toastr.success(result['message']);
                } else {
                  _this5.toastr.success(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].FORGOT_PASSWORD_SUCCESS_MSG);
                }

                _this5.router.navigate(['/superadmin/login']);
              }, function (error) {
                _this5.spinner.hide();

                _this5.loading = false;

                _this5.forgotPasswordForm.reset();

                _this5.toastr.error(error);
              });
            } else {
              this.loading = false;
            }
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.??fac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      ForgotPasswordComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 25,
        vars: 6,
        consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-6", "col-lg-8", "col-md-5"], [1, "card", "o-hidden", "border-0", "shadow-lg", "my-5"], [1, "card-body", "p-0"], [1, "row"], [1, "col-lg-12"], [1, "p-5"], [1, "text-center"], ["src", "assets/img/logo.png", "alt", "app-logo", 1, "logo"], [1, "h4", "text-gray-900", "mb-4"], [1, "mb-4"], ["novalidate", "", 1, "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "id", "inputEmail", "aria-describedby", "emailHelp", "placeholder", "Enter Email Address...", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "./../login", 1, "small"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h1", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Forgot Your Password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_14_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ForgotPasswordComponent_div_17_Template, 2, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ForgotPasswordComponent_span_19_Template, 1, 0, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Reset Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Already have an account? Login!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.forgotPasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, ctx.showErrors && !ctx.forgotPasswordForm.controls.email.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.forgotPasswordForm.controls.email.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./auth.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "T2Ka":
    /*!*************************************************!*\
      !*** ./src/app/superadmin/superadmin.module.ts ***!
      \*************************************************/

    /*! exports provided: SuperAdminModule */

    /***/
    function T2Ka(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuperAdminModule", function () {
        return SuperAdminModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _superadmin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./superadmin.component */
      "85qy");
      /* harmony import */


      var _auth_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth/login.component */
      "zLGS");
      /* harmony import */


      var _auth_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth/forgot-password.component */
      "SfGP");
      /* harmony import */


      var _auth_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./auth/reset-password.component */
      "tXs6");
      /* harmony import */


      var _auth_change_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./auth/change-password.component */
      "5r+J");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../constant */
      "0b+V");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../_guards */
      "tkpy");
      /* harmony import */


      var _layout_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./layout/layout.component */
      "pbjI");
      /* harmony import */


      var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layout/sidebar/sidebar.component */
      "fRwy");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./layout/footer/footer.component */
      "etXb");
      /* harmony import */


      var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./layout/header/header.component */
      "FYNE");
      /* harmony import */


      var ng_block_ui_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-block-ui/router */
      "K4YA");
      /* harmony import */


      var _client_client_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./client/client.component */
      "xUf/");
      /* harmony import */


      var _client_client_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./client/client-register.component */
      "bHQi");
      /* harmony import */


      var _client_client_update_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./client/client-update.component */
      "jEeI");
      /* harmony import */


      var _client_client_archived_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./client/client-archived.component */
      "jrlp");
      /* harmony import */


      var _client_client_send_message_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./client/client-send-message.component */
      "Hafk");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _client_message_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./client/message.component */
      "prz8"); //import {MatDatepickerModule} from '@angular/material/datepicker'


      var superAdminLoginTitle = _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].SUPERADMIN_TITLE + _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].TITLE_SEPRATOR + _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].LOGIN_TITLE;
      var superAdminForgotPasswordTitle = _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].SUPERADMIN_TITLE + _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].TITLE_SEPRATOR + _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].FORGOT_PASSWORD_TITLE;
      var superAdminResetPasswordTitle = _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].SUPERADMIN_TITLE + _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].TITLE_SEPRATOR + _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].RESET_PASSWORD_TITLE;
      var superAdminChangePasswordTitle = _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].SUPERADMIN_TITLE + _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].TITLE_SEPRATOR + _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].CHANGE_PASSWORD_TITLE;
      var routes = [{
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"],
        canActivateChild: [ng_block_ui_router__WEBPACK_IMPORTED_MODULE_15__["BlockUIPreventNavigation"]],
        children: [{
          path: '',
          component: _superadmin_component__WEBPACK_IMPORTED_MODULE_4__["SuperAdminComponent"],
          data: {
            title: _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].SUPERADMIN_TITLE,
            urls: [{
              title: _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].SUPERADMIN_TITLE,
              url: '/superadmin'
            }, {
              title: _constant__WEBPACK_IMPORTED_MODULE_9__["Config"].SUPERADMIN_TITLE
            }]
          },
          canActivate: [_guards__WEBPACK_IMPORTED_MODULE_10__["AdminAuthGuard"]]
        }, {
          path: 'change-password',
          component: _auth_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"],
          data: {
            title: superAdminChangePasswordTitle,
            urls: [{
              title: superAdminChangePasswordTitle,
              url: '/superadmin/change-password'
            }, {
              title: superAdminChangePasswordTitle
            }]
          },
          canActivate: [_guards__WEBPACK_IMPORTED_MODULE_10__["AdminAuthGuard"]]
        }, {
          path: 'client',
          component: _client_client_component__WEBPACK_IMPORTED_MODULE_16__["ClientComponent"],
          data: {
            title: superAdminChangePasswordTitle,
            urls: [{
              title: superAdminChangePasswordTitle,
              url: '/superadmin/client'
            }, {
              title: superAdminChangePasswordTitle
            }]
          },
          canActivate: [_guards__WEBPACK_IMPORTED_MODULE_10__["AdminAuthGuard"]]
        }, {
          path: 'client-archived',
          component: _client_client_archived_component__WEBPACK_IMPORTED_MODULE_19__["ClientArchivedComponent"],
          data: {
            title: superAdminChangePasswordTitle,
            urls: [{
              title: superAdminChangePasswordTitle,
              url: '/superadmin/client-archived'
            }, {
              title: superAdminChangePasswordTitle
            }]
          },
          canActivate: [_guards__WEBPACK_IMPORTED_MODULE_10__["AdminAuthGuard"]]
        }, {
          path: 'client-register',
          component: _client_client_register_component__WEBPACK_IMPORTED_MODULE_17__["ClientRegisterComponent"],
          data: {
            title: superAdminChangePasswordTitle,
            urls: [{
              title: superAdminChangePasswordTitle,
              url: '/superadmin/client-register'
            }, {
              title: superAdminChangePasswordTitle
            }]
          },
          canActivate: [_guards__WEBPACK_IMPORTED_MODULE_10__["AdminAuthGuard"]]
        }, {
          path: 'client-update/:id',
          component: _client_client_update_component__WEBPACK_IMPORTED_MODULE_18__["ClientUpdateComponent"],
          data: {
            title: superAdminChangePasswordTitle,
            urls: [{
              title: superAdminChangePasswordTitle,
              url: '/superadmin/client-update'
            }, {
              title: superAdminChangePasswordTitle
            }]
          },
          canActivate: [_guards__WEBPACK_IMPORTED_MODULE_10__["AdminAuthGuard"]]
        }, {
          path: 'send-message/:id',
          component: _client_client_send_message_component__WEBPACK_IMPORTED_MODULE_20__["ClientSendMessageComponent"],
          data: {
            title: superAdminChangePasswordTitle,
            urls: [{
              title: superAdminChangePasswordTitle,
              url: '/superadmin/send-message'
            }, {
              title: superAdminChangePasswordTitle
            }]
          },
          canActivate: [_guards__WEBPACK_IMPORTED_MODULE_10__["AdminAuthGuard"]]
        }, {
          path: 'messages',
          component: _client_message_component__WEBPACK_IMPORTED_MODULE_22__["MessageComponent"],
          data: {
            title: superAdminChangePasswordTitle,
            urls: [{
              title: superAdminChangePasswordTitle,
              url: '/superadmin/messages'
            }, {
              title: superAdminChangePasswordTitle
            }]
          },
          canActivate: [_guards__WEBPACK_IMPORTED_MODULE_10__["AdminAuthGuard"]]
        }]
      }, {
        path: '',
        children: [{
          path: 'login',
          component: _auth_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
          data: {
            title: superAdminLoginTitle,
            urls: [{
              title: superAdminLoginTitle,
              url: '/superadmin/login'
            }, {
              title: superAdminLoginTitle
            }]
          }
        }]
      }, {
        path: '',
        children: [{
          path: 'forgot-password',
          component: _auth_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
          data: {
            title: superAdminForgotPasswordTitle,
            urls: [{
              title: superAdminForgotPasswordTitle,
              url: '/superadmin/forgot-password'
            }, {
              title: superAdminForgotPasswordTitle
            }]
          }
        }]
      }, {
        path: '',
        children: [{
          path: 'reset-password',
          component: _auth_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"],
          data: {
            title: superAdminResetPasswordTitle,
            urls: [{
              title: superAdminResetPasswordTitle,
              url: '/superadmin/reset-password'
            }, {
              title: superAdminResetPasswordTitle
            }]
          }
        }]
      }, {
        path: '**',
        redirectTo: '/superadmin'
      }];

      var SuperAdminModule = function SuperAdminModule() {
        _classCallCheck(this, SuperAdminModule);
      };

      SuperAdminModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SuperAdminModule
      });
      SuperAdminModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SuperAdminModule_Factory(t) {
          return new (t || SuperAdminModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], // MatDatepickerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_21__["DataTablesModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SuperAdminModule, {
          declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"], _superadmin_component__WEBPACK_IMPORTED_MODULE_4__["SuperAdminComponent"], _auth_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _auth_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"], _auth_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"], _auth_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _client_client_component__WEBPACK_IMPORTED_MODULE_16__["ClientComponent"], _client_client_register_component__WEBPACK_IMPORTED_MODULE_17__["ClientRegisterComponent"], _client_client_update_component__WEBPACK_IMPORTED_MODULE_18__["ClientUpdateComponent"], _client_client_archived_component__WEBPACK_IMPORTED_MODULE_19__["ClientArchivedComponent"], _client_client_send_message_component__WEBPACK_IMPORTED_MODULE_20__["ClientSendMessageComponent"], _client_message_component__WEBPACK_IMPORTED_MODULE_22__["MessageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], // MatDatepickerModule,
          _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_21__["DataTablesModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SuperAdminModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], // MatDatepickerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_21__["DataTablesModule"]],
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"], _superadmin_component__WEBPACK_IMPORTED_MODULE_4__["SuperAdminComponent"], _auth_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _auth_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"], _auth_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"], _auth_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _client_client_component__WEBPACK_IMPORTED_MODULE_16__["ClientComponent"], _client_client_register_component__WEBPACK_IMPORTED_MODULE_17__["ClientRegisterComponent"], _client_client_update_component__WEBPACK_IMPORTED_MODULE_18__["ClientUpdateComponent"], _client_client_archived_component__WEBPACK_IMPORTED_MODULE_19__["ClientArchivedComponent"], _client_client_send_message_component__WEBPACK_IMPORTED_MODULE_20__["ClientSendMessageComponent"], _client_message_component__WEBPACK_IMPORTED_MODULE_22__["MessageComponent"]],
            providers: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bHQi":
    /*!****************************************************************!*\
      !*** ./src/app/superadmin/client/client-register.component.ts ***!
      \****************************************************************/

    /*! exports provided: ClientRegisterComponent */

    /***/
    function bHQi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientRegisterComponent", function () {
        return ClientRegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../constant */
      "0b+V");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ClientRegisterComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.attributes.clinicName, " ");
        }
      }

      function ClientRegisterComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.attributes.firstName, " ");
        }
      }

      function ClientRegisterComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r2.attributes.lastName, " ");
        }
      }

      function ClientRegisterComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r3.attributes.emailAddress, " ");
        }
      }

      function ClientRegisterComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r4.attributes.userName, " ");
        }
      }

      function ClientRegisterComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r5.attributes.phoneNumber, " ");
        }
      }

      function ClientRegisterComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r6.attributes.startDate, " ");
        }
      }

      function ClientRegisterComponent_div_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r7.attributes.endDate, " ");
        }
      }

      function ClientRegisterComponent_div_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r8.attributes.address, " ");
        }
      }

      function ClientRegisterComponent_option_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var country_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", country_r18.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](country_r18.name);
        }
      }

      function ClientRegisterComponent_div_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r10.attributes.countryId, " ");
        }
      }

      function ClientRegisterComponent_option_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var state_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", state_r19.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](state_r19.name);
        }
      }

      function ClientRegisterComponent_div_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r12.attributes.stateId, " ");
        }
      }

      function ClientRegisterComponent_option_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var city_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", city_r20.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](city_r20.name);
        }
      }

      function ClientRegisterComponent_div_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r14.attributes.city, " ");
        }
      }

      function ClientRegisterComponent_div_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r15.attributes.zipCode, " ");
        }
      }

      function ClientRegisterComponent_div_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r16.attributes.keyword, " ");
        }
      }

      function ClientRegisterComponent_span_124_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 37);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var ClientRegisterComponent = /*#__PURE__*/function () {
        function ClientRegisterComponent(formBuilder, adminAuthService, clientService, toastr, spinner, router, route, commonService) {
          _classCallCheck(this, ClientRegisterComponent);

          this.formBuilder = formBuilder;
          this.adminAuthService = adminAuthService;
          this.clientService = clientService;
          this.toastr = toastr;
          this.spinner = spinner;
          this.router = router;
          this.route = route;
          this.commonService = commonService;
          this.loading = false;
          this.showErrors = 0;
          this.myDate = '';
          this.attributes = {
            'clinicName': '',
            'firstName': '',
            'lastName': '',
            'emailAddress': '',
            'userName': '',
            'phoneNumber': '',
            'startDate': '',
            'endDate': '',
            'address': '',
            'country': '',
            'state': '',
            'city': '',
            'zipCode': '',
            'keyword': ''
          };
          this.validationMessages = {
            'clinicName': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].CLNAME_NOT_VALID_MESSAGE
            },
            'firstName': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NAME_NOT_VALID_MESSAGE
            },
            'lastName': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NAME_NOT_VALID_MESSAGE
            },
            'emailAddress': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].EMAIL_NOT_VALID_MESSAGE
            },
            'userName': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].UNAME_NOT_VALID_MESSAGE
            },
            'phoneNumber': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PHONE_NOT_VALID_MESSAGE
            },
            'startDate': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'endDate': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'address': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'country': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'state': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'city': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'zipCode': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].ZIP_NOT_VALID_MESSAGE
            },
            'keyword': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].KEYWORD_NOT_VALID_MESSAGE
            }
          };
          this.commonService.setPageTitle(this.route.snapshot.data['title']);
          this.commonService.checkSuperAdminLogin();
        }

        _createClass(ClientRegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCountry();
            var dte = new Date();
            this.myDate = this.formatDate(dte);
            this.clientRegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
            this.clientRegisterForm = this.formBuilder.group({
              clinicName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].CLNAME_PATTERN)]],
              firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NAME_PATTERN)]],
              lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NAME_PATTERN)]],
              emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].EMAIL_PATTERN)]],
              userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].UNAME_PATTERN)]],
              phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PHONE_PATTERN)]],
              startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].ZIP_PATTERN)]],
              keyword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].KEYWORD_PATTERN)]]
            });
          }
        }, {
          key: "getCountry",
          value: function getCountry() {
            var _this6 = this;

            this.clientService.getCountries().then(function (result) {
              _this6.resData = result;
              _this6.countries = _this6.resData.data;
            }, function (error) {
              _this6.spinner.hide();

              _this6.loading = false;

              _this6.toastr.error(error);
            });
          }
        }, {
          key: "onChangeCountry",
          value: function onChangeCountry(countryId) {
            var _this7 = this;

            if (countryId) {
              this.clientService.getStatesById(countryId).then(function (result) {
                _this7.resData = result;
                _this7.states = _this7.resData.data.stateList;
                _this7.cities = null;
              }, function (error) {
                _this7.spinner.hide();

                _this7.loading = false;

                _this7.toastr.error(error);
              });
            } else {
              this.states = null;
              this.cities = null;
            }
          }
        }, {
          key: "onChangeState",
          value: function onChangeState(stateId) {
            var _this8 = this;

            if (stateId) {
              this.clientService.getCitiesById(stateId).then(function (result) {
                _this8.resData = result;
                _this8.cities = _this8.resData.data.cityList;
              }, function (error) {
                _this8.spinner.hide();

                _this8.loading = false;

                _this8.toastr.error(error);
              });
            } else {
              this.cities = null;
            }
          }
        }, {
          key: "formatDate",
          value: function formatDate(date) {
            var d = new Date(date);
            var month = '' + (d.getMonth() + 1);
            var day = '' + d.getDate();
            var year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this9 = this;

            this.loading = true;
            this.showErrors = 1;
            var form = this.clientRegisterForm;

            for (var field in this.attributes) {
              this.attributes[field] = '';
              var control = form.get(field);

              if (control && !control.valid) {
                var messages = this.validationMessages[field];

                for (var key in control.errors) {
                  if (this.attributes[field] == '') {
                    this.attributes[field] += messages[key] + ' ';
                  }
                }
              }
            }

            if (this.clientRegisterForm.valid) {
              this.showErrors = 0;
              this.spinner.show();
              this.clientService.clientRegister(this.clientRegisterForm.get('clinicName').value, this.clientRegisterForm.get('firstName').value, this.clientRegisterForm.get('lastName').value, this.clientRegisterForm.get('emailAddress').value, this.clientRegisterForm.get('userName').value, this.clientRegisterForm.get('phoneNumber').value, this.clientRegisterForm.get('startDate').value, this.clientRegisterForm.get('endDate').value, this.clientRegisterForm.get('address').value, this.clientRegisterForm.get('country').value, this.clientRegisterForm.get('state').value, this.clientRegisterForm.get('city').value, this.clientRegisterForm.get('zipCode').value, this.clientRegisterForm.get('keyword').value).then(function (result) {
                _this9.spinner.hide();

                _this9.loading = false;

                if (result['message'] && result['message'] != '') {
                  _this9.toastr.success(result['message']);
                } else {
                  _this9.toastr.success(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].RESET_PASSWORD_SUCCESS_MSG);
                }

                _this9.clientRegisterForm.reset();
              }, function (error) {
                _this9.spinner.hide();

                _this9.loading = false; //this.clientRegisterForm.reset();

                _this9.toastr.error(error);
              });
            } else {
              this.loading = false;
            }
          }
        }, {
          key: "onBlurEvent",
          value: function onBlurEvent(event) {
            console.log(event.target.value);
          }
        }]);

        return ClientRegisterComponent;
      }();

      ClientRegisterComponent.??fac = function ClientRegisterComponent_Factory(t) {
        return new (t || ClientRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      ClientRegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ClientRegisterComponent,
        selectors: [["app-client-register"]],
        decls: 127,
        vars: 63,
        consts: [[1, "container-fluid"], [1, "d-sm-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "h3", "mb-0", "text-gray-800"], [1, "row"], [1, "col-xl-12", "col-md-12", "mb-4"], [1, "card", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col"], ["novalidate", "", 1, "", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "titleBold"], [1, "mandatorySign"], ["type", "text", "id", "inputClinicName", "aria-describedby", "newPasswordHelp", "placeholder", "Clinic Name...", "formControlName", "clinicName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "row"], [1, "col-sm-6", "mb-3", "mb-sm-0"], ["type", "text", "id", "inputFirstName", "aria-describedby", "newPasswordHelp", "placeholder", "First Name...", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], [1, "col-sm-6"], ["type", "text", "id", "inputLastName", "aria-describedby", "newPasswordHelp", "placeholder", "Last Name...", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], ["type", "email", "id", "inputEmailAddress", "aria-describedby", "newPasswordHelp", "placeholder", "Email Address...", "formControlName", "emailAddress", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "inputUserName", "aria-describedby", "newPasswordHelp", "placeholder", "Username...", "formControlName", "userName", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "inputPhoneNumber", "aria-describedby", "newPasswordHelp", "placeholder", "Phone Number...(Eg:-000000000000)", "formControlName", "phoneNumber", 1, "form-control", 3, "ngClass"], ["type", "date", "id", "inputStartDate", "aria-describedby", "newPasswordHelp", "placeholder", "Start Date...", "formControlName", "startDate", 1, "form-control", 3, "min", "ngClass"], ["type", "date", "id", "inputEndDate", "aria-describedby", "newPasswordHelp", "placeholder", "End Date...", "formControlName", "endDate", 1, "form-control", 3, "min", "ngClass"], ["type", "text", "id", "inputAddress", "aria-describedby", "newPasswordHelp", "placeholder", "Address...", "formControlName", "address", 1, "form-control", 3, "ngClass"], ["formControlName", "country", 1, "form-control", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "state", 1, "form-control", 3, "ngClass", "change"], ["formControlName", "city", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "inputZipCode", "aria-describedby", "newPasswordHelp", "placeholder", "Zip Code...", "formControlName", "zipCode", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "inputKeyword", "aria-describedby", "newPasswordHelp", "placeholder", "Keyword For Instance...", "formControlName", "keyword", 1, "form-control", 3, "ngClass", "blur"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "invalid-feedback"], [3, "value"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ClientRegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "New Clinic Registration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ClientRegisterComponent_Template_form_ngSubmit_10_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Clinic Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ClientRegisterComponent_div_17_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ClientRegisterComponent_div_25_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, ClientRegisterComponent_div_32_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, ClientRegisterComponent_div_39_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, ClientRegisterComponent_div_47_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, ClientRegisterComponent_div_54_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Start Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, ClientRegisterComponent_div_62_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "End Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, ClientRegisterComponent_div_69_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](76, ClientRegisterComponent_div_76_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Select Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ClientRegisterComponent_Template_select_change_83_listener($event) {
              return ctx.onChangeCountry($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Select country...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](86, ClientRegisterComponent_option_86_Template, 2, 2, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](87, ClientRegisterComponent_div_87_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Select State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ClientRegisterComponent_Template_select_change_93_listener($event) {
              return ctx.onChangeState($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Select state...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](96, ClientRegisterComponent_option_96_Template, 2, 2, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](97, ClientRegisterComponent_div_97_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Select City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Select city...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](107, ClientRegisterComponent_option_107_Template, 2, 2, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](108, ClientRegisterComponent_div_108_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Zip Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](115, ClientRegisterComponent_div_115_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Keyword For Instance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("blur", function ClientRegisterComponent_Template_input_blur_121_listener($event) {
              return ctx.onBlurEvent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](122, ClientRegisterComponent_div_122_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](124, ClientRegisterComponent_span_124_Template, 1, 0, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " Register Clinic ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.clientRegisterForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](35, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.clinicName.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.clinicName.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](37, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.firstName.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.firstName.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](39, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.lastName.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.lastName.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](41, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.emailAddress.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.emailAddress.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](43, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.userName.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.userName.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](45, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.phoneNumber.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.phoneNumber.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("min", ctx.myDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](47, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.startDate.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.startDate.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("min", ctx.myDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](49, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.endDate.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.endDate.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](51, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.address.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.address.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](53, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.country.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.country.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](55, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.state.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.states);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.state.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](57, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.city.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.cities);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.city.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](59, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.zipCode.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.zipCode.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](61, _c0, ctx.showErrors && !ctx.clientRegisterForm.controls.keyword.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientRegisterForm.controls.keyword.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vY2xpZW50L2NsaWVudC1yZWdpc3Rlci5jb21wb25lbnQubGVzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientRegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-client-register',
            templateUrl: './client-register.component.html',
            styleUrls: ['./client-register.component.less']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "etXb":
    /*!**************************************************************!*\
      !*** ./src/app/superadmin/layout/footer/footer.component.ts ***!
      \**************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function etXb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../constant */
      "0b+V");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.currentDate = new Date();
          this.appTitle = _constant__WEBPACK_IMPORTED_MODULE_1__["Config"].APP_TITLE;
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["superadmin-footer"]],
        decls: 11,
        vars: 5,
        consts: [[1, "sticky-footer", "bg-white"], [1, "container", "my-auto"], [1, "copyright", "text-center", "my-auto"], ["id", "pixinventLink", "href", "javascript:void(0)"], ["href", "#page-top", 1, "scroll-to-top", "rounded"], [1, "fas", "fa-angle-up"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, ", LLC. All Rights Reserved");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Copyright \xA9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](5, 2, ctx.currentDate, "yyyy"), ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.appTitle);
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'superadmin-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fRwy":
    /*!****************************************************************!*\
      !*** ./src/app/superadmin/layout/sidebar/sidebar.component.ts ***!
      \****************************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function fRwy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../constant */
      "0b+V");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);

          this.appTitle = _constant__WEBPACK_IMPORTED_MODULE_1__["Config"].APP_TITLE;
          this.appLogo = _constant__WEBPACK_IMPORTED_MODULE_1__["Config"].SIDEBAR_LOGO_PATH;
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            (function ($) {
              "use strict"; // Start of use strict
              // Toggle the side navigation

              $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
                $("body").toggleClass("sidebar-toggled");
                $(".sidebar").toggleClass("toggled");

                if ($(".sidebar").hasClass("toggled")) {
                  $('.sidebar .collapse').collapse('hide');
                }

                ;
              }); // Close any open menu accordions when window is resized below 768px

              $(window).resize(function () {
                if ($(window).width() < 768) {
                  $('.sidebar .collapse').collapse('hide');
                }

                ; // Toggle the side navigation when window is resized below 480px

                if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
                  $("body").addClass("sidebar-toggled");
                  $(".sidebar").addClass("toggled");
                  $('.sidebar .collapse').collapse('hide');
                }

                ;
              }); // Prevent the content wrapper from scrolling when the fixed side navigation hovered over

              $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
                if ($(window).width() > 768) {
                  var e0 = e.originalEvent,
                      delta = e0.wheelDelta || -e0.detail;
                  this.scrollTop += (delta < 0 ? 1 : -1) * 30;
                  e.preventDefault();
                }
              }); // Scroll to top button appear

              $(document).on('scroll', function () {
                var scrollDistance = $(this).scrollTop();

                if (scrollDistance > 100) {
                  $('.scroll-to-top').fadeIn();
                } else {
                  $('.scroll-to-top').fadeOut();
                }
              }); // Smooth scrolling using jQuery easing

              $(document).on('click', 'a.scroll-to-top', function (e) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                  scrollTop: $($anchor.attr('href')).offset().top
                }, 1000, 'easeInOutExpo');
                e.preventDefault();
              });
            })(jQuery); // End of use strict

          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.??fac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)();
      };

      SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SidebarComponent,
        selectors: [["sidebar"]],
        decls: 19,
        vars: 2,
        consts: [["id", "accordionSidebar", 1, "navbar-nav", "bg-gradient-primary", "sidebar", "sidebar-dark", "accordion"], ["routerLink", "/superadmin", 1, "sidebar-brand", "d-flex", "align-items-center", "justify-content-center"], [1, "sidebar-brand-icon"], ["alt", "app-logo", 1, "sidebar-logo", 3, "src"], [1, "sidebar-brand-text", "mx-3"], [1, "sidebar-divider", "my-0"], [1, "sidebar-divider"], [1, "nav-item", "active"], ["routerLink", "/superadmin/client", 1, "nav-link"], [1, "fas", "fa-fw", "fa-user-alt"], ["routerLink", "/superadmin/messages", 1, "nav-link"], [1, "fas", "fa-fw", "fa-envelope"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Clinics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "hr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.appLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.appTitle);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vbGF5b3V0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jEeI":
    /*!**************************************************************!*\
      !*** ./src/app/superadmin/client/client-update.component.ts ***!
      \**************************************************************/

    /*! exports provided: ClientUpdateComponent */

    /***/
    function jEeI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientUpdateComponent", function () {
        return ClientUpdateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../constant */
      "0b+V");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ClientUpdateComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.attributes.clinicName, " ");
        }
      }

      function ClientUpdateComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.attributes.firstName, " ");
        }
      }

      function ClientUpdateComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r2.attributes.lastName, " ");
        }
      }

      function ClientUpdateComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r3.attributes.emailAddress, " ");
        }
      }

      function ClientUpdateComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r4.attributes.userName, " ");
        }
      }

      function ClientUpdateComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r5.attributes.phoneNumber, " ");
        }
      }

      function ClientUpdateComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r6.attributes.startDate, " ");
        }
      }

      function ClientUpdateComponent_div_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r7.attributes.endDate, " ");
        }
      }

      function ClientUpdateComponent_div_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r8.attributes.address, " ");
        }
      }

      function ClientUpdateComponent_option_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var country_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", country_r18.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](country_r18.name);
        }
      }

      function ClientUpdateComponent_div_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r10.attributes.countryId, " ");
        }
      }

      function ClientUpdateComponent_option_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var state_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", state_r19.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](state_r19.name);
        }
      }

      function ClientUpdateComponent_div_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r12.attributes.stateId, " ");
        }
      }

      function ClientUpdateComponent_option_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var city_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", city_r20.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](city_r20.name);
        }
      }

      function ClientUpdateComponent_div_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r14.attributes.city, " ");
        }
      }

      function ClientUpdateComponent_div_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r15.attributes.zipCode, " ");
        }
      }

      function ClientUpdateComponent_div_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r16.attributes.keyword, " ");
        }
      }

      function ClientUpdateComponent_span_125_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 38);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var ClientUpdateComponent = /*#__PURE__*/function () {
        function ClientUpdateComponent(formBuilder, adminAuthService, clientService, toastr, spinner, router, route, commonService) {
          _classCallCheck(this, ClientUpdateComponent);

          this.formBuilder = formBuilder;
          this.adminAuthService = adminAuthService;
          this.clientService = clientService;
          this.toastr = toastr;
          this.spinner = spinner;
          this.router = router;
          this.route = route;
          this.commonService = commonService;
          this.loading = false;
          this.showErrors = 0;
          this.attributes = {
            'clinicName': '',
            'firstName': '',
            'lastName': '',
            'emailAddress': '',
            'userName': '',
            'phoneNumber': '',
            'startDate': '',
            'endDate': '',
            'address': '',
            'country': '',
            'state': '',
            'city': '',
            'zipCode': '',
            'keyword': '',
            'clientId': ''
          };
          this.validationMessages = {
            'clinicName': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].CLNAME_NOT_VALID_MESSAGE
            },
            'firstName': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NAME_NOT_VALID_MESSAGE
            },
            'lastName': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NAME_NOT_VALID_MESSAGE
            },
            'emailAddress': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].EMAIL_NOT_VALID_MESSAGE
            },
            'userName': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].UNAME_NOT_VALID_MESSAGE
            },
            'phoneNumber': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PHONE_NOT_VALID_MESSAGE
            },
            'startDate': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'endDate': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'address': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'country': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'state': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'city': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            },
            'zipCode': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].ZIP_NOT_VALID_MESSAGE
            },
            'keyword': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].KEYWORD_NOT_VALID_MESSAGE
            },
            'clientId': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PLEASE_FILL_REQUIRED_FIELD_MSG
            }
          };
          this.commonService.setPageTitle(this.route.snapshot.data['title']);
          this.commonService.checkSuperAdminLogin();
        }

        _createClass(ClientUpdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.getCountry();
            var clientId = this.route.snapshot.paramMap.get('id'); //getProfileById(clientId: number) {

            if (clientId) {
              this.clientService.getProfileById(+clientId).then(function (result) {
                _this10.resData = result;
                _this10.client = _this10.resData.data;
                var countryID = _this10.client.country_id;
                var stateID = _this10.client.state_id; //console.warn(countryID);

                _this10.clientUpdateForm.patchValue({
                  clinicName: _this10.client.clinic_name,
                  firstName: _this10.client.first_name,
                  lastName: _this10.client.last_name,
                  emailAddress: _this10.client.email,
                  userName: _this10.client.username,
                  phoneNumber: _this10.client.phone_number,
                  startDate: _this10.formatDate(_this10.client.start_date),
                  endDate: _this10.formatDate(_this10.client.end_date),
                  address: _this10.client.address,
                  country: _this10.client.country_id,
                  state: _this10.client.state_id,
                  city: _this10.client.city_id,
                  zipCode: _this10.client.zip_code,
                  keyword: _this10.client.keyword,
                  status: _this10.client.status,
                  clientId: clientId
                });

                _this10.getStatesByCountryId(countryID);

                _this10.getCitiesByStateId(stateID);
              }, function (error) {
                _this10.spinner.hide();

                _this10.loading = false;

                _this10.toastr.error(error);
              });
            } else {
              this.client = null;
            } //}
            //console.warn(clientId);


            this.clientUpdateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
            this.clientUpdateForm = this.formBuilder.group({
              clinicName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].CLNAME_PATTERN)]],
              firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NAME_PATTERN)]],
              lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].NAME_PATTERN)]],
              emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].EMAIL_PATTERN)]],
              userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].UNAME_PATTERN)]],
              phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PHONE_PATTERN)]],
              startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].ZIP_PATTERN)]],
              keyword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].KEYWORD_PATTERN)]],
              clientId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          } //getProfileById(clientId: number) {
          //  if (clientId) {
          //    this.clientService.getProfileById(clientId).then((result) => {
          //      this.resData = result;
          //      this.states = this.resData.data;
          //      this.cities = null;
          //    },error => {
          //      this.spinner.hide();
          //      this.loading = false;
          //      this.toastr.error(error);
          //    });      
          //  } else {
          //    this.states = null;
          //    this.cities = null;
          //  }
          //}

        }, {
          key: "getCountry",
          value: function getCountry() {
            var _this11 = this;

            this.clientService.getCountries().then(function (result) {
              _this11.resData = result;
              _this11.countries = _this11.resData.data;
            }, function (error) {
              _this11.spinner.hide();

              _this11.loading = false;

              _this11.toastr.error(error);
            });
          }
        }, {
          key: "onChangeCountry",
          value: function onChangeCountry(countryId) {
            var _this12 = this;

            if (countryId) {
              this.clientService.getStatesById(countryId).then(function (result) {
                _this12.resData = result;
                _this12.states = _this12.resData.data.stateList;
                _this12.cities = null;
              }, function (error) {
                _this12.spinner.hide();

                _this12.loading = false;

                _this12.toastr.error(error);
              });
            } else {
              this.states = null;
              this.cities = null;
            }
          }
        }, {
          key: "onChangeState",
          value: function onChangeState(stateId) {
            var _this13 = this;

            if (stateId) {
              this.clientService.getCitiesById(stateId).then(function (result) {
                _this13.resData = result;
                _this13.cities = _this13.resData.data.cityList;
              }, function (error) {
                _this13.spinner.hide();

                _this13.loading = false;

                _this13.toastr.error(error);
              });
            } else {
              this.cities = null;
            }
          }
        }, {
          key: "getStatesByCountryId",
          value: function getStatesByCountryId(countryId) {
            var _this14 = this;

            if (countryId) {
              this.clientService.getStatesById(countryId).then(function (result) {
                _this14.resData = result;
                _this14.states = _this14.resData.data.stateList;
                _this14.cities = null;
              }, function (error) {
                _this14.spinner.hide();

                _this14.loading = false;

                _this14.toastr.error(error);
              });
            } else {
              this.states = null;
              this.cities = null;
            }
          }
        }, {
          key: "getCitiesByStateId",
          value: function getCitiesByStateId(stateId) {
            var _this15 = this;

            if (stateId) {
              this.clientService.getCitiesById(stateId).then(function (result) {
                _this15.resData = result;
                _this15.cities = _this15.resData.data.cityList;
              }, function (error) {
                _this15.spinner.hide();

                _this15.loading = false;

                _this15.toastr.error(error);
              });
            } else {
              this.cities = null;
            }
          }
        }, {
          key: "formatDate",
          value: function formatDate(date) {
            var d = new Date(date);
            var month = '' + (d.getMonth() + 1);
            var day = '' + d.getDate();
            var year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this16 = this;

            this.loading = true;
            this.showErrors = 1;
            var form = this.clientUpdateForm;

            for (var field in this.attributes) {
              this.attributes[field] = '';
              var control = form.get(field);

              if (control && !control.valid) {
                var messages = this.validationMessages[field];

                for (var key in control.errors) {
                  if (this.attributes[field] == '') {
                    this.attributes[field] += messages[key] + ' ';
                  }
                }
              }
            }

            if (this.clientUpdateForm.valid) {
              this.showErrors = 0;
              this.spinner.show();
              this.clientService.clientUpdate(this.clientUpdateForm.get('clinicName').value, this.clientUpdateForm.get('firstName').value, this.clientUpdateForm.get('lastName').value, this.clientUpdateForm.get('emailAddress').value, this.clientUpdateForm.get('userName').value, this.clientUpdateForm.get('phoneNumber').value, this.clientUpdateForm.get('startDate').value, this.clientUpdateForm.get('endDate').value, this.clientUpdateForm.get('address').value, this.clientUpdateForm.get('country').value, this.clientUpdateForm.get('state').value, this.clientUpdateForm.get('city').value, this.clientUpdateForm.get('zipCode').value, this.clientUpdateForm.get('keyword').value, this.clientUpdateForm.get('clientId').value).then(function (result) {
                _this16.spinner.hide();

                _this16.loading = false;

                if (result['message'] && result['message'] != '') {
                  _this16.toastr.success(result['message']);
                } else {
                  _this16.toastr.success(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].RESET_PASSWORD_SUCCESS_MSG);
                } //this.clientRegisterForm.reset();

              }, function (error) {
                _this16.spinner.hide();

                _this16.loading = false; //this.clientRegisterForm.reset();

                _this16.toastr.error(error);
              });
            } else {
              this.loading = false;
            }
          }
        }]);

        return ClientUpdateComponent;
      }();

      ClientUpdateComponent.??fac = function ClientUpdateComponent_Factory(t) {
        return new (t || ClientUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      ClientUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ClientUpdateComponent,
        selectors: [["app-client-update"]],
        decls: 128,
        vars: 61,
        consts: [[1, "container-fluid"], [1, "d-sm-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "h3", "mb-0", "text-gray-800"], [1, "row"], [1, "col-xl-12", "col-md-12", "mb-4"], [1, "card", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col"], ["novalidate", "", 1, "", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "titleBold"], [1, "mandatorySign"], ["type", "text", "id", "inputClinicName", "aria-describedby", "newPasswordHelp", "placeholder", "Clinic Name...", "formControlName", "clinicName", "readonly", "", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "row"], [1, "col-sm-6", "mb-3", "mb-sm-0"], ["type", "text", "id", "inputFirstName", "aria-describedby", "newPasswordHelp", "placeholder", "First Name...", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], [1, "col-sm-6"], ["type", "text", "id", "inputLastName", "aria-describedby", "newPasswordHelp", "placeholder", "Last Name...", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], ["type", "email", "id", "inputEmailAddress", "aria-describedby", "newPasswordHelp", "placeholder", "Email Address...", "formControlName", "emailAddress", "readonly", "", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "inputUserName", "aria-describedby", "newPasswordHelp", "placeholder", "Username...", "formControlName", "userName", "readonly", "", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "inputPhoneNumber", "aria-describedby", "newPasswordHelp", "placeholder", "Phone Number...(Eg:-0000000000)", "formControlName", "phoneNumber", 1, "form-control", 3, "ngClass"], ["type", "date", "id", "inputStartDate", "aria-describedby", "newPasswordHelp", "placeholder", "Start Date...", "formControlName", "startDate", "readonly", "", 1, "form-control", 3, "ngClass"], ["type", "date", "id", "inputEndDate", "aria-describedby", "newPasswordHelp", "placeholder", "End Date...", "formControlName", "endDate", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "inputAddress", "aria-describedby", "newPasswordHelp", "placeholder", "Address...", "formControlName", "address", 1, "form-control", 3, "ngClass"], ["formControlName", "country", "readonly", "", 1, "form-control", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "state", "readonly", "", 1, "form-control", 3, "ngClass", "change"], ["formControlName", "city", "readonly", "", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "inputZipCode", "aria-describedby", "newPasswordHelp", "placeholder", "Zip Code...", "formControlName", "zipCode", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "inputKeyword", "aria-describedby", "newPasswordHelp", "placeholder", "Keyword For Instance...", "formControlName", "keyword", "readonly", "", 1, "form-control", 3, "ngClass"], ["type", "hidden", "id", "inputId", "formControlName", "clientId", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "invalid-feedback"], [3, "value"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ClientUpdateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Update Clinic Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ClientUpdateComponent_Template_form_ngSubmit_10_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Clinic Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ClientUpdateComponent_div_17_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ClientUpdateComponent_div_25_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, ClientUpdateComponent_div_32_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, ClientUpdateComponent_div_39_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, ClientUpdateComponent_div_47_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, ClientUpdateComponent_div_54_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Start Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, ClientUpdateComponent_div_62_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "End Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, ClientUpdateComponent_div_69_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](76, ClientUpdateComponent_div_76_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Select Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ClientUpdateComponent_Template_select_change_83_listener($event) {
              return ctx.onChangeCountry($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Select country...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](86, ClientUpdateComponent_option_86_Template, 2, 2, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](87, ClientUpdateComponent_div_87_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Select State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ClientUpdateComponent_Template_select_change_93_listener($event) {
              return ctx.onChangeState($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Select state...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](96, ClientUpdateComponent_option_96_Template, 2, 2, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](97, ClientUpdateComponent_div_97_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Select City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Select city...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](107, ClientUpdateComponent_option_107_Template, 2, 2, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](108, ClientUpdateComponent_div_108_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Zip Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](115, ClientUpdateComponent_div_115_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Keyword For Instance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](122, ClientUpdateComponent_div_122_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](125, ClientUpdateComponent_span_125_Template, 1, 0, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, " Update Clinic ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.clientUpdateForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](33, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.clinicName.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.clinicName.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](35, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.firstName.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.firstName.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](37, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.lastName.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.lastName.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](39, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.emailAddress.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.emailAddress.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](41, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.userName.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.userName.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](43, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.phoneNumber.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.phoneNumber.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](45, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.startDate.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.startDate.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](47, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.endDate.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.endDate.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](49, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.address.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.address.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](51, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.country.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.country.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](53, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.state.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.states);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.state.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](55, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.city.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.cities);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.city.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](57, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.zipCode.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.zipCode.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](59, _c0, ctx.showErrors && !ctx.clientUpdateForm.controls.keyword.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.clientUpdateForm.controls.keyword.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vY2xpZW50L2NsaWVudC11cGRhdGUuY29tcG9uZW50Lmxlc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientUpdateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-client-update',
            templateUrl: './client-update.component.html',
            styleUrls: ['./client-update.component.less']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jrlp":
    /*!****************************************************************!*\
      !*** ./src/app/superadmin/client/client-archived.component.ts ***!
      \****************************************************************/

    /*! exports provided: ClientArchivedComponent */

    /***/
    function jrlp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientArchivedComponent", function () {
        return ClientArchivedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ClientArchivedComponent_tr_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var client_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.clinic_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", client_r1.first_name, " ", client_r1.last_name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.keyword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.phone_number);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](13, 7, client_r1.end_date, "yyyy-MM-dd"));
        }
      }

      var ClientArchivedComponent = /*#__PURE__*/function () {
        function ClientArchivedComponent(formBuilder, adminAuthService, clientService, toastr, spinner, router, route, commonService) {
          _classCallCheck(this, ClientArchivedComponent);

          this.formBuilder = formBuilder;
          this.adminAuthService = adminAuthService;
          this.clientService = clientService;
          this.toastr = toastr;
          this.spinner = spinner;
          this.router = router;
          this.route = route;
          this.commonService = commonService;
          this.loading = false;
          this.showErrors = 0;
          this.commonService.setPageTitle(this.route.snapshot.data['title']);
          this.commonService.checkSuperAdminLogin();
        }

        _createClass(ClientArchivedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getarchivedUsers();
          }
        }, {
          key: "getarchivedUsers",
          value: function getarchivedUsers() {
            var _this17 = this;

            this.clientService.getarchivedClients().then(function (result) {
              _this17.resData = result;
              _this17.clients = _this17.resData.data;
            }, function (error) {
              _this17.spinner.hide();

              _this17.loading = false; //this.changePasswordForm.reset();

              _this17.toastr.error(error);
            });
          }
        }]);

        return ClientArchivedComponent;
      }();

      ClientArchivedComponent.??fac = function ClientArchivedComponent_Factory(t) {
        return new (t || ClientArchivedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["CommonService"]));
      };

      ClientArchivedComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ClientArchivedComponent,
        selectors: [["app-client-archived"]],
        decls: 23,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "h3", "mb-2", "text-gray-800"], [1, "card", "shadow", "mb-4"], [1, "card-body"], [1, "table-responsive"], ["id", "dataTable", "width", "100%", "cellspacing", "0", 1, "table", "table-bordered"], [4, "ngFor", "ngForOf"]],
        template: function ClientArchivedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Archived Clinics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Clinic Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Keyword");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "End Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ClientArchivedComponent_tr_22_Template, 14, 10, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.clients);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vY2xpZW50L2NsaWVudC1hcmNoaXZlZC5jb21wb25lbnQubGVzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientArchivedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-client-archived',
            templateUrl: './client-archived.component.html',
            styleUrls: ['./client-archived.component.less']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_2__["ClientService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pbjI":
    /*!*******************************************************!*\
      !*** ./src/app/superadmin/layout/layout.component.ts ***!
      \*******************************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function pbjI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
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
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "fRwy");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./header/header.component */
      "FYNE");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./footer/footer.component */
      "etXb");

      function LayoutComponent_sidebar_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "sidebar");
        }
      }

      function LayoutComponent_superadmin_header_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "superadmin-header");
        }
      }

      function LayoutComponent_superadmin_footer_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "superadmin-footer");
        }
      }

      var LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent(router, adminAuthService, commonService) {
          _classCallCheck(this, LayoutComponent);

          this.router = router;
          this.adminAuthService = adminAuthService;
          this.commonService = commonService;
          this.config = {};
          this.commonService.checkSuperAdminLogin();
        }

        _createClass(LayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isSuperAdminLoggedIn$ = this.adminAuthService.isSuperAdminLoggedIn;
          }
        }]);

        return LayoutComponent;
      }();

      LayoutComponent.??fac = function LayoutComponent_Factory(t) {
        return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["CommonService"]));
      };

      LayoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LayoutComponent,
        selectors: [["layout"]],
        decls: 10,
        vars: 9,
        consts: [["id", "wrapper"], [4, "ngIf"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LayoutComponent_sidebar_1_Template, 1, 0, "sidebar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, LayoutComponent_superadmin_header_5_Template, 1, 0, "superadmin-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, LayoutComponent_superadmin_footer_8_Template, 1, 0, "superadmin-footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 3, ctx.isSuperAdminLoggedIn$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 5, ctx.isSuperAdminLoggedIn$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 7, ctx.isSuperAdminLoggedIn$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'layout',
            templateUrl: './layout.component.html',
            styleUrls: ['./layout.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "prz8":
    /*!********************************************************!*\
      !*** ./src/app/superadmin/client/message.component.ts ***!
      \********************************************************/

    /*! exports provided: MessageComponent */

    /***/
    function prz8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageComponent", function () {
        return MessageComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MessageComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var message_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r1.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r1.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r1.Sendername);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r1.Receivername);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](11, 5, message_r1.created_date, "yyyy-MM-dd"));
        }
      }

      var MessageComponent = /*#__PURE__*/function () {
        function MessageComponent(formBuilder, adminAuthService, clientService, toastr, spinner, router, route, commonService) {
          _classCallCheck(this, MessageComponent);

          this.formBuilder = formBuilder;
          this.adminAuthService = adminAuthService;
          this.clientService = clientService;
          this.toastr = toastr;
          this.spinner = spinner;
          this.router = router;
          this.route = route;
          this.commonService = commonService;
          this.loading = false;
          this.showErrors = 0;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.commonService.setPageTitle(this.route.snapshot.data['title']);
          this.commonService.checkSuperAdminLogin();
        }

        _createClass(MessageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 10
            };
            this.getMessages();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "getMessages",
          value: function getMessages() {
            var _this18 = this;

            this.clientService.getMessages().then(function (result) {
              _this18.resData = result;
              _this18.messages = _this18.resData.data;

              _this18.dtTrigger.next();
            }, function (error) {
              _this18.spinner.hide();

              _this18.loading = false; //this.changePasswordForm.reset();

              _this18.toastr.error(error);
            });
          }
        }]);

        return MessageComponent;
      }();

      MessageComponent.??fac = function MessageComponent_Factory(t) {
        return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      MessageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MessageComponent,
        selectors: [["app-message"]],
        decls: 22,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "h3", "mb-2", "text-gray-800"], [1, "card", "shadow", "mb-4"], [1, "card-header", "py-3"], [1, "card-body"], [1, "table-responsive"], ["width", "100%", "cellspacing", "0", "datatable", "", 1, "table", "table-bordered", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"]],
        template: function MessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Subject");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Sender Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Receiver Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, MessageComponent_tr_21_Template, 12, 8, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.messages);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vY2xpZW50L21lc3NhZ2UuY29tcG9uZW50Lmxlc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MessageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-message',
            templateUrl: './message.component.html',
            styleUrls: ['./message.component.less']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tXs6":
    /*!*************************************************************!*\
      !*** ./src/app/superadmin/auth/reset-password.component.ts ***!
      \*************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function tXs6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../constant */
      "0b+V");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ResetPasswordComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.attributes.password, " ");
        }
      }

      function ResetPasswordComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.attributes.confirmPassword, " ");
        }
      }

      function ResetPasswordComponent_div_21_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r4.validationMessages.confirmPassword.mismatch, " ");
        }
      }

      function ResetPasswordComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ResetPasswordComponent_div_21_span_1_Template, 2, 1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx_r2.resetPasswordForm.hasError("mismatch"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.resetPasswordForm.hasError("mismatch"));
        }
      }

      function ResetPasswordComponent_span_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 24);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var ResetPasswordComponent = /*#__PURE__*/function () {
        function ResetPasswordComponent(formBuilder, adminAuthService, toastr, spinner, router, route, commonService) {
          _classCallCheck(this, ResetPasswordComponent);

          this.formBuilder = formBuilder;
          this.adminAuthService = adminAuthService;
          this.toastr = toastr;
          this.spinner = spinner;
          this.router = router;
          this.route = route;
          this.commonService = commonService;
          this.loading = false;
          this.showErrors = 0;
          this.attributes = {
            'password': '',
            'confirmPassword': ''
          };
          this.validationMessages = {
            'password': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PASSWORD_REQUIRED_VALIDATION_MSG,
              'pattern': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PASSWORD_NOT_VALID_VALIDATION_MSG
            },
            'confirmPassword': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].CONFIRM_PASSWORD_REQUIRED_VALIDATION_MSG,
              'mismatch': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PASSWORD_MISMATCH_VALIDATION_MSG
            }
          };
          this.resetToken = this.route.snapshot.queryParams.resetToken;
          this.commonService.setPageTitle(this.route.snapshot.data['title']);
          this.commonService.checkSuperAdminLogin();
        }

        _createClass(ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.resetPasswordForm = this.formBuilder.group({
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PASSWORD_REGX)]],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }, {
              validator: this.passwordMatchValidator
            });
          }
        }, {
          key: "passwordMatchValidator",
          value: function passwordMatchValidator(frm) {
            return frm.controls['password'].value === frm.controls['confirmPassword'].value ? null : {
              'mismatch': true
            };
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this19 = this;

            this.loading = true;
            this.showErrors = 1;
            var form = this.resetPasswordForm;

            for (var field in this.attributes) {
              this.attributes[field] = '';
              var control = form.get(field);

              if (control && !control.valid) {
                var messages = this.validationMessages[field];

                for (var key in control.errors) {
                  if (this.attributes[field] == '') {
                    this.attributes[field] += messages[key] + ' ';
                  }
                }
              }
            }

            if (this.resetPasswordForm.valid) {
              this.showErrors = 0;
              this.spinner.show();
              this.adminAuthService.resetPassword(this.resetPasswordForm.get('password').value, this.resetPasswordForm.get('confirmPassword').value, this.resetToken).then(function (result) {
                _this19.spinner.hide();

                _this19.loading = false;

                if (result['message'] && result['message'] != '') {
                  _this19.toastr.success(result['message']);
                } else {
                  _this19.toastr.success(_constant__WEBPACK_IMPORTED_MODULE_2__["Config"].RESET_PASSWORD_SUCCESS_MSG);
                }

                _this19.router.navigate(['/superadmin/login']);
              }, function (error) {
                _this19.spinner.hide();

                _this19.loading = false;

                _this19.resetPasswordForm.reset();

                _this19.toastr.error(error);
              });
            } else {
              this.loading = false;
            }
          }
        }]);

        return ResetPasswordComponent;
      }();

      ResetPasswordComponent.??fac = function ResetPasswordComponent_Factory(t) {
        return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      ResetPasswordComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ResetPasswordComponent,
        selectors: [["app-reset-password"]],
        decls: 29,
        vars: 11,
        consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-6", "col-lg-8", "col-md-5"], [1, "card", "o-hidden", "border-0", "shadow-lg", "my-5"], [1, "card-body", "p-0"], [1, "row"], [1, "col-lg-12"], [1, "p-5"], [1, "text-center"], ["src", "assets/img/logo.png", "alt", "app-logo", 1, "logo"], [1, "h4", "text-gray-900", "mb-4"], ["novalidate", "", 1, "", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-group"], ["type", "password", "id", "inputPassword", "aria-describedby", "passwordHelp", "placeholder", "Enter Password...", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "id", "inputConfirmPassword", "aria-describedby", "confirmPasswordHelp", "placeholder", "Enter Confrim Password...", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 3, "hidden", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "./../login", 1, "small"], [1, "invalid-feedback"], [1, "invalid-feedback", 3, "hidden"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h1", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Reset Password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_12_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ResetPasswordComponent_div_16_Template, 2, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ResetPasswordComponent_div_20_Template, 2, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ResetPasswordComponent_div_21_Template, 2, 2, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ResetPasswordComponent_span_23_Template, 1, 0, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Have you found password? Login!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.resetPasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](7, _c0, ctx.showErrors && !ctx.resetPasswordForm.controls.password.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.resetPasswordForm.controls.password.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c0, ctx.showErrors && (!ctx.resetPasswordForm.controls.confirmPassword.valid || ctx.resetPasswordForm.hasError("mismatch"))));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.resetPasswordForm.controls.confirmPassword.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && ctx.resetPasswordForm.controls.confirmPassword.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ResetPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./auth.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xUf/":
    /*!*******************************************************!*\
      !*** ./src/app/superadmin/client/client.component.ts ***!
      \*******************************************************/

    /*! exports provided: ClientComponent */

    /***/
    function xUf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientComponent", function () {
        return ClientComponent;
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


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ClientComponent_tr_37_a_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ClientComponent_tr_37_a_21_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

            var client_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r5.onUpdateStatus(client_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ClientComponent_tr_37_a_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ClientComponent_tr_37_a_22_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

            var client_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.onUpdateStatus(client_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ClientComponent_tr_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ClientComponent_tr_37_a_21_Template, 2, 0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ClientComponent_tr_37_a_22_Template, 2, 0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ClientComponent_tr_37_Template_a_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

            var client_r1 = ctx.$implicit;
            var rowIndex_r2 = ctx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r11.onDelete(client_r1.id, rowIndex_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var client_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.clinic_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", client_r1.first_name, " ", client_r1.last_name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.keyword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.phone_number);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](13, 11, client_r1.end_date, "yyyy-MM-dd"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/superadmin/client-update/", client_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/superadmin/send-message/", client_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", client_r1.status == "inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", client_r1.status == "active");
        }
      } //import { Client } from '../../models/client';


      var ClientComponent = /*#__PURE__*/function () {
        function ClientComponent(formBuilder, adminAuthService, clientService, toastr, spinner, router, route, commonService) {
          _classCallCheck(this, ClientComponent);

          this.formBuilder = formBuilder;
          this.adminAuthService = adminAuthService;
          this.clientService = clientService;
          this.toastr = toastr;
          this.spinner = spinner;
          this.router = router;
          this.route = route;
          this.commonService = commonService; //changePasswordForm: FormGroup;

          this.loading = false;
          this.showErrors = 0;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.commonService.setPageTitle(this.route.snapshot.data['title']);
          this.commonService.checkSuperAdminLogin();
        }

        _createClass(ClientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 10
            };
            this.getUsers();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this20 = this;

            this.clientService.getClients().then(function (result) {
              _this20.resData = result;
              _this20.clients = _this20.resData.data;

              _this20.dtTrigger.next();
            }, function (error) {
              _this20.spinner.hide();

              _this20.loading = false; //this.changePasswordForm.reset();

              _this20.toastr.error(error);
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete(id, rowIndex) {
            var _this21 = this;

            if (confirm('Are you sure want to delete this?')) {
              this.clientService.deleteClient(+id).then(function (result) {
                _this21.clients.splice(rowIndex, 1);

                _this21.toastr.success(result['message']);

                _this21.rerender();
              }, function (error) {
                _this21.spinner.hide();

                _this21.loading = false; //this.changePasswordForm.reset();

                _this21.toastr.error(error);
              });
            }
          }
        }, {
          key: "onUpdateStatus",
          value: function onUpdateStatus(id) {
            var _this22 = this;

            if (confirm('Are you sure want to update status?')) {
              this.clientService.updateStatus(+id).then(function (result) {
                //this.clients.splice(rowIndex,1);
                _this22.toastr.success(result['message']);

                setTimeout(function () {
                  location.reload();
                }, 3000); //this.rerender();
              }, function (error) {
                _this22.spinner.hide();

                _this22.loading = false; //this.changePasswordForm.reset();

                _this22.toastr.error(error);
              });
            }
          }
        }, {
          key: "rerender",
          value: function rerender() {
            var _this23 = this;

            this.dtElement.dtInstance.then(function (dtInstance) {
              dtInstance.destroy();

              _this23.dtTrigger.next();
            });
          }
        }]);

        return ClientComponent;
      }();

      ClientComponent.??fac = function ClientComponent_Factory(t) {
        return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["CommonService"]));
      };

      ClientComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ClientComponent,
        selectors: [["app-client"]],
        viewQuery: function ClientComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.dtElement = _t.first);
          }
        },
        decls: 38,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "h3", "mb-2", "text-gray-800"], [1, "card", "shadow", "mb-4"], [1, "card-header", "py-3"], [2, "float", "left"], ["routerLink", "/superadmin/client-archived", 1, "btn", "btn-warning", "btn-icon-split"], [1, "icon", "text-white-50"], [1, "fas", "fa-user"], [1, "text"], [2, "float", "right"], ["routerLink", "/superadmin/client-register", 1, "btn", "btn-success", "btn-icon-split"], [1, "fas", "fa-plus"], [1, "card-body"], [1, "table-responsive"], ["width", "100%", "cellspacing", "0", "datatable", "", 1, "table", "table-bordered", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info", "btn-circle", "btn-sm", 3, "routerLink"], [1, "fas", "fa-edit"], [1, "fas", "fa-envelope"], ["class", "btn btn-warning btn-circle btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-success btn-circle btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "btn-circle", "btn-sm", 3, "click"], [1, "fas", "fa-trash"], [1, "btn", "btn-warning", "btn-circle", "btn-sm", 3, "click"], [1, "fas", "fa-toggle-on"], [1, "btn", "btn-success", "btn-circle", "btn-sm", 3, "click"]],
        template: function ClientComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Clinics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Archived Clinic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Add New Clinic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Clinic Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Keyword");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "End Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, ClientComponent_tr_37_Template, 26, 14, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.clients);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vY2xpZW50L2NsaWVudC5jb21wb25lbnQubGVzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-client',
            templateUrl: './client.component.html',
            styleUrls: ['./client.component.less']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_4__["ClientService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
          }];
        }, {
          dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "zLGS":
    /*!****************************************************!*\
      !*** ./src/app/superadmin/auth/login.component.ts ***!
      \****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function zLGS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../constant */
      "0b+V");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.attributes.email, " ");
        }
      }

      function LoginComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.attributes.password, " ");
        }
      }

      function LoginComponent_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 20);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, adminAuthService, toastr, spinner, router, route, commonService) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.adminAuthService = adminAuthService;
          this.toastr = toastr;
          this.spinner = spinner;
          this.router = router;
          this.route = route;
          this.commonService = commonService;
          this.loading = false;
          this.showErrors = 0;
          this.attributes = {
            'email': '',
            'password': ''
          };
          this.validationMessages = {
            'email': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].EMAIL_REQUIRED_VALIDATION_MSG,
              'email': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].EMAIL_FORMAT_VALIDATION_MSG
            },
            'password': {
              'required': _constant__WEBPACK_IMPORTED_MODULE_2__["Config"].PASSWORD_REQUIRED_VALIDATION_MSG
            }
          };
          this.commonService.setPageTitle(this.route.snapshot.data['title']);
          this.commonService.checkSuperAdminLogin();
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this24 = this;

            this.loading = true;
            this.showErrors = 1;
            var form = this.loginForm;

            for (var field in this.attributes) {
              this.attributes[field] = '';
              var control = form.get(field);

              if (control && !control.valid) {
                var messages = this.validationMessages[field];

                for (var key in control.errors) {
                  if (this.attributes[field] == '') {
                    this.attributes[field] += messages[key] + ' ';
                  }
                }
              }
            }

            if (this.loginForm.valid) {
              this.showErrors = 0;
              this.spinner.show();
              this.adminAuthService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).then(function (result) {
                _this24.spinner.hide();

                _this24.loading = false;

                _this24.router.navigate(['/superadmin/client']);
              }, function (error) {
                _this24.spinner.hide();

                _this24.loading = false;

                _this24.loginForm.reset();

                _this24.toastr.error(error);
              });
            } else {
              this.loading = false;
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 26,
        vars: 10,
        consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-6", "col-lg-8", "col-md-5"], [1, "card", "o-hidden", "border-0", "shadow-lg", "my-5"], [1, "card-body", "p-0"], [1, "row"], [1, "col-lg-12"], [1, "p-5"], [1, "text-center"], ["src", "assets/img/logo.png", "alt", "app-logo", 1, "logo"], [1, "h4", "text-gray-900", "mb-4"], ["novalidate", "", 1, "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "id", "inputEmail", "aria-describedby", "emailHelp", "placeholder", "Enter Email Address...", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "./../forgot-password", 1, "small"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h1", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Welcome Back!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, LoginComponent_div_15_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, LoginComponent_div_18_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, LoginComponent_span_20_Template, 1, 0, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Forgot Password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, ctx.showErrors && !ctx.loginForm.controls.email.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.loginForm.controls.email.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, ctx.showErrors && !ctx.loginForm.controls.email.valid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showErrors && !ctx.loginForm.controls.password.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyYWRtaW4vYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./auth.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=superadmin-superadmin-module-es5.js.map