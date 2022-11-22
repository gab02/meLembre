(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 3169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 8369);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ 157);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/app */ 8119);








let AppComponent = class AppComponent {
    constructor(platform) {
        this.platform = platform;
        this.getAndValidate();
    }
    ngOnInit() {
    }
    getAndValidate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    present() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default().fire({
                heightAuto: false,
                title: 'Você tem certeza?',
                text: 'Você deseja mesmo sair da aplicação?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#00c1af',
                cancelButtonText: 'Não',
                cancelButtonColor: '#f1b080',
                confirmButtonText: 'Sim, Tenho certeza!',
            }).then((result) => {
                if (result.isConfirmed) {
                    _capacitor_app__WEBPACK_IMPORTED_MODULE_4__.App.exitApp();
                }
            });
        });
    }
    getStor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({
                key: 'FatherStorage',
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _home_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home-routing.module */ 2003);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.module */ 3467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7497);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _home_home_module__WEBPACK_IMPORTED_MODULE_1__.HomePageModule,
            _home_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
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
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 2937);
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/services/storage.service */ 1303);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 6794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ 6027);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 6455);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 6346);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 2765);
/* harmony import */ var mat_timepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mat-timepicker */ 3497);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 2872);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 2879);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 7551);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 3946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 495);





















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
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
            mat_timepicker__WEBPACK_IMPORTED_MODULE_16__.MatTimepickerModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage, _home_page__WEBPACK_IMPORTED_MODULE_2__.DialogContentExampleDialog, _home_page__WEBPACK_IMPORTED_MODULE_2__.InformationDialog],
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
/* harmony export */   "DialogContentExampleDialog": () => (/* binding */ DialogContentExampleDialog),
/* harmony export */   "HomePage": () => (/* binding */ HomePage),
/* harmony export */   "InformationDialog": () => (/* binding */ InformationDialog)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 1670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 8504);
/* harmony import */ var _modal_dialog_content_example_dialog_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/dialog-content-example-dialog.html?ngResource */ 6046);
/* harmony import */ var _modal_information_dialog_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/information-dialog.html?ngResource */ 7798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ 157);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 8546);
/* harmony import */ var _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor-community/admob */ 7283);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/push-notifications */ 9033);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/storage.service */ 1303);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 2879);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 6346);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 3946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/app */ 8119);
















/*import {
  ActionPerformed,
  LocalNotificationSchema,
} from '@capacitor/local-notifications';*/


