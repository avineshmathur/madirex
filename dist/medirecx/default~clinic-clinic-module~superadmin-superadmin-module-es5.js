(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~clinic-clinic-module~superadmin-superadmin-module"], {
    /***/
    "/iSe":
    /*!******************************************************************************************!*\
      !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js ***!
      \******************************************************************************************/

    /*! exports provided: DataTableDirective */

    /***/
    function iSe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
        return DataTableDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * @license
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
       */


      var DataTableDirective =
      /** @class */
      function () {
        function DataTableDirective(el) {
          this.el = el;
          /**
           * The DataTable option you pass to configure your table.
           */

          this.dtOptions = {};
        }

        DataTableDirective.prototype.ngOnInit = function () {
          var _this = this;

          if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
              _this.displayTable();
            });
          } else {
            this.displayTable();
          }
        };

        DataTableDirective.prototype.ngOnDestroy = function () {
          if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
          }

          if (this.dt) {
            this.dt.destroy(true);
          }
        };

        DataTableDirective.prototype.displayTable = function () {
          var _this = this;

          this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
              // Using setTimeout as a "hack" to be "part" of NgZone
              setTimeout(function () {
                // Assign DT properties here
                var options = {
                  rowCallback: function rowCallback(row, data, index) {
                    if (dtOptions.columns) {
                      var columns_1 = dtOptions.columns; // Filter columns with pipe declared

                      var colsWithPipe = columns_1.filter(function (x) {
                        return x.ngPipeInstance;
                      }); // Iterate

                      colsWithPipe.forEach(function (el) {
                        var pipe = el.ngPipeInstance; // find index of column using `data` attr

                        var i = columns_1.findIndex(function (e) {
                          return e.data == el.data;
                        }); // get <td> element which holds data using index

                        var rowFromCol = row.childNodes.item(i); // Transform data with Pipe

                        var rowVal = $(rowFromCol).text();
                        var rowValAfter = pipe.transform(rowVal); // Apply transformed string to <td>

                        $(rowFromCol).text(rowValAfter);
                      });
                    } // run user specified row callback if provided.


                    if (_this.dtOptions.rowCallback) {
                      _this.dtOptions.rowCallback(row, data, index);
                    }
                  }
                }; // merge user's config with ours

                options = Object.assign({}, dtOptions, options);
                _this.dt = $(_this.el.nativeElement).DataTable(options);
                resolve(_this.dt);
              });
            });
          });
        };

        DataTableDirective.ctorParameters = function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        };

        DataTableDirective.propDecorators = {
          dtOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dtTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        };

        DataTableDirective.ɵfac = function DataTableDirective_Factory(t) {
          return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
        };

        DataTableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: DataTableDirective,
          selectors: [["", "datatable", ""]],
          inputs: {
            dtOptions: "dtOptions",
            dtTrigger: "dtTrigger"
          }
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
            args: [{
              selector: '[datatable]'
            }]
          }], function () {
            return [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }];
          }, {
            dtOptions: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            dtTrigger: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }]
          });
        })();

        return DataTableDirective;
      }(); //# sourceMappingURL=angular-datatables.directive.js.map

      /***/

    },

    /***/
    "HO/X":
    /*!***************************************************************************************!*\
      !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js ***!
      \***************************************************************************************/

    /*! exports provided: DataTablesModule */

    /***/
    function HOX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
        return DataTablesModule;
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


      var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./angular-datatables.directive */
      "/iSe");
      /**
       * @license
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
       */


      var DataTablesModule =
      /** @class */
      function () {
        function DataTablesModule() {}

        DataTablesModule.forRoot = function () {
          return {
            ngModule: DataTablesModule
          };
        };

        DataTablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: DataTablesModule
        });
        DataTablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function DataTablesModule_Factory(t) {
            return new (t || DataTablesModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTablesModule, {
            declarations: function declarations() {
              return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]];
            },
            imports: function imports() {
              return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
            },
            exports: function exports() {
              return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]];
            }
          });
        })();
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablesModule, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
              declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
              exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return DataTablesModule;
      }(); //# sourceMappingURL=angular-datatables.module.js.map

      /***/

    },

    /***/
    "JqCM":
    /*!***********************************************************************!*\
      !*** ./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js ***!
      \***********************************************************************/

    /*! exports provided: NgxSpinnerComponent, NgxSpinnerModule, NgxSpinnerService, ɵa */

    /***/
    function JqCM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxSpinnerComponent", function () {
        return NgxSpinnerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxSpinnerModule", function () {
        return NgxSpinnerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxSpinnerService", function () {
        return NgxSpinnerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return SafeHtmlPipe;
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


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      function NgxSpinnerComponent_div_0_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function NgxSpinnerComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxSpinnerComponent_div_0_div_1_div_1_Template, 1, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.spinner["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r1.spinner.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.spinner.divArray);
        }
      }

      function NgxSpinnerComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r2.template), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function NgxSpinnerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxSpinnerComponent_div_0_div_1_Template, 2, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxSpinnerComponent_div_0_div_2_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.spinner.bdColor)("z-index", ctx_r0.spinner.zIndex)("position", ctx_r0.spinner.fullScreen ? "fixed" : "absolute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", "in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.template);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.template);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", ctx_r0.spinner.zIndex);
        }
      }

      var _c0 = ["*"];
      var LOADERS = {
        'ball-8bits': 16,
        'ball-atom': 4,
        'ball-beat': 3,
        'ball-circus': 5,
        'ball-climbing-dot': 4,
        'ball-clip-rotate': 1,
        'ball-clip-rotate-multiple': 2,
        'ball-clip-rotate-pulse': 2,
        'ball-elastic-dots': 5,
        'ball-fall': 3,
        'ball-fussion': 4,
        'ball-grid-beat': 9,
        'ball-grid-pulse': 9,
        'ball-newton-cradle': 4,
        'ball-pulse': 3,
        'ball-pulse-rise': 5,
        'ball-pulse-sync': 3,
        'ball-rotate': 1,
        'ball-running-dots': 5,
        'ball-scale': 1,
        'ball-scale-multiple': 3,
        'ball-scale-pulse': 2,
        'ball-scale-ripple': 1,
        'ball-scale-ripple-multiple': 3,
        'ball-spin': 8,
        'ball-spin-clockwise': 8,
        'ball-spin-clockwise-fade': 8,
        'ball-spin-clockwise-fade-rotating': 8,
        'ball-spin-fade': 8,
        'ball-spin-fade-rotating': 8,
        'ball-spin-rotate': 2,
        'ball-square-clockwise-spin': 8,
        'ball-square-spin': 8,
        'ball-triangle-path': 3,
        'ball-zig-zag': 2,
        'ball-zig-zag-deflect': 2,
        'cog': 1,
        'cube-transition': 2,
        'fire': 3,
        'line-scale': 5,
        'line-scale-party': 5,
        'line-scale-pulse-out': 5,
        'line-scale-pulse-out-rapid': 5,
        'line-spin-clockwise-fade': 8,
        'line-spin-clockwise-fade-rotating': 8,
        'line-spin-fade': 8,
        'line-spin-fade-rotating': 8,
        'pacman': 6,
        'square-jelly-box': 2,
        'square-loader': 1,
        'square-spin': 1,
        'timer': 1,
        'triangle-skew-spin': 1
      };
      var DEFAULTS = {
        BD_COLOR: 'rgba(51,51,51,0.8)',
        SPINNER_COLOR: '#fff',
        SPINNER_TYPE: 'ball-scale-multiple',
        Z_INDEX: 99999
      };
      var PRIMARY_SPINNER = 'primary';

      var NgxSpinner = function NgxSpinner(init) {
        _classCallCheck2(this, NgxSpinner);

        Object.assign(this, init);
      };

      var NgxSpinnerService = /*#__PURE__*/function () {
        /**
         * Creates an instance of NgxSpinnerService.
         * @memberof NgxSpinnerService
         */
        function NgxSpinnerService() {
          _classCallCheck2(this, NgxSpinnerService);

          /**
           * Spinner observable
           *
           * @memberof NgxSpinnerService
           */
          // private spinnerObservable = new ReplaySubject<NgxSpinner>(1);
          this.spinnerObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        }
        /**
        * Get subscription of desired spinner
        * @memberof NgxSpinnerService
        **/


        _createClass2(NgxSpinnerService, [{
          key: "getSpinner",
          value: function getSpinner(name) {
            return this.spinnerObservable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) {
              return x && x.name === name;
            }));
          }
          /**
           * To show spinner
           *
           * @memberof NgxSpinnerService
           */

        }, {
          key: "show",
          value: function show() {
            var _this2 = this;

            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PRIMARY_SPINNER;
            var spinner = arguments.length > 1 ? arguments[1] : undefined;
            setTimeout(function () {
              var showPromise = new Promise(function (resolve, _reject) {
                if (spinner && Object.keys(spinner).length) {
                  spinner['name'] = name;

                  _this2.spinnerObservable.next(new NgxSpinner(Object.assign(Object.assign({}, spinner), {
                    show: true
                  })));

                  resolve(true);
                } else {
                  _this2.spinnerObservable.next(new NgxSpinner({
                    name: name,
                    show: true
                  }));

                  resolve(true);
                }
              });
              return showPromise;
            }, 10);
          }
          /**
          * To hide spinner
          *
          * @memberof NgxSpinnerService
          */

        }, {
          key: "hide",
          value: function hide() {
            var _this3 = this;

            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PRIMARY_SPINNER;
            var debounce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
            setTimeout(function () {
              var hidePromise = new Promise(function (resolve, _reject) {
                _this3.spinnerObservable.next(new NgxSpinner({
                  name: name,
                  show: false
                }));

                resolve(true);
              });
              return hidePromise;
            }, debounce);
          }
        }]);

        return NgxSpinnerService;
      }();

      NgxSpinnerService.ɵfac = function NgxSpinnerService_Factory(t) {
        return new (t || NgxSpinnerService)();
      };

      NgxSpinnerService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function NgxSpinnerService_Factory() {
          return new NgxSpinnerService();
        },
        token: NgxSpinnerService,
        providedIn: "root"
      });

      NgxSpinnerService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var NgxSpinnerComponent = /*#__PURE__*/function () {
        /**
         * Creates an instance of NgxSpinnerComponent.
         *
         * @memberof NgxSpinnerComponent
         */
        function NgxSpinnerComponent(spinnerService, changeDetector) {
          var _this4 = this;

          _classCallCheck2(this, NgxSpinnerComponent);

          this.spinnerService = spinnerService;
          this.changeDetector = changeDetector;
          /**
           * Spinner Object
           *
           * @memberof NgxSpinnerComponent
           */

          this.spinner = new NgxSpinner();
          /**
           * Unsubscribe from spinner's observable
           *
           * @memberof NgxSpinnerComponent
          **/

          this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          /**
           * To set default ngx-spinner options
           *
           * @memberof NgxSpinnerComponent
           */

          this.setDefaultOptions = function () {
            _this4.spinner = new NgxSpinner({
              name: _this4.name,
              bdColor: _this4.bdColor,
              size: _this4.size,
              color: _this4.color,
              type: _this4.type,
              fullScreen: _this4.fullScreen,
              divArray: _this4.divArray,
              divCount: _this4.divCount,
              show: _this4.show,
              zIndex: _this4.zIndex,
              template: _this4.template
            });
          };

          this.bdColor = DEFAULTS.BD_COLOR;
          this.zIndex = DEFAULTS.Z_INDEX;
          this.color = DEFAULTS.SPINNER_COLOR;
          this.type = DEFAULTS.SPINNER_TYPE;
          this.size = 'large';
          this.fullScreen = true;
          this.name = PRIMARY_SPINNER;
          this.template = null;
          this.divArray = [];
          this.divCount = 0;
          this.show = false;
        }
        /**
         * Initialization method
         *
         * @memberof NgxSpinnerComponent
         */


        _createClass2(NgxSpinnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.setDefaultOptions();
            this.spinnerService.getSpinner(this.name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (spinner) {
              _this5.setDefaultOptions();

              Object.assign(_this5.spinner, spinner);

              if (spinner.show) {
                _this5.onInputChange();
              }

              _this5.changeDetector.markForCheck();
            });
          }
          /**
           * On changes event for input variables
           *
           * @memberof NgxSpinnerComponent
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var propName in changes) {
              if (propName) {
                var changedProp = changes[propName];

                if (changedProp.isFirstChange()) {
                  return;
                } else if (typeof changedProp.currentValue !== 'undefined' && changedProp.currentValue !== changedProp.previousValue) {
                  if (changedProp.currentValue !== '') {
                    this.spinner[propName] = changedProp.currentValue;
                  }
                }
              }
            }
          }
          /**
           * To get class for spinner
           *
           * @memberof NgxSpinnerComponent
           */

        }, {
          key: "getClass",
          value: function getClass(type, size) {
            this.spinner.divCount = LOADERS[type];
            this.spinner.divArray = Array(this.spinner.divCount).fill(0).map(function (x, i) {
              return i;
            });
            var sizeClass = '';

            switch (size.toLowerCase()) {
              case 'small':
                sizeClass = 'la-sm';
                break;

              case 'medium':
                sizeClass = 'la-2x';
                break;

              case 'large':
                sizeClass = 'la-3x';
                break;

              default:
                break;
            }

            return 'la-' + type + ' ' + sizeClass;
          }
          /**
           * Check if input variables have changed
           *
           * @memberof NgxSpinnerComponent
           */

        }, {
          key: "onInputChange",
          value: function onInputChange() {
            this.spinner["class"] = this.getClass(this.spinner.type, this.spinner.size);
          }
          /**
           * Component destroy event
           *
           * @memberof NgxSpinnerComponent
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
          }
        }]);

        return NgxSpinnerComponent;
      }();

      NgxSpinnerComponent.ɵfac = function NgxSpinnerComponent_Factory(t) {
        return new (t || NgxSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      NgxSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxSpinnerComponent,
        selectors: [["ngx-spinner"]],
        inputs: {
          bdColor: "bdColor",
          zIndex: "zIndex",
          color: "color",
          type: "type",
          size: "size",
          fullScreen: "fullScreen",
          name: "name",
          template: "template"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 1,
        consts: [["class", "overlay", 3, "background-color", "z-index", "position", 4, "ngIf"], [1, "overlay"], [3, "class", "color", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [1, "loading-text"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]],
        template: function NgxSpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxSpinnerComponent_div_0_Template, 5, 11, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner.show);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]];
        },
        pipes: function pipes() {
          return [SafeHtmlPipe];
        },
        styles: [".la-ball-8bits[_ngcontent-%COMP%], .la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-8bits[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-8bits.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-8bits[_ngcontent-%COMP%]{height:12px;width:12px}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-8bits 1s ease 0s infinite;animation:ball-8bits 1s ease 0s infinite;border-radius:0;height:4px;left:50%;opacity:0;position:absolute;top:50%;transform:translate(100%,100%);width:4px}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.9375s;animation-delay:-.9375s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.8125s;animation-delay:-.8125s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.6875s;animation-delay:-.6875s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.5625s;animation-delay:-.5625s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:-.4375s;animation-delay:-.4375s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11){-webkit-animation-delay:-.3125s;animation-delay:-.3125s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12){-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(13){-webkit-animation-delay:-.1875s;animation-delay:-.1875s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(14){-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(15){-webkit-animation-delay:-.0625s;animation-delay:-.0625s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(16){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{left:0;top:-100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){left:33.3333333333%;top:-100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){left:66.6666666667%;top:-66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){left:100%;top:-33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){left:100%;top:0}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){left:100%;top:33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){left:66.6666666667%;top:66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){left:33.3333333333%;top:100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){left:0;top:100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){left:-33.3333333333%;top:100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11){left:-66.6666666667%;top:66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12){left:-100%;top:33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(13){left:-100%;top:0}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(14){left:-100%;top:-33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(15){left:-66.6666666667%;top:-66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(16){left:-33.3333333333%;top:-100%}.la-ball-8bits.la-sm[_ngcontent-%COMP%]{height:6px;width:6px}.la-ball-8bits.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:2px;width:2px}.la-ball-8bits.la-2x[_ngcontent-%COMP%]{height:24px;width:24px}.la-ball-8bits.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:8px;width:8px}.la-ball-8bits.la-3x[_ngcontent-%COMP%]{height:36px;width:36px}.la-ball-8bits.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:12px;width:12px}@-webkit-keyframes ball-8bits{0%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes ball-8bits{0%{opacity:1}50%{opacity:1}51%{opacity:0}}.la-ball-atom[_ngcontent-%COMP%], .la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-atom[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-atom.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-atom[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-atom-shrink 4.5s linear infinite;animation:ball-atom-shrink 4.5s linear infinite;background:#aaa;border-radius:100%;height:60%;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:60%;z-index:1}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){-webkit-animation:ball-atom-zindex 1.5s steps(2) 0s infinite;animation:ball-atom-zindex 1.5s steps(2) 0s infinite;background:none;height:100%;left:0;position:absolute;width:100%;z-index:0}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):before{-webkit-animation:ball-atom-position 1.5s ease 0s infinite,ball-atom-size 1.5s ease 0s infinite;animation:ball-atom-position 1.5s ease 0s infinite,ball-atom-size 1.5s ease 0s infinite;background:currentColor;border-radius:50%;content:\"\";height:10px;left:0;margin-left:-5px;margin-top:-5px;opacity:.75;position:absolute;top:0;width:10px}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.75s;animation-delay:.75s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2):before{-webkit-animation-delay:0s,-1.125s;animation-delay:0s,-1.125s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.25s;animation-delay:-.25s;transform:rotate(120deg)}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3):before{-webkit-animation-delay:-1s,-.75s;animation-delay:-1s,-.75s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:.25s;animation-delay:.25s;transform:rotate(240deg)}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4):before{-webkit-animation-delay:-.5s,-.125s;animation-delay:-.5s,-.125s}.la-ball-atom.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-atom.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):before{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-atom.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-atom.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):before{height:20px;margin-left:-10px;margin-top:-10px;width:20px}.la-ball-atom.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-atom.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):before{height:30px;margin-left:-15px;margin-top:-15px;width:30px}@-webkit-keyframes ball-atom-position{50%{left:100%;top:100%}}@keyframes ball-atom-position{50%{left:100%;top:100%}}@-webkit-keyframes ball-atom-size{50%{transform:scale(.5)}}@keyframes ball-atom-size{50%{transform:scale(.5)}}@-webkit-keyframes ball-atom-zindex{50%{z-index:10}}@keyframes ball-atom-zindex{50%{z-index:10}}@-webkit-keyframes ball-atom-shrink{50%{transform:translate(-50%,-50%) scale(.8)}}@keyframes ball-atom-shrink{50%{transform:translate(-50%,-50%) scale(.8)}}.la-ball-beat[_ngcontent-%COMP%], .la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-beat[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-beat.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-beat[_ngcontent-%COMP%]{height:18px;width:54px}.la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-beat .7s linear -.15s infinite;animation:ball-beat .7s linear -.15s infinite;border-radius:100%;height:10px;margin:4px;width:10px}.la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n-1){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-beat.la-sm[_ngcontent-%COMP%]{height:8px;width:26px}.la-ball-beat.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin:2px;width:4px}.la-ball-beat.la-2x[_ngcontent-%COMP%]{height:36px;width:108px}.la-ball-beat.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;margin:8px;width:20px}.la-ball-beat.la-3x[_ngcontent-%COMP%]{height:54px;width:162px}.la-ball-beat.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;margin:12px;width:30px}@-webkit-keyframes ball-beat{50%{opacity:.2;transform:scale(.75)}to{opacity:1;transform:scale(1)}}@keyframes ball-beat{50%{opacity:.2;transform:scale(.75)}to{opacity:1;transform:scale(1)}}.la-ball-circus[_ngcontent-%COMP%], .la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-circus[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-circus.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-circus[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-circus-position 2.5s cubic-bezier(.25,0,.75,1) infinite,ball-circus-size 2.5s cubic-bezier(.25,0,.75,1) infinite;animation:ball-circus-position 2.5s cubic-bezier(.25,0,.75,1) infinite,ball-circus-size 2.5s cubic-bezier(.25,0,.75,1) infinite;border-radius:100%;display:block;height:16px;height:100%;left:-100%;opacity:.5;position:absolute;top:0;width:16px;width:100%}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:0s,-.5s;animation-delay:0s,-.5s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.5s,-1s;animation-delay:-.5s,-1s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1s,-1.5s;animation-delay:-1s,-1.5s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.5s,-2s;animation-delay:-1.5s,-2s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-2s,-2.5s;animation-delay:-2s,-2.5s}.la-ball-circus.la-sm[_ngcontent-%COMP%], .la-ball-circus.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:8px;width:8px}.la-ball-circus.la-2x[_ngcontent-%COMP%], .la-ball-circus.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-circus.la-3x[_ngcontent-%COMP%], .la-ball-circus.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:48px;width:48px}@-webkit-keyframes ball-circus-position{50%{left:100%}}@keyframes ball-circus-position{50%{left:100%}}@-webkit-keyframes ball-circus-size{50%{transform:scale(.3)}}@keyframes ball-circus-size{50%{transform:scale(.3)}}.la-ball-climbing-dot[_ngcontent-%COMP%], .la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-climbing-dot[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-climbing-dot.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-climbing-dot[_ngcontent-%COMP%]{height:32px;width:42px}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-climbing-dot-jump .6s ease-in-out infinite;animation:ball-climbing-dot-jump .6s ease-in-out infinite;border-radius:100%;bottom:32%;height:14px;left:18%;position:absolute;transform-origin:center bottom;width:14px}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){-webkit-animation:ball-climbing-dot-steps 1.8s linear infinite;animation:ball-climbing-dot-steps 1.8s linear infinite;border-radius:0;height:2px;position:absolute;right:0;top:0;transform:translate(60%);width:14px}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):nth-child(2){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child):nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-climbing-dot.la-sm[_ngcontent-%COMP%]{height:16px;width:20px}.la-ball-climbing-dot.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{height:6px;width:6px}.la-ball-climbing-dot.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){height:1px;width:6px}.la-ball-climbing-dot.la-2x[_ngcontent-%COMP%]{height:64px;width:84px}.la-ball-climbing-dot.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{height:28px;width:28px}.la-ball-climbing-dot.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){height:4px;width:28px}.la-ball-climbing-dot.la-3x[_ngcontent-%COMP%]{height:96px;width:126px}.la-ball-climbing-dot.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{height:42px;width:42px}.la-ball-climbing-dot.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){height:6px;width:42px}@-webkit-keyframes ball-climbing-dot-jump{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}to{transform:scaleY(.7)}}@keyframes ball-climbing-dot-jump{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}to{transform:scaleY(.7)}}@-webkit-keyframes ball-climbing-dot-steps{0%{opacity:0;right:0;top:0}50%{opacity:1}to{opacity:0;right:100%;top:100%}}@keyframes ball-climbing-dot-steps{0%{opacity:0;right:0;top:0}50%{opacity:1}to{opacity:0;right:100%;top:100%}}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%], .la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-clip-rotate-multiple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;animation:ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;background:transparent;border-radius:100%;border-style:solid;border-width:2px;left:50%;position:absolute;top:50%}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{border-left-color:transparent;border-right-color:transparent;height:32px;position:absolute;width:32px}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation-direction:reverse;-webkit-animation-duration:.5s;animation-direction:reverse;animation-duration:.5s;border-bottom-color:transparent;border-top-color:transparent;height:16px;width:16px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{height:16px;width:16px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{height:8px;width:8px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{height:64px;width:64px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{height:32px;width:32px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{height:96px;width:96px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{height:48px;width:48px}@-webkit-keyframes ball-clip-rotate-multiple-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ball-clip-rotate-multiple-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%], .la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-clip-rotate-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:100%;left:50%;position:absolute;top:50%}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09,.57,.49,.9) infinite;animation:ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09,.57,.49,.9) infinite;background:transparent;border-bottom-style:solid;border-bottom-width:2px;border-left:2px solid transparent;border-right:2px solid transparent;border-top-style:solid;border-top-width:2px;height:32px;position:absolute;width:32px}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation:ball-clip-rotate-pulse-scale 1s cubic-bezier(.09,.57,.49,.9) infinite;animation:ball-clip-rotate-pulse-scale 1s cubic-bezier(.09,.57,.49,.9) infinite;height:16px;width:16px}.la-ball-clip-rotate-pulse.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-clip-rotate-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{border-width:1px;height:16px;width:16px}.la-ball-clip-rotate-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{height:8px;width:8px}.la-ball-clip-rotate-pulse.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-clip-rotate-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{border-width:4px;height:64px;width:64px}.la-ball-clip-rotate-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{height:32px;width:32px}.la-ball-clip-rotate-pulse.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-clip-rotate-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{border-width:6px;height:96px;width:96px}.la-ball-clip-rotate-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{height:48px;width:48px}@-webkit-keyframes ball-clip-rotate-pulse-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ball-clip-rotate-pulse-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@-webkit-keyframes ball-clip-rotate-pulse-scale{0%,to{opacity:1;transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;transform:translate(-50%,-50%) scale(.15)}}@keyframes ball-clip-rotate-pulse-scale{0%,to{opacity:1;transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;transform:translate(-50%,-50%) scale(.15)}}.la-ball-clip-rotate[_ngcontent-%COMP%], .la-ball-clip-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-clip-rotate[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-clip-rotate.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-clip-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-clip-rotate[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-clip-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-clip-rotate .75s linear infinite;animation:ball-clip-rotate .75s linear infinite;background:transparent;border-bottom-color:transparent;border-radius:100%;border-width:2px;height:32px;width:32px}.la-ball-clip-rotate.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-clip-rotate.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px;height:16px;width:16px}.la-ball-clip-rotate.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-clip-rotate.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px;height:64px;width:64px}.la-ball-clip-rotate.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-clip-rotate.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px;height:96px;width:96px}@-webkit-keyframes ball-clip-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes ball-clip-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.la-ball-elastic-dots[_ngcontent-%COMP%], .la-ball-elastic-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-elastic-dots[_ngcontent-%COMP%]{color:#fff;display:block}.la-ball-elastic-dots.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-elastic-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;float:none}.la-ball-elastic-dots[_ngcontent-%COMP%]{font-size:0;height:10px;text-align:center;width:120px}.la-ball-elastic-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-elastic-dots-anim 1s infinite;animation:ball-elastic-dots-anim 1s infinite;border-radius:100%;display:inline-block;height:10px;white-space:nowrap;width:10px}.la-ball-elastic-dots.la-sm[_ngcontent-%COMP%]{height:4px;width:60px}.la-ball-elastic-dots.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;width:4px}.la-ball-elastic-dots.la-2x[_ngcontent-%COMP%]{height:20px;width:240px}.la-ball-elastic-dots.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;width:20px}.la-ball-elastic-dots.la-3x[_ngcontent-%COMP%]{height:30px;width:360px}.la-ball-elastic-dots.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;width:30px}@-webkit-keyframes ball-elastic-dots-anim{0%,to{margin:0;transform:scale(1)}50%{margin:0 5%;transform:scale(.65)}}@keyframes ball-elastic-dots-anim{0%,to{margin:0;transform:scale(1)}50%{margin:0 5%;transform:scale(.65)}}.la-ball-fall[_ngcontent-%COMP%], .la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-fall[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-fall.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-fall[_ngcontent-%COMP%]{height:18px;width:54px}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-fall 1s ease-in-out infinite;animation:ball-fall 1s ease-in-out infinite;border-radius:100%;height:10px;margin:4px;opacity:0;width:10px}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-fall.la-sm[_ngcontent-%COMP%]{height:8px;width:26px}.la-ball-fall.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin:2px;width:4px}.la-ball-fall.la-2x[_ngcontent-%COMP%]{height:36px;width:108px}.la-ball-fall.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;margin:8px;width:20px}.la-ball-fall.la-3x[_ngcontent-%COMP%]{height:54px;width:162px}.la-ball-fall.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;margin:12px;width:30px}@-webkit-keyframes ball-fall{0%{opacity:0;transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}90%{opacity:.5}to{opacity:0;transform:translateY(145%)}}@keyframes ball-fall{0%{opacity:0;transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}90%{opacity:.5}to{opacity:0;transform:translateY(145%)}}.la-ball-fussion[_ngcontent-%COMP%], .la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-fussion[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-fussion.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-fussion[_ngcontent-%COMP%]{height:8px;width:8px}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-fussion-ball1 1s ease 0s infinite;animation:ball-fussion-ball1 1s ease 0s infinite;border-radius:100%;height:12px;position:absolute;transform:translate(-50%,-50%);width:12px}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{left:50%;top:0;z-index:1}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-name:ball-fussion-ball2;animation-name:ball-fussion-ball2;left:100%;top:50%;z-index:2}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-name:ball-fussion-ball3;animation-name:ball-fussion-ball3;left:50%;top:100%;z-index:1}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-name:ball-fussion-ball4;animation-name:ball-fussion-ball4;left:0;top:50%;z-index:2}.la-ball-fussion.la-sm[_ngcontent-%COMP%]{height:4px;width:4px}.la-ball-fussion.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:6px;width:6px}.la-ball-fussion.la-2x[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-fussion.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-ball-fussion.la-3x[_ngcontent-%COMP%]{height:24px;width:24px}.la-ball-fussion.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:36px;width:36px}@-webkit-keyframes ball-fussion-ball1{0%{opacity:.35}50%{left:200%;opacity:1;top:-100%}to{left:100%;opacity:.35;top:50%;z-index:2}}@keyframes ball-fussion-ball1{0%{opacity:.35}50%{left:200%;opacity:1;top:-100%}to{left:100%;opacity:.35;top:50%;z-index:2}}@-webkit-keyframes ball-fussion-ball2{0%{opacity:.35}50%{left:200%;opacity:1;top:200%}to{left:50%;opacity:.35;top:100%;z-index:1}}@keyframes ball-fussion-ball2{0%{opacity:.35}50%{left:200%;opacity:1;top:200%}to{left:50%;opacity:.35;top:100%;z-index:1}}@-webkit-keyframes ball-fussion-ball3{0%{opacity:.35}50%{left:-100%;opacity:1;top:200%}to{left:0;opacity:.35;top:50%;z-index:2}}@keyframes ball-fussion-ball3{0%{opacity:.35}50%{left:-100%;opacity:1;top:200%}to{left:0;opacity:.35;top:50%;z-index:2}}@-webkit-keyframes ball-fussion-ball4{0%{opacity:.35}50%{left:-100%;opacity:1;top:-100%}to{left:50%;opacity:.35;top:0;z-index:1}}@keyframes ball-fussion-ball4{0%{opacity:.35}50%{left:-100%;opacity:1;top:-100%}to{left:50%;opacity:.35;top:0;z-index:1}}.la-ball-grid-beat[_ngcontent-%COMP%], .la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-grid-beat[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-grid-beat.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-grid-beat[_ngcontent-%COMP%]{height:36px;width:36px}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation-iteration-count:infinite;-webkit-animation-name:ball-grid-beat;animation-iteration-count:infinite;animation-name:ball-grid-beat;border-radius:100%;height:8px;margin:2px;width:8px}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:.03s;-webkit-animation-duration:.65s;animation-delay:.03s;animation-duration:.65s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.09s;-webkit-animation-duration:1.02s;animation-delay:.09s;animation-duration:1.02s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.69s;-webkit-animation-duration:1.06s;animation-delay:-.69s;animation-duration:1.06s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.41s;-webkit-animation-duration:1.5s;animation-delay:-.41s;animation-duration:1.5s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:.04s;-webkit-animation-duration:1.6s;animation-delay:.04s;animation-duration:1.6s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:.07s;-webkit-animation-duration:.84s;animation-delay:.07s;animation-duration:.84s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.66s;-webkit-animation-duration:.68s;animation-delay:-.66s;animation-duration:.68s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-.76s;-webkit-animation-duration:.93s;animation-delay:-.76s;animation-duration:.93s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:-.76s;-webkit-animation-duration:1.24s;animation-delay:-.76s;animation-duration:1.24s}.la-ball-grid-beat.la-sm[_ngcontent-%COMP%]{height:18px;width:18px}.la-ball-grid-beat.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin:1px;width:4px}.la-ball-grid-beat.la-2x[_ngcontent-%COMP%]{height:72px;width:72px}.la-ball-grid-beat.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;margin:4px;width:16px}.la-ball-grid-beat.la-3x[_ngcontent-%COMP%]{height:108px;width:108px}.la-ball-grid-beat.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:24px;margin:6px;width:24px}@-webkit-keyframes ball-grid-beat{0%{opacity:1}50%{opacity:.35}to{opacity:1}}@keyframes ball-grid-beat{0%{opacity:1}50%{opacity:.35}to{opacity:1}}.la-ball-grid-pulse[_ngcontent-%COMP%], .la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-grid-pulse[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-grid-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-grid-pulse[_ngcontent-%COMP%]{height:36px;width:36px}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation-iteration-count:infinite;-webkit-animation-name:ball-grid-pulse;animation-iteration-count:infinite;animation-name:ball-grid-pulse;border-radius:100%;height:8px;margin:2px;width:8px}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:.03s;-webkit-animation-duration:.65s;animation-delay:.03s;animation-duration:.65s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.09s;-webkit-animation-duration:1.02s;animation-delay:.09s;animation-duration:1.02s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.69s;-webkit-animation-duration:1.06s;animation-delay:-.69s;animation-duration:1.06s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.41s;-webkit-animation-duration:1.5s;animation-delay:-.41s;animation-duration:1.5s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:.04s;-webkit-animation-duration:1.6s;animation-delay:.04s;animation-duration:1.6s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:.07s;-webkit-animation-duration:.84s;animation-delay:.07s;animation-duration:.84s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.66s;-webkit-animation-duration:.68s;animation-delay:-.66s;animation-duration:.68s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-.76s;-webkit-animation-duration:.93s;animation-delay:-.76s;animation-duration:.93s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:-.76s;-webkit-animation-duration:1.24s;animation-delay:-.76s;animation-duration:1.24s}.la-ball-grid-pulse.la-sm[_ngcontent-%COMP%]{height:18px;width:18px}.la-ball-grid-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin:1px;width:4px}.la-ball-grid-pulse.la-2x[_ngcontent-%COMP%]{height:72px;width:72px}.la-ball-grid-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;margin:4px;width:16px}.la-ball-grid-pulse.la-3x[_ngcontent-%COMP%]{height:108px;width:108px}.la-ball-grid-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:24px;margin:6px;width:24px}@-webkit-keyframes ball-grid-pulse{0%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.45)}to{opacity:1;transform:scale(1)}}@keyframes ball-grid-pulse{0%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.45)}to{opacity:1;transform:scale(1)}}.la-ball-newton-cradle[_ngcontent-%COMP%], .la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-newton-cradle[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-newton-cradle.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-newton-cradle[_ngcontent-%COMP%]{height:10px;width:40px}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:100%;height:10px;width:10px}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-newton-cradle-left 1s ease-out 0s infinite;animation:ball-newton-cradle-left 1s ease-out 0s infinite;transform:translateX(0)}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation:ball-newton-cradle-right 1s ease-out 0s infinite;animation:ball-newton-cradle-right 1s ease-out 0s infinite;transform:translateX(0)}.la-ball-newton-cradle.la-sm[_ngcontent-%COMP%]{height:4px;width:20px}.la-ball-newton-cradle.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;width:4px}.la-ball-newton-cradle.la-2x[_ngcontent-%COMP%]{height:20px;width:80px}.la-ball-newton-cradle.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;width:20px}.la-ball-newton-cradle.la-3x[_ngcontent-%COMP%]{height:30px;width:120px}.la-ball-newton-cradle.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;width:30px}@-webkit-keyframes ball-newton-cradle-left{25%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:translateX(-100%)}50%{transform:translateX(0)}}@keyframes ball-newton-cradle-left{25%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:translateX(-100%)}50%{transform:translateX(0)}}@-webkit-keyframes ball-newton-cradle-right{50%{transform:translateX(0)}75%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:translateX(100%)}to{transform:translateX(0)}}@keyframes ball-newton-cradle-right{50%{transform:translateX(0)}75%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:translateX(100%)}to{transform:translateX(0)}}.la-ball-pulse-rise[_ngcontent-%COMP%], .la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-pulse-rise[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-pulse-rise.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-pulse-rise[_ngcontent-%COMP%]{height:14px;width:70px}.la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-pulse-rise-even 1s cubic-bezier(.15,.36,.9,.6) 0s infinite;animation:ball-pulse-rise-even 1s cubic-bezier(.15,.36,.9,.6) 0s infinite;border-radius:100%;height:10px;margin:2px;width:10px}.la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n-1){-webkit-animation-name:ball-pulse-rise-odd;animation-name:ball-pulse-rise-odd}.la-ball-pulse-rise.la-sm[_ngcontent-%COMP%]{height:6px;width:34px}.la-ball-pulse-rise.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin:1px;width:4px}.la-ball-pulse-rise.la-2x[_ngcontent-%COMP%]{height:28px;width:140px}.la-ball-pulse-rise.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;margin:4px;width:20px}.la-ball-pulse-rise.la-3x[_ngcontent-%COMP%]{height:42px;width:210px}.la-ball-pulse-rise.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;margin:6px;width:30px}@-webkit-keyframes ball-pulse-rise-even{0%{opacity:1;transform:scale(1.1)}25%{transform:translateY(-200%)}50%{opacity:.35;transform:scale(.3)}75%{transform:translateY(200%)}to{opacity:1;transform:translateY(0);transform:scale(1)}}@keyframes ball-pulse-rise-even{0%{opacity:1;transform:scale(1.1)}25%{transform:translateY(-200%)}50%{opacity:.35;transform:scale(.3)}75%{transform:translateY(200%)}to{opacity:1;transform:translateY(0);transform:scale(1)}}@-webkit-keyframes ball-pulse-rise-odd{0%{opacity:.35;transform:scale(.4)}25%{transform:translateY(200%)}50%{opacity:1;transform:scale(1.1)}75%{transform:translateY(-200%)}to{opacity:.35;transform:translateY(0);transform:scale(.75)}}@keyframes ball-pulse-rise-odd{0%{opacity:.35;transform:scale(.4)}25%{transform:translateY(200%)}50%{opacity:1;transform:scale(1.1)}75%{transform:translateY(-200%)}to{opacity:.35;transform:translateY(0);transform:scale(.75)}}.la-ball-pulse-sync[_ngcontent-%COMP%], .la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-pulse-sync[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-pulse-sync.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-pulse-sync[_ngcontent-%COMP%]{height:18px;width:54px}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-pulse-sync .6s ease-in-out infinite;animation:ball-pulse-sync .6s ease-in-out infinite;border-radius:100%;height:10px;margin:4px;width:10px}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.14s;animation-delay:-.14s}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.07s;animation-delay:-.07s}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse-sync.la-sm[_ngcontent-%COMP%]{height:8px;width:26px}.la-ball-pulse-sync.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin:2px;width:4px}.la-ball-pulse-sync.la-2x[_ngcontent-%COMP%]{height:36px;width:108px}.la-ball-pulse-sync.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;margin:8px;width:20px}.la-ball-pulse-sync.la-3x[_ngcontent-%COMP%]{height:54px;width:162px}.la-ball-pulse-sync.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;margin:12px;width:30px}@-webkit-keyframes ball-pulse-sync{33%{transform:translateY(100%)}66%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes ball-pulse-sync{33%{transform:translateY(100%)}66%{transform:translateY(-100%)}to{transform:translateY(0)}}.la-ball-pulse[_ngcontent-%COMP%], .la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-pulse[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-pulse[_ngcontent-%COMP%]{height:18px;width:54px}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-pulse 1s ease infinite;animation:ball-pulse 1s ease infinite;border-radius:100%;height:10px;margin:4px;width:10px}.la-ball-pulse.la-sm[_ngcontent-%COMP%]{height:8px;width:26px}.la-ball-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin:2px;width:4px}.la-ball-pulse.la-2x[_ngcontent-%COMP%]{height:36px;width:108px}.la-ball-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;margin:8px;width:20px}.la-ball-pulse.la-3x[_ngcontent-%COMP%]{height:54px;width:162px}.la-ball-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;margin:12px;width:30px}@-webkit-keyframes ball-pulse{0%,60%,to{opacity:1;transform:scale(1)}30%{opacity:.1;transform:scale(.01)}}@keyframes ball-pulse{0%,60%,to{opacity:1;transform:scale(1)}30%{opacity:.1;transform:scale(.01)}}.la-ball-rotate[_ngcontent-%COMP%], .la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-rotate[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-rotate.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-rotate[_ngcontent-%COMP%], .la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:10px;width:10px}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-rotate-animation 1s cubic-bezier(.7,-.13,.22,.86) infinite;animation:ball-rotate-animation 1s cubic-bezier(.7,-.13,.22,.86) infinite;border-radius:100%}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{background:currentColor;border-radius:inherit;content:\"\";height:inherit;margin:inherit;opacity:.8;position:absolute;width:inherit}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{left:-150%;top:0}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{left:150%;top:0}.la-ball-rotate.la-sm[_ngcontent-%COMP%], .la-ball-rotate.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;width:4px}.la-ball-rotate.la-2x[_ngcontent-%COMP%], .la-ball-rotate.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;width:20px}.la-ball-rotate.la-3x[_ngcontent-%COMP%], .la-ball-rotate.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;width:30px}@-webkit-keyframes ball-rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes ball-rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.la-ball-running-dots[_ngcontent-%COMP%], .la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-running-dots[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-running-dots.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-running-dots[_ngcontent-%COMP%]{height:10px;width:10px}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-running-dots-animate 2s linear infinite;animation:ball-running-dots-animate 2s linear infinite;border-radius:100%;height:10px;margin-left:-25px;position:absolute;width:10px}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-1.6s;animation-delay:-1.6s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-2.4s;animation-delay:-2.4s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-2.8s;animation-delay:-2.8s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:-3.2s;animation-delay:-3.2s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){-webkit-animation-delay:-3.6s;animation-delay:-3.6s}.la-ball-running-dots.la-sm[_ngcontent-%COMP%]{height:4px;width:4px}.la-ball-running-dots.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:-12px;width:4px}.la-ball-running-dots.la-2x[_ngcontent-%COMP%]{height:20px;width:20px}.la-ball-running-dots.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;margin-left:-50px;width:20px}.la-ball-running-dots.la-3x[_ngcontent-%COMP%]{height:30px;width:30px}.la-ball-running-dots.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;margin-left:-75px;width:30px}@-webkit-keyframes ball-running-dots-animate{0%,to{height:100%;transform:translateY(0) translateX(500%);width:100%}80%{transform:translateY(0) translateX(0)}85%{height:100%;transform:translateY(-125%) translateX(0);width:100%}90%{height:75%;width:200%}95%{height:100%;transform:translateY(-100%) translateX(500%);width:100%}}@keyframes ball-running-dots-animate{0%,to{height:100%;transform:translateY(0) translateX(500%);width:100%}80%{transform:translateY(0) translateX(0)}85%{height:100%;transform:translateY(-125%) translateX(0);width:100%}90%{height:75%;width:200%}95%{height:100%;transform:translateY(-100%) translateX(500%);width:100%}}.la-ball-scale-multiple[_ngcontent-%COMP%], .la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-scale-multiple[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-scale-multiple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-scale-multiple[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-scale-multiple 1s linear 0s infinite;animation:ball-scale-multiple 1s linear 0s infinite;border-radius:100%;height:32px;left:0;opacity:0;position:absolute;top:0;width:32px}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.la-ball-scale-multiple.la-sm[_ngcontent-%COMP%], .la-ball-scale-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-scale-multiple.la-2x[_ngcontent-%COMP%], .la-ball-scale-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-scale-multiple.la-3x[_ngcontent-%COMP%], .la-ball-scale-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:96px;width:96px}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}.la-ball-scale-pulse[_ngcontent-%COMP%], .la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-scale-pulse[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-scale-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-scale-pulse[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-scale-pulse 2s ease-in-out infinite;animation:ball-scale-pulse 2s ease-in-out infinite;border-radius:100%;height:32px;left:0;opacity:.5;position:absolute;top:0;width:32px}.la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-scale-pulse.la-sm[_ngcontent-%COMP%], .la-ball-scale-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-scale-pulse.la-2x[_ngcontent-%COMP%], .la-ball-scale-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-scale-pulse.la-3x[_ngcontent-%COMP%], .la-ball-scale-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:96px;width:96px}@-webkit-keyframes ball-scale-pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes ball-scale-pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%], .la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-scale-ripple-multiple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-scale-ripple-multiple 1.25s cubic-bezier(.21,.53,.56,.8) 0s infinite;animation:ball-scale-ripple-multiple 1.25s cubic-bezier(.21,.53,.56,.8) 0s infinite;background:transparent;border-radius:100%;border-width:2px;height:32px;left:0;opacity:0;position:absolute;top:0;width:32px}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.la-ball-scale-ripple-multiple.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-scale-ripple-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px;height:16px;width:16px}.la-ball-scale-ripple-multiple.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-scale-ripple-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px;height:64px;width:64px}.la-ball-scale-ripple-multiple.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-scale-ripple-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px;height:96px;width:96px}@-webkit-keyframes ball-scale-ripple-multiple{0%{opacity:1;transform:scale(.1)}70%{opacity:.5;transform:scale(1)}95%{opacity:0}}@keyframes ball-scale-ripple-multiple{0%{opacity:1;transform:scale(.1)}70%{opacity:.5;transform:scale(1)}95%{opacity:0}}.la-ball-scale-ripple[_ngcontent-%COMP%], .la-ball-scale-ripple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-scale-ripple[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-scale-ripple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-ripple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-scale-ripple[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-scale-ripple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-scale-ripple 1s cubic-bezier(.21,.53,.56,.8) 0s infinite;animation:ball-scale-ripple 1s cubic-bezier(.21,.53,.56,.8) 0s infinite;background:transparent;border-radius:100%;border-width:2px;height:32px;opacity:0;width:32px}.la-ball-scale-ripple.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-scale-ripple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px;height:16px;width:16px}.la-ball-scale-ripple.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-scale-ripple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px;height:64px;width:64px}.la-ball-scale-ripple.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-scale-ripple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px;height:96px;width:96px}@-webkit-keyframes ball-scale-ripple{0%{opacity:1;transform:scale(.1)}70%{opacity:.65;transform:scale(1)}to{opacity:0}}@keyframes ball-scale-ripple{0%{opacity:1;transform:scale(.1)}70%{opacity:.65;transform:scale(1)}to{opacity:0}}.la-ball-scale[_ngcontent-%COMP%], .la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-scale[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-scale.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-scale[_ngcontent-%COMP%], .la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-scale 1s ease-in-out 0s infinite;animation:ball-scale 1s ease-in-out 0s infinite;border-radius:100%;opacity:0}.la-ball-scale.la-sm[_ngcontent-%COMP%], .la-ball-scale.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-scale.la-2x[_ngcontent-%COMP%], .la-ball-scale.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-scale.la-3x[_ngcontent-%COMP%], .la-ball-scale.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:96px;width:96px}@-webkit-keyframes ball-scale{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}@keyframes ball-scale{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%], .la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-spin-clockwise-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{-webkit-animation:ball-spin-clockwise-fade-rotating-rotate 6s linear infinite;animation:ball-spin-clockwise-fade-rotating-rotate 6s linear infinite;height:32px;width:32px}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-spin-clockwise-fade-rotating 1s linear infinite;animation:ball-spin-clockwise-fade-rotating 1s linear infinite;border-radius:100%;height:8px;left:50%;margin-left:-4px;margin-top:-4px;position:absolute;top:50%;width:8px}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.875s;animation-delay:-.875s;left:50%;top:5%}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.75s;animation-delay:-.75s;left:81.8198051534%;top:18.1801948466%}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.625s;animation-delay:-.625s;left:95%;top:50%}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.5s;animation-delay:-.5s;left:81.8198051534%;top:81.8198051534%}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.375s;animation-delay:-.375s;left:50.0000000005%;top:94.9999999966%}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-.25s;animation-delay:-.25s;left:18.1801949248%;top:81.8198046966%}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.125s;animation-delay:-.125s;left:5.0000051215%;top:49.9999750815%}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:0s;animation-delay:0s;left:18.1803700518%;top:18.179464974%}.la-ball-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;margin-left:-8px;margin-top:-8px;width:16px}.la-ball-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:24px;margin-left:-12px;margin-top:-12px;width:24px}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%], .la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-spin-clockwise-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-spin-clockwise-fade 1s linear infinite;animation:ball-spin-clockwise-fade 1s linear infinite;border-radius:100%;height:8px;left:50%;margin-left:-4px;margin-top:-4px;position:absolute;top:50%;width:8px}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.875s;animation-delay:-.875s;left:50%;top:5%}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.75s;animation-delay:-.75s;left:81.8198051534%;top:18.1801948466%}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.625s;animation-delay:-.625s;left:95%;top:50%}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.5s;animation-delay:-.5s;left:81.8198051534%;top:81.8198051534%}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.375s;animation-delay:-.375s;left:50.0000000005%;top:94.9999999966%}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-.25s;animation-delay:-.25s;left:18.1801949248%;top:81.8198046966%}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.125s;animation-delay:-.125s;left:5.0000051215%;top:49.9999750815%}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:0s;animation-delay:0s;left:18.1803700518%;top:18.179464974%}.la-ball-spin-clockwise-fade.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-spin-clockwise-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-spin-clockwise-fade.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-spin-clockwise-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;margin-left:-8px;margin-top:-8px;width:16px}.la-ball-spin-clockwise-fade.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-spin-clockwise-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:24px;margin-left:-12px;margin-top:-12px;width:24px}@-webkit-keyframes ball-spin-clockwise-fade{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.la-ball-spin-clockwise[_ngcontent-%COMP%], .la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-spin-clockwise[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-spin-clockwise.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin-clockwise[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-spin-clockwise 1s ease-in-out infinite;animation:ball-spin-clockwise 1s ease-in-out infinite;border-radius:100%;height:8px;left:50%;margin-left:-4px;margin-top:-4px;position:absolute;top:50%;width:8px}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.875s;animation-delay:-.875s;left:50%;top:5%}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.75s;animation-delay:-.75s;left:81.8198051534%;top:18.1801948466%}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.625s;animation-delay:-.625s;left:95%;top:50%}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.5s;animation-delay:-.5s;left:81.8198051534%;top:81.8198051534%}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.375s;animation-delay:-.375s;left:50.0000000005%;top:94.9999999966%}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-.25s;animation-delay:-.25s;left:18.1801949248%;top:81.8198046966%}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.125s;animation-delay:-.125s;left:5.0000051215%;top:49.9999750815%}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:0s;animation-delay:0s;left:18.1803700518%;top:18.179464974%}.la-ball-spin-clockwise.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-spin-clockwise.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-spin-clockwise.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-spin-clockwise.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;margin-left:-8px;margin-top:-8px;width:16px}.la-ball-spin-clockwise.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-spin-clockwise.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:24px;margin-left:-12px;margin-top:-12px;width:24px}@-webkit-keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.la-ball-spin-fade-rotating[_ngcontent-%COMP%], .la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-spin-fade-rotating[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-spin-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin-fade-rotating[_ngcontent-%COMP%]{-webkit-animation:ball-spin-fade-rotate 6s linear infinite;animation:ball-spin-fade-rotate 6s linear infinite;height:32px;width:32px}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-spin-fade 1s linear infinite;animation:ball-spin-fade 1s linear infinite;border-radius:100%;height:8px;left:50%;margin-left:-4px;margin-top:-4px;position:absolute;top:50%;width:8px}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-1.125s;animation-delay:-1.125s;left:50%;top:5%}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.25s;animation-delay:-1.25s;left:81.8198051534%;top:18.1801948466%}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1.375s;animation-delay:-1.375s;left:95%;top:50%}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s;left:81.8198051534%;top:81.8198051534%}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-1.625s;animation-delay:-1.625s;left:50.0000000005%;top:94.9999999966%}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-1.75s;animation-delay:-1.75s;left:18.1801949248%;top:81.8198046966%}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-1.875s;animation-delay:-1.875s;left:5.0000051215%;top:49.9999750815%}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-2s;animation-delay:-2s;left:18.1803700518%;top:18.179464974%}.la-ball-spin-fade-rotating.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-spin-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-spin-fade-rotating.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-spin-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;margin-left:-8px;margin-top:-8px;width:16px}.la-ball-spin-fade-rotating.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-spin-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:24px;margin-left:-12px;margin-top:-12px;width:24px}@-webkit-keyframes ball-spin-fade-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-fade-rotate{to{transform:rotate(1turn)}}.la-ball-spin-fade[_ngcontent-%COMP%], .la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-spin-fade[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-spin-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin-fade[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-spin-fade 1s linear infinite;animation:ball-spin-fade 1s linear infinite;border-radius:100%;height:8px;left:50%;margin-left:-4px;margin-top:-4px;position:absolute;top:50%;width:8px}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-1.125s;animation-delay:-1.125s;left:50%;top:5%}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.25s;animation-delay:-1.25s;left:81.8198051534%;top:18.1801948466%}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1.375s;animation-delay:-1.375s;left:95%;top:50%}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s;left:81.8198051534%;top:81.8198051534%}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-1.625s;animation-delay:-1.625s;left:50.0000000005%;top:94.9999999966%}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-1.75s;animation-delay:-1.75s;left:18.1801949248%;top:81.8198046966%}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-1.875s;animation-delay:-1.875s;left:5.0000051215%;top:49.9999750815%}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-2s;animation-delay:-2s;left:18.1803700518%;top:18.179464974%}.la-ball-spin-fade.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-spin-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-spin-fade.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-spin-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;margin-left:-8px;margin-top:-8px;width:16px}.la-ball-spin-fade.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-spin-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:24px;margin-left:-12px;margin-top:-12px;width:24px}@-webkit-keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}@keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}.la-ball-spin-rotate[_ngcontent-%COMP%], .la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-spin-rotate[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-spin-rotate.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin-rotate[_ngcontent-%COMP%]{-webkit-animation:ball-spin-rotate 2s linear infinite;animation:ball-spin-rotate 2s linear infinite;height:32px;width:32px}.la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-spin-bounce 2s ease-in-out infinite;animation:ball-spin-bounce 2s ease-in-out infinite;border-radius:100%;height:60%;position:absolute;top:0;width:60%}.la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation-delay:-1s;animation-delay:-1s;bottom:0;top:auto}.la-ball-spin-rotate.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-spin-rotate.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-spin-rotate.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}@-webkit-keyframes ball-spin-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes ball-spin-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes ball-spin-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}.la-ball-spin[_ngcontent-%COMP%], .la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-spin[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-spin 1s ease-in-out infinite;animation:ball-spin 1s ease-in-out infinite;border-radius:100%;height:8px;left:50%;margin-left:-4px;margin-top:-4px;position:absolute;top:50%;width:8px}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-1.125s;animation-delay:-1.125s;left:50%;top:5%}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.25s;animation-delay:-1.25s;left:81.8198051534%;top:18.1801948466%}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1.375s;animation-delay:-1.375s;left:95%;top:50%}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s;left:81.8198051534%;top:81.8198051534%}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-1.625s;animation-delay:-1.625s;left:50.0000000005%;top:94.9999999966%}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-1.75s;animation-delay:-1.75s;left:18.1801949248%;top:81.8198046966%}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-1.875s;animation-delay:-1.875s;left:5.0000051215%;top:49.9999750815%}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-2s;animation-delay:-2s;left:18.1803700518%;top:18.179464974%}.la-ball-spin.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-spin.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;margin-left:-8px;margin-top:-8px;width:16px}.la-ball-spin.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:24px;margin-left:-12px;margin-top:-12px;width:24px}@-webkit-keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.la-ball-square-clockwise-spin[_ngcontent-%COMP%], .la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-square-clockwise-spin[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-square-clockwise-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-square-clockwise-spin[_ngcontent-%COMP%]{height:26px;width:26px}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-square-clockwise-spin 1s ease-in-out infinite;animation:ball-square-clockwise-spin 1s ease-in-out infinite;border-radius:100%;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.875s;animation-delay:-.875s;left:0;top:0}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.75s;animation-delay:-.75s;left:50%;top:0}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.625s;animation-delay:-.625s;left:100%;top:0}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.5s;animation-delay:-.5s;left:100%;top:50%}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.375s;animation-delay:-.375s;left:100%;top:100%}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-.25s;animation-delay:-.25s;left:50%;top:100%}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.125s;animation-delay:-.125s;left:0;top:100%}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:0s;animation-delay:0s;left:0;top:50%}.la-ball-square-clockwise-spin.la-sm[_ngcontent-%COMP%]{height:12px;width:12px}.la-ball-square-clockwise-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:6px;margin-left:-3px;margin-top:-3px;width:6px}.la-ball-square-clockwise-spin.la-2x[_ngcontent-%COMP%]{height:52px;width:52px}.la-ball-square-clockwise-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:24px;margin-left:-12px;margin-top:-12px;width:24px}.la-ball-square-clockwise-spin.la-3x[_ngcontent-%COMP%]{height:78px;width:78px}.la-ball-square-clockwise-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:36px;margin-left:-18px;margin-top:-18px;width:36px}@-webkit-keyframes ball-square-clockwise-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}@keyframes ball-square-clockwise-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}.la-ball-square-spin[_ngcontent-%COMP%], .la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-square-spin[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-square-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-square-spin[_ngcontent-%COMP%]{height:26px;width:26px}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:ball-square-spin 1s ease-in-out infinite;animation:ball-square-spin 1s ease-in-out infinite;border-radius:100%;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-1.125s;animation-delay:-1.125s;left:0;top:0}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.25s;animation-delay:-1.25s;left:50%;top:0}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1.375s;animation-delay:-1.375s;left:100%;top:0}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s;left:100%;top:50%}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-1.625s;animation-delay:-1.625s;left:100%;top:100%}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-1.75s;animation-delay:-1.75s;left:50%;top:100%}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-1.875s;animation-delay:-1.875s;left:0;top:100%}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-2s;animation-delay:-2s;left:0;top:50%}.la-ball-square-spin.la-sm[_ngcontent-%COMP%]{height:12px;width:12px}.la-ball-square-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:6px;margin-left:-3px;margin-top:-3px;width:6px}.la-ball-square-spin.la-2x[_ngcontent-%COMP%]{height:52px;width:52px}.la-ball-square-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:24px;margin-left:-12px;margin-top:-12px;width:24px}.la-ball-square-spin.la-3x[_ngcontent-%COMP%]{height:78px;width:78px}.la-ball-square-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:36px;margin-left:-18px;margin-top:-18px;width:36px}@-webkit-keyframes ball-square-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}@keyframes ball-square-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}.la-ball-triangle-path[_ngcontent-%COMP%], .la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-triangle-path[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-triangle-path.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-triangle-path[_ngcontent-%COMP%]{height:32px;width:32px}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:100%;height:10px;left:0;position:absolute;top:0;width:10px}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-triangle-path-ball-one 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-one 2s ease-in-out 0s infinite}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation:ball-triangle-path-ball-two 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-two 2s ease-in-out 0s infinite}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation:ball-triangle-path-ball-tree 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-tree 2s ease-in-out 0s infinite}.la-ball-triangle-path.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-triangle-path.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;width:4px}.la-ball-triangle-path.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-triangle-path.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;width:20px}.la-ball-triangle-path.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-triangle-path.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;width:30px}@-webkit-keyframes ball-triangle-path-ball-one{0%{transform:translateY(220%)}17%{opacity:.25}33%{opacity:1;transform:translate(110%)}50%{opacity:.25}66%{opacity:1;transform:translate(220%,220%)}83%{opacity:.25}to{opacity:1;transform:translateY(220%)}}@keyframes ball-triangle-path-ball-one{0%{transform:translateY(220%)}17%{opacity:.25}33%{opacity:1;transform:translate(110%)}50%{opacity:.25}66%{opacity:1;transform:translate(220%,220%)}83%{opacity:.25}to{opacity:1;transform:translateY(220%)}}@-webkit-keyframes ball-triangle-path-ball-two{0%{transform:translate(110%)}17%{opacity:.25}33%{opacity:1;transform:translate(220%,220%)}50%{opacity:.25}66%{opacity:1;transform:translateY(220%)}83%{opacity:.25}to{opacity:1;transform:translate(110%)}}@keyframes ball-triangle-path-ball-two{0%{transform:translate(110%)}17%{opacity:.25}33%{opacity:1;transform:translate(220%,220%)}50%{opacity:.25}66%{opacity:1;transform:translateY(220%)}83%{opacity:.25}to{opacity:1;transform:translate(110%)}}@-webkit-keyframes ball-triangle-path-ball-tree{0%{transform:translate(220%,220%)}17%{opacity:.25}33%{opacity:1;transform:translateY(220%)}50%{opacity:.25}66%{opacity:1;transform:translate(110%)}83%{opacity:.25}to{opacity:1;transform:translate(220%,220%)}}@keyframes ball-triangle-path-ball-tree{0%{transform:translate(220%,220%)}17%{opacity:.25}33%{opacity:1;transform:translateY(220%)}50%{opacity:.25}66%{opacity:1;transform:translate(110%)}83%{opacity:.25}to{opacity:1;transform:translate(220%,220%)}}.la-ball-zig-zag-deflect[_ngcontent-%COMP%], .la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-zig-zag-deflect[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-zig-zag-deflect.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-zig-zag-deflect[_ngcontent-%COMP%]{height:32px;position:relative;width:32px}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:100%;height:10px;left:50%;margin-left:-5px;margin-top:-5px;position:absolute;top:50%;width:10px}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-zig-deflect 1.5s linear 0s infinite;animation:ball-zig-deflect 1.5s linear 0s infinite}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation:ball-zag-deflect 1.5s linear 0s infinite;animation:ball-zag-deflect 1.5s linear 0s infinite}.la-ball-zig-zag-deflect.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-zig-zag-deflect.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-zig-zag-deflect.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-zig-zag-deflect.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;margin-left:-10px;margin-top:-10px;width:20px}.la-ball-zig-zag-deflect.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-zig-zag-deflect.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;margin-left:-15px;margin-top:-15px;width:30px}@-webkit-keyframes ball-zig-deflect{17%{transform:translate(-80%,-160%)}34%{transform:translate(80%,-160%)}50%{transform:translate(0)}67%{transform:translate(80%,-160%)}84%{transform:translate(-80%,-160%)}to{transform:translate(0)}}@keyframes ball-zig-deflect{17%{transform:translate(-80%,-160%)}34%{transform:translate(80%,-160%)}50%{transform:translate(0)}67%{transform:translate(80%,-160%)}84%{transform:translate(-80%,-160%)}to{transform:translate(0)}}@-webkit-keyframes ball-zag-deflect{17%{transform:translate(80%,160%)}34%{transform:translate(-80%,160%)}50%{transform:translate(0)}67%{transform:translate(-80%,160%)}84%{transform:translate(80%,160%)}to{transform:translate(0)}}@keyframes ball-zag-deflect{17%{transform:translate(80%,160%)}34%{transform:translate(-80%,160%)}50%{transform:translate(0)}67%{transform:translate(-80%,160%)}84%{transform:translate(80%,160%)}to{transform:translate(0)}}.la-ball-zig-zag[_ngcontent-%COMP%], .la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-ball-zig-zag[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-ball-zig-zag.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-zig-zag[_ngcontent-%COMP%]{height:32px;position:relative;width:32px}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:100%;height:10px;left:50%;margin-left:-5px;margin-top:-5px;position:absolute;top:50%;width:10px}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:ball-zig-effect .7s linear 0s infinite;animation:ball-zig-effect .7s linear 0s infinite}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation:ball-zag-effect .7s linear 0s infinite;animation:ball-zag-effect .7s linear 0s infinite}.la-ball-zig-zag.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-ball-zig-zag.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-zig-zag.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-ball-zig-zag.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;margin-left:-10px;margin-top:-10px;width:20px}.la-ball-zig-zag.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-ball-zig-zag.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;margin-left:-15px;margin-top:-15px;width:30px}@-webkit-keyframes ball-zig-effect{0%{transform:translate(0)}33%{transform:translate(-75%,-150%)}66%{transform:translate(75%,-150%)}to{transform:translate(0)}}@keyframes ball-zig-effect{0%{transform:translate(0)}33%{transform:translate(-75%,-150%)}66%{transform:translate(75%,-150%)}to{transform:translate(0)}}@-webkit-keyframes ball-zag-effect{0%{transform:translate(0)}33%{transform:translate(75%,150%)}66%{transform:translate(-75%,150%)}to{transform:translate(0)}}@keyframes ball-zag-effect{0%{transform:translate(0)}33%{transform:translate(75%,150%)}66%{transform:translate(-75%,150%)}to{transform:translate(0)}}.la-cog[_ngcontent-%COMP%], .la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-cog[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-cog.la-dark[_ngcontent-%COMP%]{color:#333}.la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-cog[_ngcontent-%COMP%]{height:31px;width:31px}.la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:cog-rotate 4s linear infinite;animation:cog-rotate 4s linear infinite;background-color:transparent;border-radius:100%;border-style:dashed;border-width:2px;height:100%;width:100%}.la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border:2px solid;border-radius:100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.la-cog.la-sm[_ngcontent-%COMP%]{height:15px;width:15px}.la-cog.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-cog.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border-width:1px}.la-cog.la-2x[_ngcontent-%COMP%]{height:61px;width:61px}.la-cog.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-cog.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border-width:4px}.la-cog.la-3x[_ngcontent-%COMP%]{height:91px;width:91px}.la-cog.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-cog.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border-width:6px}@-webkit-keyframes cog-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes cog-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.la-cube-transition[_ngcontent-%COMP%], .la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-cube-transition[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-cube-transition.la-dark[_ngcontent-%COMP%]{color:#333}.la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-cube-transition[_ngcontent-%COMP%]{height:32px;width:32px}.la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:cube-transition 1.6s ease-in-out 0s infinite;animation:cube-transition 1.6s ease-in-out 0s infinite;border-radius:0;height:14px;left:0;margin-left:-7px;margin-top:-7px;position:absolute;top:0;width:14px}.la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-cube-transition.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-cube-transition.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:6px;margin-left:-3px;margin-top:-3px;width:6px}.la-cube-transition.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-cube-transition.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:28px;margin-left:-14px;margin-top:-14px;width:28px}.la-cube-transition.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-cube-transition.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:42px;margin-left:-21px;margin-top:-21px;width:42px}@-webkit-keyframes cube-transition{25%{left:100%;top:0;transform:scale(.5) rotate(-90deg)}50%{left:100%;top:100%;transform:scale(1) rotate(-180deg)}75%{left:0;top:100%;transform:scale(.5) rotate(-270deg)}to{left:0;top:0;transform:scale(1) rotate(-1turn)}}@keyframes cube-transition{25%{left:100%;top:0;transform:scale(.5) rotate(-90deg)}50%{left:100%;top:100%;transform:scale(1) rotate(-180deg)}75%{left:0;top:100%;transform:scale(.5) rotate(-270deg)}to{left:0;top:0;transform:scale(1) rotate(-1turn)}}.la-fire[_ngcontent-%COMP%], .la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-fire[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-fire.la-dark[_ngcontent-%COMP%]{color:#333}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-fire[_ngcontent-%COMP%]{height:32px;width:32px}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:fire-diamonds 1.5s linear infinite;animation:fire-diamonds 1.5s linear infinite;border-radius:0;border-radius:2px;bottom:0;height:12px;left:50%;position:absolute;transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);width:12px}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.85s;animation-delay:-.85s}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.85s;animation-delay:-1.85s}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-2.85s;animation-delay:-2.85s}.la-fire.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-fire.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:6px;width:6px}.la-fire.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-fire.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:24px;width:24px}.la-fire.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-fire.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:36px;width:36px}@-webkit-keyframes fire-diamonds{0%{transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}to{transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}@keyframes fire-diamonds{0%{transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}to{transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}.la-line-scale-party[_ngcontent-%COMP%], .la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-line-scale-party[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-line-scale-party.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-scale-party[_ngcontent-%COMP%]{height:32px;width:40px}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation-iteration-count:infinite;-webkit-animation-name:line-scale-party;animation-iteration-count:infinite;animation-name:line-scale-party;border-radius:0;height:32px;margin:0 2px;width:4px}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.23s;-webkit-animation-duration:.43s;animation-delay:-.23s;animation-duration:.43s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.32s;-webkit-animation-duration:.62s;animation-delay:-.32s;animation-duration:.62s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.44s;-webkit-animation-duration:.43s;animation-delay:-.44s;animation-duration:.43s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.31s;-webkit-animation-duration:.8s;animation-delay:-.31s;animation-duration:.8s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.24s;-webkit-animation-duration:.74s;animation-delay:-.24s;animation-duration:.74s}.la-line-scale-party.la-sm[_ngcontent-%COMP%]{height:16px;width:20px}.la-line-scale-party.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;margin:0 1px;width:2px}.la-line-scale-party.la-2x[_ngcontent-%COMP%]{height:64px;width:80px}.la-line-scale-party.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:64px;margin:0 4px;width:8px}.la-line-scale-party.la-3x[_ngcontent-%COMP%]{height:96px;width:120px}.la-line-scale-party.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:96px;margin:0 6px;width:12px}@-webkit-keyframes line-scale-party{0%{transform:scaleY(1)}50%{transform:scaleY(.3)}to{transform:scaleY(1)}}@keyframes line-scale-party{0%{transform:scaleY(1)}50%{transform:scaleY(.3)}to{transform:scaleY(1)}}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%], .la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-line-scale-pulse-out-rapid.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%]{height:32px;width:40px}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:line-scale-pulse-out-rapid .9s cubic-bezier(.11,.49,.38,.78) infinite;animation:line-scale-pulse-out-rapid .9s cubic-bezier(.11,.49,.38,.78) infinite;border-radius:0;height:32px;margin:0 2px;width:4px}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-line-scale-pulse-out-rapid.la-sm[_ngcontent-%COMP%]{height:16px;width:20px}.la-line-scale-pulse-out-rapid.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;margin:0 1px;width:2px}.la-line-scale-pulse-out-rapid.la-2x[_ngcontent-%COMP%]{height:64px;width:80px}.la-line-scale-pulse-out-rapid.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:64px;margin:0 4px;width:8px}.la-line-scale-pulse-out-rapid.la-3x[_ngcontent-%COMP%]{height:96px;width:120px}.la-line-scale-pulse-out-rapid.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:96px;margin:0 6px;width:12px}@-webkit-keyframes line-scale-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.3)}90%{transform:scaley(1)}}@keyframes line-scale-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.3)}90%{transform:scaley(1)}}.la-line-scale-pulse-out[_ngcontent-%COMP%], .la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-line-scale-pulse-out[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-line-scale-pulse-out.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-scale-pulse-out[_ngcontent-%COMP%]{height:32px;width:40px}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:line-scale-pulse-out .9s cubic-bezier(.85,.25,.37,.85) infinite;animation:line-scale-pulse-out .9s cubic-bezier(.85,.25,.37,.85) infinite;border-radius:0;height:32px;margin:0 2px;width:4px}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-scale-pulse-out.la-sm[_ngcontent-%COMP%]{height:16px;width:20px}.la-line-scale-pulse-out.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;margin:0 1px;width:2px}.la-line-scale-pulse-out.la-2x[_ngcontent-%COMP%]{height:64px;width:80px}.la-line-scale-pulse-out.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:64px;margin:0 4px;width:8px}.la-line-scale-pulse-out.la-3x[_ngcontent-%COMP%]{height:96px;width:120px}.la-line-scale-pulse-out.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:96px;margin:0 6px;width:12px}@-webkit-keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.3)}to{transform:scaley(1)}}@keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.3)}to{transform:scaley(1)}}.la-line-scale[_ngcontent-%COMP%], .la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-line-scale[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-line-scale.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-scale[_ngcontent-%COMP%]{height:32px;width:40px}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:line-scale 1.2s ease infinite;animation:line-scale 1.2s ease infinite;border-radius:0;height:32px;margin:0 2px;width:4px}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-line-scale.la-sm[_ngcontent-%COMP%]{height:16px;width:20px}.la-line-scale.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;margin:0 1px;width:2px}.la-line-scale.la-2x[_ngcontent-%COMP%]{height:64px;width:80px}.la-line-scale.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:64px;margin:0 4px;width:8px}.la-line-scale.la-3x[_ngcontent-%COMP%]{height:96px;width:120px}.la-line-scale.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:96px;margin:0 6px;width:12px}@-webkit-keyframes line-scale{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}@keyframes line-scale{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%], .la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-line-spin-clockwise-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{-webkit-animation:line-spin-clockwise-fade-rotating-rotate 6s linear infinite;animation:line-spin-clockwise-fade-rotating-rotate 6s linear infinite;height:32px;width:32px}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:line-spin-clockwise-fade-rotating 1s ease-in-out infinite;animation:line-spin-clockwise-fade-rotating 1s ease-in-out infinite;border-radius:0;height:10px;margin:-5px 2px 2px -1px;position:absolute;width:2px}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.875s;animation-delay:-.875s;left:50%;top:15%;transform:rotate(0deg)}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.75s;animation-delay:-.75s;left:74.7487373415%;top:25.2512626585%;transform:rotate(45deg)}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.625s;animation-delay:-.625s;left:85%;top:50%;transform:rotate(90deg)}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.5s;animation-delay:-.5s;left:74.7487373415%;top:74.7487373415%;transform:rotate(135deg)}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.375s;animation-delay:-.375s;left:50.0000000004%;top:84.9999999974%;transform:rotate(180deg)}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-.25s;animation-delay:-.25s;left:25.2512627193%;top:74.7487369862%;transform:rotate(225deg)}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.125s;animation-delay:-.125s;left:15.0000039834%;top:49.9999806189%;transform:rotate(270deg)}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:0s;animation-delay:0s;left:25.2513989292%;top:25.2506949798%;transform:rotate(315deg)}.la-line-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-line-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:0;margin-top:-2px;width:1px}.la-line-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-line-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;margin-left:-2px;margin-top:-10px;width:4px}.la-line-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-line-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;margin-left:-3px;margin-top:-15px;width:6px}@-webkit-keyframes line-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@keyframes line-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@-webkit-keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}to{opacity:1}}.la-line-spin-clockwise-fade[_ngcontent-%COMP%], .la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-line-spin-clockwise-fade[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-line-spin-clockwise-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-spin-clockwise-fade[_ngcontent-%COMP%]{height:32px;width:32px}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:line-spin-clockwise-fade 1s ease-in-out infinite;animation:line-spin-clockwise-fade 1s ease-in-out infinite;border-radius:0;height:10px;margin:-5px 2px 2px -1px;position:absolute;width:2px}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.875s;animation-delay:-.875s;left:50%;top:15%;transform:rotate(0deg)}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.75s;animation-delay:-.75s;left:74.7487373415%;top:25.2512626585%;transform:rotate(45deg)}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.625s;animation-delay:-.625s;left:85%;top:50%;transform:rotate(90deg)}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.5s;animation-delay:-.5s;left:74.7487373415%;top:74.7487373415%;transform:rotate(135deg)}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.375s;animation-delay:-.375s;left:50.0000000004%;top:84.9999999974%;transform:rotate(180deg)}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-.25s;animation-delay:-.25s;left:25.2512627193%;top:74.7487369862%;transform:rotate(225deg)}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.125s;animation-delay:-.125s;left:15.0000039834%;top:49.9999806189%;transform:rotate(270deg)}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:0s;animation-delay:0s;left:25.2513989292%;top:25.2506949798%;transform:rotate(315deg)}.la-line-spin-clockwise-fade.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-line-spin-clockwise-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:0;margin-top:-2px;width:1px}.la-line-spin-clockwise-fade.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-line-spin-clockwise-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;margin-left:-2px;margin-top:-10px;width:4px}.la-line-spin-clockwise-fade.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-line-spin-clockwise-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;margin-left:-3px;margin-top:-15px;width:6px}@-webkit-keyframes line-spin-clockwise-fade{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-clockwise-fade{50%{opacity:.2}to{opacity:1}}.la-line-spin-fade-rotating[_ngcontent-%COMP%], .la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-line-spin-fade-rotating[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-line-spin-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-spin-fade-rotating[_ngcontent-%COMP%]{-webkit-animation:ball-spin-fade-rotating-rotate 6s linear infinite;animation:ball-spin-fade-rotating-rotate 6s linear infinite;height:32px;width:32px}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:line-spin-fade-rotating 1s ease-in-out infinite;animation:line-spin-fade-rotating 1s ease-in-out infinite;border-radius:0;height:10px;margin:-5px 2px 2px -1px;position:absolute;width:2px}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-1.125s;animation-delay:-1.125s;left:50%;top:15%;transform:rotate(0deg)}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.25s;animation-delay:-1.25s;left:74.7487373415%;top:25.2512626585%;transform:rotate(45deg)}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1.375s;animation-delay:-1.375s;left:85%;top:50%;transform:rotate(90deg)}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s;left:74.7487373415%;top:74.7487373415%;transform:rotate(135deg)}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-1.625s;animation-delay:-1.625s;left:50.0000000004%;top:84.9999999974%;transform:rotate(180deg)}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-1.75s;animation-delay:-1.75s;left:25.2512627193%;top:74.7487369862%;transform:rotate(225deg)}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-1.875s;animation-delay:-1.875s;left:15.0000039834%;top:49.9999806189%;transform:rotate(270deg)}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-2s;animation-delay:-2s;left:25.2513989292%;top:25.2506949798%;transform:rotate(315deg)}.la-line-spin-fade-rotating.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-line-spin-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:0;margin-top:-2px;width:1px}.la-line-spin-fade-rotating.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-line-spin-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;margin-left:-2px;margin-top:-10px;width:4px}.la-line-spin-fade-rotating.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-line-spin-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;margin-left:-3px;margin-top:-15px;width:6px}@-webkit-keyframes ball-spin-fade-rotating-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-fade-rotating-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes line-spin-fade-rotating{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-fade-rotating{50%{opacity:.2}to{opacity:1}}.la-line-spin-fade[_ngcontent-%COMP%], .la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-line-spin-fade[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-line-spin-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-spin-fade[_ngcontent-%COMP%]{height:32px;width:32px}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:line-spin-fade 1s ease-in-out infinite;animation:line-spin-fade 1s ease-in-out infinite;border-radius:0;height:10px;margin:-5px 2px 2px -1px;position:absolute;width:2px}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-1.125s;animation-delay:-1.125s;left:50%;top:15%;transform:rotate(0deg)}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.25s;animation-delay:-1.25s;left:74.7487373415%;top:25.2512626585%;transform:rotate(45deg)}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1.375s;animation-delay:-1.375s;left:85%;top:50%;transform:rotate(90deg)}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s;left:74.7487373415%;top:74.7487373415%;transform:rotate(135deg)}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-1.625s;animation-delay:-1.625s;left:50.0000000004%;top:84.9999999974%;transform:rotate(180deg)}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-1.75s;animation-delay:-1.75s;left:25.2512627193%;top:74.7487369862%;transform:rotate(225deg)}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-1.875s;animation-delay:-1.875s;left:15.0000039834%;top:49.9999806189%;transform:rotate(270deg)}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-2s;animation-delay:-2s;left:25.2513989292%;top:25.2506949798%;transform:rotate(315deg)}.la-line-spin-fade.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-line-spin-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:4px;margin-left:0;margin-top:-2px;width:1px}.la-line-spin-fade.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-line-spin-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:20px;margin-left:-2px;margin-top:-10px;width:4px}.la-line-spin-fade.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-line-spin-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;margin-left:-3px;margin-top:-15px;width:6px}@-webkit-keyframes line-spin-fade{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-fade{50%{opacity:.2}to{opacity:1}}.la-pacman[_ngcontent-%COMP%], .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-pacman[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-pacman.la-dark[_ngcontent-%COMP%]{color:#333}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-pacman[_ngcontent-%COMP%]{height:32px;width:32px}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation:pacman-rotate-half-up .5s 0s infinite;animation:pacman-rotate-half-up .5s 0s infinite;background:transparent;border-radius:100%;border-right:solid transparent;border-style:solid;border-width:16px;height:0;position:absolute;width:0}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-name:pacman-rotate-half-down;animation-name:pacman-rotate-half-down;top:0}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation:pacman-balls 2s linear 0s infinite;animation:pacman-balls 2s linear 0s infinite;border-radius:100%;height:8px;left:200%;opacity:0;position:absolute;top:50%;width:8px}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1.44s;animation-delay:-1.44s}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.94s;animation-delay:-1.94s}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-2.44s;animation-delay:-2.44s}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-2.94s;animation-delay:-2.94s}.la-pacman.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-width:8px;position:absolute}.la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0}.la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){height:4px;width:4px}.la-pacman.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-width:32px;position:absolute}.la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0}.la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){height:16px;width:16px}.la-pacman.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-width:48px;position:absolute}.la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0}.la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){height:24px;width:24px}@-webkit-keyframes pacman-rotate-half-up{0%,to{transform:rotate(270deg)}50%{transform:rotate(1turn)}}@keyframes pacman-rotate-half-up{0%,to{transform:rotate(270deg)}50%{transform:rotate(1turn)}}@-webkit-keyframes pacman-rotate-half-down{0%,to{transform:rotate(90deg)}50%{transform:rotate(0deg)}}@keyframes pacman-rotate-half-down{0%,to{transform:rotate(90deg)}50%{transform:rotate(0deg)}}@-webkit-keyframes pacman-balls{0%{left:200%;opacity:0;transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}to{left:0;transform:translateY(-50%)}}@keyframes pacman-balls{0%{left:200%;opacity:0;transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}to{left:0;transform:translateY(-50%)}}.la-square-jelly-box[_ngcontent-%COMP%], .la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-square-jelly-box[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-square-jelly-box.la-dark[_ngcontent-%COMP%]{color:#333}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-square-jelly-box[_ngcontent-%COMP%]{height:32px;width:32px}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){left:0;position:absolute;width:100%}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:square-jelly-box-animate .6s linear -.1s infinite;animation:square-jelly-box-animate .6s linear -.1s infinite;border-radius:10%;height:100%;top:-25%;z-index:1}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation:square-jelly-box-shadow .6s linear -.1s infinite;animation:square-jelly-box-shadow .6s linear -.1s infinite;background:#000;border-radius:50%;bottom:-9%;height:10%;opacity:.2}.la-square-jelly-box.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-square-jelly-box.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-square-jelly-box.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}@keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}.la-square-loader[_ngcontent-%COMP%], .la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-square-loader[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-square-loader.la-dark[_ngcontent-%COMP%]{color:#333}.la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-square-loader[_ngcontent-%COMP%]{height:32px;width:32px}.la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:square-loader 2s ease infinite;animation:square-loader 2s ease infinite;background:transparent;border-radius:0;border-width:2px;height:100%;width:100%}.la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{-webkit-animation:square-loader-inner 2s ease-in infinite;animation:square-loader-inner 2s ease-in infinite;background-color:currentColor;content:\"\";display:inline-block;vertical-align:top;width:100%}.la-square-loader.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-square-loader.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px}.la-square-loader.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-square-loader.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px}.la-square-loader.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}.la-square-loader.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}@-webkit-keyframes square-loader{0%{transform:rotate(0deg)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@keyframes square-loader{0%{transform:rotate(0deg)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@-webkit-keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}@keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}.la-square-spin[_ngcontent-%COMP%], .la-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-square-spin[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-square-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-square-spin[_ngcontent-%COMP%]{height:32px;width:32px}.la-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:square-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;animation:square-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;border-radius:0;height:100%;width:100%}.la-square-spin.la-sm[_ngcontent-%COMP%]{height:16px;width:16px}.la-square-spin.la-2x[_ngcontent-%COMP%]{height:64px;width:64px}.la-square-spin.la-3x[_ngcontent-%COMP%]{height:96px;width:96px}@-webkit-keyframes square-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}@keyframes square-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}.la-timer[_ngcontent-%COMP%], .la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-timer[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-timer.la-dark[_ngcontent-%COMP%]{color:#333}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-timer[_ngcontent-%COMP%], .la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:32px;width:32px}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:transparent;border-radius:100%;border-width:2px}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{-webkit-animation:timer-loader 1.25s linear infinite;-webkit-animation-delay:-625ms;animation:timer-loader 1.25s linear infinite;animation-delay:-625ms;background:currentColor;border-radius:2px;content:\"\";display:block;left:14px;margin-left:-1px;margin-top:-1px;position:absolute;top:14px;transform-origin:1px 1px 0;width:2px}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:12px}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{-webkit-animation-delay:-7.5s;-webkit-animation-duration:15s;animation-delay:-7.5s;animation-duration:15s;height:8px}.la-timer.la-sm[_ngcontent-%COMP%], .la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:16px;width:16px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{border-radius:1px;left:7px;margin-left:-.5px;margin-top:-.5px;top:7px;transform-origin:.5px .5px 0;width:1px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:6px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:4px}.la-timer.la-2x[_ngcontent-%COMP%], .la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:64px;width:64px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{border-radius:4px;left:28px;margin-left:-2px;margin-top:-2px;top:28px;transform-origin:2px 2px 0;width:4px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:24px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:16px}.la-timer.la-3x[_ngcontent-%COMP%], .la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:96px;width:96px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{border-radius:6px;left:42px;margin-left:-3px;margin-top:-3px;top:42px;transform-origin:3px 3px 0;width:6px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:36px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:24px}@-webkit-keyframes timer-loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes timer-loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.la-triangle-skew-spin[_ngcontent-%COMP%], .la-triangle-skew-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;position:relative}.la-triangle-skew-spin[_ngcontent-%COMP%]{color:#fff;display:block;font-size:0}.la-triangle-skew-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-triangle-skew-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-triangle-skew-spin[_ngcontent-%COMP%]{height:16px;width:32px}.la-triangle-skew-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{-webkit-animation:triangle-skew-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;animation:triangle-skew-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;background:transparent;border-color:currentcolor transparent;border-left:none;border-right:none;border-style:solid;border-width:0 16px 16px;height:0;width:0}.la-triangle-skew-spin.la-sm[_ngcontent-%COMP%]{height:8px;width:16px}.la-triangle-skew-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:0 8px 8px}.la-triangle-skew-spin.la-2x[_ngcontent-%COMP%]{height:32px;width:64px}.la-triangle-skew-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:0 32px 32px}.la-triangle-skew-spin.la-3x[_ngcontent-%COMP%]{height:48px;width:96px}.la-triangle-skew-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:0 48px 48px}@-webkit-keyframes triangle-skew-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}@keyframes triangle-skew-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}.overlay[_ngcontent-%COMP%]{height:100%;left:0;position:fixed;top:0;width:100%}.overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){left:50%;margin:0;position:absolute;top:50%;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{left:50%;position:absolute;top:60%;transform:translate(-50%,-60%)}"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 0
          })))])]
        },
        changeDetection: 0
      });

      NgxSpinnerComponent.ctorParameters = function () {
        return [{
          type: NgxSpinnerService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      NgxSpinnerComponent.propDecorators = {
        bdColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fullScreen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-spinner',
            template: "<div [@fadeIn]=\"'in'\" *ngIf=\"spinner.show\" class=\"overlay\" [style.background-color]=\"spinner.bdColor\"\n  [style.z-index]=\"spinner.zIndex\" [style.position]=\"spinner.fullScreen ? 'fixed' : 'absolute'\">\n  <div *ngIf=\"!template\" [class]=\"spinner.class\" [style.color]=\"spinner.color\">\n    <div *ngFor=\"let index of spinner.divArray\"></div>\n  </div>\n  <div *ngIf=\"template\" [innerHTML]=\"template | safeHtml\"></div>\n  <div class=\"loading-text\" [style.z-index]=\"spinner.zIndex\">\n    <ng-content></ng-content>\n  </div>\n</div>",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
              opacity: 1
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
              opacity: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
              opacity: 0
            })))])],
            styles: ["/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */.la-ball-8bits,.la-ball-8bits>div{box-sizing:border-box;position:relative}.la-ball-8bits{color:#fff;display:block;font-size:0}.la-ball-8bits.la-dark{color:#333}.la-ball-8bits>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-8bits{height:12px;width:12px}.la-ball-8bits>div{-webkit-animation:ball-8bits 1s ease 0s infinite;animation:ball-8bits 1s ease 0s infinite;border-radius:0;height:4px;left:50%;opacity:0;position:absolute;top:50%;transform:translate(100%,100%);width:4px}.la-ball-8bits>div:first-child{-webkit-animation-delay:-.9375s;animation-delay:-.9375s}.la-ball-8bits>div:nth-child(2){-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-8bits>div:nth-child(3){-webkit-animation-delay:-.8125s;animation-delay:-.8125s}.la-ball-8bits>div:nth-child(4){-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-8bits>div:nth-child(5){-webkit-animation-delay:-.6875s;animation-delay:-.6875s}.la-ball-8bits>div:nth-child(6){-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-8bits>div:nth-child(7){-webkit-animation-delay:-.5625s;animation-delay:-.5625s}.la-ball-8bits>div:nth-child(8){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-8bits>div:nth-child(9){-webkit-animation-delay:-.4375s;animation-delay:-.4375s}.la-ball-8bits>div:nth-child(10){-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-8bits>div:nth-child(11){-webkit-animation-delay:-.3125s;animation-delay:-.3125s}.la-ball-8bits>div:nth-child(12){-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-8bits>div:nth-child(13){-webkit-animation-delay:-.1875s;animation-delay:-.1875s}.la-ball-8bits>div:nth-child(14){-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-8bits>div:nth-child(15){-webkit-animation-delay:-.0625s;animation-delay:-.0625s}.la-ball-8bits>div:nth-child(16){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-8bits>div:first-child{left:0;top:-100%}.la-ball-8bits>div:nth-child(2){left:33.3333333333%;top:-100%}.la-ball-8bits>div:nth-child(3){left:66.6666666667%;top:-66.6666666667%}.la-ball-8bits>div:nth-child(4){left:100%;top:-33.3333333333%}.la-ball-8bits>div:nth-child(5){left:100%;top:0}.la-ball-8bits>div:nth-child(6){left:100%;top:33.3333333333%}.la-ball-8bits>div:nth-child(7){left:66.6666666667%;top:66.6666666667%}.la-ball-8bits>div:nth-child(8){left:33.3333333333%;top:100%}.la-ball-8bits>div:nth-child(9){left:0;top:100%}.la-ball-8bits>div:nth-child(10){left:-33.3333333333%;top:100%}.la-ball-8bits>div:nth-child(11){left:-66.6666666667%;top:66.6666666667%}.la-ball-8bits>div:nth-child(12){left:-100%;top:33.3333333333%}.la-ball-8bits>div:nth-child(13){left:-100%;top:0}.la-ball-8bits>div:nth-child(14){left:-100%;top:-33.3333333333%}.la-ball-8bits>div:nth-child(15){left:-66.6666666667%;top:-66.6666666667%}.la-ball-8bits>div:nth-child(16){left:-33.3333333333%;top:-100%}.la-ball-8bits.la-sm{height:6px;width:6px}.la-ball-8bits.la-sm>div{height:2px;width:2px}.la-ball-8bits.la-2x{height:24px;width:24px}.la-ball-8bits.la-2x>div{height:8px;width:8px}.la-ball-8bits.la-3x{height:36px;width:36px}.la-ball-8bits.la-3x>div{height:12px;width:12px}@-webkit-keyframes ball-8bits{0%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes ball-8bits{0%{opacity:1}50%{opacity:1}51%{opacity:0}}.la-ball-atom,.la-ball-atom>div{box-sizing:border-box;position:relative}.la-ball-atom{color:#fff;display:block;font-size:0}.la-ball-atom.la-dark{color:#333}.la-ball-atom>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-atom{height:32px;width:32px}.la-ball-atom>div:first-child{-webkit-animation:ball-atom-shrink 4.5s linear infinite;animation:ball-atom-shrink 4.5s linear infinite;background:#aaa;border-radius:100%;height:60%;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:60%;z-index:1}.la-ball-atom>div:not(:first-child){-webkit-animation:ball-atom-zindex 1.5s steps(2) 0s infinite;animation:ball-atom-zindex 1.5s steps(2) 0s infinite;background:none;height:100%;left:0;position:absolute;width:100%;z-index:0}.la-ball-atom>div:not(:first-child):before{-webkit-animation:ball-atom-position 1.5s ease 0s infinite,ball-atom-size 1.5s ease 0s infinite;animation:ball-atom-position 1.5s ease 0s infinite,ball-atom-size 1.5s ease 0s infinite;background:currentColor;border-radius:50%;content:\"\";height:10px;left:0;margin-left:-5px;margin-top:-5px;opacity:.75;position:absolute;top:0;width:10px}.la-ball-atom>div:nth-child(2){-webkit-animation-delay:.75s;animation-delay:.75s}.la-ball-atom>div:nth-child(2):before{-webkit-animation-delay:0s,-1.125s;animation-delay:0s,-1.125s}.la-ball-atom>div:nth-child(3){-webkit-animation-delay:-.25s;animation-delay:-.25s;transform:rotate(120deg)}.la-ball-atom>div:nth-child(3):before{-webkit-animation-delay:-1s,-.75s;animation-delay:-1s,-.75s}.la-ball-atom>div:nth-child(4){-webkit-animation-delay:.25s;animation-delay:.25s;transform:rotate(240deg)}.la-ball-atom>div:nth-child(4):before{-webkit-animation-delay:-.5s,-.125s;animation-delay:-.5s,-.125s}.la-ball-atom.la-sm{height:16px;width:16px}.la-ball-atom.la-sm>div:not(:first-child):before{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-atom.la-2x{height:64px;width:64px}.la-ball-atom.la-2x>div:not(:first-child):before{height:20px;margin-left:-10px;margin-top:-10px;width:20px}.la-ball-atom.la-3x{height:96px;width:96px}.la-ball-atom.la-3x>div:not(:first-child):before{height:30px;margin-left:-15px;margin-top:-15px;width:30px}@-webkit-keyframes ball-atom-position{50%{left:100%;top:100%}}@keyframes ball-atom-position{50%{left:100%;top:100%}}@-webkit-keyframes ball-atom-size{50%{transform:scale(.5)}}@keyframes ball-atom-size{50%{transform:scale(.5)}}@-webkit-keyframes ball-atom-zindex{50%{z-index:10}}@keyframes ball-atom-zindex{50%{z-index:10}}@-webkit-keyframes ball-atom-shrink{50%{transform:translate(-50%,-50%) scale(.8)}}@keyframes ball-atom-shrink{50%{transform:translate(-50%,-50%) scale(.8)}}.la-ball-beat,.la-ball-beat>div{box-sizing:border-box;position:relative}.la-ball-beat{color:#fff;display:block;font-size:0}.la-ball-beat.la-dark{color:#333}.la-ball-beat>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-beat{height:18px;width:54px}.la-ball-beat>div{-webkit-animation:ball-beat .7s linear -.15s infinite;animation:ball-beat .7s linear -.15s infinite;border-radius:100%;height:10px;margin:4px;width:10px}.la-ball-beat>div:nth-child(2n-1){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-beat.la-sm{height:8px;width:26px}.la-ball-beat.la-sm>div{height:4px;margin:2px;width:4px}.la-ball-beat.la-2x{height:36px;width:108px}.la-ball-beat.la-2x>div{height:20px;margin:8px;width:20px}.la-ball-beat.la-3x{height:54px;width:162px}.la-ball-beat.la-3x>div{height:30px;margin:12px;width:30px}@-webkit-keyframes ball-beat{50%{opacity:.2;transform:scale(.75)}to{opacity:1;transform:scale(1)}}@keyframes ball-beat{50%{opacity:.2;transform:scale(.75)}to{opacity:1;transform:scale(1)}}.la-ball-circus,.la-ball-circus>div{box-sizing:border-box;position:relative}.la-ball-circus{color:#fff;display:block;font-size:0}.la-ball-circus.la-dark{color:#333}.la-ball-circus>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-circus{height:16px;width:16px}.la-ball-circus>div{-webkit-animation:ball-circus-position 2.5s cubic-bezier(.25,0,.75,1) infinite,ball-circus-size 2.5s cubic-bezier(.25,0,.75,1) infinite;animation:ball-circus-position 2.5s cubic-bezier(.25,0,.75,1) infinite,ball-circus-size 2.5s cubic-bezier(.25,0,.75,1) infinite;border-radius:100%;display:block;height:16px;height:100%;left:-100%;opacity:.5;position:absolute;top:0;width:16px;width:100%}.la-ball-circus>div:first-child{-webkit-animation-delay:0s,-.5s;animation-delay:0s,-.5s}.la-ball-circus>div:nth-child(2){-webkit-animation-delay:-.5s,-1s;animation-delay:-.5s,-1s}.la-ball-circus>div:nth-child(3){-webkit-animation-delay:-1s,-1.5s;animation-delay:-1s,-1.5s}.la-ball-circus>div:nth-child(4){-webkit-animation-delay:-1.5s,-2s;animation-delay:-1.5s,-2s}.la-ball-circus>div:nth-child(5){-webkit-animation-delay:-2s,-2.5s;animation-delay:-2s,-2.5s}.la-ball-circus.la-sm,.la-ball-circus.la-sm>div{height:8px;width:8px}.la-ball-circus.la-2x,.la-ball-circus.la-2x>div{height:32px;width:32px}.la-ball-circus.la-3x,.la-ball-circus.la-3x>div{height:48px;width:48px}@-webkit-keyframes ball-circus-position{50%{left:100%}}@keyframes ball-circus-position{50%{left:100%}}@-webkit-keyframes ball-circus-size{50%{transform:scale(.3)}}@keyframes ball-circus-size{50%{transform:scale(.3)}}.la-ball-climbing-dot,.la-ball-climbing-dot>div{box-sizing:border-box;position:relative}.la-ball-climbing-dot{color:#fff;display:block;font-size:0}.la-ball-climbing-dot.la-dark{color:#333}.la-ball-climbing-dot>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-climbing-dot{height:32px;width:42px}.la-ball-climbing-dot>div:first-child{-webkit-animation:ball-climbing-dot-jump .6s ease-in-out infinite;animation:ball-climbing-dot-jump .6s ease-in-out infinite;border-radius:100%;bottom:32%;height:14px;left:18%;position:absolute;transform-origin:center bottom;width:14px}.la-ball-climbing-dot>div:not(:first-child){-webkit-animation:ball-climbing-dot-steps 1.8s linear infinite;animation:ball-climbing-dot-steps 1.8s linear infinite;border-radius:0;height:2px;position:absolute;right:0;top:0;transform:translate(60%);width:14px}.la-ball-climbing-dot>div:not(:first-child):nth-child(2){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-climbing-dot>div:not(:first-child):nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}.la-ball-climbing-dot>div:not(:first-child):nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-climbing-dot.la-sm{height:16px;width:20px}.la-ball-climbing-dot.la-sm>div:first-child{height:6px;width:6px}.la-ball-climbing-dot.la-sm>div:not(:first-child){height:1px;width:6px}.la-ball-climbing-dot.la-2x{height:64px;width:84px}.la-ball-climbing-dot.la-2x>div:first-child{height:28px;width:28px}.la-ball-climbing-dot.la-2x>div:not(:first-child){height:4px;width:28px}.la-ball-climbing-dot.la-3x{height:96px;width:126px}.la-ball-climbing-dot.la-3x>div:first-child{height:42px;width:42px}.la-ball-climbing-dot.la-3x>div:not(:first-child){height:6px;width:42px}@-webkit-keyframes ball-climbing-dot-jump{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}to{transform:scaleY(.7)}}@keyframes ball-climbing-dot-jump{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}to{transform:scaleY(.7)}}@-webkit-keyframes ball-climbing-dot-steps{0%{opacity:0;right:0;top:0}50%{opacity:1}to{opacity:0;right:100%;top:100%}}@keyframes ball-climbing-dot-steps{0%{opacity:0;right:0;top:0}50%{opacity:1}to{opacity:0;right:100%;top:100%}}.la-ball-clip-rotate-multiple,.la-ball-clip-rotate-multiple>div{box-sizing:border-box;position:relative}.la-ball-clip-rotate-multiple{color:#fff;display:block;font-size:0}.la-ball-clip-rotate-multiple.la-dark{color:#333}.la-ball-clip-rotate-multiple>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-clip-rotate-multiple{height:32px;width:32px}.la-ball-clip-rotate-multiple>div{-webkit-animation:ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;animation:ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;background:transparent;border-radius:100%;border-style:solid;border-width:2px;left:50%;position:absolute;top:50%}.la-ball-clip-rotate-multiple>div:first-child{border-left-color:transparent;border-right-color:transparent;height:32px;position:absolute;width:32px}.la-ball-clip-rotate-multiple>div:last-child{-webkit-animation-direction:reverse;-webkit-animation-duration:.5s;animation-direction:reverse;animation-duration:.5s;border-bottom-color:transparent;border-top-color:transparent;height:16px;width:16px}.la-ball-clip-rotate-multiple.la-sm{height:16px;width:16px}.la-ball-clip-rotate-multiple.la-sm>div{border-width:1px}.la-ball-clip-rotate-multiple.la-sm>div:first-child{height:16px;width:16px}.la-ball-clip-rotate-multiple.la-sm>div:last-child{height:8px;width:8px}.la-ball-clip-rotate-multiple.la-2x{height:64px;width:64px}.la-ball-clip-rotate-multiple.la-2x>div{border-width:4px}.la-ball-clip-rotate-multiple.la-2x>div:first-child{height:64px;width:64px}.la-ball-clip-rotate-multiple.la-2x>div:last-child{height:32px;width:32px}.la-ball-clip-rotate-multiple.la-3x{height:96px;width:96px}.la-ball-clip-rotate-multiple.la-3x>div{border-width:6px}.la-ball-clip-rotate-multiple.la-3x>div:first-child{height:96px;width:96px}.la-ball-clip-rotate-multiple.la-3x>div:last-child{height:48px;width:48px}@-webkit-keyframes ball-clip-rotate-multiple-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ball-clip-rotate-multiple-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}.la-ball-clip-rotate-pulse,.la-ball-clip-rotate-pulse>div{box-sizing:border-box;position:relative}.la-ball-clip-rotate-pulse{color:#fff;display:block;font-size:0}.la-ball-clip-rotate-pulse.la-dark{color:#333}.la-ball-clip-rotate-pulse>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-clip-rotate-pulse{height:32px;width:32px}.la-ball-clip-rotate-pulse>div{border-radius:100%;left:50%;position:absolute;top:50%}.la-ball-clip-rotate-pulse>div:first-child{-webkit-animation:ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09,.57,.49,.9) infinite;animation:ball-clip-rotate-pulse-rotate 1s cubic-bezier(.09,.57,.49,.9) infinite;background:transparent;border-bottom-style:solid;border-bottom-width:2px;border-left:2px solid transparent;border-right:2px solid transparent;border-top-style:solid;border-top-width:2px;height:32px;position:absolute;width:32px}.la-ball-clip-rotate-pulse>div:last-child{-webkit-animation:ball-clip-rotate-pulse-scale 1s cubic-bezier(.09,.57,.49,.9) infinite;animation:ball-clip-rotate-pulse-scale 1s cubic-bezier(.09,.57,.49,.9) infinite;height:16px;width:16px}.la-ball-clip-rotate-pulse.la-sm{height:16px;width:16px}.la-ball-clip-rotate-pulse.la-sm>div:first-child{border-width:1px;height:16px;width:16px}.la-ball-clip-rotate-pulse.la-sm>div:last-child{height:8px;width:8px}.la-ball-clip-rotate-pulse.la-2x{height:64px;width:64px}.la-ball-clip-rotate-pulse.la-2x>div:first-child{border-width:4px;height:64px;width:64px}.la-ball-clip-rotate-pulse.la-2x>div:last-child{height:32px;width:32px}.la-ball-clip-rotate-pulse.la-3x{height:96px;width:96px}.la-ball-clip-rotate-pulse.la-3x>div:first-child{border-width:6px;height:96px;width:96px}.la-ball-clip-rotate-pulse.la-3x>div:last-child{height:48px;width:48px}@-webkit-keyframes ball-clip-rotate-pulse-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes ball-clip-rotate-pulse-rotate{0%{transform:translate(-50%,-50%) rotate(0deg)}50%{transform:translate(-50%,-50%) rotate(180deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@-webkit-keyframes ball-clip-rotate-pulse-scale{0%,to{opacity:1;transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;transform:translate(-50%,-50%) scale(.15)}}@keyframes ball-clip-rotate-pulse-scale{0%,to{opacity:1;transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;transform:translate(-50%,-50%) scale(.15)}}.la-ball-clip-rotate,.la-ball-clip-rotate>div{box-sizing:border-box;position:relative}.la-ball-clip-rotate{color:#fff;display:block;font-size:0}.la-ball-clip-rotate.la-dark{color:#333}.la-ball-clip-rotate>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-clip-rotate{height:32px;width:32px}.la-ball-clip-rotate>div{-webkit-animation:ball-clip-rotate .75s linear infinite;animation:ball-clip-rotate .75s linear infinite;background:transparent;border-bottom-color:transparent;border-radius:100%;border-width:2px;height:32px;width:32px}.la-ball-clip-rotate.la-sm{height:16px;width:16px}.la-ball-clip-rotate.la-sm>div{border-width:1px;height:16px;width:16px}.la-ball-clip-rotate.la-2x{height:64px;width:64px}.la-ball-clip-rotate.la-2x>div{border-width:4px;height:64px;width:64px}.la-ball-clip-rotate.la-3x{height:96px;width:96px}.la-ball-clip-rotate.la-3x>div{border-width:6px;height:96px;width:96px}@-webkit-keyframes ball-clip-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes ball-clip-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.la-ball-elastic-dots,.la-ball-elastic-dots>div{box-sizing:border-box;position:relative}.la-ball-elastic-dots{color:#fff;display:block}.la-ball-elastic-dots.la-dark{color:#333}.la-ball-elastic-dots>div{background-color:currentColor;border:0 solid;float:none}.la-ball-elastic-dots{font-size:0;height:10px;text-align:center;width:120px}.la-ball-elastic-dots>div{-webkit-animation:ball-elastic-dots-anim 1s infinite;animation:ball-elastic-dots-anim 1s infinite;border-radius:100%;display:inline-block;height:10px;white-space:nowrap;width:10px}.la-ball-elastic-dots.la-sm{height:4px;width:60px}.la-ball-elastic-dots.la-sm>div{height:4px;width:4px}.la-ball-elastic-dots.la-2x{height:20px;width:240px}.la-ball-elastic-dots.la-2x>div{height:20px;width:20px}.la-ball-elastic-dots.la-3x{height:30px;width:360px}.la-ball-elastic-dots.la-3x>div{height:30px;width:30px}@-webkit-keyframes ball-elastic-dots-anim{0%,to{margin:0;transform:scale(1)}50%{margin:0 5%;transform:scale(.65)}}@keyframes ball-elastic-dots-anim{0%,to{margin:0;transform:scale(1)}50%{margin:0 5%;transform:scale(.65)}}.la-ball-fall,.la-ball-fall>div{box-sizing:border-box;position:relative}.la-ball-fall{color:#fff;display:block;font-size:0}.la-ball-fall.la-dark{color:#333}.la-ball-fall>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-fall{height:18px;width:54px}.la-ball-fall>div{-webkit-animation:ball-fall 1s ease-in-out infinite;animation:ball-fall 1s ease-in-out infinite;border-radius:100%;height:10px;margin:4px;opacity:0;width:10px}.la-ball-fall>div:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall>div:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-fall.la-sm{height:8px;width:26px}.la-ball-fall.la-sm>div{height:4px;margin:2px;width:4px}.la-ball-fall.la-2x{height:36px;width:108px}.la-ball-fall.la-2x>div{height:20px;margin:8px;width:20px}.la-ball-fall.la-3x{height:54px;width:162px}.la-ball-fall.la-3x>div{height:30px;margin:12px;width:30px}@-webkit-keyframes ball-fall{0%{opacity:0;transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}90%{opacity:.5}to{opacity:0;transform:translateY(145%)}}@keyframes ball-fall{0%{opacity:0;transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}90%{opacity:.5}to{opacity:0;transform:translateY(145%)}}.la-ball-fussion,.la-ball-fussion>div{box-sizing:border-box;position:relative}.la-ball-fussion{color:#fff;display:block;font-size:0}.la-ball-fussion.la-dark{color:#333}.la-ball-fussion>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-fussion{height:8px;width:8px}.la-ball-fussion>div{-webkit-animation:ball-fussion-ball1 1s ease 0s infinite;animation:ball-fussion-ball1 1s ease 0s infinite;border-radius:100%;height:12px;position:absolute;transform:translate(-50%,-50%);width:12px}.la-ball-fussion>div:first-child{left:50%;top:0;z-index:1}.la-ball-fussion>div:nth-child(2){-webkit-animation-name:ball-fussion-ball2;animation-name:ball-fussion-ball2;left:100%;top:50%;z-index:2}.la-ball-fussion>div:nth-child(3){-webkit-animation-name:ball-fussion-ball3;animation-name:ball-fussion-ball3;left:50%;top:100%;z-index:1}.la-ball-fussion>div:nth-child(4){-webkit-animation-name:ball-fussion-ball4;animation-name:ball-fussion-ball4;left:0;top:50%;z-index:2}.la-ball-fussion.la-sm{height:4px;width:4px}.la-ball-fussion.la-sm>div{height:6px;width:6px}.la-ball-fussion.la-2x{height:16px;width:16px}.la-ball-fussion.la-2x>div,.la-ball-fussion.la-3x{height:24px;width:24px}.la-ball-fussion.la-3x>div{height:36px;width:36px}@-webkit-keyframes ball-fussion-ball1{0%{opacity:.35}50%{left:200%;opacity:1;top:-100%}to{left:100%;opacity:.35;top:50%;z-index:2}}@keyframes ball-fussion-ball1{0%{opacity:.35}50%{left:200%;opacity:1;top:-100%}to{left:100%;opacity:.35;top:50%;z-index:2}}@-webkit-keyframes ball-fussion-ball2{0%{opacity:.35}50%{left:200%;opacity:1;top:200%}to{left:50%;opacity:.35;top:100%;z-index:1}}@keyframes ball-fussion-ball2{0%{opacity:.35}50%{left:200%;opacity:1;top:200%}to{left:50%;opacity:.35;top:100%;z-index:1}}@-webkit-keyframes ball-fussion-ball3{0%{opacity:.35}50%{left:-100%;opacity:1;top:200%}to{left:0;opacity:.35;top:50%;z-index:2}}@keyframes ball-fussion-ball3{0%{opacity:.35}50%{left:-100%;opacity:1;top:200%}to{left:0;opacity:.35;top:50%;z-index:2}}@-webkit-keyframes ball-fussion-ball4{0%{opacity:.35}50%{left:-100%;opacity:1;top:-100%}to{left:50%;opacity:.35;top:0;z-index:1}}@keyframes ball-fussion-ball4{0%{opacity:.35}50%{left:-100%;opacity:1;top:-100%}to{left:50%;opacity:.35;top:0;z-index:1}}.la-ball-grid-beat,.la-ball-grid-beat>div{box-sizing:border-box;position:relative}.la-ball-grid-beat{color:#fff;display:block;font-size:0}.la-ball-grid-beat.la-dark{color:#333}.la-ball-grid-beat>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-grid-beat{height:36px;width:36px}.la-ball-grid-beat>div{-webkit-animation-iteration-count:infinite;-webkit-animation-name:ball-grid-beat;animation-iteration-count:infinite;animation-name:ball-grid-beat;border-radius:100%;height:8px;margin:2px;width:8px}.la-ball-grid-beat>div:first-child{-webkit-animation-delay:.03s;-webkit-animation-duration:.65s;animation-delay:.03s;animation-duration:.65s}.la-ball-grid-beat>div:nth-child(2){-webkit-animation-delay:.09s;-webkit-animation-duration:1.02s;animation-delay:.09s;animation-duration:1.02s}.la-ball-grid-beat>div:nth-child(3){-webkit-animation-delay:-.69s;-webkit-animation-duration:1.06s;animation-delay:-.69s;animation-duration:1.06s}.la-ball-grid-beat>div:nth-child(4){-webkit-animation-delay:-.41s;-webkit-animation-duration:1.5s;animation-delay:-.41s;animation-duration:1.5s}.la-ball-grid-beat>div:nth-child(5){-webkit-animation-delay:.04s;-webkit-animation-duration:1.6s;animation-delay:.04s;animation-duration:1.6s}.la-ball-grid-beat>div:nth-child(6){-webkit-animation-delay:.07s;-webkit-animation-duration:.84s;animation-delay:.07s;animation-duration:.84s}.la-ball-grid-beat>div:nth-child(7){-webkit-animation-delay:-.66s;-webkit-animation-duration:.68s;animation-delay:-.66s;animation-duration:.68s}.la-ball-grid-beat>div:nth-child(8){-webkit-animation-delay:-.76s;-webkit-animation-duration:.93s;animation-delay:-.76s;animation-duration:.93s}.la-ball-grid-beat>div:nth-child(9){-webkit-animation-delay:-.76s;-webkit-animation-duration:1.24s;animation-delay:-.76s;animation-duration:1.24s}.la-ball-grid-beat.la-sm{height:18px;width:18px}.la-ball-grid-beat.la-sm>div{height:4px;margin:1px;width:4px}.la-ball-grid-beat.la-2x{height:72px;width:72px}.la-ball-grid-beat.la-2x>div{height:16px;margin:4px;width:16px}.la-ball-grid-beat.la-3x{height:108px;width:108px}.la-ball-grid-beat.la-3x>div{height:24px;margin:6px;width:24px}@-webkit-keyframes ball-grid-beat{0%{opacity:1}50%{opacity:.35}to{opacity:1}}@keyframes ball-grid-beat{0%{opacity:1}50%{opacity:.35}to{opacity:1}}.la-ball-grid-pulse,.la-ball-grid-pulse>div{box-sizing:border-box;position:relative}.la-ball-grid-pulse{color:#fff;display:block;font-size:0}.la-ball-grid-pulse.la-dark{color:#333}.la-ball-grid-pulse>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-grid-pulse{height:36px;width:36px}.la-ball-grid-pulse>div{-webkit-animation-iteration-count:infinite;-webkit-animation-name:ball-grid-pulse;animation-iteration-count:infinite;animation-name:ball-grid-pulse;border-radius:100%;height:8px;margin:2px;width:8px}.la-ball-grid-pulse>div:first-child{-webkit-animation-delay:.03s;-webkit-animation-duration:.65s;animation-delay:.03s;animation-duration:.65s}.la-ball-grid-pulse>div:nth-child(2){-webkit-animation-delay:.09s;-webkit-animation-duration:1.02s;animation-delay:.09s;animation-duration:1.02s}.la-ball-grid-pulse>div:nth-child(3){-webkit-animation-delay:-.69s;-webkit-animation-duration:1.06s;animation-delay:-.69s;animation-duration:1.06s}.la-ball-grid-pulse>div:nth-child(4){-webkit-animation-delay:-.41s;-webkit-animation-duration:1.5s;animation-delay:-.41s;animation-duration:1.5s}.la-ball-grid-pulse>div:nth-child(5){-webkit-animation-delay:.04s;-webkit-animation-duration:1.6s;animation-delay:.04s;animation-duration:1.6s}.la-ball-grid-pulse>div:nth-child(6){-webkit-animation-delay:.07s;-webkit-animation-duration:.84s;animation-delay:.07s;animation-duration:.84s}.la-ball-grid-pulse>div:nth-child(7){-webkit-animation-delay:-.66s;-webkit-animation-duration:.68s;animation-delay:-.66s;animation-duration:.68s}.la-ball-grid-pulse>div:nth-child(8){-webkit-animation-delay:-.76s;-webkit-animation-duration:.93s;animation-delay:-.76s;animation-duration:.93s}.la-ball-grid-pulse>div:nth-child(9){-webkit-animation-delay:-.76s;-webkit-animation-duration:1.24s;animation-delay:-.76s;animation-duration:1.24s}.la-ball-grid-pulse.la-sm{height:18px;width:18px}.la-ball-grid-pulse.la-sm>div{height:4px;margin:1px;width:4px}.la-ball-grid-pulse.la-2x{height:72px;width:72px}.la-ball-grid-pulse.la-2x>div{height:16px;margin:4px;width:16px}.la-ball-grid-pulse.la-3x{height:108px;width:108px}.la-ball-grid-pulse.la-3x>div{height:24px;margin:6px;width:24px}@-webkit-keyframes ball-grid-pulse{0%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.45)}to{opacity:1;transform:scale(1)}}@keyframes ball-grid-pulse{0%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.45)}to{opacity:1;transform:scale(1)}}.la-ball-newton-cradle,.la-ball-newton-cradle>div{box-sizing:border-box;position:relative}.la-ball-newton-cradle{color:#fff;display:block;font-size:0}.la-ball-newton-cradle.la-dark{color:#333}.la-ball-newton-cradle>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-newton-cradle{height:10px;width:40px}.la-ball-newton-cradle>div{border-radius:100%;height:10px;width:10px}.la-ball-newton-cradle>div:first-child{-webkit-animation:ball-newton-cradle-left 1s ease-out 0s infinite;animation:ball-newton-cradle-left 1s ease-out 0s infinite;transform:translateX(0)}.la-ball-newton-cradle>div:last-child{-webkit-animation:ball-newton-cradle-right 1s ease-out 0s infinite;animation:ball-newton-cradle-right 1s ease-out 0s infinite;transform:translateX(0)}.la-ball-newton-cradle.la-sm{height:4px;width:20px}.la-ball-newton-cradle.la-sm>div{height:4px;width:4px}.la-ball-newton-cradle.la-2x{height:20px;width:80px}.la-ball-newton-cradle.la-2x>div{height:20px;width:20px}.la-ball-newton-cradle.la-3x{height:30px;width:120px}.la-ball-newton-cradle.la-3x>div{height:30px;width:30px}@-webkit-keyframes ball-newton-cradle-left{25%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:translateX(-100%)}50%{transform:translateX(0)}}@keyframes ball-newton-cradle-left{25%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:translateX(-100%)}50%{transform:translateX(0)}}@-webkit-keyframes ball-newton-cradle-right{50%{transform:translateX(0)}75%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:translateX(100%)}to{transform:translateX(0)}}@keyframes ball-newton-cradle-right{50%{transform:translateX(0)}75%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:translateX(100%)}to{transform:translateX(0)}}.la-ball-pulse-rise,.la-ball-pulse-rise>div{box-sizing:border-box;position:relative}.la-ball-pulse-rise{color:#fff;display:block;font-size:0}.la-ball-pulse-rise.la-dark{color:#333}.la-ball-pulse-rise>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-pulse-rise{height:14px;width:70px}.la-ball-pulse-rise>div{-webkit-animation:ball-pulse-rise-even 1s cubic-bezier(.15,.36,.9,.6) 0s infinite;animation:ball-pulse-rise-even 1s cubic-bezier(.15,.36,.9,.6) 0s infinite;border-radius:100%;height:10px;margin:2px;width:10px}.la-ball-pulse-rise>div:nth-child(2n-1){-webkit-animation-name:ball-pulse-rise-odd;animation-name:ball-pulse-rise-odd}.la-ball-pulse-rise.la-sm{height:6px;width:34px}.la-ball-pulse-rise.la-sm>div{height:4px;margin:1px;width:4px}.la-ball-pulse-rise.la-2x{height:28px;width:140px}.la-ball-pulse-rise.la-2x>div{height:20px;margin:4px;width:20px}.la-ball-pulse-rise.la-3x{height:42px;width:210px}.la-ball-pulse-rise.la-3x>div{height:30px;margin:6px;width:30px}@-webkit-keyframes ball-pulse-rise-even{0%{opacity:1;transform:scale(1.1)}25%{transform:translateY(-200%)}50%{opacity:.35;transform:scale(.3)}75%{transform:translateY(200%)}to{opacity:1;transform:translateY(0);transform:scale(1)}}@keyframes ball-pulse-rise-even{0%{opacity:1;transform:scale(1.1)}25%{transform:translateY(-200%)}50%{opacity:.35;transform:scale(.3)}75%{transform:translateY(200%)}to{opacity:1;transform:translateY(0);transform:scale(1)}}@-webkit-keyframes ball-pulse-rise-odd{0%{opacity:.35;transform:scale(.4)}25%{transform:translateY(200%)}50%{opacity:1;transform:scale(1.1)}75%{transform:translateY(-200%)}to{opacity:.35;transform:translateY(0);transform:scale(.75)}}@keyframes ball-pulse-rise-odd{0%{opacity:.35;transform:scale(.4)}25%{transform:translateY(200%)}50%{opacity:1;transform:scale(1.1)}75%{transform:translateY(-200%)}to{opacity:.35;transform:translateY(0);transform:scale(.75)}}.la-ball-pulse-sync,.la-ball-pulse-sync>div{box-sizing:border-box;position:relative}.la-ball-pulse-sync{color:#fff;display:block;font-size:0}.la-ball-pulse-sync.la-dark{color:#333}.la-ball-pulse-sync>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-pulse-sync{height:18px;width:54px}.la-ball-pulse-sync>div{-webkit-animation:ball-pulse-sync .6s ease-in-out infinite;animation:ball-pulse-sync .6s ease-in-out infinite;border-radius:100%;height:10px;margin:4px;width:10px}.la-ball-pulse-sync>div:first-child{-webkit-animation-delay:-.14s;animation-delay:-.14s}.la-ball-pulse-sync>div:nth-child(2){-webkit-animation-delay:-.07s;animation-delay:-.07s}.la-ball-pulse-sync>div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse-sync.la-sm{height:8px;width:26px}.la-ball-pulse-sync.la-sm>div{height:4px;margin:2px;width:4px}.la-ball-pulse-sync.la-2x{height:36px;width:108px}.la-ball-pulse-sync.la-2x>div{height:20px;margin:8px;width:20px}.la-ball-pulse-sync.la-3x{height:54px;width:162px}.la-ball-pulse-sync.la-3x>div{height:30px;margin:12px;width:30px}@-webkit-keyframes ball-pulse-sync{33%{transform:translateY(100%)}66%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes ball-pulse-sync{33%{transform:translateY(100%)}66%{transform:translateY(-100%)}to{transform:translateY(0)}}.la-ball-pulse,.la-ball-pulse>div{box-sizing:border-box;position:relative}.la-ball-pulse{color:#fff;display:block;font-size:0}.la-ball-pulse.la-dark{color:#333}.la-ball-pulse>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-pulse{height:18px;width:54px}.la-ball-pulse>div:first-child{-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-pulse>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-pulse>div:nth-child(3){-webkit-animation-delay:0ms;animation-delay:0ms}.la-ball-pulse>div{-webkit-animation:ball-pulse 1s ease infinite;animation:ball-pulse 1s ease infinite;border-radius:100%;height:10px;margin:4px;width:10px}.la-ball-pulse.la-sm{height:8px;width:26px}.la-ball-pulse.la-sm>div{height:4px;margin:2px;width:4px}.la-ball-pulse.la-2x{height:36px;width:108px}.la-ball-pulse.la-2x>div{height:20px;margin:8px;width:20px}.la-ball-pulse.la-3x{height:54px;width:162px}.la-ball-pulse.la-3x>div{height:30px;margin:12px;width:30px}@-webkit-keyframes ball-pulse{0%,60%,to{opacity:1;transform:scale(1)}30%{opacity:.1;transform:scale(.01)}}@keyframes ball-pulse{0%,60%,to{opacity:1;transform:scale(1)}30%{opacity:.1;transform:scale(.01)}}.la-ball-rotate,.la-ball-rotate>div{box-sizing:border-box;position:relative}.la-ball-rotate{color:#fff;display:block;font-size:0}.la-ball-rotate.la-dark{color:#333}.la-ball-rotate>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-rotate,.la-ball-rotate>div{height:10px;width:10px}.la-ball-rotate>div{-webkit-animation:ball-rotate-animation 1s cubic-bezier(.7,-.13,.22,.86) infinite;animation:ball-rotate-animation 1s cubic-bezier(.7,-.13,.22,.86) infinite;border-radius:100%}.la-ball-rotate>div:after,.la-ball-rotate>div:before{background:currentColor;border-radius:inherit;content:\"\";height:inherit;margin:inherit;opacity:.8;position:absolute;width:inherit}.la-ball-rotate>div:before{left:-150%;top:0}.la-ball-rotate>div:after{left:150%;top:0}.la-ball-rotate.la-sm,.la-ball-rotate.la-sm>div{height:4px;width:4px}.la-ball-rotate.la-2x,.la-ball-rotate.la-2x>div{height:20px;width:20px}.la-ball-rotate.la-3x,.la-ball-rotate.la-3x>div{height:30px;width:30px}@-webkit-keyframes ball-rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes ball-rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.la-ball-running-dots,.la-ball-running-dots>div{box-sizing:border-box;position:relative}.la-ball-running-dots{color:#fff;display:block;font-size:0}.la-ball-running-dots.la-dark{color:#333}.la-ball-running-dots>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-running-dots{height:10px;width:10px}.la-ball-running-dots>div{-webkit-animation:ball-running-dots-animate 2s linear infinite;animation:ball-running-dots-animate 2s linear infinite;border-radius:100%;height:10px;margin-left:-25px;position:absolute;width:10px}.la-ball-running-dots>div:first-child{-webkit-animation-delay:0s;animation-delay:0s}.la-ball-running-dots>div:nth-child(2){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-ball-running-dots>div:nth-child(3){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-ball-running-dots>div:nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-running-dots>div:nth-child(5){-webkit-animation-delay:-1.6s;animation-delay:-1.6s}.la-ball-running-dots>div:nth-child(6){-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-running-dots>div:nth-child(7){-webkit-animation-delay:-2.4s;animation-delay:-2.4s}.la-ball-running-dots>div:nth-child(8){-webkit-animation-delay:-2.8s;animation-delay:-2.8s}.la-ball-running-dots>div:nth-child(9){-webkit-animation-delay:-3.2s;animation-delay:-3.2s}.la-ball-running-dots>div:nth-child(10){-webkit-animation-delay:-3.6s;animation-delay:-3.6s}.la-ball-running-dots.la-sm{height:4px;width:4px}.la-ball-running-dots.la-sm>div{height:4px;margin-left:-12px;width:4px}.la-ball-running-dots.la-2x{height:20px;width:20px}.la-ball-running-dots.la-2x>div{height:20px;margin-left:-50px;width:20px}.la-ball-running-dots.la-3x{height:30px;width:30px}.la-ball-running-dots.la-3x>div{height:30px;margin-left:-75px;width:30px}@-webkit-keyframes ball-running-dots-animate{0%,to{height:100%;transform:translateY(0) translateX(500%);width:100%}80%{transform:translateY(0) translateX(0)}85%{height:100%;transform:translateY(-125%) translateX(0);width:100%}90%{height:75%;width:200%}95%{height:100%;transform:translateY(-100%) translateX(500%);width:100%}}@keyframes ball-running-dots-animate{0%,to{height:100%;transform:translateY(0) translateX(500%);width:100%}80%{transform:translateY(0) translateX(0)}85%{height:100%;transform:translateY(-125%) translateX(0);width:100%}90%{height:75%;width:200%}95%{height:100%;transform:translateY(-100%) translateX(500%);width:100%}}.la-ball-scale-multiple,.la-ball-scale-multiple>div{box-sizing:border-box;position:relative}.la-ball-scale-multiple{color:#fff;display:block;font-size:0}.la-ball-scale-multiple.la-dark{color:#333}.la-ball-scale-multiple>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-scale-multiple{height:32px;width:32px}.la-ball-scale-multiple>div{-webkit-animation:ball-scale-multiple 1s linear 0s infinite;animation:ball-scale-multiple 1s linear 0s infinite;border-radius:100%;height:32px;left:0;opacity:0;position:absolute;top:0;width:32px}.la-ball-scale-multiple>div:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.la-ball-scale-multiple>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.la-ball-scale-multiple.la-sm,.la-ball-scale-multiple.la-sm>div{height:16px;width:16px}.la-ball-scale-multiple.la-2x,.la-ball-scale-multiple.la-2x>div{height:64px;width:64px}.la-ball-scale-multiple.la-3x,.la-ball-scale-multiple.la-3x>div{height:96px;width:96px}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}.la-ball-scale-pulse,.la-ball-scale-pulse>div{box-sizing:border-box;position:relative}.la-ball-scale-pulse{color:#fff;display:block;font-size:0}.la-ball-scale-pulse.la-dark{color:#333}.la-ball-scale-pulse>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-scale-pulse{height:32px;width:32px}.la-ball-scale-pulse>div{-webkit-animation:ball-scale-pulse 2s ease-in-out infinite;animation:ball-scale-pulse 2s ease-in-out infinite;border-radius:100%;height:32px;left:0;opacity:.5;position:absolute;top:0;width:32px}.la-ball-scale-pulse>div:last-child{-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-scale-pulse.la-sm,.la-ball-scale-pulse.la-sm>div{height:16px;width:16px}.la-ball-scale-pulse.la-2x,.la-ball-scale-pulse.la-2x>div{height:64px;width:64px}.la-ball-scale-pulse.la-3x,.la-ball-scale-pulse.la-3x>div{height:96px;width:96px}@-webkit-keyframes ball-scale-pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes ball-scale-pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}.la-ball-scale-ripple-multiple,.la-ball-scale-ripple-multiple>div{box-sizing:border-box;position:relative}.la-ball-scale-ripple-multiple{color:#fff;display:block;font-size:0}.la-ball-scale-ripple-multiple.la-dark{color:#333}.la-ball-scale-ripple-multiple>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-scale-ripple-multiple{height:32px;width:32px}.la-ball-scale-ripple-multiple>div{-webkit-animation:ball-scale-ripple-multiple 1.25s cubic-bezier(.21,.53,.56,.8) 0s infinite;animation:ball-scale-ripple-multiple 1.25s cubic-bezier(.21,.53,.56,.8) 0s infinite;background:transparent;border-radius:100%;border-width:2px;height:32px;left:0;opacity:0;position:absolute;top:0;width:32px}.la-ball-scale-ripple-multiple>div:first-child{-webkit-animation-delay:0s;animation-delay:0s}.la-ball-scale-ripple-multiple>div:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-scale-ripple-multiple>div:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.la-ball-scale-ripple-multiple.la-sm{height:16px;width:16px}.la-ball-scale-ripple-multiple.la-sm>div{border-width:1px;height:16px;width:16px}.la-ball-scale-ripple-multiple.la-2x{height:64px;width:64px}.la-ball-scale-ripple-multiple.la-2x>div{border-width:4px;height:64px;width:64px}.la-ball-scale-ripple-multiple.la-3x{height:96px;width:96px}.la-ball-scale-ripple-multiple.la-3x>div{border-width:6px;height:96px;width:96px}@-webkit-keyframes ball-scale-ripple-multiple{0%{opacity:1;transform:scale(.1)}70%{opacity:.5;transform:scale(1)}95%{opacity:0}}@keyframes ball-scale-ripple-multiple{0%{opacity:1;transform:scale(.1)}70%{opacity:.5;transform:scale(1)}95%{opacity:0}}.la-ball-scale-ripple,.la-ball-scale-ripple>div{box-sizing:border-box;position:relative}.la-ball-scale-ripple{color:#fff;display:block;font-size:0}.la-ball-scale-ripple.la-dark{color:#333}.la-ball-scale-ripple>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-scale-ripple{height:32px;width:32px}.la-ball-scale-ripple>div{-webkit-animation:ball-scale-ripple 1s cubic-bezier(.21,.53,.56,.8) 0s infinite;animation:ball-scale-ripple 1s cubic-bezier(.21,.53,.56,.8) 0s infinite;background:transparent;border-radius:100%;border-width:2px;height:32px;opacity:0;width:32px}.la-ball-scale-ripple.la-sm{height:16px;width:16px}.la-ball-scale-ripple.la-sm>div{border-width:1px;height:16px;width:16px}.la-ball-scale-ripple.la-2x{height:64px;width:64px}.la-ball-scale-ripple.la-2x>div{border-width:4px;height:64px;width:64px}.la-ball-scale-ripple.la-3x{height:96px;width:96px}.la-ball-scale-ripple.la-3x>div{border-width:6px;height:96px;width:96px}@-webkit-keyframes ball-scale-ripple{0%{opacity:1;transform:scale(.1)}70%{opacity:.65;transform:scale(1)}to{opacity:0}}@keyframes ball-scale-ripple{0%{opacity:1;transform:scale(.1)}70%{opacity:.65;transform:scale(1)}to{opacity:0}}.la-ball-scale,.la-ball-scale>div{box-sizing:border-box;position:relative}.la-ball-scale{color:#fff;display:block;font-size:0}.la-ball-scale.la-dark{color:#333}.la-ball-scale>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-scale,.la-ball-scale>div{height:32px;width:32px}.la-ball-scale>div{-webkit-animation:ball-scale 1s ease-in-out 0s infinite;animation:ball-scale 1s ease-in-out 0s infinite;border-radius:100%;opacity:0}.la-ball-scale.la-sm,.la-ball-scale.la-sm>div{height:16px;width:16px}.la-ball-scale.la-2x,.la-ball-scale.la-2x>div{height:64px;width:64px}.la-ball-scale.la-3x,.la-ball-scale.la-3x>div{height:96px;width:96px}@-webkit-keyframes ball-scale{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}@keyframes ball-scale{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}.la-ball-spin-clockwise-fade-rotating,.la-ball-spin-clockwise-fade-rotating>div{box-sizing:border-box;position:relative}.la-ball-spin-clockwise-fade-rotating{color:#fff;display:block;font-size:0}.la-ball-spin-clockwise-fade-rotating.la-dark{color:#333}.la-ball-spin-clockwise-fade-rotating>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin-clockwise-fade-rotating{-webkit-animation:ball-spin-clockwise-fade-rotating-rotate 6s linear infinite;animation:ball-spin-clockwise-fade-rotating-rotate 6s linear infinite;height:32px;width:32px}.la-ball-spin-clockwise-fade-rotating>div{-webkit-animation:ball-spin-clockwise-fade-rotating 1s linear infinite;animation:ball-spin-clockwise-fade-rotating 1s linear infinite;border-radius:100%;height:8px;left:50%;margin-left:-4px;margin-top:-4px;position:absolute;top:50%;width:8px}.la-ball-spin-clockwise-fade-rotating>div:first-child{-webkit-animation-delay:-.875s;animation-delay:-.875s;left:50%;top:5%}.la-ball-spin-clockwise-fade-rotating>div:nth-child(2){-webkit-animation-delay:-.75s;animation-delay:-.75s;left:81.8198051534%;top:18.1801948466%}.la-ball-spin-clockwise-fade-rotating>div:nth-child(3){-webkit-animation-delay:-.625s;animation-delay:-.625s;left:95%;top:50%}.la-ball-spin-clockwise-fade-rotating>div:nth-child(4){-webkit-animation-delay:-.5s;animation-delay:-.5s;left:81.8198051534%;top:81.8198051534%}.la-ball-spin-clockwise-fade-rotating>div:nth-child(5){-webkit-animation-delay:-.375s;animation-delay:-.375s;left:50.0000000005%;top:94.9999999966%}.la-ball-spin-clockwise-fade-rotating>div:nth-child(6){-webkit-animation-delay:-.25s;animation-delay:-.25s;left:18.1801949248%;top:81.8198046966%}.la-ball-spin-clockwise-fade-rotating>div:nth-child(7){-webkit-animation-delay:-.125s;animation-delay:-.125s;left:5.0000051215%;top:49.9999750815%}.la-ball-spin-clockwise-fade-rotating>div:nth-child(8){-webkit-animation-delay:0s;animation-delay:0s;left:18.1803700518%;top:18.179464974%}.la-ball-spin-clockwise-fade-rotating.la-sm{height:16px;width:16px}.la-ball-spin-clockwise-fade-rotating.la-sm>div{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-spin-clockwise-fade-rotating.la-2x{height:64px;width:64px}.la-ball-spin-clockwise-fade-rotating.la-2x>div{height:16px;margin-left:-8px;margin-top:-8px;width:16px}.la-ball-spin-clockwise-fade-rotating.la-3x{height:96px;width:96px}.la-ball-spin-clockwise-fade-rotating.la-3x>div{height:24px;margin-left:-12px;margin-top:-12px;width:24px}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.la-ball-spin-clockwise-fade,.la-ball-spin-clockwise-fade>div{box-sizing:border-box;position:relative}.la-ball-spin-clockwise-fade{color:#fff;display:block;font-size:0}.la-ball-spin-clockwise-fade.la-dark{color:#333}.la-ball-spin-clockwise-fade>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin-clockwise-fade{height:32px;width:32px}.la-ball-spin-clockwise-fade>div{-webkit-animation:ball-spin-clockwise-fade 1s linear infinite;animation:ball-spin-clockwise-fade 1s linear infinite;border-radius:100%;height:8px;left:50%;margin-left:-4px;margin-top:-4px;position:absolute;top:50%;width:8px}.la-ball-spin-clockwise-fade>div:first-child{-webkit-animation-delay:-.875s;animation-delay:-.875s;left:50%;top:5%}.la-ball-spin-clockwise-fade>div:nth-child(2){-webkit-animation-delay:-.75s;animation-delay:-.75s;left:81.8198051534%;top:18.1801948466%}.la-ball-spin-clockwise-fade>div:nth-child(3){-webkit-animation-delay:-.625s;animation-delay:-.625s;left:95%;top:50%}.la-ball-spin-clockwise-fade>div:nth-child(4){-webkit-animation-delay:-.5s;animation-delay:-.5s;left:81.8198051534%;top:81.8198051534%}.la-ball-spin-clockwise-fade>div:nth-child(5){-webkit-animation-delay:-.375s;animation-delay:-.375s;left:50.0000000005%;top:94.9999999966%}.la-ball-spin-clockwise-fade>div:nth-child(6){-webkit-animation-delay:-.25s;animation-delay:-.25s;left:18.1801949248%;top:81.8198046966%}.la-ball-spin-clockwise-fade>div:nth-child(7){-webkit-animation-delay:-.125s;animation-delay:-.125s;left:5.0000051215%;top:49.9999750815%}.la-ball-spin-clockwise-fade>div:nth-child(8){-webkit-animation-delay:0s;animation-delay:0s;left:18.1803700518%;top:18.179464974%}.la-ball-spin-clockwise-fade.la-sm{height:16px;width:16px}.la-ball-spin-clockwise-fade.la-sm>div{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-spin-clockwise-fade.la-2x{height:64px;width:64px}.la-ball-spin-clockwise-fade.la-2x>div{height:16px;margin-left:-8px;margin-top:-8px;width:16px}.la-ball-spin-clockwise-fade.la-3x{height:96px;width:96px}.la-ball-spin-clockwise-fade.la-3x>div{height:24px;margin-left:-12px;margin-top:-12px;width:24px}@-webkit-keyframes ball-spin-clockwise-fade{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.la-ball-spin-clockwise,.la-ball-spin-clockwise>div{box-sizing:border-box;position:relative}.la-ball-spin-clockwise{color:#fff;display:block;font-size:0}.la-ball-spin-clockwise.la-dark{color:#333}.la-ball-spin-clockwise>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin-clockwise{height:32px;width:32px}.la-ball-spin-clockwise>div{-webkit-animation:ball-spin-clockwise 1s ease-in-out infinite;animation:ball-spin-clockwise 1s ease-in-out infinite;border-radius:100%;height:8px;left:50%;margin-left:-4px;margin-top:-4px;position:absolute;top:50%;width:8px}.la-ball-spin-clockwise>div:first-child{-webkit-animation-delay:-.875s;animation-delay:-.875s;left:50%;top:5%}.la-ball-spin-clockwise>div:nth-child(2){-webkit-animation-delay:-.75s;animation-delay:-.75s;left:81.8198051534%;top:18.1801948466%}.la-ball-spin-clockwise>div:nth-child(3){-webkit-animation-delay:-.625s;animation-delay:-.625s;left:95%;top:50%}.la-ball-spin-clockwise>div:nth-child(4){-webkit-animation-delay:-.5s;animation-delay:-.5s;left:81.8198051534%;top:81.8198051534%}.la-ball-spin-clockwise>div:nth-child(5){-webkit-animation-delay:-.375s;animation-delay:-.375s;left:50.0000000005%;top:94.9999999966%}.la-ball-spin-clockwise>div:nth-child(6){-webkit-animation-delay:-.25s;animation-delay:-.25s;left:18.1801949248%;top:81.8198046966%}.la-ball-spin-clockwise>div:nth-child(7){-webkit-animation-delay:-.125s;animation-delay:-.125s;left:5.0000051215%;top:49.9999750815%}.la-ball-spin-clockwise>div:nth-child(8){-webkit-animation-delay:0s;animation-delay:0s;left:18.1803700518%;top:18.179464974%}.la-ball-spin-clockwise.la-sm{height:16px;width:16px}.la-ball-spin-clockwise.la-sm>div{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-spin-clockwise.la-2x{height:64px;width:64px}.la-ball-spin-clockwise.la-2x>div{height:16px;margin-left:-8px;margin-top:-8px;width:16px}.la-ball-spin-clockwise.la-3x{height:96px;width:96px}.la-ball-spin-clockwise.la-3x>div{height:24px;margin-left:-12px;margin-top:-12px;width:24px}@-webkit-keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.la-ball-spin-fade-rotating,.la-ball-spin-fade-rotating>div{box-sizing:border-box;position:relative}.la-ball-spin-fade-rotating{color:#fff;display:block;font-size:0}.la-ball-spin-fade-rotating.la-dark{color:#333}.la-ball-spin-fade-rotating>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin-fade-rotating{-webkit-animation:ball-spin-fade-rotate 6s linear infinite;animation:ball-spin-fade-rotate 6s linear infinite;height:32px;width:32px}.la-ball-spin-fade-rotating>div{-webkit-animation:ball-spin-fade 1s linear infinite;animation:ball-spin-fade 1s linear infinite;border-radius:100%;height:8px;left:50%;margin-left:-4px;margin-top:-4px;position:absolute;top:50%;width:8px}.la-ball-spin-fade-rotating>div:first-child{-webkit-animation-delay:-1.125s;animation-delay:-1.125s;left:50%;top:5%}.la-ball-spin-fade-rotating>div:nth-child(2){-webkit-animation-delay:-1.25s;animation-delay:-1.25s;left:81.8198051534%;top:18.1801948466%}.la-ball-spin-fade-rotating>div:nth-child(3){-webkit-animation-delay:-1.375s;animation-delay:-1.375s;left:95%;top:50%}.la-ball-spin-fade-rotating>div:nth-child(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s;left:81.8198051534%;top:81.8198051534%}.la-ball-spin-fade-rotating>div:nth-child(5){-webkit-animation-delay:-1.625s;animation-delay:-1.625s;left:50.0000000005%;top:94.9999999966%}.la-ball-spin-fade-rotating>div:nth-child(6){-webkit-animation-delay:-1.75s;animation-delay:-1.75s;left:18.1801949248%;top:81.8198046966%}.la-ball-spin-fade-rotating>div:nth-child(7){-webkit-animation-delay:-1.875s;animation-delay:-1.875s;left:5.0000051215%;top:49.9999750815%}.la-ball-spin-fade-rotating>div:nth-child(8){-webkit-animation-delay:-2s;animation-delay:-2s;left:18.1803700518%;top:18.179464974%}.la-ball-spin-fade-rotating.la-sm{height:16px;width:16px}.la-ball-spin-fade-rotating.la-sm>div{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-spin-fade-rotating.la-2x{height:64px;width:64px}.la-ball-spin-fade-rotating.la-2x>div{height:16px;margin-left:-8px;margin-top:-8px;width:16px}.la-ball-spin-fade-rotating.la-3x{height:96px;width:96px}.la-ball-spin-fade-rotating.la-3x>div{height:24px;margin-left:-12px;margin-top:-12px;width:24px}@-webkit-keyframes ball-spin-fade-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-fade-rotate{to{transform:rotate(1turn)}}.la-ball-spin-fade,.la-ball-spin-fade>div{box-sizing:border-box;position:relative}.la-ball-spin-fade{color:#fff;display:block;font-size:0}.la-ball-spin-fade.la-dark{color:#333}.la-ball-spin-fade>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin-fade{height:32px;width:32px}.la-ball-spin-fade>div{-webkit-animation:ball-spin-fade 1s linear infinite;animation:ball-spin-fade 1s linear infinite;border-radius:100%;height:8px;left:50%;margin-left:-4px;margin-top:-4px;position:absolute;top:50%;width:8px}.la-ball-spin-fade>div:first-child{-webkit-animation-delay:-1.125s;animation-delay:-1.125s;left:50%;top:5%}.la-ball-spin-fade>div:nth-child(2){-webkit-animation-delay:-1.25s;animation-delay:-1.25s;left:81.8198051534%;top:18.1801948466%}.la-ball-spin-fade>div:nth-child(3){-webkit-animation-delay:-1.375s;animation-delay:-1.375s;left:95%;top:50%}.la-ball-spin-fade>div:nth-child(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s;left:81.8198051534%;top:81.8198051534%}.la-ball-spin-fade>div:nth-child(5){-webkit-animation-delay:-1.625s;animation-delay:-1.625s;left:50.0000000005%;top:94.9999999966%}.la-ball-spin-fade>div:nth-child(6){-webkit-animation-delay:-1.75s;animation-delay:-1.75s;left:18.1801949248%;top:81.8198046966%}.la-ball-spin-fade>div:nth-child(7){-webkit-animation-delay:-1.875s;animation-delay:-1.875s;left:5.0000051215%;top:49.9999750815%}.la-ball-spin-fade>div:nth-child(8){-webkit-animation-delay:-2s;animation-delay:-2s;left:18.1803700518%;top:18.179464974%}.la-ball-spin-fade.la-sm{height:16px;width:16px}.la-ball-spin-fade.la-sm>div{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-spin-fade.la-2x{height:64px;width:64px}.la-ball-spin-fade.la-2x>div{height:16px;margin-left:-8px;margin-top:-8px;width:16px}.la-ball-spin-fade.la-3x{height:96px;width:96px}.la-ball-spin-fade.la-3x>div{height:24px;margin-left:-12px;margin-top:-12px;width:24px}@-webkit-keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}@keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}.la-ball-spin-rotate,.la-ball-spin-rotate>div{box-sizing:border-box;position:relative}.la-ball-spin-rotate{color:#fff;display:block;font-size:0}.la-ball-spin-rotate.la-dark{color:#333}.la-ball-spin-rotate>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin-rotate{-webkit-animation:ball-spin-rotate 2s linear infinite;animation:ball-spin-rotate 2s linear infinite;height:32px;width:32px}.la-ball-spin-rotate>div{-webkit-animation:ball-spin-bounce 2s ease-in-out infinite;animation:ball-spin-bounce 2s ease-in-out infinite;border-radius:100%;height:60%;position:absolute;top:0;width:60%}.la-ball-spin-rotate>div:last-child{-webkit-animation-delay:-1s;animation-delay:-1s;bottom:0;top:auto}.la-ball-spin-rotate.la-sm{height:16px;width:16px}.la-ball-spin-rotate.la-2x{height:64px;width:64px}.la-ball-spin-rotate.la-3x{height:96px;width:96px}@-webkit-keyframes ball-spin-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes ball-spin-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes ball-spin-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}.la-ball-spin,.la-ball-spin>div{box-sizing:border-box;position:relative}.la-ball-spin{color:#fff;display:block;font-size:0}.la-ball-spin.la-dark{color:#333}.la-ball-spin>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-spin{height:32px;width:32px}.la-ball-spin>div{-webkit-animation:ball-spin 1s ease-in-out infinite;animation:ball-spin 1s ease-in-out infinite;border-radius:100%;height:8px;left:50%;margin-left:-4px;margin-top:-4px;position:absolute;top:50%;width:8px}.la-ball-spin>div:first-child{-webkit-animation-delay:-1.125s;animation-delay:-1.125s;left:50%;top:5%}.la-ball-spin>div:nth-child(2){-webkit-animation-delay:-1.25s;animation-delay:-1.25s;left:81.8198051534%;top:18.1801948466%}.la-ball-spin>div:nth-child(3){-webkit-animation-delay:-1.375s;animation-delay:-1.375s;left:95%;top:50%}.la-ball-spin>div:nth-child(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s;left:81.8198051534%;top:81.8198051534%}.la-ball-spin>div:nth-child(5){-webkit-animation-delay:-1.625s;animation-delay:-1.625s;left:50.0000000005%;top:94.9999999966%}.la-ball-spin>div:nth-child(6){-webkit-animation-delay:-1.75s;animation-delay:-1.75s;left:18.1801949248%;top:81.8198046966%}.la-ball-spin>div:nth-child(7){-webkit-animation-delay:-1.875s;animation-delay:-1.875s;left:5.0000051215%;top:49.9999750815%}.la-ball-spin>div:nth-child(8){-webkit-animation-delay:-2s;animation-delay:-2s;left:18.1803700518%;top:18.179464974%}.la-ball-spin.la-sm{height:16px;width:16px}.la-ball-spin.la-sm>div{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-spin.la-2x{height:64px;width:64px}.la-ball-spin.la-2x>div{height:16px;margin-left:-8px;margin-top:-8px;width:16px}.la-ball-spin.la-3x{height:96px;width:96px}.la-ball-spin.la-3x>div{height:24px;margin-left:-12px;margin-top:-12px;width:24px}@-webkit-keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.la-ball-square-clockwise-spin,.la-ball-square-clockwise-spin>div{box-sizing:border-box;position:relative}.la-ball-square-clockwise-spin{color:#fff;display:block;font-size:0}.la-ball-square-clockwise-spin.la-dark{color:#333}.la-ball-square-clockwise-spin>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-square-clockwise-spin{height:26px;width:26px}.la-ball-square-clockwise-spin>div{-webkit-animation:ball-square-clockwise-spin 1s ease-in-out infinite;animation:ball-square-clockwise-spin 1s ease-in-out infinite;border-radius:100%;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.la-ball-square-clockwise-spin>div:first-child{-webkit-animation-delay:-.875s;animation-delay:-.875s;left:0;top:0}.la-ball-square-clockwise-spin>div:nth-child(2){-webkit-animation-delay:-.75s;animation-delay:-.75s;left:50%;top:0}.la-ball-square-clockwise-spin>div:nth-child(3){-webkit-animation-delay:-.625s;animation-delay:-.625s;left:100%;top:0}.la-ball-square-clockwise-spin>div:nth-child(4){-webkit-animation-delay:-.5s;animation-delay:-.5s;left:100%;top:50%}.la-ball-square-clockwise-spin>div:nth-child(5){-webkit-animation-delay:-.375s;animation-delay:-.375s;left:100%;top:100%}.la-ball-square-clockwise-spin>div:nth-child(6){-webkit-animation-delay:-.25s;animation-delay:-.25s;left:50%;top:100%}.la-ball-square-clockwise-spin>div:nth-child(7){-webkit-animation-delay:-.125s;animation-delay:-.125s;left:0;top:100%}.la-ball-square-clockwise-spin>div:nth-child(8){-webkit-animation-delay:0s;animation-delay:0s;left:0;top:50%}.la-ball-square-clockwise-spin.la-sm{height:12px;width:12px}.la-ball-square-clockwise-spin.la-sm>div{height:6px;margin-left:-3px;margin-top:-3px;width:6px}.la-ball-square-clockwise-spin.la-2x{height:52px;width:52px}.la-ball-square-clockwise-spin.la-2x>div{height:24px;margin-left:-12px;margin-top:-12px;width:24px}.la-ball-square-clockwise-spin.la-3x{height:78px;width:78px}.la-ball-square-clockwise-spin.la-3x>div{height:36px;margin-left:-18px;margin-top:-18px;width:36px}@-webkit-keyframes ball-square-clockwise-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}@keyframes ball-square-clockwise-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}.la-ball-square-spin,.la-ball-square-spin>div{box-sizing:border-box;position:relative}.la-ball-square-spin{color:#fff;display:block;font-size:0}.la-ball-square-spin.la-dark{color:#333}.la-ball-square-spin>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-square-spin{height:26px;width:26px}.la-ball-square-spin>div{-webkit-animation:ball-square-spin 1s ease-in-out infinite;animation:ball-square-spin 1s ease-in-out infinite;border-radius:100%;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.la-ball-square-spin>div:first-child{-webkit-animation-delay:-1.125s;animation-delay:-1.125s;left:0;top:0}.la-ball-square-spin>div:nth-child(2){-webkit-animation-delay:-1.25s;animation-delay:-1.25s;left:50%;top:0}.la-ball-square-spin>div:nth-child(3){-webkit-animation-delay:-1.375s;animation-delay:-1.375s;left:100%;top:0}.la-ball-square-spin>div:nth-child(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s;left:100%;top:50%}.la-ball-square-spin>div:nth-child(5){-webkit-animation-delay:-1.625s;animation-delay:-1.625s;left:100%;top:100%}.la-ball-square-spin>div:nth-child(6){-webkit-animation-delay:-1.75s;animation-delay:-1.75s;left:50%;top:100%}.la-ball-square-spin>div:nth-child(7){-webkit-animation-delay:-1.875s;animation-delay:-1.875s;left:0;top:100%}.la-ball-square-spin>div:nth-child(8){-webkit-animation-delay:-2s;animation-delay:-2s;left:0;top:50%}.la-ball-square-spin.la-sm{height:12px;width:12px}.la-ball-square-spin.la-sm>div{height:6px;margin-left:-3px;margin-top:-3px;width:6px}.la-ball-square-spin.la-2x{height:52px;width:52px}.la-ball-square-spin.la-2x>div{height:24px;margin-left:-12px;margin-top:-12px;width:24px}.la-ball-square-spin.la-3x{height:78px;width:78px}.la-ball-square-spin.la-3x>div{height:36px;margin-left:-18px;margin-top:-18px;width:36px}@-webkit-keyframes ball-square-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}@keyframes ball-square-spin{0%,40%,to{transform:scale(.4)}70%{transform:scale(1)}}.la-ball-triangle-path,.la-ball-triangle-path>div{box-sizing:border-box;position:relative}.la-ball-triangle-path{color:#fff;display:block;font-size:0}.la-ball-triangle-path.la-dark{color:#333}.la-ball-triangle-path>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-triangle-path{height:32px;width:32px}.la-ball-triangle-path>div{border-radius:100%;height:10px;left:0;position:absolute;top:0;width:10px}.la-ball-triangle-path>div:first-child{-webkit-animation:ball-triangle-path-ball-one 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-one 2s ease-in-out 0s infinite}.la-ball-triangle-path>div:nth-child(2){-webkit-animation:ball-triangle-path-ball-two 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-two 2s ease-in-out 0s infinite}.la-ball-triangle-path>div:nth-child(3){-webkit-animation:ball-triangle-path-ball-tree 2s ease-in-out 0s infinite;animation:ball-triangle-path-ball-tree 2s ease-in-out 0s infinite}.la-ball-triangle-path.la-sm{height:16px;width:16px}.la-ball-triangle-path.la-sm>div{height:4px;width:4px}.la-ball-triangle-path.la-2x{height:64px;width:64px}.la-ball-triangle-path.la-2x>div{height:20px;width:20px}.la-ball-triangle-path.la-3x{height:96px;width:96px}.la-ball-triangle-path.la-3x>div{height:30px;width:30px}@-webkit-keyframes ball-triangle-path-ball-one{0%{transform:translateY(220%)}17%{opacity:.25}33%{opacity:1;transform:translate(110%)}50%{opacity:.25}66%{opacity:1;transform:translate(220%,220%)}83%{opacity:.25}to{opacity:1;transform:translateY(220%)}}@keyframes ball-triangle-path-ball-one{0%{transform:translateY(220%)}17%{opacity:.25}33%{opacity:1;transform:translate(110%)}50%{opacity:.25}66%{opacity:1;transform:translate(220%,220%)}83%{opacity:.25}to{opacity:1;transform:translateY(220%)}}@-webkit-keyframes ball-triangle-path-ball-two{0%{transform:translate(110%)}17%{opacity:.25}33%{opacity:1;transform:translate(220%,220%)}50%{opacity:.25}66%{opacity:1;transform:translateY(220%)}83%{opacity:.25}to{opacity:1;transform:translate(110%)}}@keyframes ball-triangle-path-ball-two{0%{transform:translate(110%)}17%{opacity:.25}33%{opacity:1;transform:translate(220%,220%)}50%{opacity:.25}66%{opacity:1;transform:translateY(220%)}83%{opacity:.25}to{opacity:1;transform:translate(110%)}}@-webkit-keyframes ball-triangle-path-ball-tree{0%{transform:translate(220%,220%)}17%{opacity:.25}33%{opacity:1;transform:translateY(220%)}50%{opacity:.25}66%{opacity:1;transform:translate(110%)}83%{opacity:.25}to{opacity:1;transform:translate(220%,220%)}}@keyframes ball-triangle-path-ball-tree{0%{transform:translate(220%,220%)}17%{opacity:.25}33%{opacity:1;transform:translateY(220%)}50%{opacity:.25}66%{opacity:1;transform:translate(110%)}83%{opacity:.25}to{opacity:1;transform:translate(220%,220%)}}.la-ball-zig-zag-deflect,.la-ball-zig-zag-deflect>div{box-sizing:border-box;position:relative}.la-ball-zig-zag-deflect{color:#fff;display:block;font-size:0}.la-ball-zig-zag-deflect.la-dark{color:#333}.la-ball-zig-zag-deflect>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-zig-zag-deflect{height:32px;position:relative;width:32px}.la-ball-zig-zag-deflect>div{border-radius:100%;height:10px;left:50%;margin-left:-5px;margin-top:-5px;position:absolute;top:50%;width:10px}.la-ball-zig-zag-deflect>div:first-child{-webkit-animation:ball-zig-deflect 1.5s linear 0s infinite;animation:ball-zig-deflect 1.5s linear 0s infinite}.la-ball-zig-zag-deflect>div:last-child{-webkit-animation:ball-zag-deflect 1.5s linear 0s infinite;animation:ball-zag-deflect 1.5s linear 0s infinite}.la-ball-zig-zag-deflect.la-sm{height:16px;width:16px}.la-ball-zig-zag-deflect.la-sm>div{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-zig-zag-deflect.la-2x{height:64px;width:64px}.la-ball-zig-zag-deflect.la-2x>div{height:20px;margin-left:-10px;margin-top:-10px;width:20px}.la-ball-zig-zag-deflect.la-3x{height:96px;width:96px}.la-ball-zig-zag-deflect.la-3x>div{height:30px;margin-left:-15px;margin-top:-15px;width:30px}@-webkit-keyframes ball-zig-deflect{17%{transform:translate(-80%,-160%)}34%{transform:translate(80%,-160%)}50%{transform:translate(0)}67%{transform:translate(80%,-160%)}84%{transform:translate(-80%,-160%)}to{transform:translate(0)}}@keyframes ball-zig-deflect{17%{transform:translate(-80%,-160%)}34%{transform:translate(80%,-160%)}50%{transform:translate(0)}67%{transform:translate(80%,-160%)}84%{transform:translate(-80%,-160%)}to{transform:translate(0)}}@-webkit-keyframes ball-zag-deflect{17%{transform:translate(80%,160%)}34%{transform:translate(-80%,160%)}50%{transform:translate(0)}67%{transform:translate(-80%,160%)}84%{transform:translate(80%,160%)}to{transform:translate(0)}}@keyframes ball-zag-deflect{17%{transform:translate(80%,160%)}34%{transform:translate(-80%,160%)}50%{transform:translate(0)}67%{transform:translate(-80%,160%)}84%{transform:translate(80%,160%)}to{transform:translate(0)}}.la-ball-zig-zag,.la-ball-zig-zag>div{box-sizing:border-box;position:relative}.la-ball-zig-zag{color:#fff;display:block;font-size:0}.la-ball-zig-zag.la-dark{color:#333}.la-ball-zig-zag>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-ball-zig-zag{height:32px;position:relative;width:32px}.la-ball-zig-zag>div{border-radius:100%;height:10px;left:50%;margin-left:-5px;margin-top:-5px;position:absolute;top:50%;width:10px}.la-ball-zig-zag>div:first-child{-webkit-animation:ball-zig-effect .7s linear 0s infinite;animation:ball-zig-effect .7s linear 0s infinite}.la-ball-zig-zag>div:last-child{-webkit-animation:ball-zag-effect .7s linear 0s infinite;animation:ball-zag-effect .7s linear 0s infinite}.la-ball-zig-zag.la-sm{height:16px;width:16px}.la-ball-zig-zag.la-sm>div{height:4px;margin-left:-2px;margin-top:-2px;width:4px}.la-ball-zig-zag.la-2x{height:64px;width:64px}.la-ball-zig-zag.la-2x>div{height:20px;margin-left:-10px;margin-top:-10px;width:20px}.la-ball-zig-zag.la-3x{height:96px;width:96px}.la-ball-zig-zag.la-3x>div{height:30px;margin-left:-15px;margin-top:-15px;width:30px}@-webkit-keyframes ball-zig-effect{0%{transform:translate(0)}33%{transform:translate(-75%,-150%)}66%{transform:translate(75%,-150%)}to{transform:translate(0)}}@keyframes ball-zig-effect{0%{transform:translate(0)}33%{transform:translate(-75%,-150%)}66%{transform:translate(75%,-150%)}to{transform:translate(0)}}@-webkit-keyframes ball-zag-effect{0%{transform:translate(0)}33%{transform:translate(75%,150%)}66%{transform:translate(-75%,150%)}to{transform:translate(0)}}@keyframes ball-zag-effect{0%{transform:translate(0)}33%{transform:translate(75%,150%)}66%{transform:translate(-75%,150%)}to{transform:translate(0)}}.la-cog,.la-cog>div{box-sizing:border-box;position:relative}.la-cog{color:#fff;display:block;font-size:0}.la-cog.la-dark{color:#333}.la-cog>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-cog{height:31px;width:31px}.la-cog>div{-webkit-animation:cog-rotate 4s linear infinite;animation:cog-rotate 4s linear infinite;background-color:transparent;border-radius:100%;border-style:dashed;border-width:2px;height:100%;width:100%}.la-cog>div:after{border:2px solid;border-radius:100%;content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.la-cog.la-sm{height:15px;width:15px}.la-cog.la-sm>div,.la-cog.la-sm>div:after{border-width:1px}.la-cog.la-2x{height:61px;width:61px}.la-cog.la-2x>div,.la-cog.la-2x>div:after{border-width:4px}.la-cog.la-3x{height:91px;width:91px}.la-cog.la-3x>div,.la-cog.la-3x>div:after{border-width:6px}@-webkit-keyframes cog-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes cog-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.la-cube-transition,.la-cube-transition>div{box-sizing:border-box;position:relative}.la-cube-transition{color:#fff;display:block;font-size:0}.la-cube-transition.la-dark{color:#333}.la-cube-transition>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-cube-transition{height:32px;width:32px}.la-cube-transition>div{-webkit-animation:cube-transition 1.6s ease-in-out 0s infinite;animation:cube-transition 1.6s ease-in-out 0s infinite;border-radius:0;height:14px;left:0;margin-left:-7px;margin-top:-7px;position:absolute;top:0;width:14px}.la-cube-transition>div:last-child{-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-cube-transition.la-sm{height:16px;width:16px}.la-cube-transition.la-sm>div{height:6px;margin-left:-3px;margin-top:-3px;width:6px}.la-cube-transition.la-2x{height:64px;width:64px}.la-cube-transition.la-2x>div{height:28px;margin-left:-14px;margin-top:-14px;width:28px}.la-cube-transition.la-3x{height:96px;width:96px}.la-cube-transition.la-3x>div{height:42px;margin-left:-21px;margin-top:-21px;width:42px}@-webkit-keyframes cube-transition{25%{left:100%;top:0;transform:scale(.5) rotate(-90deg)}50%{left:100%;top:100%;transform:scale(1) rotate(-180deg)}75%{left:0;top:100%;transform:scale(.5) rotate(-270deg)}to{left:0;top:0;transform:scale(1) rotate(-1turn)}}@keyframes cube-transition{25%{left:100%;top:0;transform:scale(.5) rotate(-90deg)}50%{left:100%;top:100%;transform:scale(1) rotate(-180deg)}75%{left:0;top:100%;transform:scale(.5) rotate(-270deg)}to{left:0;top:0;transform:scale(1) rotate(-1turn)}}.la-fire,.la-fire>div{box-sizing:border-box;position:relative}.la-fire{color:#fff;display:block;font-size:0}.la-fire.la-dark{color:#333}.la-fire>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-fire{height:32px;width:32px}.la-fire>div{-webkit-animation:fire-diamonds 1.5s linear infinite;animation:fire-diamonds 1.5s linear infinite;border-radius:0;border-radius:2px;bottom:0;height:12px;left:50%;position:absolute;transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);width:12px}.la-fire>div:first-child{-webkit-animation-delay:-.85s;animation-delay:-.85s}.la-fire>div:nth-child(2){-webkit-animation-delay:-1.85s;animation-delay:-1.85s}.la-fire>div:nth-child(3){-webkit-animation-delay:-2.85s;animation-delay:-2.85s}.la-fire.la-sm{height:16px;width:16px}.la-fire.la-sm>div{height:6px;width:6px}.la-fire.la-2x{height:64px;width:64px}.la-fire.la-2x>div{height:24px;width:24px}.la-fire.la-3x{height:96px;width:96px}.la-fire.la-3x>div{height:36px;width:36px}@-webkit-keyframes fire-diamonds{0%{transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}to{transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}@keyframes fire-diamonds{0%{transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}to{transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}.la-line-scale-party,.la-line-scale-party>div{box-sizing:border-box;position:relative}.la-line-scale-party{color:#fff;display:block;font-size:0}.la-line-scale-party.la-dark{color:#333}.la-line-scale-party>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-scale-party{height:32px;width:40px}.la-line-scale-party>div{-webkit-animation-iteration-count:infinite;-webkit-animation-name:line-scale-party;animation-iteration-count:infinite;animation-name:line-scale-party;border-radius:0;height:32px;margin:0 2px;width:4px}.la-line-scale-party>div:first-child{-webkit-animation-delay:-.23s;-webkit-animation-duration:.43s;animation-delay:-.23s;animation-duration:.43s}.la-line-scale-party>div:nth-child(2){-webkit-animation-delay:-.32s;-webkit-animation-duration:.62s;animation-delay:-.32s;animation-duration:.62s}.la-line-scale-party>div:nth-child(3){-webkit-animation-delay:-.44s;-webkit-animation-duration:.43s;animation-delay:-.44s;animation-duration:.43s}.la-line-scale-party>div:nth-child(4){-webkit-animation-delay:-.31s;-webkit-animation-duration:.8s;animation-delay:-.31s;animation-duration:.8s}.la-line-scale-party>div:nth-child(5){-webkit-animation-delay:-.24s;-webkit-animation-duration:.74s;animation-delay:-.24s;animation-duration:.74s}.la-line-scale-party.la-sm{height:16px;width:20px}.la-line-scale-party.la-sm>div{height:16px;margin:0 1px;width:2px}.la-line-scale-party.la-2x{height:64px;width:80px}.la-line-scale-party.la-2x>div{height:64px;margin:0 4px;width:8px}.la-line-scale-party.la-3x{height:96px;width:120px}.la-line-scale-party.la-3x>div{height:96px;margin:0 6px;width:12px}@-webkit-keyframes line-scale-party{0%{transform:scaleY(1)}50%{transform:scaleY(.3)}to{transform:scaleY(1)}}@keyframes line-scale-party{0%{transform:scaleY(1)}50%{transform:scaleY(.3)}to{transform:scaleY(1)}}.la-line-scale-pulse-out-rapid,.la-line-scale-pulse-out-rapid>div{box-sizing:border-box;position:relative}.la-line-scale-pulse-out-rapid{color:#fff;display:block;font-size:0}.la-line-scale-pulse-out-rapid.la-dark{color:#333}.la-line-scale-pulse-out-rapid>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-scale-pulse-out-rapid{height:32px;width:40px}.la-line-scale-pulse-out-rapid>div{-webkit-animation:line-scale-pulse-out-rapid .9s cubic-bezier(.11,.49,.38,.78) infinite;animation:line-scale-pulse-out-rapid .9s cubic-bezier(.11,.49,.38,.78) infinite;border-radius:0;height:32px;margin:0 2px;width:4px}.la-line-scale-pulse-out-rapid>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out-rapid>div:nth-child(2),.la-line-scale-pulse-out-rapid>div:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.la-line-scale-pulse-out-rapid>div:first-child,.la-line-scale-pulse-out-rapid>div:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-line-scale-pulse-out-rapid.la-sm{height:16px;width:20px}.la-line-scale-pulse-out-rapid.la-sm>div{height:16px;margin:0 1px;width:2px}.la-line-scale-pulse-out-rapid.la-2x{height:64px;width:80px}.la-line-scale-pulse-out-rapid.la-2x>div{height:64px;margin:0 4px;width:8px}.la-line-scale-pulse-out-rapid.la-3x{height:96px;width:120px}.la-line-scale-pulse-out-rapid.la-3x>div{height:96px;margin:0 6px;width:12px}@-webkit-keyframes line-scale-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.3)}90%{transform:scaley(1)}}@keyframes line-scale-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.3)}90%{transform:scaley(1)}}.la-line-scale-pulse-out,.la-line-scale-pulse-out>div{box-sizing:border-box;position:relative}.la-line-scale-pulse-out{color:#fff;display:block;font-size:0}.la-line-scale-pulse-out.la-dark{color:#333}.la-line-scale-pulse-out>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-scale-pulse-out{height:32px;width:40px}.la-line-scale-pulse-out>div{-webkit-animation:line-scale-pulse-out .9s cubic-bezier(.85,.25,.37,.85) infinite;animation:line-scale-pulse-out .9s cubic-bezier(.85,.25,.37,.85) infinite;border-radius:0;height:32px;margin:0 2px;width:4px}.la-line-scale-pulse-out>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out>div:nth-child(2),.la-line-scale-pulse-out>div:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.la-line-scale-pulse-out>div:first-child,.la-line-scale-pulse-out>div:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-scale-pulse-out.la-sm{height:16px;width:20px}.la-line-scale-pulse-out.la-sm>div{height:16px;margin:0 1px;width:2px}.la-line-scale-pulse-out.la-2x{height:64px;width:80px}.la-line-scale-pulse-out.la-2x>div{height:64px;margin:0 4px;width:8px}.la-line-scale-pulse-out.la-3x{height:96px;width:120px}.la-line-scale-pulse-out.la-3x>div{height:96px;margin:0 6px;width:12px}@-webkit-keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.3)}to{transform:scaley(1)}}@keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.3)}to{transform:scaley(1)}}.la-line-scale,.la-line-scale>div{box-sizing:border-box;position:relative}.la-line-scale{color:#fff;display:block;font-size:0}.la-line-scale.la-dark{color:#333}.la-line-scale>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-scale{height:32px;width:40px}.la-line-scale>div{-webkit-animation:line-scale 1.2s ease infinite;animation:line-scale 1.2s ease infinite;border-radius:0;height:32px;margin:0 2px;width:4px}.la-line-scale>div:first-child{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-line-scale>div:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.la-line-scale>div:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.la-line-scale>div:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale>div:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-line-scale.la-sm{height:16px;width:20px}.la-line-scale.la-sm>div{height:16px;margin:0 1px;width:2px}.la-line-scale.la-2x{height:64px;width:80px}.la-line-scale.la-2x>div{height:64px;margin:0 4px;width:8px}.la-line-scale.la-3x{height:96px;width:120px}.la-line-scale.la-3x>div{height:96px;margin:0 6px;width:12px}@-webkit-keyframes line-scale{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}@keyframes line-scale{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}.la-line-spin-clockwise-fade-rotating,.la-line-spin-clockwise-fade-rotating>div{box-sizing:border-box;position:relative}.la-line-spin-clockwise-fade-rotating{color:#fff;display:block;font-size:0}.la-line-spin-clockwise-fade-rotating.la-dark{color:#333}.la-line-spin-clockwise-fade-rotating>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-spin-clockwise-fade-rotating{-webkit-animation:line-spin-clockwise-fade-rotating-rotate 6s linear infinite;animation:line-spin-clockwise-fade-rotating-rotate 6s linear infinite;height:32px;width:32px}.la-line-spin-clockwise-fade-rotating>div{-webkit-animation:line-spin-clockwise-fade-rotating 1s ease-in-out infinite;animation:line-spin-clockwise-fade-rotating 1s ease-in-out infinite;border-radius:0;height:10px;margin:-5px 2px 2px -1px;position:absolute;width:2px}.la-line-spin-clockwise-fade-rotating>div:first-child{-webkit-animation-delay:-.875s;animation-delay:-.875s;left:50%;top:15%;transform:rotate(0deg)}.la-line-spin-clockwise-fade-rotating>div:nth-child(2){-webkit-animation-delay:-.75s;animation-delay:-.75s;left:74.7487373415%;top:25.2512626585%;transform:rotate(45deg)}.la-line-spin-clockwise-fade-rotating>div:nth-child(3){-webkit-animation-delay:-.625s;animation-delay:-.625s;left:85%;top:50%;transform:rotate(90deg)}.la-line-spin-clockwise-fade-rotating>div:nth-child(4){-webkit-animation-delay:-.5s;animation-delay:-.5s;left:74.7487373415%;top:74.7487373415%;transform:rotate(135deg)}.la-line-spin-clockwise-fade-rotating>div:nth-child(5){-webkit-animation-delay:-.375s;animation-delay:-.375s;left:50.0000000004%;top:84.9999999974%;transform:rotate(180deg)}.la-line-spin-clockwise-fade-rotating>div:nth-child(6){-webkit-animation-delay:-.25s;animation-delay:-.25s;left:25.2512627193%;top:74.7487369862%;transform:rotate(225deg)}.la-line-spin-clockwise-fade-rotating>div:nth-child(7){-webkit-animation-delay:-.125s;animation-delay:-.125s;left:15.0000039834%;top:49.9999806189%;transform:rotate(270deg)}.la-line-spin-clockwise-fade-rotating>div:nth-child(8){-webkit-animation-delay:0s;animation-delay:0s;left:25.2513989292%;top:25.2506949798%;transform:rotate(315deg)}.la-line-spin-clockwise-fade-rotating.la-sm{height:16px;width:16px}.la-line-spin-clockwise-fade-rotating.la-sm>div{height:4px;margin-left:0;margin-top:-2px;width:1px}.la-line-spin-clockwise-fade-rotating.la-2x{height:64px;width:64px}.la-line-spin-clockwise-fade-rotating.la-2x>div{height:20px;margin-left:-2px;margin-top:-10px;width:4px}.la-line-spin-clockwise-fade-rotating.la-3x{height:96px;width:96px}.la-line-spin-clockwise-fade-rotating.la-3x>div{height:30px;margin-left:-3px;margin-top:-15px;width:6px}@-webkit-keyframes line-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@keyframes line-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-1turn)}}@-webkit-keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}to{opacity:1}}.la-line-spin-clockwise-fade,.la-line-spin-clockwise-fade>div{box-sizing:border-box;position:relative}.la-line-spin-clockwise-fade{color:#fff;display:block;font-size:0}.la-line-spin-clockwise-fade.la-dark{color:#333}.la-line-spin-clockwise-fade>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-spin-clockwise-fade{height:32px;width:32px}.la-line-spin-clockwise-fade>div{-webkit-animation:line-spin-clockwise-fade 1s ease-in-out infinite;animation:line-spin-clockwise-fade 1s ease-in-out infinite;border-radius:0;height:10px;margin:-5px 2px 2px -1px;position:absolute;width:2px}.la-line-spin-clockwise-fade>div:first-child{-webkit-animation-delay:-.875s;animation-delay:-.875s;left:50%;top:15%;transform:rotate(0deg)}.la-line-spin-clockwise-fade>div:nth-child(2){-webkit-animation-delay:-.75s;animation-delay:-.75s;left:74.7487373415%;top:25.2512626585%;transform:rotate(45deg)}.la-line-spin-clockwise-fade>div:nth-child(3){-webkit-animation-delay:-.625s;animation-delay:-.625s;left:85%;top:50%;transform:rotate(90deg)}.la-line-spin-clockwise-fade>div:nth-child(4){-webkit-animation-delay:-.5s;animation-delay:-.5s;left:74.7487373415%;top:74.7487373415%;transform:rotate(135deg)}.la-line-spin-clockwise-fade>div:nth-child(5){-webkit-animation-delay:-.375s;animation-delay:-.375s;left:50.0000000004%;top:84.9999999974%;transform:rotate(180deg)}.la-line-spin-clockwise-fade>div:nth-child(6){-webkit-animation-delay:-.25s;animation-delay:-.25s;left:25.2512627193%;top:74.7487369862%;transform:rotate(225deg)}.la-line-spin-clockwise-fade>div:nth-child(7){-webkit-animation-delay:-.125s;animation-delay:-.125s;left:15.0000039834%;top:49.9999806189%;transform:rotate(270deg)}.la-line-spin-clockwise-fade>div:nth-child(8){-webkit-animation-delay:0s;animation-delay:0s;left:25.2513989292%;top:25.2506949798%;transform:rotate(315deg)}.la-line-spin-clockwise-fade.la-sm{height:16px;width:16px}.la-line-spin-clockwise-fade.la-sm>div{height:4px;margin-left:0;margin-top:-2px;width:1px}.la-line-spin-clockwise-fade.la-2x{height:64px;width:64px}.la-line-spin-clockwise-fade.la-2x>div{height:20px;margin-left:-2px;margin-top:-10px;width:4px}.la-line-spin-clockwise-fade.la-3x{height:96px;width:96px}.la-line-spin-clockwise-fade.la-3x>div{height:30px;margin-left:-3px;margin-top:-15px;width:6px}@-webkit-keyframes line-spin-clockwise-fade{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-clockwise-fade{50%{opacity:.2}to{opacity:1}}.la-line-spin-fade-rotating,.la-line-spin-fade-rotating>div{box-sizing:border-box;position:relative}.la-line-spin-fade-rotating{color:#fff;display:block;font-size:0}.la-line-spin-fade-rotating.la-dark{color:#333}.la-line-spin-fade-rotating>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-spin-fade-rotating{-webkit-animation:ball-spin-fade-rotating-rotate 6s linear infinite;animation:ball-spin-fade-rotating-rotate 6s linear infinite;height:32px;width:32px}.la-line-spin-fade-rotating>div{-webkit-animation:line-spin-fade-rotating 1s ease-in-out infinite;animation:line-spin-fade-rotating 1s ease-in-out infinite;border-radius:0;height:10px;margin:-5px 2px 2px -1px;position:absolute;width:2px}.la-line-spin-fade-rotating>div:first-child{-webkit-animation-delay:-1.125s;animation-delay:-1.125s;left:50%;top:15%;transform:rotate(0deg)}.la-line-spin-fade-rotating>div:nth-child(2){-webkit-animation-delay:-1.25s;animation-delay:-1.25s;left:74.7487373415%;top:25.2512626585%;transform:rotate(45deg)}.la-line-spin-fade-rotating>div:nth-child(3){-webkit-animation-delay:-1.375s;animation-delay:-1.375s;left:85%;top:50%;transform:rotate(90deg)}.la-line-spin-fade-rotating>div:nth-child(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s;left:74.7487373415%;top:74.7487373415%;transform:rotate(135deg)}.la-line-spin-fade-rotating>div:nth-child(5){-webkit-animation-delay:-1.625s;animation-delay:-1.625s;left:50.0000000004%;top:84.9999999974%;transform:rotate(180deg)}.la-line-spin-fade-rotating>div:nth-child(6){-webkit-animation-delay:-1.75s;animation-delay:-1.75s;left:25.2512627193%;top:74.7487369862%;transform:rotate(225deg)}.la-line-spin-fade-rotating>div:nth-child(7){-webkit-animation-delay:-1.875s;animation-delay:-1.875s;left:15.0000039834%;top:49.9999806189%;transform:rotate(270deg)}.la-line-spin-fade-rotating>div:nth-child(8){-webkit-animation-delay:-2s;animation-delay:-2s;left:25.2513989292%;top:25.2506949798%;transform:rotate(315deg)}.la-line-spin-fade-rotating.la-sm{height:16px;width:16px}.la-line-spin-fade-rotating.la-sm>div{height:4px;margin-left:0;margin-top:-2px;width:1px}.la-line-spin-fade-rotating.la-2x{height:64px;width:64px}.la-line-spin-fade-rotating.la-2x>div{height:20px;margin-left:-2px;margin-top:-10px;width:4px}.la-line-spin-fade-rotating.la-3x{height:96px;width:96px}.la-line-spin-fade-rotating.la-3x>div{height:30px;margin-left:-3px;margin-top:-15px;width:6px}@-webkit-keyframes ball-spin-fade-rotating-rotate{to{transform:rotate(1turn)}}@keyframes ball-spin-fade-rotating-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes line-spin-fade-rotating{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-fade-rotating{50%{opacity:.2}to{opacity:1}}.la-line-spin-fade,.la-line-spin-fade>div{box-sizing:border-box;position:relative}.la-line-spin-fade{color:#fff;display:block;font-size:0}.la-line-spin-fade.la-dark{color:#333}.la-line-spin-fade>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-line-spin-fade{height:32px;width:32px}.la-line-spin-fade>div{-webkit-animation:line-spin-fade 1s ease-in-out infinite;animation:line-spin-fade 1s ease-in-out infinite;border-radius:0;height:10px;margin:-5px 2px 2px -1px;position:absolute;width:2px}.la-line-spin-fade>div:first-child{-webkit-animation-delay:-1.125s;animation-delay:-1.125s;left:50%;top:15%;transform:rotate(0deg)}.la-line-spin-fade>div:nth-child(2){-webkit-animation-delay:-1.25s;animation-delay:-1.25s;left:74.7487373415%;top:25.2512626585%;transform:rotate(45deg)}.la-line-spin-fade>div:nth-child(3){-webkit-animation-delay:-1.375s;animation-delay:-1.375s;left:85%;top:50%;transform:rotate(90deg)}.la-line-spin-fade>div:nth-child(4){-webkit-animation-delay:-1.5s;animation-delay:-1.5s;left:74.7487373415%;top:74.7487373415%;transform:rotate(135deg)}.la-line-spin-fade>div:nth-child(5){-webkit-animation-delay:-1.625s;animation-delay:-1.625s;left:50.0000000004%;top:84.9999999974%;transform:rotate(180deg)}.la-line-spin-fade>div:nth-child(6){-webkit-animation-delay:-1.75s;animation-delay:-1.75s;left:25.2512627193%;top:74.7487369862%;transform:rotate(225deg)}.la-line-spin-fade>div:nth-child(7){-webkit-animation-delay:-1.875s;animation-delay:-1.875s;left:15.0000039834%;top:49.9999806189%;transform:rotate(270deg)}.la-line-spin-fade>div:nth-child(8){-webkit-animation-delay:-2s;animation-delay:-2s;left:25.2513989292%;top:25.2506949798%;transform:rotate(315deg)}.la-line-spin-fade.la-sm{height:16px;width:16px}.la-line-spin-fade.la-sm>div{height:4px;margin-left:0;margin-top:-2px;width:1px}.la-line-spin-fade.la-2x{height:64px;width:64px}.la-line-spin-fade.la-2x>div{height:20px;margin-left:-2px;margin-top:-10px;width:4px}.la-line-spin-fade.la-3x{height:96px;width:96px}.la-line-spin-fade.la-3x>div{height:30px;margin-left:-3px;margin-top:-15px;width:6px}@-webkit-keyframes line-spin-fade{50%{opacity:.2}to{opacity:1}}@keyframes line-spin-fade{50%{opacity:.2}to{opacity:1}}.la-pacman,.la-pacman>div{box-sizing:border-box;position:relative}.la-pacman{color:#fff;display:block;font-size:0}.la-pacman.la-dark{color:#333}.la-pacman>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-pacman{height:32px;width:32px}.la-pacman>div:first-child,.la-pacman>div:nth-child(2){-webkit-animation:pacman-rotate-half-up .5s 0s infinite;animation:pacman-rotate-half-up .5s 0s infinite;background:transparent;border-radius:100%;border-right:solid transparent;border-style:solid;border-width:16px;height:0;position:absolute;width:0}.la-pacman>div:nth-child(2){-webkit-animation-name:pacman-rotate-half-down;animation-name:pacman-rotate-half-down;top:0}.la-pacman>div:nth-child(3),.la-pacman>div:nth-child(4),.la-pacman>div:nth-child(5),.la-pacman>div:nth-child(6){-webkit-animation:pacman-balls 2s linear 0s infinite;animation:pacman-balls 2s linear 0s infinite;border-radius:100%;height:8px;left:200%;opacity:0;position:absolute;top:50%;width:8px}.la-pacman>div:nth-child(3){-webkit-animation-delay:-1.44s;animation-delay:-1.44s}.la-pacman>div:nth-child(4){-webkit-animation-delay:-1.94s;animation-delay:-1.94s}.la-pacman>div:nth-child(5){-webkit-animation-delay:-2.44s;animation-delay:-2.44s}.la-pacman>div:nth-child(6){-webkit-animation-delay:-2.94s;animation-delay:-2.94s}.la-pacman.la-sm{height:16px;width:16px}.la-pacman.la-sm>div:first-child,.la-pacman.la-sm>div:nth-child(2){border-width:8px;position:absolute}.la-pacman.la-sm>div:nth-child(2){top:0}.la-pacman.la-sm>div:nth-child(3),.la-pacman.la-sm>div:nth-child(4),.la-pacman.la-sm>div:nth-child(5),.la-pacman.la-sm>div:nth-child(6){height:4px;width:4px}.la-pacman.la-2x{height:64px;width:64px}.la-pacman.la-2x>div:first-child,.la-pacman.la-2x>div:nth-child(2){border-width:32px;position:absolute}.la-pacman.la-2x>div:nth-child(2){top:0}.la-pacman.la-2x>div:nth-child(3),.la-pacman.la-2x>div:nth-child(4),.la-pacman.la-2x>div:nth-child(5),.la-pacman.la-2x>div:nth-child(6){height:16px;width:16px}.la-pacman.la-3x{height:96px;width:96px}.la-pacman.la-3x>div:first-child,.la-pacman.la-3x>div:nth-child(2){border-width:48px;position:absolute}.la-pacman.la-3x>div:nth-child(2){top:0}.la-pacman.la-3x>div:nth-child(3),.la-pacman.la-3x>div:nth-child(4),.la-pacman.la-3x>div:nth-child(5),.la-pacman.la-3x>div:nth-child(6){height:24px;width:24px}@-webkit-keyframes pacman-rotate-half-up{0%,to{transform:rotate(270deg)}50%{transform:rotate(1turn)}}@keyframes pacman-rotate-half-up{0%,to{transform:rotate(270deg)}50%{transform:rotate(1turn)}}@-webkit-keyframes pacman-rotate-half-down{0%,to{transform:rotate(90deg)}50%{transform:rotate(0deg)}}@keyframes pacman-rotate-half-down{0%,to{transform:rotate(90deg)}50%{transform:rotate(0deg)}}@-webkit-keyframes pacman-balls{0%{left:200%;opacity:0;transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}to{left:0;transform:translateY(-50%)}}@keyframes pacman-balls{0%{left:200%;opacity:0;transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}to{left:0;transform:translateY(-50%)}}.la-square-jelly-box,.la-square-jelly-box>div{box-sizing:border-box;position:relative}.la-square-jelly-box{color:#fff;display:block;font-size:0}.la-square-jelly-box.la-dark{color:#333}.la-square-jelly-box>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-square-jelly-box{height:32px;width:32px}.la-square-jelly-box>div:first-child,.la-square-jelly-box>div:nth-child(2){left:0;position:absolute;width:100%}.la-square-jelly-box>div:first-child{-webkit-animation:square-jelly-box-animate .6s linear -.1s infinite;animation:square-jelly-box-animate .6s linear -.1s infinite;border-radius:10%;height:100%;top:-25%;z-index:1}.la-square-jelly-box>div:nth-child(2){-webkit-animation:square-jelly-box-shadow .6s linear -.1s infinite;animation:square-jelly-box-shadow .6s linear -.1s infinite;background:#000;border-radius:50%;bottom:-9%;height:10%;opacity:.2}.la-square-jelly-box.la-sm{height:16px;width:16px}.la-square-jelly-box.la-2x{height:64px;width:64px}.la-square-jelly-box.la-3x{height:96px;width:96px}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}@keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}.la-square-loader,.la-square-loader>div{box-sizing:border-box;position:relative}.la-square-loader{color:#fff;display:block;font-size:0}.la-square-loader.la-dark{color:#333}.la-square-loader>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-square-loader{height:32px;width:32px}.la-square-loader>div{-webkit-animation:square-loader 2s ease infinite;animation:square-loader 2s ease infinite;background:transparent;border-radius:0;border-width:2px;height:100%;width:100%}.la-square-loader>div:after{-webkit-animation:square-loader-inner 2s ease-in infinite;animation:square-loader-inner 2s ease-in infinite;background-color:currentColor;content:\"\";display:inline-block;vertical-align:top;width:100%}.la-square-loader.la-sm{height:16px;width:16px}.la-square-loader.la-sm>div{border-width:1px}.la-square-loader.la-2x{height:64px;width:64px}.la-square-loader.la-2x>div{border-width:4px}.la-square-loader.la-3x{height:96px;width:96px}.la-square-loader.la-3x>div{border-width:6px}@-webkit-keyframes square-loader{0%{transform:rotate(0deg)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@keyframes square-loader{0%{transform:rotate(0deg)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@-webkit-keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}@keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}.la-square-spin,.la-square-spin>div{box-sizing:border-box;position:relative}.la-square-spin{color:#fff;display:block;font-size:0}.la-square-spin.la-dark{color:#333}.la-square-spin>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-square-spin{height:32px;width:32px}.la-square-spin>div{-webkit-animation:square-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;animation:square-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;border-radius:0;height:100%;width:100%}.la-square-spin.la-sm{height:16px;width:16px}.la-square-spin.la-2x{height:64px;width:64px}.la-square-spin.la-3x{height:96px;width:96px}@-webkit-keyframes square-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}@keyframes square-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}.la-timer,.la-timer>div{box-sizing:border-box;position:relative}.la-timer{color:#fff;display:block;font-size:0}.la-timer.la-dark{color:#333}.la-timer>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-timer,.la-timer>div{height:32px;width:32px}.la-timer>div{background:transparent;border-radius:100%;border-width:2px}.la-timer>div:after,.la-timer>div:before{-webkit-animation:timer-loader 1.25s linear infinite;-webkit-animation-delay:-625ms;animation:timer-loader 1.25s linear infinite;animation-delay:-625ms;background:currentColor;border-radius:2px;content:\"\";display:block;left:14px;margin-left:-1px;margin-top:-1px;position:absolute;top:14px;transform-origin:1px 1px 0;width:2px}.la-timer>div:before{height:12px}.la-timer>div:after{-webkit-animation-delay:-7.5s;-webkit-animation-duration:15s;animation-delay:-7.5s;animation-duration:15s;height:8px}.la-timer.la-sm,.la-timer.la-sm>div{height:16px;width:16px}.la-timer.la-sm>div{border-width:1px}.la-timer.la-sm>div:after,.la-timer.la-sm>div:before{border-radius:1px;left:7px;margin-left:-.5px;margin-top:-.5px;top:7px;transform-origin:.5px .5px 0;width:1px}.la-timer.la-sm>div:before{height:6px}.la-timer.la-sm>div:after{height:4px}.la-timer.la-2x,.la-timer.la-2x>div{height:64px;width:64px}.la-timer.la-2x>div{border-width:4px}.la-timer.la-2x>div:after,.la-timer.la-2x>div:before{border-radius:4px;left:28px;margin-left:-2px;margin-top:-2px;top:28px;transform-origin:2px 2px 0;width:4px}.la-timer.la-2x>div:before{height:24px}.la-timer.la-2x>div:after{height:16px}.la-timer.la-3x,.la-timer.la-3x>div{height:96px;width:96px}.la-timer.la-3x>div{border-width:6px}.la-timer.la-3x>div:after,.la-timer.la-3x>div:before{border-radius:6px;left:42px;margin-left:-3px;margin-top:-3px;top:42px;transform-origin:3px 3px 0;width:6px}.la-timer.la-3x>div:before{height:36px}.la-timer.la-3x>div:after{height:24px}@-webkit-keyframes timer-loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes timer-loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.la-triangle-skew-spin,.la-triangle-skew-spin>div{box-sizing:border-box;position:relative}.la-triangle-skew-spin{color:#fff;display:block;font-size:0}.la-triangle-skew-spin.la-dark{color:#333}.la-triangle-skew-spin>div{background-color:currentColor;border:0 solid;display:inline-block;float:none}.la-triangle-skew-spin{height:16px;width:32px}.la-triangle-skew-spin>div{-webkit-animation:triangle-skew-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;animation:triangle-skew-spin 3s cubic-bezier(.09,.57,.49,.9) 0s infinite;background:transparent;border-color:currentcolor transparent;border-left:none;border-right:none;border-style:solid;border-width:0 16px 16px;height:0;width:0}.la-triangle-skew-spin.la-sm{height:8px;width:16px}.la-triangle-skew-spin.la-sm>div{border-width:0 8px 8px}.la-triangle-skew-spin.la-2x{height:32px;width:64px}.la-triangle-skew-spin.la-2x>div{border-width:0 32px 32px}.la-triangle-skew-spin.la-3x{height:48px;width:96px}.la-triangle-skew-spin.la-3x>div{border-width:0 48px 48px}@-webkit-keyframes triangle-skew-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}@keyframes triangle-skew-spin{0%{transform:perspective(100px) rotateX(0) rotateY(0)}25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}to{transform:perspective(100px) rotateX(0) rotateY(1turn)}}.overlay{height:100%;left:0;position:fixed;top:0;width:100%}.overlay>div:not(.loading-text){left:50%;margin:0;position:absolute;top:50%;transform:translate(-50%,-50%)}.loading-text{left:50%;position:absolute;top:60%;transform:translate(-50%,-60%)}"]
          }]
        }], function () {
          return [{
            type: NgxSpinnerService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          bdColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fullScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var SafeHtmlPipe = /*#__PURE__*/function () {
        function SafeHtmlPipe(_sanitizer) {
          _classCallCheck2(this, SafeHtmlPipe);

          this._sanitizer = _sanitizer;
        }

        _createClass2(SafeHtmlPipe, [{
          key: "transform",
          value: function transform(v) {
            if (v) {
              return this._sanitizer.bypassSecurityTrustHtml(v);
            }
          }
        }]);

        return SafeHtmlPipe;
      }();

      SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
        return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]));
      };

      SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "safeHtml",
        type: SafeHtmlPipe,
        pure: true
      });

      SafeHtmlPipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'safeHtml'
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }];
        }, null);
      })();

      var NgxSpinnerModule = function NgxSpinnerModule() {
        _classCallCheck2(this, NgxSpinnerModule);
      };

      NgxSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxSpinnerModule
      });
      NgxSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgxSpinnerModule_Factory(t) {
          return new (t || NgxSpinnerModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxSpinnerModule, {
          declarations: function declarations() {
            return [NgxSpinnerComponent, SafeHtmlPipe];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
          },
          exports: function exports() {
            return [NgxSpinnerComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            declarations: [NgxSpinnerComponent, SafeHtmlPipe],
            exports: [NgxSpinnerComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-spinner
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-spinner.js.map

      /***/

    },

    /***/
    "PSD3":
    /*!**********************************************************!*\
      !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function PSD3(module, exports, __webpack_require__) {
      /*!
      * sweetalert2 v10.15.3
      * Released under the MIT License.
      */
      (function (global, factory) {
        true ? module.exports = factory() : undefined;
      })(this, function () {
        'use strict';

        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _extends() {
          _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];

              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }

            return target;
          };

          return _extends.apply(this, arguments);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;

          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }

        function _construct(Parent, args, Class) {
          if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct;
          } else {
            _construct = function _construct(Parent, args, Class) {
              var a = [null];
              a.push.apply(a, args);
              var Constructor = Function.bind.apply(Parent, a);
              var instance = new Constructor();
              if (Class) _setPrototypeOf(instance, Class.prototype);
              return instance;
            };
          }

          return _construct.apply(null, arguments);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();

          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
                result;

            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;

              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
          };
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }

          return object;
        }

        function _get(target, property, receiver) {
          if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);

              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);

              if (desc.get) {
                return desc.get.call(receiver);
              }

              return desc.value;
            };
          }

          return _get(target, property, receiver || target);
        }

        var consolePrefix = 'SweetAlert2:';
        /**
         * Filter the unique values into a new array
         * @param arr
         */

        var uniqueArray = function uniqueArray(arr) {
          var result = [];

          for (var i = 0; i < arr.length; i++) {
            if (result.indexOf(arr[i]) === -1) {
              result.push(arr[i]);
            }
          }

          return result;
        };
        /**
         * Capitalize the first letter of a string
         * @param str
         */


        var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        };
        /**
         * Returns the array of object values (Object.values isn't supported in IE11)
         * @param obj
         */


        var objectValues = function objectValues(obj) {
          return Object.keys(obj).map(function (key) {
            return obj[key];
          });
        };
        /**
         * Convert NodeList to Array
         * @param nodeList
         */


        var toArray = function toArray(nodeList) {
          return Array.prototype.slice.call(nodeList);
        };
        /**
         * Standardise console warnings
         * @param message
         */


        var warn = function warn(message) {
          console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
        };
        /**
         * Standardise console errors
         * @param message
         */


        var error = function error(message) {
          console.error("".concat(consolePrefix, " ").concat(message));
        };
        /**
         * Private global state for `warnOnce`
         * @type {Array}
         * @private
         */


        var previousWarnOnceMessages = [];
        /**
         * Show a console warning, but only if it hasn't already been shown
         * @param message
         */

        var warnOnce = function warnOnce(message) {
          if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
            previousWarnOnceMessages.push(message);
            warn(message);
          }
        };
        /**
         * Show a one-time console warning about deprecated params/methods
         */


        var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
          warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
        };
        /**
         * If `arg` is a function, call it (with no arguments or context) and return the result.
         * Otherwise, just pass the value through
         * @param arg
         */


        var callIfFunction = function callIfFunction(arg) {
          return typeof arg === 'function' ? arg() : arg;
        };

        var hasToPromiseFn = function hasToPromiseFn(arg) {
          return arg && typeof arg.toPromise === 'function';
        };

        var asPromise = function asPromise(arg) {
          return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
        };

        var isPromise = function isPromise(arg) {
          return arg && Promise.resolve(arg) === arg;
        };

        var DismissReason = Object.freeze({
          cancel: 'cancel',
          backdrop: 'backdrop',
          close: 'close',
          esc: 'esc',
          timer: 'timer'
        });

        var isJqueryElement = function isJqueryElement(elem) {
          return _typeof(elem) === 'object' && elem.jquery;
        };

        var isElement = function isElement(elem) {
          return elem instanceof Element || isJqueryElement(elem);
        };

        var argsToParams = function argsToParams(args) {
          var params = {};

          if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
            _extends(params, args[0]);
          } else {
            ['title', 'html', 'icon'].forEach(function (name, index) {
              var arg = args[index];

              if (typeof arg === 'string' || isElement(arg)) {
                params[name] = arg;
              } else if (arg !== undefined) {
                error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
              }
            });
          }

          return params;
        };

        var swalPrefix = 'swal2-';

        var prefix = function prefix(items) {
          var result = {};

          for (var i in items) {
            result[items[i]] = swalPrefix + items[i];
          }

          return result;
        };

        var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
        var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

        var getContainer = function getContainer() {
          return document.body.querySelector(".".concat(swalClasses.container));
        };

        var elementBySelector = function elementBySelector(selectorString) {
          var container = getContainer();
          return container ? container.querySelector(selectorString) : null;
        };

        var elementByClass = function elementByClass(className) {
          return elementBySelector(".".concat(className));
        };

        var getPopup = function getPopup() {
          return elementByClass(swalClasses.popup);
        };

        var getIcons = function getIcons() {
          var popup = getPopup();
          return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
        };

        var getIcon = function getIcon() {
          var visibleIcon = getIcons().filter(function (icon) {
            return icon.style.display !== 'none';
          });
          return visibleIcon.length ? visibleIcon[0] : null;
        };

        var getTitle = function getTitle() {
          return elementByClass(swalClasses.title);
        };

        var getContent = function getContent() {
          return elementByClass(swalClasses.content);
        };

        var getHtmlContainer = function getHtmlContainer() {
          return elementByClass(swalClasses['html-container']);
        };

        var getImage = function getImage() {
          return elementByClass(swalClasses.image);
        };

        var getProgressSteps = function getProgressSteps() {
          return elementByClass(swalClasses['progress-steps']);
        };

        var getValidationMessage = function getValidationMessage() {
          return elementByClass(swalClasses['validation-message']);
        };

        var getConfirmButton = function getConfirmButton() {
          return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
        };

        var getDenyButton = function getDenyButton() {
          return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
        };

        var getInputLabel = function getInputLabel() {
          return elementByClass(swalClasses['input-label']);
        };

        var getLoader = function getLoader() {
          return elementBySelector(".".concat(swalClasses.loader));
        };

        var getCancelButton = function getCancelButton() {
          return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
        };

        var getActions = function getActions() {
          return elementByClass(swalClasses.actions);
        };

        var getHeader = function getHeader() {
          return elementByClass(swalClasses.header);
        };

        var getFooter = function getFooter() {
          return elementByClass(swalClasses.footer);
        };

        var getTimerProgressBar = function getTimerProgressBar() {
          return elementByClass(swalClasses['timer-progress-bar']);
        };

        var getCloseButton = function getCloseButton() {
          return elementByClass(swalClasses.close);
        }; // https://github.com/jkup/focusable/blob/master/index.js


        var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";

        var getFocusableElements = function getFocusableElements() {
          var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
          .sort(function (a, b) {
            a = parseInt(a.getAttribute('tabindex'));
            b = parseInt(b.getAttribute('tabindex'));

            if (a > b) {
              return 1;
            } else if (a < b) {
              return -1;
            }

            return 0;
          });
          var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
            return el.getAttribute('tabindex') !== '-1';
          });
          return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
            return isVisible(el);
          });
        };

        var isModal = function isModal() {
          return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
        };

        var isToast = function isToast() {
          return document.body.classList.contains(swalClasses['toast-shown']);
        };

        var isLoading = function isLoading() {
          return getPopup().hasAttribute('data-loading');
        };

        var states = {
          previousBodyPadding: null
        };

        var setInnerHtml = function setInnerHtml(elem, html) {
          // #1926
          elem.textContent = '';

          if (html) {
            var parser = new DOMParser();
            var parsed = parser.parseFromString(html, "text/html");
            toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
              elem.appendChild(child);
            });
            toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
              elem.appendChild(child);
            });
          }
        };

        var hasClass = function hasClass(elem, className) {
          if (!className) {
            return false;
          }

          var classList = className.split(/\s+/);

          for (var i = 0; i < classList.length; i++) {
            if (!elem.classList.contains(classList[i])) {
              return false;
            }
          }

          return true;
        };

        var removeCustomClasses = function removeCustomClasses(elem, params) {
          toArray(elem.classList).forEach(function (className) {
            if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
              elem.classList.remove(className);
            }
          });
        };

        var applyCustomClass = function applyCustomClass(elem, params, className) {
          removeCustomClasses(elem, params);

          if (params.customClass && params.customClass[className]) {
            if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
              return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
            }

            addClass(elem, params.customClass[className]);
          }
        };

        function getInput(content, inputType) {
          if (!inputType) {
            return null;
          }

          switch (inputType) {
            case 'select':
            case 'textarea':
            case 'file':
              return getChildByClass(content, swalClasses[inputType]);

            case 'checkbox':
              return content.querySelector(".".concat(swalClasses.checkbox, " input"));

            case 'radio':
              return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

            case 'range':
              return content.querySelector(".".concat(swalClasses.range, " input"));

            default:
              return getChildByClass(content, swalClasses.input);
          }
        }

        var focusInput = function focusInput(input) {
          input.focus(); // place cursor at end of text in text input

          if (input.type !== 'file') {
            // http://stackoverflow.com/a/2345915
            var val = input.value;
            input.value = '';
            input.value = val;
          }
        };

        var toggleClass = function toggleClass(target, classList, condition) {
          if (!target || !classList) {
            return;
          }

          if (typeof classList === 'string') {
            classList = classList.split(/\s+/).filter(Boolean);
          }

          classList.forEach(function (className) {
            if (target.forEach) {
              target.forEach(function (elem) {
                condition ? elem.classList.add(className) : elem.classList.remove(className);
              });
            } else {
              condition ? target.classList.add(className) : target.classList.remove(className);
            }
          });
        };

        var addClass = function addClass(target, classList) {
          toggleClass(target, classList, true);
        };

        var removeClass = function removeClass(target, classList) {
          toggleClass(target, classList, false);
        };

        var getChildByClass = function getChildByClass(elem, className) {
          for (var i = 0; i < elem.childNodes.length; i++) {
            if (hasClass(elem.childNodes[i], className)) {
              return elem.childNodes[i];
            }
          }
        };

        var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
          if (value === "".concat(parseInt(value))) {
            value = parseInt(value);
          }

          if (value || parseInt(value) === 0) {
            elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
          } else {
            elem.style.removeProperty(property);
          }
        };

        var show = function show(elem) {
          var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
          elem.style.display = display;
        };

        var hide = function hide(elem) {
          elem.style.display = 'none';
        };

        var setStyle = function setStyle(parent, selector, property, value) {
          var el = parent.querySelector(selector);

          if (el) {
            el.style[property] = value;
          }
        };

        var toggle = function toggle(elem, condition, display) {
          condition ? show(elem, display) : hide(elem);
        }; // borrowed from jquery $(elem).is(':visible') implementation


        var isVisible = function isVisible(elem) {
          return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
        };

        var allButtonsAreHidden = function allButtonsAreHidden() {
          return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
        };

        var isScrollable = function isScrollable(elem) {
          return !!(elem.scrollHeight > elem.clientHeight);
        }; // borrowed from https://stackoverflow.com/a/46352119


        var hasCssAnimation = function hasCssAnimation(elem) {
          var style = window.getComputedStyle(elem);
          var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
          var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
          return animDuration > 0 || transDuration > 0;
        };

        var contains = function contains(haystack, needle) {
          if (typeof haystack.contains === 'function') {
            return haystack.contains(needle);
          }
        };

        var animateTimerProgressBar = function animateTimerProgressBar(timer) {
          var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var timerProgressBar = getTimerProgressBar();

          if (isVisible(timerProgressBar)) {
            if (reset) {
              timerProgressBar.style.transition = 'none';
              timerProgressBar.style.width = '100%';
            }

            setTimeout(function () {
              timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
              timerProgressBar.style.width = '0%';
            }, 10);
          }
        };

        var stopTimerProgressBar = function stopTimerProgressBar() {
          var timerProgressBar = getTimerProgressBar();
          var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          timerProgressBar.style.removeProperty('transition');
          timerProgressBar.style.width = '100%';
          var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
          timerProgressBar.style.removeProperty('transition');
          timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
        }; // Detect Node env


        var isNodeEnv = function isNodeEnv() {
          return typeof window === 'undefined' || typeof document === 'undefined';
        };

        var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

        var resetOldContainer = function resetOldContainer() {
          var oldContainer = getContainer();

          if (!oldContainer) {
            return false;
          }

          oldContainer.parentNode.removeChild(oldContainer);
          removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
          return true;
        };

        var oldInputVal; // IE11 workaround, see #1109 for details

        var resetValidationMessage = function resetValidationMessage(e) {
          if (Swal.isVisible() && oldInputVal !== e.target.value) {
            Swal.resetValidationMessage();
          }

          oldInputVal = e.target.value;
        };

        var addInputChangeListeners = function addInputChangeListeners() {
          var content = getContent();
          var input = getChildByClass(content, swalClasses.input);
          var file = getChildByClass(content, swalClasses.file);
          var range = content.querySelector(".".concat(swalClasses.range, " input"));
          var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
          var select = getChildByClass(content, swalClasses.select);
          var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
          var textarea = getChildByClass(content, swalClasses.textarea);
          input.oninput = resetValidationMessage;
          file.onchange = resetValidationMessage;
          select.onchange = resetValidationMessage;
          checkbox.onchange = resetValidationMessage;
          textarea.oninput = resetValidationMessage;

          range.oninput = function (e) {
            resetValidationMessage(e);
            rangeOutput.value = range.value;
          };

          range.onchange = function (e) {
            resetValidationMessage(e);
            range.nextSibling.value = range.value;
          };
        };

        var getTarget = function getTarget(target) {
          return typeof target === 'string' ? document.querySelector(target) : target;
        };

        var setupAccessibility = function setupAccessibility(params) {
          var popup = getPopup();
          popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
          popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

          if (!params.toast) {
            popup.setAttribute('aria-modal', 'true');
          }
        };

        var setupRTL = function setupRTL(targetElement) {
          if (window.getComputedStyle(targetElement).direction === 'rtl') {
            addClass(getContainer(), swalClasses.rtl);
          }
        };
        /*
         * Add modal + backdrop to DOM
         */


        var init = function init(params) {
          // Clean up the old popup container if it exists
          var oldContainerExisted = resetOldContainer();
          /* istanbul ignore if */

          if (isNodeEnv()) {
            error('SweetAlert2 requires document to initialize');
            return;
          }

          var container = document.createElement('div');
          container.className = swalClasses.container;

          if (oldContainerExisted) {
            addClass(container, swalClasses['no-transition']);
          }

          setInnerHtml(container, sweetHTML);
          var targetElement = getTarget(params.target);
          targetElement.appendChild(container);
          setupAccessibility(params);
          setupRTL(targetElement);
          addInputChangeListeners();
        };

        var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
          // DOM element
          if (param instanceof HTMLElement) {
            target.appendChild(param); // Object
          } else if (_typeof(param) === 'object') {
            handleObject(param, target); // Plain string
          } else if (param) {
            setInnerHtml(target, param);
          }
        };

        var handleObject = function handleObject(param, target) {
          // JQuery element(s)
          if (param.jquery) {
            handleJqueryElem(target, param); // For other objects use their string representation
          } else {
            setInnerHtml(target, param.toString());
          }
        };

        var handleJqueryElem = function handleJqueryElem(target, elem) {
          target.textContent = '';

          if (0 in elem) {
            for (var i = 0; (i in elem); i++) {
              target.appendChild(elem[i].cloneNode(true));
            }
          } else {
            target.appendChild(elem.cloneNode(true));
          }
        };

        var animationEndEvent = function () {
          // Prevent run in Node env

          /* istanbul ignore if */
          if (isNodeEnv()) {
            return false;
          }

          var testEl = document.createElement('div');
          var transEndEventNames = {
            WebkitAnimation: 'webkitAnimationEnd',
            OAnimation: 'oAnimationEnd oanimationend',
            animation: 'animationend'
          };

          for (var i in transEndEventNames) {
            if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
              return transEndEventNames[i];
            }
          }

          return false;
        }(); // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js


        var measureScrollbar = function measureScrollbar() {
          var scrollDiv = document.createElement('div');
          scrollDiv.className = swalClasses['scrollbar-measure'];
          document.body.appendChild(scrollDiv);
          var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        };

        var renderActions = function renderActions(instance, params) {
          var actions = getActions();
          var loader = getLoader();
          var confirmButton = getConfirmButton();
          var denyButton = getDenyButton();
          var cancelButton = getCancelButton(); // Actions (buttons) wrapper

          if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
            hide(actions);
          } // Custom class


          applyCustomClass(actions, params, 'actions'); // Render buttons

          renderButton(confirmButton, 'confirm', params);
          renderButton(denyButton, 'deny', params);
          renderButton(cancelButton, 'cancel', params);
          handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

          if (params.reverseButtons) {
            actions.insertBefore(cancelButton, loader);
            actions.insertBefore(denyButton, loader);
            actions.insertBefore(confirmButton, loader);
          } // Loader


          setInnerHtml(loader, params.loaderHtml);
          applyCustomClass(loader, params, 'loader');
        };

        function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
          if (!params.buttonsStyling) {
            return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
          }

          addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

          if (params.confirmButtonColor) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
          }

          if (params.denyButtonColor) {
            denyButton.style.backgroundColor = params.denyButtonColor;
          }

          if (params.cancelButtonColor) {
            cancelButton.style.backgroundColor = params.cancelButtonColor;
          }
        }

        function renderButton(button, buttonType, params) {
          toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
          setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

          button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
          // Add buttons custom classes

          button.className = swalClasses[buttonType];
          applyCustomClass(button, params, "".concat(buttonType, "Button"));
          addClass(button, params["".concat(buttonType, "ButtonClass")]);
        }

        function handleBackdropParam(container, backdrop) {
          if (typeof backdrop === 'string') {
            container.style.background = backdrop;
          } else if (!backdrop) {
            addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
          }
        }

        function handlePositionParam(container, position) {
          if (position in swalClasses) {
            addClass(container, swalClasses[position]);
          } else {
            warn('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
          }
        }

        function handleGrowParam(container, grow) {
          if (grow && typeof grow === 'string') {
            var growClass = "grow-".concat(grow);

            if (growClass in swalClasses) {
              addClass(container, swalClasses[growClass]);
            }
          }
        }

        var renderContainer = function renderContainer(instance, params) {
          var container = getContainer();

          if (!container) {
            return;
          }

          handleBackdropParam(container, params.backdrop);

          if (!params.backdrop && params.allowOutsideClick) {
            warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
          }

          handlePositionParam(container, params.position);
          handleGrowParam(container, params.grow); // Custom class

          applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

          var queueStep = document.body.getAttribute('data-swal2-queue-step');

          if (queueStep) {
            container.setAttribute('data-queue-step', queueStep);
            document.body.removeAttribute('data-swal2-queue-step');
          }
        };
        /**
         * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
         * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
         * This is the approach that Babel will probably take to implement private methods/fields
         *   https://github.com/tc39/proposal-private-methods
         *   https://github.com/babel/babel/pull/7555
         * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
         *   then we can use that language feature.
         */


        var privateProps = {
          promise: new WeakMap(),
          innerParams: new WeakMap(),
          domCache: new WeakMap()
        };
        var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

        var renderInput = function renderInput(instance, params) {
          var content = getContent();
          var innerParams = privateProps.innerParams.get(instance);
          var rerender = !innerParams || params.input !== innerParams.input;
          inputTypes.forEach(function (inputType) {
            var inputClass = swalClasses[inputType];
            var inputContainer = getChildByClass(content, inputClass); // set attributes

            setAttributes(inputType, params.inputAttributes); // set class

            inputContainer.className = inputClass;

            if (rerender) {
              hide(inputContainer);
            }
          });

          if (params.input) {
            if (rerender) {
              showInput(params);
            } // set custom class


            setCustomClass(params);
          }
        };

        var showInput = function showInput(params) {
          if (!renderInputType[params.input]) {
            return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
          }

          var inputContainer = getInputContainer(params.input);
          var input = renderInputType[params.input](inputContainer, params);
          show(input); // input autofocus

          setTimeout(function () {
            focusInput(input);
          });
        };

        var removeAttributes = function removeAttributes(input) {
          for (var i = 0; i < input.attributes.length; i++) {
            var attrName = input.attributes[i].name;

            if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
              input.removeAttribute(attrName);
            }
          }
        };

        var setAttributes = function setAttributes(inputType, inputAttributes) {
          var input = getInput(getContent(), inputType);

          if (!input) {
            return;
          }

          removeAttributes(input);

          for (var attr in inputAttributes) {
            // Do not set a placeholder for <input type="range">
            // it'll crash Edge, #1298
            if (inputType === 'range' && attr === 'placeholder') {
              continue;
            }

            input.setAttribute(attr, inputAttributes[attr]);
          }
        };

        var setCustomClass = function setCustomClass(params) {
          var inputContainer = getInputContainer(params.input);

          if (params.customClass) {
            addClass(inputContainer, params.customClass.input);
          }
        };

        var setInputPlaceholder = function setInputPlaceholder(input, params) {
          if (!input.placeholder || params.inputPlaceholder) {
            input.placeholder = params.inputPlaceholder;
          }
        };

        var setInputLabel = function setInputLabel(input, prependTo, params) {
          if (params.inputLabel) {
            input.id = swalClasses.input;
            var label = document.createElement('label');
            var labelClass = swalClasses['input-label'];
            label.setAttribute('for', input.id);
            label.className = labelClass;
            addClass(label, params.customClass.inputLabel);
            label.innerText = params.inputLabel;
            prependTo.insertAdjacentElement('beforebegin', label);
          }
        };

        var getInputContainer = function getInputContainer(inputType) {
          var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
          return getChildByClass(getContent(), inputClass);
        };

        var renderInputType = {};

        renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
          if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
            input.value = params.inputValue;
          } else if (!isPromise(params.inputValue)) {
            warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
          }

          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          input.type = params.input;
          return input;
        };

        renderInputType.file = function (input, params) {
          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          return input;
        };

        renderInputType.range = function (range, params) {
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = params.inputValue;
          rangeInput.type = params.input;
          rangeOutput.value = params.inputValue;
          setInputLabel(rangeInput, range, params);
          return range;
        };

        renderInputType.select = function (select, params) {
          select.textContent = '';

          if (params.inputPlaceholder) {
            var placeholder = document.createElement('option');
            setInnerHtml(placeholder, params.inputPlaceholder);
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }

          setInputLabel(select, select, params);
          return select;
        };

        renderInputType.radio = function (radio) {
          radio.textContent = '';
          return radio;
        };

        renderInputType.checkbox = function (checkboxContainer, params) {
          var checkbox = getInput(getContent(), 'checkbox');
          checkbox.value = 1;
          checkbox.id = swalClasses.checkbox;
          checkbox.checked = Boolean(params.inputValue);
          var label = checkboxContainer.querySelector('span');
          setInnerHtml(label, params.inputPlaceholder);
          return checkboxContainer;
        };

        renderInputType.textarea = function (textarea, params) {
          textarea.value = params.inputValue;
          setInputPlaceholder(textarea, params);
          setInputLabel(textarea, textarea, params);

          var getPadding = function getPadding(el) {
            return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
          };

          if ('MutationObserver' in window) {
            // #1699
            var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

            var outputsize = function outputsize() {
              var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());

              if (contentWidth > initialPopupWidth) {
                getPopup().style.width = "".concat(contentWidth, "px");
              } else {
                getPopup().style.width = null;
              }
            };

            new MutationObserver(outputsize).observe(textarea, {
              attributes: true,
              attributeFilter: ['style']
            });
          }

          return textarea;
        };

        var renderContent = function renderContent(instance, params) {
          var htmlContainer = getHtmlContainer();
          applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

          if (params.html) {
            parseHtmlToContainer(params.html, htmlContainer);
            show(htmlContainer, 'block'); // Content as plain text
          } else if (params.text) {
            htmlContainer.textContent = params.text;
            show(htmlContainer, 'block'); // No content
          } else {
            hide(htmlContainer);
          }

          renderInput(instance, params); // Custom class

          applyCustomClass(getContent(), params, 'content');
        };

        var renderFooter = function renderFooter(instance, params) {
          var footer = getFooter();
          toggle(footer, params.footer);

          if (params.footer) {
            parseHtmlToContainer(params.footer, footer);
          } // Custom class


          applyCustomClass(footer, params, 'footer');
        };

        var renderCloseButton = function renderCloseButton(instance, params) {
          var closeButton = getCloseButton();
          setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

          applyCustomClass(closeButton, params, 'closeButton');
          toggle(closeButton, params.showCloseButton);
          closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
        };

        var renderIcon = function renderIcon(instance, params) {
          var innerParams = privateProps.innerParams.get(instance); // if the given icon already rendered, apply the styling without re-rendering the icon

          if (innerParams && params.icon === innerParams.icon && getIcon()) {
            applyStyles(getIcon(), params);
            return;
          }

          hideAllIcons();

          if (!params.icon) {
            return;
          }

          if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
            var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
            show(icon); // Custom or default content

            setContent(icon, params);
            applyStyles(icon, params); // Animate icon

            addClass(icon, params.showClass.icon);
          } else {
            error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
          }
        };

        var hideAllIcons = function hideAllIcons() {
          var icons = getIcons();

          for (var i = 0; i < icons.length; i++) {
            hide(icons[i]);
          }
        };

        var applyStyles = function applyStyles(icon, params) {
          // Icon color
          setColor(icon, params); // Success icon background color

          adjustSuccessIconBackgoundColor(); // Custom class

          applyCustomClass(icon, params, 'icon');
        }; // Adjust success icon background color to match the popup background color


        var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
          var popup = getPopup();
          var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
          var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

          for (var i = 0; i < successIconParts.length; i++) {
            successIconParts[i].style.backgroundColor = popupBackgroundColor;
          }
        };

        var setContent = function setContent(icon, params) {
          icon.textContent = '';

          if (params.iconHtml) {
            setInnerHtml(icon, iconContent(params.iconHtml));
          } else if (params.icon === 'success') {
            setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
          } else if (params.icon === 'error') {
            setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
          } else {
            var defaultIconHtml = {
              question: '?',
              warning: '!',
              info: 'i'
            };
            setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
          }
        };

        var setColor = function setColor(icon, params) {
          if (!params.iconColor) {
            return;
          }

          icon.style.color = params.iconColor;
          icon.style.borderColor = params.iconColor;

          for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
            var sel = _arr[_i];
            setStyle(icon, sel, 'backgroundColor', params.iconColor);
          }

          setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
        };

        var iconContent = function iconContent(content) {
          return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
        };

        var renderImage = function renderImage(instance, params) {
          var image = getImage();

          if (!params.imageUrl) {
            return hide(image);
          }

          show(image, ''); // Src, alt

          image.setAttribute('src', params.imageUrl);
          image.setAttribute('alt', params.imageAlt); // Width, height

          applyNumericalStyle(image, 'width', params.imageWidth);
          applyNumericalStyle(image, 'height', params.imageHeight); // Class

          image.className = swalClasses.image;
          applyCustomClass(image, params, 'image');
        };

        var currentSteps = [];
        /*
         * Global function for chaining sweetAlert popups
         */

        var queue = function queue(steps) {
          var Swal = this;
          currentSteps = steps;

          var resetAndResolve = function resetAndResolve(resolve, value) {
            currentSteps = [];
            resolve(value);
          };

          var queueResult = [];
          return new Promise(function (resolve) {
            (function step(i, callback) {
              if (i < currentSteps.length) {
                document.body.setAttribute('data-swal2-queue-step', i);
                Swal.fire(currentSteps[i]).then(function (result) {
                  if (typeof result.value !== 'undefined') {
                    queueResult.push(result.value);
                    step(i + 1, callback);
                  } else {
                    resetAndResolve(resolve, {
                      dismiss: result.dismiss
                    });
                  }
                });
              } else {
                resetAndResolve(resolve, {
                  value: queueResult
                });
              }
            })(0);
          });
        };
        /*
         * Global function for getting the index of current popup in queue
         */


        var getQueueStep = function getQueueStep() {
          return getContainer() && getContainer().getAttribute('data-queue-step');
        };
        /*
         * Global function for inserting a popup to the queue
         */


        var insertQueueStep = function insertQueueStep(step, index) {
          if (index && index < currentSteps.length) {
            return currentSteps.splice(index, 0, step);
          }

          return currentSteps.push(step);
        };
        /*
         * Global function for deleting a popup from the queue
         */


        var deleteQueueStep = function deleteQueueStep(index) {
          if (typeof currentSteps[index] !== 'undefined') {
            currentSteps.splice(index, 1);
          }
        };

        var createStepElement = function createStepElement(step) {
          var stepEl = document.createElement('li');
          addClass(stepEl, swalClasses['progress-step']);
          setInnerHtml(stepEl, step);
          return stepEl;
        };

        var createLineElement = function createLineElement(params) {
          var lineEl = document.createElement('li');
          addClass(lineEl, swalClasses['progress-step-line']);

          if (params.progressStepsDistance) {
            lineEl.style.width = params.progressStepsDistance;
          }

          return lineEl;
        };

        var renderProgressSteps = function renderProgressSteps(instance, params) {
          var progressStepsContainer = getProgressSteps();

          if (!params.progressSteps || params.progressSteps.length === 0) {
            return hide(progressStepsContainer);
          }

          show(progressStepsContainer);
          progressStepsContainer.textContent = '';
          var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

          if (currentProgressStep >= params.progressSteps.length) {
            warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
          }

          params.progressSteps.forEach(function (step, index) {
            var stepEl = createStepElement(step);
            progressStepsContainer.appendChild(stepEl);

            if (index === currentProgressStep) {
              addClass(stepEl, swalClasses['active-progress-step']);
            }

            if (index !== params.progressSteps.length - 1) {
              var lineEl = createLineElement(params);
              progressStepsContainer.appendChild(lineEl);
            }
          });
        };

        var renderTitle = function renderTitle(instance, params) {
          var title = getTitle();
          toggle(title, params.title || params.titleText);

          if (params.title) {
            parseHtmlToContainer(params.title, title);
          }

          if (params.titleText) {
            title.innerText = params.titleText;
          } // Custom class


          applyCustomClass(title, params, 'title');
        };

        var renderHeader = function renderHeader(instance, params) {
          var header = getHeader(); // Custom class

          applyCustomClass(header, params, 'header'); // Progress steps

          renderProgressSteps(instance, params); // Icon

          renderIcon(instance, params); // Image

          renderImage(instance, params); // Title

          renderTitle(instance, params); // Close button

          renderCloseButton(instance, params);
        };

        var renderPopup = function renderPopup(instance, params) {
          var container = getContainer();
          var popup = getPopup(); // Width

          if (params.toast) {
            // #2170
            applyNumericalStyle(container, 'width', params.width);
            popup.style.width = '100%';
          } else {
            applyNumericalStyle(popup, 'width', params.width);
          } // Padding


          applyNumericalStyle(popup, 'padding', params.padding); // Background

          if (params.background) {
            popup.style.background = params.background;
          } // Classes


          addClasses(popup, params);
        };

        var addClasses = function addClasses(popup, params) {
          // Default Class + showClass when updating Swal.update({})
          popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

          if (params.toast) {
            addClass([document.documentElement, document.body], swalClasses['toast-shown']);
            addClass(popup, swalClasses.toast);
          } else {
            addClass(popup, swalClasses.modal);
          } // Custom class


          applyCustomClass(popup, params, 'popup');

          if (typeof params.customClass === 'string') {
            addClass(popup, params.customClass);
          } // Icon class (#1842)


          if (params.icon) {
            addClass(popup, swalClasses["icon-".concat(params.icon)]);
          }
        };

        var render = function render(instance, params) {
          renderPopup(instance, params);
          renderContainer(instance, params);
          renderHeader(instance, params);
          renderContent(instance, params);
          renderActions(instance, params);
          renderFooter(instance, params);

          if (typeof params.didRender === 'function') {
            params.didRender(getPopup());
          } else if (typeof params.onRender === 'function') {
            params.onRender(getPopup()); // @deprecated
          }
        };
        /*
         * Global function to determine if SweetAlert2 popup is shown
         */


        var isVisible$1 = function isVisible$$1() {
          return isVisible(getPopup());
        };
        /*
         * Global function to click 'Confirm' button
         */


        var clickConfirm = function clickConfirm() {
          return getConfirmButton() && getConfirmButton().click();
        };
        /*
         * Global function to click 'Deny' button
         */


        var clickDeny = function clickDeny() {
          return getDenyButton() && getDenyButton().click();
        };
        /*
         * Global function to click 'Cancel' button
         */


        var clickCancel = function clickCancel() {
          return getCancelButton() && getCancelButton().click();
        };

        function fire() {
          var Swal = this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _construct(Swal, args);
        }
        /**
         * Returns an extended version of `Swal` containing `params` as defaults.
         * Useful for reusing Swal configuration.
         *
         * For example:
         *
         * Before:
         * const textPromptOptions = { input: 'text', showCancelButton: true }
         * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
         * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
         *
         * After:
         * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
         * const {value: firstName} = await TextPrompt('What is your first name?')
         * const {value: lastName} = await TextPrompt('What is your last name?')
         *
         * @param mixinParams
         */


        function mixin(mixinParams) {
          var MixinSwal = /*#__PURE__*/function (_this) {
            _inherits(MixinSwal, _this);

            var _super = _createSuper(MixinSwal);

            function MixinSwal() {
              _classCallCheck(this, MixinSwal);

              return _super.apply(this, arguments);
            }

            _createClass(MixinSwal, [{
              key: "_main",
              value: function _main(params, prevMixinParams) {
                return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, _extends({}, prevMixinParams, mixinParams));
              }
            }]);

            return MixinSwal;
          }(this);

          return MixinSwal;
        }
        /**
         * Shows loader (spinner), this is useful with AJAX requests.
         * By default the loader be shown instead of the "Confirm" button.
         */


        var showLoading = function showLoading(buttonToReplace) {
          var popup = getPopup();

          if (!popup) {
            Swal.fire();
          }

          popup = getPopup();
          var actions = getActions();
          var loader = getLoader();

          if (!buttonToReplace && isVisible(getConfirmButton())) {
            buttonToReplace = getConfirmButton();
          }

          show(actions);

          if (buttonToReplace) {
            hide(buttonToReplace);
            loader.setAttribute('data-button-to-replace', buttonToReplace.className);
          }

          loader.parentNode.insertBefore(loader, buttonToReplace);
          addClass([popup, actions], swalClasses.loading);
          show(loader);
          popup.setAttribute('data-loading', true);
          popup.setAttribute('aria-busy', true);
          popup.focus();
        };

        var RESTORE_FOCUS_TIMEOUT = 100;
        var globalState = {};

        var focusPreviousActiveElement = function focusPreviousActiveElement() {
          if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
            globalState.previousActiveElement.focus();
            globalState.previousActiveElement = null;
          } else if (document.body) {
            document.body.focus();
          }
        }; // Restore previous active (focused) element


        var restoreActiveElement = function restoreActiveElement() {
          return new Promise(function (resolve) {
            var x = window.scrollX;
            var y = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(function () {
              focusPreviousActiveElement();
              resolve();
            }, RESTORE_FOCUS_TIMEOUT); // issues/900

            /* istanbul ignore if */

            if (typeof x !== 'undefined' && typeof y !== 'undefined') {
              // IE doesn't have scrollX/scrollY support
              window.scrollTo(x, y);
            }
          });
        };
        /**
         * If `timer` parameter is set, returns number of milliseconds of timer remained.
         * Otherwise, returns undefined.
         */


        var getTimerLeft = function getTimerLeft() {
          return globalState.timeout && globalState.timeout.getTimerLeft();
        };
        /**
         * Stop timer. Returns number of milliseconds of timer remained.
         * If `timer` parameter isn't set, returns undefined.
         */


        var stopTimer = function stopTimer() {
          if (globalState.timeout) {
            stopTimerProgressBar();
            return globalState.timeout.stop();
          }
        };
        /**
         * Resume timer. Returns number of milliseconds of timer remained.
         * If `timer` parameter isn't set, returns undefined.
         */


        var resumeTimer = function resumeTimer() {
          if (globalState.timeout) {
            var remaining = globalState.timeout.start();
            animateTimerProgressBar(remaining);
            return remaining;
          }
        };
        /**
         * Resume timer. Returns number of milliseconds of timer remained.
         * If `timer` parameter isn't set, returns undefined.
         */


        var toggleTimer = function toggleTimer() {
          var timer = globalState.timeout;
          return timer && (timer.running ? stopTimer() : resumeTimer());
        };
        /**
         * Increase timer. Returns number of milliseconds of an updated timer.
         * If `timer` parameter isn't set, returns undefined.
         */


        var increaseTimer = function increaseTimer(n) {
          if (globalState.timeout) {
            var remaining = globalState.timeout.increase(n);
            animateTimerProgressBar(remaining, true);
            return remaining;
          }
        };
        /**
         * Check if timer is running. Returns true if timer is running
         * or false if timer is paused or stopped.
         * If `timer` parameter isn't set, returns undefined
         */


        var isTimerRunning = function isTimerRunning() {
          return globalState.timeout && globalState.timeout.isRunning();
        };

        var bodyClickListenerAdded = false;
        var clickHandlers = {};

        function bindClickHandler() {
          var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
          clickHandlers[attr] = this;

          if (!bodyClickListenerAdded) {
            document.body.addEventListener('click', bodyClickListener);
            bodyClickListenerAdded = true;
          }
        }

        var bodyClickListener = function bodyClickListener(event) {
          // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
          // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
          for (var el = event.target; el && el !== document; el = el.parentNode) {
            for (var attr in clickHandlers) {
              var template = el.getAttribute(attr);

              if (template) {
                clickHandlers[attr].fire({
                  template: template
                });
                return;
              }
            }
          }
        };

        var defaultParams = {
          title: '',
          titleText: '',
          text: '',
          html: '',
          footer: '',
          icon: undefined,
          iconColor: undefined,
          iconHtml: undefined,
          template: undefined,
          toast: false,
          animation: true,
          showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show'
          },
          hideClass: {
            popup: 'swal2-hide',
            backdrop: 'swal2-backdrop-hide',
            icon: 'swal2-icon-hide'
          },
          customClass: {},
          target: 'body',
          backdrop: true,
          heightAuto: true,
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
          stopKeydownPropagation: true,
          keydownListenerCapture: false,
          showConfirmButton: true,
          showDenyButton: false,
          showCancelButton: false,
          preConfirm: undefined,
          preDeny: undefined,
          confirmButtonText: 'OK',
          confirmButtonAriaLabel: '',
          confirmButtonColor: undefined,
          denyButtonText: 'No',
          denyButtonAriaLabel: '',
          denyButtonColor: undefined,
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: '',
          cancelButtonColor: undefined,
          buttonsStyling: true,
          reverseButtons: false,
          focusConfirm: true,
          focusDeny: false,
          focusCancel: false,
          showCloseButton: false,
          closeButtonHtml: '&times;',
          closeButtonAriaLabel: 'Close this dialog',
          loaderHtml: '',
          showLoaderOnConfirm: false,
          showLoaderOnDeny: false,
          imageUrl: undefined,
          imageWidth: undefined,
          imageHeight: undefined,
          imageAlt: '',
          timer: undefined,
          timerProgressBar: false,
          width: undefined,
          padding: undefined,
          background: undefined,
          input: undefined,
          inputPlaceholder: '',
          inputLabel: '',
          inputValue: '',
          inputOptions: {},
          inputAutoTrim: true,
          inputAttributes: {},
          inputValidator: undefined,
          returnInputValueOnDeny: false,
          validationMessage: undefined,
          grow: false,
          position: 'center',
          progressSteps: [],
          currentProgressStep: undefined,
          progressStepsDistance: undefined,
          onBeforeOpen: undefined,
          onOpen: undefined,
          willOpen: undefined,
          didOpen: undefined,
          onRender: undefined,
          didRender: undefined,
          onClose: undefined,
          onAfterClose: undefined,
          willClose: undefined,
          didClose: undefined,
          onDestroy: undefined,
          didDestroy: undefined,
          scrollbarPadding: true
        };
        var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
        var deprecatedParams = {
          animation: 'showClass" and "hideClass',
          onBeforeOpen: 'willOpen',
          onOpen: 'didOpen',
          onRender: 'didRender',
          onClose: 'willClose',
          onAfterClose: 'didClose',
          onDestroy: 'didDestroy'
        };
        var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
        /**
         * Is valid parameter
         * @param {String} paramName
         */

        var isValidParameter = function isValidParameter(paramName) {
          return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
        };
        /**
         * Is valid parameter for Swal.update() method
         * @param {String} paramName
         */


        var isUpdatableParameter = function isUpdatableParameter(paramName) {
          return updatableParams.indexOf(paramName) !== -1;
        };
        /**
         * Is deprecated parameter
         * @param {String} paramName
         */


        var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
          return deprecatedParams[paramName];
        };

        var checkIfParamIsValid = function checkIfParamIsValid(param) {
          if (!isValidParameter(param)) {
            warn("Unknown parameter \"".concat(param, "\""));
          }
        };

        var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
          if (toastIncompatibleParams.indexOf(param) !== -1) {
            warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
          }
        };

        var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
          if (isDeprecatedParameter(param)) {
            warnAboutDeprecation(param, isDeprecatedParameter(param));
          }
        };
        /**
         * Show relevant warnings for given params
         *
         * @param params
         */


        var showWarningsForParams = function showWarningsForParams(params) {
          for (var param in params) {
            checkIfParamIsValid(param);

            if (params.toast) {
              checkIfToastParamIsValid(param);
            }

            checkIfParamIsDeprecated(param);
          }
        };

        var staticMethods = /*#__PURE__*/Object.freeze({
          isValidParameter: isValidParameter,
          isUpdatableParameter: isUpdatableParameter,
          isDeprecatedParameter: isDeprecatedParameter,
          argsToParams: argsToParams,
          isVisible: isVisible$1,
          clickConfirm: clickConfirm,
          clickDeny: clickDeny,
          clickCancel: clickCancel,
          getContainer: getContainer,
          getPopup: getPopup,
          getTitle: getTitle,
          getContent: getContent,
          getHtmlContainer: getHtmlContainer,
          getImage: getImage,
          getIcon: getIcon,
          getIcons: getIcons,
          getInputLabel: getInputLabel,
          getCloseButton: getCloseButton,
          getActions: getActions,
          getConfirmButton: getConfirmButton,
          getDenyButton: getDenyButton,
          getCancelButton: getCancelButton,
          getLoader: getLoader,
          getHeader: getHeader,
          getFooter: getFooter,
          getTimerProgressBar: getTimerProgressBar,
          getFocusableElements: getFocusableElements,
          getValidationMessage: getValidationMessage,
          isLoading: isLoading,
          fire: fire,
          mixin: mixin,
          queue: queue,
          getQueueStep: getQueueStep,
          insertQueueStep: insertQueueStep,
          deleteQueueStep: deleteQueueStep,
          showLoading: showLoading,
          enableLoading: showLoading,
          getTimerLeft: getTimerLeft,
          stopTimer: stopTimer,
          resumeTimer: resumeTimer,
          toggleTimer: toggleTimer,
          increaseTimer: increaseTimer,
          isTimerRunning: isTimerRunning,
          bindClickHandler: bindClickHandler
        });
        /**
         * Hides loader and shows back the button which was hidden by .showLoading()
         */

        function hideLoading() {
          // do nothing if popup is closed
          var innerParams = privateProps.innerParams.get(this);

          if (!innerParams) {
            return;
          }

          var domCache = privateProps.domCache.get(this);
          hide(domCache.loader);
          var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

          if (buttonToReplace.length) {
            show(buttonToReplace[0], 'inline-block');
          } else if (allButtonsAreHidden()) {
            hide(domCache.actions);
          }

          removeClass([domCache.popup, domCache.actions], swalClasses.loading);
          domCache.popup.removeAttribute('aria-busy');
          domCache.popup.removeAttribute('data-loading');
          domCache.confirmButton.disabled = false;
          domCache.denyButton.disabled = false;
          domCache.cancelButton.disabled = false;
        }

        function getInput$1(instance) {
          var innerParams = privateProps.innerParams.get(instance || this);
          var domCache = privateProps.domCache.get(instance || this);

          if (!domCache) {
            return null;
          }

          return getInput(domCache.content, innerParams.input);
        }

        var fixScrollbar = function fixScrollbar() {
          // for queues, do not do this more than once
          if (states.previousBodyPadding !== null) {
            return;
          } // if the body has overflow


          if (document.body.scrollHeight > window.innerHeight) {
            // add padding so the content doesn't shift after removal of scrollbar
            states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
            document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
          }
        };

        var undoScrollbar = function undoScrollbar() {
          if (states.previousBodyPadding !== null) {
            document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
            states.previousBodyPadding = null;
          }
        };
        /* istanbul ignore file */


        var iOSfix = function iOSfix() {
          var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

          if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
            var offset = document.body.scrollTop;
            document.body.style.top = "".concat(offset * -1, "px");
            addClass(document.body, swalClasses.iosfix);
            lockBodyScroll();
            addBottomPaddingForTallPopups(); // #1948
          }
        };

        var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
          var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

          if (safari) {
            var bottomPanelHeight = 44;

            if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
              getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
            }
          }
        };

        var lockBodyScroll = function lockBodyScroll() {
          // #1246
          var container = getContainer();
          var preventTouchMove;

          container.ontouchstart = function (e) {
            preventTouchMove = shouldPreventTouchMove(e);
          };

          container.ontouchmove = function (e) {
            if (preventTouchMove) {
              e.preventDefault();
              e.stopPropagation();
            }
          };
        };

        var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
          var target = event.target;
          var container = getContainer();

          if (isStylys(event) || isZoom(event)) {
            return false;
          }

          if (target === container) {
            return true;
          }

          if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
          !(isScrollable(getContent()) && // #1944
          getContent().contains(target))) {
            return true;
          }

          return false;
        };

        var isStylys = function isStylys(event) {
          // #1786
          return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
        };

        var isZoom = function isZoom(event) {
          // #1891
          return event.touches && event.touches.length > 1;
        };

        var undoIOSfix = function undoIOSfix() {
          if (hasClass(document.body, swalClasses.iosfix)) {
            var offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = '';
            document.body.scrollTop = offset * -1;
          }
        };
        /* istanbul ignore file */


        var isIE11 = function isIE11() {
          return !!window.MSInputMethodContext && !!document.documentMode;
        }; // Fix IE11 centering sweetalert2/issues/933


        var fixVerticalPositionIE = function fixVerticalPositionIE() {
          var container = getContainer();
          var popup = getPopup();
          container.style.removeProperty('align-items');

          if (popup.offsetTop < 0) {
            container.style.alignItems = 'flex-start';
          }
        };

        var IEfix = function IEfix() {
          if (typeof window !== 'undefined' && isIE11()) {
            fixVerticalPositionIE();
            window.addEventListener('resize', fixVerticalPositionIE);
          }
        };

        var undoIEfix = function undoIEfix() {
          if (typeof window !== 'undefined' && isIE11()) {
            window.removeEventListener('resize', fixVerticalPositionIE);
          }
        }; // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
        // elements not within the active modal dialog will not be surfaced if a user opens a screen
        // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.


        var setAriaHidden = function setAriaHidden() {
          var bodyChildren = toArray(document.body.children);
          bodyChildren.forEach(function (el) {
            if (el === getContainer() || contains(el, getContainer())) {
              return;
            }

            if (el.hasAttribute('aria-hidden')) {
              el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
            }

            el.setAttribute('aria-hidden', 'true');
          });
        };

        var unsetAriaHidden = function unsetAriaHidden() {
          var bodyChildren = toArray(document.body.children);
          bodyChildren.forEach(function (el) {
            if (el.hasAttribute('data-previous-aria-hidden')) {
              el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
              el.removeAttribute('data-previous-aria-hidden');
            } else {
              el.removeAttribute('aria-hidden');
            }
          });
        };
        /**
         * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
         * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
         * This is the approach that Babel will probably take to implement private methods/fields
         *   https://github.com/tc39/proposal-private-methods
         *   https://github.com/babel/babel/pull/7555
         * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
         *   then we can use that language feature.
         */


        var privateMethods = {
          swalPromiseResolve: new WeakMap()
        };
        /*
         * Instance method to close sweetAlert
         */

        function removePopupAndResetState(instance, container, isToast$$1, didClose) {
          if (isToast$$1) {
            triggerDidCloseAndDispose(instance, didClose);
          } else {
            restoreActiveElement().then(function () {
              return triggerDidCloseAndDispose(instance, didClose);
            });
            globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
              capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
          }

          if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
            container.parentNode.removeChild(container);
          }

          if (isModal()) {
            undoScrollbar();
            undoIOSfix();
            undoIEfix();
            unsetAriaHidden();
          }

          removeBodyClasses();
        }

        function removeBodyClasses() {
          removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
        }

        function close(resolveValue) {
          var popup = getPopup();

          if (!popup) {
            return;
          }

          resolveValue = prepareResolveValue(resolveValue);
          var innerParams = privateProps.innerParams.get(this);

          if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
            return;
          }

          var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
          removeClass(popup, innerParams.showClass.popup);
          addClass(popup, innerParams.hideClass.popup);
          var backdrop = getContainer();
          removeClass(backdrop, innerParams.showClass.backdrop);
          addClass(backdrop, innerParams.hideClass.backdrop);
          handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

          swalPromiseResolve(resolveValue);
        }

        var prepareResolveValue = function prepareResolveValue(resolveValue) {
          // When user calls Swal.close()
          if (typeof resolveValue === 'undefined') {
            return {
              isConfirmed: false,
              isDenied: false,
              isDismissed: true
            };
          }

          return _extends({
            isConfirmed: false,
            isDenied: false,
            isDismissed: false
          }, resolveValue);
        };

        var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
          var container = getContainer(); // If animation is supported, animate

          var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
          var onClose = innerParams.onClose,
              onAfterClose = innerParams.onAfterClose,
              willClose = innerParams.willClose,
              didClose = innerParams.didClose;
          runDidClose(popup, willClose, onClose);

          if (animationIsSupported) {
            animatePopup(instance, popup, container, didClose || onAfterClose);
          } else {
            // Otherwise, remove immediately
            removePopupAndResetState(instance, container, isToast(), didClose || onAfterClose);
          }
        };

        var runDidClose = function runDidClose(popup, willClose, onClose) {
          if (willClose !== null && typeof willClose === 'function') {
            willClose(popup);
          } else if (onClose !== null && typeof onClose === 'function') {
            onClose(popup); // @deprecated
          }
        };

        var animatePopup = function animatePopup(instance, popup, container, didClose) {
          globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), didClose);
          popup.addEventListener(animationEndEvent, function (e) {
            if (e.target === popup) {
              globalState.swalCloseEventFinishedCallback();
              delete globalState.swalCloseEventFinishedCallback;
            }
          });
        };

        var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
          setTimeout(function () {
            if (typeof didClose === 'function') {
              didClose();
            }

            instance._destroy();
          });
        };

        function setButtonsDisabled(instance, buttons, disabled) {
          var domCache = privateProps.domCache.get(instance);
          buttons.forEach(function (button) {
            domCache[button].disabled = disabled;
          });
        }

        function setInputDisabled(input, disabled) {
          if (!input) {
            return false;
          }

          if (input.type === 'radio') {
            var radiosContainer = input.parentNode.parentNode;
            var radios = radiosContainer.querySelectorAll('input');

            for (var i = 0; i < radios.length; i++) {
              radios[i].disabled = disabled;
            }
          } else {
            input.disabled = disabled;
          }
        }

        function enableButtons() {
          setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
        }

        function disableButtons() {
          setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
        }

        function enableInput() {
          return setInputDisabled(this.getInput(), false);
        }

        function disableInput() {
          return setInputDisabled(this.getInput(), true);
        }

        function showValidationMessage(error) {
          var domCache = privateProps.domCache.get(this);
          var params = privateProps.innerParams.get(this);
          setInnerHtml(domCache.validationMessage, error);
          domCache.validationMessage.className = swalClasses['validation-message'];

          if (params.customClass && params.customClass.validationMessage) {
            addClass(domCache.validationMessage, params.customClass.validationMessage);
          }

          show(domCache.validationMessage);
          var input = this.getInput();

          if (input) {
            input.setAttribute('aria-invalid', true);
            input.setAttribute('aria-describedBy', swalClasses['validation-message']);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
          }
        } // Hide block with validation message


        function resetValidationMessage$1() {
          var domCache = privateProps.domCache.get(this);

          if (domCache.validationMessage) {
            hide(domCache.validationMessage);
          }

          var input = this.getInput();

          if (input) {
            input.removeAttribute('aria-invalid');
            input.removeAttribute('aria-describedBy');
            removeClass(input, swalClasses.inputerror);
          }
        }

        function getProgressSteps$1() {
          var domCache = privateProps.domCache.get(this);
          return domCache.progressSteps;
        }

        var Timer = /*#__PURE__*/function () {
          function Timer(callback, delay) {
            _classCallCheck(this, Timer);

            this.callback = callback;
            this.remaining = delay;
            this.running = false;
            this.start();
          }

          _createClass(Timer, [{
            key: "start",
            value: function start() {
              if (!this.running) {
                this.running = true;
                this.started = new Date();
                this.id = setTimeout(this.callback, this.remaining);
              }

              return this.remaining;
            }
          }, {
            key: "stop",
            value: function stop() {
              if (this.running) {
                this.running = false;
                clearTimeout(this.id);
                this.remaining -= new Date() - this.started;
              }

              return this.remaining;
            }
          }, {
            key: "increase",
            value: function increase(n) {
              var running = this.running;

              if (running) {
                this.stop();
              }

              this.remaining += n;

              if (running) {
                this.start();
              }

              return this.remaining;
            }
          }, {
            key: "getTimerLeft",
            value: function getTimerLeft() {
              if (this.running) {
                this.stop();
                this.start();
              }

              return this.remaining;
            }
          }, {
            key: "isRunning",
            value: function isRunning() {
              return this.running;
            }
          }]);

          return Timer;
        }();

        var defaultInputValidators = {
          email: function email(string, validationMessage) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
          },
          url: function url(string, validationMessage) {
            // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
          }
        };

        function setDefaultInputValidators(params) {
          // Use default `inputValidator` for supported input types if not provided
          if (!params.inputValidator) {
            Object.keys(defaultInputValidators).forEach(function (key) {
              if (params.input === key) {
                params.inputValidator = defaultInputValidators[key];
              }
            });
          }
        }

        function validateCustomTargetElement(params) {
          // Determine if the custom target element is valid
          if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = 'body';
          }
        }
        /**
         * Set type, text and actions on popup
         *
         * @param params
         * @returns {boolean}
         */


        function setParameters(params) {
          setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

          if (params.showLoaderOnConfirm && !params.preConfirm) {
            warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
          } // params.animation will be actually used in renderPopup.js
          // but in case when params.animation is a function, we need to call that function
          // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
          // inside the params.animation function


          params.animation = callIfFunction(params.animation);
          validateCustomTargetElement(params); // Replace newlines with <br> in title

          if (typeof params.title === 'string') {
            params.title = params.title.split('\n').join('<br />');
          }

          init(params);
        }

        var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

        var getTemplateParams = function getTemplateParams(params) {
          var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

          if (!template) {
            return {};
          }

          var templateContent = template.content || template; // IE11

          showWarningsForElements(templateContent);

          var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));

          return result;
        };

        var getSwalParams = function getSwalParams(templateContent) {
          var result = {};
          toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
            showWarningsForAttributes(param, ['name', 'value']);
            var paramName = param.getAttribute('name');
            var value = param.getAttribute('value');

            if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
              value = false;
            }

            if (_typeof(defaultParams[paramName]) === 'object') {
              value = JSON.parse(value);
            }

            result[paramName] = value;
          });
          return result;
        };

        var getSwalButtons = function getSwalButtons(templateContent) {
          var result = {};
          toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
            showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
            var type = button.getAttribute('type');
            result["".concat(type, "ButtonText")] = button.innerHTML;
            result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

            if (button.hasAttribute('color')) {
              result["".concat(type, "ButtonColor")] = button.getAttribute('color');
            }

            if (button.hasAttribute('aria-label')) {
              result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
            }
          });
          return result;
        };

        var getSwalImage = function getSwalImage(templateContent) {
          var result = {};
          var image = templateContent.querySelector('swal-image');

          if (image) {
            showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

            if (image.hasAttribute('src')) {
              result.imageUrl = image.getAttribute('src');
            }

            if (image.hasAttribute('width')) {
              result.imageWidth = image.getAttribute('width');
            }

            if (image.hasAttribute('height')) {
              result.imageHeight = image.getAttribute('height');
            }

            if (image.hasAttribute('alt')) {
              result.imageAlt = image.getAttribute('alt');
            }
          }

          return result;
        };

        var getSwalIcon = function getSwalIcon(templateContent) {
          var result = {};
          var icon = templateContent.querySelector('swal-icon');

          if (icon) {
            showWarningsForAttributes(icon, ['type', 'color']);

            if (icon.hasAttribute('type')) {
              result.icon = icon.getAttribute('type');
            }

            if (icon.hasAttribute('color')) {
              result.iconColor = icon.getAttribute('color');
            }

            result.iconHtml = icon.innerHTML;
          }

          return result;
        };

        var getSwalInput = function getSwalInput(templateContent) {
          var result = {};
          var input = templateContent.querySelector('swal-input');

          if (input) {
            showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
            result.input = input.getAttribute('type') || 'text';

            if (input.hasAttribute('label')) {
              result.inputLabel = input.getAttribute('label');
            }

            if (input.hasAttribute('placeholder')) {
              result.inputPlaceholder = input.getAttribute('placeholder');
            }

            if (input.hasAttribute('value')) {
              result.inputValue = input.getAttribute('value');
            }
          }

          var inputOptions = templateContent.querySelectorAll('swal-input-option');

          if (inputOptions.length) {
            result.inputOptions = {};
            toArray(inputOptions).forEach(function (option) {
              showWarningsForAttributes(option, ['value']);
              var optionValue = option.getAttribute('value');
              var optionName = option.innerHTML;
              result.inputOptions[optionValue] = optionName;
            });
          }

          return result;
        };

        var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
          var result = {};

          for (var i in paramNames) {
            var paramName = paramNames[i];
            var tag = templateContent.querySelector(paramName);

            if (tag) {
              showWarningsForAttributes(tag, []);
              result[paramName.replace(/^swal-/, '')] = tag.innerHTML;
            }
          }

          return result;
        };

        var showWarningsForElements = function showWarningsForElements(template) {
          var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
          toArray(template.querySelectorAll('*')).forEach(function (el) {
            if (el.parentNode !== template) {
              // can't use template.children because of IE11
              return;
            }

            var tagName = el.tagName.toLowerCase();

            if (allowedElements.indexOf(tagName) === -1) {
              warn("Unrecognized element <".concat(tagName, ">"));
            }
          });
        };

        var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
          toArray(el.attributes).forEach(function (attribute) {
            if (allowedAttributes.indexOf(attribute.name) === -1) {
              warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
            }
          });
        };

        var SHOW_CLASS_TIMEOUT = 10;
        /**
         * Open popup, add necessary classes and styles, fix scrollbar
         *
         * @param params
         */

        var openPopup = function openPopup(params) {
          var container = getContainer();
          var popup = getPopup();

          if (typeof params.willOpen === 'function') {
            params.willOpen(popup);
          } else if (typeof params.onBeforeOpen === 'function') {
            params.onBeforeOpen(popup); // @deprecated
          }

          var bodyStyles = window.getComputedStyle(document.body);
          var initialBodyOverflow = bodyStyles.overflowY;
          addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

          setTimeout(function () {
            setScrollingVisibility(container, popup);
          }, SHOW_CLASS_TIMEOUT);

          if (isModal()) {
            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
            setAriaHidden();
          }

          if (!isToast() && !globalState.previousActiveElement) {
            globalState.previousActiveElement = document.activeElement;
          }

          runDidOpen(popup, params);
          removeClass(container, swalClasses['no-transition']);
        };

        var runDidOpen = function runDidOpen(popup, params) {
          if (typeof params.didOpen === 'function') {
            setTimeout(function () {
              return params.didOpen(popup);
            });
          } else if (typeof params.onOpen === 'function') {
            setTimeout(function () {
              return params.onOpen(popup);
            }); // @deprecated
          }
        };

        var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
          var popup = getPopup();

          if (event.target !== popup) {
            return;
          }

          var container = getContainer();
          popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
          container.style.overflowY = 'auto';
        };

        var setScrollingVisibility = function setScrollingVisibility(container, popup) {
          if (animationEndEvent && hasCssAnimation(popup)) {
            container.style.overflowY = 'hidden';
            popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
          } else {
            container.style.overflowY = 'auto';
          }
        };

        var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
          iOSfix();
          IEfix();

          if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
            fixScrollbar();
          } // sweetalert2/issues/1247


          setTimeout(function () {
            container.scrollTop = 0;
          });
        };

        var addClasses$1 = function addClasses(container, popup, params) {
          addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

          popup.style.setProperty('opacity', '0', 'important');
          show(popup);
          setTimeout(function () {
            // Animate popup right after showing it
            addClass(popup, params.showClass.popup); // and remove the opacity workaround

            popup.style.removeProperty('opacity');
          }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

          addClass([document.documentElement, document.body], swalClasses.shown);

          if (params.heightAuto && params.backdrop && !params.toast) {
            addClass([document.documentElement, document.body], swalClasses['height-auto']);
          }
        };

        var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
          if (params.input === 'select' || params.input === 'radio') {
            handleInputOptions(instance, params);
          } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
            handleInputValue(instance, params);
          }
        };

        var getInputValue = function getInputValue(instance, innerParams) {
          var input = instance.getInput();

          if (!input) {
            return null;
          }

          switch (innerParams.input) {
            case 'checkbox':
              return getCheckboxValue(input);

            case 'radio':
              return getRadioValue(input);

            case 'file':
              return getFileValue(input);

            default:
              return innerParams.inputAutoTrim ? input.value.trim() : input.value;
          }
        };

        var getCheckboxValue = function getCheckboxValue(input) {
          return input.checked ? 1 : 0;
        };

        var getRadioValue = function getRadioValue(input) {
          return input.checked ? input.value : null;
        };

        var getFileValue = function getFileValue(input) {
          return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
        };

        var handleInputOptions = function handleInputOptions(instance, params) {
          var content = getContent();

          var processInputOptions = function processInputOptions(inputOptions) {
            return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
          };

          if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
            showLoading(getConfirmButton());
            asPromise(params.inputOptions).then(function (inputOptions) {
              instance.hideLoading();
              processInputOptions(inputOptions);
            });
          } else if (_typeof(params.inputOptions) === 'object') {
            processInputOptions(params.inputOptions);
          } else {
            error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
          }
        };

        var handleInputValue = function handleInputValue(instance, params) {
          var input = instance.getInput();
          hide(input);
          asPromise(params.inputValue).then(function (inputValue) {
            input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
            show(input);
            input.focus();
            instance.hideLoading();
          })["catch"](function (err) {
            error("Error in inputValue promise: ".concat(err));
            input.value = '';
            show(input);
            input.focus();
            instance.hideLoading();
          });
        };

        var populateInputOptions = {
          select: function select(content, inputOptions, params) {
            var select = getChildByClass(content, swalClasses.select);

            var renderOption = function renderOption(parent, optionLabel, optionValue) {
              var option = document.createElement('option');
              option.value = optionValue;
              setInnerHtml(option, optionLabel);
              option.selected = isSelected(optionValue, params.inputValue);
              parent.appendChild(option);
            };

            inputOptions.forEach(function (inputOption) {
              var optionValue = inputOption[0];
              var optionLabel = inputOption[1]; // <optgroup> spec:
              // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
              // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
              // check whether this is a <optgroup>

              if (Array.isArray(optionLabel)) {
                // if it is an array, then it is an <optgroup>
                var optgroup = document.createElement('optgroup');
                optgroup.label = optionValue;
                optgroup.disabled = false; // not configurable for now

                select.appendChild(optgroup);
                optionLabel.forEach(function (o) {
                  return renderOption(optgroup, o[1], o[0]);
                });
              } else {
                // case of <option>
                renderOption(select, optionLabel, optionValue);
              }
            });
            select.focus();
          },
          radio: function radio(content, inputOptions, params) {
            var radio = getChildByClass(content, swalClasses.radio);
            inputOptions.forEach(function (inputOption) {
              var radioValue = inputOption[0];
              var radioLabel = inputOption[1];
              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;

              if (isSelected(radioValue, params.inputValue)) {
                radioInput.checked = true;
              }

              var label = document.createElement('span');
              setInnerHtml(label, radioLabel);
              label.className = swalClasses.label;
              radioLabelElement.appendChild(radioInput);
              radioLabelElement.appendChild(label);
              radio.appendChild(radioLabelElement);
            });
            var radios = radio.querySelectorAll('input');

            if (radios.length) {
              radios[0].focus();
            }
          }
        };
        /**
         * Converts `inputOptions` into an array of `[value, label]`s
         * @param inputOptions
         */

        var formatInputOptions = function formatInputOptions(inputOptions) {
          var result = [];

          if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
            inputOptions.forEach(function (value, key) {
              var valueFormatted = value;

              if (_typeof(valueFormatted) === 'object') {
                // case of <optgroup>
                valueFormatted = formatInputOptions(valueFormatted);
              }

              result.push([key, valueFormatted]);
            });
          } else {
            Object.keys(inputOptions).forEach(function (key) {
              var valueFormatted = inputOptions[key];

              if (_typeof(valueFormatted) === 'object') {
                // case of <optgroup>
                valueFormatted = formatInputOptions(valueFormatted);
              }

              result.push([key, valueFormatted]);
            });
          }

          return result;
        };

        var isSelected = function isSelected(optionValue, inputValue) {
          return inputValue && inputValue.toString() === optionValue.toString();
        };

        var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
          instance.disableButtons();

          if (innerParams.input) {
            handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
          } else {
            confirm(instance, innerParams, true);
          }
        };

        var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
          instance.disableButtons();

          if (innerParams.returnInputValueOnDeny) {
            handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
          } else {
            deny(instance, innerParams, false);
          }
        };

        var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
          instance.disableButtons();
          dismissWith(DismissReason.cancel);
        };

        var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type
        /* type is either 'confirm' or 'deny' */
        ) {
          var inputValue = getInputValue(instance, innerParams);

          if (innerParams.inputValidator) {
            handleInputValidator(instance, innerParams, inputValue);
          } else if (!instance.getInput().checkValidity()) {
            instance.enableButtons();
            instance.showValidationMessage(innerParams.validationMessage);
          } else if (type === 'deny') {
            deny(instance, innerParams, inputValue);
          } else {
            confirm(instance, innerParams, inputValue);
          }
        };

        var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
          instance.disableInput();
          var validationPromise = Promise.resolve().then(function () {
            return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
          });
          validationPromise.then(function (validationMessage) {
            instance.enableButtons();
            instance.enableInput();

            if (validationMessage) {
              instance.showValidationMessage(validationMessage);
            } else {
              confirm(instance, innerParams, inputValue);
            }
          });
        };

        var deny = function deny(instance, innerParams, value) {
          if (innerParams.showLoaderOnDeny) {
            showLoading(getDenyButton());
          }

          if (innerParams.preDeny) {
            var preDenyPromise = Promise.resolve().then(function () {
              return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
            });
            preDenyPromise.then(function (preDenyValue) {
              if (preDenyValue === false) {
                instance.hideLoading();
              } else {
                instance.closePopup({
                  isDenied: true,
                  value: typeof preDenyValue === 'undefined' ? value : preDenyValue
                });
              }
            });
          } else {
            instance.closePopup({
              isDenied: true,
              value: value
            });
          }
        };

        var succeedWith = function succeedWith(instance, value) {
          instance.closePopup({
            isConfirmed: true,
            value: value
          });
        };

        var confirm = function confirm(instance, innerParams, value) {
          if (innerParams.showLoaderOnConfirm) {
            showLoading(); // TODO: make showLoading an *instance* method
          }

          if (innerParams.preConfirm) {
            instance.resetValidationMessage();
            var preConfirmPromise = Promise.resolve().then(function () {
              return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
            });
            preConfirmPromise.then(function (preConfirmValue) {
              if (isVisible(getValidationMessage()) || preConfirmValue === false) {
                instance.hideLoading();
              } else {
                succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
              }
            });
          } else {
            succeedWith(instance, value);
          }
        };

        var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
          if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
            globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
              capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
          }

          if (!innerParams.toast) {
            globalState.keydownHandler = function (e) {
              return keydownHandler(instance, e, dismissWith);
            };

            globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
            globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
              capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = true;
          }
        }; // Focus handling


        var setFocus = function setFocus(innerParams, index, increment) {
          var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

          if (focusableElements.length) {
            index = index + increment; // rollover to first item

            if (index === focusableElements.length) {
              index = 0; // go to last item
            } else if (index === -1) {
              index = focusableElements.length - 1;
            }

            return focusableElements[index].focus();
          } // no visible focusable elements, focus the popup


          getPopup().focus();
        };

        var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
        ];
        var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
        ];
        var escKeys = ['Escape', 'Esc' // IE11
        ];

        var keydownHandler = function keydownHandler(instance, e, dismissWith) {
          var innerParams = privateProps.innerParams.get(instance);

          if (innerParams.stopKeydownPropagation) {
            e.stopPropagation();
          } // ENTER


          if (e.key === 'Enter') {
            handleEnter(instance, e, innerParams); // TAB
          } else if (e.key === 'Tab') {
            handleTab(e, innerParams); // ARROWS - switch focus between buttons
          } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
            handleArrows(e.key); // ESC
          } else if (escKeys.indexOf(e.key) !== -1) {
            handleEsc(e, innerParams, dismissWith);
          }
        };

        var handleEnter = function handleEnter(instance, e, innerParams) {
          // #720 #721
          if (e.isComposing) {
            return;
          }

          if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
            if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
              return; // do not submit
            }

            clickConfirm();
            e.preventDefault();
          }
        };

        var handleTab = function handleTab(e, innerParams) {
          var targetElement = e.target;
          var focusableElements = getFocusableElements();
          var btnIndex = -1;

          for (var i = 0; i < focusableElements.length; i++) {
            if (targetElement === focusableElements[i]) {
              btnIndex = i;
              break;
            }
          }

          if (!e.shiftKey) {
            // Cycle to the next button
            setFocus(innerParams, btnIndex, 1);
          } else {
            // Cycle to the prev button
            setFocus(innerParams, btnIndex, -1);
          }

          e.stopPropagation();
          e.preventDefault();
        };

        var handleArrows = function handleArrows(key) {
          var confirmButton = getConfirmButton();
          var denyButton = getDenyButton();
          var cancelButton = getCancelButton();

          if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
            return;
          }

          var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
          var buttonToFocus = document.activeElement[sibling];

          if (buttonToFocus) {
            buttonToFocus.focus();
          }
        };

        var handleEsc = function handleEsc(e, innerParams, dismissWith) {
          if (callIfFunction(innerParams.allowEscapeKey)) {
            e.preventDefault();
            dismissWith(DismissReason.esc);
          }
        };

        var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
          var innerParams = privateProps.innerParams.get(instance);

          if (innerParams.toast) {
            handleToastClick(instance, domCache, dismissWith);
          } else {
            // Ignore click events that had mousedown on the popup but mouseup on the container
            // This can happen when the user drags a slider
            handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

            handleContainerMousedown(domCache);
            handleModalClick(instance, domCache, dismissWith);
          }
        };

        var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
          // Closing toast by internal click
          domCache.popup.onclick = function () {
            var innerParams = privateProps.innerParams.get(instance);

            if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
              return;
            }

            dismissWith(DismissReason.close);
          };
        };

        var ignoreOutsideClick = false;

        var handleModalMousedown = function handleModalMousedown(domCache) {
          domCache.popup.onmousedown = function () {
            domCache.container.onmouseup = function (e) {
              domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
              // have any other direct children aside of the popup

              if (e.target === domCache.container) {
                ignoreOutsideClick = true;
              }
            };
          };
        };

        var handleContainerMousedown = function handleContainerMousedown(domCache) {
          domCache.container.onmousedown = function () {
            domCache.popup.onmouseup = function (e) {
              domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

              if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
                ignoreOutsideClick = true;
              }
            };
          };
        };

        var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
          domCache.container.onclick = function (e) {
            var innerParams = privateProps.innerParams.get(instance);

            if (ignoreOutsideClick) {
              ignoreOutsideClick = false;
              return;
            }

            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
              dismissWith(DismissReason.backdrop);
            }
          };
        };

        function _main(userParams) {
          var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          showWarningsForParams(_extends({}, mixinParams, userParams));

          if (globalState.currentInstance) {
            globalState.currentInstance._destroy();
          }

          globalState.currentInstance = this;
          var innerParams = prepareParams(userParams, mixinParams);
          setParameters(innerParams);
          Object.freeze(innerParams); // clear the previous timer

          if (globalState.timeout) {
            globalState.timeout.stop();
            delete globalState.timeout;
          } // clear the restore focus timeout


          clearTimeout(globalState.restoreFocusTimeout);
          var domCache = populateDomCache(this);
          render(this, innerParams);
          privateProps.innerParams.set(this, innerParams);
          return swalPromise(this, domCache, innerParams);
        }

        var prepareParams = function prepareParams(userParams, mixinParams) {
          var templateParams = getTemplateParams(userParams);

          var showClass = _extends({}, defaultParams.showClass, mixinParams.showClass, templateParams.showClass, userParams.showClass);

          var hideClass = _extends({}, defaultParams.hideClass, mixinParams.hideClass, templateParams.hideClass, userParams.hideClass);

          var params = _extends({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131


          params.showClass = showClass;
          params.hideClass = hideClass; // @deprecated

          if (userParams.animation === false) {
            params.showClass = {
              popup: 'swal2-noanimation',
              backdrop: 'swal2-noanimation'
            };
            params.hideClass = {};
          }

          return params;
        };

        var swalPromise = function swalPromise(instance, domCache, innerParams) {
          return new Promise(function (resolve) {
            // functions to handle all closings/dismissals
            var dismissWith = function dismissWith(dismiss) {
              instance.closePopup({
                isDismissed: true,
                dismiss: dismiss
              });
            };

            privateMethods.swalPromiseResolve.set(instance, resolve);

            domCache.confirmButton.onclick = function () {
              return handleConfirmButtonClick(instance, innerParams);
            };

            domCache.denyButton.onclick = function () {
              return handleDenyButtonClick(instance, innerParams);
            };

            domCache.cancelButton.onclick = function () {
              return handleCancelButtonClick(instance, dismissWith);
            };

            domCache.closeButton.onclick = function () {
              return dismissWith(DismissReason.close);
            };

            handlePopupClick(instance, domCache, dismissWith);
            addKeydownHandler(instance, globalState, innerParams, dismissWith);

            if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
              addClass(document.body, swalClasses['toast-column']);
            } else {
              removeClass(document.body, swalClasses['toast-column']);
            }

            handleInputOptionsAndValue(instance, innerParams);
            openPopup(innerParams);
            setupTimer(globalState, innerParams, dismissWith);
            initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

            setTimeout(function () {
              domCache.container.scrollTop = 0;
            });
          });
        };

        var populateDomCache = function populateDomCache(instance) {
          var domCache = {
            popup: getPopup(),
            container: getContainer(),
            content: getContent(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            denyButton: getDenyButton(),
            cancelButton: getCancelButton(),
            loader: getLoader(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
          };
          privateProps.domCache.set(instance, domCache);
          return domCache;
        };

        var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
          var timerProgressBar = getTimerProgressBar();
          hide(timerProgressBar);

          if (innerParams.timer) {
            globalState$$1.timeout = new Timer(function () {
              dismissWith('timer');
              delete globalState$$1.timeout;
            }, innerParams.timer);

            if (innerParams.timerProgressBar) {
              show(timerProgressBar);
              setTimeout(function () {
                if (globalState$$1.timeout && globalState$$1.timeout.running) {
                  // timer can be already stopped or unset at this point
                  animateTimerProgressBar(innerParams.timer);
                }
              });
            }
          }
        };

        var initFocus = function initFocus(domCache, innerParams) {
          if (innerParams.toast) {
            return;
          }

          if (!callIfFunction(innerParams.allowEnterKey)) {
            return blurActiveElement();
          }

          if (!focusButton(domCache, innerParams)) {
            setFocus(innerParams, -1, 1);
          }
        };

        var focusButton = function focusButton(domCache, innerParams) {
          if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
            domCache.denyButton.focus();
            return true;
          }

          if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            return true;
          }

          if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
            domCache.confirmButton.focus();
            return true;
          }

          return false;
        };

        var blurActiveElement = function blurActiveElement() {
          if (document.activeElement && typeof document.activeElement.blur === 'function') {
            document.activeElement.blur();
          }
        };
        /**
         * Updates popup parameters.
         */


        function update(params) {
          var popup = getPopup();
          var innerParams = privateProps.innerParams.get(this);

          if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
            return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
          }

          var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

          Object.keys(params).forEach(function (param) {
            if (Swal.isUpdatableParameter(param)) {
              validUpdatableParams[param] = params[param];
            } else {
              warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
            }
          });

          var updatedParams = _extends({}, innerParams, validUpdatableParams);

          render(this, updatedParams);
          privateProps.innerParams.set(this, updatedParams);
          Object.defineProperties(this, {
            params: {
              value: _extends({}, this.params, params),
              writable: false,
              enumerable: true
            }
          });
        }

        function _destroy() {
          var domCache = privateProps.domCache.get(this);
          var innerParams = privateProps.innerParams.get(this);

          if (!innerParams) {
            return; // This instance has already been destroyed
          } // Check if there is another Swal closing


          if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
          } // Check if there is a swal disposal defer timer


          if (globalState.deferDisposalTimer) {
            clearTimeout(globalState.deferDisposalTimer);
            delete globalState.deferDisposalTimer;
          }

          runDidDestroy(innerParams);
          disposeSwal(this);
        }

        var runDidDestroy = function runDidDestroy(innerParams) {
          if (typeof innerParams.didDestroy === 'function') {
            innerParams.didDestroy();
          } else if (typeof innerParams.onDestroy === 'function') {
            innerParams.onDestroy(); // @deprecated
          }
        };

        var disposeSwal = function disposeSwal(instance) {
          // Unset this.params so GC will dispose it (#1569)
          delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

          delete globalState.keydownHandler;
          delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

          unsetWeakMaps(privateProps);
          unsetWeakMaps(privateMethods);
        };

        var unsetWeakMaps = function unsetWeakMaps(obj) {
          for (var i in obj) {
            obj[i] = new WeakMap();
          }
        };

        var instanceMethods = /*#__PURE__*/Object.freeze({
          hideLoading: hideLoading,
          disableLoading: hideLoading,
          getInput: getInput$1,
          close: close,
          closePopup: close,
          closeModal: close,
          closeToast: close,
          enableButtons: enableButtons,
          disableButtons: disableButtons,
          enableInput: enableInput,
          disableInput: disableInput,
          showValidationMessage: showValidationMessage,
          resetValidationMessage: resetValidationMessage$1,
          getProgressSteps: getProgressSteps$1,
          _main: _main,
          update: update,
          _destroy: _destroy
        });
        var currentInstance;

        var SweetAlert = /*#__PURE__*/function () {
          function SweetAlert() {
            _classCallCheck(this, SweetAlert); // Prevent run in Node env


            if (typeof window === 'undefined') {
              return;
            } // Check for the existence of Promise


            if (typeof Promise === 'undefined') {
              error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
            }

            currentInstance = this;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var outerParams = Object.freeze(this.constructor.argsToParams(args));
            Object.defineProperties(this, {
              params: {
                value: outerParams,
                writable: false,
                enumerable: true,
                configurable: true
              }
            });

            var promise = this._main(this.params);

            privateProps.promise.set(this, promise);
          } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


          _createClass(SweetAlert, [{
            key: "then",
            value: function then(onFulfilled) {
              var promise = privateProps.promise.get(this);
              return promise.then(onFulfilled);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              var promise = privateProps.promise.get(this);
              return promise["finally"](onFinally);
            }
          }]);

          return SweetAlert;
        }(); // Assign instance methods from src/instanceMethods/*.js to prototype


        _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


        _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


        Object.keys(instanceMethods).forEach(function (key) {
          SweetAlert[key] = function () {
            if (currentInstance) {
              var _currentInstance;

              return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
            }
          };
        });
        SweetAlert.DismissReason = DismissReason;
        SweetAlert.version = '10.15.3';
        var Swal = SweetAlert;
        Swal["default"] = Swal;
        return Swal;
      });

      if (typeof this !== 'undefined' && this.Sweetalert2) {
        this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
      }

      "undefined" != typeof document && function (e, t) {
        var n = e.createElement("style");
        if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
          n.innerHTML = t;
        } catch (e) {
          n.innerText = t;
        }
      }(document, ".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.125em .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{display:none;align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");
      /***/
    },

    /***/
    "njyG":
    /*!***************************************************************!*\
      !*** ./node_modules/angular-datatables/__ivy_ngcc__/index.js ***!
      \***************************************************************/

    /*! exports provided: DataTableDirective, DataTablesModule */

    /***/
    function njyG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./src/angular-datatables.directive */
      "/iSe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DataTableDirective", function () {
        return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"];
      });
      /* harmony import */


      var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./src/angular-datatables.module */
      "HO/X");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DataTablesModule", function () {
        return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"];
      });
      /**
       * @license
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
       */

      /**
       * @module
       * @description
       * Entry point from which you should import all public library APIs.
       */
      //# sourceMappingURL=index.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~clinic-clinic-module~superadmin-superadmin-module-es5.js.map