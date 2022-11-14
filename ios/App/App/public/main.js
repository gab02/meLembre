(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 683:
/*!*************************************************************!*\
  !*** ./src/app/add-document/add-document-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDocumentPageRoutingModule": () => (/* binding */ AddDocumentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _add_document_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-document.page */ 7327);




const routes = [
    {
        path: '',
        component: _add_document_page__WEBPACK_IMPORTED_MODULE_0__.AddDocumentPage
    }
];
let AddDocumentPageRoutingModule = class AddDocumentPageRoutingModule {
};
AddDocumentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddDocumentPageRoutingModule);



/***/ }),

/***/ 5783:
/*!*****************************************************!*\
  !*** ./src/app/add-document/add-document.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDocumentPageModule": () => (/* binding */ AddDocumentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 2872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _add_document_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-document-routing.module */ 683);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 7551);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 6794);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 2937);
/* harmony import */ var _add_document_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-document.page */ 7327);











let AddDocumentPageModule = class AddDocumentPageModule {
};
AddDocumentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _add_document_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddDocumentPageRoutingModule,
        ],
        declarations: [_add_document_page__WEBPACK_IMPORTED_MODULE_1__.AddDocumentPage],
    })
], AddDocumentPageModule);



/***/ }),

/***/ 7327:
/*!***************************************************!*\
  !*** ./src/app/add-document/add-document.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDocumentPage": () => (/* binding */ AddDocumentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _add_document_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-document.page.html?ngResource */ 4132);
/* harmony import */ var _add_document_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-document.page.scss?ngResource */ 1369);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _home_model_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/model/document */ 1250);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 8369);








let AddDocumentPage = class AddDocumentPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.arrayValue = [];
    }
    ngOnInit() { }
    navigate(local, documento, validade) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.setStorage(documento, validade);
            this.router.navigate([local]);
        });
    }
    setStorage(documento, validade) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const entity = new _home_model_document__WEBPACK_IMPORTED_MODULE_2__.DocumentoStorage();
            entity.nomeDocumento = documento;
            entity.validade = validade;
            //Buscar Para Adicionar
            const resFather = _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'father' });
            const data1 = JSON.parse((yield resFather).value);
            console.log(data1);
            if (data1 === null) {
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'father',
                    value: JSON.stringify(entity),
                });
            }
            else {
                const objArr = []; //Array final
                // ForEach(data1, (idx, obj) => {
                //   objArr.push([obj.nomeDocumento, obj.validade]);
                // });
                // ForEach(entity, (idx, obj) => {
                //   objArr.push([entity.nomeDocumento, entity.validade]);
                // });
                // this.people.push(new data1());
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'father',
                    value: JSON.stringify(objArr),
                });
            }
            console.log(data1);
            // this.setFatherStorage(documento);
        });
    }
    setFatherStorage(documento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const res = _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: documento });
            const resFather = _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'father' });
            const data = JSON.parse((yield res).value);
            const data1 = JSON.parse((yield resFather).value);
            if (!data1) {
                this.arrayValue.push(data);
                console.log(this.arrayValue);
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'father',
                    value: JSON.stringify(this.arrayValue),
                });
            }
            else {
                this.arrayValue.push(data);
                this.arrayValue.push(data1[0]);
                console.log(this.arrayValue);
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'father',
                    value: JSON.stringify(this.arrayValue),
                });
            }
        });
    }
};
AddDocumentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
AddDocumentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-document',
        template: _add_document_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_document_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddDocumentPage);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);



const routes = [
    {
        path: 'splash',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_splash_splash_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./splash/splash.module */ 9623)).then((m) => m.SplashPageModule),
    },
    {
        path: 'home',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then((m) => m.HomePageModule),
    },
    {
        path: '',
        redirectTo: 'splash',
        pathMatch: 'full',
    },
    {
        path: 'custom-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_shared_custom-modal_custom-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shared/custom-modal/custom-modal.module */ 6945)).then((m) => m.CustomModalPageModule),
    },
    {
        path: 'add-document',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./add-document/add-document.module */ 5783)).then((m) => m.AddDocumentPageModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 3169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 8369);