let HomePage = class HomePage {
    constructor(alertCtrl, storageService, platform, dialog, loadingController, dateAdapter, router, localNotifications, datePipe, storage, toastController) {
        this.alertCtrl = alertCtrl;
        this.storageService = storageService;
        this.platform = platform;
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
        this.notifyList = [];
        this.clicado = false;
        this.visible = false;
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        this.newItem = {};
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        this.newNotify = {};
        this.minDate = new Date();
        _capacitor_app__WEBPACK_IMPORTED_MODULE_10__.App.addListener('backButton', ({ canGoBack }) => {
            console.log(canGoBack);
            if (canGoBack) {
                this.present();
            }
            else {
                this.present();
            }
        });
        this.loadItems();
        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.AdMob.initialize({
            requestTrackingAuthorization: true,
            initializeForTesting: false,
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // this.plt.backButton.subscribeWithPriority(10, () => {
            //   App.exitApp();
            // });
            this.dateAdapter.setLocale('pt');
            yield this.storage.create();
            this.banner();
            this.InitNotification();
        });
    }
    InitNotification() {
        console.log('Initializing HomePage');
        // Request permission to use push notifications
        // iOS will prompt user and return if they granted permission or not
        // Android will just grant without prompting
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.requestPermissions().then(result => {
            if (result.receive === 'granted') {
                // Register with Apple / Google to receive push via APNS/FCM
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.register();
            }
            else {
                // Show some error
            }
        });
        // On success, we should be able to receive notifications
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.addListener('registration', (token) => {
            alert('Push registration success, token: ' + token.value);
        });
        // Some issue with our setup and push will not work
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.addListener('registrationError', (error) => {
            alert('Error on registration: ' + JSON.stringify(error));
        });
        // Show us the notification payload if the app is open on our device
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.addListener('pushNotificationReceived', (notification) => {
            alert('Push received: ' + JSON.stringify(notification));
        });
        // Method called when tapping on a notification
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
            alert('Push action performed: ' + JSON.stringify(notification));
        });
    }
    present() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default().fire({
                heightAuto: false,
                title: 'Você tem certeza?',
                text: 'Você deseja mesmo sair da aplicação?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#00c1af',
                cancelButtonText: 'Não',
                cancelButtonColor: '#f1b080',
                confirmButtonText: 'Sim, Tenho certeza!',
            }).then((result) => {
                if (result.isConfirmed) {
                    _capacitor_app__WEBPACK_IMPORTED_MODULE_10__.App.exitApp();
                }
            });
        });
    }
    // CREATE
    addItem(data, afazer, tipoAtividade, semanalmente, hora) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const hor1 = this.datePipe.transform(hora, 'HH');
            const hor2 = this.datePipe.transform(hora, 'mm');
            const hor3 = this.datePipe.transform(hora, 'ss');
            const n1 = +hor1;
            const n2 = +hor2;
            const n3 = +hor3;
            const date = new Date(data);
            date.setHours(n1, n2, n3); // Set hours, minutes and seconds
            console.log(date);
            console.log(afazer);
            console.log(tipoAtividade);
            console.log(hora);
            console.log(data);
            this.newItem.modified = Date.now();
            this.newItem.id = Date.now();
            if (this.items === null) {
                this.storageService.addItem(this.newItem).then((item) => {
                    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                    this.newItem = {};
                    this.showToast('NOTIFICAÇÃO ADICIONADA COM SUCESSO!');
                    this.loadItems(); // Or add it to the array directly
                });
            }
            else {
                if (this.items.length % 5 == 0) {
                    _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.AdMob.addListener(_capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.InterstitialAdPluginEvents.Loaded, (info) => {
                        // Subscribe prepared interstitial
                    });
                    const options = {
                        adId: 'ca-app-pub-6905686321259168/5330423192',
                        isTesting: true
                        // npa: true
                    };
                    yield _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.AdMob.prepareInterstitial(options);
                    yield _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.AdMob.showInterstitial();
                }
                if (data === undefined ||
                    afazer === undefined ||
                    tipoAtividade === undefined ||
                    hora === undefined) {
                    this.openMsgModal('error', 'Insira corretamente os dados', '...');
                }
                else {
                    this.visible = false;
                    this.storageService.addItem(this.newItem).then((item) => {
                        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                        this.newItem = {};
                        this.showToast('NOTIFICAÇÃO ADICIONADA COM SUCESSO!');
                        this.scheduleNotification(date, afazer, tipoAtividade, semanalmente, hora);
                        this.loadItems(); // Or add it to the array directly
                    });
                }
            }
        });
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
        this.storageService.getNotify().then((data) => {
            this.notifyList = data;
            if (data === null) {
                this.openInformationDialog();
            }
        });
    }
    alert() {
        this.openMsgModal('error', 'Infelizmente você não tem permissões', '...');
    }
    openInformationDialog() {
        const dialogRef = this.dialog.open(InformationDialog, {
            width: '500px',
            height: '80%',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogContentExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === null || result === undefined || result === ' ') {
                return;
            }
            else {
                this.newNotify.nameNotify = result;
                this.storageService
                    .addNotify('nameNotify', this.newNotify)
                    .then((item) => {
                    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                    this.newItem = {};
                    this.showToast('TIPO DE LEMBRETE ADICIONADO COM SUCESSO!');
                    this.loadItems(); // Or add it to the array directly
                });
            }
        });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header,
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
            });
            toast.present();
        });
    }
    scheduleBasic() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let data = this.items[0].value;
            data = this.datePipe.transform(Date.now(), 'dd');
            /*await LocalNotifications.schedule({
              notifications: [
                {
                  title:
                    this.items[0].nome + ', Seu documento irá vencer no dia ' + data,
                  body: 'Venha conferir',
                  id: 1,
                  extra: {
                    data: 'Pass data to your handler',
                  },
                  iconColor: '#00ff00',
                },
              ],
            });*/
        });
    }
    scheduleNotification(data, afazer, tipoAtividade, semanalmente, hora) {
        if (semanalmente) {
            this.onlyWeeklyHourNotify(data, afazer, tipoAtividade);
        }
        else {
            this.instantNotify(data, afazer, tipoAtividade);
            // this.diaryHourNotify(data, afazer, tipoAtividade);
            this.sevenHourNotify(data, afazer, tipoAtividade);
            // this.midDayNotify(data, afazer, tipoAtividade);
            this.atHourNotify(data, afazer, tipoAtividade, hora);
        }
    }
    onlyWeeklyHourNotify(data, afazer, tipoAtividade) { }
    // diaryHourNotify(data, afazer, tipoAtividade) {}
    sevenHourNotify(data, afazer, tipoAtividade) {
        const date = new Date(data);
        date.setHours(7, 0, 0);
        console.log(new Date(date));
        this.localNotifications.schedule({
            id: 2,
            title: 'AVISO! SOBRE: ' + tipoAtividade,
            text: 'FALTA POUCO TEMPO PARA: ' + afazer,
            data: { mydata: 'Confira logo!' },
            trigger: { at: new Date(date) },
        });
    }
    // midDayNotify(data, afazer, tipoAtividade) {
    //   const date = new Date(data);
    //   date.setHours(12, 0, 0); // Set hours, minutes and seconds
    //   console.log(new Date(date));
    //   this.localNotifications.schedule({
    //     id: 2,
    //     title: 'VOCÊ PEDIU, TE LEMBRAMOS!',
    //     text: 'CHEGOU O MOMENTO PARA: ' + afazer,
    //     data: { mydata: 'Confira logo!' },
    //     trigger: { at: new Date(date) },
    //   });
    // }
    atHourNotify(data, afazer, tipoAtividade, hora) {
        this.localNotifications.schedule({
            id: 2,
            title: 'VOCÊ PEDIU, TE LEMBRAMOS!',
            text: 'CHEGOU O MOMENTO PARA: ' + afazer,
            data: { mydata: 'Confira logo!' },
            trigger: { at: data },
        });
    }
    instantNotify(data, afazer, tipoAtividade) {
        this.localNotifications.schedule({
            id: 1,
            title: 'IREMOS TE INFORMAR SOBRE: ' + tipoAtividade + ' NÃO SE PREOCUPE!',
            text: 'NÓS CUIDAREMOS DE TE LEMBRAR ISTO!',
            trigger: { at: new Date(new Date().getTime() + 5 * 1000) },
        });
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
    banner() {
        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.AdMob.addListener(_capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.BannerAdPluginEvents.Loaded, () => {
            // Subscribe Banner Event Listener
        });
        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.AdMob.addListener(_capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.BannerAdPluginEvents.SizeChanged, (size) => {
            // Subscribe Change Banner Size
        });
        const options = {
            adId: 'ca-app-pub-6905686321259168/3602267962',
            //adId: 'ca-app-pub-3940256099942544/6300978111',
            adSize: _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.BannerAdSize.ADAPTIVE_BANNER,
            position: _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.BannerAdPosition.BOTTOM_CENTER,
            margin: 0,
            isTesting: true
            // npa: true
        };
        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.AdMob.showBanner(options);
    }
    openMsgModal(type, title, text) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default().fire({
            heightAuto: false,
            title: title,
            text: text,
            icon: type,
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.DateAdapter },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__.LocalNotifications },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController }
];
HomePage.propDecorators = {
    mylist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: ['mylist', { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);

;
let DialogContentExampleDialog = class DialogContentExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
};
DialogContentExampleDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA,] }] }
];
DialogContentExampleDialog = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'dialog-content-example-dialog',
        template: _modal_dialog_content_example_dialog_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
    })
], DialogContentExampleDialog);

