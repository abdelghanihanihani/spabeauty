(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custom/public/contact/contact.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom/public/contact/contact.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<section class=\"hero-wrap hero-wrap-2\" style=\"background-image: url('./assets/images/bg_2.webp');\"\r\n         data-stellar-background-ratio=\"0.5\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row no-gutters slider-text js-fullheight align-items-center justify-content-center\">\r\n      <div class=\"col-md-9  text-center\">\r\n        <h1 class=\"mb-3 bread\">Contact us</h1>\r\n        <p class=\"breadcrumbs\"><span class=\"mr-2\"><a routerLink=\"/public/home\">Home</a></span> <span>Contact us</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section contact-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row block-9\">\r\n      <div class=\"col-md-4 contact-info  bg-light p-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 mb-4\">\r\n            <h2 class=\"h4\">Contact Information</h2>\r\n          </div>\r\n          <div class=\"col-md-12 mb-3\">\r\n            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>\r\n          </div>\r\n          <div class=\"col-md-12 mb-3\">\r\n            <p><span>Phone:</span> <a href=\"tel://1234567920\">+ 1235 2355 98</a></p>\r\n          </div>\r\n          <div class=\"col-md-12 mb-3\">\r\n            <p><span>Email:</span> <a href=\"mailto:info@yoursite.com\">info@yoursite.com</a></p>\r\n          </div>\r\n<!--          <div class=\"col-md-12 mb-3\">-->\r\n<!--            <p><span>Website:</span> <a href=\"#\">yoursite.com</a></p>-->\r\n<!--          </div>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-6 \">\r\n        <form action=\"#\" class=\"contact-form\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your Name\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your Email\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"7\" class=\"form-control\" placeholder=\"Message\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"submit\" value=\"Send Message\" class=\"btn btn-primary py-3 px-5\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"custom-map\"><!-- app.component.html -->\r\n  <agm-map\r\n    [latitude]=\"latitude\"\r\n    [longitude]=\"longitude\"\r\n    [zoom]=\"zoom\">\r\n    <agm-marker\r\n      [latitude]=\"latitude\"\r\n      [longitude]=\"longitude\"></agm-marker>\r\n  </agm-map>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/custom/public/contact/contact-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/custom/public/contact/contact-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: routes, ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/custom/public/contact/contact.component.ts");




var routes = [{ path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] }];
var ContactRoutingModule = /** @class */ (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContactRoutingModule);
    return ContactRoutingModule;
}());



/***/ }),

/***/ "./src/app/custom/public/contact/contact.component.css":
/*!*************************************************************!*\
  !*** ./src/app/custom/public/contact/contact.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n  height: 400px;\r\n}\r\n\r\n.custom-map {\r\n  margin-bottom: 50px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tL3B1YmxpYy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjs7QUFFckIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20vcHVibGljL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLmN1c3RvbS1tYXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/custom/public/contact/contact.component.ts":
/*!************************************************************!*\
  !*** ./src/app/custom/public/contact/contact.component.ts ***!
  \************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.latitude = 35.8283141;
        this.longitude = 10.5478419;
        this.zoom = 8;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custom/public/contact/contact.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/custom/public/contact/contact.component.css")).default]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/custom/public/contact/contact.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/custom/public/contact/contact.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/custom/public/contact/contact-routing.module.ts");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.component */ "./src/app/custom/public/contact/contact.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");






var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _contact_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map