let AppComponent = class AppComponent {
    // docs = [
    //   {
    //     id: '1',
    //     nomeDocumento: '',
    //     validade: '',
    //   },
    //   {
    //     id: '2',
    //     nomeDocumento: '',
    //     validade: '',
    //   },
    //   {
    //     id: '3',
    //     nomeDocumento: '',
    //     validade: '',
    //   },
    //   {
    //     id: '4',
    //     nomeDocumento: '',
    //     validade: '',
    //   },
    //   {
    //     id: '5',
    //     nomeDocumento: '',
    //     validade: '',
    //   },
    // ];
    constructor() {
        this.getAndValidate();
    }
    getAndValidate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // const store = await this.getStor();
            // const data = JSON.parse(store.value);
            // if (data[0].nomeDocumento === '') {
            //   await Storage.set({
            //     key: 'FatherStorage',
            //     value: JSON.stringify(this.docs),
            //   });
            // } else {
            //   return;
            // }
        });
    }
    getStor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({
                key: 'FatherStorage',
            });
        });
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _add_document_add_document_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-document/add-document.module */ 5783);
/* harmony import */ var _home_home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home-routing.module */ 2003);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.module */ 3467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7497);
/* harmony import */ var _add_document_add_document_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-document/add-document-routing.module */ 683);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomePageModule,
            _home_home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _add_document_add_document_module__WEBPACK_IMPORTED_MODULE_0__.AddDocumentPageModule,
            _add_document_add_document_routing_module__WEBPACK_IMPORTED_MODULE_5__.AddDocumentPageRoutingModule
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 8546);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 2937);
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/services/storage.service */ 1303);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 6794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ 6027);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 6455);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 6346);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 2872);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 2879);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 7551);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 3946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 495);



















let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatNativeDateModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__.MatExpansionModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage],
        providers: [_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService, _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_0__.LocalNotifications],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA],
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 1670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 8504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ 157);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 8546);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/storage.service */ 1303);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 2879);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 6346);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 3946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8143);













let HomePage = class HomePage {
    constructor(alertCtrl, storageService, plt, dialog, loadingController, dateAdapter, router, localNotifications, datePipe, storage, toastController) {
        this.alertCtrl = alertCtrl;
        this.storageService = storageService;
        this.plt = plt;
        this.dialog = dialog;
        this.loadingController = loadingController;
        this.dateAdapter = dateAdapter;
        this.router = router;
        this.localNotifications = localNotifications;
        this.datePipe = datePipe;
        this.storage = storage;
        this.toastController = toastController;
        this.items = [];
        this.documentsList = [];
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        this.newItem = {};
        this.plt.ready().then(() => {
            this.loadItems();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.documentsList = [
                { model: 'RG' },
                { model: 'PASSAPORTE' },
                { model: 'CNH' },
                { model: 'CARTEIRA DE ESTUDANTE' },
                { model: 'CONTRATO DE ALUGUEL' },
                { model: 'CONTAS A VENCER' },
                { model: 'IPTU' },
                { model: 'IPVA' },
            ];
            this.dateAdapter.setLocale('pt');
            yield this.storage.create();
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            // Make sure we are allowed to send notifications!
            // await LocalNotifications.checkPermissions();
            // Register your custom action types
            // LocalNotifications.registerActionTypes({
            //   types: [
            //     {
            //       id: 'CHAT_MSG',
            //       actions: [
            //         {
            //           id: 'view',
            //           title: 'Open Chat',
            //         },
            //         {
            //           id: 'remove',
            //           title: 'Dismiss',
            //           destructive: true,
            //         },
            //         {
            //           id: 'respond',
            //           title: 'Respond',
            //           input: true,
            //         },
            //       ],
            //     },
            //   ],
            // });
            // // Received when notification is executed at the scheduled time
            // LocalNotifications.addListener(
            //   'localNotificationReceived',
            //   (notification: LocalNotificationSchema) => {
            //     this.presentAlert(
            //       `Received: ${notification.title}`,
            //       `Custom Data: ${JSON.stringify(notification.extra)}`
            //     );
            //   }
            // );
            // // Received when a special action button is clicked or notification is tapped
            // LocalNotifications.addListener(
            //   'localNotificationActionPerformed',
            //   (notification: ActionPerformed) => {
            //     this.presentAlert(
            //       `Performed: ${notification.actionId}`,
            //       `Input value: ${notification.inputValue}`
            //     );
            //   }
            // );
        });
    }
    // CREATE
    addItem() {
        this.newItem.modified = Date.now();
        this.newItem.id = Date.now();
        if (this.items === null) {
            this.storageService.addItem(this.newItem).then((item) => {
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                this.newItem = {};
                this.showToast('DOCUMENTO ADICIONADO COM SUCESSO!');
                this.loadItems(); // Or add it to the array directly
            });
        }
        else {
            if (this.items.length === 5) {
                this.openMsgModal('error', 'Não é possível inserir mais que 10 itens', '...');
            }
            else {
                if (this.newItem.nomeDocumento === undefined ||
                    this.newItem.value === undefined ||
                    this.newItem.nome === undefined) {
                    this.openMsgModal('error', 'Insira corretamente os dados', '...');
                }
                else {
                    this.storageService.addItem(this.newItem).then((item) => {
                        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                        this.newItem = {};
                        this.showToast('DOCUMENTO ADICIONADO COM SUCESSO!');
                        this.loadItems(); // Or add it to the array directly
                    });
                }
            }
        }
    }
    console() {
        console.log(this.items[0].nome);
    }
    navigate(local) {
        this.router.navigate([local]);
    }
    // READ
    loadItems() {
        this.storageService.getItems().then((items) => {
            this.items = items;
        });
    }
    alert() {
        this.openMsgModal('error', 'Infelizmente você não tem permissões', '...');
    }
    // UPDATE
    updateItem(item) {
        item.nomeDocumento = `UPDATED: ${item.nomeDocumento}`;
        item.modified = Date.now();
        // eslint-disable-next-line @typescript-eslint/no-shadow
        this.storageService.updateItem(item).then((item) => {
            this.showToast('Item updated!');
            this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
            this.loadItems(); // Or update it inside the array directly
        });
    }
    presentAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header,
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Validando...',
            });
            yield loading.present();
            this.router.navigate(['home']);
            setTimeout(() => {
                event.target.complete();
            }, 5000);
            yield loading.dismiss();
        });
    }
    // DELETE
    deleteItem(item) {
        this.storageService.deleteItem(item.id).then(() => {
            this.showToast('DOCUMENTO REMOVIDO COM SUCESSO!');
            this.doRefresh(event);
            this.loadItems(); // Or splice it from the array directly
        });
    }
    // Helper
    showToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
            });
            toast.present();
        });
    }
    scheduleNotification() {
        this.localNotifications.schedule({
            id: 1,
            title: 'Attention',
            text: 'Simons Notification',
            data: { mydata: 'My hidden message this is' },
            trigger: { in: 5, unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__.ELocalNotificationTriggerUnit.SECOND },
            foreground: true, // Show the notification while app is open
        });
        // Works as well!
        // this.localNotifications.schedule({
        //   id: 1,
        //   title: 'Attention',
        //   text: 'Simons Notification',
        //   data: { mydata: 'My hidden message this is' },
        //   trigger: { at: new Date(new Date().getTime() + 5 * 1000) }
        // });
    }
    // async scheduleAdvanced() {
    //   await LocalNotifications.schedule({
    //     notifications: [
    //       {
    //         title:
    //           this.items.length[0].nome +
    //           ' Seu documento irá vencer no dia ' +
    //           this.items.length[0].value,
    //         body: 'Venha conferir',
    //         id: 2,
    //         schedule: { at: new Date(Date.now() + 1000 * 3) },
    //         sound: 'fanfare.wav',
    //         smallIcon: 'ic_stat_ionic_logo', // Android only, overrides capacitor.config setting!
    //         attachments: [
    //           { id: 'face', url: 'res://public/assets/notif_image.jpg' },
    //         ],
    //       },
    //     ],
    //   });
    // }
    openMsgModal(type, title, text) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default().fire({
            heightAuto: false,
            title: title,
            text: text,
            icon: type,
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.DateAdapter },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__.LocalNotifications },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
HomePage.propDecorators = {
    mylist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['mylist', { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1250:
/*!****************************************!*\
  !*** ./src/app/home/model/document.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentoStorage": () => (/* binding */ DocumentoStorage)
/* harmony export */ });
class DocumentoStorage {
    constructor() { }
}