let InformationDialog = class InformationDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
};
InformationDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA,] }] }
];
InformationDialog = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'information-dialog',
        template: _modal_information_dialog_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
    })
], InformationDialog);



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
    addNotify(key, data) {
        return this.storage.get(key).then((notify) => {
            if (notify) {
                notify.push(data);
                this.storage.set(key, notify);
            }
            else {
                this.storage.set(key, [data]);
            }
        });
    }
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
    getNotify() {
        return this.storage.get('nameNotify');
    }
    // READ
    getItems() {
        try {
            return this.storage.get(ITEMS_KEY);
        }
        catch (error) {
            this.storage.create();
            return this.storage.get(ITEMS_KEY);
        }
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
module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n.new-background-color {\n  --background: var(--ion-color-primary);\n  border-bottom-left-radius: 40px;\n  border-bottom-right-radius: 40px;\n  text-align: center;\n  color: #fff;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  justify-content: center;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTW9iaWxlJTIwRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvRG9jdW1lbnRzL2FwcGxpY2F0aW9ucy9tZUxlbWJyZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBRElBO0VBQ0Usc0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDREY7O0FER0E7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNBRDs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtBQ0RGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLnZsIHtcblxufVxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmZsZXgtY29udGFpbmVye1xuIGRpc3BsYXk6IGZsZXg7XG4gZmxleC13cmFwOiB3cmFwO1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0MHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

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
module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title>\n      ME LEMBRE! </ion-title>\n  </ion-toolbar>\n  <!-- Documento Inserido -->\n  <div style=\"padding: 1em;\">\n    <mat-card>\n      <div (click)=\"openInformationDialog()\">\n      <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </div>\n      <ion-row>\n      <ion-col size=\"10\">\n<mat-form-field style=\"width: 100%;\">\n  <mat-label>Selecione o tipo de lembrete</mat-label>\n  <mat-select   [(ngModel)]=\"newItem.nomeDocumento\" name=\"Qual Lembrete?\" >\n    <mat-option *ngFor=\"let doc of notifyList\" (click)=\"newItem.nomeDocumento !== undefined||null ? visible = true: visible = false; \" value=\"{{doc.nameNotify}}\">\n      {{doc.nameNotify}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n      </ion-col>\n      <ion-col>\n        <ion-fab (click)=\"openDialog()\">\n          <ion-fab-button size=\"small\">\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n          </ion-fab>\n      </ion-col>\n      </ion-row>\n<div *ngIf=\"visible\" >\n    <ion-row>\n      <ion-col size=\" 12\">\n        <mat-form-field style=\"width: 100%;\">\n          <mat-label>A fazer:</mat-label>\n          <input [(ngModel)]=\"newItem.nome\" matInput required>\n        </mat-form-field>\n      </ion-col>\n    </ion-row>\n\n    <br>\n        <!-- <ion-row>\n          <ion-col size=\" 12\">\n  <ion-item style=\"background-color: white;\">\n    <ion-label>Repetir semanalmente?</ion-label>\n    <ion-toggle slot=\"end\"[(ngModel)]=\"newItem.weekly\" [checked]=\"false\"></ion-toggle>\n  </ion-item>          </ion-col>\n        </ion-row> -->\n\n\n    <ion-row>\n      <ion-col size=\"12\">\n    <mat-form-field style=\"width: 100%;\">\n      <mat-label>Selecione a data</mat-label>\n      <input matInput [(ngModel)]=\"newItem.value\"  [min]=\"minDate\" readonly=\"true\" [matDatepicker]=\"picker\" required>\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker showSeconds stepHour stepMinute  touchUi #picker></mat-datepicker>\n    </mat-form-field>\n    </ion-col>\n\n    </ion-row>\n    <br>\n    <ion-row>\n    <ion-col>\n    <div>\n      <mat-form-field style=\"width: 100%;\">\n        <mat-label>Qual horário?</mat-label>\n        <input matTimepicker #t1=\"matTimepicker\" #time1=\"ngModel\" [(ngModel)]=\"newItem.hour\"  [minDate]=\"minValue\" [maxDate]=\"maxValue\"\n          id=\"timepicker-example-1\" mode=\"24h\"  placeholder=\"Please select time...\" name=\"time-1\" required>\n        <mat-icon matSuffix (click)=\"t1.showDialog()\">access_time</mat-icon>\n        <mat-error *ngIf=\"time1.touched && time1.invalid\">Invalid Date</mat-error>\n      </mat-form-field>\n    </div>\n    </ion-col>\n    </ion-row>\n\n</div>\n  </mat-card>\n<br>\n    <div class=\"flex-container\" *ngIf=\"visible\" >\n      <button mat-raised-button\n        style=\"background-color: #3171e0; color: #fff; width: 80%; height: 50px; border-radius: 10px;\"\n        (click)=\"addItem(newItem.value,newItem.nome,newItem.nomeDocumento,newItem.weekly,newItem.hour); clicado = true; \">ADICIONAR LEMBRETE</button>\n    </div>\n    <!-- <ion-button expand=\" full\" (click)=\"addItem()\">Add Item!</ion-button> -->\n\n    <BR>\n    <!-- <div *ngIf=\"items.length !== 0\">\n      <h3 class=\"flex-container\">\n        MEUS DOCUMENTOS\n      </h3> -->\n    <mat-accordion *ngFor=\"let item of items\">\n      <mat-expansion-panel style=\"border-left: 6px solid #3171e0;\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{item.nome}}\n          </mat-panel-title>\n\n        </mat-expansion-panel-header>\n        <mat-card style=\"padding: 1em ;border-right: 6px solid #3171e0;\">\n          <h3> <b>Tipo de lembrete:</b> {{item.nomeDocumento}}\n          </h3>\n          <h3> <b>Validade:</b> {{item.value | date:'dd/MM/yyyy'}}\n          </h3>\n          <br>\n          <div class=\"flex-container\">\n            <button mat-raised-button color=\"warn\" style=\"width: 80%;\" (click)=\"deleteItem(item)\">\n              EXCLUIR</button>\n          </div>\n        </mat-card>\n      </mat-expansion-panel>\n      <br>\n\n    </mat-accordion>\n    <!-- </div> -->\n\n\n\n    <br><br>\n    <br>\n    <img src=\"../../assets/icon.png\">\n\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 6046:
/*!**************************************************************************!*\
  !*** ./src/app/home/modal/dialog-content-example-dialog.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row>\n  <ion-col size=\" 12\">\n    <mat-form-field style=\"width: 100%;\">\n      <mat-label>Escreva o tipo do lembrete:</mat-label>\n      <input matInput [(ngModel)]=\"data.name\">\n    </mat-form-field>\n  </ion-col>\n</ion-row>\n  <div class=\"flex-container\">\n    <button mat-raised-button\n     [mat-dialog-close]=\"data.name\" style=\"background-color: #3171e0; color: #fff; width: 100%; height: 50px; border-radius: 10px;\"\n      >ADICIONAR LEMBRETE</button>\n  </div>\n";

/***/ }),

