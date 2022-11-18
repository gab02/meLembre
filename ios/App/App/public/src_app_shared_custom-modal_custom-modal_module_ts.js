"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shared_custom-modal_custom-modal_module_ts"],{

/***/ 9811:
/*!********************************************************************!*\
  !*** ./src/app/shared/custom-modal/custom-modal-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomModalPageRoutingModule": () => (/* binding */ CustomModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _custom_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-modal.page */ 1210);




const routes = [
    {
        path: '',
        component: _custom_modal_page__WEBPACK_IMPORTED_MODULE_0__.CustomModalPage
    }
];
let CustomModalPageRoutingModule = class CustomModalPageRoutingModule {
};
CustomModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomModalPageRoutingModule);



/***/ }),

/***/ 6945:
/*!************************************************************!*\
  !*** ./src/app/shared/custom-modal/custom-modal.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomModalPageModule": () => (/* binding */ CustomModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _custom_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-modal-routing.module */ 9811);
/* harmony import */ var _custom_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-modal.page */ 1210);







let CustomModalPageModule = class CustomModalPageModule {
};
CustomModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _custom_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomModalPageRoutingModule
        ],
        declarations: [_custom_modal_page__WEBPACK_IMPORTED_MODULE_1__.CustomModalPage],
        entryComponents: [_custom_modal_page__WEBPACK_IMPORTED_MODULE_1__.CustomModalPage],
    })
], CustomModalPageModule);



/***/ }),

/***/ 1210:
/*!**********************************************************!*\
  !*** ./src/app/shared/custom-modal/custom-modal.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomModalPage": () => (/* binding */ CustomModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _custom_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-modal.page.html?ngResource */ 8538);
/* harmony import */ var _custom_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-modal.page.scss?ngResource */ 2607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 6346);





let CustomModalPage = class CustomModalPage {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        this.type = this.data.type;
        this.title = this.data.title;
        this.text = this.data.text;
    }
    back() { }
    close() {
        this.dialogRef.close();
    }
};
CustomModalPage.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA,] }] }
];
CustomModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-custom-modal',
        template: _custom_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_custom_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomModalPage);



/***/ }),

/***/ 2607:
/*!***********************************************************************!*\
  !*** ./src/app/shared/custom-modal/custom-modal.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

<<<<<<< HEAD
module.exports = "body {\n  background: rgba(0, 0, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1tb2RhbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Nb2JpbGUlMjBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Eb2N1bWVudHMvYXBwbGljYXRpb25zL21lTGVtYnJlL3NyYy9hcHAvc2hhcmVkL2N1c3RvbS1tb2RhbC9jdXN0b20tbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSiIsImZpbGUiOiJjdXN0b20tbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbiIsImJvZHkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xufSJdfQ== */";
=======
module.exports = "body {\n  background: rgba(0, 0, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKIiwiZmlsZSI6ImN1c3RvbS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuIl19 */";
>>>>>>> 83c9b53 (Sync)

/***/ }),

/***/ 8538:
/*!***********************************************************************!*\
  !*** ./src/app/shared/custom-modal/custom-modal.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <ion-card class=\"main-border\">\n    <ion-card-header color=\"primary\" class=\"text-center\"\n      [ngClass]=\"{'ion-color-primary': type === 'success' || type === null, 'ion-color-warning': type === 'warning' || type === null, 'ion-color-danger': type === 'error'}\">\n      <i class=\"fas fa-3x\"\n        [ngClass]=\"{'fa-check-circle': type === 'success' || type === null, 'fa-times-circle': type === 'error', 'fa-exclamation-circle': type === 'warning' }\"></i>\n    </ion-card-header>\n\n    <ion-card-content>\n      <div class=\"pt-4 text-center\">\n        <h2 class=\"text-large\"><strong>{{title}}</strong></h2>\n        <p>\n          {{text}}\n        </p>\n      </div>\n      <hr>\n      <div class=\"text-center\">\n        <div clsas=\"text-large\" (click)=\"close()\">Ok</div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_shared_custom-modal_custom-modal_module_ts.js.map