/***/ }),

/***/ 1303:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 2879);



const ITEMS_KEY = 'my-items';
let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
    }
    // CREATE
    addItem(item) {
        return this.storage.get(ITEMS_KEY).then((items) => {
            if (items) {
                items.push(item);
                return this.storage.set(ITEMS_KEY, items);
            }
            else {
                return this.storage.set(ITEMS_KEY, [item]);
            }
        });
    }
    // READ
    getItems() {
        return this.storage.get(ITEMS_KEY);
    }
    // UPDATE
    updateItem(item) {
        return this.storage.get(ITEMS_KEY).then((items) => {
            if (!items || items.length === 0) {
                return null;
            }
            const newItems = [];
            for (const i of items) {
                if (i.id === item.id) {
                    newItems.push(item);
                }
                else {
                    newItems.push(i);
                }
            }
            return this.storage.set(ITEMS_KEY, newItems);
        });
    }
    // DELETE
    deleteItem(id) {
        return this.storage.get(ITEMS_KEY).then((items) => {
            if (!items || items.length === 0) {
                return null;
            }
            const toKeep = [];
            for (const i of items) {
                if (i.id !== id) {
                    toKeep.push(i);
                }
            }
            return this.storage.set(ITEMS_KEY, toKeep);
        });
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], StorageService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4909);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		470,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		2725,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6149,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		1031,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		8310,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		1983,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		7039,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7945,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8714,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		1786,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4702,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		4094,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		1203,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		795,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		6976,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1417,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		8412,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4706,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		3459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3354,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		1025,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		2526,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2447,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4820,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3212,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		7557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8692,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3544,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		42,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		718,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		5981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		6488,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7937,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		942,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		816,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		9062,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		3466,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		8404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		953,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4254,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		6116,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		9781,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8323,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		376,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2072,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1369:
/*!****************************************************************!*\
  !*** ./src/app/add-document/add-document.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1kb2N1bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNGIiwiZmlsZSI6ImFkZC1kb2N1bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3169:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 8504:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n.new-background-color {\n  --background: var(--ion-color-primary);\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  text-align: center;\n  color: #fff;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  justify-content: center;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFFQTtFQUNFLHNDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBRUQ7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNDBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmZsZXgtY29udGFpbmVye1xyXG4gZGlzcGxheTogZmxleDtcclxuIGZsZXgtd3JhcDogd3JhcDtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4132:
/*!****************************************************************!*\
  !*** ./src/app/add-document/add-document.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div style=\"padding: 1em;\">\n    <mat-card style=\"padding: 1em;   border-left: 6px solid #00984A;\n\">\n      <ion-row>\n        <ion-col>\n          <mat-form-field style=\"width: 100%;\" appearance=\"fill\">\n            <mat-label>Nome do documento</mat-label>\n            <input [(ngModel)]=\"documento\" matInput>\n          </mat-form-field>\n        </ion-col>\n\n        <ion-col>\n          <mat-form-field style=\"width: 100%;\" appearance=\"fill\">\n            <mat-label>Data de validade</mat-label>\n            <input [(ngModel)]=\"validade\" matInput>\n          </mat-form-field>\n        </ion-col>\n\n        <button mat-stroked-button color=\"primary\" style=\"width: 100%;\"\n          (click)=\"navigate('', documento, validade)\">Adicionar\n          documento</button>\n      </ion-row>\n    </mat-card>\n  </div>\n\n</ion-content>\n";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-router-outlet></ion-router-outlet>\n";

/***/ }),