/***/ 7798:
/*!***************************************************************!*\
  !*** ./src/app/home/modal/information-dialog.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <mat-card>\n        <div style=\"display: flex;\n                  flex-wrap: wrap;\n\n                  text-align: center;\n                  justify-content: center;\">\n <h3>Grupo de notificações</h3></div>\n        <ion-fab-button disabled=\"true\" size=\"small\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    <br>\n<div class=\"container\">\n      <h4>Clique neste botão para adicionar um grupo para notificações exemplo: Documentos, Atividades do trabalho e etc</h4>\n</div>\n    </mat-card>\n\n<!-- <ion-row>\n  <ion-col size=\"2\">\n\n    </ion-col>\n    <ion-col size=\"1\">\n      <div style=\"display: flex;\n flex-wrap: wrap;\n text-align: center;\n justify-content: center;\">\n      <div style=\"border-left: 2px solid rgb(31, 240, 236);\n  height: 50px;\"></div>\n  </div>\n</ion-col>\n    <ion-col size=\"9\">\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat atque facilis eveniet nemo inventore nulla nostrum repudiandae, ullam eligendi, debitis porro voluptate commodi. Accusantium in eligendi repudiandae, quae autem sapiente.\n    </ion-col>\n</ion-row> -->\n</div>\n<hr style=\"width: 300px;border-left: 10px solid rgb(0, 14, 14);\" />\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map