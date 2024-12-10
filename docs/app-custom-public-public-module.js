(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-custom-public-public-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custom/public/header/header.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom/public/header/header.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark\" id=\"ftco-navbar\">\r\n\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"/public/home\"><span class=\"flaticon-lotus\"></span>Spa&Beauty</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"oi oi-menu\"></span> Menu\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\" routerLink=\"/public/home\" routerLinkActive=\"active\"><a class=\"nav-link\">Home</a></li>\r\n        <li class=\"nav-item\" routerLink=\"/public/about\" routerLinkActive=\"active\" routerLink=\"/public/about\"\r\n            routerLinkActive=\"active\"><a class=\"nav-link\">About</a></li>\r\n        <li class=\"nav-item\" routerLink=\"/public/treatments\" routerLinkActive=\"active\"><a\r\n          class=\"nav-link\">Treatments</a></li>\r\n        <li class=\"nav-item\" routerLink=\"/public/specialists\" routerLinkActive=\"active\"><a class=\"nav-link\">Specialists</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLink=\"/public/pricing\" routerLinkActive=\"active\"><a class=\"nav-link\">Pricing</a></li>\r\n<!--        <li class=\"nav-item\" routerLink=\"/public/home\" routerLinkActive=\"active\"><a class=\"nav-link\">Blog</a></li>-->\r\n        <li class=\"nav-item\" routerLink=\"/public/contact\" routerLinkActive=\"active\"><a class=\"nav-link\">Contact</a></li>\r\n        <a class=\"nav-link\" (click)=\"connexion()\">Connexion</a>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custom/public/public.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom/public/public.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./src/app/custom/public/header/header.component.css":
/*!***********************************************************!*\
  !*** ./src/app/custom/public/header/header.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS9wdWJsaWMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/custom/public/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/custom/public/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.connexion = function () {
        this.router.navigate(['/signin']);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custom/public/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/custom/public/header/header.component.css")).default]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/custom/public/public-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/custom/public/public-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PublicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicRoutingModule", function() { return PublicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public.component */ "./src/app/custom/public/public.component.ts");




var routes = [
    {
        path: '',
        // redirectTo: 'home',
        component: _public_component__WEBPACK_IMPORTED_MODULE_3__["PublicComponent"],
        // pathMatch: 'full'
        children: [{
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'about',
                loadChildren: './about/about.module#AboutModule'
            },
            {
                path: 'treatments',
                loadChildren: './treatments/treatments.module#TreatmentsModule'
            },
            {
                path: 'specialists',
                loadChildren: './specialists/specialists.module#SpecialistsModule'
            },
            {
                path: 'pricing',
                loadChildren: './pricing/pricing.module#PricingModule'
            }, {
                path: 'contact',
                loadChildren: './contact/contact.module#ContactModule'
            }
        ]
    }
];
var PublicRoutingModule = /** @class */ (function () {
    function PublicRoutingModule() {
    }
    PublicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PublicRoutingModule);
    return PublicRoutingModule;
}());



/***/ }),

/***/ "./src/app/custom/public/public.component.css":
/*!****************************************************!*\
  !*** ./src/app/custom/public/public.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS9wdWJsaWMvcHVibGljLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/custom/public/public.component.ts":
/*!***************************************************!*\
  !*** ./src/app/custom/public/public.component.ts ***!
  \***************************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PublicComponent = /** @class */ (function () {
    function PublicComponent() {
    }
    PublicComponent.prototype.ngOnInit = function () {
    };
    PublicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./public.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custom/public/public.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./public.component.css */ "./src/app/custom/public/public.component.css")).default]
        })
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "./src/app/custom/public/public.module.ts":
/*!************************************************!*\
  !*** ./src/app/custom/public/public.module.ts ***!
  \************************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _public_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-routing.module */ "./src/app/custom/public/public-routing.module.ts");
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public.component */ "./src/app/custom/public/public.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/custom/public/header/header.component.ts");






var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_public_component__WEBPACK_IMPORTED_MODULE_4__["PublicComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _public_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublicRoutingModule"]
            ], exports: [_public_component__WEBPACK_IMPORTED_MODULE_4__["PublicComponent"]]
        })
    ], PublicModule);
    return PublicModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-custom-public-public-module.js.map