/***/ 1670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-title>\r\n      ME LEMBRE! </ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-button (click)=\"scheduleNotification()\" expand=\"block\" fill=\"clear\">\r\n    PQPPPPPPPPPPPPPPPPPPPPPPPP\r\n  </ion-button>\r\n\r\n\r\n\r\n  <!-- Documento Inserido -->\r\n  <div style=\"padding: 1em;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n\r\n        <ion-list>\r\n          <ion-item>\r\n            <ion-select [(ngModel)]=\"newItem.nomeDocumento\" placeholder=\"Documento\">\r\n              <ion-select-option *ngFor=\"let doc of documentsList\" value=\"{{doc.model}}\">{{doc.model}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n      </ion-row>\r\n          <ion-row>\r\n\r\n      <ion-col size=\" 12\">\r\n        <mat-form-field style=\"width: 100%;\">\r\n          <mat-label>Apelido:</mat-label>\r\n          <input [(ngModel)]=\"newItem.nome\" matInput>\r\n        </mat-form-field>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <br>\r\n    <mat-form-field style=\"width: 100%;\">\r\n      <mat-label>Selecione a data de vencimento</mat-label>\r\n      <input matInput [(ngModel)]=\"newItem.value\" [matDatepicker]=\"picker\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n    <br><br>\r\n\r\n    <div class=\"flex-container\">\r\n      <button mat-raised-button\r\n        style=\"background-color: #00984A; color: #fff; width: 80%; height: 50px; border-radius: 10px;\"\r\n        (click)=\"addItem()\">ADICIONAR DOCUMENTO</button>\r\n    </div>\r\n    <!-- <ion-button expand=\" full\" (click)=\"addItem()\">Add Item!</ion-button> -->\r\n\r\n    <BR>\r\n    <!-- <div *ngIf=\"items.length !== 0\">\r\n      <h3 class=\"flex-container\">\r\n        MEUS DOCUMENTOS\r\n      </h3> -->\r\n    <mat-accordion *ngFor=\"let item of items\">\r\n      <mat-expansion-panel style=\"border-left: 6px solid #00984A;\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            {{item.nome}}\r\n          </mat-panel-title>\r\n\r\n        </mat-expansion-panel-header>\r\n        <mat-card style=\"padding: 1em ;border-right: 6px solid #00984A;\">\r\n          <h3> <b>Tipo Documento:</b> {{item.nomeDocumento}}\r\n          </h3>\r\n          <h3> <b>Validade:</b> {{item.value | date:'dd/MM/yyyy'}}\r\n          </h3>\r\n          <br>\r\n          <div class=\"flex-container\">\r\n            <button mat-raised-button color=\"warn\" style=\"width: 80%;\" (click)=\"deleteItem(item)\">\r\n              EXCLUIR</button>\r\n          </div>\r\n        </mat-card>\r\n      </mat-expansion-panel>\r\n      <br>\r\n\r\n    </mat-accordion>\r\n    <!-- </div> -->\r\n\r\n\r\n\r\n    <br><br>\r\n    <br>\r\n    <img src=\"../../assets/icon.png\">\r\n\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map