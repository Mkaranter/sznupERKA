webpackJsonp([4],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpForestPageModule", function() { return HelpForestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_forest__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpForestPageModule = (function () {
    function HelpForestPageModule() {
    }
    return HelpForestPageModule;
}());
HelpForestPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__help_forest__["a" /* HelpForestPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help_forest__["a" /* HelpForestPage */]),
        ],
    })
], HelpForestPageModule);

//# sourceMappingURL=help-forest.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpForestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_animal_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HelpForestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpForestPage = (function () {
    function HelpForestPage(navCtrl, navParams, AnimalService, AppService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AnimalService = AnimalService;
        this.AppService = AppService;
        console.log(this.AppService.type);
    }
    HelpForestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpForestPage');
    };
    HelpForestPage.prototype.getAnimals = function () {
        var _this = this;
        this.AnimalService.getAnimals().then(function (animals) { return _this.animals = animals; });
    };
    HelpForestPage.prototype.ngOnInit = function () {
        this.getAnimals();
    };
    return HelpForestPage;
}());
HelpForestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-help-forest',template:/*ion-inline-start:"/Users/michalkaranter/GitHub/sznupERKA/src/pages/help-forest/help-forest.html"*/'<!--\n  Generated template for the HelpForestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>help-forest</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <ion-list *ngFor="let animal of animals">\n        <ion-item *ngIf="animal.type == AppService.type">\n          <ion-thumbnail item-start>\n            <img src="img/thumbnail-totoro.png" alt="thmub">\n          </ion-thumbnail>\n          <h2>{{animal.id}}</h2>\n          <p>{{animal.type}} {{animal.desc}}</p>\n          <button ion-button clear item-end>View</button>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/michalkaranter/GitHub/sznupERKA/src/pages/help-forest/help-forest.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_animal_service__["a" /* AnimalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_animal_service__["a" /* AnimalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */]) === "function" && _d || Object])
], HelpForestPage);

var _a, _b, _c, _d;
//# sourceMappingURL=help-forest.js.map

/***/ })

});
//# sourceMappingURL=4.js.map